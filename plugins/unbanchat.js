let handler = async (m, { conn }) => {
  global.db.data.chats[m.chat].isBanned = false
  m.reply('تم')
}
handler.help = ['تكلم']
handler.command = /^تكلم$/i
handler.owner,handler.mods = true

module.exports = handler
