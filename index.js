// Code your solution in this file!
function distanceFromHqInBlocks(n){
    // return Math.ceil(n*(1/264)); 
    if(n<42){
        return 42 - n
    } else {
        return n - 42
    }
}
function distanceFromHqInFeet(n){
    return distanceFromHqInBlocks(n) * 264; 
}
function distanceTravelledInFeet(start, end){
    return (Math.abs((end - start) * 264))
}
function calculatesFarePrice(start, end){
    let distance = distanceTravelledInFeet(start, end); 
    if(distance <= 400) {
        return 0;
    } else if(distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02
    } else if(distance > 2000 && distance < 2500){
        return 25
    } else {
        return "cannot travel that far"
    }
}