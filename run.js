//================= { MODULE } =================\\
require('./tmp/helpers/commandMenu')
require('./settings')
const {
    smsg,
    getGroupAdmins,
    formatp,
    tanggal,
    formatDate,
    getTime,
    isUrl,
    await,
    sleep,
    clockString,
    msToDate,
    sort,
    toNumber,
    enumGetKey,
    runtime,
    fetchJson,
    getBuffer,
    jsonformat,
    delay,
    format,
    logic,
    generateProfilePicture,
    parseMention,
    getRandom,
    pickRandom,
    reSize
} = require('./lib/myfunction')
//================= { MODULE } =================\\
const {
    addPremiumUser,
    getPremiumExpired,
    getPremiumPosition,
    expiredCheck,
    checkPremiumUser,
    getAllPremiumUser
} = require('./lib/premium')
//================= { MODULE } =================\\
const {
    makeWASocket,
    downloadContentFromMessage,
    emitGroupParticipantsUpdate,
    emitGroupUpdate,
    generateWAMessageContent,
    generateWAMessage,
    makeInMemoryStore,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    MediaType,
    areJidsSameUser,
    WAMessageStatus,
    downloadAndSaveMediaMessage,
    AuthenticationState,
    GroupMetadata,
    initInMemoryKeyStore,
    getContentType,
    MiscMessageGenerationOptions,
    useSingleFileAuthState,
    BufferJSON,
    WAMessageProto,
    MessageOptions,
    WAFlag,
    WANode,
    WAMetric,
    ChatModification,
    MessageTypeProto,
    WALocationMessage,
    ReRaolLatestXectMode,
    WAContextInfo,
    proto,
    WAGroupMetadata,
    ProxyAgent,
    waChatKey,
    MimetypeMap,
    MediaPathMap,
    WAContactMessage,
    WAContactsArrayMessage,
    WAGroupInviteMessage,
    WATextMessage,
    WAMessageContent,
    WAMessage,
    BaileysError,
    WA_MESSAGE_STATUS_TYPE,
    MediaConnInfo,
    URL_REGEX,
    WAUrlInfo,
    WA_DEFAULT_EPHEMERAL,
    WAMediaUpload,
    mentionedJid,
    processTime,
    Browser,
    MessageType,
    Presence,
    WA_MESSAGE_STUB_TYPES,
    Mimetype,
    relayWAMessage,
    Browsers,
    GroupSettingChange,
    DisRaolLatestXectReason,
    WASocket,
    getStream,
    WAProto,
    isBaileys,
    AnyMessageContent,
    fetchLatestBaileysVersion,
    useMultiFileAuthState,
    templateMessage
} = require('@whiskeysockets/baileys')
//================= { MODULE } =================\\
const axios = require('axios')
const os = require('os')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const {
    randomBytes
} = require('crypto')
const speed = require('performance-now')
const moment = require('moment-timezone')
const {
    spawn: spawn,
    exec
} = require('child_process')
const {
    Primbon
} = require('scrape-primbon')
const primbon = new Primbon()
const {
    performance
} = require('perf_hooks')
const path = require('path')
const ytdl = require("ytdl-core")
const colors = require('@colors/colors/safe')
const chalk = require('chalk')
const {
    getFileFromGithub,
    updateFileOnGithub
} = require("./lib/github")
const {
    toPTT,
    toAudio
} = require("./lib/converter")
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");

//================= { GITHUB } =================\\
const githubOwner = '';
const githubRepo = '';
const githubFilePath = '';
const githubAccessToken = '';

//================= { CUSTOM LIBRARY } =================\\
const _cmd = JSON.parse(fs.readFileSync('./lib/database/command.json'));
const _cmdUser = JSON.parse(fs.readFileSync('./lib/database/commandUser.json'));
const {
    addCountCmd,
    getPosiCmdUser,
    addCountCmdUser
} = require('./tmp/helpers/command')
const pendaftar = JSON.parse(fs.readFileSync('./lib/database/userNumber.json'));
const userPrem = JSON.parse(fs.readFileSync('./lib/database/userPremium.json'))

