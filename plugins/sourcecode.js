let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
ðð¾ ððð ð½ð ðððððð ð¥
github.com/LynnXzy/scbotz-v1
`.trim(), 'Â©LynXzyð¥', 'Makasih', 'Thanks')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
