import fs from 'fs'
import { createHash } from 'crypto'
import fetch from 'node-fetch'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i

let handler = async function (m, { text, usedPrefix, command }) {

let info = `❏ *📮 Script Bot*\n│• *Script :*\n│↳ Private ya hihihiヾ(〃^∇^)ﾉ\n│• *Node_Modules:*\n│↳ -\n│↳ Ato tekan *npm  i/yarn install*\n│• *Base :* \n│↳ -/\n *• Free Panel:*\n -\n ┗──────────═┅═──────────\n\n• *Mau script? Chat Owner!*\n• Jika menemukan bug Bot, harap lapor owner\n• Websites RullBOT: - Jangan, lupa join grup ya\n• Chat Owner jika ingin memasukkan bot ke gc kalian!!!`
let kled = `https://ibb.co/TMn92tG`
let td = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'

let buttonMessage= {
'document':{'url':'https://www.google.com'},
'mimetype':global.ddocx,
'fileName':'Script><.pdf',
'fileLength':9999999999999,
'pageCount':999,
'contextInfo':{
'forwardingScore':1000,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':sig,
'mediaType':2,
'previewType':'pdf',
'title':'꧁𓊈𒆜🆃🅷🅴🅾𒆜𓊉꧂~',
'body':titlebot,
'thumbnail':await(await fetch(kled)).buffer(),
'sourceUrl':'-'}},
'caption':info,
'footer':botdate,
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat, buttonMessage, { quoted:m})
}

handler.customPrefix = /^(.script|.sc)$/i
handler.command = new RegExp

export default handler
