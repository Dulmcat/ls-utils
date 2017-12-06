/**
 * @desc index入口文件
 */
const to422 = require('./Date/to422');
const getBrowser = require('./Device/getBrowser');
const add = require('./number/add');
const sub = require('./number/sub');
const mul = require('./number/mul');
const div = require('./number/div');
const isEmail = require('./RegExp/isEmail');
const isIdCard = require('./RegExp/isIdCard');
const isPhoneNum = require('./RegExp/isPhoneNum');
const isUrl = require('./RegExp/isUrl');

module.exports = {
    to422,
    getBrowser,
    add,
    sub,
    mul,
    div,
    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,
}

