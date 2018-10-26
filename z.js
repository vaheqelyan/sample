const {execFile,spawn}  = require('child_process');



function gitSpawn(cmd) {
	return spawn('git',cmd,{cwd:'.'});
}

gitSpawn(['status'])