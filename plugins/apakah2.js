let handler = async (m, { command, text }) => {
  m.reply(`
  *السؤال:* ${m.text}
  *الجواب:* ${pickRandom(['وش ذا السؤال🐧.', 'اتوقع يب 😂', 'مدري صراحة', 'نعم', 'مدري اذلف 🗿', 'لا'])}
  `.trim())
}
handler.help = ['هل']
handler.tags = ['الاوامر']
handler.command = /^هل$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}