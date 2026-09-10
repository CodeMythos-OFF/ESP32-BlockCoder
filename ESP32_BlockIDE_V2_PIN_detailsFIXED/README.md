# ESP32 Block IDE — V2

Major first-generation redesign of the ESP32 Block IDE.

### V2 changes
- Completely new application layout
- Vertical navigation rail
- Separate Blocks / C++ / Serial / Build views
- High-contrast dark Blockly toolbox
- Expanded ESP32 blocks
- GPIO, analog, PWM, timing, Serial and tone blocks
- Repeat / While / For / Forever
- If / Else and logic operators
- Variables, math, text and utility blocks
- Save / Open projects
- C++ preview and copy
- COM-port scanning
- Arduino CLI compile + USB upload
- Serial Monitor

### Run
```bat
pip install flask pyserial
python app.py
```
Then open `http://127.0.0.1:8000`.

Arduino CLI is configured to:
`F:\arduino-cli_1.5.2-rc.1_Windows_64bit\arduino-cli.exe`

Change `ARDUINO_CLI` in `app.py` if needed.

License: GNU General Public License v3.0.


V2 Generator Fixed3: fixes literal \\n characters in generated C++ and makes top-level/setup Forever blocks use Arduino loop() correctly.


## V2 highlights
- Major IDE UI refresh while preserving the stable V1 upload/serial architecture.
- Live block/output-pin statistics.
- Project modified/saved state.
- One-click `.ino` export.
- Duplicate selected block.
- Keyboard shortcuts: Ctrl+S, Ctrl+O, Ctrl+E.
- Build/upload status area.
- Quick ESP32 GPIO reference.
- V2 project file format.
