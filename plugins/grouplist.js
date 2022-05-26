let handler = async (m, { conn }) => {
  let txt = conn.chats.all().filter(v => v.jid.endsWith('g.us')).map(v =>`${conn.getName(v.jid)}\n${v.jid} [${v.read_only ? 'طلع' : 'انضم'}]`).join`\n\n`
  conn.reply(m.chat, 'قائمة المجموعات:\n' + txt, m)
}
handler.help = ['قروبات']
handler.tags = ['الاوامر']
handler.command = /^قروبات$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

