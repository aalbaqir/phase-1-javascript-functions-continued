// Your code here
const saturdayFun = (activity=`roller-skate`) =>{
    return(`This Saturday, I want to ${activity}!`);
}
saturdayFun(`bathe my dog`);

const mondayWork = (plans=`go to the office`) =>{
    return(`This Monday, I will ${plans}.`);
}
mondayWork(`work from home`);

const wrapAdjective = (praise = "*") => {
    return function encouragingPrompt(morePraise = "special") {
    // return encouragingPrompt = (morePraise = `special`) => {
        return `You are ${praise}${morePraise}${praise}!`
    }
    
}

wrapAdjective()


  // let result = wrapAdjective()
    // let empathic = result(`a hard worker`);
// function wrapAdjective('You are'){
//     let result = wrapAdjective
//     let emphatic = result (`a hard worker`)
//     return('You are a ${result}')
// }

