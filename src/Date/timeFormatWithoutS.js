const add0 = require('../number/add0');

function timeFormatWithoutS(){
    var time = new Date(nS);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    return y+'-'+ this.add0(m)+'-'+this.add0(d)+' '+this.add0(h)+':'+this.add0(mm);
}

module.exports = timeFormatWithoutS;