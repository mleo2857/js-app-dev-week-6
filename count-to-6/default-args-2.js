module.exports = function makeImportant(string, exclamationPoints = string.length) {
    var exclamation = `!`;
    return `${string}${exclamation.repeat(exclamationPoints)}`;
};
