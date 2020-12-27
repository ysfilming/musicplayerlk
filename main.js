const Discord = require('discord.js');
const ytdl = require('ytdl-core');
const PREFIX= '$'

const client = new Discord.Client({disableEveryone: true })

client.on('ready', () => console.log('Active'))


client.once('ready' ,() =>{
    console.log('Codelyon Is Online!');

    client.on('ready', () => console.log(Active))

    client.on('message' ,async message => {
        if(message.author.bot) return 
        if(message.content.startsWith(PREFIX)) return

        const  args = message.content.substring(PREFIX.length).split()


        if(message.content.startsWith('${PREFIX}play')) {
        const Voicechannel = message.member.voice.channel

        if (!voiceChannel) retruns message.channel.send(`You Need Be In A Voice Channel To Play Music`)
        const permission =voiceChannel permissionfor(message.client.user)
        if(!permission.has('CONNECT')) return message.channel.send("I Dont Have Permission to connect the the voice channel")
       
        try {

            var connection =await voiceChannel.join()
        }catch (error){
            console.log('There Was An error connecting the voice channel: ${error}')
            return message.channel.send('There Was an error connecting to the voice channel: ${error}')
        }
        const dispatcher = connection.play(ytdl(args[1]))
        .on('finish', () => {
            console.log(error)
    })
    dispatcher.setVolumeLogarithmics(5/5)
}elese if (message.content.startsWith(`${PREFIX})stop )){
    if(message.member.voice.channel) retrun message .channel.send("You Need Be In Voice Channel To Stop Music")
    message.member.voice.channel.leave()
    retrun undefined
}
}
  })




client.login(process.env.TOKEN)
