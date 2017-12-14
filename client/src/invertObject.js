export default function invertObject(data) {
  let out = {};

  for(const x in data) {
    for(const y of data[x]) {
      out[`${y}`] = x;
    }
  }
  return out;
}
