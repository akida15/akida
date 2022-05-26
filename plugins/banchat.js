let handler = async (m, { conn, participants }) => {
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.db.data.chats[m.chat].isBanned = true
    m.reply('تم!')
  // } else m.reply('Ada nomor host disini...')
}
handler.help = ['اسكت']
handler.command = /^اسكت$/i
handler.owner = true

module.exports = handler
