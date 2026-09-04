// ============================================================
// ESP32 BLOCK IDE
// VERSION 0.2
// Custom Blockly -> C++ generator
// ============================================================


// ============================================================
// BLOCK DEFINITIONS
// ============================================================

Blockly.defineBlocksWithJsonArray([

    // --------------------------------------------------------
    // START
    // --------------------------------------------------------

    {
        type: "esp_start",

        message0: "when ESP32 starts",

        message1: "%1",

        args1: [
            {
                type: "input_statement",
                name: "DO"
            }
        ],

        colour: 210,

        tooltip:
            "Runs once when the ESP32 starts."
    },


    // --------------------------------------------------------
    // GPIO WRITE
    // --------------------------------------------------------

    {
        type: "esp_gpio",

        message0:
            "set GPIO %1 to %2",

        args0: [

            {
                type: "field_number",

                name: "PIN",

                value: 2,

                min: 0,

                max: 39
            },

            {
                type: "field_dropdown",

                name: "STATE",

                options: [
                    ["HIGH", "HIGH"],
                    ["LOW", "LOW"]
                ]
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 210
    },


    // --------------------------------------------------------
    // DIGITAL READ
    // --------------------------------------------------------

    {
        type: "esp_gpio_read",

        message0:
            "read GPIO %1",

        args0: [

            {
                type: "field_number",

                name: "PIN",

                value: 4,

                min: 0,

                max: 39
            }

        ],

        output: "Number",

        colour: 210
    },


    // --------------------------------------------------------
    // ANALOG READ
    // --------------------------------------------------------

    {
        type: "esp_analog_read",

        message0:
            "read analog GPIO %1",

        args0: [

            {
                type: "field_number",

                name: "PIN",

                value: 34,

                min: 0,

                max: 39
            }

        ],

        output: "Number",

        colour: 210
    },


    // --------------------------------------------------------
    // PWM
    // --------------------------------------------------------

    {
        type: "esp_pwm",

        message0:
            "PWM GPIO %1 value %2",

        args0: [

            {
                type: "field_number",

                name: "PIN",

                value: 2,

                min: 0,

                max: 39
            },

            {
                type: "input_value",

                name: "VALUE"
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 210
    },


    // --------------------------------------------------------
    // DELAY
    // --------------------------------------------------------

    {
        type: "esp_delay",

        message0:
            "wait %1 milliseconds",

        args0: [

            {
                type: "input_value",

                name: "MS"
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 210
    },


    // --------------------------------------------------------
    // MILLIS
    // --------------------------------------------------------

    {
        type: "esp_millis",

        message0:
            "milliseconds since start",

        output: "Number",

        colour: 210
    },


    // --------------------------------------------------------
    // SERIAL PRINT
    // --------------------------------------------------------

    {
        type: "esp_serial_print",

        message0:
            "Serial print %1",

        args0: [

            {
                type: "input_value",

                name: "VALUE"
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 210
    },


    // --------------------------------------------------------
    // SERIAL PRINTLN
    // --------------------------------------------------------

    {
        type: "esp_serial_println",

        message0:
            "Serial println %1",

        args0: [

            {
                type: "input_value",

                name: "VALUE"
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 210
    },


    // ========================================================
    // LOOPS
    // ========================================================

    // --------------------------------------------------------
    // REPEAT
    // --------------------------------------------------------

    {
        type: "controls_repeat",

        message0:
            "repeat %1 times",

        args0: [

            {
                type: "input_value",

                name: "TIMES"
            }

        ],

        message1:
            "%1",

        args1: [

            {
                type: "input_statement",

                name: "DO"
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 285
    },


    // --------------------------------------------------------
    // WHILE
    // --------------------------------------------------------

    {
        type: "controls_while",

        message0:
            "while %1",

        args0: [

            {
                type: "input_value",

                name: "CONDITION"
            }

        ],

        message1:
            "%1",

        args1: [

            {
                type: "input_statement",

                name: "DO"
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 285
    },


    // --------------------------------------------------------
    // FOR
    // --------------------------------------------------------

    {
        type: "controls_for",

        message0:
            "count from %1 to %2 by %3",

        args0: [

            {
                type: "input_value",

                name: "FROM"
            },

            {
                type: "input_value",

                name: "TO"
            },

            {
                type: "input_value",

                name: "STEP"
            }

        ],

        message1:
            "%1",

        args1: [

            {
                type: "input_statement",

                name: "DO"
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 285
    },


    // --------------------------------------------------------
    // FOREVER
    // --------------------------------------------------------

    {
        type: "controls_forever",

        message0:
            "forever",

        message1:
            "%1",

        args1: [

            {
                type: "input_statement",

                name: "DO"
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 285
    },


    // ========================================================
    // LOGIC
    // ========================================================

    {
        type: "logic_compare",

        message0:
            "%1 %2 %3",

        args0: [

            {
                type: "input_value",
                name: "A"
            },

            {
                type: "field_dropdown",

                name: "OP",

                options: [
                    ["=", "EQ"],
                    ["≠", "NEQ"],
                    ["<", "LT"],
                    ["≤", "LTE"],
                    [">", "GT"],
                    ["≥", "GTE"]
                ]
            },

            {
                type: "input_value",
                name: "B"
            }

        ],

        output: "Boolean",

        colour: 45
    },


    {
        type: "logic_operation",

        message0:
            "%1 %2 %3",

        args0: [

            {
                type: "input_value",
                name: "A"
            },

            {
                type: "field_dropdown",

                name: "OP",

                options: [
                    ["AND", "AND"],
                    ["OR", "OR"]
                ]
            },

            {
                type: "input_value",
                name: "B"
            }

        ],

        output: "Boolean",

        colour: 45
    },


    {
        type: "logic_negate",

        message0:
            "NOT %1",

        args0: [

            {
                type: "input_value",
                name: "VALUE"
            }

        ],

        output: "Boolean",

        colour: 45
    },


    {
        type: "logic_boolean",

        message0:
            "%1",

        args0: [

            {
                type: "field_dropdown",

                name: "VALUE",

                options: [
                    ["TRUE", "true"],
                    ["FALSE", "false"]
                ]
            }

        ],

        output: "Boolean",

        colour: 45
    },


    // --------------------------------------------------------
    // IF
    // --------------------------------------------------------

    {
        type: "controls_if",

        message0:
            "if %1",

        args0: [

            {
                type: "input_value",
                name: "CONDITION"
            }

        ],

        message1:
            "%1",

        args1: [

            {
                type: "input_statement",
                name: "DO"
            }

        ],

        message2:
            "else",

        message3:
            "%1",

        args3: [

            {
                type: "input_statement",
                name: "ELSE"
            }

        ],

        previousStatement: null,

        nextStatement: null,

        colour: 45
    },


    // ========================================================
    // MATH
    // ========================================================

    {
        type: "math_number",

        message0:
            "%1",

        args0: [

            {
                type: "field_number",

                name: "NUM",

                value: 0
            }

        ],

        output: "Number",

        colour: 120
    },


    {
        type: "math_arithmetic",

        message0:
            "%1 %2 %3",

        args0: [

            {
                type: "input_value",
                name: "A"
            },

            {
                type: "field_dropdown",

                name: "OP",

                options: [
                    ["+", "ADD"],
                    ["−", "SUB"],
                    ["×", "MUL"],
                    ["÷", "DIV"]
                ]
            },

            {
                type: "input_value",
                name: "B"
            }

        ],

        output: "Number",

        colour: 120
    },


    {
        type: "math_modulo",

        message0:
            "%1 mod %2",

        args0: [

            {
                type: "input_value",
                name: "A"
            },

            {
                type: "input_value",
                name: "B"
            }

        ],

        output: "Number",

        colour: 120
    },


    {
        type: "math_random",

        message0:
            "random %1 to %2",

        args0: [

            {
                type: "input_value",
                name: "FROM"
            },

            {
                type: "input_value",
                name: "TO"
            }

        ],

        output: "Number",

        colour: 120
    },


    // ========================================================
    // TEXT
    // ========================================================

    {
        type: "text",

        message0:
            "\"%1\"",

        args0: [

            {
                type: "field_input",

                name: "TEXT",

                text: "Hello"
            }

        ],

        output: "String",

        colour: 330
    }

]);


// ============================================================
// WORKSPACE
// ============================================================

const workspace = Blockly.inject(

    "blocklyDiv",

    {

        toolbox:
            document.getElementById(
                "toolbox"
            ),

        trashcan: true,

        grid: {

            spacing: 20,

            length: 3,

            snap: true
        },

        zoom: {

            controls: true,

            wheel: true,

            startScale: 0.85,

            maxScale: 1.5,

            minScale: 0.5
        },

        move: {

            scrollbars: true,

            drag: true,

            wheel: true
        }
    }
);


// ============================================================
// HELPERS
// ============================================================

function valueCode(
    block,
    inputName,
    fallback
) {

    const child =
        block.getInputTargetBlock(
            inputName
        );


    if (!child) {
        return fallback;
    }


    return generateValue(
        child
    );
}


function statementCode(
    block,
    inputName
) {

    let code = "";

    let child =
        block.getInputTargetBlock(
            inputName
        );


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
// VALUE GENERATOR
// ============================================================

function generateValue(block) {

    if (!block) {
        return "0";
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


    // --------------------------------------------------------
    // TEXT
    // --------------------------------------------------------

    if (
        block.type ===
        "text"
    ) {

        const text =
            block.getFieldValue(
                "TEXT"
            );


        return (
            "String(" +
            JSON.stringify(text) +
            ")"
        );
    }


    // --------------------------------------------------------
    // DIGITAL READ
    // --------------------------------------------------------

    if (
        block.type ===
        "esp_gpio_read"
    ) {

        const pin =
            Number(
                block.getFieldValue(
                    "PIN"
                )
            );


        return (
            `digitalRead(${pin})`
        );
    }


    // --------------------------------------------------------
    // ANALOG READ
    // --------------------------------------------------------

    if (
        block.type ===
        "esp_analog_read"
    ) {

        const pin =
            Number(
                block.getFieldValue(
                    "PIN"
                )
            );


        return (
            `analogRead(${pin})`
        );
    }


    // --------------------------------------------------------
    // MILLIS
    // --------------------------------------------------------

    if (
        block.type ===
        "esp_millis"
    ) {

        return "millis()";
    }


    // --------------------------------------------------------
    // BOOLEAN
    // --------------------------------------------------------

    if (
        block.type ===
        "logic_boolean"
    ) {

        return block.getFieldValue(
            "VALUE"
        );
    }


    // --------------------------------------------------------
    // NEGATE
    // --------------------------------------------------------

    if (
        block.type ===
        "logic_negate"
    ) {

        const value =
            valueCode(
                block,
                "VALUE",
                "false"
            );


        return (
            `(!(${value}))`
        );
    }


    // --------------------------------------------------------
    // COMPARISON
    // --------------------------------------------------------

    if (
        block.type ===
        "logic_compare"
    ) {

        const operators = {

            EQ: "==",

            NEQ: "!=",

            LT: "<",

            LTE: "<=",

            GT: ">",

            GTE: ">="
        };


        const op =
            operators[
                block.getFieldValue(
                    "OP"
                )
            ];


        const a =
            valueCode(
                block,
                "A",
                "0"
            );


        const b =
            valueCode(
                block,
                "B",
                "0"
            );


        return (
            `(${a} ${op} ${b})`
        );
    }


    // --------------------------------------------------------
    // AND / OR
    // --------------------------------------------------------

    if (
        block.type ===
        "logic_operation"
    ) {

        const op =
            block.getFieldValue(
                "OP"
            ) === "AND"
                ? "&&"
                : "||";


        const a =
            valueCode(
                block,
                "A",
                "false"
            );


        const b =
            valueCode(
                block,
                "B",
                "false"
            );


        return (
            `(${a} ${op} ${b})`
        );
    }


    // --------------------------------------------------------
    // MATH
    // --------------------------------------------------------

    if (
        block.type ===
        "math_arithmetic"
    ) {

        const operators = {

            ADD: "+",

            SUB: "-",

            MUL: "*",

            DIV: "/"
        };


        const op =
            operators[
                block.getFieldValue(
                    "OP"
                )
            ];


        const a =
            valueCode(
                block,
                "A",
                "0"
            );


        const b =
            valueCode(
                block,
                "B",
                "0"
            );


        return (
            `(${a} ${op} ${b})`
        );
    }


    // --------------------------------------------------------
    // MODULO
    // --------------------------------------------------------

    if (
        block.type ===
        "math_modulo"
    ) {

        const a =
            valueCode(
                block,
                "A",
                "0"
            );


        const b =
            valueCode(
                block,
                "B",
                "1"
            );


        return (
            `(${a} % ${b})`
        );
    }


    // --------------------------------------------------------
    // RANDOM
    // --------------------------------------------------------

    if (
        block.type ===
        "math_random"
    ) {

        const from =
            valueCode(
                block,
                "FROM",
                "0"
            );


        const to =
            valueCode(
                block,
                "TO",
                "100"
            );


        return (
            `random(${from}, (${to}) + 1)`
        );
    }


    return "0";
}


// ============================================================
// STATEMENT GENERATOR
// ============================================================

function generateStatement(block) {

    if (!block) {
        return "";
    }


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
    // DELAY
    // --------------------------------------------------------

    if (
        block.type ===
        "esp_delay"
    ) {

        const ms =
            valueCode(
                block,
                "MS",
                "1000"
            );


        return (
            `  delay(${ms});\n`
        );
    }


    // --------------------------------------------------------
    // PWM
    // --------------------------------------------------------

    if (
        block.type ===
        "esp_pwm"
    ) {

        const pin =
            Number(
                block.getFieldValue(
                    "PIN"
                )
            );


        const value =
            valueCode(
                block,
                "VALUE",
                "0"
            );


        return (
            `  analogWrite(${pin}, constrain(${value}, 0, 255));\n`
        );
    }


    // --------------------------------------------------------
    // SERIAL PRINT
    // --------------------------------------------------------

    if (
        block.type ===
        "esp_serial_print"
    ) {

        const value =
            valueCode(
                block,
                "VALUE",
                '""'
            );


        return (
            `  Serial.print(${value});\n`
        );
    }


    // --------------------------------------------------------
    // SERIAL PRINTLN
    // --------------------------------------------------------

    if (
        block.type ===
        "esp_serial_println"
    ) {

        const value =
            valueCode(
                block,
                "VALUE",
                '""'
            );


        return (
            `  Serial.println(${value});\n`
        );
    }


    // --------------------------------------------------------
    // REPEAT
    // --------------------------------------------------------

    if (
        block.type ===
        "controls_repeat"
    ) {

        const times =
            valueCode(
                block,
                "TIMES",
                "10"
            );


        const body =
            statementCode(
                block,
                "DO"
            );


        const id =
            block.id.replace(
                /[^a-zA-Z0-9]/g,
                ""
            ).slice(
                0,
                5
            );


        const variable =
            "i" + id;


        return (
            `  for (int ${variable} = 0; ` +
            `${variable} < (${times}); ` +
            `${variable}++) {\n` +
            body +
            `  }\n`
        );
    }


    // --------------------------------------------------------
    // WHILE
    // --------------------------------------------------------

    if (
        block.type ===
        "controls_while"
    ) {

        const condition =
            valueCode(
                block,
                "CONDITION",
                "false"
            );


        const body =
            statementCode(
                block,
                "DO"
            );


        return (
            `  while (${condition}) {\n` +
            body +
            `  }\n`
        );
    }


    // --------------------------------------------------------
    // FOR
    // --------------------------------------------------------

    if (
        block.type ===
        "controls_for"
    ) {

        const from =
            valueCode(
                block,
                "FROM",
                "0"
            );


        const to =
            valueCode(
                block,
                "TO",
                "10"
            );


        const step =
            valueCode(
                block,
                "STEP",
                "1"
            );


        const body =
            statementCode(
                block,
                "DO"
            );


        const id =
            block.id.replace(
                /[^a-zA-Z0-9]/g,
                ""
            ).slice(
                0,
                5
            );


        const variable =
            "i" + id;


        return (
            `  for (int ${variable} = ${from}; ` +
            `${variable} <= ${to}; ` +
            `${variable} += ${step}) {\n` +
            body +
            `  }\n`
        );
    }


    // --------------------------------------------------------
    // FOREVER
    // --------------------------------------------------------

    if (
        block.type ===
        "controls_forever"
    ) {

        const body =
            statementCode(
                block,
                "DO"
            );


        return (
            `  while (true) {\n` +
            body +
            `  }\n`
        );
    }


    // --------------------------------------------------------
    // IF / ELSE
    // --------------------------------------------------------

    if (
        block.type ===
        "controls_if"
    ) {

        const condition =
            valueCode(
                block,
                "CONDITION",
                "false"
            );


        const body =
            statementCode(
                block,
                "DO"
            );


        const elseBody =
            statementCode(
                block,
                "ELSE"
            );


        let code =
            `  if (${condition}) {\n` +
            body +
            "  }";


        if (
            elseBody.trim()
        ) {

            code +=
                " else {\n" +
                elseBody +
                "  }";
        }


        return code + "\n";
    }


    return "";
}


// ============================================================
// GENERATE COMPLETE PROGRAM
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
                statementCode(
                    block,
                    "DO"
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
            "  Serial.begin(115200);\n";
    }


    // --------------------------------------------------------
    // FINAL PROGRAM
    // --------------------------------------------------------

    return `// ========================================================
// ESP32 Block IDE
// Version 0.2
// Generated C++
// ========================================================

void setup() {
${setupBody}}

void loop() {
${loopBody || "  // Add blocks here"}
}
`;
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
// PORT DETECTION
// ============================================================

async function refreshPorts() {

    const select =
        document.getElementById(
            "port"
        );


    const statusDot =
        document.getElementById(
            "statusDot"
        );


    const statusText =
        document.getElementById(
            "statusText"
        );


    select.innerHTML =
        `<option value="">
            Detecting ports...
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
                    No ESP32 found
                </option>`;


            statusDot.className =
                "status-dot disconnected";


            statusText.textContent =
                "No board";


            return;
        }


        select.innerHTML =
            `<option value="">
                Select port
            </option>`;


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


        statusDot.className =
            "status-dot connected";


        statusText.textContent =
            "Port ready";

    }

    catch (error) {

        console.error(error);


        statusDot.className =
            "status-dot disconnected";


        statusText.textContent =
            "Server offline";
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
            "Select the ESP32 COM port first."
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
        "⏳ COMPILING...\n\n" +
        "Board: ESP32 Classic\n" +
        "Port: " +
        port +
        "\n\n" +
        "Please wait.";


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
            "❌ CONNECTION ERROR\n\n" +
            error.toString();
    }
}


// ============================================================
// COPY CODE
// ============================================================

async function copyCode() {

    const code =
        generateCpp();


    try {

        await navigator.clipboard.writeText(
            code
        );


        const button =
            document.querySelector(
                ".copy-button"
            );


        const oldText =
            button.textContent;


        button.textContent =
            "Copied!";


        setTimeout(
            () => {
                button.textContent =
                    oldText;
            },
            1200
        );

    }

    catch {

        alert(
            "Could not copy code."
        );
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
// INITIALIZATION
// ============================================================

refreshPorts();

updateCode();

console.log(
    "ESP32 Block IDE v0.2 loaded."
);