// wow
var blessed = require('blessed')
  , screen;
const {exec} = require('child_process')
screen = blessed.screen({
  title: 'widget test',
  resizeTimeout: 300,
  dockBorders: true,
  cursor: {
    artificial: true,
    shape: 'line',
    blink: true,
    color: null
  },
  debug: true,
  warnings: true,
  terminal:'windows-ansi'
});


var b= blessed.box({
width:'50%',
height:'50%',
content:`asdasd`,
tags:true,
style:{
  bold:true
}
})
screen.append(b)


// require('fs').readFile('./diff.txt','utf8',(err,out)=>{
//   console.log(out);
// })

exec(`git diff --color .gitignore | sed -r "s/^([^-+ ]*)[-+ ]/\\1/" | less -r`,{cwd:'.'},(err,out)=>{
  if(err){console.log(err);}
  // console.log(out);
  // var m = new Map();

  // m.set('asdasd',out)
  b.setContent(`{bold}${out}{/bold}`)
  screen.render()
})

screen.on('keypress', function(ch, key) {
  if (key.name === 'tab') {
    return key.shift
      ? screen.focusPrevious()
      : screen.focusNext();
  }
  if (key.name === 'escape' || key.name === 'q') {
    return process.exit(0);
  }
});

screen.render();
