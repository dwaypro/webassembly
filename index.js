const express = require('express');
const app = express();


app.use(express.static('public', {
    // some versions of express require manually setting the content type for wasm
    // setHeaders: (res,path,stat) => {
        // if(path.endsWith('.wasm')){
            // res.set('Content-Type', 'application/wasm')
        // }
    // }
}));


app.listen('4200', () => console.log('server is running on 4200'));
