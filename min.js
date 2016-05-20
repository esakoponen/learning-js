function min(a, b) {
  return a < b ? a : b
}
console.log("5 < 6                   -> " + min(5, 6));
console.log("4 < 2                   -> " + min(4, 2));
console.log("55 < 0                  -> " + min(55, 0));
console.log("3 < 332                 -> " + min(3, 332));
console.log("3 < 332                 -> " + min(3, 332));
console.log("'a' < 'b'               -> " + min('a', 'b'));
console.log("'asd' < 'asa'           -> " + min('asd', 'asa'));
console.log("0.000002 < 0.000001     -> " + min(0.000002, 0.000001));
console.log("'0.000002' < '0.000001' -> " + min('0.000002', '0.000001'));