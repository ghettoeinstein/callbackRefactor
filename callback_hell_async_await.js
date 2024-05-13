const fs = require("fs").promises;

// Refactor Promise-based operations to use async/await
async function nestedFileOperationsAsync() {
  try {
    // Read file1.txt
    const data1 = await fs.readFile("file1.txt", "utf-8");
    console.log("File1 read successfully:", data1);

    // Determine next file name from data1
    const nextFileName = data1.trim() + ".txt";

    // Read next file
    const data2 = await fs.readFile(nextFileName, "utf-8");
    console.log("Second file read successfully:", data2);

    // Convert data2 to uppercase
    const modifiedData = data2.toUpperCase();

    // Write modified data to new file
    await fs.writeFile("modifiedDataAsyncAwait.txt", modifiedData);
    console.log("Modified data written successfully");
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

nestedFileOperationsAsync();
