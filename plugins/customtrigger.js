const uploadImage = require('../lib/uploadImage')
const uploadFile = require('../lib/uploadFile')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')
//api down always at night :/
let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw 'اكتب كلمة'
  if (text.length > 8) return conn.reply(m.chat, '_النص طويل_', m)
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw `ارسل صورة *${usedPrefix + command} ${text}*`
 try {
  if (!/image\/(jpe?g|png)/.test(mime)) throw `خطأ ${mime} `
  let img = await q.download()
  let url = await uploadImage(img).catch(e => uploadFile(img))
  let meme = global.API('http://zekais-api.herokuapp.com/', 'customtrigger', {text , image: url})
  let stiker = await sticker(null, meme, global.packname, global.author)
  conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
 } catch (e) {
   m.reply('خطأ || ارسل صورة')
   throw false
  }
}
handler.help = ['ملصق2 ']
handler.tags = ['الاوامر']
handler.command = /^ملصق2$/i
handler.limit = false
//MADEbyAnshul
module.exports = handler