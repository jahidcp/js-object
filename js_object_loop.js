var tokenName = {
    Binance : 104,
    Polygon : 162,
    Safepal : 103,
    Ethereum : 0.15,
    OJA : 10005,
    Polkadot : 544,
    Ripple : 372
}

const tokenKeys = Object.keys(tokenName);
console.log(tokenKeys);

const tokenValues = Object.values(tokenName);
console.log(tokenValues);

// For loop access for Object

for(var i = 0; i < tokenKeys.length; i++){
    var newTokenName = tokenKeys[i];
    var newTokenAmount = tokenValues[i];
    console.log(newTokenName, newTokenAmount);
}


// Question Solve

var smartphone = { brand: "iPhone", model: "13" };



console.log(smartphone.brand);
console.log(smartphone["brand"]);
console.log(smartphone[brand]);

function add(num1, num2){ }

function askForCookies(){
    console.log("Granma please give me cookies");
}

askForCookies();

function movie(){

    return "Din-The day";
  
    return "Poran";
  
    return "Hawa";
  
  }
  
  console.log(movie());
