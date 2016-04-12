var easy = [
  'act', 'bar', 'car', 'dew', 'eat', 'far', 'gym', 'hey', 'ink',
  'jet', 'key', 'log', 'mad', 'nap', 'odd', 'pal', 'ram', 'saw',
  'tan', 'urn', 'vet', 'wed', 'yap', 'zoo', 'use','dad','mom', 'the',
  'and','for','are','but','not','you','all','any','her','was','one',
  'our','out','day','get','has','him','his','how','man','new','now','old',
  'see','two','way','who','boy','did','its','let','put','say','she','too'
];

var medium = [
'able', 'ache', 'acid', 'ahoy', 'ante', 'balm', 'balk', 'brew', 'bear',
'bite', 'brow', 'chew', 'chip', 'cold', 'clam',
'crop', 'daze', 'dive', 'draw', 'dump', 'easy',
'even', 'fear', 'flap', 'game', 'gape', 'goal', 'gown', 'hand', 'harp',
'hemp', 'itch', 'iron', 'item', 'jabs', 'joke', 'kick', 'knee', 'kiln',
'lash', 'leap', 'list', 'lone', 'mage', 'mice',
'mime', 'meat', 'muck', 'navy', 'node', 'note', 'noun',
'nerd', 'onyx', 'oxen', 'onus', 'pale', 'pang', 'pair', 'peck',
'pear', 'pelt', 'pike', 'punk', 'pulp', 'rare', 'rapt', 'redo',
'rock', 'ride', 'rush', 'salt', 'sank', 'shot', 'send',
'slip', 'stew', 'tarp', 'test', 'thaw', 'typo', 'trap', 'vain',
'user', 'vibe', 'wait', 'walk', 'wane', 'wolf', 'yank',
'zero', 'yolk', 'yaks', 'ruby'
];

var hard = [
'adept', 'afoul', 'aglow', 'amend', 'apple', 'atoms', 'bacon',
'baked', 'basic', 'beard', 'beast', 'beefy',
'avert', 'beige', 'blimp', 'bongo', 'booth',
'boxer', 'brake', 'brand', 'brass', 'canal', 'caste', 'caved',
'chess', 'click', 'clump', 'colts', 'codes', 'cruel',
'dealt', 'decoy', 'deign', 'depot', 'diced', 'dined', 'droid',
'drown', 'eager', 'elite', 'elude', 'evoke', 'epoch', 'exact', 'erupt',
'fault', 'fatal', 'favor', 'foods', 'filth', 'flood', 'fools', 'force',
'forth', 'foxes', 'fuels', 'gland', 'glute', 'great', 'grill', 'grind',
'hobos', 'hippo', 'hover', 'hurts', 'horse', 'house', 'inert', 'joint',
'juicy', 'kiosk', 'koans', 'krill', 'laced', 'lambs', 'lapse', 'learn',
'lemon', 'lingo', 'lungs', 'loops', 'macro', 'manor', 'medal', 'matte',
'metal', 'merit', 'mirth', 'mommy', 'mould', 'nerds', 'niece', 'noble',
'nymph', 'oasis', 'oaths', 'omens', 'otter', 'pagan', 'parka', 'pants',
'patch', 'pedal', 'peers', 'peril', 'petal', 'piano', 'pizza', 'poker',
'pooch', 'porch', 'posse', 'prank', 'pulse', 'pupil', 'purge', 'quake',
'quell', 'rafts', 'range', 'rants', 'ratio', 'react', 'recap', 'recur',
'reign', 'repel', 'retro', 'revel', 'ridge', 'rinse', 'risky', 'roast',
'robot', 'rotor', 'royal', 'rumor', 'salad', 'salon', 'salsa', 'sassy',
'savvy', 'scalp', 'scion', 'scowl', 'sepia', 'shank', 'sheep', 'shout', 'shrub',
'sieve', 'sigil', 'siren', 'sixty', 'slugs', 'smarm', 'sonic', 'spike',
'swing', 'tacos', 'talon', 'taunt', 'techy', 'teach', 'tenor', 'tents',
'throb', 'tepid', 'theft', 'thick', 'thing'
];

var extreme = [

];

var randomItem = function(list) {
  return list[Math.floor(Math.random() * list.length)];
};

module.exports = {
  getEasyWord: function() {
    return randomItem(easy);
  },
  getMediumWord: function() {
    return randomItem(medium);
  },
  getHardWord: function() {
    return randomItem(hard);
  },
  getExtremeWord: function() {
    return randomItem(extreme);
  }
};
