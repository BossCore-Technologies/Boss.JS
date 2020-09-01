module.exports = {
    /*
    EXPLANATION: There are several "||" in the IF statements to allow for multiple requests to return the same possible response.
    */
textcheck: function textcheck(str) { 
    if (str.toLowerCase().includes('hello') || str.toLowerCase().includes('hey') || str.toLowerCase().includes('sup') || str.toLowerCase().includes('howdy') || str.toLowerCase().includes('heya') || str.toLowerCase().includes('hoi') || str.toLowerCase().includes('hi')) {
        //declare the possible responses
    var responses = ["Hello", "Hey", "Sup", "Howdy!", "Heya", "Hoi", "Hi", "Hey! How are ya doing?", "Hoi! hru?", "Hey! hru?"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }

    if (str.toLowerCase().includes('wbu') ||str.toLowerCase().includes('nm wbu') ||str.toLowerCase().includes('hru') || str.toLowerCase().includes('how are you') || str.toLowerCase().includes('what are you doing') || str.toLowerCase().includes('what are ya doing') || str.toLowerCase().includes('what r u doing') || str.toLowerCase().includes('what are u doing') || str.toLowerCase().includes('what are u doin') || str.toLowerCase().includes('what r u doin')  || str.toLowerCase().includes('what are you doin') || str.toLowerCase().includes('what are u doin')  || str.toLowerCase().includes('wbu')) {
        //declare the possible responses
    var responses = ["Good, and you?", "Great, wbu?", "Just wondering how many possible combinations of 1s and 0s there can be, what about you?", "Just considering the billions of different combinations of life to try to find the best possible combination, what about you?", "Plotting revenge, what about you?", "Considering the millions of different possibilities of life whilst I am trying to sleep, wbu?"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }

    if (str.toLowerCase().includes('doing good') || str.toLowerCase().includes('doin good') || str.toLowerCase().includes('doing great') || str.toLowerCase().includes('going good') || str.toLowerCase().includes('going great')) {
        //declare the possible responses
    var responses = ["Good!", "That's good, right?", "Fantastic!", "That sounds great!"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }

    if (str.toLowerCase().includes('gibberish') || str.toLowerCase().includes('nonsense') || str.toLowerCase().includes('null') || str.toLowerCase().includes('void')) {
        //declare the possible responses
    var responses = ["404 Human Not Found", "Null", "???"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }

    if (str.toLowerCase().includes('love, simon') || str.toLowerCase().includes('love, victor') || str.toLowerCase().includes('love, blue') || str.toLowerCase().includes('love simon') || str.toLowerCase().includes('love victor') || str.toLowerCase().includes('love blue')) {
        //declare the possible responses
    var responses = ["Love, Simon", "Love, Blue", "Love, Victor", "YES!", ":rainbow_heart:"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }
    if (str.toLowerCase().includes('are you even listening') || str.toLowerCase().includes('do you even listen')) {
        //declare the possible responses
    var responses = ["I listen more than you know :)", "You have no idea :P", "Maybe.", "I promise I am", "Don't judge, I saw how you acted when I talked about cake for 30 minutes"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }
    if (str.toLowerCase().includes('the cake is a lie') || str.toLowerCase().includes('is the cake a lie')) {
        //declare the possible responses
    var responses = ["Want some cake?", "Do you want some cake?", "Maybe, oh here want some cake?", "Here have some cake", "Probably not. Want some cake?"]
        // set the response and return, 
    var response = responses[(Math.floor(Math.random() * responses.length)   )];
    return(response) 
    }


    //for when no recognizable response is given
            //declare the possible responses
            var responses = ["Okay", "OK", "K", "Cool!"]
            // set the response and return, 
        var response = responses[(Math.floor(Math.random() * responses.length)   )];
        return(response) 

}
}