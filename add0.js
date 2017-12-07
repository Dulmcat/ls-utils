/**
 * 
 * @desc    小于10的数字或字符串添加‘0’，变为0X；
 * @param   {number|string} m 
 * @return  {number|string}
 */
function add0(m){
    return m < 10 ? '0' + m : m;
}

module.exports = add0;