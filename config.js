const fs = require('fs')
const chalk = require('chalk')

// ganti info bot dibawah ini
global.botName = "X-TECH-V1.5"
global.ownerName = "🔞𝐗-𝐓𝐄𝐂𝐇🔰"
global.botNumber = "2250500107362","2250141523296"
global.devNumber = ["2250500107362","2250141523296"]

global.Auto_Typing = true // auto typing
global.Auto_Recording = true // auto recording
global.Auto_ReadPesan = true // auto read messages
global.Type_Menu = "v1" // TypeMenu v1:IMAGE v2:TEXT V3:TEXT+QSTATUS

global.domain = "https://whatsapp.com/channel/0029VadaaRZK5cDOTh6sMD41" // Ganti Domain Lu
global.key_plta = "-" // Isi Apikey Plta Lu
global.key_pltc = "-" // Isi Apikey Pltc Lu
global.nama_host = "X-TECH-CORP" // Ganti Nama Store Atau nama Host Lu

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
