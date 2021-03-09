'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Games', [
      {
        title: "Dark Souls Remastered",
        image:
          "https://www.mobygames.com/images/covers/l/483065-dark-souls-remastered-xbox-one-front-cover.jpg",
        likesCount: 0,
        releaseDate: "May 23, 2018",
        developer: "From Software",
        summary:
          "Dark Souls takes place in the fictional kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind.",
        purchase:
          "https://www.amazon.com/Dark-Souls-Remastered-PlayStation-4/dp/B078Y4FR14",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Counter Strike Global Offensive",
        image:
          "https://static.wikia.nocookie.net/cswikia/images/1/1e/Csgo_steam_store_header_latest.jpg/revision/latest?cb=20170630034202",
        likesCount: 0,
        releaseDate: "August 21, 2012",
        developer: "Valve, Hidden Path Entertainment",
        summary:
          "Counter-Strike: Global Offensive (CS: GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content.",
        purchase:
          "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Minecraft",
        image:
          "https://www.mobygames.com/images/covers/l/672322-minecraft-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "November 18, 2011",
        developer: "Mojang",
        summary:
          "In Minecraft, players explore a blocky, procedurally-generated 3D world with infinite terrain, and may discover and extract raw materials, craft tools and items, and build structures or earthworks.",
        purchase:
          "https://www.minecraft.net/en-us/get-minecraft/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The escapists 2",
        image:
          "https://www.mobygames.com/images/covers/l/423371-the-escapists-2-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "August 22, 2017",
        developer: "Mouldy Toof Studios, Team17",
        summary:
          "In the game, players assume control of an inmate from a top-down perspective. The inmate must follow daily routines in the prison while at the same time, complete quests for fellow inmates and seek out opportunities to escape.",
        purchase:
          "https://www.amazon.com/Escapists-2-Xbox-One/dp/B073BYPLHD",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dark Souls 2",
        image:
          "https://howlongtobeat.com/games/Dark_Souls_II_cover.jpg",
        likesCount: 0,
        releaseDate: "March 11, 2014",
        developer: "From Software",
        summary:
          "Taking place in the kingdom of Drangleic, the game features both player versus environment (PvE) and player versus player (PvP) gameplay, in addition to having some co-op components. As in the earlier games in the series, it again features challenging gameplay.",
        purchase:
          "https://www.amazon.com/Dark-Souls-II-Scholar-First-PlayStation/dp/B00Q03M3HY",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Dark Souls 3",
        image:
          "https://www.mobygames.com/images/covers/l/438915-dark-souls-iii-deluxe-edition-xbox-one-front-cover.jpg",
        likesCount: 0,
        releaseDate: "March 24, 2016",
        developer: "From Software",
        summary:
          "It is an action role-playing game played in a third-person perspective. Players have access to a variety of weapons, armor, magic, and consumables that they can use to fight their enemies. Bonfires serve as checkpoints.",
        purchase:
          "https://www.amazon.com/dp/B00Z9LUCEY/ref=twister_B07RFZFNQT?_encoding=UTF8&psc=1",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Bloodborne",
        image:
          "https://www.mobygames.com/images/covers/l/476119-bloodborne-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "March 24, 2015",
        developer: "From Software",
        summary:
          "Bloodborne follows the player's character, a Hunter, through the decrepit Gothic, Victorian era–inspired city of Yharnam, whose inhabitants are afflicted with a blood-borne disease. Attempting to find the source of the plague, the player's character unravels the city's mysteries while fighting beasts and cosmic beings.",
        purchase:
          "https://www.amazon.com/Bloodborne-PlayStation-4/dp/B00KVR4HEC",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Demon Souls",
        image:
          "https://www.mobygames.com/images/covers/s/696239-demon-s-souls-playstation-5-front-cover.jpg",
        likesCount: 0,
        releaseDate: "November 12, 2020",
        developer: "Bluepoint Games",
        summary:
          "Demon's Souls is an action RPG focusing on brutal hack-and-slash gameplay in a fantasy world and a high difficulty level with few introductions. It is a remake of the 2009 game of the same name. It stays faithful to the original vision, only adding smaller additions and changes to the gameplay, but visually redone entirely including new motion capture animations.",
        purchase:
          "https://www.amazon.com/Demons-Souls-PlayStation-5/dp/B08FC5TTBF",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Terraria",
        image:
          "https://www.mobygames.com/images/covers/s/274541-terraria-playstation-3-front-cover.jpg",
        likesCount: 0,
        releaseDate: "May 16, 2011",
        developer: "Re-Logic",
        summary:
          "Terraria is a two dimensional platform game of exploration and crafting. Players can use mines and picks to collect various items from the environment including wood, ore and even spider webs. Resources acquired from the environment can be placed or crafted into all manner of items.",
        purchase:
          "https://store.steampowered.com/app/105600/Terraria/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Hades",
        image:
          "https://www.rpgfan.com/wp-content/uploads/2020/08/Hades-Cover-Art.jpg",
        likesCount: 0,
        releaseDate: "December 06, 2018",
        developer: "Supergiant Games",
        summary:
          "The player takes the role of Zagreus, the prince of the Underworld, who is trying to escape the realm to get away from his dispassionate father, Hades, and reach Mount Olympus. His quest is supported by the other Olympians, who grant him gifts to help fight through the beings that protect the exit from the Underworld.",
        purchase:
          "https://www.nintendo.com/games/detail/hades-switch/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Hyper Light Drifter",
        image:
          "https://www.mobygames.com/images/covers/l/354283-hyper-light-drifter-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "March 31, 2016",
        developer: "Heart Machine LLC",
        summary:
          "Players take control of the Drifter, a mysterious character who is dying of a strange disease. He wanders through a post-apocalyptic world searching for the cause, and potentially the cure, of his illness.",
        purchase:
          "https://www.nintendo.com/games/detail/hyper-light-drifter-special-edition-switch/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Cuphead",
        image:
          "https://www.mobygames.com/images/covers/s/674786-cuphead-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "September 29, 2017",
        developer: "StudioMDHR Entertainment",
        summary:
          "Cuphead is a classic run and gun action game heavily focused on boss battles. Inspired by cartoons of the 1930s, the visuals and audio are painstakingly created with the same techniques of the era, i.e. traditional hand drawn cel animation, watercolor backgrounds, and original jazz recordings.",
        purchase:
          "cupheadgame.com",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Fortnite",
        image:
          "https://www.mobygames.com/images/covers/l/416543-fortnite-standard-founder-s-pack-playstation-4-front-cover.png",
        likesCount: 0,
        releaseDate: "July 25, 2017",
        developer: "Epic Games",
        summary:
          "Fortnite Battle Royale is the completely free 100-player PvP mode in Fortnite. One giant map. A battle bus. Fortnite building skills and destructible environments combined with intense PvP combat. The last one standing wins. Download now for FREE and jump into the action.",
        purchase:
          "https://www.epicgames.com/store/en-US/p/fortnite",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Tom Clancy's Rainbow Six Siege",
        image:
          "https://www.mobygames.com/images/covers/l/318975-tom-clancy-s-rainbow-six-siege-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "December 01, 2015",
        developer: "Ubisoft Divertissements Inc.",
        summary:
          "Tom Clancy's Rainbow Six: Siege is a competitive, tactical multiplayer first person shooter developed by Ubisoft. One of the main features in the game is real time destruction and the ability for players to breach walls, ceilings and floors to gain an advantage over their enemies. The game is also centered around counter terrorist units (CTUs) and 20 different operators and their unique abilities in combat, which re-enforces the idea of strategic gameplay.",
        purchase:
          "https://www.ubisoft.com/en-us/game/rainbow-six/siege/buy",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Playerunknown Battlegrounds",
        image:
          "https://www.mobygames.com/images/covers/s/551888-playerunknown-s-battlegrounds-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "March 23, 2017",
        developer: "PUBG Corporation",
        summary:
          "Starting with nothing, players must fight to locate weapons and supplies in a battle to be the lone survivor. This realistic, high tension game is set on a massive 8x8 km island with a level of detail that showcases Unreal Engine 4's capabilities.",
        purchase:
          "https://store.steampowered.com/app/578080/PLAYERUNKNOWNS_BATTLEGROUNDS/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Monster Hunter World",
        image:
          "https://www.mobygames.com/images/covers/s/452375-monster-hunter-world-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "January 26, 2018",
        developer: "Capcom Co.",
        summary:
          "Welcome to a new world! Take on the role of a hunter and slay ferocious monsters in a living, breathing ecosystem where you can use the landscape and its diverse inhabitants to get the upper hand. Hunt alone or in co-op with up to three other players, and use materials collected from fallen foes to craft new gear and take on even bigger, badder beasts!",
        purchase:
          "https://www.amazon.com/Monster-Hunter-World-PlayStation-4-Standard/dp/B071G5HZ7F/ref=sr_1_1?dchild=1&keywords=Monster+Hunter+World&qid=1615324335&sr=8-1",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Stranded Deep",
        image:
          "https://www.mobygames.com/images/covers/s/659968-stranded-deep-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "January 23, 2015",
        developer: "Beam Team Pty Ltd",
        summary:
          "Stranded Deep is a first-person, open-world adventure game, with the main objectives being survival, crafting and exploration. In this game, the player takes control of the sole survivor of a plane crash in the Pacific Ocean. In the first part of the game, the player has to swim out of the sunken plane and find a life-raft. One of the plane's turbines will then explode, knocking out the player and sending the raft off into the ocean. The player then wakes up in the middle of nowhere with only a few items (such as a knife, lighter and a raft paddle) for survival.",
        purchase:
          "https://store.steampowered.com/app/313120/Stranded_Deep/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Darkest Dungeon",
        image:
          "https://www.mobygames.com/images/covers/s/364538-darkest-dungeon-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "Febuary 04, 2015",
        developer: "Red Hook Studios Inc.",
        summary:
          "Darkest Dungeon is a turn-based, side-scrolling RPG with roguelike and strategy elements. You manage a maximum of 25 randomly generated characters of thirteen possible classes, grouping them into temporary parties of four, which can be sent to dungeons in search of resources and equipment. You can upgrade your town, which harbors training, healing and equipment purchasing facilities.",
        purchase:
          "https://store.steampowered.com/app/262060/Darkest_Dungeon/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "Mount and Blade",
        image:
          "https://www.mobygames.com/images/covers/l/364539-mount-blade-warband-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "March 31, 2010",
        developer: "TaleWorlds Entertainment",
        summary:
          "In a land torn asunder by incessant warfare, it is time to assemble your own band of hardened warriors and enter the fray. Lead your men into battle, expand your realm, and claim the ultimate prize: the throne of Calradia!",
        purchase:
          "https://store.steampowered.com/app/48700/Mount__Blade_Warband/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: "The Escapists",
        image:
          "https://www.mobygames.com/images/covers/s/305532-the-escapists-playstation-4-front-cover.jpg",
        likesCount: 0,
        releaseDate: "Febuary 13, 2015",
        developer: "Mouldy Toof Studios",
        summary:
          "Experience simulated prison life in a pixel art environment. Work one of several prison jobs to earn money. For extra money, take on tasks from your fellow inmates, including stealing items, laying down beatings, or causing distractions. Use your money to buy tools and crafting ingredients from your cohorts and strategize a plan to gain your freedom. After escaping from the slew of standard prisons, download custom prisons from the Steam Workshop or design your own to share with the community.",
        purchase:
          "https://store.steampowered.com/app/298630/The_Escapists/",
        categoryId: "3",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Games', null, {});

  }
};
