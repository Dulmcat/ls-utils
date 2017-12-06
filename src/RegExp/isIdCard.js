/**
 * 
 * @desc   判断是否是身份证号
 * @param  {string|name} str
 * @return {boolean}
 */
function isIdCard(str){
    return /0?(13|14|15|17|18|19)[0-9]{9}/.test(str);
}

module.exports = isIdCard;