//================= { BASE } =================\\
module.exports = RaolLatestX = async (RaolLatestX, m, chatUpdate, store) => {
    try {
        var body = (
            (m.mtype === 'conversation') ? m.message?.conversation :
            (m.mtype === 'imageMessage') ? m.message?.imageMessage?.caption :
            (m.mtype === 'videoMessage') ? m.message?.videoMessage?.caption :
            (m.mtype === 'extendedTextMessage') ? m.message?.extendedTextMessage?.text :
            (m.mtype === 'buttonsResponseMessage') ? m.message?.buttonsResponseMessage?.selectedButtonId :
            (m.mtype === 'listResponseMessage') ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
            (m.mtype === 'templateButtonReplyMessage') ? m.message?.templateButtonReplyMessage?.selectedId :
            (m.mtype === 'messageContextInfo') ? (
                m.message?.buttonsResponseMessage?.selectedButtonId ||
                m.message?.listResponseMessage?.singleSelectReply?.selectedRowId ||
                m.text
            ) : ''
        ) || '';
        var budy = (typeof m.text === 'string' ? m.text : '');
        var prefix = prefa ? 
            (body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)?.[0] || "") 
            : prefa ?? global.prefix;
        const isUser = pendaftar.includes(m.sender);
        const isCmd = typeof body === 'string' && body.startsWith(prefix);
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase();
        const args = body.trim().split(/ +/).slice(1);
        const pushname = m.pushName || "No Name";
        const text = q = args.join(" ");
        const fatkuns = (m.quoted || m);
        const quoted = (fatkuns.mtype === 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : 
            (fatkuns.mtype === 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : 
            (fatkuns.mtype === 'product') ? fatkuns[Object.keys(fatkuns)[0]] : 
            m.quoted ? m.quoted : m;
        const mime = (quoted.msg || quoted).mimetype || '';
        const qmsg = (quoted.msg || quoted);
        const isMedia = /image|video|sticker|audio/.test(mime);

        //================= { USER } =================\\
        var isAuthor = global.ownNumb.replace(/[^0-9]/g, '').includes(m.sender.split("@")[0]);
        const botNumber = await RaolLatestX.decodeJid(RaolLatestX.user.id);
        const globalelit = `${global.ownNumb}@s.whatsapp.net`;
        const isOwner = globalelit.includes(m.sender);
        const itsMe = m.sender === botNumber ? true : false;
        const isCreator = [botNumber, ...global.ownNumb].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);

        //================= { GROUP } =================\\
        const groupMetadata = m.isGroup ? await RaolLatestX.groupMetadata(m.chat).catch(() => null) : null;
        const groupName = groupMetadata?.subject || '';
        const participants = m.isGroup ? (groupMetadata?.participants || []) : [];
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : '';
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false;
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
        const groupOwner = m.isGroup ? groupMetadata?.owner : '';
        const isGroupOwner = m.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m.sender) : false;
        //================= { ACCESS } =================\\

        //================= { REACT } =================\\
        const moji = ['📚', '💭', '💫', '🌌', '🌏', '✨', '🌷', '🍁', '🪻', ]
        const randomemoji = moji[Math.floor(Math.random() * moji.length)]

        //================= { PREMIUM } =================\\
        const isPremium = isCreator || isCreator || checkPremiumUser(m.sender, userPrem);

        //================= { TIME } =================\\
        const moment = require('moment-timezone')
        const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss")
        if (time2 < "19:00:00") {
            var ucapanWaktu = "Selamat Malam🌃"
        }
        if (time2 < "15:00:00") {
            var ucapanWaktu = "Selamat Sore🌄"
        }
        if (time2 < "11:00:00") {
            var ucapanWaktu = "Selamat Siang🏞️"
        }
        if (time2 < "06:00:00") {
            var ucapanWaktu = "Selamat Pagi🏙️ "
        }
        if (time2 < "23:59:00") {
            var ucapanWaktu = "Selamat Subuh🌆"
        }
        const wib = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("HH:mm:ss z")
        const wita = moment(Date.now()).tz("Asia/Makassar").locale("id").format("HH:mm:ss z")
        const wit = moment(Date.now()).tz("Asia/Jayapura").locale("id").format("HH:mm:ss z")
        const salam2 = moment(Date.now()).tz("Asia/Jakarta").locale("id").format("a")

        //================= { STATUS } =================\\

        if (!RaolLatestX.public) {
            if (!m.key.fromMe) return
        }

        //================= {  } =================\\

        try {
            ppuser = await RaolLatestX.profilePictureUrl(m.sender, 'image')
        } catch (err) {
            ppuser = 'https://cdn.arifzyn.site/f/sy6tjbzk.jpg'
        }
        ppnyauser = await getBuffer(ppuser)

        const reSize = async (buffer, ukur1, ukur2) => {
            return new Promise(async (resolve, reject) => {
                let jimp = require('jimp')
                var baper = await jimp.read(buffer);
                var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
                resolve(ab)
            })
        }
        const fkethmb = await reSize(ppuser, 300, 300)
        let jimp = require("jimp")
        const resize = async (image, width, height) => {
            const read = await jimp.read(image);
            const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
            return data;
        };

        const reaction = async (jidss, emoji) => {
            RaolLatestX.sendMessage(jidss, {
                react: {
                    text: emoji,
                    key: m.key
                }
            })
        };


        //================= { LIMIT } =================\\

        try {
            const isNumber = x => typeof x === 'number' && !isNaN(x);

            let limitawal = 10;
            let limitUser = isCreator ? 1000 : limitawal;

            if (!global.db) global.db = {};
            if (!global.db.data) global.db.data = {
                users: {},
                chats: {},
                settings: {}
            };
            if (!global.db.data.users) global.db.data.users = {};
            if (!global.db.data.chats) global.db.data.chats = {};
            if (!global.db.data.settings) global.db.data.settings = {};

            let user = global.db.data.users[m.sender] || {};

            if (!global.db.data.users[m.sender]) {
                global.db.data.users[m.sender] = {
                    serialNumber: randomBytes(16).toString('hex'),
                    title: `${isPremium ? 'Premium' : 'User'}`,
                    afkTime: -1,
                    badword: 0,
                    afkReason: '',
                    snlast: 0,
                    warn: 0,
                    email: '',
                    lastgift: 86400000,
                    autolevelup: true,
                    nick: m.sender,
                    premium: isPremium ? true : false,
                    limit: limitUser,
                    level: 0,
                    totalLimit: 0
                };
            }

            user = global.db.data.users[m.sender]; // Pastikan user selalu ada

            if (!isNumber(user.afkTime)) user.afkTime = -1;
            if (!('badword' in user)) user.badword = 0;
            if (!('title' in user)) user.title = '';
            if (!('serialNumber' in user)) user.serialNumber = randomBytes(16).toString('hex');
            if (!('afkReason' in user)) user.afkReason = '';
            if (!('nick' in user)) user.nick = RaolLatestX.getName(m.sender);
            if (!('autolevelup' in user)) user.autolevelup = true;
            if (!isPremium) user.premium = false;
            if (!('totalLimit' in user)) user.totalLimit = 0;
            if (!isNumber(user.limit)) user.limit = limitUser;
            if (!isNumber(user.level)) user.level = 0;
            if (!isNumber(user.lastgift)) user.lastgift = 86400000;
            if (!isNumber(user.snlast)) user.snlast = 0;
            if (!isNumber(user.warn)) user.warn = 0;
            if (!isNumber(user.unreglast)) user.unreglast = 0;
            if (!('registered' in user)) user.registered = false;
            if (!user.registered) {
                if (!('email' in user)) user.email = '';
                if (!isNumber(user.codeExpire)) user.codeExpire = 0;
            }

            // Perbaikan objek chats
            let chats = global.db.data.chats[m?.chat] || {};
            global.db.data.chats[m?.chat] = chats;

            let settings = global.db.data.settings || {};
            global.db.data.settings = settings;

            // Scheduler reset limit harian
            const cron = require('node-cron');
            cron.schedule('00 00 * * *', () => {
                let users = Object.keys(global.db.data.users);
                for (let jid of users) {
                    global.db.data.users[jid].claim = 1;
                    if (global.db.data.users[jid].limit < 1) {
                        global.db.data.users[jid].limit = limitawal;
                    }
                }
            }, {
                scheduled: true,
                timezone: "Asia/Makassar"
            });

        } catch (err) {
            console.error("There is an error:", err);
        }

        //======================\\

        const fkontak = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: `status@broadcast`
                } : {})
            },
            message: {
                'contactMessage': {
                    'displayName': global.namabot,
                    'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname}\nitem1.TEL;waid=6287862115557:6287862115557\nitem1.X-ABLabel:Mobile\nEND:VCARD`,
                    'jpegThumbnail': fkethmb,
                    thumbnail: fkethmb,
                    sendEphemeral: true
                }
            }
        }

        const ftroli = {
            key: {
                remoteJid: '6285736178354-1625305606@g.us',
                participant: '0@s.whatsapp.net'
            },
            message: {
                orderMessage: {
                    itemCount: 999,
                    status: 1,
                    thumbnail: fkethmb,
                    surface: 1,
                    message: "RaolLatestX",
                    orderTitle: "Activated!",
                    sellerJid: '0@s.whatsapp.net'
                }
            }
        }

        const qevent = {
            key: {
                participant: `0@s.whatsapp.net`,
                ...(m.chat ? {
                    remoteJid: ""
                } : {})
            },
            'message': {
                "eventMessage": {
                    "isCanceled": false,
                    "name": `${ucapanWaktu}`,
                    "description": "RaolLatestX",
                    "location": {
                        "degreesLatitude": 0,
                        "degreesLongitude": 0,
                        "name": "RaolLatestX"
                    },
                    "joinLink": "https://call.whatsapp.com/video/hMwVijMQtUb0qBJL3lf0rv",
                    "startTime": "1713724680"
                }
            }
        }

        //======================\\

        const example = (teks) => {
            return `\n *Usage Examples:*\n Type *${prefix+command}* ${teks}\n`
        }

        const reply = (teks) => {
            RaolLatestX.sendMessage(m.chat, {
                text: teks
            }, {
                quoted: m
            })
        }
        /*
        const reply = async (teks) => {
        const RaolLatestXJob = {
        contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
        newsletterName: ``,
        newsletterJid: ``,
        },
        externalAdReply: {
        showAdAttribution: true,
        title: ``, 
        body: `${ucapanWaktu}`, 
        thumbnailUrl: ``, 
        thumbnail: '',
        sourceUrl: '', 
        },
        },
        text: teks, 
        };
        return RaolLatestX.sendMessage(m.chat, RaolLatestXJob, {
        quoted: ftroli, ephemeralExpiration: 86400,
        });
        };
        */

        //================= { PLUGINS } =================\\
        const pluginsLoader = async (directory) => {
            let plugins = [];
            const folders = fs.readdirSync(directory);
            folders.forEach(file => {
                const filePath = path.join(directory, file);
                if (filePath.endsWith(".js")) {
                    try {
                        const resolvedPath = require.resolve(filePath);
                        if (require.cache[resolvedPath]) {
                            delete require.cache[resolvedPath];
                        }
                        const plugin = require(filePath);
                        plugins.push(plugin);
                    } catch (error) {
                        console.log(`${filePath}:`, error);
                    }
                }
            });
            return plugins;
        };

        const pluginsDisable = true;
        const plugins = await pluginsLoader(path.resolve(__dirname, "./commands"));

        const plug = {
            RaolLatestX,
            isOwner,
            command,
            isCmd,
            reply,
            addCountCmd,
            getPosiCmdUser,
            randomemoji,
            isCreator,
            example,
            quoted,
            reaction,
            text,
            fetchJson,
            args,
            botNumber,
            pushname,
            isGroup: m.isGroup,
            isPrivate: !m.isGroup,
            pickRandom,
            prefix,
            ftroli,
            fkontak
        };

        for (let plugin of plugins) {
            if (plugin.command.find(e => e == command.toLowerCase())) {
                if (plugin.owner && !isOwner) {
                    return m.reply(mess.owner);
                }
                if (plugin.group && !plug.isGroup) {
                    return m.reply(mess.ingroup);
                }
                if (plugin.private && !plug.isPrivate) {
                    return m.reply(mess.private);
                }

                if (plugin.limit) {
                    let user = global.db.data.users[m.sender];
                    if (!user || user.limit <= 0) {
                        return m.reply(mess.limit);
                    }
                    user.limit -= 1;
                }

                if (typeof plugin !== "function") return;
                await plugin(m, plug);
            }
        }

        if (!pluginsDisable) return;


        //================= { CONSOLE LOGS } =================\\
        if (m.message) {
            let header = chalk.black(chalk.bgHex("#ff5e78").bold(`\n🌟 ${ucapanWaktu} 🌟`));
            let title = chalk.white(chalk.bgHex("#4a69bd").bold("🚀 There is a message 🚀"));
            let date = chalk.cyanBright(`📅 DATE        : ${new Date().toLocaleString()}`);
            let sender = chalk.yellowBright(`🗣️ SENDERNAME : ${pushname}`);
            let jid = chalk.magentaBright(`👤 JIDS       : ${m.sender}`);

            if (isCmd && !m.isGroup) {
                console.log(header);
                console.log(title);
                console.log(date);
                console.log(sender);
                console.log(jid);
                console.log(chalk.white("------------------------------------------"));
            } else if (m.isGroup) {
                let group = chalk.redBright(`🔍 MESS LOCATION : ${groupName}`);

                console.log(header);
                console.log(title);
                console.log(date);
                console.log(sender);
                console.log(jid);
                console.log(group);
                console.log(chalk.white("------------------------------------------"));
            }
        }


        if (isCmd && !isUser) {
            pendaftar.push(m.sender)
            fs.writeFileSync('./lib/database/userNumber.json', JSON.stringify(pendaftar, null, 2))
        }


