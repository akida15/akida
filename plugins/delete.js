let handler = function (m) {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!fromMe) throw false
  if (!isBaileys) throw 'الرسالة مو حقي دز🐧.'
  this.deleteMessage(chat, {
    fromMe,
    id,
    remoteJid: chat
  })
}
handler.help = ['احذف']
handler.tags = ['الاوامر']

handler.command = /^احذف$/i

module.exports = handler
