let handler = async function (m, { conn }) {
  let list = []
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
    let name = db.data.users[i] ? db.data.users[i].name : conn.getName(i)
    list.push({
      "displayName": name,
      "vcard": `N:;${name};;;\nFN:${name}\n${i.split('@')[0]}:${i.split('@')[0]}\n`
    })
  }
  await conn.sendMessage(m.chat, {
    "اسم ": `${list.length}`,
    "جهات الاتصال": list
  }, 'جهات الاتصال', { quoted: m })
}
handler.help = ['مطور']
handler.tags = ['الاوامر']
handler.command = /^(مطور|acreator)$/i

module.exports = handler