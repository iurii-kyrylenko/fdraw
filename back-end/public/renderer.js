(function () {
  function slowRandom () {
    for (var i = 0; i < 500; i++) {
      var r = Math.floor(Math.random() * 256)
    }
    return r
  }

  self.onmessage = function (e) {
    var imgData = e.data.image
    var width = imgData.width
    var height = imgData.height

    for (var j = 0; j < height; j++) {
      for (var i = 0; i < width; i++) {
        var ii = 4 * (j * width + i)
        imgData.data[ii + 0] = slowRandom()
        imgData.data[ii + 1] = slowRandom()
        imgData.data[ii + 2] = slowRandom()
        imgData.data[ii + 3] = 255
      }
    }

    postMessage({ image: imgData })
  }
}) ()
