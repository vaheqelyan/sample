const {spawn} = require('child_process');

		const ls = spawn("git", ["push", "origin", "master"], { 
cwd: './' });
		ls.stderr.on("data", 
(data)=>{console.log(data.toString('utf8'))});
