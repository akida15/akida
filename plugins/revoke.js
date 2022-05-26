let handler = async (m, { conn, args, usedPrefix }) => {
  let res = await conn.revokeInvite(m.chat)
  m.reply('تم حذف رابط القروب القديم')
}
handler.help = ['اعادة']
handler.tags = ['الاوامر']
handler.command = /^اعادة|new)(invite|link)?$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
