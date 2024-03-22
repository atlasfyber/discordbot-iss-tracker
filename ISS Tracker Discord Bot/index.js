// -------------------------------------------------------------
// MAIN FILE 

const { AoiClient, LoadCommands, Util } = require("aoi.js");

// Create multiple instances of Aoi.js
const astrofyber = new AoiClient({
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
    securityKey: "ab3sP8dR6qX2vA7wL3mF9cB2hY4zabcd",
  }
});
$log[github/astrofyber | Commands are now live!]
// Load commands for each instance
astrofyber.loadCommands("./commands/", true);

// END OF MAIN FILE
// -------------------------------------------------------------


// The channel that you want to receive notifications
// Make sure bot has perms to send messages to this channel
astrofyber.variables({
channel: "CHANNEL ID HERE"}, "main")

// It will send a message when the bot  finds and deliver new data
astrofyber.variables({
logs_channel: "CHANNEL ID HERE"}, "main")


// Change it back to "All Locations" for all locations | !! Case Sensitive !!
// It supports ONLY ISO 3166-1 alpha-2 codes
// https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2
// Example: "US"
astrofyber.variables({
iss_filter: "All Locations"}, "main")


// -------------------------------------------------------------
// NOT SETUP NEEDED | PRE-CONFIGURED VARS & STATUS


// PRE-CONFIGURED | DO NOT TOUCH IF YOU DONT KNOW HOW IT WORKS.
astrofyber.variables({
iss_country: "0"}, "automations")
astrofyber.variables({
iss_time: "0"}, "automations")
astrofyber.variables({
iss_fullcountry: "0"}, "automations")
astrofyber.variables({
iss_visibility: "0"}, "automations")
astrofyber.variables({
iss_url: "0"}, "automations")
astrofyber.variables({
iss_flag: "0"}, "automations")
astrofyber.variables({
iss_longitude: "0"}, "automations")
astrofyber.variables({
iss_img: "https://cdn.discordapp.com/attachments/827259863074996284/1220445297566814258/image.png?ex=660ef741&is=65fc8241&hm=7d14d475c92e66ff5ccb12f610e7ebc7119168ded4668365363220cfadf207dd&"}, "automations")
astrofyber.variables({
iss_latitude: "0"}, "automations")
astrofyber.variables({
footer: "ISS Tracker | github/astrofyber"}, "main")

// DISCORD BOT STATUS
astrofyber.status({
  name: "ISS Tracker | github/astrofyber",
  type: "CUSTOM",
  status: "online",
  time: 40,
});

// END OF INDEX.JS
// -------------------------------------------------------------



