var soundPlayer;
let textAreaElement;
let keypressCount = 0;

document.addEventListener("DOMContentLoaded", function(event) {
  initiateSoundPlayer();
  hookUpEvents();
});

function initiateSoundPlayer() {
  soundPlayer = KeyPressSoundController();
}

function initiateSoundPlayerWithOptions() {
  //if you for some reason dont want sounds to load automatically
  var options = {
    doNotLoadSoundsAutomatically: true
  };
  soundPlayer = KeyPressSoundController(options);
  soundPlayer.LoadSounds(soundPlayer.FileNames);
}



function hookUpEvents() {
  textAreaElement = document.getElementById('keypressArea');
  textAreaElement.addEventListener("keypress", onKeyPress);
  textAreaElement.focus();
}

function onKeyPress(e) {
  keypressCount++;
  e.preventDefault();
  soundPlayer.PlayRandomSound();
  printRandomCode(keypressCount);
  textAreaElement.scrollTop = textAreaElement.scrollHeight;
}

function printRandomCode(keypressCount) {
  if (keypressCount === 1) {

  }

  var time = new Date().getTime();
  let str = "";
  if (time % 2 === 0) {
    str += getRandomKeyWord();
  } else {
    str += getRandomVariableName() + " "; 
  }

  if (time % 15 === 0) { 
    str += "\n";
  } else if (time % 14 === 0) {
    str += "\t";
  }
  keypressArea.value += str;
}

var staticKeywords = [
  "\nGOTO 10\n", "\nBREAK\n", "\nSLEEP 20\n", 
  "abstract ", "arguments ", "await ", "boolean ", "byte ", "object.",
"case:\n\t", "catch ", "char ", "class ", "const ", "continue ", "default ", "\ndelete ", "double ", 
"\n\telse {\n", "enum ", "eval ", "export ", "extends ", "false ", "\nfinally ", "\ntry ", "float ", "for: ", 
"long ", "native ", "new ", "package ", "private ", "protected ", "short ", "static ", "switch ", 
"synchronized ", "this.", "throws ", "transient ", "true ", "typeof ", "var ", "void ", "while ", "with ", "yield "];

var randomParams = ["x", "y", "name", "description", "length", "size", "cacheTime", "id", "options"];

var randomDOMKeywords = ["accessKey", "addEventListener()", "appendChild()", "attributes", "blur()", "childElementCount", "childNodes", "children", "classList", "className", "click()", "clientHeight", "clientLeft", "clientTop", "clientWidth", "cloneNode()", "compareDocumentPosition()", "contains()", "contentEditable", "dir", "exitFullscreen()", "firstChild", "firstElementChild", "focus()", "getAttribute()", "getAttributeNode()", "getBoundingClientRect()", "getElementsByClassName()", "getElementsByTagName()", "hasAttribute()", "hasAttributes()", "hasChildNodes()", "id", "innerHTML", "innerText", "insertAdjacentElement()", "insertAdjacentHTML()", "insertAdjacentText()", "insertBefore()", "isContentEditable", "isDefaultNamespace()", "isEqualNode()", "isSameNode()", "isSupported()", "lang", "lastChild", "lastElementChild", "namespaceURI", "nextSibling", "nextElementSibling", "nodeName", "nodeType", "nodeValue", "normalize()", "offsetHeight", "offsetWidth", "offsetLeft", "offsetParent", "offsetTop", "ownerDocument", "parentNode", "parentElement", "previousSibling", "previousElementSibling", "querySelector()", "querySelectorAll()", "removeAttribute()", "removeAttributeNode()", "removeChild()", "removeEventListener()", "replaceChild()", "requestFullscreen()", "scrollHeight", "scrollIntoView()", "scrollLeft", "scrollTop", "scrollWidth", "setAttribute()", "setAttributeNode()", "style", "tabIndex", "tagName", "textContent", "title"];

var randomVariableNames = [
  "x", "y", "name", "description", "length", "size", "cacheTime", "id", "options",
  "date", "time", "cooldown", "max", "min", "ms", "database", "table", "fps", "metric",
  "throttle", "user", "account", "payload"
];

function getRandomVariableName() {
  return randomVariableNames[Math.floor(randomVariableNames.length * Math.random())];
}



function getRandomStartingCode() {
  var var1 = getRandomVariableName();
  var var2 = getRandomVariableName();

  var param1 = getRandomParams(1);
  var param2 = getRandomParams(1);
  var functionalKeywords = [
    `function(${getRandomParams(randomParams.length - 4)}) {\n`,
    `${getRandomVariableName()}.map(${var2}) => ${var2}.${var1})\n`,
    `${getRandomVariableName()}.filter(${var2}) => => ${var2}.${var1})\n`,
    `${getRandomVariableName()}.sort(${param1},${param2}) => { return ${param1}.${var1} > ${param2}.${var1} }\n`
  ];
  return functionalKeywords[Math.floor(functionalKeywords.length * Math.random())];
}

function getRandomFunctionalKeyword() {
  var var1 = getRandomVariableName();
  var var2 = getRandomVariableName();

  
  var param1 = getRandomParams(1);
  var param2 = getRandomParams(1);
  var functionalKeywords = [
    `\nfunction(${getRandomParams(randomParams.length - 4)}) {\n`,
    `${getRandomVariableName()}.map(${var2}) => ${var2}.${var1})\n`,
    `${getRandomVariableName()}.filter(${var2}) => => ${var2}.${var1})\n`,
    `${getRandomVariableName()}.sort(${param1},${param2}) => { return ${param1}.${var1} > ${param2}.${var1} }\n`
  ];
  return functionalKeywords[Math.floor(functionalKeywords.length * Math.random())];
}

function getRandomParams(maxAmount = 1) {
  var amount = Math.floor(maxAmount  * Math.random());
  let params = [];
  for(i=0;i<amount; i++) { 
    params.push(randomParams[Math.floor(randomParams.length * Math.random())]); 
  }
  return params.join(",");
}

function getRandomKeyWord() {
  var time = new Date().getTime();
  if (time % 13 === 0) {
    return getRandomFunctionalKeyword();
  }
  else if (time % 4 === 0) {
    return randomDOMKeywords[Math.floor(randomDOMKeywords.length * Math.random())] + " ";
  }
  else if (time % 15 === 0) {
    return "\n}\n";
  }
  else if (time % 6 === 0) {
    return Math.floor(5000 * Math.random()) + " ";
  }
  else {
    return staticKeywords[Math.floor(staticKeywords.length * Math.random())];
  }
}