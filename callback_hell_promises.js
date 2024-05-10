const fs = require("fs").promises;

// Refactor the code from `callback_hell_example.js` to use Promises.
// TODO: Rewrite the nested file operations using Promise chains.
function nestedFileOperationsPromises() {
  // Implement the promise-based version of nested file operations here.

  fs.readFile("file1.txt", "utf-8")
    .then((data1) => {
      console.log("File 1 read successfully:", data1);
      const nextFileName = data1.trim() + ".txt";

      return fs.readFile(nextFileName, "utf-8");
    })
    .then((data2) => {
      console.log("Second file read successfully:", data2);

      const modifiedData = data2.toUpperCase();

      return fs.writeFile("modifiedData.txt", modifiedData);
    })
    .then(() => {
      console.log("Modified data written successfully");
    })
    .catch((err) => {
      console.error("Error occured:", err);
    });
}

nestedFileOperationsPromises();
