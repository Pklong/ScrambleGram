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
'bite', 'brow', 'chew', 'chip', 'cold', 'clam','crop', 'daze', 'dive',
'draw', 'dump', 'easy','even', 'fear', 'flap', 'game', 'gape', 'goal',
'gown', 'hand', 'harp','hemp', 'itch', 'iron', 'item', 'jabs', 'joke',
'kick', 'knee', 'kiln','lash', 'leap', 'list', 'lone', 'mage', 'mice',
'mime', 'meat', 'muck', 'navy', 'node', 'note', 'noun','nerd', 'onyx',
'oxen', 'onus', 'pale', 'pang', 'pair', 'peck','pear', 'pelt', 'pike',
'punk', 'pulp', 'rare', 'rapt', 'redo','rock', 'ride', 'rush', 'salt',
'sank', 'shot', 'send','slip', 'stew', 'tarp', 'test', 'thaw', 'typo',
'trap', 'vain','user', 'vibe', 'wait', 'walk', 'wane', 'wolf', 'yank',
'zero', 'yolk', 'yaks', 'ruby'
];

var hard = [
'adept', 'afoul', 'aglow', 'amend', 'apple', 'atoms', 'bacon',
'baked', 'basic', 'beard', 'beast', 'beefy','avert', 'beige', 'blimp',
'bongo', 'booth','boxer', 'brake', 'brand', 'brass', 'canal', 'caste',
'caved','chess', 'click', 'clump', 'colts', 'codes', 'cruel',
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
'savvy', 'scalp', 'scion', 'scowl', 'sepia', 'shank', 'sheep', 'shout',
'shrub','sieve', 'sigil', 'siren', 'sixty', 'slugs', 'smarm', 'sonic',
'spike','swing', 'tacos', 'talon', 'taunt', 'techy', 'teach', 'tenor',
'tents','throb', 'tepid', 'theft', 'thick', 'thing'
];

var extreme = [
'absent', 'abated', 'abound', 'accede', 'absorb', 'advise', 'airbag',
'albino', 'aliens', 'allows','angels', 'anemic', 'animal', 'anthem',
'apollo', 'archer','armory', 'artist', 'ascend', 'asthma', 'aspire',
'attest', 'audits', 'awoken', 'baboon', 'badger', 'ballet', 'beanie',
'beauty', 'behest','bellow', 'biased', 'beware', 'biopic', 'bitter',
'bobcat', 'bomber', 'bottom', 'bounds', 'breach','bridal', 'brooms',
'bubble', 'builds', 'burlap', 'bushel', 'butler', 'cabals', 'byline',
'cactus','canola', 'carnal', 'carpet', 'catnip', 'cavity', 'cereal',
'chance', 'cheeky', 'cherry', 'choice','clergy', 'coffee', 'combos',
'cyborg', 'damsel', 'dampen', 'daybed', 'debunk', 'deepen', 'deject',
'dental', 'depots', 'device', 'devote', 'dimwit', 'dotage', 'drapes',
'earned', 'embryo', 'enough','envied', 'errand', 'ethics', 'fandom',
'fennel', 'flirty', 'floral', 'follow', 'forage', 'fridge','fungus',
'galore', 'garage', 'gasped', 'gelato', 'gerbil', 'glares', 'golfer',
'gothic', 'hacked','hangup', 'haters', 'healer', 'heaven', 'herald',
'hidden', 'hobbit', 'hitman', 'horses', 'hungry','infamy', 'infant',
'intern', 'jailor', 'jalopy', 'jester', 'joyful', 'juicer', 'jovial',
'kicked','knives', 'lambda', 'lanced', 'larger', 'lasers', 'lawyer',
'leader', 'leases', 'ledger', 'lemons','lichen', 'lifted', 'liquor',
'locust', 'loudly', 'lyrics', 'maxims', 'master', 'medley', 'memoir',
'menace', 'mentor', 'metals', 'meteor', 'midway', 'minion'
];

