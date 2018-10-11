const {execFile} = require('child_process')
execFile("git", ["commit",'-m',"hello world",'./builder.java'], { cwd: './' }, (err,out)=>{
	if(err){
		console.log(err);
		return;
	}
	console.log(out);
});