//Write a program to calculate the volume of a cube. 
// Start with a variable that contains the length of 1 edge in meters.

volume = 0;
//formula to calculate volume of cube is lxlxl

function cubic(length){
    let volume = Math.pow(length,3);
    return volume;
}