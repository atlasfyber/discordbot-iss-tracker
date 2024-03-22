![Image](https://cdn.discordapp.com/attachments/1154857744143224922/1220643830714597436/example.png?ex=660fb027&is=65fd3b27&hm=f217d59c7c967ed0c48aff94cfa65aa372ddc6eeaf9743e24a8ba8ec947d54e6&)
# 🛰️ Discord Bot ISS Tracker 

Drafted for astronomy enthusiasts by a astronomy enthusiast, this code uses the reliable and understandable coding language, aoi.js, tailored for the simple user. With the power of javaScript and discord.js, along with our remarkable APIs. 

This code is designed for a Discord bot to track the current position of the International Space Station (ISS) within a Discord channel. The bot checks the APIs for updated data every minute. If any updates are found, it promptly posts them to the channel configured by the user in the index.js file.

# 💡 Features

- Tracks the International Space Station (ISS) every 1 minute and retrieves data such as longitude, latitude, and ISS visibility.
- Provides information about the country the ISS is flying over, including the flag, full name, and alpha-2 code.
- Allows users to specify notifications for a specific country, triggering a notification only when the ISS passes over that country.

# Configuration
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
