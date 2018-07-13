var Arrays = (spec, my) => {
    let that = {};
    my = my || {};

    that.toArray = list => {
        return [].slice.call(list);
    }

    return that;

}

module.exports = {
    default: Arrays()
}

