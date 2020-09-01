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

We recommend using most things in BossAI.js with an IF statement or some sort of text report. For example with boss.read:

    console.log(boss.read(variable));
    
This code will log some text in your console. Read is mostly used in creating chatbots, which makes it very rough to use in IF statements. The output of Read can vary depending on the random number generator built inside the module, but it is perfect to add a bit of life to your Discord bot! (If you want to build a Discord bot, we recommend changing some things about BossAI.js - just running Find and Replace, replacing the word "Boss" with the name of your bot will do just fine!)

If you want to see if a message contains certain keywords, use `boss.messagecheck` (Note: This is better for building a chatbot - just check if a string contains certain keywords Boss uses and create your own responses)
This is the code you'd use:

     if(boss.messagecheck("Hello Fellow Geeks!") == "hello") {
     console.log("The world has not broken");
     }
This code will check if the keyword based around "Hey" is found, and will return a "hello" value if it is. "Hello Fellow Geeks" should be replaced with any string you wish, or a variable. Please note, using a variable will remove the requirement for the quotation marks (")

## Using boss.messagecheck()

`boss.messagecheck()` is a wonderful thing - you can build your own bots with it! We have listed all the different outputs `boss.messagecheck()` will output for given messages, as well as an example. If you want to know how to use these examples in your code, refer to the code sample above. (Just replace the content in quotes with the content listed below, we recommended replacing "Hello Fellow Geeks" with a variable to get the most out of it!)

NOTE: All outputs listed will also cause the output! (EX: "hello!" as a string will output "hello" when put through boss.messagecheck() )

    hello
    hru
    doing good
    gibberish
    love simon
    listening
    cake is a lie
If we have any outputs you want added, please make an issue or fork our code and make a pull request! It helps this library expand! (Remember, this library is MIT licensed - you just have to credit us in any forks!)
