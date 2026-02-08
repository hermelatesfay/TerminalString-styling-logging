// ========================================
// PROGRAM 11: Loading Animation
// ========================================
console.log("\n=== PROGRAM 11: Loading Animation ===\n");
async function program11_loadingAnimation() {
  const cyan = '\x1b[36m';
  const reset = '\x1b[0m';
  const frames = [' ', '', ' ', ' ', '', ' ', ' ', ' ', ' ', ''];
  let i = 0;
  
  console.log("Loading animation demo:");
  
  const interval = setInterval(() => {
    process.stdout.write(`\r${cyan}${frames[i]}${reset} Loading...`);
    i = (i + 1) % frames.length;
  }, 100);
  
  setTimeout(() => {
    clearInterval(interval);
    process.stdout.write('\r✓ Complete!    \n');
  }, 3000);
}
// Uncomment to run (it has a 3-second animation):
program11_loadingAnimation();