//================= { SWITCH CASE } =================\\
switch (command) {
//================= { SWITCH CADE } =================\\

//================= { MENU } =================\\

//================= { MENU } =================\\

//================= { MENU } =================\\

//================= { MENU } =================\\

//================= { MENU } =================\\
case 'public': {
    if (!isOwner) return;
    RaolLatestX.sendMessage(m.chat, {
        react: {
            text: `${randomemoji}`,
            key: m.key
        }
    });
    RaolLatestX.public = true;
    m.reply('succes');
    break;
}

case 'self': {
    if (!isOwner) return;
    RaolLatestX.sendMessage(m.chat, {
        react: {
            text: `${randomemoji}`,
            key: m.key
        }
    });
    RaolLatestX.public = false;
    m.reply('succes');
    break;
}

//================= { MENU } =================\\
case 'addprem': {
    if (args.length < 2) return reply(`*Example:* ${prefix + command} @tag 30d`);
    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            addPremiumUser(m.mentionedJid[0], args[1], userPrem);
        }
        reply("Premium Success");
    } else {
        addPremiumUser(args[0] + "@s.whatsapp.net", args[1], userPrem);
        reply("Success Via Number");
        await sleep(2000);
        RaolLatestX.sendMessage(args[0] + "@s.whatsapp.net", {
            text: `You are now a Premium Member`
        }, {
            quoted: tes
        });
    }
    break;
}

