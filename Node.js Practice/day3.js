var fs = require('fs');

//to create a file
fs.open('test1.txt', 'w', (err, file) => {
    if(err) throw err;
    console.log("File created!");
})

//to write a file sync
fs.writeFileSync('test1.txt', "Write line1");

//to write a file async
fs.writeFile('test1.txt', 'Write line2', (err, file) => {
    if(err) throw err;
})

//to read a file async
fs.readFile('test1.txt', {encoding: 'utf-8'}, (err, data)=>{
    if(err) throw err;
    console.log('readFile data:', data);
})

//to read a file in sync
const data = fs.readFileSync('test1.txt',{encoding: 'utf-8'});
console.log('readFileSync data: ', data);

// to append a file in async
fs.appendFile('test1.txt', 'extra line added from appendFile', (err, file)=> {
    if(err) throw err;
})

//to append a file in sync
fs.appendFileSync('test1.txt', 'extra line added from appendFileSync');

// to rename a file
fs.rename('./test1.txt', 'test3.txt', (err)=>{
    if(err) throw err;
});

// to remove a file
fs.unlinkSync('./test1.txt');

// to remove a file in async
fs.unlink('./test1.txt',(err)=>{
    if(err) throw err;
})
