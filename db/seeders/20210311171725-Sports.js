'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert("Games", [
        {
          title: "Forza Horizon 4",
          image: "https://www.mobygames.com/images/covers/s/518449-forza-horizon-4-windows-apps-front-cover.jpg",
          likesCount: 0,
          releaseDate: "March 9, 2021",
          developer: "Playground Games",
          summary:
            "Dynamic seasons change everything at the world’s greatest automotive festival. Go it alone or team up with others to explore beautiful and historic Britain in a shared open world.",
          purchase:
            "https://www.amazon.com/s?k=Forza+Horizon+4&i=videogames&link_code=qs&tag=mobygames",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Beat Saber",
          image: "https://www.mobygames.com/game/beat-saber/cover-art/gameCoverId,540683/",
          likesCount: 0,
          releaseDate: "May 21, 2019",
          developer: "Beat Games",
          summary:
            "Beat Saber is a VR rhythm game where you slash the beats of adrenaline-pumping music as they fly towards you, surrounded by a futuristic world.",
          purchase:
            "https://www.amazon.com/PlayStation-VR-Borderlands-Saber-Bundle-4/dp/B07K9B6RK8/ref=sr_1_3?dchild=1&keywords=Beat+Saber&link_code=qs&qid=1615484413&s=videogames&sr=1-3",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dragon Ball FighterZ",
          image:
            "https://www.mobygames.com/images/covers/s/452368-dragon-ball-fighterz-playstation-4-front-cover.jpg",
          likesCount: 0,
          releaseDate: "January 26, 2018",
          developer: "Arc System Works",
          summary:
            "DRAGON BALL FighterZ is born from what makes the DRAGON BALL series so loved and famous: endless spectacular fights with its all-powerful fighters.",
          purchase:
            "https://www.amazon.com/Dragon-Ball-Fighterz-PlayStation-4/dp/B0793GS8NL/ref=sr_1_1?dchild=1&keywords=Dragon+Ball+FighterZ&link_code=qs&qid=1615484582&s=videogames&sr=1-1",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Street Fighter 5",
          image:
            "https://www.mobygames.com/images/covers/s/384417-street-fighter-v-playstation-4-front-cover.jpg",
          likesCount: 0,
          releaseDate: "February 16, 2016",
          developer: "Capcom",
          summary:
            "Experience the intensity of head-to-head battles with Street Fighter® V! Choose from 16 iconic characters, then battle against friends online or offline with a robust variety of match options.",
          purchase: "https://www.amazon.com/Street-Fighter-V-PS4-playstation-4/dp/B07HQWMD96/ref=sr_1_1?dchild=1&keywords=Street+Fighter+V&link_code=qs&qid=1615484723&s=videogames&sr=1-1",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Wreckfest",
          image: "https://www.mobygames.com/images/covers/s/587310-wreckfest-playstation-4-front-cover.jpg",
          likesCount: 0,
          releaseDate: "June 14, 2018",
          developer: "Bugbear",
          summary:
            "Wreckfest is a demolition derby themed racing game with soft-body damage modeling, sophisticated driving dynamics and in-depth vehicle upgrading, featuring both demolition derbies and more traditional track races. It’s all about fun, breakneck racing and over-the-top crashes.",
          purchase: "https://www.amazon.com/Wreckfest-Xbox-One/dp/B07DHNMFP4/ref=sr_1_1?dchild=1&keywords=Wreckfest&link_code=qs&qid=1615484831&s=videogames&sr=1-1",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sausage Sports Club",
          image:
            "https://www.mobygames.com/images/covers/s/494879-sausage-sports-club-nintendo-switch-front-cover.jpg",
          likesCount: 0,
          releaseDate: "July 19, 2018",
          developer: "Chris Wade",
          summary:
            "Sausage Sports Club is a physics game about floppy animals playing sports!",
          purchase:
            "https://sausagesports.club/",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "FIFA 18",
          image:
            "https://www.mobygames.com/images/covers/s/432452-fifa-18-nintendo-switch-front-cover.jpg",
          likesCount: 0,
          releaseDate: "September 29, 2017",
          developer: "Electronic Arts, Inc.",
          summary:
            "FIFA 18 on Nintendo Switch™ is the most immersive, social, and authentic football game ever created for Nintendo players. Feature packed, you can now play the world's game anytime, anywhere and in unique ways with FIFA 18 on Nintendo Switch.",
          purchase:
            "https://www.origin.com/usa/en-us/store/fifa/fifa-18",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "FIFA 15",
          image:
            "https://www.mobygames.com/images/shots/s/1011640-fifa-15-j2me-screenshot-title-screen.jpg",
          likesCount: 0,
          releaseDate: "November 15, 2015",
          developer: "Electronic Arts, Inc.",
          summary:
            "FIFA 15 is the mobile version of the annual football game series. Apart from updated player and team databases, the game does not have any noticeable differences from FIFA 14. Some of the included leagues have been changed however. Instead of European second divisions, the game adds the Turkish Süper Lig, the Mexican Liga Bancomer MX, and the Brazilian Primera División. It uses the same game engine and includes the same game modes: friendly, training, season, virtual pro, my cup, free kick challenge and penalties.",
          purchase:
            "https://www.origin.com/usa/en-us/store/fifa/fifa-15",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "FIFA 12",
          image:
            "https://www.mobygames.com/images/covers/s/252750-fifa-12-android-front-cover.jpg",
          likesCount: 0,
          releaseDate: "September 28, 2011",
          developer: "Electronic Arts, Inc.",
          summary:
            "This version of FIFA 12 is designed for touch based mobile devices. In addition to single matches it features four basic game modes: leagues, cups, practice arena and penalty shoot-out. There are thirty leagues and twenty one cups to compete in. In both leagues and cups the player can either choose to play the matches himself or to simulate them. Some team management options exist. The player can pick a formation and a starting eleven as well as kick takers and team styles. Team styles include for example playing with counter attacks, zonal marking and attacking full backs. The iOS version of the game also features a manager career mode that is not available in the Android version. In addition to these game modes there are also daily challenges where the player joins a match at a certain stage and has to succeed with a task, for example scoring with a free kick.",
          purchase:
            "https://www.ea.com/en-gb/news/50-precent-off-ea-sports-fifa-12",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Madden NFL 2003",
          image:
            "https://www.mobygames.com/images/covers/s/126102-madden-nfl-2003-windows-front-cover.jpg",
          likesCount: 0,
          releaseDate: "January 16, 2002",
          developer: "Electronic Arts, Inc.",
          summary:
            "In the game you control the ball by players of your favorite team to win the match. Opposite players also has tactic commands of their coach to take the ball from you.",
          purchase:
            "https://www.amazon.com/Madden-NFL-2003-Playstation-2-Pc/dp/B0000690ZP%3FSubscriptionId%3D1Z2BQGSC90VEF3V2QJ82%26tag%3Dmobygames%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB0000690ZP",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Madden NFL 2002",
          image:
            "https://www.mobygames.com/images/covers/s/85266-madden-nfl-2002-xbox-front-cover.jpg",
          likesCount: 0,
          releaseDate: "April 3, 2001",
          developer: "Electronic Arts, Inc.",
          summary:
            "John Madden brings the best football back with updated stats and players, bigger than ever! All 32 NFL teams including the expansion Houston Texans. Hard to believe but they make many improvements on the previous version. There are new player faces and on-field animations and expanded motion capture. EA Sports added a new game within the game called Two Minute Drill.",
          purchase:
            "https://www.amazon.com/Madden-NFL-2002-Playstation-2/dp/B00005MO5E%3FSubscriptionId%3D1Z2BQGSC90VEF3V2QJ82%26tag%3Dmobygames%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00005MO5E",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Madden NFL 2001",
          image:
            "https://www.mobygames.com/images/covers/s/86765-madden-nfl-2001-windows-front-cover.jpg",
          likesCount: 0,
          releaseDate: "August 25, 2000",
          developer: "Electronic Arts, Inc.",
          summary:
            "The best-selling PC football game is back to dominate with legendary Madden gameplay and the deepest feature set available. Think you got game? Take your skills online against the best through EA SPORTS-sponsored tournaments. Check the online ranking to see how good you really are. The exclusive NFL coaches club license brings in real coaches complete with their own signature styles and plays to add even more strategy to your game.",
          purchase:
            "https://www.amazon.com/Madden-NFL-2001-Sony-PlayStation-2/dp/B00004U5VN/ref=sr_1_1?dchild=1&keywords=Madden+NFL+2001&link_code=qs&qid=1615488783&s=videogames&sr=1-1",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Madden NFL 2000",
          image:
            "https://www.mobygames.com/images/covers/s/22061-madden-nfl-2000-playstation-front-cover.jpg",
          likesCount: 0,
          releaseDate: "August 17, 1999",
          developer: "EA Tiburon",
          summary: `John Madden brings the best football back to PC, bigger than ever! All 31 NFL teams (including the new Cleveland Browns), all-star and classic teams, player-specific animations, and much more. Graphics are better than ever. Improved running and rush interface gives you the ultimate control over strategy and execution. Even a franchise mode to keep you busy for a while.`,
          purchase:
            "https://www.amazon.com/Madden-NFL-2000-PC/dp/B00000K3DA%3FSubscriptionId%3D1Z2BQGSC90VEF3V2QJ82%26tag%3Dmobygames%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB00000K3DA",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Major League Baseball 2006",
          image:
            "https://www.mobygames.com/images/covers/s/139405-major-league-baseball-2k6-psp-front-cover.jpg",
          likesCount: 0,
          releaseDate: "April 18, 2006",
          developer: "Kush Games, Inc.",
          summary:
            "Major League Baseball 2K6 is a version of its console counterparts, similar in style, but with different amenities. It still features the same rosters and the three year report as well that the console versions have, but has different animations, designed for the PSP, as well as the same game mechanics as the consoles as well.",
          purchase:
            "https://www.amazon.com/Major-League-Baseball-2K6-PlayStation-2/dp/B000E260KI/ref=sr_1_1?dchild=1&keywords=Major+League+Baseball+2K6&link_code=qs&qid=1615489354&s=videogames&sr=1-1",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Major League Baseball 2005",
          image:
            "https://www.mobygames.com/images/covers/s/176365-major-league-baseball-2k5-playstation-2-front-cover.jpg",
          likesCount: 0,
          releaseDate: "February 24, 2005",
          developer: "Kush Games, Inc.",
          summary:
            "MLB 2K5 is the first in the series of 2K games, taking over from it's Sega predecessor, ESPN Major League Baseball. This one has been completely revamped with brand new control schemes and a new graphics engine. It features brand new animations and added a great deal of detail to the players, stadiums, weather and even cut scenes.",
          purchase:
            "https://www.amazon.com/MLB-2K5-PlayStation-2/dp/B0002IQCL6%3FSubscriptionId%3D1Z2BQGSC90VEF3V2QJ82%26tag%3Dmobygames%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3DB0002IQCL6",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "MLB 2004",
          image:
            "https://www.amazon.com/Playstation-2-MLB-2004/dp/B00008DHNS",
          likesCount: 0,
          releaseDate: "Aril 15, 2003",
          developer: "Sony Computer Entertainment America, Inc.",
          summary:
            "MLB 2004 is the game of baseball brought home. This game strives for realism with total control batting, pitching, and fielding, as well as having every player's head accurately recreated with the use of a 3D scanner.",
          purchase: "https://www.amazon.com/Playstation-2-MLB-2004/dp/B00008DHNS",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "NBA 08",
          image:
            "https://www.mobygames.com/images/covers/s/139419-nba-08-psp-front-cover.jpg",
          likesCount: 0,
          releaseDate: "October 02, 2007",
          developer: "SCE Studios San Diego",
          summary:
            "This version is different from the PS2 and PS3 versions. This one does not feature the Life Mode like the PS2, but has a Conquest Mode where the player can earn money through games, upgrading attributes and even team upgrades as well as buying items for their home city.",
          purchase: "https://www.amazon.com/NBA-08-Playstation-3/dp/B000V4TXN0/ref=sr_1_1?dchild=1&keywords=NBA+08&link_code=qs&qid=1615495011&s=videogames&sr=1-1",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "NBA 07",
          image: "https://www.mobygames.com/images/covers/s/154019-nba-07-playstation-3-front-cover.jpg",
          likesCount: 0,
          releaseDate: "November 17, 2006",
          developer: "SCE Studios San Diego",
          summary:
            "NBA 07 is the second game in the NBA: Featuring the Life series, and one of the launch games of the PlayStation 3. In addition to the traditional Season Mode, featuring all current NBA teams and players, there is an NBA Replay mode, which allows players to replay highlights from the 2006 season. Also featured is Games of the Week where users can relay highlights from the current 2007 season by downloading new games on a weekly basis.",
          purchase:
            "https://www.amazon.com/NBA-07-Playstation-3/dp/B000JLP02S",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "NBA 06",
          image:
            "https://www.mobygames.com/images/covers/s/139418-nba-06-psp-front-cover.jpg",
          likesCount: 0,
          releaseDate: "October 04, 2005",
          developer: "SCE Studios San Diego",
          summary:
            "While the same series as it's console cousin, this one has a few notably differences. While it does feature the gameplay options of Exhibition, Practice, Season, Playoffs, Minigames and Wireless mode. The most notably difference is the lack of The Life mode that its PS2 counterpart features. There are also completely different minigames which are the Playstation Skills Challenge, the 3-Point Shoot-out as well as classic schoolyard games such as HORSE, Paint and Dodgeball. Players can also unlock jerseys and Upper Deck trading cards by completing these mini-games.",
          purchase:
            "https://www.amazon.com/NBA-Live-06-PlayStation-2/dp/B000930DMI/ref=sr_1_1?dchild=1&keywords=NBA+06&link_code=qs&qid=1615495221&s=videogames&sr=1-1",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sports Party",
          image:
            "https://www.mobygames.com/images/covers/s/562361-sports-party-nintendo-switch-front-cover.jpg",
          likesCount: 0,
          releaseDate: "October 30, 2018",
          developer: "Magic Pockets SAS",
          summary:
            "Sports Party brings the sun, sea, and sports right to your fingertips! Whether at home or on the go, challenge your family and friends to Frisbee, Jet Ski, Basketball, Golf, Skateboarding, and Beach Tennis to claim victory!",
          purchase: "https://www.bestbuy.com/site/sports-party-nintendo-switch/6301963.p?skuId=6301963",
          categoryId: "4",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {

   return queryInterface.bulkDelete('Games', null, {});
  },
};
