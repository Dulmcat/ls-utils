/**
 * 
 * @desc   判断是否为手机号（国内）
 * @param  {String|Number} str 
 * @return {Boolean} 
 */
function isPhoneNum(str) {
    return /0?(13|14|15|17|18|19)[0-9]{9}/.test(str)
}

module.exports = isPhoneNum;