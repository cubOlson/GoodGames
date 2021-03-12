"use strict";

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
          title: "God of War",
          image:
            "https://image.api.playstation.com/vulcan/img/rnd/202010/2217/KAmUQWQ5V9QF3XDzmty1VkKj.png?w=1920&thumb=false",
          likesCount: 21,
          releaseDate: "April 20, 2018",
          developer: "Santa Monica Studio",
          summary:
            "After wiping out the gods of Mount Olympus, Kratos moves on to the frigid lands of Scandinavia, where he and his son must embark on an odyssey across a dangerous world of gods and monsters.",
          purchase:
            "https://store.playstation.com/en-us/product/UP9000-CUSA07408_00-00000000GODOFWAR",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Grand Theft Auto",
          image: "https://i.ytimg.com/vi/VjZ5tgjPVfU/maxresdefault.jpg",
          likesCount: 43,
          releaseDate: "September 17, 2013",
          developer: "Rock Star Games",
          summary:
            "When a young street hustler, a retired bank robber and a terrifying psychopath find themselves entangled with some of the most frightening and deranged elements of the criminal underworld, the U.S. Government and the entertainment industry, they must pull off a series of dangerous heists to survive in a ruthless city in which they can trust nobody, least of all each other.",
          purchase:
            "https://www.amazon.com/s?k=gta+5&i=videogames&ref=nb_sb_noss_1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Call of Duty: Modern Warfare",
          image:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcpygamestorrent.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fcall-of-duty-modern-warfare-download-crack-pc-cover.jpg&f=1&nofb=1",
          likesCount: 54,
          releaseDate: "October 25, 2019",
          developer: "ACTIVISION",
          summary:
            "Captain Price and the SAS partner with the CIA and the Urzikstani Liberation Force to retrieve stolen chemical weapons. The fight takes you from London to the Middle East and beyond, as this joint task force battles to stop a global war.",
          purchase:
            "https://www.amazon.com/s?k=call+of+duty+modern+warfare&i=videogames&ref=nb_sb_noss_2",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Call of Duty: Warzone",
          image:
            "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2020/03/call-of-duty-warzone-box-art.jpg",
          likesCount: 2,
          releaseDate: "March 10, 2020",
          developer: "ACTIVISION",
          summary:
            "A massive combat experience with up to 150 players from the world of Call of Duty: Modern Warfare, free-to-play for everyone.",
          purchase: "https://www.callofduty.com/warzone/download",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Apex Legends",
          image: "https://coverfiles.alphacoders.com/101/101971.jpg",
          likesCount: 345,
          releaseDate: "February 4, 2019",
          developer: "EA Games",
          summary:
            "A battle Royale set in the Titanfall universe, focusing on hero and team based combat.",
          purchase: "https://www.ea.com/games/apex-legends",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Overwatch",
          image:
            "https://images.pushsquare.com/news/2016/05/play_overwatch_early_and_win_the_game_on_the_ps4/attachment/0/original.jpg",
          likesCount: 23,
          releaseDate: "May 24, 2016",
          developer: "Blizzard Entertainment",
          summary:
            "After a devastating war against a combat-ready team of intelligent machines known as Omnics, the former agents of the heroic team known as Overwatch must join forces once more to fight a new threat.",
          purchase:
            "https://www.amazon.com/s?k=Overwatch&i=videogames&ref=nb_sb_noss",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Tom Clancy's: Division 2",
          image:
            "https://upload.wikimedia.org/wikipedia/en/a/af/The_Division_2_art.jpg",
          likesCount: 65,
          releaseDate: "March 15, 2019",
          developer: "Ubisoft",
          summary:
            "Set shortly after the first game's virus outbreak which wiped out large amounts of the population. This time however, the game is set in the somewhat sunnier Washington D.C and is focused on the rebuilding of society.",
          purchase:
            "https://www.amazon.com/s?k=tom+clancy+division+2&i=videogames&ref=nb_sb_noss_1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Star Wars Jedi: Fallen Order",
          image:
            "https://www.mobygames.com/images/covers/l/612695-star-wars-jedi-fallen-order-deluxe-upgrade-xbox-one-front-cover.png",
          likesCount: 7,
          releaseDate: "November 15, 2019",
          developer: "EA Games",
          summary:
            "Set shortly after Revenge of the Sith, the player takes on the role of a Jedi padawan being hunted by the Empire after Order 66.",
          purchase:
            "https://www.amazon.com/s?k=star+wars+jedi+fallen+order&i=videogames&ref=nb_sb_noss_1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Super Mario Odyssey",
          image:
            "https://www.mobygames.com/images/covers/l/435360-super-mario-odyssey-nintendo-switch-front-cover.jpg",
          likesCount: 35,
          releaseDate: "October 27, 2017",
          developer: "Nintendo",
          summary:
            "Mario must travel to worlds unknown in order to stop Bowser from marrying Princess Peach.",
          purchase:
            "https://www.amazon.com/s?k=super+mario+odyssey&i=videogames&ref=nb_sb_noss_1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Dragon Ball Z: Kakarot",
          image:
            "https://www.mobygames.com/images/covers/l/625571-dragon-ball-z-kakarot-playstation-4-front-cover.png",
          likesCount: 76,
          releaseDate: "January 16, 2020",
          developer: "BANDAI NAMCO Entertainment",
          summary:
            "Play as the legendary Saiyan Son Goku 'Kakarot' as you relive his story and explore the world.",
          purchase:
            "https://www.amazon.com/s?k=dragonball+z+kakarot&i=videogames&ref=nb_sb_noss_1",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Resident Evil 3",
          image:
            "https://d2skuhm0vrry40.cloudfront.net/2019/articles/2019-12-03-13-42/re1.png/EG11/resize/512x-1/quality/75/format/jpg",
          likesCount: 3,
          releaseDate: "April 3, 2020",
          developer: "CAPCOM",
          summary:
            "Re-imagining of Resident Evil 3: Nemesis (1999). Jill Valentine escapes the crumbling Raccoon City amidst the nightmarish outbreak of the T-virus, a biological weapon developed by Umbrella, while being pursued by the unrelenting bioweapon Nemesis.",
          purchase:
            "https://www.amazon.com/s?k=resident+evil+3&i=videogames&ref=nb_sb_noss_2",
          categoryId: "1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Assassin's Creed: Valhalla",
          image:
            "https://britgamer.s3.eu-west-1.amazonaws.com/styles/544_square_top/s3/2020-04/assassins-creed-valhalla-cover.jpg?itok=3aGe4E3H",
          likesCount: 23,
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
          likesCount: 6,
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
          likesCount: 244,
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
          likesCount: 65,
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
          likesCount: 655,
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
          likesCount: 566,
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
          likesCount: 3,
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
          likesCount: 45,
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
          likesCount: 67,
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
