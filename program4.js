// ========================================
// PROGRAM 4: Background Colors
// ========================================
console.log("\n=== PROGRAM 4: Background Colors ===\n");
function program4_backgrounds() {
  const bgRed = '\x1b[41m';
  const bgGreen = '\x1b[42m';
  const bgYellow = '\x1b[43m';
  const bgBlue = '\x1b[44m';
  const white = '\x1b[37m';
  const black = '\x1b[30m';
  const reset = '\x1b[0m';
  
  console.log(`${bgRed}${white} Red Background ${reset}`);
  console.log(`${bgGreen}${black} Green Background ${reset}`);
  console.log(`${bgYellow}${black} Yellow Background ${reset}`);
  console.log(`${bgBlue}${white} Blue Background ${reset}`);
}
program4_backgrounds();
