// ========================================
// PROGRAM 2: Simple Logger
// ========================================
console.log("\n=== PROGRAM 2: Simple Logger ===\n");
function program2_simpleLogger() {
  // Create a simple logger with different levels
  const logger = {
    info: (msg) => console.log(`\x1b[36m[INFO]\x1b[0m ${msg}`),
    success: (msg) => console.log(`\x1b[32m[SUCCESS]\x1b[0m ${msg}`),
    warning: (msg) => console.log(`\x1b[33m[WARNING]\x1b[0m ${msg}`),
    error: (msg) => console.log(`\x1b[31m[ERROR]\x1b[0m ${msg}`)
  };
  
  logger.info("Application starting...");
  logger.success("Connected to database");
  logger.warning("Low memory detected");
  logger.error("Failed to load configuration");
}
program2_simpleLogger();
