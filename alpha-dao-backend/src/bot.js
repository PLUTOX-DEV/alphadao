require("dotenv").config(); // Load .env

const TelegramBot = require("node-telegram-bot-api");

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  console.error("❌ TELEGRAM_BOT_TOKEN not set in .env");
  process.exit(1);
}

const bot = new TelegramBot(token, { webhook: true });
const BASE_URL = "https://alphadao.onrender.com";

bot.setWebHook(`${BASE_URL}/bot${token}`);

const IMAGE_URL = "https://alphadao.vercel.app/Daologo.png";
const MINI_APP_URL = "https://t.me/alphadaoxbot/alphadao";

bot.onText(/\/start(?: (.+))?/, (msg, match) => {
  const chatId = msg.chat.id;
  const referrer = match[1] || null;

  const welcomeMessage = referrer
    ? `👋 Welcome to *Alpha DAO*!\n\n🔗 You were referred by *${referrer}*.\nTime to discover the future of decentralized community governance.`
    : `👋 Welcome to *Alpha DAO* – your gateway to decentralized community governance!\n\n🚀 Explore projects, vote on proposals, and earn rewards.`;

  const launchUrl = referrer
    ? `${MINI_APP_URL}?start=${encodeURIComponent(referrer)}`
    : MINI_APP_URL;

  bot.sendPhoto(chatId, IMAGE_URL, {
    caption: welcomeMessage,
    parse_mode: "Markdown",
    reply_markup: {
      inline_keyboard: [[
        {
          text: "🚀 Launch Alpha DAO Mini App",
          url: launchUrl
        }
      ]],
    },
  });
});

module.exports = bot;
