'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
     /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert("Games",
      [
        //{title, image, likesCount, releaseDate, developer, summary, purchase, categoryId}
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
          title: "Assassin's Creed: Valhalla",
          image:
            "https://britgamer.s3.eu-west-1.amazonaws.com/styles/544_square_top/s3/2020-04/assassins-creed-valhalla-cover.jpg?itok=3aGe4E3H",
          likesCount: 0,
          releaseDate: "November 10, 2020",
          developer: "Ubisoft",
          summary:
            "England in the age of the Vikings is a fractured nation of petty lords and warring kingdoms. Beneath the chaos lies a rich and untamed land waiting for a new conqueror. Will it be you?",
          purchase:
            "https://www.amazon.com/s?k=assassins+creed+valhalla&crid=3VDKLL01753ZJ&sprefix=assassins%2Caps%2C229&ref=nb_sb_ss_midas-iss-sm_1_9",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Super Smash Bros. Ultimate",
          image:
            "https://www.mobygames.com/images/covers/l/548925-super-smash-bros-ultimate-nintendo-switch-front-cover.jpg",
          likesCount: 0,
          releaseDate: "December 7, 2018",
          developer: "Nintendo",
          summary: `Super Smash Bros. Ultimate for the Nintendo Switch brings back every fighter in the history of the series, adds newcomers and over 100 stages, and introduces a new adventure mode called "World of Light"`,
          purchase:
            "https://www.amazon.com/s?k=super+smash+bros+ultimate&crid=1YR6QQXQTPW1F&sprefix=super+smash+bros+u%2Caps%2C222&ref=nb_sb_ss_midas-iss-sm_2_18",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Legend of Zelda: Breath of the Wild",
          image:
            "https://d1x7zurbps6occ.cloudfront.net/product/xlarge/635177-176831.jpg",
          likesCount: 0,
          releaseDate: "March 3, 2017",
          developer: "Nintendo",
          summary:
            "After a century of hibernation, Link reawakens to once again save a ruined Hyrule from a great evil.",
          purchase:
            "https://www.amazon.com/s?k=legend+of+zelda+breath+of+the+wild",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Witcher 3: Wild Hunt",
          image:
            "https://www.mobygames.com/images/covers/l/392214-the-witcher-3-wild-hunt-xbox-one-front-cover.png",
          likesCount: 0,
          releaseDate: "May 19, 2015",
          developer: "CD Projekt Red",
          summary:
            "A monster hunter for hire embarks on an epic journey to find his former apprentice before The Wild Hunt can capture her and bring about the destruction of the world.",
          purchase:
            "https://www.amazon.com/s?k=witcher+3+wild+hunt&ref=nb_sb_noss_2",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Diablo 3",
          image:
            "https://www.mobygames.com/images/covers/l/296397-diablo-iii-reaper-of-souls-ultimate-evil-edition-playstation-4-front-cover.jpg",
          likesCount: 0,
          releaseDate: "May 15, 2012",
          developer: "Blizzard Entertainment",
          summary:
            "The Black Soulstone essence is screaming for vengeance and release. Before the artifact can be sealed away forever, Malthael, the Angel of Death manifests in the mortal realms with a deadly new purpose. And so begins the end of all things.",
          purchase: "https://www.amazon.com/s?k=diablo+3&ref=nb_sb_noss_1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Hollow Knight",
          image:
            "https://www.mobygames.com/images/covers/l/416462-hollow-knight-limited-edition-linux-front-cover.jpg",
          likesCount: 0,
          releaseDate: "February 24, 2017",
          developer: "Team Cherry",
          summary:
            "This is the story of a knight, in a quest to uncover the secrets of the long-abandoned kingdom of the Hallownest insects, whose depths attract the adventurous and brave with the promise of treasure or the answer to ancient mysteries.",
          purchase: "https://www.amazon.com/s?k=hollow+knight&ref=nb_sb_noss_1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Mortal Kombat 11",
          image: "https://www.amazon.com/s?k=mortal+kombat+11&ref=nb_sb_noss_1",
          likesCount: 0,
          releaseDate: "April 23, 2019",
          developer: "NetherRealm Studios",
          summary:
            "When a time lord starts merging past with the present, versions of heroes from both Mortal Kombat timelines must unite to right past wrongs and save the world.",
          purchase:
            "https://www.amazon.com/s?k=street+fighter+v&ref=nb_sb_noss_1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tekken 7",
          image:
            "https://www.mobygames.com/images/covers/l/506864-tekken-7-ultimate-edition-playstation-4-front-cover.png",
          likesCount: 0,
          releaseDate: "June 2, 2017",
          developer: "Bandai Namco Entertainment",
          summary:
            "After the events of Tekken 6, though Azazel was destroyed by Jin Kazama, the war between the Mishima Zaibatsu and G Corporation continues to ravage the world leading up to the final battle between Heihachi Mishima and his son, Kazuya.",
          purchase:
            "https://www.amazon.com/s?k=tekken+8+ps4&crid=YLAU319QRM92&sprefix=tekken+8%2Caps%2C214&ref=nb_sb_ss_ts-doa-p_1_8",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Sekiro: Shadows Die Twice",
          image:
            "https://www.mobygames.com/images/covers/l/547413-sekiro-shadows-die-twice-xbox-one-front-cover.jpg",
          likesCount: 0,
          releaseDate: "March 22, 2019",
          developer: "FromSoftware",
          summary:
            "Set in a reimagining of 1500s Sengoku era Japan. You play an unnamed shinobi, tasked with protecting a young lord of mystical lineage.",
          purchase: "https://www.amazon.com/s?k=sekiro&ref=nb_sb_noss_1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Games', null, {});
  },
};
