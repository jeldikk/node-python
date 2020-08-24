/*
    This file is different from run_file.js file,

    This file is executed with some more options
    1. should use environment defined with virtualenv and other input data

    what should be observed
    1. Is the virtualenv python environment is used or not
    2. so use some module which is not yet installed in the environment.
    
*/

const {PythonShell} = require("python-shell");
const path = require('path');

console.log(`${__dirname}`)

let temp_path = path.join(`${__dirname}`,"../venv/bin")
// let real_path = path.join(temp_path,"./venv/bin")
console.log(temp_path)



let options = {
    mode: 'text',
    pythonPath: path.join(`${__dirname}`,'../venv/bin/python'), // complete path to python executable
    pythonOptions: ['-u'], // these switches are passed to python executable, so these are python variations
    scriptPath: __dirname,
    args: ["-f",10,"-t",100,"-i",5, '-d', 0.5]
}
// console.log(options)
// PythonShell.run("pythonscript.py",)
PythonShell.run('pythonscript.py',options,(err,results)=>{
    if(err) throw err;


    console.log(results);
})
