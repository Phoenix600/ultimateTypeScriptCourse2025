/**
 * Logs numbers from 1 to 10 sequentially to the console.
 *
 * @return {void} Does not return a value.
 */
function countFromOneToTen() {
    console.log("Start Of countFromOneToTen")
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log("End Of countFromOneToTen")
}

/**
 * Logs messages expressing love for Mysore dosa to the console.
 *
 * @return {void} This function does not return a value.
 */
function sayILoveMysoreDosa() {
    console.log("I'm North Indian... But somehow I love dosa")
    console.log("I love Mysore dosa");
    console.log("Are You Ready To Taste Dosa?")
}

/**
 * Greets a person by logging a message with their name.
 *
 * @param {string} name - The name of the person to greet.
 * @return {void} This function does not return a value.
 */
function greetPerson(name: string) {
    console.log("Hello " + name);
}

/**
 * Here You'll Learn How To Use Variable Watcher In WebStorm
 *
 * @param isCareTaking
 * @param isRich
 * @param isHumble
 * @param isTsDeveloper
 * @param points
 */
function giveRatingToPerson(isCareTaking:boolean,isRich:boolean,isHumble:boolean, isTsDeveloper:boolean,points:number)
{
    // add variable watcher on points variable
    if(isCareTaking == true)
    {
        points = points + 10;
    }

    if(isRich == true)
    {
        points = points + 3;
    }

    if(isHumble == true)
    {
        points = points + 10;
    }

    if(isTsDeveloper == true)
    {
        points = points + 5;
    }

    console.log("Your rating is " + points)
}

// Assignment-1: Learn About Breakpoints And Step Into And Step-Over
sayILoveMysoreDosa();

greetPerson("Pranay Ramteke");

// Assignment-2: Learn About Variable Watcher
let isCareTaking:boolean    = true;
let isRich:boolean          = false;
let isHumble:boolean        = true;
let isTsDeveloper:boolean   = true;
let points:number           = 0;
giveRatingToPerson(isCareTaking,isRich,isHumble,isTsDeveloper,points);

// Assignment-3: Learn About Continue Button
countFromOneToTen();