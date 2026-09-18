# ESP32-BlockCoder

> **A beginner-friendly visual programming IDE for ESP32 — build programs with blocks instead of writing C++ from scratch.**

ESP32-BlockCoder is designed to make ESP32 programming easier for beginners by providing a visual block-based interface for creating, generating, and uploading Arduino-compatible ESP32 programs.

## ✨ Features

- 🧩 **Blockly-based programming**
- ⚡ **ESP32 programming support**
- 🔌 **Serial port support**
- 📤 **Program compilation and upload**
- 🛠️ **Block-to-Arduino code generation**
- 🎨 **Beginner-friendly interface**
- 💻 **Local application**

## 🚀 Getting Started

### Requirements

- Python 3
- Flask
- PySerial
- Arduino CLI
- An ESP32 board and USB connection

### 1. Install dependencies

```bash
pip install flask pyserial
```

### 2. Configure Arduino CLI

Install Arduino CLI and set its executable path as required by the project.

### 3. Start ESP32-BlockCoder

```bash
python app.py
```

Then open the local address shown by the application in your browser.

## 🧩 How It Works

```text
Visual Blocks
     ↓
Block-to-code generation
     ↓
Arduino ESP32 sketch
     ↓
Arduino CLI compilation
     ↓
Upload to ESP32
```

The IDE lets beginners focus on program logic while the corresponding ESP32 code is generated automatically.

## 📌 Version History

### Version 1 — Stable

**Version 1 is the completed stable baseline** of ESP32-BlockCoder.

### Version 0.3.4

- Improved Blockly toolbox visibility.
- Changed the toolbox background to black for better visibility.

### Version 0.3.3

- Improved the interface for a more user-friendly experience.

### Version 0.3

- Added more programming functions.
- Included style and interface improvements.

> Versions 0.3.1 and 0.3.2 were omitted during development because of port-related issues. Development continued with versions 0.3.3 and 0.3.4.

### Version 0.2

An earlier version with a smaller set of functions.

### Version 0.1

The original stable version with limited functionality.

## 🔧 Development

ESP32-BlockCoder is an evolving project. Future versions may add more blocks, hardware features, and improvements.

If you find a bug, please report it through the repository's **Issues** section.

## 👥 Contributors

- **Mythos** — Project creator and developer
- **ChatGPT (GPT-5.6 Luna)** — AI development assistant; contributed to architecture, code generation, debugging, and feature development.

## 📜 License

This project is released under the **GNU General Public License v3.0**.

---

⭐ **If ESP32-BlockCoder is useful to you, consider starring the repository!**
