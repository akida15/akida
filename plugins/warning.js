let handler = async (m, { conn, groupMetadata }) => {
    let mention = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    if (!mention) throw `منشن حدا`
    let warn = global.db.data.users[mention].warn
    if (warn < 2) {
        global.db.data.users[mention].warn += 1
        m.reply(`⚠️ *انذار +1*`)
        m.reply('تلقيت تحذيرًا من المسؤول ، أصبح التحذير الإجمالي الآن *' + (warn + 1) + '* تحذير ، إذا تلقيت تحذيرًا * 3 مرات * ، فسيتم إزالتك من المجموعة ، أذكر)', mention)
    } else if (warn == 2) {
        global.db.data.users[mention].warn = 0
        m.reply('الله معك')
        await time(5000)
        await conn.groupRemove(m.chat, [mention])
        m.reply(`تمت إزالتك من المجموعة ${groupMetadata.subject} `, mention)
    }
}
handler.help = ['انذار']
handler.tags = ['الاوامر']
handler.command = /^انذار$/i

handler.group = true
handler.admin = true
handler.botAdmin = true

module.exports = handler

const time = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}