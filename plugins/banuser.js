let handler = async (m, { conn, text }) => {
    if (!text) throw 'مين تبي تبند'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'مين تبي تبند'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `تم حظره بنجاح`, m)
}
handler.help = ['حضر']
handler.tags = ['owner']
handler.command = /^حضر$/i
handler.rowner = true

module.exports = handler
