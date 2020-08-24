const {PythonShell} = require('python-shell');

PythonShell.runString('x="myname is kamal";print(len(x))',null,(err)=>{
    if(err) throw err;
    console.log('finished');
})