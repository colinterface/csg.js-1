const create = require('./create')

/**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {mat4} matrix matrix to transform with
 * @param {vec2} vector the vector to transform
 * @returns {vec2} out
 */
const transform = (...params) => {
  let out
  let matrix
  let vector
  if (params.length === 2) {
    out = create()
    matrix = params[0]
    vector = params[1]
  } else {
    out = params[0]
    matrix = params[1]
    vector = params[2]
  }
  const x = vector[0]
  const y = vector[1]
  out[0] = matrix[0] * x + matrix[4] * y + matrix[12]
  out[1] = matrix[1] * x + matrix[5] * y + matrix[13]
  return out
}

module.exports = transform
