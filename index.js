// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(object, key, value){
    return Object.assign( {}, driver, { [key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(object, key, value){
    driver[key] = value;
    return driver
}

function deleteFromDriverByKey(object, key){
    let newObj = Object.assign({}, driver);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromDriverByKey(object, key){
    delete driver[key];
    return driver
}