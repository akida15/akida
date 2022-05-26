let webp = require('node-webpmux')
let util = require('util')

let handler = async (m) => {
    if (!m.quoted) return m.reply('ضع علامة على الملصق!')
    let q = { message: { [m.quoted.mtype]: m.quoted } }
    if (/sticker/.test(m.quoted.mtype)) {
        let img = new webp.Image()
        await img.load(await m.quoted.download())

    }
}
handler.help = ['زرف']
handler.tags = ['الاوامر']

handler.command = ['زرف']

module.exports = handler
