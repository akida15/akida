let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'من تبي تفك حضره'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'من تبي تفك حضره'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `تم فك الحضر`, m)
}
handler.help = ['فك_الحضر']
handler.tags = ['owner']
handler.command = /^فك_الحضر$/i
handler.rowner = true

module.exports = handler
