//Write a program to calculate the volume of a cube. 
// Start with a variable that contains the length of 1 edge in meters.


//formula to calculate volume of cube is lxlxl

function cubic(length){
    let volume = Math.pow(length,3);
    return volume;
}
let length = 8;
let volume = cubic(length);
console.log(`If the length of the side is ${length}, then the volume of the cube would be ${volume}`);

export{cubic}
//let kilometers = 87;
//let miles = convertkiolmetersToMiles(kilometers)