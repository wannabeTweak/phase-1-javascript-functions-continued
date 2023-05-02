// code your solution here
function saturdayFun(value = "roller-skate") {
    return `This Saturday, I want to ${value}!`;
};

function mondayWork(value = "go to the office") {
    return `This Monday, I will ${value}.`;
};

function wrapAdjective(highlight) {
    return function(adjective) {
        return `You are ${highlight}${adjective}${highlight}!`
    }
};