/**
 * 
 * @desc   判断是否是Email
 * @param  {string} str
 * @return {boolean}
 */
function isEmail(str){
    return /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(str);
}

module.exports = isEmail;