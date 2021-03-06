const create = require('./create')

/**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 * @param {[[<vec3>], <mat4> , <vec3>]} params
 * @param {vec3} params[0] the receiving vector (optional)
 * @param {mat4} params[1] matrix matrix to transform with
 * @param {vec3} params[2] vector the vector to transform
 * @returns {vec3} out
 */
const transform = (...params) => {
  let out
  let vector
  let matrix
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
  const z = vector[2]
  let w = matrix[3] * x + matrix[7] * y + matrix[11] * z + matrix[15]
  w = w || 1.0
  out[0] = (matrix[0] * x + matrix[4] * y + matrix[8] * z + matrix[12]) / w
  out[1] = (matrix[1] * x + matrix[5] * y + matrix[9] * z + matrix[13]) / w
  out[2] = (matrix[2] * x + matrix[6] * y + matrix[10] * z + matrix[14]) / w
  return out
}

module.exports = transform
