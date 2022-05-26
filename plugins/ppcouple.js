let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'الولد', m)
  await conn.sendFile(m.chat, json.result.female, '', 'البنت', m)
}
handler.help = ['تطقيم']
handler.tags = ['الاوامر']
handler.command = /^(pp(cp|تطقيم))$/i

module.exports = handler
