const { execSync } = require("child_process");
const path = require("path");

const fileToRun = path.join(__dirname, "react-bricks.js");

try {
  const stats = require("fs").statSync(fileToRun);
  if (stats.isFile()) {
    execSync(`node "${fileToRun}"`, { stdio: "inherit" });
  }
} catch (error) {
  console.error(`Error checking file: ${error.message}`);
}
