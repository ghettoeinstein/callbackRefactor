const fs = require("fs").promises;

// Refactor nested file operations to use Promise chains
function nestedFileOperationsPromises() {
  fs.readFile("file1.txt", "utf-8")
    .then((data1) => {
      console.log("File 1 read successfully:", data1);
      // Determine next file name from data1
      const nextFileName = data1.trim() + ".txt";
      // Read next file
      return fs.readFile(nextFileName, "utf-8");
    })
    .then((data2) => {
      console.log("Second file read successfully:", data2);
      // Convert data2 to uppercase
      const modifiedData = data2.toUpperCase();
      // Write modified data to new file
      return fs.writeFile("modifiedData.txt", modifiedData);
    })
    .then(() => {
      console.log("Modified data written successfully");
    })
    .catch((err) => {
      console.error("Error occurred:", err);
    });
}

nestedFileOperationsPromises();
