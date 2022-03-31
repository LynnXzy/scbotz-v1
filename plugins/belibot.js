let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 SEWA BOT 〙 ═
╠➥ *1 Minggu* : *Rm 5.00*
╠➥ *2 Minggu* : *Rm 10.00*
╠➥ *3 Minggu* : *Rm 15.00*
╠➥ *1 Bulan* :  *Rm 20.00*
║
╠═〘 USER PREMIUM 〙 ═
╠➥ *1 Minggu* : *Rm 5.00*
╠➥ *2 Minggu* : *Rm 10.00*
╠➥ *3 Minggu* : *Rm 15.00*
╠➥ *1 Bulan* :  *Rm 20.00*
║
╠═〘 PEMBAYARAN 〙 ═
╠➥ Topup
╠➥ Pin
║
╠═〘 INGIN BELI BOT? 〙 ═
╠➥Klik Button Di Bawah
║
╠═〘 LYNXZY 〙 ═`.trim(), '©LynnXzy', 'Digi', '#viadigi', 'Umobile', '#viaumobile', m)
}

handler.command = /^sewabot$/i

module.exports = handler
