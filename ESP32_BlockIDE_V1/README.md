# ESP32 Block IDE — V1

Major first-generation redesign of the ESP32 Block IDE.

### V1 changes
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
