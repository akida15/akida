let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('LeysCoder', '/api/ppcouple', {}, 'apikey'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'الولد', m)
  await conn.sendFile(m.chat, json.result.female, '', 'البنت', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet']
handler.command = /^تطقيم$/i

module.exports = handler
