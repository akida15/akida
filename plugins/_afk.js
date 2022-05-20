module.exports = {
  before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
      m.reply(`
      لقد عدت ، منور/ه${user.afkReason ? ' من : ' + user.afkReason : ''}
عاد بعد ${clockString(new Date - user.afk)}
`.trim())
      user.afk = -1
      user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
      let user = global.db.data.users[jid]
      if (!user) continue
      let afkTime = user.afk
      if (!afkTime || afkTime < 0) continue
      let reason = user.afkReason || ''
      m.reply(`
      لا تمنشنه
      هو مختفي ${reason ? 'بسبب : ' + reason : 'ما قال شي'}
      اختفى قبل ${clockString(new Date - afkTime)}
`.trim())
    }
    return true
  }
}

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
