// meters to yard 

function meter2yards (meter){
    let yards = meter*1.094;
    return yards;
}
let meter = 7;
export {meter2yards}
console.log(` ${meter} meters is ${meter2yards(meter)} yards`);