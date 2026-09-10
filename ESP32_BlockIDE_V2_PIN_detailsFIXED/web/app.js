const blocks=[
{type:"esp_repeat",message0:"repeat %1 times",args0:[{type:"input_value",name:"TIMES"}],message1:"%1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:285},
{type:"esp_for",message0:"for %1 from %2 to %3 by %4",args0:[{type:"field_variable",name:"VAR",variable:"i"},{type:"input_value",name:"FROM"},{type:"input_value",name:"TO"},{type:"input_value",name:"BY"}],message1:"%1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:285},
{type:"esp_if",message0:"if %1",args0:[{type:"input_value",name:"IF0"}],message1:"do %1",args1:[{type:"input_statement",name:"DO0"}],message2:"else %1",args2:[{type:"input_statement",name:"ELSE"}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_compare",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["=","EQ"],["≠","NEQ"],["<","LT"],["≤","LTE"],[">","GT"],[">=","GTE"]]},{type:"input_value",name:"B"}],output:"Boolean",colour:210},
{type:"esp_logic",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["AND","AND"],["OR","OR"]]},{type:"input_value",name:"B"}],output:"Boolean",colour:210},
{type:"esp_not",message0:"not %1",args0:[{type:"input_value",name:"BOOL"}],output:"Boolean",colour:210},
{type:"esp_boolean",message0:"%1",args0:[{type:"field_dropdown",name:"BOOL",options:[["true","TRUE"],["false","FALSE"]]}],output:"Boolean",colour:210},
{type:"esp_number",message0:"%1",args0:[{type:"field_number",name:"NUM",value:0}],output:"Number",colour:120},
{type:"esp_arithmetic",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["+","ADD"],["−","SUB"],["×","MUL"],["÷","DIV"]]},{type:"input_value",name:"B"}],output:"Number",colour:120},
{type:"esp_modulo",message0:"%1 mod %2",args0:[{type:"input_value",name:"A"},{type:"input_value",name:"B"}],output:"Number",colour:120},
{type:"esp_text",message0:"text %1",args0:[{type:"field_input",name:"TEXT",text:"hello"}],output:"String",colour:160},

