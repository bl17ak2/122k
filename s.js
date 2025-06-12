function s(x) {
  if (typeof x === "string") {
    x = decodeQuote(x); // this part is handled by another file
    Function(x)();
  } else if (typeof x === "function") {
    x();
  }
}
