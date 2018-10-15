var blessed = require('blessed')
  , screen;

screen = blessed.screen({
  smartCSR: true,
  autoPadding: true,
  warnings: false
});

screen.append(
  blessed.box({
    width:'10%',
    height:"10%",
    content:'asd',
    style:{
      bg:'red'
    }
  })
)





screen.key('q', function() {
  return screen.destroy();
});

screen.render();

