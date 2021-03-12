'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [
      {
        title: "Stardew Valley",
        image:
          "https://www.mobygames.com/images/covers/l/450739-stardew-valley-nintendo-switch-front-cover.jpg",
        likesCount: 87,
        releaseDate: "Febuary 26, 2016",
        developer: "ConcernedApe LLC",
        summary:
          "Stardew Valley is an RPG inspired by the Harvest Moon games where you play as the inheritor of an old farm in a small town called Stardew Valley. Leaving the taxing big city life behind, you embark upon a quest to restore the neglected tract through dedication and hard work.",
        purchase:
          "https://www.amazon.com/Stardew-Valley-Nintendo-Switch-Digital/dp/B076TK4M96/ref=sr_1_1?dchild=1&keywords=Stardew+Valley&link_code=qs&qid=1615326308&s=videogames&sr=1-1",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Animal Corssing New Horizon",
        image:
          "https://i.imgur.com/fb3gEHr.jpg",
        likesCount: 248,
        releaseDate: "March 20, 2020",
        developer: "Nintendo EPD",
        summary:
          "If the hustle and bustle of modern life’s got you down, Tom Nook has a new business venture up his sleeve that he knows you’ll adore: the Nook Inc. Deserted Island Getaway Package!",
        purchase:
          "https://www.animal-crossing.com/new-horizons/buy/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Goat Simulator",
        image:
          "https://www.mobygames.com/images/covers/l/308998-goat-simulator-playstation-3-front-cover.jpg",
        likesCount: 67,
        releaseDate: "April 01, 2014",
        developer: "Coffee Stain Studios AB",
        summary:
          "Goat Simulator is a parody game where you play as a goat. The gameplay is similar to sandbox games with no clear mission. The objective is to roam around the map and destroy various objects to earn points. The more 'stylish' your destruction, the more bonus points you get.",
        purchase:
          "https://store.steampowered.com/app/265930/Goat_Simulator/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Kerbal Space Program",
        image:
          "https://www.mobygames.com/images/covers/l/351388-kerbal-space-program-playstation-4-front-cover.jpg",
        likesCount: 98,
        releaseDate: "June 24, 2011",
        developer: "Squad",
        summary:
          "Kerbal Space Program is a simulation game in which players build and control their own space-going vessels. From a large array of parts players can build their own rockets and space planes and launch them from a fictional Earth inhabited by Kerbals. In space players can undertake other ventures such as building space stations, space ships or land on other celestial bodies.",
        purchase:
          "https://store.steampowered.com/app/220200/Kerbal_Space_Program/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dayz",
        image:
          "https://www.mobygames.com/images/covers/l/551893-dayz-xbox-one-front-cover.jpg",
        likesCount: 47,
        releaseDate: "December 13, 2018",
        developer: "Bohemia Interactive",
        summary:
          "It is a multiplayer open world survival horror game with zombies in a persistent environment, the fictional post-Soviet state Chernarus after a zombie apocalypse. It consists of different cities and smaller towns, large plains and forests.",
        purchase:
          "https://store.steampowered.com/app/221100/DayZ/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Sims 4",
        image:
          "https://www.mobygames.com/images/covers/l/460166-the-sims-4-playstation-4-front-cover.jpg",
        likesCount: 67,
        releaseDate: "September 02, 2014",
        developer: "The Sims Studio",
        summary:
          "Just like the previous games one or more custom characters are created through Create-a-Sim to live in a house designed by the player. As their lives unfold based on the environment, relationships and specific traits, the player gets to manage the life, needs to organize activities, attend to needs, and react to moods, with non-linear gameplay and no direct control.",
        purchase:
          "https://www.amazon.com/Sims-Online-Game-Code/dp/B00ENQXEX2/ref=sr_1_4?dchild=1&keywords=The+Sims+4&link_code=qs&qid=1615328038&s=videogames&sr=1-4",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cooking Simulator",
        image:
          "https://www.mobygames.com/images/covers/l/678526-cooking-simulator-xbox-one-front-cover.png",
        likesCount: 47,
        releaseDate: "June 06, 2019",
        developer: "Big Cheese Studio",
        summary:
          "Become the ultimate chef! Take control of a highly polished, realistic kitchen equipped with all kinds of utensils and stands. Unlock and master over 60 recipes or use dozens of lifelike ingredients to cook everything you like. All spiced up with a dash of real-life physics!",
        purchase:
          "https://www.amazon.com/Cooking-Simulator-access-offline/dp/B08FF2SBT3/ref=sr_1_3?dchild=1&keywords=Cooking+Simulator&link_code=qs&qid=1615328434&s=videogames&sr=1-3",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Microsoft Flight Simulator",
        image:
          "https://www.mobygames.com/images/covers/l/678796-microsoft-flight-simulator-windows-apps-front-cover.jpg",
        likesCount: 478,
        releaseDate: "August 18, 2020",
        developer: "Asobo Studio S.A.R.L.",
        summary:
          "From light planes to wide-body jets, fly highly detailed and accurate aircraft in the next generation of Microsoft Flight Simulator. Test your piloting skills against the challenges of night flying, real-time atmospheric simulation and live weather in a dynamic and living world. Create your flight plan to anywhere on the planet. Microsoft Flight Simulator includes 20 highly detailed planes with unique flight models and 30 hand-crafted airports.",
        purchase:
          "https://www.amazon.com/Microsoft-Flight-Simulator-Deluxe-Online/dp/B08DJG4XTX/ref=sr_1_4?dchild=1&keywords=Microsoft+Flight+Simulator&link_code=qs&qid=1615328668&s=videogames&sr=1-4",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Surgeon Simulator",
        image:
          "https://www.mobygames.com/images/covers/l/630664-surgeon-simulator-2013-macintosh-front-cover.png",
        likesCount: 147,
        releaseDate: "March 12, 2014",
        developer: "Bossa Studios Ltd.",
        summary:
          "The player uses two fingers together to drag and move around the environment. By holding one finger on a tool, it is grabbed and can be moved around. While it is being held, a second finger taps to aim it. A short tutorial at the start of the game lets players practice. The game uses the familiar desk as a starting location and the heart transplant as the first operation.",
        purchase:
          "https://store.steampowered.com/app/233720/Surgeon_Simulator/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Beyond Blue",
        image:
          "https://www.mobygames.com/images/covers/l/666689-beyond-blue-playstation-4-front-cover.jpg",
        likesCount: 98,
        releaseDate: "April 17, 2020",
        developer: "E-Line Media",
        summary:
          "Beyond Blue is a single-player narrative adventure that takes you deep into our planet’s beating blue heart. Explore the awesome wonder and unbounded mystery that exists within the world’s ocean.",
        purchase:
          "https://store.steampowered.com/app/883360/Beyond_Blue/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "No Mans Sky",
        image:
          "https://www.mobygames.com/images/covers/l/485099-no-man-s-sky-playstation-4-front-cover.jpg",
        likesCount: 276,
        releaseDate: "August 09, 2016",
        developer: "Hello Games Ltd.",
        summary:
          "No Man's Sky is a space exploration and survival game where the player explores a vast, nearly-infinite universe. Starting out on one of over 18 quintillion planets, the player is first tasked with gathering the necessary materials to repair and launch their ship into space. From there, the game is entirely open ended, though the ultimate goal is to reach the center of the galaxy. Along the way, players can mine for rare and valuable elements, catalog animal and plant life, search for ruins and alien artifacts, and converse and trade items and resources with several alien factions which inhabit the universe.",
        purchase:
          "https://store.steampowered.com/app/275850/No_Mans_Sky/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Sims 3",
        image:
          "https://www.mobygames.com/images/covers/l/153852-the-sims-3-macintosh-front-cover.jpg",
        likesCount: 98,
        releaseDate: "June 02, 2009",
        developer: "IronMonkey Studios Pty Ltd.",
        summary:
          "The player controls the Sim in his or her everyday life. Ranging from cooking, to going to the toilet, or taking a shower, to applying for a job, or developing a romantic interest.",
        purchase:
          "https://store.steampowered.com/app/47890/The_Sims_3/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "BeamNG.Drive",
        image:
          "https://howlongtobeat.com/games/BeamNGdrive.jpg",
        likesCount: 46,
        releaseDate: "August 03, 2013",
        developer: "BeamNG GmbH",
        summary:
          "BeamNG.drive is a realistic, immersive driving game offering near-limitless possibilities. Our soft-body physics engine simulates every component of a vehicle in real time, resulting in realistic, dynamic behavior.",
        purchase:
          "https://store.steampowered.com/app/284160/BeamNGdrive/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Car Mechanic Simulator",
        image:
          "https://www.mobygames.com/images/covers/l/695465-car-mechanic-simulator-2018-nintendo-switch-front-cover.jpg",
        likesCount: 35,
        releaseDate: "July 21, 2017",
        developer: "Red Dot Games",
        summary:
          "Car Mechanic Simulator 2018 challenges players to repair, paint, tune and drive cars. Find classic, unique cars in the new Barn Find module and Junkyard module. You can even add your self-made car in the Car Editor.",
        purchase:
          "https://www.playstation.com/en-us/games/car-mechanic-simulator/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Farming Simulator 19",
        image:
          "https://www.mobygames.com/images/covers/l/538458-farming-simulator-19-playstation-4-front-cover.jpg",
        likesCount: 87,
        releaseDate: "November 19, 2018",
        developer: "GIANTS Software GmbH",
        summary:
          "Farming Simulator 19 takes the biggest step forward yet with the franchise’s most extensive vehicle roster ever! You’ll take control of vehicles and machines faithfully recreated from all the leading brands in the industry, including for the first time John Deere, the largest agriculture machinery company in the world, Case IH, New Holland, Challenger, Fendt, Massey Ferguson, Valtra, Krone, Deutz-Fahr and many more.",
        purchase:
          "https://store.steampowered.com/app/787860/Farming_Simulator_19/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Arma 3",
        image:
          "https://external-preview.redd.it/R44F_C_G9NDjX9FVTVweX0DGvHcbVBRDKG1g-Xz4u5g.jpg?auto=webp&s=21cb2e18d6bc303ab06b6a27306522b33f5c7fdf",
        likesCount: 98,
        releaseDate: "September 12, 2013",
        developer: "Bohemia Interactive Studio s.r.o.",
        summary:
          "ArmA III is a military shooter which focuses on a more realistic approach than contempary first-person shooters. This means that firefights happen from large distances, squad commanders have a lot of commands available to give their soldiers and players can use various cars, tanks and aircraft (although with a less realistic flight model than Bohemia's Take on Helicopters).",
        purchase:
          "https://store.steampowered.com/app/107410/Arma_3/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "War Thunder",
        image:
          "https://www.mobygames.com/images/covers/l/307359-war-thunder-playstation-4-front-cover.jpg",
        likesCount: 156,
        releaseDate: "August 12, 2012",
        developer: "Gaijin Entertainment Corporation",
        summary:
          "War Thunder is a combat game dedicated to World War II military aviation, armoured vehicles, and fleets. There are many scenarios of the major battles fought during World War II and the Korean War. You can choose from several models of aircrafts and ground vehicles.",
        purchase:
          "https://warthunder.com/en",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cities Skylines",
        image:
          "https://www.mobygames.com/images/covers/l/517086-cities-skylines-playstation-4-edition-radio-station-pack-windows-apps-front-cover.jpg",
        likesCount: 68,
        releaseDate: "March 10, 2015",
        developer: "Colossal Order Ltd.",
        summary:
          "Cities: Skylines is a 3D city building simulator that allows players to create and manage large scale cities. Keeping a city under control involves managing health, education, transportation and employment among other factors. Players have the ability to designate areas into districts, which will then in turn allow them to enforce different policies. There is an in-built mod manager, which gives the players the chance to download mods from the Steam Workshop.",
        purchase:
          "https://store.steampowered.com/app/255710/Cities_Skylines/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Blade and Sorcery",
        image:
          "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/9246bffe09c17934ccc7ad81a31111ec.png",
        likesCount: 86,
        releaseDate: "December 11, 2018",
        developer: "WarpFrog",
        summary:
          "The era of the VR weightless, wiggle-sword combat is over. Blade & Sorcery is a medieval fantasy sandbox like no other, focusing on melee, ranged and magic combat that fully utilizes a unique and realistic physics driven interaction and combat system.",
        purchase:
          "https://store.steampowered.com/app/629730/Blade_and_Sorcery/",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Surgeon Simulator 2",
        image:
          "https://www.mobygames.com/images/covers/l/680047-surgeon-simulator-2-windows-front-cover.jpg",
        likesCount: 42,
        releaseDate: "August 21, 2020",
        developer: "Bossa Studios Ltd.",
        summary:
          "It’s a good day to save lives, but you can’t save them all alone. Now with the help of other ‘skilled’ surgeons, break the boring order of mundane medicine and embrace the chaos only a bunch of inept people can create together. Malpractice makes perfect!",
        purchase:
          "https://www.epicgames.com/store/en-US/p/surgeon-simulator-2",
        categoryId: "5",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Games', null, {});
  }
};
