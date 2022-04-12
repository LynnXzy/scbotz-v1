let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/STK-20220410-WA0830.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Sabar..*', 'status@broadcast')
}
handler.customPrefix = /sabardek/i
handler.command = new RegExp

module.exports = handler
