let { promisify } = require('util')
let _gis = require('g-i-s')
let gis = promisify(_gis)

let handler  = async (m, { conn, args, text }) => {
  if (!text) throw 'عن اي صورة تبحث'
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw 'ما وجدتها، اذلف.'
  conn.sendFile(m.chat, url, 'gimage', `
*── 「 صور جوجل 」 ──*

${text}
➸ *العرض*: ${width}
➸ *ارتفاع*: ${height}
`.trim(), m)
}
handler.help = ['صورة']
handler.tags = ['internet', 'tools']
handler.command = /^(صورة|image)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
