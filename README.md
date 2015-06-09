# WDD-Hubot

[![Code Climate](https://codeclimate.com/github/reactivepixel/WDD-Hubot/badges/gpa.svg)](https://codeclimate.com/github/reactivepixel/WDD-Hubot)

This is a version of GitHub's Campfire bot, hubot..
He's pretty and cool under the control of Full Sail University's Staff and Students (until he's fully self-aware).

This version is designed to be deployed on [Heroku][heroku].

[heroku]: http://www.heroku.com

## Requirements
* Node.js
* Xcode
* Heroku
* Git
* Github
* Redis (The robot's brain / memory)


These requirements and installation instructions are intended for a OS X local Development Environment.

## Local Environment Installing Instructions

### NodeJS

Download and install NodeJS from [NodeJS.org][nodejs]

### Xcode
Install Xcode from the [Apple App Store][xcode]

Once Xcode has fully installed, run the following command in terminal (in any directory) to install the Xcode Developer Tool that Heroku will use.



    $ xcode-select --install

### Heroku
Create an account with [Heroku.com][herokusignup]

Post the email you used to signup to Heroku to the Slack Group. This will allow me to add your user to the Hubot App on my account.

Install the [Heroku Toolbelt][toolbelt]

Authenticate with Heroku for the first time using the command line:


    $ heroku login

Enter you user credentials and you should see the message **Authentication successful.**. Alternatively, you may be presented with a message about a **Public Key**. This is the key we generated and shared with Github previously and there are two different messages that may be displayed asking you how to proceed:


> Could not find an existing public key. Would you like to generate one? [Yn]

In this case a ssh key was not found on your system and Heroku needs to generate one for you, simply press Y and Enter.

> If you have multiple ssh keys on your computer (likely if you have previously used the Github GUI App) you are presented with a numbered list of each of your keys and asked to select one to use.

Select any option that does not have **Github** in the name.

### Github

Fork the [WDD-Hubot][wddhubot] Repo on Github.

Notate, for later use, the SSH clone URL for the forked repo that was just created on your account.

In Terminal, navigate to where you want to house the code from Hubot. Once prepared run the heroku command to clone and download Hubot's files to your **local environment**


    $ heroku git:clone -a hubot-staging

Navigate into the newly cloned folder called Hubot, note that it is already a git repo. Add a new remote to the forked repo you created. It should look like this next command, but with your SSH clone URL you notated previously.


    git remote add github **SSH Clone URL to your fork (no astricks)**

This connects your own code base to your own forked repo. You will be using this forked repo to submit your code for review.

### Unpack Hubot

Navigate to your Hubot folder and run the node command to install all dependencies:


    $ npm install

### Redis

You will need to build Redis from source on OS X, to do this first [Download](http://redis.io/download) the latest stable version.

> Note: These instructions are for version 2.8.7, please replace this number in the following instructions with what ever latest stable version number you have downloaded

Unpack the .tar.gz by double-clicking. Then run the following commands to test the source, compile, and then move it into place.

    $ cd ~Downloads/redis-2.8.7
    $ sudo make test

A significant number of compiling tests will run. Continue only if you get a "All tests passed without errors!" message. Alternativly you can disable the redis-brain of the bot for local testing (not recommended, but it works in a pinch).

Next run:

    $ sudo make
    $ sudo mv src/redis-server /usr/bin
    $ sudo mv src/redis-cli /usr/bin

Test that your redis brain works!

    $ redis-server

> Linux/Unix reminder: You can terminate any active script with Ctrl-C. This is how to turn of the redis server or ends a *Command Line Interface* (CLI) session with Hubot.

[nodejs]: http://nodejs.org/
[xcode]: https://itunes.apple.com/us/app/xcode/id497799835
[toolbelt]: https://toolbelt.heroku.com/
[wddhubot]: https://github.com/reactivepixel/WDD-Hubot/fork
[herokusignup]: https://signup.heroku.com/identity



## Local Testing

You can test hubot locally by running the following in a new terminal tab / window. First turn on the Bot's Brain server.

    $ redis-server

In a separate terminal tab / window navigate to your Hubot folder and run the command:

    $ bin/hubot

You'll see some start up output about where your scripts come from and a prompt such as:

    Hubot> [Tue Mar 25 2014 03:33:51 GMT-0400 (EDT)] WARNING The HUBOT_AUTH_ADMIN environment variable not set
    [Tue Mar 25 2014 03:33:51 GMT-0400 (EDT)] INFO Initializing new data for brain
    Hubot>

The *HUBOT_AUTH_ADMIN environment variable not set* error is normal and is required for our development setup. Just press enter and you can write messages directly to your local, private copy of Hubot.

If you see redis connection errors (shown below) your redis server is likely not currently running.

    ERROR [Error: Redis connection to localhost:6379 failed - connect ECONNREFUSED]


Once you are up and running with a prompt you can interact with hubot by typing `hubot help`.

    Hubot> hubot help

    Hubot> animate me <query> - The same thing as `image me`, except adds a few
    convert me <expression> to <units> - Convert expression to given units.
    help - Displays all of the help commands that Hubot knows about.
    ...


## Development

Take a look at the scr1ipts in the `./scripts` folder for examples.
Add whatever functionality you want hubot to have. Read up on what you can do with hubot in the [Scripting Guide](https://github.com/github/hubot/blob/master/docs/scripting.md).
