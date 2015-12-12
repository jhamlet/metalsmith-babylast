function Bar () {
    this._values = {};
}

Bar.prototype = {
    get: function (id) {
        return this._values[id];
    },

    set: function (id, val) {
        this._values[id] = val;
        return this;
    }
};

module.exports = Bar;
