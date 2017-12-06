/**
 * 
 * @desc   加
 * @param  {number|string} a 
 * @param  {number|string} b 
 * @return {number}
 */
function add(a, b) { 
    var c, d, e;
    try {
        c = a.toString().split(".")[1].length;
    } catch (f) {
        c = 0;
    }
    try {
        d = b.toString().split(".")[1].length;
    } catch (f) {
        d = 0;
    }
    return e = Math.pow(10, Math.max(c, d)), (mul(a, e) + mul(b, e)) / e;
}


module.exports = add;