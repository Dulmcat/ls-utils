/**
 * @desc index入口文件
 */
const to422 = require('./Date/to422');
const tabDate = require('./Date/tabDate');
const timeFormat = require('./Date/timeFormat');
const timeFormatWithoutS = require('./Date/timeFormatWithoutS');

const getBrowser = require('./Device/getBrowser');

const add = require('./number/add');
const sub = require('./number/sub');
const mul = require('./number/mul');
const div = require('./number/div');
const add0 = require('./number/add0');

const isEmail = require('./RegExp/isEmail');
const isIdCard = require('./RegExp/isIdCard');
const isPhoneNum = require('./RegExp/isPhoneNum');
const isUrl = require('./RegExp/isUrl');

module.exports = {
    to422,
    timeFormat,
    timeFormatWithoutS,
    tabDate,

    getBrowser,

    add,
    sub,
    mul,
    div,
    add0,

    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,
}

