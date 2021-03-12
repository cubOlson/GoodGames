'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [
      {
        title: "Black Desert Online",
        image:
          "https://www.mobygames.com/images/covers/l/545077-black-desert-online-xbox-one-front-cover.png",
        likesCount: 93,
        releaseDate: "May 24, 2017",
        developer: "Pearl Abyss",
        summary:
          "Black Desert Online is a sandbox, living-world MMORPG. Experience fast-paced, action-packed combat, hunt monsters and huge bosses, fight with friends in a guild to siege nodes and region castles, train your life skills such as fishing, trading, crafting, cooking, and much more!",
        purchase:
          "https://store.steampowered.com/app/582660/Black_Desert_Online/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Elite Dangerous",
        image:
          "https://www.mobygames.com/images/covers/s/412074-elite-dangerous-playstation-4-front-cover.jpg",
        likesCount: 24,
        releaseDate: "April 02, 2015",
        developer: "Frontier Developments plc",
        summary:
          "Elite: Dangerous is a game that combines space exploration, combat and trading in a futuristic setting. It is the fourth game in the Elite series and the sequel to the 1995 Frontier: First Encounters. It is set in an open world based on the real Milky Way and it is persistent in the way that it started in the year 3300 when it was launched in 2014 and time runs in sync with ours.",
        purchase:
          "https://www.elitedangerous.com/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Guild Wars 2",
        image:
          "https://www.mobygames.com/images/covers/s/619300-guild-wars-2-windows-front-cover.jpg",
        likesCount: 84,
        releaseDate: "August 28, 2012",
        developer: "ArenaNet, LLC",
        summary:
          "During these 250 years, massive creatures called elder dragons awakened and 5 races that were fighting each other are now fighting together against a greater threat, an elder dragon named Zhaitan that is spreading terror and corruption in all Tyria.",
        purchase:
          "https://www.guildwars2.com/en/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rune Scape",
        image:
          "https://www.mobygames.com/images/covers/l/719264-runescape-ipad-front-cover.png",
        likesCount: 27,
        releaseDate: "2001",
        developer: "Jagex Ltd.",
        summary:
          "Runescape is a browser-based 3D Java online-only continuous game in which you possess a character with an inventory and skills. Training in fighting, mining, smithing, magic, prayer and many more skills will enhance your character and allow you to become a powerful player. Trading between players allows one to make money to have the best weapons, armors, runes and other items at their disposition.",
        purchase:
          "Not Available for Purchase",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Destiny 2",
        image:
          "https://www.mobygames.com/images/covers/l/425032-destiny-2-playstation-4-front-cover.png",
        likesCount: 56,
        releaseDate: "September 06, 2017",
        developer: "Bungie, LLC",
        summary:
          "In combat, Guardians can channel their power to turn the tide of battle. Choose between a variety of subclasses, each with its own unique set of abilities, and unleash devastating Supers to protect your allies or demolish your enemies.",
        purchase:
          "https://www.bungie.net/7/en/Destiny/NewLight",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Destiny",
        image:
          "https://www.mobygames.com/images/covers/l/290440-destiny-playstation-3-front-cover.jpg",
        likesCount: 37,
        releaseDate: "September 09, 2014",
        developer: "Bungie, LLC",
        summary:
          "Destiny is a futuristic first-person shooter set in a persistent world. When humans first set foot on Mars they discovered the Traveler, a giant sphere that then allowed mankind to colonize space quickly. Centuries later the Darkness, an enemy of the Traveler, arrived and waged war against it and all of its creations. The Traveler is forced to scarify itself as a measure of protection and what is left of humanity on Earth is forced to live in a city constructed underneath. The Traveler enlists warriors known as Guardians with special abilities as a personal army. These Guardians are guided by Ghosts, artificial intelligence. The player's character is found by such a Ghost (acting as a robot companion in the game) and becomes a Guardian.",
        purchase:
          "https://www.amazon.com/Destiny-Standard-PlayStation-4/dp/B00BGA9Y3W%3Fpsc%3D1%26SubscriptionId%3D1Z2BQGSC90VEF3V2QJ82%26tag%3Dmobygames%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00BGA9Y3W",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fallout 76",
        image:
          "https://www.mobygames.com/images/covers/s/516725-fallout-76-playstation-4-front-cover.jpg",
        likesCount: 385,
        releaseDate: "October 23, 2018",
        developer: "Bethesda Game Studios",
        summary:
          "Welcome you to Fallout 76, the online multiplayer role-playing game. Work together, or not, to survive. Under the threat of nuclear annihilation, you'll experience the largest, most dynamic world ever created in the legendary Fallout universe.",
        purchase:
          "https://www.amazon.com/Fallout-76-PlayStation-4/dp/B07DD9571S/ref=sr_1_1?dchild=1&keywords=Fallout+76&link_code=qs&qid=1615332553&s=videogames&sr=1-1",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Elder Scrolls Online",
        image:
          "https://www.mobygames.com/images/covers/s/282553-the-elder-scrolls-online-macintosh-front-cover.jpg",
        likesCount: 75,
        releaseDate: "April 04, 2014",
        developer: "ZeniMax Online Studios, LLC",
        summary:
          "The Elder Scrolls Online is an MMORPG and the first game in the long-running RPG series not only to feature multiplayer, but also making it a multiplayer-only environment. The game begins with character creation with four classes (Dragon Knight, Nightblade, Sorcerer and Templar). The game consists of three factions with three races each: Aldmeri Dominion (Altmer, Bosmer and Khajiit), Daggerfall Covenant (Breton, Orc and Redguard) and Ebonheart Pact (Argonian, Dunmer and Nord).",
        purchase:
          "https://www.amazon.com/Elder-Scrolls-Online-Collection-Blackwood-Xbox/dp/B08V6PXP5Z/ref=sr_1_1?dchild=1&keywords=The+Elder+Scrolls+Online&link_code=qs&qid=1615332628&s=videogames&sr=1-1",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Defiance",
        image:
          "https://www.mobygames.com/images/covers/s/354520-defiance-windows-front-cover.jpg",
        likesCount: 38,
        releaseDate: "April 02, 2013",
        developer: "Trion Worlds, Inc.",
        summary:
          "Defiance is an MMO third-person shooter set in a persistent universe. It was made as a tie-in to the US SyFy television series of the same name. The game takes place several decades into the future in the San Francisco Bay Area, following a war between the human race and an alien race known as the Votans. Due to their planet being destroyed, The Votans arrived on Earth hoping to find a vacant planet where they could set up a new civilization. Humans and Voltans clashed, unleashing alien power that terraformed the earth, causing the Earth's surface to change dramatically. Old species and plants became extinct, while new species emerged.",
        purchase:
          "https://store.steampowered.com/app/224600/Defiance/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Blade and Soul",
        image:
          "https://www.mobygames.com/images/covers/s/374800-blade-soul-windows-front-cover.jpg",
        likesCount: 65,
        releaseDate: "January 19, 2016",
        developer: "Team Bloodlust",
        summary:
          "Blade & Soul is a fantasy martial arts-themed MMORPG. You play the lone surviving student of a legendary martial arts school. After your master is slain at the hands of the evil sorceress, Jinsoyun, she leaves you for dead. After being discovered by a former student of your master, you tend to your wounds before setting out on your quest to avenge your fallen master. You traverse a broken world, meeting other warriors eager to help you stop Jinsoyun and save the world from a thousand years of darkness.",
        purchase:
          "https://www.bladeandsoul.com/en/freetoplay/?campaign_id=bs.1.cs8.pn9.0.r1&utm_medium=paidsearch&utm_source=google&utm_campaign=bsna&gclid=Cj0KCQiA1pyCBhCtARIsAHaY_5fcIgFwibef6gwtpLaYpnlvKThm6Q5rTRRmxaqVxrNlunxquDVIXeQaAtDbEALw_wcB",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Rift",
        image:
          "https://www.mobygames.com/images/covers/s/213782-rift-windows-front-cover.jpg",
        likesCount: 9,
        releaseDate: "March 01, 2011",
        developer: "Trion Worlds, Inc.",
        summary:
          "RIFT is a 3D MMORPG set in the fantasy world Telara and requires a monthly subscription to play next to the initial purchase. The player can choose from different shards (servers) with the same quests and content, but with slightly different rules: Player vs. Environment (attacking other players is restricted to faction clashes and warfronts), Player vs. Player (other players can be attacked anywhere in the world), and Roleplaying (subset of PvE and PvP shards with a focus on remaining in character and stricter naming rules).",
        purchase:
          "https://www.trionworlds.com/rift/en/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Trove",
        image:
          "https://www.mobygames.com/images/covers/s/393403-trove-playstation-4-front-cover.jpg",
        likesCount: 56,
        releaseDate: "July 09, 2015",
        developer: "Trion Worlds, Inc.",
        summary:
          "Grab your friends, hone your blades, and set off for adventure in Trove, the ultimate action MMO! Battle the forces of Shadow in realms filled with incredible dungeons and items created by your fellow players. Whether hunting treasure in far-off lands or building realms of your own, it’s never been this good to be square!",
        purchase:
          "https://store.steampowered.com/app/304050/Trove/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Tera",
        image:
          "https://www.mobygames.com/images/covers/s/464508-tera-playstation-4-front-cover.jpg",
        likesCount: 36,
        releaseDate: "January 25, 2011",
        developer: "Bluehole Studio, Inc.",
        summary:
          "Tera has typical MMORPG features such as quests, crafting and player versus player action. Combat uses a real-time battle system that incorporates third person camera view. The player targets an enemy with a cross-hair cursor rather than clicking or tabbing an individual opponent (this is called the Non-Target battle system by the publisher). Players must actively dodge enemy attacks. The player may use keyboard and mouse, or an Xbox 360 Controller to control their character.",
        purchase:
          "https://store.steampowered.com/app/212740/TERA__Action_MMORPG/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "World of Warcraft",
        image:
          "https://www.mobygames.com/images/covers/s/38593-world-of-warcraft-macintosh-front-cover.jpg",
        likesCount: 123,
        releaseDate: "November 23, 2004",
        developer: "Blizzard Entertainment Inc.",
        summary:
          "World of Warcraft is a MMORPG based in the Warcraft universe. The player creates a character choosing from 8 races and 9 classes. Most races start in their own part of the vast world. As the races move out from their starting locations, they can meet the other races if they choose to move out through the world. Both races and classes have unique abilities, skills, and spells to help them survive in the world.",
        purchase:
          "https://worldofwarcraft.com/en-us/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Pokemon Go",
        image:
          "https://www.mobygames.com/images/covers/s/349515-pokemon-go-android-front-cover.jpg",
        likesCount: 87,
        releaseDate: "March 29, 2016",
        developer: "Niantic, Inc., Nintendo Co., Ltd., Pokémon Company, The",
        summary:
          "Pokémon GO is an augmented reality game in which players may capture and train Pokémon by exploring real-world environments. Pokémon may be found anywhere, though the species that appear depend on the player's location; for example, a player living near the ocean will find more water Pokémon than someone who lives elsewhere. The player's device will vibrate when a Pokémon is nearby, and once close enough, the player may throw Poké Balls in an attempt to capture it. Obtaining a Pokémon grants Stardust and evolution family-specific candies, items which are used to power up and evolve Pokémon the player owns.",
        purchase:
          "Available on any mobile device",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "PlanetSide 2",
        image:
          "https://www.mobygames.com/images/covers/s/306461-planetside-2-playstation-4-front-cover.jpg",
        likesCount: 67,
        releaseDate: "November 20, 2012",
        developer: "Sony Online Entertainment Inc.",
        summary:
          "PlanetSide 2 is a free-to-play massively multiplayer online first-person shooter that delivers combat on a large scale with up to 2,000 players in a single conflict. It is a re-imagening of the original PlanetSide game. Battles take place with air and ground vehicles slugging it out alongside squads of troops. Whether in open fields, tightly packed urban centers or enormous structures, planning, teamwork and communication are essential. The game features continent maps with dozens of square kilometers of seamless gameplay space. Landmass has intrinsic value as the meta game is about territorial control of a continent split up into different sectors.",
        purchase:
          "https://store.steampowered.com/app/218230/PlanetSide_2/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Star Wars: The Old Republic",
        image:
          "https://www.mobygames.com/images/covers/s/444254-star-wars-the-old-republic-windows-front-cover.jpg",
        likesCount: 66,
        releaseDate: "December 20, 2011",
        developer: "BioWare Austin, LLC",
        summary:
          "Star Wars: The Old Republic is an MMORPG set in the Star Wars universe, in a time called the Old Republic when a cold war has split the galaxy between the Republic and the Sith Empire. The player character is one of several classes and will follow a specific storyline for that class. Gameplay consists of open environments with enemies that need to be fought, special instances for groups of characters called flash points, and arenas for fighting the other faction of the game, called war zones. During the game the player is led from one scene to another. Each scene is called a planet and consist of a series of locations closely linked and gives some hours or days of gameplay.",
        purchase:
          "https://store.steampowered.com/app/1286830/STAR_WARS_The_Old_Republic/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Final Fantasy 14 Online",
        image:
          "https://preview.redd.it/yszbjtd1i9021.jpg?width=1500&format=pjpg&auto=webp&s=58ddad397eea154c8594de118d15e236002a29b3",
        likesCount: 57,
        releaseDate: "September 30, 2010",
        developer: "Square Enix Co., Ltd.",
        summary:
          "Final Fantasy XIV Online, like its predecessor Final Fantasy XI, is a MMORPG. Upon subscribing, a player can create a custom character (chosen between the five races - each having two different clans - available in the game: Hyur (Midland and Highland), Miqo'te (Seeker of the Sun and Keeper of the Moon), Lalafell (Plainsfolk and Dunefolk), Elezen (Wildwood and Duskwight) and Roegadyn (Sea Wolf and Hellsguard) to explore the world of Eorzea, starting in one on the three City States: Limsa Lomina, Gridania and Ul'dah.",
        purchase:
          "https://store.playstation.com/en-us/product/UP0082-CUSA00288_00-C000010000000000",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Club Penguin Rewritten",
        image:
          "https://static.wikia.nocookie.net/cppsworld/images/0/05/Julyimage.jpg/revision/latest?cb=20171220173601",
        likesCount: 32,
        releaseDate: "March 29, 2017",
        developer: "Disney Canada, Inc.",
        summary:
          "Club Penguin rewritten was a massively-multiplayer online role-playing game (MMORPG) and the successor to Club Penguin. Players create a custom penguin character and then explore the persistent game world, participating in games, challenges and activities, or freely exploring or engaging other human-controlled characters. Players can create and customize their own igloo and have other players visit it. The character's clothing can be customized through the Customizer, with blueprints, fabrics, and decals in a constantly updated catalog where players can buy and sell items. The game was free-to-play with paid subscriptions for additional features such as clothing design options, the ability to buy party supplies, access to all adventures, daily challenges, the ability to use gear etc.",
        purchase:
          "https://cprewritten.net/",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "NeverWinter",
        image:
          "https://www.mobygames.com/images/covers/s/353047-neverwinter-playstation-4-front-cover.jpg",
        likesCount: 87,
        releaseDate: "June 20, 2013",
        developer: "Cryptic Studios, Inc.",
        summary:
          "Neverwinter is a MMORPG set in and around the Dungeons & Dragons city Neverwinter. It is a dark time and the city is attacked by a horde of undead lead by Valindra Shadowmantle. The player character shipwrecks in front of the city and proceeds to help defending the city.",
        purchase:
          "https://www.arcgames.com/en/games/neverwinter",
        categoryId: "2",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      ], { });
  },

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Games', null, {});
}
};
