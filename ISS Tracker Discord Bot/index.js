// -------------------------------------------------------------
// MAIN FILE 

const { AoiClient, LoadCommands, Util } = require("aoi.js");

// Create multiple instances of Aoi.js
const application = new AoiClient({
    token: "DISCORD BOT TOKEN HERE",
    prefix: "--",
    intents: ["MessageContent", "Guilds", "GuildMessages","GuildMembers"],
	events: ["onMessage", "onInteractionCreate","onFunctionError","onJoin"],
    guildOnly: true,
    database: {
        type: "aoi.db",
        db: require("@akarui/aoi.db"),
        dbType: "KeyValue",
        tables: ["main","automations"],
    securityKey: "a-32-characters-long-string-here"
  }
});
$log[github/atlasfyber | Commands are now live!]
// Load commands for each instance
application.loadCommands("./commands/", true);

// END OF MAIN FILE
// -------------------------------------------------------------


// The channel that you want to receive notifications
// Make sure bot has perms to send messages to this channel
application.variables({
channel: "CHANNEL ID HERE"}, "main")

// It will send a message when the bot  finds and deliver new data
application.variables({
logs_channel: "CHANNEL ID HERE"}, "main")


// Change it back to "All Locations" for all locations | !! Case Sensitive !!
// It supports ONLY ISO 3166-1 alpha-2 codes
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// Example: "US"
application.variables({
iss_filter: "All Locations"}, "main")


// -------------------------------------------------------------
// NOT SETUP NEEDED | PRE-CONFIGURED VARS & STATUS


// PRE-CONFIGURED | DO NOT TOUCH IF YOU DONT KNOW HOW IT WORKS.
application.variables({
iss_country: "0"}, "automations")
application.variables({
iss_time: "0"}, "automations")
application.variables({
iss_fullcountry: "0"}, "automations")
application.variables({
iss_visibility: "0"}, "automations")
application.variables({
iss_url: "0"}, "automations")
application.variables({
iss_flag: "0"}, "automations")
application.variables({
iss_longitude: "0"}, "automations")
application.variables({
iss_img: "https://cdn.discordapp.com/attachments/1154857744143224922/1220638298746392576/image.png?ex=660fab00&is=65fd3600&hm=598d0e3d9cae21971cd6aad587df87a054117ce6febc25d2d0d3c28fee78511a&"}, "automations")
application.variables({
iss_latitude: "0"}, "automations")
application.variables({
footer: "ISS Tracker | github/application"}, "main")

// DISCORD BOT STATUS
application.status({
  name: "ISS Tracker | github/atlasfyber",
  type: "CUSTOM",
  status: "online",
  time: 40,
});

application.status({
  name: "✨ Looking the stars, and searching..",
  type: "CUSTOM",
  status: "online",
  time: 40,
});

// END OF INDEX.JS
// -------------------------------------------------------------



