const {execFile,spawn}  = require('child_process');

execFile('git',['commit',
	'-m','Hello world','far.x'],{cwd:'C:/Users/Admin/Documents/sample/'},(err,out)=>{
		if(err){
			console.log(err);
			return
		}
		console.log(out);
	})


// const s = spawn('git',)

