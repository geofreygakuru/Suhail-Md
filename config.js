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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254748102529";




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


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_01_06_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAyMyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDM1LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk0LFxuICAgICAgICA3NixcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICA5MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMixcbiAgICAgICAgMjAwLFxuICAgICAgICA3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI4LFxuICAgICAgICAzNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICA0LFxuICAgICAgICAzNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjksXG4gICAgICAgIDgyLFxuICAgICAgICAyOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjksXG4gICAgICAgIDcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzAsXG4gICAgICAgIDMyLFxuICAgICAgICAyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY4LFxuICAgICAgICAyNixcbiAgICAgICAgMTU5LFxuICAgICAgICAxNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTY5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTg0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDg3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDkwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA3MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxOCxcbiAgICAgICAgOSxcbiAgICAgICAgMixcbiAgICAgICAgMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNixcbiAgICAgICAgMTAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDkxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODYsXG4gICAgICAgIDM0LFxuICAgICAgICA1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJweU8yMEV0OTI1K1FXdmFUWHZ1eFZsckUzdjBMQ1FLQTVrM0RHWHByWkt3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0ODEwMjUyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjAyM0U4RjU0NEM3NTFCOEZDREZBOUMwNzk0QjhBOURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NzIyNDA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzQ4MTAyNTI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMjBEQjFFRjY5QTVDM0I3QzUxNEYxOTYzNjdERkYyNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTc3MjI0MDdcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiXzJMQW0tMWNUYmlNWjdNWmFfX3FBQVwiLFxuICBcInBob25lSWRcIjogXCI4OTkxMGNkMy00OTIxLTQ5YTUtOWQ4NC0xY2VmYmQyZjI4MjFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzksXG4gICAgICAxNTMsXG4gICAgICAxNjMsXG4gICAgICAyMjcsXG4gICAgICAyMTUsXG4gICAgICA5NyxcbiAgICAgIDE4MyxcbiAgICAgIDI5LFxuICAgICAgNTMsXG4gICAgICAyMDMsXG4gICAgICAyMDgsXG4gICAgICAyOSxcbiAgICAgIDEyMSxcbiAgICAgIDI0MixcbiAgICAgIDg3LFxuICAgICAgMTI3LFxuICAgICAgMTk0LFxuICAgICAgMTAxLFxuICAgICAgMjQwLFxuICAgICAgMTQwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExOCxcbiAgICAgIDE1NSxcbiAgICAgIDI0NixcbiAgICAgIDE4NixcbiAgICAgIDAsXG4gICAgICAxNjUsXG4gICAgICAxMjEsXG4gICAgICAzNyxcbiAgICAgIDIyMSxcbiAgICAgIDUxLFxuICAgICAgMTkwLFxuICAgICAgMTg0LFxuICAgICAgMjM3LFxuICAgICAgMixcbiAgICAgIDE1NyxcbiAgICAgIDE3NCxcbiAgICAgIDEzNSxcbiAgICAgIDEyMyxcbiAgICAgIDkyLFxuICAgICAgNjdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOFFEMTNSSzNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc0ODEwMjUyOTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxODQwODc0OTk0OTAwNTo1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkdlb2ZyZXlHYWtzXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSnZJM3RFQ0VKKzZpYk1HR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJkN0hNQlZJemp2anBkTS9HVWYweXNaTllFVWJpWEg0ODR6MkU4TkJ2U0FJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJHek9SazZNbU82YVdmUDd4aE9mTFRIWGRSNCtjVzZuaW1uelUzYTRwbmREbGFvM3FDYVpLbDJVeEdzUjFwZzQ2Vjd3c2orZTdwRldNRjYvWjB1bUFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImhPS0ZmZ0pST1I4RHAzZmN5VU5FTkNEcnRHVDN2eVNjMTJhNEFmcG8zWVorTE43dkZvVEhKVGJzVE1RVnZqV0txL1dWWEZaemR3VFBOZVVVeVpNdUFBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc0ODEwMjUyOTo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3NzIyNDAzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBTUFBR1AzXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFNQUFHUDMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJxNEhISTBGYUt4OFY3N1Fyc3I1NDBDNHQ0anE2M0pPSWJlMDZJOTJUOUIwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcwODI4OTU2MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0= "  // PUT your SESSION_ID 


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
