const fs = require("fs");
const path = require("path");

function processFile(filePath) {
  fs.readFile(filePath, "utf-8", function (err, contents) {
    if (err) {
      console.log(err);
      return;
    }

    // Replace API_URI
    var replaced = contents.replace("https://api.reactbricks.com/v2", "/api");

    // Replace NPM registry
    replaced = replaced.replace(
      "https://registry.npmjs.org/react-bricks/latest",
      "/api/react-bricks/latest"
    );

    // Replace fetchpriority to fetchPriority
    replaced = replaced.replace("fetchpriority", "fetchPriority");

    // Replace css class to hide Admin right menu items
    replaced = replaced.replace(
      '"flex flex-row items-center text-xs leading-none text-gray-600 uppercase space-x-4"',
      '"flex flex-row items-center text-xs leading-none text-gray-600 uppercase space-x-4 hidden"'
    );

    // Inject React Bricks Admin styles
    const lookupStr = 'id:"admin-styles",dangerouslySetInnerHTML:{__html:"';
    let indexOf = replaced.indexOf(lookupStr);
    if (indexOf > -1) {
      indexOf += lookupStr.length;
      replaced =
        replaced.slice(0, indexOf) +
        '@import url(\\"/css/react-bricks-admin.css\\");\\n' +
        replaced.slice(indexOf);
    }

    fs.writeFile(filePath, replaced, "utf8", function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

function processDirectory(directoryPath) {
  console.log('Process Directory: ' + directoryPath);
  const files = fs.readdirSync(directoryPath);

  files.forEach((file) => {
    const filePath = path.join(directoryPath, file);
    if (filePath.endsWith(".js")) {
      processFile(filePath);
    }
  });
}

function findFoldersContainingSubstring(directory, substring) {
  const items = fs.readdirSync(directory);

  const matchingFolders = items.filter((item) => {
    const itemPath = path.join(directory, item);
    return fs.statSync(itemPath).isDirectory() && item.includes(substring);
  });

  return matchingFolders;
}

if (fs.existsSync("node_modules/react-bricks")) {
  processDirectory("node_modules/react-bricks");
}

if (
  fs.existsSync(
    "node_modules/@antdev/react-bricks-ui/node_modules/react-bricks"
  )
) {
  processDirectory(
    "node_modules/@antdev/react-bricks-ui/node_modules/react-bricks"
  );
}

if (fs.existsSync("node_modules/.pnpm")) {
  var directories = findFoldersContainingSubstring(
    "node_modules/.pnpm",
    "react-bricks@"
  );

  directories.forEach((folder) => {
    const path = "node_modules/.pnpm/" + folder + "/node_modules/react-bricks";
    if (fs.existsSync(path)) {
      processDirectory(path);
    }
  });
}