var insane = [ 'abalone', 'abandon', 'ability', 'abolish', 'abdomen',
'abraham', 'abyssal', 'academy', 'account','achieve', 'acidity', 'acquire',
 'acrobat', 'acronym', 'acrylic', 'actress', 'adaptor', 'address','adjourn',
 'admiral', 'advance', 'advisor', 'aerator', 'aerosol', 'affable', 'afflict',
 'affront','african', 'against', 'ageless', 'agendum', 'agility', 'agonize',
 'ailment', 'alamode', 'alchemy','alcohol', 'alfalfa', 'algebra', 'alfredo',
 'alimony', 'alkalic', 'allergy', 'almanac', 'already','alright', 'alumnus',
 'alveoli', 'amadeus', 'amateur', 'amazing', 'ambient', 'ambling', 'amenity',
'america', 'amiable', 'ammonia', 'amnesia', 'amnesty', 'amplify', 'anagram',
'analogy', 'analyst','analyze', 'anarchy', 'anatomy', 'anchovy', 'ancient',
'android', 'anemone', 'angelic', 'angrier','angrily', 'anguish', 'angular',
'animals', 'animate', 'annuity', 'answers', 'antacid', 'antenna','anthill',
'anthrax', 'antifog', 'antique', 'antonym', 'anybody', 'anymore', 'anytime',
'anxiety','anxious', 'apology', 'apostle', 'appease', 'applaud', 'appoint',
'approve', 'apricot', 'aquatic','aquifer', 'archery', 'archive', 'archway',
'arduous', 'arizona', 'armband', 'arousal', 'arraign','arrange', 'arrival',
'artists', 'artwork', 'ascetic', 'ashtray', 'asphalt', 'aspirin', 'assault',
'astride', 'atheist', 'athlete', 'attempt', 'attract', 'auction', 'audible',
'augment', 'austria','autopsy', 'average', 'aviator', 'avocado', 'awaking',
'awesome', 'awkward', 'balloon', 'catfish','babysit', 'backlit', 'backlog',
'backrub', 'badland', 'baggage', 'bailout', 'balance', 'ballboy',
'caution', 'central', 'century', 'certain', 'chalice', 'chamber', 'changes',
'channel', 'chapter','charger', 'charity', 'charlie', 'cheaper', 'cheater',
'checker', 'checkup', 'cheddar', 'cheerio','cheetah', 'cherish', 'chicken',
'chimney', 'chipper', 'choices', 'choosey', 'chopper', 'chorale',
'chowder', 'circuit', 'classes', 'classic', 'cleaner', 'clinton', 'closely',
'clothes', 'cockpit','coconut', 'coldest', 'collage', 'deficit','defrost',
'defuser','degrade','degrees','delight','deliver','deltoid',
'demerit','denmark','density','dentist','denture','deplete','deplore',
'deposit','depress','deprive','dervish','descent','deserve','desktop','despair',
'despite','despond','dessert','destain','element','elevate','embassy','embrace',
'emotion','empathy','empress','enclose','endless','enforce','english','forever',
'foreman','forfeit','forgive','formula','forsake','fortune',
'forward','foxhole','fragile','frantic','freezer','giraffe','glimpse',
'glorify','glucose','gnarley','goodbye','gorilla','governs','gradual',
'grammar','grandma','haircut','halibut','happily','harbour','harding','harvest',
'hatchet','hateful','healthy','heights','helpful','heroism','herself','ireland',
'islamic','islands','isolate','italian','itemize','jamaica','january','jasmine',
'jealous','jewelry','johnson','journey','mandate','manners','markers','married',
'massage','massive','mastery','meander','measure','medical','members','menthol',
'mercury','mermaid','message','methane','michael','midterm','migrant','migrate',
'militia','million','misdial','misfile','nebular','necktie','needles','neglect',
'nervous','network','neurons','neutral','neutron','newborn','newsboy','niagera',
'nickels','nicotin','nightly','nirvana','offense','operate','opinion','organic',
'ottoman','outback','passion','patient','patriot','payment','peanuts','penalty',
'pennies','pension','percent','perfect','perform','perfume','persist','phonics',
'phrases','physics','picture','pigears','pigtail','pilgrim','pinball','pintail',
'raccoon','racecar','raceway','radiant','radical','ragtime','ragweed',
'shirley','shooter','shorter','sidearm','sincere','sitdown','sixteen',
'skijump','skimask','skipole','skypark','slavery','smarter','smuggle',
'snowman','snuggle','society','soldier','someday','speaker','special','species',
'sponsor','stadium','stamina','standup','staples','station','storage',
'stories','stirfry','stirrup','streams','strides','student','subject',
'subsist','subtext','succeed','terrify','testify','textile','theatre',
'therapy','thermos','thinker','thirsty','thought','thunder','timeout',
'tobacco','toenail','toering','tonight','tonnage','topanga','topdeck',
'topless','topload','topples','toprack','topside','topsoil','unlearn',
'unleash','unlevel','unloose','unlucky','unquote','unravel','unready',
'unscrew','unstack','unusual','unwound','vacancy','vaccine','vagrant',
'vaguely','valance','valuate','valleys','vampire','vanilla','vanload',
'weather','webcast','website','webster','weekend','welcome','welfare'
];

var randomItem = function(list) {
  return list[Math.floor(Math.random() * list.length)];
};

module.exports = {
  seen: [],
  getEasyWord: function() {
    var easyWord = randomItem(easy);
    while (this.seen.includes(easyWord)) {
      easyWord = randomItem(easyWord);
    }
    this.seen.push(easyWord);
    return easyWord;
  },
  getMediumWord: function() {
    var mediumWord = randomItem(medium);
    while (this.seen.includes(mediumWord)) {
      mediumWord = randomItem(mediumWord);
    }
    this.seen.push(mediumWord);
    return mediumWord;
  },
  getHardWord: function() {
    var hardWord = randomItem(hard);
    while (this.seen.includes(hardWord)) {
      hardWord = randomItem(hardWord);
    }
    this.seen.push(hardWord);
    return hardWord;
  },
  getExtremeWord: function() {
    var extremeWord = randomItem(extreme);
    while (this.seen.includes(extremeWord)) {
      extremeWord = randomItem(extremeWord);
    }
    this.seen.push(extremeWord);
    return extremeWord;
  },
  getInsaneWord: function() {
    var insaneWord = randomItem(insane);
    while (this.seen.includes(insaneWord)) {
      insaneWord = randomItem(insaneWord);
    }
    this.seen.push(insaneWord);
    return insaneWord;
  }
};
