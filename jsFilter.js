const data = [
  { a: '1', b: '3' },
  { a: '4', b: '1' },
  { a: '8' },
  { a: '1', b: '1' },
];

// }
const jsFilter = (data, values) => {
  let filter = [];
  for (let i = 0; i < data.length; i++) {
    for (key in data[i]) {
      if (data[i][key] == values) {
        filter.push(key);
      }
    }
  }
  return filter;
};

console.log(jsFilter(data, 1));
