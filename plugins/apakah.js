let handler = async (m) => {
  m.reply(`
*السؤال:* ${m.text}
*الجواب:* ${pickRandom(['وش ذا السؤال🐧.', 'اتوقع يب 😂', 'مدري صراحة', 'نعم', 'مدري اذلف 🗿', 'لا'])}
`.trim())
}
handler.help = ['هل']
handler.customPrefix = /(\?$)/
handler.command = /^هل$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}