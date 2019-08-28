let driver = {}
function updateDriverWithKeyAndValue(driver, key, val){
    return Object.assign({}, driver, {[key]: val});
};

function destructivelyUpdateDriverWithKeyAndValue(driver, key, val){
    return Object.assign(driver, {[key]: val})
}

function deleteFromDriverByKey(driver, key){
    let newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver
}