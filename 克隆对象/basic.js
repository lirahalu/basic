/**
 * Created by linxi on 2016/8/17.
 */
//¿ËÂ¡¶ÔÏó
define(function () {
    var clone = function (obj, newObj) {
        if (!obj) {
            return null;
        }

        var newObj = newObj || {};
        for (var i in obj) {
            if (obj[i] === null) {
                newObj[i] = {};
            } else if (typeof obj[i] === 'object') {
                newObj[i] = (obj[i].constructor === Array) ? [] : {};
                clone(obj[i], newObj[i]);
            } else {
                newObj[i] = obj[i];
            }
        }

        return newObj;
    };
    return clone;
})
;