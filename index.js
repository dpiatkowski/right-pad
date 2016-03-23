function rightpad(str, len, ch) {
    var newStr = String(str);
    var filler = ch;

    if (!filler && filler !== 0) { 
        filler = ' ';
    }

    len = len - newStr.length;
    var i = -1;
    
    while (++i < len) {
        newStr += filler;
    }

    return newStr;
}

module.exports = rightpad;
