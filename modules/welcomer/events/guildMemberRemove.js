const {confDir} = require('../../../main');
exports.run = async (client, member) => {
    const moduleConfig = require(`${confDir}/welcomer/config.json`);
    if (!member.guild.channels.cache.get(moduleConfig['goodbye-message-channel'])) return console.error('Could not found leave channel')
    if (moduleConfig['not-send-messages-if-member-is-bot'] && member.user.bot) return;
    await member.guild.channels.cache.get(moduleConfig['goodbye-message-channel']).send(
        moduleConfig['leave-text'].split('%mention%').join(`<@${member.id}>`)
            .split('%tag%').join(member.user.tag)
            .split('%joinedAt%').join(`${member.joinedAt.getDate()}.${member.joinedAt.getMonth()}.${member.joinedAt.getFullYear()}`)
    )
}