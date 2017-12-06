/**
 * 
 * @desc   判断url是否合法
 * @param  {string} str
 * @return {boolean}
 */
function isUrl(){
    return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

module.exports = isUrl;