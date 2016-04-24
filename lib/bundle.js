/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Game = __webpack_require__(1);
	
	document.addEventListener('DOMContentLoaded', function() {
	  var game = new Game(),
	      startBtn = document.getElementById('start'),
	      resetBtn = document.getElementById('play-again');
	
	  startBtn.addEventListener('click', game.begin.bind(game));
	  resetBtn.addEventListener('click', game.reset.bind(game));
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var View = __webpack_require__(2),
	    Words = __webpack_require__(3),
	    Util = __webpack_require__(4);
	
	var Game = function () {
	  this.currentWord = null;
	  this.score = 0;
	  this.level = 1;
	  this.timeRemaining = 500;
	  this.correctAnswer = null;
	  this.view = new View();
	  this.view.addHoverEffect();
	};
	
	
	Game.prototype.displayTimer = function() {
	  clearInterval(this.timer);
	  this.timer = setInterval(function() {
	    if (this.timeRemaining === 0) {
	      clearInterval(this.timer);
	      this.over();
	    } else {
	      this.timeRemaining--;
	    }
	    this.view.setTime((this.timeRemaining / 100).toFixed(2));
	  }.bind(this), 10);
	};
	
	Game.prototype.resetTimer = function() {
	  this.timeRemaining = 500;
	};
	
	Game.prototype.adjustDifficulty = function() {
	  this.level = Util.calculateLevel(this.score);
	};
	
	Game.prototype.updateScore = function() {
	  this.score++;
	  this.view.scoreBox.innerHTML = 'Score: ' + this.score;
	};
	
	Game.prototype.getWord = function() {
	  switch(this.level) {
	    case (1):
	      return Words.getEasyWord();
	    case (2):
	      return Words.getMediumWord();
	    case (3):
	      return Words.getHardWord();
	    case (4):
	      return Words.getExtremeWord();
	    case (5):
	      return Words.getInsaneWord();
	  }
	};
	
	Game.prototype.resetChoices = function() {
	  this.correctAnswer = this.view.choices[Math.floor(Math.random() * 4)];
	
	  this.correctAnswer.innerHTML = Util.shuffleWord(this.currentWord);
	
	  for (var i = 0, n = this.view.choices.length; i < n; i++) {
	    if (this.view.choices[i] === this.correctAnswer) { continue; }
	    this.view.choices[i].innerHTML = Util.decoyWord(this.currentWord);
	  }
	};
	
	Game.prototype.play = function() {
	  this.adjustDifficulty();
	  this.currentWord = this.getWord();
	  this.view.targetWord.innerHTML = this.currentWord;
	
	  this.view.currentLevel.innerHTML = "Level: " + this.level;
	  this.resetChoices();
	  this.displayTimer();
	};
	
	Game.prototype.over = function() {
	  this.timeRemaining = 0;
	  for (var i = 0, n = this.view.choices.length; i < n; i++) {
	    this.view.choices[i].disabled = true;
	    if (this.view.choices[i].classList.contains('choice-button-hover')) {
	      this.view.choices[i].classList.remove('choice-button-hover');
	    }
	  }
	  this.correctAnswer.classList.add('correct-choice');
	  this.view.timer.parentNode.classList.remove('strobe');
	  this.view.timer.style.display = 'none';
	  document.getElementById('play-again').style.display = 'block';
	};
	
	Game.prototype.reset = function() {
	  for (var i = 0, n = this.view.choices.length; i < n; i++) {
	    this.view.choices[i].disabled = false;
	  }
	  this.correctAnswer.classList.remove('correct-choice');
	  this.view.timer.parentNode.classList.add('strobe');
	  this.view.timer.style.display = '';
	  document.getElementById('play-again').style.display = 'none';
	  var highScore = window.localStorage.highScore;
	  if (!highScore || highScore < this.score) {
	    window.localStorage.setItem('highScore', this.score);
	  }
	  this.currentWord = null;
	  this.score = 0;
	  this.level = 1;
	  this.timeRemaining = 500;
	  this.correctAnswer = null;
	
	  this.view.scoreBox.innerHTML = 'Score: ' + this.score;
	  this.view.highScore.innerHTML = 'High Score: ' + window.localStorage.highScore;
	  this.play();
	};
	
	Game.prototype.setup = function() {
	  for (var i = 0, n = this.view.choices.length; i < n; i++) {
	    this.view.choices[i].addEventListener(
	      'click',
	      this._handleClick.bind(this)
	    );
	  }
	  var highScore = window.localStorage.highScore;
	  if (highScore) {
	    this.view.highScore.innerHTML = 'High Score: ' + highScore;
	  }
	  this.view.scoreBox.innerHTML = 'Score: ' + this.score;
	  this.play();
	};
	
	Game.prototype.begin = function() {
	  document.getElementById('introduction').style.display = "none";
	  this.setup();
	};
	
	Game.prototype._handleClick = function(e) {
	  if (e.target === this.correctAnswer) {
	    this.resetTimer();
	    this.updateScore();
	    this.resetChoices();
	    this.play();
	  } else {
	    this.over();
	  }
	};
	
	module.exports = Game;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var View = function () {
	  this.root = document.getElementById('root');
	  this.timer = document.getElementById('countdown-timer');
	  this.scoreBox = document.getElementById('score-box');
	  this.highScore = document.getElementById('high-score');
	  this.targetWord = document.getElementById('target-word');
	  this.currentLevel = document.getElementById('current-level');
	  this.choicesContainer = document.getElementById('choices-container');
	  this.choices = document.getElementsByClassName('choice-button');
	};
	
	View.prototype.setTime = function(time) {
	  this.timer.innerHTML = time;
	  var colorTime = parseInt(time.replace('.', '')) / 2;
	  var color = 'rgb(255, ' + colorTime + ", " + colorTime + ")";
	  document.body.style.background = color;
	};
	
	View.prototype.addHoverEffect = function() {
	  // fixes problem where mobile taps cause hover effect to linger
	  for (var i = 0, n = this.choices.length; i < n; i++) {
	    this.choices[i].addEventListener('touchstart', function(e) {
	      e.currentTarget.classList.add('choice-button-hover');
	    });
	    this.choices[i].addEventListener('mouseenter', function(e) {
	      e.currentTarget.classList.add('choice-button-hover');
	    });
	    this.choices[i].addEventListener('mouseleave', function(e) {
	      e.currentTarget.classList.remove('choice-button-hover');
	    });
	    this.choices[i].addEventListener('touchmove', function(e) {
	      e.currentTarget.classList.remove('choice-button-hover');
	    });
	    this.choices[i].addEventListener('click', function(e) {
	      e.currentTarget.classList.remove('choice-button-hover');
	    });
	  }
	};
	
	module.exports = View;


/***/ },
/* 3 */
/***/ function(module, exports) {

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
	  var word = list[Math.floor(Math.random() * list.length)];
	  return word;
	};
	
	module.exports = {
	  seen: [],
	  getEasyWord: function() {
	    var easyWord = randomItem(easy);
	    while (this.seen.includes(easyWord)) {
	      easyWord = randomItem(easy);
	    }
	    this.seen.push(easyWord);
	    return easyWord;
	  },
	  getMediumWord: function() {
	    var mediumWord = randomItem(medium);
	    while (this.seen.includes(mediumWord)) {
	      mediumWord = randomItem(medium);
	    }
	    this.seen.push(mediumWord);
	    return mediumWord;
	  },
	  getHardWord: function() {
	    var hardWord = randomItem(hard);
	    while (this.seen.includes(hardWord)) {
	      hardWord = randomItem(hard);
	    }
	    this.seen.push(hardWord);
	    return hardWord;
	  },
	  getExtremeWord: function() {
	    var extremeWord = randomItem(extreme);
	    while (this.seen.includes(extremeWord)) {
	      extremeWord = randomItem(extreme);
	    }
	    this.seen.push(extremeWord);
	    return extremeWord;
	  },
	  getInsaneWord: function() {
	    var insaneWord = randomItem(insane);
	    while (this.seen.includes(insaneWord)) {
	      insaneWord = randomItem(insane);
	    }
	    this.seen.push(insaneWord);
	    return insaneWord;
	  }
	};


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  // Fisher-Yates shuffle
	  shuffleWord: function(word) {
	    var letters = word.split('');
	
	    for (var i = letters.length - 1; i >= 0; i--) {
	      var randomIdx = Math.floor(Math.random() * (i + 1));
	      var letterAtIdx = letters[randomIdx];
	
	      letters[randomIdx] = letters[i];
	      letters[i] = letterAtIdx;
	    }
	
	    var newWord = letters.join('');
	    if (newWord === word) {
	      return this.shuffleWord(newWord);
	    } else {
	      return newWord;
	    }
	  },
	
	  decoyWord: function(word) {
	    var shuffled = this.shuffleWord(word);
	    return this.replaceLetterWithRandomCharacter(shuffled);
	  },
	
	  calculateLevel: function(score) {
	    switch(true) {
	      case (score < 5):
	        return 1;
	      case (score < 10):
	        return 2;
	      case (score < 15):
	        return 3;
	      case (score < 20):
	        return 4;
	      case (score < 40):
	        return 5;
	    }
	  },
	
	  shuffleChoices: function(choices) {
	    for (var i = choices.length - 1; i >= 0; i--) {
	      var randomIdx = Math.floor(Math.random() * (i + 1));
	      var choiceAtIdx = choices[randomIdx];
	
	      choices[randomIdx] = choices[i];
	      choices[i] = choiceAtIdx;
	    }
	    return choices;
	  },
	
	  replaceLetterWithRandomCharacter: function(word) {
	    var swapIdx = Math.floor(Math.random() * word.length);
	    var randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
	    while (randomLetter === word[swapIdx]) {
	      randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
	    }
	    return word.substr(0, swapIdx) + randomLetter + word.substr(swapIdx + 1);
	  },
	};


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map