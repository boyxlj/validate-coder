"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCode = void 0;
var getCode = function (container, bgColor) {
    if (bgColor === void 0) { bgColor = 'gray'; }
    if (!container)
        return -1;
    var res = Math.floor(Math.random() * (9999 - 1001) + 1001);
    var str = "";
    var degList = [];
    var colorList = [];
    for (var index = 0; index < 4; index++) {
        var res_1 = Math.floor(Math.random() * 50);
        if (res_1 % 2 === 0) {
            degList.push(0 - res_1);
        }
        else {
            degList.push(res_1);
        }
    }
    for (var index = 0; index < 4; index++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        colorList.push("rgb(".concat(r, ",").concat(g, ",").concat(b, ")"));
    }
    for (var idx = 0; idx < res.toString().length; idx++) {
        str += "\n      <span style='transform:rotate(".concat(degList[idx], "deg);\n          display:inline-block;\n          font-size:29px;\n          padding:0 4px;\n          user-select:none;\n        font-weight:").concat(degList[idx] > 0 ? "bold" : "", ";\n        color:").concat(colorList[idx], "\n\n      '>").concat(res.toString()[idx], "</span>\n      ");
    }
    container.style.backgroundColor = bgColor;
    container.style.filter = 'blur(0.2px)';
    container.innerHTML = str;
    return res;
};
exports.getCode = getCode;
