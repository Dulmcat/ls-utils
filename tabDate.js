/**
 * 
 * @desc   比较日期大小
 * @param  {string} data1 4-2-2格式 eg: 2017-01-01
 * @param  {string} data2 4-2-2格式 eg: 2017-01-01
 * @return {boolean} 前一个大于后一个，返回false
 */
function tabDate(data1, data2) {
    var odata1 = new Date(data1).getTime();
    var odata2 = new Date(data2).getTime();
    if(odata1 > odata2){
        return false;
    } else {
        return true;
    }
}

module.exports = tabDate;