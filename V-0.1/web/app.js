// ============================================================
// ESP32 BLOCK IDE - VERSION 0.1
// Custom Blockly -> C++ generator
// ============================================================


// ============================================================
// BLOCK DEFINITIONS
// ============================================================

Blockly.defineBlocksWithJsonArray([

    // --------------------------------------------------------
    // ESP32 START
    // --------------------------------------------------------

    {
        "type": "esp_start",

        "message0": "when ESP32 starts",

        "message1": "%1",

        "args1": [
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],

        "colour": 210,

        "tooltip":
            "Runs once when the ESP32 starts."
    },


    // --------------------------------------------------------
    // GPIO
    // --------------------------------------------------------

    {
        "type": "esp_gpio",

        "message0":
            "set GPIO %1 to %2",

        "args0": [

            {
                "type": "field_number",

                "name": "PIN",

                "value": 2,

                "min": 0,

                "max": 39
            },

            {
                "type": "field_dropdown",

                "name": "STATE",

                "options": [

                    [
                        "HIGH",
                        "HIGH"
                    ],

                    [
                        "LOW",
                        "LOW"
                    ]

                ]
            }

        ],

        "previousStatement": null,

        "nextStatement": null,

        "colour": 210,

        "tooltip":
            "Set an ESP32 GPIO HIGH or LOW."
    }

]);


// ============================================================
// BLOCKLY WORKSPACE
// ============================================================

const workspace = Blockly.inject(

    "blocklyDiv",

    {

        toolbox:
            document.getElementById(
                "toolbox"
            ),

        trashcan: true,

        scrollbars: true,

        grid: {

            spacing: 20,

            length: 3,

            snap: true
        },

        zoom: {

            controls: true,

            wheel: true,

            startScale: 0.9,

            maxScale: 1.5,

            minScale: 0.5
        }
    }
);


// ============================================================
// CUSTOM C++ GENERATOR
// ============================================================

function generateCpp() {

    let setupBody = "";

    let loopBody = "";


    const topBlocks =
        workspace.getTopBlocks(true);


    for (
        const block of topBlocks
    ) {

        if (
            block.type ===
            "esp_start"
        ) {

            setupBody +=
                generateStart(
                    block
                );

        }

        else {

            loopBody +=
                generateStatement(
                    block
                );
        }
    }


    // --------------------------------------------------------
    // DEFAULT SETUP
    // --------------------------------------------------------

    if (
        setupBody.trim() === ""
    ) {

        setupBody =
`  Serial.begin(115200);
`;
    }


    // --------------------------------------------------------
    // FINAL C++
    // --------------------------------------------------------

    const cpp =
`// ========================================================
// ESP32 Block IDE
// Version 0.1
// ========================================================

void setup() {
${setupBody}}

void loop() {
${loopBody || "  // No blocks in loop"}
}
`;


    return cpp;
}


// ============================================================
// START BLOCK
// ============================================================

function generateStart(block) {

    let code = "";


    let child =
        block
            .getInputTargetBlock("DO");


    while (child) {

        code +=
            generateStatement(
                child
            );

        child =
            child.nextConnection
                ? child.nextConnection.targetBlock()
                : null;
    }


    return code;
}


// ============================================================
// STATEMENT GENERATOR
// ============================================================

function generateStatement(block) {


    // --------------------------------------------------------
    // GPIO
    // --------------------------------------------------------

    if (
        block.type ===
        "esp_gpio"
    ) {

        const pin =
            Number(
                block.getFieldValue(
                    "PIN"
                )
            );


        const state =
            block.getFieldValue(
                "STATE"
            );


        return (
            `  pinMode(${pin}, OUTPUT);\n` +
            `  digitalWrite(${pin}, ${state});\n`
        );
    }


    // --------------------------------------------------------
    // NUMBER
    // --------------------------------------------------------

    if (
        block.type ===
        "math_number"
    ) {

        return String(
            block.getFieldValue(
                "NUM"
            )
        );
    }


    return "";
}


// ============================================================
// CODE PREVIEW
// ============================================================

function updateCode() {

    const code =
        generateCpp();


    document.getElementById(
        "code"
    ).textContent = code;
}


workspace.addChangeListener(
    updateCode
);


// ============================================================
// PORTS
// ============================================================

async function refreshPorts() {

    const select =
        document.getElementById(
            "port"
        );


    select.innerHTML =
        `<option>
            Detecting...
        </option>`;


    try {

        const response =
            await fetch(
                "/api/ports"
            );


        const ports =
            await response.json();


        select.innerHTML = "";


        if (
            ports.length === 0
        ) {

            select.innerHTML =
                `<option value="">
                    No ports found
                </option>`;

            return;
        }


        for (
            const port of ports
        ) {

            const option =
                document.createElement(
                    "option"
                );


            option.value =
                port.device;


            option.textContent =
                port.device +
                " — " +
                (
                    port.description ||
                    "Serial Port"
                );


            select.appendChild(
                option
            );
        }


        // Automatically select COM6

        const com6 =
            [...select.options]
                .find(
                    option =>
                        option.value ===
                        "COM6"
                );


        if (com6) {

            select.value =
                "COM6";
        }

    }

    catch (error) {

        select.innerHTML =
            `<option>
                Port detection failed
            </option>`;

        console.error(error);
    }
}


// ============================================================
// UPLOAD
// ============================================================

async function uploadProgram() {

    const port =
        document.getElementById(
            "port"
        ).value;


    if (!port) {

        alert(
            "Please select an ESP32 COM port."
        );

        return;
    }


    const code =
        generateCpp();


    showOutput();


    const output =
        document.getElementById(
            "output"
        );


    output.textContent =
        "⏳ Compiling...\n\n" +
        "Board: ESP32 Classic\n" +
        "Port: " +
        port +
        "\n\n" +
        "Please wait...";


    try {

        const response =
            await fetch(

                "/api/upload",

                {

                    method: "POST",

                    headers: {

                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({

                            code: code,

                            port: port
                        })
                }
            );


        const data =
            await response.json();


        if (
            data.ok
        ) {

            output.textContent =
                "✅ UPLOAD SUCCESSFUL\n\n" +
                data.output;

        }

        else {

            output.textContent =
                "❌ UPLOAD FAILED\n\n" +
                "Stage: " +
                data.stage +
                "\n\n" +
                data.error;
        }

    }

    catch (error) {

        output.textContent =
            "❌ SERVER ERROR\n\n" +
            error.toString();
    }
}


// ============================================================
// TABS
// ============================================================

function showCode() {

    document
        .getElementById("code")
        .classList.remove(
            "hidden"
        );


    document
        .getElementById("output")
        .classList.add(
            "hidden"
        );


    document
        .getElementById("codeTab")
        .classList.add(
            "active"
        );


    document
        .getElementById("outputTab")
        .classList.remove(
            "active"
        );
}


function showOutput() {

    document
        .getElementById("code")
        .classList.add(
            "hidden"
        );


    document
        .getElementById("output")
        .classList.remove(
            "hidden"
        );


    document
        .getElementById("codeTab")
        .classList.remove(
            "active"
        );


    document
        .getElementById("outputTab")
        .classList.add(
            "active"
        );
}


// ============================================================
// INITIALIZE
// ============================================================

refreshPorts();

updateCode();