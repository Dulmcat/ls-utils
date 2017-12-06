/**
 * 
 * @desc   将日期更改为 4-2-2 的格式
 * @param  {Date} date
 * @return {string} 20XX-XX-XX
 */
function to422(date){
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    if(month < 10) {
        month = '0' + month;
    }
    if(day < 10) {
        day = '0' + day;
    }
    return (year + '-' + month + '-' + day);
}


module.exports = to422;