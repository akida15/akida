const dir = [
  'https://tinyurl.com/ygms8wvy',
  'https://tinyurl.com/ygms8wvy',
  'https://tinyurl.com/ygms8wvy',
  'https://tinyurl.com/ygms8wvy',
  'https://tinyurl.com/ygms8wvy',
  'https://tinyurl.com/ygms8wvy'
];
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, dir[Math.floor(Math.random() * dir.length)], 'dadu.webp', '', m)
}
handler.help = ['نرد']
handler.tags = ['الاوامر']
handler.command = /^نرد$/i

module.exports = handler
