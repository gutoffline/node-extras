const fs = require('fs')

fs.access("fotos" , fs.constants.R_OK | fs.constants.W_OK, (err) => {
  console.log('\n> Checking Permission for reading and writing to file');
  if (err)
    console.error('No Read and Write access');
  else
    console.log('File can be read and written');
});