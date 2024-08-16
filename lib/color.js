/*
* 𝙊𝙬𝙚𝙣𝙨𝘿𝙚𝙫
* 𝘵𝘦𝘭𝘦: https://t.me/owenssw
* 𝘪𝘯𝘧𝘰: https://s.id/26AYH
* 𝘺𝘵: https://youtube.com/CekGem
* 𝙶𝚛𝚘𝚞𝚙: https://chat.whatsapp.com/LQBLGAalERjE1P5X3REnGC

* 🚨Di Larang Menghapus Wm Ini🚨
* #𝗛𝗮𝗿𝗴𝗮𝗶𝗹𝗮𝗵 𝗣𝗲𝗺𝗯𝘂𝗮𝘁 
*/

const chalk = require('chalk')

const color = (text, color) => {
return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const mylog = (text, color) => {
return !color ? chalk.greenBright('[ BOTMD ] ') + chalk.magentaBright(text) : chalk.greenBright('[ BOTMD ] ') + chalk.keyword(color)(text)
}

module.exports = { color, mylog }