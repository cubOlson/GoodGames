Features and MVPs
# Home Page
  - User login & account creation
  - Games and Categories

# Reviews
  - Opinion
  - Rating
  - Played status

# Rankings by Category
  -Shows top 20 games by category
  -games rated by number of ratings and average score
  -each product has dropdown with "Want to play" "Currently playing" and "Played" 
    -if user selects the "played option" they are prompted to rate and review


# Product page
  -Photos or videos demoing the product
  -1 to 2 paragraph description of the game
  -shows game details like Publisher, release date, platforms
  -displays total number of ratings and avg score
  -displays user reviews and review box for comments
  -provides link to purchase game
  *includes LFG nav bar for discord links

# User story - New User
  -As a new user I would arrive visit the website to find a new action RPG
  -from the home page I see a list of best Action RPG games and click the link
  -the link brings me to a page with the top 20 Action RPG games filtered and ranked
  -I hover over the 2nd card and a summary pops up.
  -I licking on the card brings me to a product page populated with reviews and links to purchase

# User story - Logged-in user
  -A registered user would arrive at the home page after deciding to write a review for a game
  -Upon logging in the site takes them directly to their own games library
  -They select the game they want to leave a review for which brings them to the game's product page
  -The user scrolls down to the comment section and selects a rating out of 5 starts and writes into the provided text box if they're logged in, or prompts user to log in or register if not.

# possible issues
  -A registered user harasses a previous user for writing an unfavorable review on their favorite game. 
  
  -registered user selects played on all games and votes 1 star or 5 stars ambiguously

  INDEX pug (framework)
    Navbars
      top navbar (everywhere)
        -logo & header (branding / link to home)
        -login & join
        -search bar
         
    
    FOOTER
      -company contacts
      -copywrite info
      -link to github
      -help


  home page
    -featured games banner -> links to product pages
    -Most  -> links to category rankings
    -


    ideas 

    --What will the home page look like?
    
    The home page would display a Navbar at the top of the page containing button links to their games library, their discussions, the home page via the GG logo as well as profile dropdown containing links to their profile settings, a help page and a sign out button. 

    --The left navbar could show the game you're currently playing, a current event hosted by the website, a wishlist and the user's bookshelves. Alternatively we could display a list of categories.

    --The main content of the home page would be a grid of cards for each category and each card would have a picture of the top rated game for that category. Alternatively this area could display a grid of upcoming titles or featured weekly / monthly titles. 
    These titles would each have a select with the played, currently playing and want to play options. If the user selects the played option a stars div will appear allowing the user to rate the game.
       
    --The right navbar on GoodReads shows adds as well as Amazon/Kindle links to purchase a book. As a stretch goal we could try to implement an LFG navbar that links to relevant discord servers.