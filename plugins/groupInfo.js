let handler = async (m, { conn, participants, groupMetadata }) => {

    const getGroupAdmins = (participants) => {
        admins = []
        for (let i of participants) {
            i.isAdmin ? admins.push(i.jid) : ''
        }
        return admins
    }

    let pp = './src/avatar_contact.png'
    try {
        pp = await conn.getProfilePicture(m.chat)
    } catch (e) {
    } finally {
        let { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink } = global.db.data.chats[m.chat]
        const groupAdmins = getGroupAdmins(participants)
        let listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.split('@')[0]}`).join('\n')
        let text = `*「 Group Information 」*\n

*الاسم:* 
${groupMetadata.subject}

*الوصف:* 
${groupMetadata.desc}

*عدد الاعضاء:*
${participants.length} Members

*مؤسس القروب:* 
@${m.chat.split`-`[0]}

*المشرفين:*
${listAdmin}
`.trim()
        ownernya = [`${m.chat.split`-`[0]}@s.whatsapp.net`]
        let mentionedJid = groupAdmins.concat(ownernya)
        conn.sendFile(m.key.remoteJid, pp, 'pp.jpg', text, m, false, { contextInfo: { mentionedJid } })
    }
}
handler.help = ['قروب']
handler.tags = ['الاوامر']
handler.command = /^قروب$/i

handler.group = true

module.exports = handler