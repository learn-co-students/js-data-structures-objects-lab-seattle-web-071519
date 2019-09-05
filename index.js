var driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    const obj = {...driver}
    obj[key]=value
    return obj
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key]=value
    return driver
}

// var obj = {foo: "bar"}
function deleteFromDriverByKey(driver, key){
    const obj = {...driver}
    delete obj[key]
    return obj
}


function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}