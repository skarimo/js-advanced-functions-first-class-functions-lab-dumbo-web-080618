const returnFirstTwoDrivers = function (arr) {
  let newarr = []
    newarr.push(arr[0])
    newarr.push(arr[1])
  return newarr
}

const returnLastTwoDrivers = function (arr) {
  let newarr = []
    newarr.push(arr[arr.length - 2])
    newarr.push(arr[arr.length - 1]);
  return newarr
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
  return function (multiplier){
    return integer * multiplier
  }
}

function fareDoubler(fare) {
  return fare * 2
}

function fareTripler(fare) {
  return fare * 3
}

function fetchSpecifiedDrivers(arrayOfDrivers, test) {
  return test(arrayOfDrivers)
}








//
