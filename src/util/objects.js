function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

function isUndefined(obj) {
    return obj == undefined
}

function isNullObject(obj) {
    return isUndefined(obj) || isEmptyObject(obj);
}

module.exports = {
    isEmptyObject: isEmptyObject,
    isUndefined: isUndefined,
    isNullObject: isNullObject
}