const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254706806231";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_53_06_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAzMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDc1LFxuICAgICAgICA5NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMzLFxuICAgICAgICA0OCxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNixcbiAgICAgICAgNTIsXG4gICAgICAgIDM4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU2LFxuICAgICAgICA2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMzLFxuICAgICAgICAyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEsXG4gICAgICAgIDIzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIsXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICA2MixcbiAgICAgICAgMTYxLFxuICAgICAgICAxODMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDMwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDcwLFxuICAgICAgICAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI4LFxuICAgICAgICAxODksXG4gICAgICAgIDM0LFxuICAgICAgICA3NyxcbiAgICAgICAgMjE5LFxuICAgICAgICA3NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjEwLFxuICAgICAgICAxODMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNixcbiAgICAgICAgODUsXG4gICAgICAgIDM0LFxuICAgICAgICA0OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDMyLFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY0LFxuICAgICAgICA0MixcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDkxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDUsXG4gICAgICAgIDEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMixcbiAgICAgICAgMTMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDU2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgMTYzLFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDExMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJScnJJc3hPUGllczFveVMreWY5dGZ5dUlXNXJyVzRodGhLSEJXZzRVVTdnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJjNlh1UnJlRVJ4T2FqbHRGNTN0QVhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjk3YzZmNzU3LTQwZDctNGYxMy1iNTNiLTVjOTY5NmIxYTMyNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2MyxcbiAgICAgIDE1OCxcbiAgICAgIDIwMyxcbiAgICAgIDE0OCxcbiAgICAgIDk5LFxuICAgICAgNTksXG4gICAgICAyMDEsXG4gICAgICAxMjAsXG4gICAgICAxNjAsXG4gICAgICAyMTAsXG4gICAgICA1MSxcbiAgICAgIDY0LFxuICAgICAgMjUsXG4gICAgICAxOTMsXG4gICAgICAxNzEsXG4gICAgICAxMDAsXG4gICAgICA4NyxcbiAgICAgIDE2LFxuICAgICAgNTYsXG4gICAgICAxMjBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzMsXG4gICAgICAyMixcbiAgICAgIDExNyxcbiAgICAgIDU1LFxuICAgICAgOTQsXG4gICAgICAxMDQsXG4gICAgICA2LFxuICAgICAgMTk4LFxuICAgICAgNDcsXG4gICAgICAyMTQsXG4gICAgICAxMTQsXG4gICAgICAxOTQsXG4gICAgICAyNDQsXG4gICAgICAxOTYsXG4gICAgICAxMTgsXG4gICAgICAyMDIsXG4gICAgICA1NSxcbiAgICAgIDE3LFxuICAgICAgNCxcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQMjY4NDk5V1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzA2ODA2MjMxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDM2OTI5MTIzOTg0NjQ6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS255dE9NRkVKTDBsN01HR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJjYU5UbkZpdGJoN0dsVm82Q1RGOHNmdno1d0luNm85ejh6ZDFRd001WGw4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInlhaFowUU80S1A1bXYwT0dkYlVMT1RTazdNZzRtUmZGWGZSVWdyWTc0RTBGaEhOSXdjT2tXYUtxWWNpczEzWHhVZ0VHOXNtbUR2RHMyV3pjTGlsVkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkJRSTdTVVVQWTd4RHQxRXVCQkZTRFRkU2djRy9QWFVHSUFjTFgrOG9KSXkvcTRxK0ZibG15K0hwbytqU0pkMUZqd05Vc0tPbWROa2RRQUNhbWI2c0FRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwNjgwNjIzMToxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzk1OTE5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVB3VVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHdVLmpzb24iOiAie1wia2V5RGF0YVwiOlwic0pVSmxBQW5MSU5neER6ZGt0RkFNdllDMlFwZmFsV3d2VHpOK1BWR0xRMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTUwNjYxOTI5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTc5NTgyNDQ4ODhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
