module.exports = [{
    name: "iss-automationcheck",
    type: "awaited",
 	$if: "old",
    code: `
	$if[$getVar[iss_same;guilds_same]!=$getVar[iss_country;automations]]
	$ifAwaited[1==1;{execute:iss-post}]
	$setVar[iss_same;$getVar[iss_country;automations];guilds_same]
	$suppressErrors[]
	$endif
	`
},{
 name: "iss-post",
 type: "awaited",
 $if: "old",
 code: `

$if[$getVar[iss_country;automations]!=??&&$getVar[iss_country;automations]!=0&&$getVar[iss_filter;automations]==All Locations]
	
	$log[Tracker Automation Log [All Locations] | Proccess checking finished.]

  $channelSendMessage[$getVar[channel;main]; 
{newEmbed:{title:📅 ISS above $getVar[iss_fullcountry;automations]} 
{description:International Space Station (ISS) has been tracked flying above **$getVar[iss_fullcountry;automations]** a few seconds/minutes ago.

**Information:**
- Visibility, **$getVar[iss_visibility;automations]**
- Tracked Date, <t:$truncate[$divide[$getVar[iss_time;automations];1000]]:R> <t:$truncate[$divide[$getVar[iss_time;automations];1000]]:t>
- Tracked Longitude, **$getVar[iss_longitude;automations]**
- Tracked Latitude, **$getVar[iss_latitude;automations]** 
 } 
{image:$getVar[iss_img;automations]} {thumbnail:$getVar[iss_flag;automations]}
{color:5d5bd6} {footer:$getVar[footer;main] • Atlas Automations}}

{actionRow:{button:Made by Developers of Horizon:link:https#COLON#//discord.com/api/oauth2/authorize?client_id=1183177251316047983&permissions=18135499799616&scope=bot:false}
{button:Map URL:link:https#COLON#//$getVar[iss_url;automations]:false}
}]


$suppressErrors[]

$elseif[$getVar[iss_country;automations]!=??&&$getVar[iss_country;automations]!=0&&$getVar[iss_filter;automations]!=All Locations]


	$log[Tracker Automation Log [All Locations] | Guild $guildName[$guildID] proccess checking finished.]

  $channelSendMessage[$getVar[channel;main]; 
{newEmbed:{title:📅 ISS above $getVar[iss_fullcountry;automations]}
{description:International Space Station (ISS) has been tracked flying above **$getVar[iss_fullcountry;automations]** a few minutes ago.

**Information:**
- Visibility, **$getVar[iss_visibility;automations]**
- Tracked Date, <t:$truncate[$divide[$getVar[iss_time;automations];1000]]:R> <t:$truncate[$divide[$getVar[iss_time;automations];1000]]:t>
- Tracked Longitude, **$getVar[iss_longitude;automations]**
- Tracked Latitude, **$getVar[iss_latitude;automations]** 
 } 
{image:$getVar[iss_img;automations]} {thumbnail:$getVar[iss_flag;automations]}
{color:5d5bd6} {footer:$getVar[footer;main] • Atlas Automations}}

{actionRow:{button:Made by Developers of Horizon:link:https#COLON#//discord.com/api/oauth2/authorize?client_id=1183177251316047983&permissions=18135499799616&scope=bot:false}
{button:Map URL:link:https#COLON#//$getVar[iss_url;automations]:false}
}]


$suppressErrors[]

$endelseif
$endif`}]
