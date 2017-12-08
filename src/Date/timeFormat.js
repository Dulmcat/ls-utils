const add0 = require('../number/add0');
/**
 * 
 * @desc 将时间转换为xxxx-xx-xx xx:xx:xx的格式
 * @param {date} date 
 * @return {string} 
 */
function timeFormat(date){
    var time = new Date(date);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+ this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm)+':'+this.add0(s);
}

module.exports = timeFormat;