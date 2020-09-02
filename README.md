# BossAI.js

BossAI.js is a Javascript library that is designed for use with the Boss.AI project. If you are looking to make a fork of Boss, we recommend forking this specific project as it has the dialog as well as other AI aspects.


# Getting Started

The setup process is very simple to follow if you have used NPM and Javascript before.

## Create your workspace

Use your favorite file manager. We recommend use of **Linux** specifically due to the enhanced security and ease-of-use, but we will provide instructions for Windows. On most systems, you can right-click and click New Folder. Name this folder whatever you'd like.

Right click again and click "Open in Terminal" or "Open in Command Prompt", if you cannot find either and are on Windows, go to the file path (it's below the "ribbon") and type in `cmd`

Then type in `npm init` to start your project. NPM will then ask questions about what it is you're building, the name, etc. This is essential for projects you wish to share, as it makes it easier to install everything quickly.
Next, you want to type `npm install bossai.js` **or** directly download the repository and make your modifications there. Now is a good time to install any other dependencies using the same `npm install` format.

Create a file here, on most platforms you can right-click and click Create New... Text File. You can call this file whatever you'd like, but remember the name! (We use `bot.js` at the office)

Open the file in your favorite text editor (We <3 Atom!) and use the resources below to make the library do what you need! Almost all of the resources output a string, number, or True/False value - so be sure to use with an IF... statement!
## Init BossAI.js

You will have to declare this code at the top of your Node code `boss = require(bossai.js); `

If you decided to download the code directly, you'll need to do `boss = require(./boss.js);` so Node.js knows to look for the file and not the library! You'll need to make sure BossAI.js in the same directory as your code, though! (You can do this by dragging the file from your downloads to your project folder!)

## Using BossAI.js

If you know Javascript, this will be a piece of cake! If you don't, we recommend looking up any questions you have with Javascript on Qwant or using w3schools.com to learn the basics! (Please don't open an issue if you get an error due to misuse of Javascript or the library - we love giving help but the issues can be misleading to some!)

If you want to see if a message contains certain keywords, use `boss.messagecheck` (Note: This is better for building a chatbot - just check if a string contains certain keywords Boss uses and create your own responses)
This is the code you'd use:

     if(boss.messagecheck("Hello Fellow Geeks!") == "hello") {
     console.log("The world has not broken");
     }
This code will check if the keyword based around "Hey" is found, and will return a "hello" value if it is. "Hello Fellow Geeks" should be replaced with any string you wish, or a variable. Please note, using a variable will remove the requirement for the quotation marks (")
#  Functions
## Using boss.read()
`boss.read()` is a pre-programmed chatbot function. If you wish to use it in your chatbot, you may want to consider reprogramming it or using `boss.messagecheck()`
You can use the function in a string fashion, otherwise your code may act unexpectedly. Here is a proper example:

    console.log(boss.read("Hello!"))
    
This will output a random response from Boss in your console. You could add this code inside a bot of any kind, but beware it will output things pre-programmed for Boss specifically - you may need to check the code of the function or make major modifications to use it the way you'd like. For this reason, we'd recommend `boss.messagecheck()`

If you do decide to use this function in your code, we strongly recommend atleast using find and replace inside the function and replacing all uses of "Boss" with the name of your bot, otherwise it will get very akward very quickly!
## Using boss.messagecheck()

`boss.messagecheck()` is a wonderful thing - you can build your own bots with it! We have listed all the different outputs `boss.messagecheck()` will output for given messages, as well as an example. 
Here is an example of how you would use this function:

     if(boss.messagecheck("Hello Fellow Geeks!") == "hello") {
     console.log("The world has not broken");
     }
This code will check if the keyword based around "Hey" is found, and will return a "hello" value if it is. "Hello Fellow Geeks" should be replaced with any string you wish, or a variable. Please note, using a variable will remove the requirement for the quotation marks (")

Here is a list of all different outputs (As of 1.0.2)
NOTE: All outputs listed will also cause the output! (EX: "hello!" as a string will output "hello" when put through boss.messagecheck() )

    hello
    hru
    doing good
    gibberish
    love simon
    listening
    cake is a lie
If we have any outputs you want added, please make an issue or fork our code and make a pull request! It helps this library expand! (Remember, this library is MIT licensed - you just have to credit us in any forks!)

## Using boss.explicit()
`boss.explicit` is a function designed to detect explicit activity. This is perfect if you want to build a moderation bot that bans explicit activity. It isn't perfect, but we are improving it daily! (Thanks to the KidSafe project we were able to build this with ease!)
This function returns `true` or `false` and requires a string input. Here is a good example:

    if(boss.explicit(string){ 
    console.log("Explicit Activity Found!"); 
    }
  Please note that `string` in this sample is a variable. For obvious reasons, our example cannot contain a string that would execute the command. Most explicit activity will fire this command. 

# Credit
We have used code from the KidSafe project - which is a project developed by BossCore Technologies and Crix. Crix is an incredible team to work with, and that's why we have implemented some KidSafe protocols into the BossAI.js
I'd also like to thank my 2nd grade teacher for pushing me towards inspiration and my 6th and 7th grade Math... JK
(but FR thank you to all the people that pushed me to be a developer, I hope I do something great one day!)
