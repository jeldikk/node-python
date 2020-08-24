const path = require("path");
const {PythonShell} = require('python-shell');

let options = {
    mode: 'json',
    pythonPath: path.join(__dirname,"../venv/bin/python"),
    pythonOptions: ['-u'], // this is important if real time message passing
    scriptPath: __dirname,
    args: ['-f',10,'-t', 100, '-i', 5, '-d', 2]
}


let pythonshell = new PythonShell("pythonscript.py",options);

pythonshell.on('message',(message)=>{
    console.log(`message is ${message.val} of type ${message.type}`);
})

// console.log(pythonshell.command)
// console.log(pythonshell.script)