case 'delprem': {
    if (args.length < 1) return reply(`*Example:* ${prefix + command} @tag`);
    if (m.mentionedJid.length !== 0) {
        for (let i = 0; i < m.mentionedJid.length; i++) {
            let mentionedPremiumIndex = userPrem.findIndex(premium => premium.id === m.mentionedJid[i]);
            if (mentionedPremiumIndex !== -1) {
                userPrem.splice(mentionedPremiumIndex, 1);
            }
        }
        fs.writeFileSync("./lib/database/userPremium.json", JSON.stringify(userPrem));
        reply("Delete Success");
    } else {
        let targetNumber = args[0] + "@s.whatsapp.net";
        let targetPremiumIndex = userPrem.findIndex(premium => premium.id === targetNumber);
        if (targetPremiumIndex !== -1) {
            userPrem.splice(targetPremiumIndex, 1);
            fs.writeFileSync("./lib/database/userPremium.json", JSON.stringify(userPrem));
            reply("Success Via Number");
            await sleep(2000);
            RaolLatestX.sendMessage(targetNumber, {
                text: `Your Premium Status Has Expired/Been Revoked`
            }, {
                quoted: tes
            });
        } else {
            reply("Premium entity not found");
        }
    }
    break;
}

//================= { WARNING } =================\\
    default:
        if (budy.startsWith('=>')) {
            if (!isOwner) return;
            function Return(sul) {
                sat = JSON.stringify(sul, null, 2);
                bang = util.format(sat);
                if (sat == undefined) {
                    bang = util.format(sul);
                }
                return m.reply(bang);
            }
            try {
                m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)));
            } catch (e) {
                m.reply(String(e));
            }
        }

        if (budy.startsWith('>')) {
            if (!isOwner) return;
            try {
                let evaled = await eval(budy.slice(2));
                if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
                await m.reply(evaled);
            } catch (err) {
                await m.reply(String(err));
            }
        }

        if (budy.startsWith('$')) {
            if (!isOwner) return;
            require("child_process").exec(budy.slice(2), (err, stdout) => {
                if (err) return m.reply(`${err}`);
                if (stdout) return m.reply(stdout);
            });
        }
}
    } catch (err) {
        const errId = `${global.ownNumb}@s.whatsapp.net`
        RaolLatestX.sendMessage(errId, {
            text: require('util').format(err)
        }, {
            quoted: m
        })
        console.log('\x1b[1;31m' + err + '\x1b[0m')
    }
}

