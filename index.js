// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();

//function expressions
let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");

//function level scope
let wrapAdjective = function (flair = "*") {
    return function (par1 = "special") {
        return `You are ${flair}${par1}${flair}!`;
    }
}
wrapAdjective("||");