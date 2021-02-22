module.exports = function reverse(n) {
    let abs = Math.abs(n);
    let num = abs.toString().split("").reverse().join("");
    return +num;
};
