function invertObject(data) {
  let out = {};

  for(x in data) {
    for(y of data[x]) {
      out[`${y}`] = x;
    }
  }
  return out;
}

module.exports = invertObject;
