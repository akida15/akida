let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n\n  〔 ⏣|━─━─━⏣⊰🌑〘 المنشن الجماعي 〙🌑⊱⏣━─━─━|⏣ 〕\n💠 ' + users.map(v => '@' + v.replace(/@.+/, '')).join`\n💠 ` + '\n', null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.command = ['منشن']

handler.admin = true
handler.group = true

module.exports = handler
