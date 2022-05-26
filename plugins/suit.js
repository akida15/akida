const pilihan = ['🪨', '✂️', '📄']
const Case = str => str[0].toUpperCase() + str.slice(1).toLowerCase()
let handler = async (m, { text, usedPrefix }) => {
    let salah = `اختر ✂️, 📄, 🪨\n\n*مثال* : ${usedPrefix}سويت ✂️\n`
    if (!text) throw salah
    if (!pilihan.includes(text.toLowerCase())) throw salah
    let suitP1 = pilihan.indexOf(text.toLowerCase())
    let suitPC = Math.floor(Math.random() * 3)
    let kamu = Case(pilihan[suitP1])
    let bot = Case(pilihan[suitPC])
    let state = `انت: ${kamu}\nانا: ${bot}`
    let user = global.db.data.users[m.sender]
    if (suitP1 === suitPC) {
        user.exp += 100
        m.reply(`*تعادلنا*\n\n${state}\n\nنقاط (±) 100 اكس بي`)
    } else if ((suitP1 + 1) % 3 === suitPC) {
        user.exp += 300
        m.reply(`*فزت*\n\n${state}\n\nنقاط (+) 300 اكس بي`)
    } else if ((suitP1 - 1) % 3 === suitPC) {
        user.exp -= 300
        m.reply(`*خسرت*\n\n${state}\n\nنقاط (-) 300 اكس بي`)
    } else throw 'هنالك خطأ'
}
handler.help = ['سويت [✂️|🪨|📄]']
handler.tags = ['الاوامر']

handler.command = /^سويت$/i

module.exports = handler
