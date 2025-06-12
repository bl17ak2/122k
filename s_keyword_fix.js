function decodeQuote(str) {
  return str.replace(/&quot;/g, '"');
}

function s(x) {
  if (typeof x === "string") {
    x = decodeQuote(x);
    // Auto-correct uppercase JS keywords and functions
    const replacements = {
      WHILE: "while",
      ALERT: "alert",
      IF: "if",
      ELSE: "else",
      FOR: "for",
      FUNCTION: "function",
      RETURN: "return",
      VAR: "var",
      CONST: "const",
      LET: "let",
      TRUE: "true",
      FALSE: "false",
      NULL: "null",
      UNDEFINED: "undefined"
    };
    for (let [k, v] of Object.entries(replacements)) {
      const reg = new RegExp("\\b" + k + "\\b", "g");
      x = x.replace(reg, v);
    }
    Function(x)();
  } else if (typeof x === "function") {
    x();
  }
}
