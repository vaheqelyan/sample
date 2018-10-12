const {execFile} = require('child_process')
execFile("git", ["diff",'HEAD','./builder.java'], { cwd: './' }, (err,out)=>{
	if(err){
		console.log(err);
		return;
	}
	console.log(out);
});