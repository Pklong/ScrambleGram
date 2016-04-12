var short = [
  'act', 'bar', 'car', 'dew', 'eat', 'far', 'gym', 'hey', 'ink',
  'jet', 'key', 'log', 'mad', 'nap', 'odd', 'pal', 'ram', 'saw',
  'tan', 'urn', 'vet', 'wed', 'yap', 'zoo', 'use','dad','mom', 'the',
  'and','for','are','but','not','you','all','any','her','was','one',
  'our','out','day','get','has','him','his','how','man','new','now','old',
  'see','two','way','who','boy','did','its','let','put','say','she','too'
];

var randomItem = function(list) {
  return list[Math.floor(Math.random() * list.length)];
};

module.exports = {
  getShortWord: function() {
    return randomItem(short);
  },
};
