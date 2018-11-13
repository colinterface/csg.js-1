const canonicalize = require('./canonicalize')

const subtract = function (otherShape, shape) {
  let cags
  if (shape instanceof Array) {
    cags = shape
  } else {
    cags = [shape]
  }
  let result = toShape3Wall(otherShape, -1, 1)
  cags.map(function (shape) {
    result = subtractSub(result, toShape3Wall(shape, -1, 1), false, false)
  })
  result = retesselate(result)
  result = canonicalize(result)
  result = fromFakeCSG(result)
  result = canonicalize(result)
  return result
}

module.exports = subtract
