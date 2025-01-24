//Take a variable with the temperature and another variable with the 
// relative humidity and output a clothing suggestion.

//let temperature = 7;
//let humidity = 4;
function weather2clothes(temperature,humidity){
    let output;
    if (temperature <=-5 && humidity <70 ){
        // Dry & Cold
        output ="it is cold and dry, please wear layers, preferably a parka";
    }else if (temperature >-4 && temperature <=5 && humidity <70){
        // Dry & neutral
        output ="it is cold and not wet or dry";
    }else if (temperature >6 && temperature >=-5 && humidity <70){
        // Dry & Warm
        output ="it is dry and warm, so it will be windy";
    }else if (temperature <=-5 && humidity >=71){
        //Wet & Cold
        output ="it is cold and wet, consider wearing a waterproof outer layer and boots";
    }else if (temperature <6 && temperature >=-5 && humidity >70){
        output = "it is humid outside, chance of snow or rain,";
        //Wet & neutral
    }else if (temperature >=6 && humidity >70 ){
        output = "the weather is warm and humid, there is a high chance of rain so bring umbrella";
        // Wet & Warm
    }else{
        output = "your input may not have been received, please try again.";
    }  
    return output;
}
//console.log(weather2clothes(-8,80));
export {weather2clothes}