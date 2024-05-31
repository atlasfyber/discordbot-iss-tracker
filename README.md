![Image Preview](https://cdn.discordapp.com/attachments/1228048060509065347/1238129948166983820/example.png?ex=663e29de&is=663cd85e&hm=411e341c81957e0387f3237f5642f322d93e91ac03b6574e65601ab9dd68d6af&)
# 🛰️ Discord Bot ISS Tracker 

Developed for astronomy enthusiasts by a astronomy enthusiast, this code uses the reliable and understandable coding language, aoi.js, tailored for the simple user. With the power of javascript and discord.js, along with our remarkable APIs. 

This code is designed for a Discord bot to track the current position of the International Space Station (ISS) within a Discord channel. The bot checks the APIs for updated data every minute. If any updates are found, it promptly posts them to the channel configured by the user in the index.js file.

# 💡 Features

- Tracks the International Space Station (ISS) every 1 minute and retrieves data such as longitude, latitude, and ISS visibility.
- Provides information about the country the ISS is flying over, including the flag, full name, and alpha-2 code.
- Allows users to specify notifications for a specific country, triggering a notification only when the ISS passes over that country.

# ⚙️ Configuration
In order to run the code, you need to fill in some [variables](https://github.com/astrofyber/discordbot-iss-tracker/blob/7fd71a717e0bb9ed72ad9298c414cbf5189907ff/ISS%20Tracker%20Discord%20Bot/index.js#L29C1-L44C38). First and foremost, you'll need to add your [Discord bot token](https://github.com/astrofyber/discordbot-iss-tracker/blob/7fd71a717e0bb9ed72ad9298c414cbf5189907ff/ISS%20Tracker%20Discord%20Bot/index.js#L8C1-L8C37), which can be found in the [Discord Developer Portal](https://discord.com/developers/applications). 

**Ensure that you also enable all the intents. If you prefer not to enable the intents, you can edit the [index.js](https://github.com/astrofyber/discordbot-iss-tracker/blob/7fd71a717e0bb9ed72ad9298c414cbf5189907ff/ISS%20Tracker%20Discord%20Bot/index.js#L10C1-L10C2) file to make the necessary changes. Once these variables are configured, the code will automatically utilize them as needed.**

```js
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
```
✔️ After adding the variable values in the fields above and your bot token, you can run the code by executing the **index.js** file as the main file.

# ⚠️ Limitations
During my testing, I didn't find any significant limitations, but there is one to note:

The bot checks for new data every 1 minute. If the International Space Station (ISS) passes over a country within this timeframe and less than a minute elapses before the next check, the bot may not announce it. While this doesn't happen very often, it's worth mentioning.

# ❤️ Credits
Expect me that I created the code, it couldn't be possible without our API providers. Even if one API provider stops working, this system is rendered useless.

- Source Code: github/atlasfyber
- ISS Tracking Information: https://wheretheiss.at
- Countries Information: https://restcountries.com/v3.1/all

# 🙌 Support Me
Do you want to support me? I'm not asking for donations, but feel free to invite one of my bots (Horizon), which can be found on my profile.

<a href="https://top.gg/bot/1183177251316047983">
  <img src="https://top.gg/api/widget/1183177251316047983.svg">
</a>

© Atlas Development | Made with ❤️ by Atlas Dev Team.
