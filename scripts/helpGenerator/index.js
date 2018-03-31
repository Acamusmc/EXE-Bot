var arrays = require('../../json/commands.json')

const _main = require('../index');
const main = new _main.Main();
const data = main.getData();
var wikis = data.wikis();

//#region Support
var supportArray = arrays.support;
var support = '';
supportArray.forEach((e) => {
    support += '\n' + e
});
exports.support = replacedWikis(support);
//#endregion

//#region Fun
var funArray = arrays.fun;
var fun = '';
funArray.forEach((e) => {
    fun += '\n' + e
});
exports.fun = replacedWikis(fun);
//#endregion

//#region Info
var infoArray = arrays.info;
var info = '';
infoArray.forEach((e) => {
    info += '\n' + e
});
exports.info = replacedWikis(info);
//#endregion

//#region Misc
var miscArray = arrays.misc;
var misc = '';
miscArray.forEach((e) => {
    misc += '\n' + e
});
exports.misc = replacedWikis(misc);
//#endregion

//#region Moderation
var moderationArray = arrays.moderation;
var moderation = '';
moderationArray.forEach((e) => {
    moderation += '\n' + e
});
exports.moderation = replacedWikis(moderation);
//#endregion

//#region NSFW
var nsfwArray = arrays.nsfw;
var nsfw = '';
nsfwArray.forEach((e) => {
    nsfw += '\n' + e
});
exports.nsfw = replacedWikis(nsfw);
//#endregion

//#region Osu
var osuArray = arrays.osu;
var osu = '';
osuArray.forEach((e) => {
    osu += '\n' + e
});
exports.osu = replacedWikis(osu);
//#endregion

//#region Random
var randomArray = arrays.random;
var random = '';
randomArray.forEach((e) => {
    random += '\n' + e
});
exports.random = replacedWikis(random);
//#endregion

//#region Utility
var utilityArray = arrays.utility;
var utility = '';
utilityArray.forEach((e) => {
    utility += '\n' + e
});
exports.utility = replacedWikis(utility);
//#endregion

//#region Voting
var votingArray = arrays.voting;
var voting = '';
votingArray.forEach((e) => {
    voting += '\n' + e
});
exports.voting = replacedWikis(voting);
//#endregion

//#region Wiki
var wikiArray = arrays.wiki;
var wiki = '';
wikiArray.forEach((e) => {
    wiki += '\n' + e
});
exports.wiki = replacedWikis(wiki);
//#endregion

function replacedWikis(string) {
    return string.replace('$WIKIS.HOME', wikis.home)
        .replace('$WIKIS.COMMANDS', wikis.commands)
        .replace('$WIKIS.REPLIES', wikis.replies)
        .replace('$WIKIS.FAQ', wikis.faq)
        .replace('$WIKIS.MODIFIERS', wikis.modifiers);
}