{type:"esp_var_get",message0:"get %1",args0:[{type:"field_variable",name:"VAR",variable:"item"}],output:"Number",colour:330},
{type:"esp_var_set",message0:"set %1 to %2",args0:[{type:"field_variable",name:"VAR",variable:"item"},{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:330},
{type:"esp_var_change",message0:"change %1 by %2",args0:[{type:"field_variable",name:"VAR",variable:"item"},{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:330},


{type:"esp_start",message0:"when ESP32 starts",message1:"%1",args1:[{type:"input_statement",name:"DO"}],colour:210},
{type:"esp_pinmode",message0:"set pin %1 as %2",args0:[{type:"field_number",name:"PIN",value:2,min:0,max:39},{type:"field_dropdown",name:"MODE",options:[["OUTPUT","OUTPUT"],["INPUT","INPUT"],["INPUT_PULLUP","INPUT_PULLUP"]]}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_digital_write",message0:"digital write pin %1 → %2",args0:[{type:"field_number",name:"PIN",value:2,min:0,max:39},{type:"field_dropdown",name:"STATE",options:[["HIGH","HIGH"],["LOW","LOW"]]}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_digital_read",message0:"digital read pin %1",args0:[{type:"field_number",name:"PIN",value:4,min:0,max:39}],output:"Number",colour:210},
{type:"esp_analog_read",message0:"analog read pin %1",args0:[{type:"field_number",name:"PIN",value:34,min:0,max:39}],output:"Number",colour:210},
{type:"esp_analog_write",message0:"PWM / analog write pin %1 value %2",args0:[{type:"field_number",name:"PIN",value:2,min:0,max:39},{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_delay",message0:"wait %1 ms",args0:[{type:"input_value",name:"MS"}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_delay_us",message0:"wait %1 microseconds",args0:[{type:"input_value",name:"US"}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_millis",message0:"milliseconds since boot",output:"Number",colour:210},
{type:"esp_micros",message0:"microseconds since boot",output:"Number",colour:210},
{type:"esp_serial_begin",message0:"start Serial at %1 baud",args0:[{type:"input_value",name:"BAUD"}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_print",message0:"Serial.print %1",args0:[{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_println",message0:"Serial.println %1",args0:[{type:"input_value",name:"VALUE"}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_tone",message0:"tone pin %1 frequency %2 Hz for %3 ms",args0:[{type:"field_number",name:"PIN",value:2,min:0,max:39},{type:"input_value",name:"FREQ"},{type:"input_value",name:"DURATION"}],previousStatement:null,nextStatement:null,colour:210},
{type:"esp_map",message0:"map %1 from %2..%3 to %4..%5",args0:[{type:"input_value",name:"X"},{type:"input_value",name:"A"},{type:"input_value",name:"B"},{type:"input_value",name:"C"},{type:"input_value",name:"D"}],output:"Number",colour:210},
{type:"controls_while",message0:"while %1",args0:[{type:"input_value",name:"CONDITION"}],message1:"%1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:285},
{type:"controls_forever",message0:"forever",message1:"%1",args1:[{type:"input_statement",name:"DO"}],previousStatement:null,nextStatement:null,colour:285},
{type:"math_random",message0:"random %1 to %2",args0:[{type:"input_value",name:"FROM"},{type:"input_value",name:"TO"}],output:"Number",colour:120},
{type:"math_minmax",message0:"%1 %2 %3",args0:[{type:"input_value",name:"A"},{type:"field_dropdown",name:"OP",options:[["minimum","MIN"],["maximum","MAX"]]},{type:"input_value",name:"B"}],output:"Number",colour:120},
{type:"math_abs",message0:"absolute value of %1",args0:[{type:"input_value",name:"VALUE"}],output:"Number",colour:120},
{type:"esp_comment",message0:"comment: %1",args0:[{type:"field_input",name:"TEXT",text:"My code"}],previousStatement:null,nextStatement:null,colour:160},
{type:"esp_stop",message0:"stop program",previousStatement:null,nextStatement:null,colour:160}
];
Blockly.defineBlocksWithJsonArray(blocks);
const toolbox={kind:"categoryToolbox",contents:[
{kind:"category",name:"⚡ ESP32",colour:"#3b82f6",contents:["esp_start","esp_pinmode","esp_digital_write","esp_digital_read","esp_analog_read","esp_analog_write","esp_delay","esp_delay_us","esp_millis","esp_micros","esp_serial_begin","esp_print","esp_println","esp_tone","esp_map"].map(type=>({kind:"block",type}))},
{kind:"category",name:"🔁 Loops",colour:"#8b5cf6",contents:["esp_repeat","controls_while","esp_for","controls_forever"].map(type=>({kind:"block",type}))},
{kind:"category",name:"❓ Logic",colour:"#f59e0b",contents:["esp_if","esp_compare","esp_logic","esp_not","esp_boolean"].map(type=>({kind:"block",type}))},
{kind:"category",name:"🔢 Variables",colour:"#14b8a6",contents:["esp_var_get","esp_var_set","esp_var_change"].map(type=>({kind:"block",type}))},
{kind:"category",name:"➗ Math",colour:"#10b981",contents:["esp_number","esp_arithmetic","esp_modulo","math_random","math_minmax","math_abs"].map(type=>({kind:"block",type}))},
{kind:"category",name:"🔤 Text",colour:"#ec4899",contents:["esp_text"].map(type=>({kind:"block",type}))},
{kind:"category",name:"🧰 Utilities",colour:"#64748b",contents:["esp_comment","esp_stop"].map(type=>({kind:"block",type}))}
]};
console.log("ESP32 Block IDE V1: registered blocks =", Object.keys(Blockly.Blocks).length);
const workspace=Blockly.inject("blocklyDiv",{toolbox,trashcan:true,grid:{spacing:20,length:3,snap:true},zoom:{controls:false,wheel:true,startScale:.9,maxScale:1.6,minScale:.55},move:{scrollbars:true,drag:true,wheel:true}});
const vm=workspace.getVariableMap();
function safeName(n){let s=String(n||"variable").replace(/[^a-zA-Z0-9_]/g,"_");if(!/^[a-zA-Z_]/.test(s))s="_"+s;return s||"variable"}
function varName(b){const f=b.getField("VAR"),v=(f&&vm&&typeof vm.getVariableById==="function")?vm.getVariableById(f.getValue()):null;return safeName(v?v.name:(f?f.getText():"variable"))}
function inputVal(b,n,d="0"){const c=b.getInputTargetBlock(n);return c?genVal(c):d}
function statements(b,n){let out="",c=b.getInputTargetBlock(n);while(c){out+=genStm(c);c=c.nextConnection?c.nextConnection.targetBlock():null}return out}
function genVal(b){if(!b)return"0";switch(b.type){
case"esp_number":return String(b.getFieldValue("NUM"));case"esp_text":return JSON.stringify(b.getFieldValue("TEXT"));case"esp_var_get":return varName(b);case"esp_boolean":return b.getFieldValue("BOOL");
case"esp_digital_read":return`digitalRead(${Number(b.getFieldValue("PIN"))})`;case"esp_analog_read":return`analogRead(${Number(b.getFieldValue("PIN"))})`;case"esp_millis":return"millis()";case"esp_micros":return"micros()";
case"esp_not":return`(!(${inputVal(b,"BOOL","false")}))`;case"esp_compare":{let o={EQ:"==",NEQ:"!=",LT:"<",LTE:"<=",GT:">",GTE:">="}[b.getFieldValue("OP")];return`(${inputVal(b,"A")} ${o} ${inputVal(b,"B")})`}
case"esp_logic":return`(${inputVal(b,"A","false")} ${b.getFieldValue("OP")==="AND"?"&&":"||"} ${inputVal(b,"B","false")})`;
case"esp_arithmetic":{let o={ADD:"+",SUB:"-",MUL:"*",DIV:"/"}[b.getFieldValue("OP")];return`(${inputVal(b,"A")} ${o} ${inputVal(b,"B","1")})`}
case"esp_modulo":return`(${inputVal(b,"A")} % ${inputVal(b,"B","1")})`;case"math_random":return`random(${inputVal(b,"FROM","0")}, (${inputVal(b,"TO","100")}) + 1)`;
case"math_minmax":return`${b.getFieldValue("OP")==="MIN"?"min":"max"}(${inputVal(b,"A")}, ${inputVal(b,"B")})`;case"math_abs":return`abs(${inputVal(b,"VALUE")})`;
case"esp_map":return`map(${inputVal(b,"X")}, ${inputVal(b,"A")}, ${inputVal(b,"B")}, ${inputVal(b,"C")}, ${inputVal(b,"D")})`;default:return"0"}}
let setupLoopExtra="";
function isOutputOperation(b){return b&&(b.type==="esp_digital_write"||b.type==="esp_analog_write"||b.type==="esp_tone")}
function outputPin(b){return Number(b.getFieldValue("PIN"))}
function collectOutputPins(){const s=new Set();for(const b of workspace.getAllBlocks(false)){if(isOutputOperation(b)){const p=outputPin(b);if(Number.isInteger(p))s.add(p)}if(b.type==="esp_pinmode"&&b.getFieldValue("MODE")==="OUTPUT"){const p=outputPin(b);if(Number.isInteger(p))s.add(p)}}return[...s].sort((x,y)=>x-y)}
function statements(b,n,setupMode=false){let out="",c=b.getInputTargetBlock(n);while(c){if(setupMode&&c.type==="controls_forever")setupLoopExtra+=statements(c,"DO");else out+=genStm(c);c=c.nextConnection?c.nextConnection.targetBlock():null}return out}
function genStm(b){switch(b.type){
case"esp_pinmode":return`  pinMode(${Number(b.getFieldValue("PIN"))}, ${b.getFieldValue("MODE")});\n`;
case"esp_digital_write":return`  digitalWrite(${Number(b.getFieldValue("PIN"))}, ${b.getFieldValue("STATE")});\n`;
case"esp_analog_write":return`  analogWrite(${Number(b.getFieldValue("PIN"))}, constrain(${inputVal(b,"VALUE","0")}, 0, 255));\n`;
case"esp_delay":return`  delay(${inputVal(b,"MS","1000")});\n`;
case"esp_delay_us":return`  delayMicroseconds(${inputVal(b,"US","1000")});\n`;
case"esp_serial_begin":return`  Serial.begin(${inputVal(b,"BAUD","115200")});\n`;
case"esp_print":return`  Serial.print(${inputVal(b,"VALUE",'""')});\n`;
case"esp_println":return`  Serial.println(${inputVal(b,"VALUE",'""')});\n`;
case"esp_tone":return`  tone(${Number(b.getFieldValue("PIN"))}, ${inputVal(b,"FREQ","1000")}, ${inputVal(b,"DURATION","200")});\n`;
case"esp_var_set":return`  ${varName(b)} = ${inputVal(b,"VALUE","0")};\n`;
case"esp_var_change":return`  ${varName(b)} += ${inputVal(b,"VALUE","1")};\n`;
case"esp_repeat":{let x="loop_"+safeName(b.id).slice(0,7);return`  for (int ${x}=0; ${x}<(${inputVal(b,"TIMES","10")}); ${x}++) {\n${statements(b,"DO")}  }\n`}
case"controls_while":return`  while (${inputVal(b,"CONDITION","false")}) {\n${statements(b,"DO")}  }\n`;
case"esp_for":{let x=safeName(b.getFieldValue("VAR")||("i_"+b.id.slice(0,5)));return`  for (int ${x}=${inputVal(b,"FROM","0")}; ${x}<=${inputVal(b,"TO","10")}; ${x}+=${inputVal(b,"BY","1")}) {\n${statements(b,"DO")}  }\n`}
case"controls_forever":return`  while (true) {\n${statements(b,"DO")}  }\n`;
case"esp_if":{let q=`  if (${inputVal(b,"IF0","false")}) {\n${statements(b,"DO0")}  }`,e=statements(b,"ELSE");return q+(e.trim()?` else {\n${e}  }`:"")+"\n"}
case"esp_comment":return`  // ${b.getFieldValue("TEXT")}\n`;
case"esp_stop":return`  while (true) { delay(1000); }\n`;
default:return""}}
function validateOutputPins(){const bad=[];for(const b of workspace.getAllBlocks(false)){if(isOutputOperation(b)){const p=outputPin(b);if(p>=34&&p<=39)bad.push(`GPIO${p} is input-only and cannot be used as an output.`)}}return bad}
function generatedCode(){
    let setup="",loop="";
    setupLoopExtra="";
    for(const b of workspace.getTopBlocks(true)){
        if(b.type==="esp_start") setup+=statements(b,"DO",true);
        else if(b.type==="controls_forever") loop+=statements(b,"DO");
        else loop+=genStm(b);
    }

    const explicit=new Set(
        workspace.getAllBlocks(false)
        .filter(b=>b.type==="esp_pinmode"&&b.getFieldValue("MODE")==="OUTPUT")
        .map(b=>Number(b.getFieldValue("PIN")))
    );
    const autos=collectOutputPins().filter(p=>!explicit.has(p));
    const autoCode=autos.map(p=>"  pinMode("+p+", OUTPUT);\n").join("");
    loop+=setupLoopExtra;

    const vars=(vm&&typeof vm.getAllVariables==="function"
        ?vm.getAllVariables():[])
        .map(v=>"int "+safeName(v.name)+" = 0;\n").join("");

    const errs=validateOutputPins();
    const warn=errs.length
        ? "\n// BLOCK IDE ERROR:\n// "+errs.join("\n// ")+"\n"
        : "";

    return "// ESP32 Block IDE — V1\n"+
           "// Generated automatically from blocks.\n"+
           warn+"\n"+vars+
           "void setup() {\n"+
           autoCode+(setup||"  Serial.begin(115200);")+"\n"+
           "}\n\nvoid loop() {\n"+
           (loop||"  // Add blocks to the program\n")+
           "}\n";
}

let v2Dirty=false;

function markDirty(){
  v2Dirty=true;
  const e=document.getElementById("projectState");
  if(e)e.textContent="Modified";
}

function updateStats(){
  const blocks=workspace.getAllBlocks(false);
  const pins=new Set();
  blocks.forEach(b=>{
    if(isOutputOperation(b)){
      const p=outputPin(b);
      if(Number.isInteger(p))pins.add(p);
    }
    if(b.type==="esp_pinmode" && b.getFieldValue("MODE")==="OUTPUT"){
      const p=outputPin(b);
      if(Number.isInteger(p))pins.add(p);
    }
  });
  const bc=document.getElementById("blockCount");
  const pc=document.getElementById("pinCount");
  if(bc)bc.textContent=`${blocks.length} block${blocks.length===1?"":"s"}`;
  if(pc)pc.textContent=`${pins.size} output pin${pins.size===1?"":"s"}`;
}

function duplicateSelected(){
  const selected=workspace.getBlockById(Blockly.selected && Blockly.selected.id);
  if(!selected){toast("Select a block first");return}
  const xml=Blockly.Xml.blockToDom(selected,true);
  const copy=Blockly.Xml.domToBlock(xml,workspace);
  copy.moveBy(30,30);
  workspace.render();
  markDirty();
  updateCode();
  toast("Block duplicated");
}

function downloadCode(){
  const code=generatedCode();
  const blob=new Blob([code],{type:"text/plain;charset=utf-8"});
  const a=document.createElement("a");
  a.href=URL.createObjectURL(blob);
  a.download="ESP32_BlockIDE_V2.ino";
  a.click();
  setTimeout(()=>URL.revokeObjectURL(a.href),500);
  toast("INO downloaded");
}

function updateCode(){
  document.getElementById("code").textContent=generatedCode();
  updateStats();
}
workspace.addChangeListener(updateCode);
function showPanel(which){const m={blocks:"blockPanel",code:"codePanel",serial:"serialPanel",output:"outputPanel"};Object.entries(m).forEach(([k,id])=>document.getElementById(id).classList.toggle("hidden",k!==which));document.querySelectorAll(".rail-item").forEach((b,i)=>b.classList.toggle("active",["blocks","code","serial","output"][i]===which));document.getElementById("panelTitle").textContent={blocks:"Block workspace",code:"Generated C++",serial:"Serial Monitor",output:"Build & upload output"}[which];if(which==="code")updateCode()}
function zoomIn(){workspace.zoomCenter(1.15)}function zoomOut(){workspace.zoomCenter(.87)}function zoomReset(){workspace.setScale(.9)}
function clearWorkspace(){if(confirm("Clear the entire block program?")){workspace.clear();updateCode()}}function newProject(){if(confirm("Start a new project?")){workspace.clear();document.getElementById("out").textContent="New project created.";v2Dirty=false;const s=document.getElementById("projectState");if(s)s.textContent="Ready";updateCode();showPanel("blocks")}}
function copyCode(){navigator.clipboard.writeText(generatedCode()).then(()=>toast("C++ copied"))}function toast(msg){const t=document.createElement("div");t.textContent=msg;t.style.cssText="position:fixed;right:18px;bottom:18px;background:#172554;border:1px solid #60a5fa;color:#fff;padding:10px 14px;border-radius:9px;font-size:12px;font-weight:750;z-index:100";document.body.appendChild(t);setTimeout(()=>t.remove(),1400)}
function saveProject(){const data={format:"ESP32 Block IDE Project",version:"2.0",workspace:Blockly.serialization.workspaces.save(workspace)};const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:"application/json"}));a.download="ESP32_BlockIDE_V2_Project.json";a.click();setTimeout(()=>URL.revokeObjectURL(a.href),500);v2Dirty=false;const s=document.getElementById("projectState");if(s)s.textContent="Saved"}
function loadProject(){document.getElementById("file").click()}async function importProject(e){const f=e.target.files[0];if(!f)return;try{const d=JSON.parse(await f.text());Blockly.serialization.workspaces.load(d.workspace||d,workspace);updateCode();toast("Project loaded")}catch(x){document.getElementById("out").textContent="Load failed:\n\n"+x}e.target.value=""}
async function refreshPorts(){const status=document.getElementById("status"),dot=document.getElementById("dot"),sel=document.getElementById("port");status.textContent="Scanning ports…";dot.className="busy";try{const r=await fetch("/api/ports",{cache:"no-store"});if(!r.ok)throw new Error("HTTP "+r.status);const ps=await r.json(),old=sel.value;sel.innerHTML='<option value="">Select COM port</option>';ps.forEach(p=>{const o=document.createElement("option");o.value=p.device;o.textContent=p.device+(p.description?` — ${p.description}`:"");sel.appendChild(o)});if([...sel.options].some(o=>o.value===old))sel.value=old;else if([...sel.options].some(o=>o.value==="COM6"))sel.value="COM6";dot.className=ps.length?"ok":"";status.textContent=ps.length?`${ps.length} port${ps.length>1?"s":""} found`:"No board detected"}catch(e){dot.className="";status.textContent="Server connection failed";document.getElementById("out").textContent="Could not read COM ports.\n\n"+e}}
async function uploadProgram(){const pinErrors=validateOutputPins();if(pinErrors.length){showPanel("output");document.getElementById("out").textContent="❌ INVALID GPIO\n\n"+pinErrors.join("\n");return}const port=document.getElementById("port").value;if(!port){showPanel("output");document.getElementById("out").textContent="Select the ESP32 COM port first.";return}showPanel("output");document.getElementById("dot").className="busy";document.getElementById("status").textContent="Uploading…";document.getElementById("out").textContent="⏳ COMPILING…\n\nPlease wait.";try{const r=await fetch("/api/upload",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({code:generatedCode(),port})}),d=await r.json();document.getElementById("out").textContent=d.ok?"✅ UPLOAD SUCCESSFUL\n\n"+d.output:"❌ UPLOAD FAILED\n\nStage: "+d.stage+"\n\n"+d.error;const bs=document.getElementById("buildStatus");if(bs)bs.textContent=d.ok?"● Upload successful":"● Build/upload failed";document.getElementById("dot").className=d.ok?"ok":"";document.getElementById("status").textContent=d.ok?"Upload complete":"Upload failed"}catch(e){document.getElementById("out").textContent="❌ CONNECTION ERROR\n\n"+e;document.getElementById("status").textContent="Server connection failed"}}
let serial=false,timer=null;async function toggleSerial(){serial?await closeSerial():await openSerial()}async function openSerial(){const port=document.getElementById("port").value;if(!port){alert("Select the ESP32 COM port first.");return}try{const r=await fetch("/api/serial/open",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({port,baud:Number(document.getElementById("baud").value)})});const d=await r.json();if(!d.ok){appendSerial("\n❌ "+(d.error||"Could not open serial port.")+"\n");return}serial=true;document.getElementById("serialBtn").textContent="Disconnect";timer=setInterval(readSerial,100);appendSerial(`\n--- Connected to ${port} at ${document.getElementById("baud").value} baud ---\n`)}catch(e){appendSerial("\n❌ Serial connection failed: "+e+"\n")}}
async function closeSerial(){await fetch("/api/serial/close",{method:"POST"}).catch(()=>{});serial=false;if(timer)clearInterval(timer);timer=null;document.getElementById("serialBtn").textContent="Connect";appendSerial("\n--- Disconnected ---\n")}async function readSerial(){if(!serial)return;try{const d=await(await fetch("/api/serial/read",{cache:"no-store"})).json();if(!d.connected){await closeSerial();return}if(d.data)appendSerial(d.data)}catch{}}
function appendSerial(t){const e=document.getElementById("serialOut");e.textContent+=t;e.scrollTop=e.scrollHeight}function clearSerial(){document.getElementById("serialOut").textContent=""}async function sendSerial(){const i=document.getElementById("serialInput"),t=i.value;if(!t||!serial)return;try{const r=await fetch("/api/serial/write",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:t+"\n"})});const d=await r.json();if(!d.ok)appendSerial("\n❌ "+(d.error||"Serial write failed.")+"\n");else i.value=""}catch(e){appendSerial("\n❌ Serial write failed: "+e+"\n")}}function clearOutput(){document.getElementById("out").textContent="Ready."}
refreshPorts();updateCode();


// Keep Blockly toolbox dark even when Blockly recreates its SVG/DOM.
function forceDarkBlocklyToolbox() {
    const root = document.getElementById("blocklyDiv");
    if (!root) return;

    const selectors = [
        ".blocklyToolboxDiv",
        ".blocklyToolbox",
        ".blocklyToolboxContents",
        ".blocklyTreeRoot",
        ".blocklyToolboxCategory",
        ".blocklyTreeRow"
    ];

    root.querySelectorAll(selectors.join(",")).forEach(el => {
        el.style.setProperty("background-color", "#0a1220", "important");
        el.style.setProperty("color", "#f8fafc", "important");
        el.style.setProperty("border-color", "#263449", "important");
    });

    root.querySelectorAll(".blocklyToolboxCategoryLabel, .blocklyTreeLabel, .blocklyTreeLabel span").forEach(el => {
        el.style.setProperty("color", "#f8fafc", "important");
    });

    root.querySelectorAll(".blocklyFlyoutBackground").forEach(el => {
        el.style.setProperty("fill", "#0d1728", "important");
    });
}

forceDarkBlocklyToolbox();
setTimeout(forceDarkBlocklyToolbox, 100);
setTimeout(forceDarkBlocklyToolbox, 500);
setTimeout(forceDarkBlocklyToolbox, 1000);

const blocklyRoot = document.getElementById("blocklyDiv");
if (blocklyRoot) {
    new MutationObserver(forceDarkBlocklyToolbox).observe(blocklyRoot, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ["class", "style"]
    });
}

document.addEventListener("keydown",e=>{
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="s"){
    e.preventDefault();saveProject();
  }
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="o"){
    e.preventDefault();loadProject();
  }
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="e"){
    e.preventDefault();downloadCode();
  }
});
