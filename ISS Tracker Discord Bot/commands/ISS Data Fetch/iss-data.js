module.exports = [{
    name: "iss-automation",
    type: "loop",
    channel: "$getVar[logs_channel;automations]",
    executeOnStartup: true,
    every: 60000,
    code: `
	$awaitExecute[iss-automationcheck]
	$title[✅ New Data Found]
	$description[Attempting to save them now.]
	$footer[ISS Tracker Automations | github/astrofyber]
	$color[1ee91e]

	$setVar[iss_country;$getObjectProperty[tracker;country_code];automations]
	$setVar[iss_fullcountry;$getObjectProperty[country;[0].name.common];automations]
	$setVar[iss_url;$cropText[$getObjectProperty[tracker;map_url];900;8];automations]
	$setVar[iss_flag;$getObjectProperty[country;[0].flags.png];automations]
	$setVar[iss_time;$datestamp;automations]
	$setVar[iss_visibility;$getObjectProperty[api;visibility];automations]
	$setVar[iss_longitude;$getObjectProperty[api;longitude];automations]
	$setVar[iss_latitude;$getObjectProperty[api;latitude];automations]
$log[github/astrofyber | We found new data, saving them..]
$createObject[country;$httpRequest[https://restcountries.com/v3.1/alpha?codes=$getObjectProperty[tracker;country_code];GET;;;Error]]
	$onlyIf[$getObjectProperty[tracker;country_code]!=$getVar[iss_country;automations];]
	$onlyIf[$getObjectProperty[tracker;country_code]!=??;]
	$onlyIf[$getObjectProperty[tracker;country_code]!=undefined;]
	$onlyIf[$getObjectProperty[tracker;status]!=500;]

$createObject[tracker;$httpRequest[https://api.wheretheiss.at/v1/coordinates/$getObjectProperty[api;latitude],$getObjectProperty[api;longitude];GET;;;Error]]
$createObject[api;$httpRequest[https://api.wheretheiss.at/v1/satellites/25544;GET;;;Error]]
$log[github/astrofyber | We checked for new data.]

`}]









