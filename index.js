// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers){
  
    let driver = drivers.slice(0,2)
    return driver
}
returnFirstTwoDrivers(drivers)

function returnLastTwoDrivers(drivers){
    let driver = drivers.slice(2,4)
    return driver
}
console.log(returnLastTwoDrivers(drivers))


const selectingDrivers =[returnFirstTwoDrivers,returnLastTwoDrivers]


function createFareMultiplier(fair ){
//    let fare = inputInt
   return function fareMultiplier(fare){
    return fare * fair
   }
}

function fareDoubler(fair){
    return fair * 2
}
function fareTripler(fair){
    return fair * 3
}
function selectDifferentDrivers(drivers,selectingDrivers){
    // return drivers.slice(0,2)
 return selectingDrivers (drivers)
}

 console.log(selectDifferentDrivers)