//================= { AUTO CLEAR SESSION } =================\\
function autoClearSession() {
    const sessionDir = './session';
    const clearInterval = 4 * 60 * 60 * 1000;
    
    setInterval(async () => {
        try {
            const files = fs.readdirSync(sessionDir);
            const filteredFiles = files.filter(file => 
                file.startsWith('pre-key') ||
                file.startsWith('sender-key') ||
                file.startsWith('session-') ||
                file.startsWith('app-state')
            );

            if (filteredFiles.length === 0) {
                console.log(chalk.blue.bold('📂 [AUTO CLEAN] No session files to clean. Everything is tidy! 📑'));
                return;
            }

            console.log(chalk.yellow.bold('📂 [AUTO CLEAN] Starting session cleanup... 🗃️'));
            
            filteredFiles.forEach(file => {
                fs.unlinkSync(path.join(sessionDir, file));
            });

            console.log(chalk.green.bold(`🗃️ [AUTO CLEAN] Successfully removed ${filteredFiles.length} session files! 📂`));
        } catch (error) {
            console.error(chalk.red.bold('📑 [AUTO CLEAN ERROR]'), chalk.red.bold(error));
        }
    }, clearInterval);
}

autoClearSession();

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
    require('fs').unwatchFile(file)
    console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m')
    delete require.cache[file]
    require(file)
})