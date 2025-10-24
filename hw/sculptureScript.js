const { sculptureList } = require('./data');

const sculptureListLengths = [];

for (const item of sculptureList) {
  const pairs = Object.entries(item).map(([k, v]) => [k, String(v).length]);
  const lengthObj = Object.assign({}, ...pairs.map(([k, n]) => ({ [k]: n })));
  sculptureListLengths.push(lengthObj);
}

console.log(JSON.stringify(sculptureListLengths, null, 2));

module.exports = { sculptureListLengths };