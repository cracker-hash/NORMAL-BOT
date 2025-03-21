const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUXZOqOBT8L3mVuYKgqFVTtfiFjCAiiujW1laAgBEISAKKU/73LXSm5j7svTvLUyokfTrdfc47IBmmaIFqMHwHeYEryFCzZHWOwBCMyjBEBeBAABkEQ7BfufFmuSm7SNEdMr2GBK2DgvbbmqfPYz/utzatY8Infqf/Cu4cyEsvwf5vAKfqKV/DI+GX54thdEycGXY1N0/twF7u3mY7VDnWJTxu+I71Cu4NIsQFJtE0P6IUFTBZoHoFcfE9+tslkevrbj5p8aYohwc7Ozm+HulBhMOT2ua3+qogXd2r3en36Ju7fX0xxXa+NFBa+ldN3CRpsjgctsfa2XpZLdjo5pVShuMnfYojggItQIRhVn9bd2WpxHQ8LnRHX47WzKp3IfQHUkvoEghNUxzl55jpezPcSd8jHpptd6mvOte0j/zbyJAvO0FvX4OtNYdOJIQjaS5FE7U1xtbPxFfFZ1bi/6P7eXFbh6f5Ao01O6DtSTA1q9DmoaorikUuh975sjmfk5G7Vb5H308mOyIols9j6r1dkyueif7xODc9VTAmWu1B+yjovMuI8UUfsrL4HUvP2vtFPq35ujgW/aizkJx25yzI1qzSqTOH/du2NvxBMaDFgp373nxZpuK2Vy0Jpb1gtH+zbTbvVQfFHF2c8LhxqvkyUl4fL4pRrQVgKNw5UKAIU1ZAhjPy2OtxAAaVjfwCsYe6QAtlYxxsNrXjeik/VSczn6whOY8Whg63/O5t6a6JsDZhHb8CDuRF5iNKUTDHlGVFbSBKYYQoGP75FwcIurKnb001UeBAiAvKtqTMkwwGn6Z+/oS+n5WE2TXxx80CFWDIf20jxjCJaCNjSWDhH3GFxkfIKBiGMKHozoEAVdhHDR7on1TpIApwnfRgyfZ/GyrWZ1ZD+ZiR5xE+GEii0O2+yEEYvkge9F8GSB68yHyAUNBFvCiHgAP4o2WaO790EImGmLvzWg1m/XLtysXsGo3aZj2/ag8XntKjAgVgyIoSccCDflzmmyxG5De4JGm7Vuc26WnbsW0ETtJOsluYeeMi/gn3aSkYvn+NqXEWNHgH3RVUdSYDDqSPBOLm5Z1utydIXbEvdaRh7w/649LoCPP8B0EMcIDA5jCwM9bU+DCguR0gBnFCwRCMV6ZQv2mz6cKd9QpJVRUtUsaRAr4M+wz+M1m6kRXrw35Ua7OrjG+9ut0J61vvtOgvzjNqCy6TpyzNaRxHr/8CAoaAojRl8WWjKUKdRBcr3F8XooNPS3FN4+ra76wvOIqmidBiueZ5J52KvnTiU3clJ4crofmGaHyNsUPpvkjj801343H02lR7BufnYrOBCttl1Y9U56ZeLhYTa9Ivjq3ACO29ZS2F7Uizom7VQpvUZeOediu9A0Hb3NpNrEvon+PQileH0nWixOR7o1AhOraeLfkYCcnHKMaPbnn/iFmI0WOyfTjwX0Z9BZ6/cz9BfIzKX4RqZN8WC363U3w88pFEW7QakD5tZXU1Ph+9KXNkdNUPZ+/tTQP3+18cyBPIwqxIGxdSDwIOJJAy5athNzhFlME0B0NBljpiX5ClHgfSWslzm0H22edAaT7VXIH7P5JZgZYCCAAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Zatchy 11",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "255614538424",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'yes',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE_MESSAGES || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  ANTILINK_GROUP : process.env.ANTILINK_GROUP || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});





