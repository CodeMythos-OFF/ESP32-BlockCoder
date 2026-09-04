from flask import Flask, request, jsonify, send_from_directory
import os
import subprocess
import tempfile
import serial.tools.list_ports


# ============================================================
# CONFIGURATION
# ============================================================

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
WEB_DIR = os.path.join(BASE_DIR, "web")

ARDUINO_CLI = r"F:\arduino-cli_1.5.2-rc.1_Windows_64bit\arduino-cli.exe"

FQBN = "esp32:esp32:esp32"

DEFAULT_PORT = "COM6"


# ============================================================
# FLASK
# ============================================================

app = Flask(
    __name__,
    static_folder=WEB_DIR,
    static_url_path=""
)


# ============================================================
# HOME
# ============================================================

@app.route("/")
def index():
    return send_from_directory(
        WEB_DIR,
        "index.html"
    )


# ============================================================
# PORTS
# ============================================================

@app.route("/api/ports")
def get_ports():

    ports = []

    for port in serial.tools.list_ports.comports():

        ports.append({
            "device": port.device,
            "description": port.description or "",
            "manufacturer": port.manufacturer or ""
        })

    return jsonify(ports)


# ============================================================
# INFO
# ============================================================

@app.route("/api/info")
def info():

    return jsonify({
        "arduino_cli": ARDUINO_CLI,
        "arduino_cli_exists": os.path.exists(ARDUINO_CLI),
        "fqbn": FQBN,
        "board": "ESP32 Classic",
        "default_port": DEFAULT_PORT
    })


# ============================================================
# UPLOAD
# ============================================================

@app.route("/api/upload", methods=["POST"])
def upload():

    data = request.get_json()

    if not data:
        return jsonify({
            "ok": False,
            "stage": "request",
            "error": "No request data received."
        }), 400


    code = data.get("code", "").strip()

    port = data.get(
        "port",
        DEFAULT_PORT
    )


    if not code:

        return jsonify({
            "ok": False,
            "stage": "code",
            "error": "No C++ code was received."
        }), 400


    if not port:

        return jsonify({
            "ok": False,
            "stage": "port",
            "error": "No COM port selected."
        }), 400


    # --------------------------------------------------------
    # Arduino CLI
    # --------------------------------------------------------

    if not os.path.exists(ARDUINO_CLI):

        return jsonify({
            "ok": False,
            "stage": "arduino-cli",
            "error":
                "Arduino CLI was not found.\n\n"
                + ARDUINO_CLI
        }), 500


    # --------------------------------------------------------
    # Temporary Arduino project
    # --------------------------------------------------------

    try:

        with tempfile.TemporaryDirectory(
            prefix="ESP32BlockIDE_"
        ) as temp:

            sketch_name = "BlockProgram"

            sketch_dir = os.path.join(
                temp,
                sketch_name
            )

            os.makedirs(
                sketch_dir,
                exist_ok=True
            )


            ino_file = os.path.join(
                sketch_dir,
                sketch_name + ".ino"
            )


            with open(
                ino_file,
                "w",
                encoding="utf-8"
            ) as f:

                f.write(code)


            # =================================================
            # COMPILE
            # =================================================

            compile_command = [

                ARDUINO_CLI,

                "compile",

                "--fqbn",
                FQBN,

                sketch_dir
            ]


            compile_result = subprocess.run(

                compile_command,

                capture_output=True,

                text=True,

                encoding="utf-8",

                errors="replace",

                timeout=180
            )


            compile_output = (

                compile_result.stdout

                + "\n"

                + compile_result.stderr
            )


            if compile_result.returncode != 0:

                return jsonify({

                    "ok": False,

                    "stage": "compile",

                    "error": compile_output

                }), 400


            # =================================================
            # UPLOAD
            # =================================================

            upload_command = [

                ARDUINO_CLI,

                "upload",

                "-p",
                port,

                "--fqbn",
                FQBN,

                sketch_dir
            ]


            upload_result = subprocess.run(

                upload_command,

                capture_output=True,

                text=True,

                encoding="utf-8",

                errors="replace",

                timeout=180
            )


            upload_output = (

                upload_result.stdout

                + "\n"

                + upload_result.stderr
            )


            if upload_result.returncode != 0:

                return jsonify({

                    "ok": False,

                    "stage": "upload",

                    "error": upload_output

                }), 400


            # =================================================
            # SUCCESS
            # =================================================

            return jsonify({

                "ok": True,

                "stage": "complete",

                "message":
                    "Program uploaded successfully!",

                "output":
                    compile_output
                    + "\n"
                    + upload_output

            })


    except subprocess.TimeoutExpired:

        return jsonify({

            "ok": False,

            "stage": "timeout",

            "error":
                "Arduino CLI timed out."

        }), 500


    except Exception as e:

        return jsonify({

            "ok": False,

            "stage": "server",

            "error": str(e)

        }), 500


# ============================================================
# START
# ============================================================

if __name__ == "__main__":

    print()
    print("=" * 60)
    print("          ESP32 BLOCK IDE - VERSION 0.1")
    print("=" * 60)
    print()

    print("Board :", "ESP32 Classic")
    print("FQBN  :", FQBN)
    print("Port  :", DEFAULT_PORT)

    print()
    print("Arduino CLI:")
    print(ARDUINO_CLI)

    print()
    print(
        "Arduino CLI found:",
        os.path.exists(ARDUINO_CLI)
    )

    print()
    print("Open:")
    print("http://127.0.0.1:8000")

    print()
    print("=" * 60)

    app.run(
        host="127.0.0.1",
        port=8000,
        debug=False
    )