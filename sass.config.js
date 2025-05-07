const path = require('path');

module.exports = {
    includePaths: [path.resolve(__dirname, 'src')],
    outputStyle: 'compressed',
    sourceMap: true,
    sourceMapEmbed: true,
    sourceMapContents: true,
    fiber: false,
    api: 'modern'
}; 