const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {

SESSION_ID: process.env.SESSION_ID === undefined ? '𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=Lj5nEDJK#NO-BtSI1zTSDHT2JStvGe7AiUMwlx2cgV4gPo2gzlbE' : process.env.SESSION_ID,
PORT: process.env.PORT === undefined ? "8000" : process.env.PORT,
SESSION_NAME: process.env.PORT === undefined ? "asitha" : process.env.SESSION_NAME,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://porn_user:Io397vtmGIsjgLnp3RucAtIQeImjkkqp@dpg-d00gkdili9vc739t5o70-a.virginia-postgres.render.com/porn' : process.env.POSTGRESQL_URL,
};
