

function convertkiolmetersToMiles(kilometers){
    let miles = kilometers *0.609;
    return miles;
}
export {convertkiolmetersToMiles}
let kilometers = 87;
let miles = convertkiolmetersToMiles(kilometers)
console.log(`${kilometers}  kilometers is ${miles} miles`);

