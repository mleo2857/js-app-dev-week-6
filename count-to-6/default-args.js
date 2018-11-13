module.exports = function midpoint(lowerBound = 0, upperBound = 1) {
    var range = (upperBound - lowerBound);
    return lowerBound + range/2;
};
