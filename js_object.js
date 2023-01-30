var myPhone = {
    Brand : 'Asus',
    Model : "Rog3",
    storage : "128GB",
    Ram : "12Gb",
    Proccessor : "snapgragon 865",
    Display : "6.67inch",
    Battery : "6000mAH",
    price : 72000
}

// Set property Values

myPhone.storage = "256GB";
console.log(myPhone);

// Alternative Way

myPhone["storage"] = "356Gb";
console.log(myPhone)



// var myPhoneName = "Brand";

// var myPhoneBrandName = myPhone[myPhoneName];
// console.log(myPhoneBrandName);

// console.log(myPhone);

// myPhone.Proccessor = "snapgragon 888";


// var ramCount = myPhone.Ram;
// console.log(ramCount);

// // Alternative System

// var ramCount2 = myPhone["Ram"];
// console.log(ramCount2);


// var propertiesKeys = Object.keys(myPhone);
// console.log(propertiesKeys);

// var propertiesValues = Object.values(myPhone);
// console.log(propertiesValues);

// console.log(myPhone);