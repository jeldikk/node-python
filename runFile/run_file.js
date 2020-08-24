const {PythonShell} = require("python-shell");

PythonShell.run('run_file_script.py',null,(err,results)=>{
    if(err)
        throw err

    console.log('finished');
    console.log(results);
})