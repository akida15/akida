// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'الرجاء إدخال تقرير'
    if (text.length > 300) throw 'الحد الاقصى 300 حرف'
    const laporan = `*「 ابلاغ 」*\nالرقم : wa.me/${m.sender.split`@`[0]}\nالسبب : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '34612538080@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️تم الإبلاغ عن المشكلة إلى المالك البوت ، ولن يتم الرد على التقارير الخاطئة!')
}
handler.help = ['ابلاغ'].map(v => v + ' <')
handler.tags = ['الاوامر']
handler.command = /^ابلاغ$/i

module.exports = handler
