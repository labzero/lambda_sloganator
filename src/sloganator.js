'use strict';

console.log('Loading function');

var sloganText = `Let the {} begin!
{}, enter a different World.
{}, People Rule!
{} keeps coming!
{} is better.
{}, it's simple. It's Fun!
{} is full of joy!
The real taste of {}.
Have a break. Have a {}.
{} for everything.
{}: I'm Loving It.
The joy of {}.
{} - Empowering People.
We do {} Right.
Get the {} habit.
{} is the new Habit.
Why don't you try {}?
{}, the way to work faster.
{}, get up and go.
New life starts with {}.
{} because Life has a purpose.
{}, enjoy the present.
{}, on demand.
{} and reconnect with nature.
If it's {}, it's got to be good.
{} is Beautiful.
{}: For a perferctly cromulent office.
{}: You can't have just one.
Work all day, {} all night.
{}. Not the latest thing. The genuine thing.
{} is people!
{}: Free your body.
The best part of waking up is {} in your cup.
In a world of technology, {} makes the difference.
{} Inside!
It's not software, it's {}.
{} gets in your eyes.
{} isn't a spaceship. It's a time machine.
{}: Some things never change.
Grab your {} and don't panic!
{}. Making America great again.
{}, the happiest place on Earth.
{} melts in your mouth, not in your hands.`;

var slogans = sloganText.split('\n');

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

exports.handler = (event, context, callback) => {

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if( event.queryStringParameters && event.queryStringParameters["q"]) {
        var template = slogans[Math.floor(Math.random() * slogans.length)];
        done(null, template.replace("{}", event.queryStringParameters["q"]).capitalize());
    } else {
        done(new Error("Missing required parameter. Tell me what to sloganate using ?q=term"))
    }
};

