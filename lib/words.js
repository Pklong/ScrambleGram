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
var champion = ['absolute','admonish','advisory','agnostic','altruism'
,'asteroid','aversion','bachelor','banished','banister','bankrupt','baritone'
,'beautify','behavior','birdcage','blackout','blockage','bludgeon','botulism'
,'boundary','brackish','bungalow','butchery','canister','category','cauldron'
,'children','chipmunk','chlorine','clarinet','cloister','clothier','coliseum'
,'complain','computer','courtesy','creation','culinary','cylinder','demolish'
,'dialogue','dinosaur','discount','doctrine','domestic','dominate','dynamite'
,'dyslexia','educator','emigrant','emulsify','enormity','favorite','ferocity'
,'filament','flounder','flourish','fraction','fragment','frighten','fumigate'
,'gasoline','goldfish','graceful','habitude','handgrip','handover','handsome'
,'handwork','hangbird','hangover','hardline','harmonic','hayfield','hazelnut'
,'headlock','headlong','headwork','hedonism','hedonist','heliport','herdsman'
,'hindmost','holdfast','homeland','homesick','homespun','homeward','hornbeam'
,'horsefly','horseman','hospital','hostelry','housefly','houseman','howitzer'
,'huckster','humanely','humanist','humanity','humanize','humanoid','humblest'
,'humbling','humoring','humorist','humpback','hungrily','hurdling','hurtling'
,'hydrogen','hypnotic','hysteria','hysteric','icebound','ideogram','idolater'
,'idolatry','impacted','imparted','implored','imported','imposter','improved'
,'impudent','impugned','impurely','inchoate','inclosed','incubate','incurved'
,'inductor','indulger','indurate','industry','inflamed','inflated','informal'
,'informed','ingrowth','injector','insomuch','insulate','insulted','integral'
,'intercom','interval','investor','involute','inwardly','islander','isolated'
,'isometry','isopleth','isotherm','jalousie','jargoned','jaundice','jauntier'
,'jauntily','jawboned','jealousy','jeopardy','jocundly','jointure','jokingly'
,'jongleur','jostling','jousting','jowliest','jubilant','jubilate','judgment'
,'jumbling','jumpiest','junglier','keyboard','keypunch','kilobyte','kilogram'
,'klystron','knighted','knightly','knitwear','knowable','kohlrabi','laboring'
,'lacewing','laconism','ladyship','lambency','lambskin','languish','lankiest'
,'lardiest','latching','latchkey','laughter','launched','launcher','lavished'
,'lavisher','layering','laywomen','leaching','leashing','leftward','legation'
,'lethargy','licensor','lifeboat','ligament','ligature','liquored','literacy'
,'loamiest','loathing','locating','locative','lockstep','lodestar','lodgment'
,'longwise','lordship','lovebird','lovesick','lowering','luckiest','lukewarm'
,'luminary','lumpfish','lumpiest','lunkhead','lurching','lymphoid','machined'
,'madhouse','magister','magnetic','maidenly','majoring','majority','maledict'
,'maligned','maligner','malinger','mandible','mangiest','mangrove','manicure'
,'manifest','manifold','manliest','manpower','marbling','marching','marigold'
,'marquise','masterly','matchbox','matronly','maturely','maturing','maverick'
,'medaling','medalist','mediator','megavolt','meltdown','mensural','merciful'
,'metaling','metaphor','methadon','methanol','metrical','milkwort','minstrel'
,'minutely','mirthful','misbegot','misdealt','misheard','misjudge','misplace'
,'misquote','misruled','mistaken','modality','modeling','modernly','modestly'
,'modishly','modulate','moisture','molarity','moleskin','monarchy','monastic'
,'monetary','monkfish','monsieur','monstera','moralist','morality','moralize'
,'morbidly','mordancy','morphine','morticed','mortised','moseying','motherly'
,'mouthier','mouthing','moveably','movingly','mucilage','muckiest','mulching'
,'mulcting','murkiest','muscadel','muscatel','muscling','musicale','musingly'
,'mustache','mutchkin','myriapod','mystique','mythical','narghile','natively'
,'naturism','necropsy','neighbor','neoplasm','nepotism','neurotic','nightcap'
,'nightjar','nimblest','nobelium','normalcy','notarize','novelist','nugatory'
,'numeracy','obduracy','obdurate','obeisant','obituary','obligate','obscured'
,'obstacle','obtained','obtusely','obviated','ochering','olibanum','oligarch'
,'olympiad','opaquely','opaquing','operatic','ordinate','organdie','organism'
,'organist','organize','orgasmic','orgastic','oriental','origanum','ornately'
,'orphaned','osculate','outbrave','outbreak','outcried','outdrive','outfaced'
,'outfield','outflank','outlawed','outlawry','outlined','outlived','outlying'
,'outmarch','outpaced','outraced','outraged','outreach','outrival','outshine'
,'outsider','outsized','outspeak','outspend','outvying','outweigh','overbusy'
,'overcast','overhand','overhang','overhaul','overhung','overlaid','overlain'
,'overland','overmuch','overpaid','overplay','overstay','ovulated','palimony'
,'palmiest','palsying','panicked','panicled','parching','parhelic','parodist'
,'paroling','paroquet','paroxysm','partible','particle','partying','pastiche'
,'pastured','patchier','patchily','patching','pathogen','peaching','pearling'
,'pectoral','peculiar','pedaling','pedantic','pedantry','pegboard','penlight'
,'penumbra','perching','perianth','personal','perusing','pestling','petaloid'
,'phenolic','phenylic','phonemic','phonetic','phoniest','phrasing','physical'
,'physique','picayune','pictured','pilaster','pilchard','pilewort','pilotage'
,'pinafore','pinochle','piquancy','pitchmen','plainest','planchet','plashing'
,'plastery','platform','platinum','platonic','playsuit','playtime','pleading'
,'pleasing','pleating','plectron','plectrum','pleonasm','pleurisy','ploughed'
,'pluckier','plucking','plumaged','plumbery','plumbing','plushier','plutonic'
,'poaching','podgiest','podiatry','poetical','polarity','polarize','polished'
,'polisher','polymath','pomading','pomander','ponytail','porkiest','portable'
,'postcard','postiche','postlude','postmark','postured','potsherd','pouching'
,'poultice','poundage','powerful','powering','prankish','pratique','prickled'
,'prideful','priestly','primeval','princely','probated','procaine','proclaim'
,'prodigal','profaned','profiled','profited','promised','prostyle','proudest'
,'provable','provably','province','proximal','psalmody','psyching','ptyalism'
,'pubertal','publican','pudgiest','pulmonic','pulsated','punchier','punished'
,'punitory','purblind','purchase','purslane','putridly','quackery','quacking'
,'quagmire','quainter','quaintly','quakiest','qualmish','quantify','quashing'
,'queasily','querying','questing','question','quickest','quipster','quotable'
,'quotably','raftsmen','ragouted','rakishly','rambling','randiest','randomly'
,'rangiest','ransomed','rationed','ravingly','ravished','rawboned','reaching'
,'reacting','reaction','readjust','readying','rebating','rebuking','recoding'
,'recusant','redshank','reducing','refacing','refusing','refuting','regional'
,'relating','relation','relaunch','relaxing','relaying','remaking','removing'
,'repaying','replying','reposing','republic','reputing','requital','rescuing'
,'residual','resoling','resubmit','resuming','retaking','retching','revoking'
,'rhapsody','rhyolite','rickshaw','rifleman','rightful','riposted','roaching'
,'roasting','robustly','rockfish','rockiest','romanced','romantic','rondeaux'
,'rotundly','roughest','roundest','roundish','rousting','rowdiest','rowdyism'
,'royalism','royalist','rudiment','rumbling','ruminate','rumpling','rustical'
,'rustling','sabering','saboteur','sacredly','saintdom','saliency','salmonid'
,'saluting','sampling','sanctify','sandwich','sandwort','saponify','sardonic'
,'sardonyx','sauteing','savoring','scalding','scalping','scamping','scandium'
,'scantier','scantily','scarfing','scathing','scenario','scheming','schmaltz'
,'scolding','scornful','scourged','scouring','scouting','scowling','scramble'
,'scraping','scrawled','screwing','scrimped','scripted','scrofula','scrounge'
,'scrupled','scrutiny','sculpted','sculptor','scurvily','scything','seafront'
,'seamount','secantly','secondly','sectoral','securing','security','sedating'
,'sedation','seducing','sedulity','seignory','semantic','seminary','semolina'
,'seraglio','seraphic','seraphim','shackled','shadblow','shadower','shafting'
,'shambled','shameful','shamrock','sharking','sharping','shearing','sheaving'
,'sheikdom','shelduck','shelving','sherlock','shingled','shipload','shipmate'
,'shipment','shipworm','shipyard','shocking','shortage','shorting','shoulder'
,'shouting','showgirl','shrapnel','shrewdly','shrimped','shucking','shutdown'
,'sidelong','sidewalk','signaled','signaler','silkworm','simulate','singable'
,'singular','sinkhole','siphoned','skewbald','skinhead','skydiver','skylight'
,'slacking','slangier','slighted','slighter','slipknot','slithery','slouched'
,'sloughed','sludgier','slumbery','slumping','slurping','smacking','smarting'
,'smearing','smelting','smidgeon','smirched','smocking','smoulder','smudgier'
,'smudgily','snatched','snatcher','sneakily','snowbird','sobering','sobriety'
,'sociable','sociably','societal','sodality','softback','software','solacing'
,'solarium','soldiery','solitary','solitude','solvated','solvency','sombrely'
,'somewhat','songbird','songlike','sourcing','southern','southpaw','souvenir'
,'souvlaki','sowbread','spadeful','spangled','sparking','sparkled','spavined'
,'speaking','spearing','specking','spectral','spectrum','specular','sphagnum'
,'sphenoid','sphering','spheroid','spicular','spiracle','spiteful','splaying'
,'splendor','splinted','splinter','splotchy','splurged','spoilage','spondaic'
,'spongier','spongily','sporadic','sportily','sporting','sportive','spouting'
,'sprained','sprawled','spraying','sprinkle','sprinted','sprocket','sprouted'
,'sprucely','sprucing','spunkier','spurting','squadron','squander','squarely'
,'squaring','squawked','squawker','squinted','squinter','squirmed','squirted'
,'stabling','stacking','stalking','stamping','stanched','stanchly','stapling'
,'starched','starlike','starling','starving','steadily','steading','stealing'
,'steamily','steaming','sterling','stickler','stockade','stockier','stockily'
,'stocking','stockman','stockmen','stodgier','stodgily','stomping','stonefly'
,'storable','stormily','storming','strafing','strained','strangle','strawing'
,'straying','strewing','stricken','strickle','stringed','strobila','strobile'
,'stroking','strongly','strophic','studying','stumbled','stumbler','stumpier'
,'stumping','stupider','stupidly','sturdily','sturgeon','stylized','subagent'
,'sublimed','suborned','subpoena','subpolar','subtonic','subtopia','suchlike'
,'suckling','suitable','suitably','sulfated','sulphate','sulphide','sunbaked'
,'sunbathe','sunlight','superbly','superman','supernal','supertax','supinate'
,'supinely','surfaced','surgical','suricate','surnamed','surplice','suzerain'
,'swampier','swamping','swankier','swanlike','swarming','swathing','swearing'
,'sweating','swerving','swindler','swingled','switched','sybarite','sycamore'
,'syconium','symbolic','synaptic','syndetic','syndrome','synoptic','syphoned'
,'syringed','tailored','thankful','thousand','tribunal','underway','velocity'
,'vineyard','visceral','vocalist','weaponry','yourself'];

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
  },
  getChampionWord: function() {
    var championWord = randomItem(champion);
    while (this.seen.includes(championWord)) {
      championWord = randomItem(champion);
    }
    this.seen.push(championWord);
    return championWord;
  }
};
