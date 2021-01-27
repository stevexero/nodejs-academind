// This is a helper function that helps us construct a path to the root directory
const path = require('path');

module.exports = path.dirname(process.mainModule.filename);
