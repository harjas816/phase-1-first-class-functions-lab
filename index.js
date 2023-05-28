// Code your solution in this file!

function returnFirstTwoDrivers(drivelist){
    return [drivelist[0],drivelist[1]]
}

function returnLastTwoDrivers(drivelist){
    return [drivelist[drivelist.length - 2], drivelist[drivelist.length - 1]]
}

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare){
    return function(ride){
        return ride * fare
    }
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(a,returnFirstTwoDrivers){
    return returnFirstTwoDrivers(a)
}