const { noMention, noPerms, noPermsBot, sameId } = require("../../../config/errors.json")

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.reply(noMention)
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username.toLowerCase() === args.slice(0).join(" ") || x.user.username === args[0]);
    if (!message.member.permissions.has("BAN_MEMBERS")) return message.reply(noPerms);
    if (!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply(noPermsBot);
    if (message.member.id === member.id) return message.reply(sameId);

    let reason = args.slice(1).join(" ") || "No reason"

    member.ban({ reason: reason })
    message.channel.send(`Acabo de banear a ${member}.\nRazón: ${reason}`)
}

module.exports.config = {
    name: "ban",
    aliases: []
}