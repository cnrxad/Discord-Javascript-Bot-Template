const { Channel } = require("discord.js");
const { white, ErrorColor } = require("../../../config/embed.json");
const prefix = require("../../events/messageCreate");
const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {

const embed = new Discord.MessageEmbed() 

	.setColor(white)
	.setTitle('HELP MENU')
	.setDescription(`Hola ${message.author} bienvenido al Menú Principal, aqui encontrarás todos mis comandos.`)
	.setThumbnail('https://cdn.discordapp.com/avatars/1060357217313886340/22e918e3ce30fd183277dfdfbff5441d.webp')
	.addFields(
		{ name: '📢 - Información', value: 'Aquí podras ver mis comandos sobre información.'},
		{ name: '🎲 - Mixtos', value: 'Aquí se encuentran los comandos mixtos.'},
        { name: '👮‍♂️ - Moderación', value: 'Estos comandos son únicos del equipo de moderación.'},
		{ name: '🎫 - Diversión', value: 'Con estos comandos te echarás unas risas.'},

	)
	.setTimestamp()
	.setFooter({ text: 'Perty#4530', iconURL: 'https://cdn.discordapp.com/avatars/1060357217313886340/22e918e3ce30fd183277dfdfbff5441d.webp?size=160' });

message.channel.send({ embeds: [embed] });
}

module.exports.config = {
    name: "help",
    aliases: ["h", "ayuda", "commands", "comms", "coms", ""]
}