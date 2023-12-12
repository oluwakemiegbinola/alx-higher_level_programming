const fs = require('fs');

if (process.argv.length !== 5) {
  console.error('Usage: node 102-concat.js <file1> <file2> <destination>');
  process.exit(1);
}

const [, , file1, file2, destination] = process.argv;

// Read the content of the first file
fs.readFile(file1, 'utf8', (err, data1) => {
  if (err) {
    console.error(`Error reading ${file1}: ${err.message}`);
    process.exit(1);
  }

  // Read the content of the second file
  fs.readFile(file2, 'utf8', (err, data2) => {
    if (err) {
      console.error(`Error reading ${file2}: ${err.message}`);
      process.exit(1);
    }

    // Concatenate the content of the two files
    const concatenatedContent = data1.trim() + '\n' + data2.trim();

    // Write the concatenated content to the destination file
    fs.writeFile(destination, concatenatedContent, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to ${destination}: ${err.message}`);
        process.exit(1);
      }

      console.log(`Concatenation successful! Check ${destination} for the result.`);
    });
  });
});
