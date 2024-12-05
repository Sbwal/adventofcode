const fs = require('fs').promises;


const readFile = async (file) => {
    const data = await fs.readFile(file, 'utf-8');
    return data;
}

module.exports = {
    readFile
}