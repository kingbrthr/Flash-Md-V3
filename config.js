import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

function parsePrefixes(prefixStr) {
  if (!prefixStr || prefixStr.trim() === '' || prefixStr.toLowerCase() === 'none') return []
  return prefixStr.split(',').map(p => p.trim()).filter(Boolean)
}

function parseBoolean(value) {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'on' || value.toLowerCase() === 'true' || value === '1'
  }
  return Boolean(value)
}

function parseLids(lidStr) {
  if (!lidStr || lidStr.trim() === '') return []
  return lidStr.split(',').map(l => l.trim()).filter(Boolean)
}

const CONFIG = {
  MODE: process.env.MODE || 'private',
  PREFIXES: parsePrefixes(process.env.PREFIXES),
  PORT: parseInt(process.env.PORT) || 3000,
  SESSION: process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk1hdjRXY3UrUXZTRzlxVDF1NzZVdFAxdi9hQTJmYk5rWWVMRXFvSDFVZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXdlYnRrMTJWbW5Kdnp0ajA0Y2hudVN2YmFsUVhkZ29rUHZFVEVIL2VHdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRXZEQ1dQbzZyb2NTYngvZVpOODdMRUg0bWdNbzZ1TmpoRmdDMGl3RkVrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ5dFArMWRnMFovZWdMcVNhQy9CTzdFYnlLem1qVEowYm1HOVBrYWZoVUZZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFQVE1SUjBRQTdFakdaQUFsLy9wZlNFN1FpR2tMeGJUUzNRaFJBdDFSRm89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlnQ2RQa1hSYk1nVjVydStiNnBmY05tYTNKaHZ4ZWRyL3V0bXhRNGg5MTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUFOUlpCOWFaZDRvSHNCR0I2dElGbXBwcXFFT09LUTQ5UnYxUS9oWC9VQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWJ4VWxuRkJlYXRLSHNWZ3h2WmZ5aWc5T1dpeklHaUt3K1BNRmhuMkxrYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImpIV2ZmTldDOUVTVy9YdW5McEN0TEtzUjlReGxtYVdzZ3BRT3oxN2kyNTFxVzhpcGxSN2JsT2JSeHdBbmZXZUVDVzhZQnVWZXRYSWN3bk80ZC9ZdEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEsImFkdlNlY3JldEtleSI6IjdzSVNBaVhWd20vMmpqWFNPWHRSTmdoTEdkaE5BY1RzdndhNHBWQUYzSEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ijc4VjI2SE1UIiwibWUiOnsiaWQiOiI5MjMyNTk4NTY2MTU6NTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS2luZyIsImxpZCI6IjI0MzkxMTgzMDI4NjQ5NTo1NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xIV3NQSUVFUGYraGM0R0dCQWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IndWSTZiNTVldEdXVlRSUlFkNHVIUGtzbysvV2p3RC9XcjREQk5yOEtva0E9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlczZTBUMTJUZ1ZIQkJSWWNld3U1bjJTSnpiRFZjVmlaQTVQcWgrS2N3dk1EUklRMnJueUpMRGcyMHovdlZyQ20xSjJKc01JeDdhZ1B6MVMvU3ord0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKYjBoMndXL2Q0SFhvQ1c5NlFUeTY4cG1FN0lwNG5Mby9zNXpNWmsvNWpyWVFyN1NTTUM3czQxOGljVFpZOGxtUEdDaEVFbmFlRjl2SFUwYk5WckJEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI1OTg1NjYxNTo1NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjRlNPbStlWHJSbGxVMFVVSGVMaHo1TEtQdjFvOEEvMXErQXdUYS9DcUpBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRWdnSSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NzQyODg3NjMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDZ0EifQ==',
  TZ: process.env.TZ || 'Africa/Nairobi',
  ANTICALL: parseBoolean(process.env.ANTICALL || 'off'),
  ANTIDELETE: parseBoolean(process.env.ANTIDELETE || 'on'),
  ANTIEDIT: parseBoolean(process.env.ANTIEDIT || 'on'),
  AUTO_READ: parseBoolean(process.env.AUTO_READ || 'off'),
  AUTO_VIEW: parseBoolean(process.env.AUTO_VIEW || 'on'),
  AUTO_LIKE: parseBoolean(process.env.AUTO_LIKE || 'on'),
  DM_PRESENCE: process.env.DM_PRESENCE || '',
  GRP_PRESENCE: process.env.GRP_PRESENCE || '',
  USER_LID: parseLids(process.env.USER_LID || ''),
  OWNER_NUMBER: process.env.OWNER_NUMBER || '254742063632',
  OWNER_NAME: process.env.OWNER_NAME || 'FLASH-MD Owner',
  BOT_NAME: process.env.BOT_NAME || 'Flash-Md-V3',
  BOT_VERSION: process.env.BOT_VERSION || '3.0.0'
}

export default CONFIG
