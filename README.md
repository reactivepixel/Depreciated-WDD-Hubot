# WDD-Hubot

This is a version of GitHub's Campfire bot, hubot..
He's pretty and cool under the control of Full Sail University's Staff and Students (until he's fully self-aware).

This version is designed to be deployed on [Heroku][heroku].

[heroku]: http://www.heroku.com

## Requirements
* Node.js
* NPM
* Redis

These requirements and installation instructions are intended for a OS X local Development Environment.

### Installing Redis
You will need to build Redis from source on OS X, to do this first [Download](http://redis.io/download) the latest stable version.

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


## Local Development

You can test hubot locally by running the following in a new terminal tab / window. First turn on the Bot's Brain server.

    $ redis-server

In a separate terminal tab / window.

    $ bin/hubot

You'll see some start up output about where your scripts come from and a
prompt.

    Hubot> [Tue Mar 25 2014 03:33:51 GMT-0400 (EDT)] WARNING The HUBOT_AUTH_ADMIN environment variable not set
    [Tue Mar 25 2014 03:33:51 GMT-0400 (EDT)] INFO Initializing new data for brain
    Hubot>

If you see redis connection errors (shown below) your redis server is likely not running, get on that.

    [Tue Mar 25 2014 02:36:33 GMT-0400 (EDT)] ERROR [Error: Redis connection to localhost:6379 failed - connect ECONNREFUSED]
    [Tue Mar 25 2014 02:36:33 GMT-0400 (EDT)] ERROR [Error: Redis connection to localhost:6379 failed - connect ECONNREFUSED]
    [Tue Mar 25 2014 02:36:33 GMT-0400 (EDT)] ERROR [Error: Redis connection to localhost:6379 failed - connect ECONNREFUSED]


Once you are up and running with a prompt you can interact with hubot by typing `hubot help`.

    Hubot> hubot help

    Hubot> animate me <query> - The same thing as `image me`, except adds a few
    convert me <expression> to <units> - Convert expression to given units.
    help - Displays all of the help commands that Hubot knows about.
    ...


## Development

Take a look at the scripts in the `./scripts` folder for examples.
Add whatever functionality you
want hubot to have. Read up on what you can do with hubot in the [Scripting Guide](https://github.com/github/hubot/blob/master/docs/scripting.md).

> See the Development Guidelines for how best to integrate your work with the team.

### Heroku Commands (common)

| Command        | Output       |
| ------------- |:-------------:|
| heroku config --remote <server> | Display all Environment Variables for target server |


## Deployment

    $ heroku create --stack cedar
    $ git push heroku master
    $ heroku ps:scale app=1

If your Heroku account has been verified you can run the following to enable
and add the Redis to Go addon to your app.

    $ heroku addons:add redistogo:nano

If you run into any problems, checkout Heroku's [docs][heroku-node-docs].

You'll need to edit the `Procfile` to set the name of your hubot.

More detailed documentation can be found on the
[deploying hubot onto Heroku][deploy-heroku] wiki page.


## Restart the bot

You may want to get comfortable with `heroku logs` and `heroku restart`
if you're having issues.


[heroku-node-docs]: http://devcenter.heroku.com/articles/node-js
[deploy-heroku]: https://github.com/github/hubot/blob/master/docs/deploying/heroku.md
[deploy-unix]: https://github.com/github/hubot/blob/master/docs/deploying/unix.md
[deploy-windows]: https://github.com/github/hubot/blob/master/docs/deploying/unix.md

## Contributors
- Holly Springsteen

- Russell Schlup

- Nate Dickison