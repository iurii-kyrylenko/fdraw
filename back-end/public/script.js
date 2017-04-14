(function () {

  function slowRandom () {
    for (var i = 0; i < 500; i++) {
      var r = Math.floor(Math.random() * 256)
    }
    return r
  }

  var renderer = new Worker('renderer.js')

  renderer.onmessage = function (e) {
    var ctx = canvas.getContext('2d');
    ctx.putImageData(e.data.image, 0, 0);

    // after drawing, I want to enable events
    // and change canvas' styles to hide progress 
    canvas.addEventListener('mousedown', onMouseDown)
    canvas.style.opacity = "1.0"
    console.log(' --  end drawing  --')
  }

  function draw (canvas) {
    // before drawing, I want to disable events to prevent re-drawing
    // and change canvas' styles to show progress
    console.log(' -- start drawing --')
    canvas.removeEventListener('mousedown', onMouseDown)
    canvas.style.opacity = "0.5"
  
    var width = canvas.width
    var height = canvas.height
    var context = canvas.getContext('2d')
    var imgData = context.createImageData(width, height)

    renderer.postMessage({ image: imgData })
  }

  function onMouseDown (event) {
    draw(event.target)
  }

  var canvas = document.getElementById('my-canvas')
  draw(canvas)

}) ()
