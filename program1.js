// ========================================
// PROGRAM 1: Basic Color Demo
// ========================================
console.log("\n=== PROGRAM 1: Basic Color Demo ===\n");
function program1_colorDemo() {
  // ANSI color codes
  const red = '\x1b[31m';
  const green = '\x1b[32m';
  const yellow = '\x1b[33m';
  const blue = '\x1b[34m';
  const magenta = '\x1b[35m';
  const cyan = '\x1b[36m';
  const reset = '\x1b[0m';
  
  console.log(`${red}This text is RED${reset}`);
  console.log(`${green}This text is GREEN${reset}`);
  console.log(`${yellow}This text is YELLOW${reset}`);
  console.log(`${blue}This text is BLUE${reset}`);
  console.log(`${magenta}This text is MAGENTA${reset}`);
  console.log(`${cyan}This text is CYAN${reset}`);
}
program1_colorDemo();
