// code your solution here

function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork (workActivity= 'go to the office') {
    return `This Monday, I will ${workActivity}.`
}

function wrapAdjective(string = '*') {
    return function (paraMeter = 'special') {
        return `You are ${string}${paraMeter}${string}!`
    }
}
const encouragingPromptFunction = wrapAdjective("!!!")

