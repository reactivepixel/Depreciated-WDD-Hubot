[brew]: http://brew.sh/
[codeClimate]: https://codeclimate.com/github/reactivepixel/WDD-Hubot/badges/gpa.svg
[heroku]: http://www.heroku.com
[herokusignup]: https://signup.heroku.com/identity
[nodejs]: http://nodejs.org/
[redis]: http://redis.io/
[scriptingGuide]: https://github.com/github/hubot/blob/master/docs/scripting.md
[toolbelt]: https://toolbelt.heroku.com/
[wddhubot]: https://github.com/reactivepixel/WDD-Hubot/fork
[xcode]: https://itunes.apple.com/us/app/xcode/id497799835

# WDD-Hubot

![Code Climate][codeClimate]

This is a version of GitHub's Campfire bot, Hubot..
He's pretty and cool under the control of Full Sail University's Staff and Students (until he's fully self-aware).

This version is designed to be deployed on [Heroku][heroku].

## Conventions in this ReadMe

Code that you need to substitute will be written in angle brackets, like this: `hubot I am <your GitHub username>`. In this example, you'd substitute your GitHub username in the angle brackets.

The symbol for your terminal prompt will be `$`, but `$` could also used to denote an environmental variable. When `$` is displayed first thing with a space immediately following it, you don't type it into the terminal. You would enter the following into your terminal to display what username you were currently using:

    $ whoami
    
You would enter the following into the terminal to figure out the search path for commands:

    $ echo $PATH

## Requirements

* Xcode
* Homebrew
* Node.js
* Redis
* Heroku
* Git
* GitHub


These requirements and installation instructions are intended for a OS X local Development Environment.

## Local Environment Installing Instructions

### Xcode

Install Xcode from the [Apple App Store][xcode]

Once Xcode has fully installed, run the following command in terminal (in any directory) to install the Xcode Developer Tool that Heroku will use.

    $ xcode-select --install

### Homebrew

[Homebrew][brew] simplifies managing the packages and dependencies that you'll need in a local development environment.

To install Homebrew, paste the following into your terminal prompt:

    $ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

### NodeJS

Use brew (short for Homebrew) to install Node.js and its bundled package manager, NPM. In your terminal, type:

    $ brew install node
    
To check for a successful install, type `$ node -v`, which should give you a version >= `v0.12.7`. Then type `$ npm -v` which should give you a version >= `2.13.2`.
    
### Heroku

Create an account with [Heroku.com][herokusignup]

Post the email you used to signup to Heroku to the Slack Group. This will allow me to add your user to the Hubot App on my account.

Install the [Heroku Toolbelt][toolbelt]

Authenticate with Heroku for the first time using the command line:

    $ heroku login

Enter you user credentials and you should see the message **Authentication successful.**. Alternatively, you may be presented with a message about a **Public Key**. This is the key we generated and shared with GitHub previously and there are two different messages that may be displayed asking you how to proceed:

> Could not find an existing public key. Would you like to generate one? [Yn]

In this case a ssh key was not found on your system and Heroku needs to generate one for you, simply press Y and Enter.

> If you have multiple ssh keys on your computer (likely if you have previously used the GitHub GUI App) you are presented with a numbered list of each of your keys and asked to select one to use.

Select any option that does not have **GitHub** in the name.

### GitHub

Fork the [WDD-Hubot][wddhubot] Repo on GitHub.

Notate, for later use, the SSH clone URL for the forked repo that was just created on your account.

In Terminal, navigate to where you want to house the code from Hubot. Once prepared run the Heroku command to clone and download Hubot's files to your **local environment**

    $ heroku git:clone -a hubot-staging

Navigate into the newly cloned folder called Hubot, note that it is already a git repo. Add a new remote to the forked repo you created. It should look like this next command, but with your SSH clone URL you notated previously.

    $ git remote add github <SSH Clone URL to your fork>

This connects your own code base to your own forked repo. You will be using this forked repo to submit your code for review.

### Unpack Hubot

Navigate to your Hubot folder and run the node command to install all dependencies:

    $ npm install

### Redis

We'll install Redis to use as Hubot's "brain". Redis in a key-value database that operates in its host's memory. 
To install [Redis][redis], type:

    $ brew install redis

Test that your redis brain was successfully installed by typing `$ redis-server -v`, which should result in a version >= `v=3.0.3`.

## Local Testing

You can test Hubot locally by running the following in a new terminal tab / window. First turn on the Bot's Brain server.

    $ redis-server

> Linux/Unix reminder: You can terminate any active script with Ctrl-C. This is how to turn of the redis server or ends a *Command Line Interface* (CLI) session with Hubot.

In a separate terminal tab / window navigate to your Hubot folder and run the command:

    $ bin/hubot

You'll see some start up output about where your scripts come from and a prompt such as:

    Hubot> [Tue Mar 25 2014 03:33:51 GMT-0400 (EDT)] WARNING The HUBOT_AUTH_ADMIN environment variable not set
    [Tue Mar 25 2014 03:33:51 GMT-0400 (EDT)] INFO Initializing new data for brain
    Hubot>

The *HUBOT_AUTH_ADMIN environment variable not set* error is normal and is required for our development setup. Just press enter and you can write messages directly to your local, private copy of Hubot.

If you see redis connection errors (shown below) your redis server is likely not currently running.

    ERROR [Error: Redis connection to localhost:6379 failed - connect ECONNREFUSED]

Once you are up and running with a prompt you can interact with Hubot by typing `hubot help`.

    Hubot> hubot help

    Hubot> animate me <query> - The same thing as `image me`, except adds a few
    convert me <expression> to <units> - Convert expression to given units.
    help - Displays all of the help commands that Hubot knows about.
    ...

## Development

Take a look at the scripts in the `./scripts` folder for examples.
Add whatever functionality you want Hubot to have. Read up on what you can do with Hubot in the [Scripting Guide][scriptingGuide].

