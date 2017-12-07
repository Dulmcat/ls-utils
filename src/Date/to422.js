/**
 * 
 * @desc   将日期更改为 4-2-2 的格式
 * @param  {Date} date
 * @return {string} 20XX-XX-XX
 */
const add0 = require('../number/add0');
function to422(date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return (year + '-' + add0(month) + '-' + add0(day));
}

module.exports = to422;