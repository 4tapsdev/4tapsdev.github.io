const fs = require('fs');
const path = require('path');


export default pluginOptions => ({
    afterBundle: async state => {
        // Use or alter the state of the CLI

        fs.mkdir(path.join(process.cwd(), 'dist', 'favicon'), { recursive: true }, err => {
            console.log('Create favicon dir');
        });
        return state
    },
})
