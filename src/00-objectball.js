function gameObject() {
    return {

        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },
            }
        },

        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                },
            }
        }
    }
}

// Home Team Name
function homeTeamName() {
    return gameObject()['home']['teamName']
}

// Returns the stats of a given player - used to shorten the functions that request one singular player in particular
function playersAll(playerInput) {
        let game = gameObject();
        for (let gameKey in game) { // iterates through game keys - home/away
          let teamObj = game[gameKey]
          for (let teamKey in teamObj) { // iterates through team keys - name/colors/players
            let playerObj = teamObj.players
            for (let playerkey in playerObj) { //iterate through player keys
                if (playerkey === playerInput) { // if player name == input
                    return playerObj[playerkey] // returns player points
                }
            }
          }
        }
}

// Num Points per Player
function numPoints(playerInput){
    return playersAll(playerInput).points;
}

//Shoe size per Player
function shoeSize(playerInput){
    return playersAll(playerInput).shoe;
}

// Team Colors
function teamColors(teamInput) {
    let game = gameObject();
    for (let gameKey in game) { // iterates through game keys - home/away
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) { // iterates through team keys - name/colors/players
        if (teamObj.teamName === teamInput) { 
            return teamObj.colors;
            }
      }
    }
}

// Team Names
function teamNames() {
    let teams = [];
    let game = gameObject();
    for (let gameKey in game) { // iterates through game keys - home/away
        let teamObj = game[gameKey]
        teams.push(teamObj.teamName);
    }
    return teams;
}

// Player Numbers per Team
function playerNumbers(teamInput) {
    let game = gameObject();
    let teamNums = [];
    for (let gameKey in game) { // iterates through game keys - home/away
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) { // iterates through team keys - name/colors/players
        if (teamKey === 'players') {
            if (teamObj.teamName === teamInput) { 
                let playerObj = teamObj.players;
                for (let playerKey in playerObj) { //iterate through player keys  
                    teamNums.push(playerObj[playerKey].number);
                }
             }
        }
        
    }
    }
    return teamNums;
}

// Player Stats:
// See the playersAll() function

// Big Shoe Rebound - returns number of rebounds associated with the player with the largest shoe size:
function bigShoeRebounds() {
    let game = gameObject();
    let bigShoe = 0;
    let shoeRebound = 0;
    for (let gameKey in game) { // iterates through game keys - home/away
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) { // iterates through team keys - name/colors/players
        let playerObj = teamObj.players
        for (let playerKey in playerObj) { //iterate through player keys
            // console.log(playersAll(playerKey).shoe > bigShoe);
            if (playersAll(playerKey).shoe > bigShoe){
                bigShoe = playersAll(playerKey).shoe;
                shoeRebound = playersAll(playerKey).rebounds;
                }
            }
        }
      }
    return shoeRebound;
}


/////BONUS

//mostPointsScored - returns the player with the mostPointsScored
function mostPointsScored() {
    let game = gameObject();
    let bigPoints = 0;
    let topPlayer = null;
    for (let gameKey in game) { // iterates through game keys - home/away
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) { // iterates through team keys - name/colors/players
        let playerObj = teamObj.players
        for (let playerKey in playerObj) { //iterate through player keys
            // console.log(playersAll(playerKey).shoe > bigShoe);
            if (playersAll(playerKey).points > bigPoints){
                bigPoints = playersAll(playerKey).points;
                topPlayer = playerKey;
                }
            }
        }
      }
    return topPlayer;
}

//Winning Team: - returns the winning team
// 1. iterate through each team 
// 2. iterate through each player 
// 3. add each players points to a team score 
// 4. compare both teams score 
function winningTeam() {
    let game = gameObject();
    let topScore = 0; // - compare newScore to this value
    let topTeam = null;
    for (let gameKey in game) { // iterates through teams - home/away
      let newScore = 0; 
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) { // iterates through team attributes - name/colors/players
        let playerObj = teamObj.players
        for (let playerKey in playerObj) { //iterate through players
            newScore+=playersAll(playerKey).points;
            }
        }
        if (newScore > topScore){
            topScore = newScore;
            topTeam = teamObj.teamName;
        }
      }
    return topTeam;
}

// returns team points
function teamPoints(game) {
    let newScore = 0; 
    let playerObj = game.players
    for (let playerKey in playerObj) { //iterate through players
        newScore+=playersAll(playerKey).points;
          }
    return newScore;
}


/// Player with Longest Name - returns the player with the longest name:
function playerWithLongestName() {
    let game = gameObject();
    let longNameLength = 0;
    let longNamePlayer = null;
    for (let gameKey in game) { // iterates through game keys - home/away
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) { // iterates through team keys - name/colors/players
        let playerObj = teamObj.players
        for (let playerKey in playerObj) { //iterate through player keys
            // console.log(playersAll(playerKey).shoe > bigShoe);
            if (playerKey.length > longNameLength){
                longNameLength = playerKey.length;
                longNamePlayer = playerKey;
                }
            }
        }
      }
    return longNamePlayer;
}

/////////SUPER BONUS: - returns true if the player with the longest name had the most steals
//1. Identify longest name -> playerWithLongestName()
//2. Identify player with most steals -> mostSteals()
//3. Compare p1 + p2

// Returns player with the most steals
function mostSteals() {
    let game = gameObject();
    let bigSteals = 0;
    let topPlayer = null;
    for (let gameKey in game) { // iterates through game keys - home/away
      let teamObj = game[gameKey]
      for (let teamKey in teamObj) { // iterates through team keys - name/colors/players
        let playerObj = teamObj.players
        for (let playerKey in playerObj) { //iterate through player keys
            // console.log(playersAll(playerKey).shoe > bigShoe);
            if (playersAll(playerKey).steals > bigSteals){
                bigSteals = playersAll(playerKey).steals;
                topPlayer = playerKey;
                }
            }
        }
      }
    return topPlayer;
}


// returns if the longest name stole the most!

function doesLongNameStealATon(){
    return playerWithLongestName() === mostSteals();
}