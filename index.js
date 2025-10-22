var soundPlayer;
let textAreaElement;
let keypressCount = 0;

document.addEventListener("DOMContentLoaded", function (event) {
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

  let str = "";
  // Use proper random number instead of time-based
  if (Math.random() < 0.5) {
    str += getRandomKeyWord();
  } else {
    str += getRandomVariableName() + " ";
  }

  var randomValue = Math.random();
  if (randomValue < 0.067) { // ~1/15 chance
    str += "\n";
  } else if (randomValue < 0.133) { // ~1/15 chance (different from newline)
    str += "\t";
  }
  keypressArea.value += str;
}

var staticKeywords = [
  "\nGOTO 10\n", "\nBREAK\n", "\nSLEEP 20\n",
  "abstract ", "arguments ", "await ", "object.",
  "define ",
  "=",
  "private ", "protected ", "static ", "boolean ", "byte ",
  "class ", "var ", "const ", "let ", "void ", "long ", "double ", "float ", "char ", "string",
  "typeof ",
  "case:\n\t", "catch ", "continue ", "default ", "\ndelete ",
  "true ", "false ",
  "\n\telse {\n", "enum ", "eval ", "export ", "extends ", "\nfinally ", "\ntry ", "for: ",
  "native ", "new ", "package ", "short ", "switch ",
  "synchronized ", "this.", "throws ", "transient ", "while ", "with ", "yield ",
  "import ", "from ", "as ", "interface ", "implements ", "public ",
  "final ", "volatile ", "strictfp ", "goto ", "instanceof ",
  "super.", "debugger ", "in ", "of ", "return ", "break ", "continue ",
  "if (", ") {", "} else if (", "null ", "undefined ", "NaN ",
  "Infinity ", "require(", "module.exports ", "exports.",
  "async function ", "function* ", "=>", "...", "constructor(",
  "get ", "set ", "static get ", "static set ", "readonly ",
  "namespace ", "type ", "keyof ", "infer ", "never ",
  "unknown ", "any ", "bigint ", "symbol ", "unique ",
  "#include ", "#define ", "struct ", "union ", "typedef ",
  "malloc(", "free(", "printf(", "scanf(", "sizeof(",
  "extern ", "register ", "auto ", "inline ", "restrict "
];


var randomParams = [
  "x", "y", "name", "description", "id", "options", "length", "size", "cacheTime",
  "index", "value", "key", "data", "result", "response", "request", "callback",
  "promise", "error", "success", "status", "code", "message", "text", "content",
  "element", "node", "parent", "child", "sibling", "target", "source", "destination",
  "width", "height", "top", "left", "right", "bottom", "margin", "padding",
  "color", "background", "border", "font", "weight", "style", "class", "type",
  "method", "function", "property", "attribute", "parameter", "argument", "variable",
  "constant", "object", "array", "string", "number", "boolean", "null", "undefined",
  "config", "settings", "preferences", "defaults", "custom", "user", "admin", "guest",
  "session", "token", "auth", "login", "logout", "register", "username", "password",
  "email", "phone", "address", "city", "state", "country", "zip", "postal",
  "first", "last", "middle", "full", "display", "avatar", "profile", "bio",
  "created", "updated", "modified", "deleted", "timestamp", "date", "time", "duration",
  "start", "end", "begin", "finish", "complete", "total", "count", "sum", "average",
  "min", "max", "range", "limit", "offset", "page", "per", "sort", "order",
  "filter", "search", "query", "term", "keyword", "tag", "category", "group",
  "item", "product", "service", "feature", "component", "module", "plugin", "addon",
  "theme", "template", "layout", "design", "ui", "ux", "interface", "interaction",
  "event", "listener", "handler", "trigger", "action", "operation", "task", "job",
  "process", "thread", "worker", "queue", "stack", "heap", "memory", "cache",
  "storage", "database", "table", "row", "column", "field", "record", "entry",
  "api", "endpoint", "route", "path", "url", "uri", "protocol", "domain", "host",
  "port", "socket", "connection", "stream", "buffer", "chunk", "packet", "frame"
];

var randomDOMKeywords = ["accessKey", "addEventListener()", "appendChild()", "attributes", "blur()", "childElementCount", "childNodes", "children", "classList", "className", "click()", "clientHeight", "clientLeft", "clientTop", "clientWidth", "cloneNode()", "compareDocumentPosition()", "contains()", "contentEditable", "dir", "exitFullscreen()", "firstChild", "firstElementChild", "focus()", "getAttribute()", "getAttributeNode()",
  "element.", "document.", "window.", "console.", "Array.", "Object.", "String.", "Number.",
  "addEventListener()", "removeEventListener()", "querySelector()", "getElementById()",
  "createElement()", "appendChild()", "removeChild()", "setAttribute()", "getAttribute()",
  "innerHTML", "textContent", "className", "classList", "style.", "dataset.",
  "onclick", "onload", "onchange", "onsubmit", "onerror", "onresize",
  "fetch()", "Promise.", "async ", "await ", "then()", "catch()",
  "localStorage.", "sessionStorage.", "JSON.parse()", "JSON.stringify()",
  "setTimeout()", "setInterval()", "clearTimeout()", "clearInterval()",
  "Math.random()", "Math.floor()", "Math.ceil()", "Math.round()",
  "parseInt()", "parseFloat()", "isNaN()", "typeof ", "instanceof ",
  "push()", "pop()", "shift()", "unshift()", "slice()", "splice()",
  "map()", "filter()", "reduce()", "forEach()", "find()", "includes()",
  "split()", "join()", "replace()", "toLowerCase()", "toUpperCase()",
  "trim()", "substring()", "indexOf()", "charAt()", "length",
  "hasOwnProperty()", "keys()", "values()", "entries()",
  "preventDefault()", "stopPropagation()", "target", "currentTarget",
  "clientX", "clientY", "pageX", "pageY", "keyCode", "which"
];

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
  var amount = Math.floor(maxAmount * Math.random());
  let params = [];
  for (i = 0; i < amount; i++) {
    params.push(randomParams[Math.floor(randomParams.length * Math.random())]);
  }
  return params.join(",");
}

function getRandomKeyWord() {
  var randomValue = Math.random();
  if (randomValue < 0.077) { // ~1/13 chance
    return getRandomFunctionalKeyword();
  }
  else if (randomValue < 0.327) { // ~1/4 chance
    return randomDOMKeywords[Math.floor(randomDOMKeywords.length * Math.random())] + " ";
  }
  else if (randomValue < 0.394) { // ~1/15 chance
    return "\n}\n";
  }
  else if (randomValue < 0.561) { // ~1/6 chance
    return Math.floor(5000 * Math.random()) + " ";
  }
  else {
    return staticKeywords[Math.floor(staticKeywords.length * Math.random())];
  }
}
