const https = require('https');

printMessage = (userName, badgeCount, points) => {
  const message = `${userName} has ${badgeCount} total badge(s), and ${points} points in JavaScript`;
  console.log(message)
}

get = (username) => {
    const request = https.get(`https://teamtreehouse.com/${username}.json`, res => {
      let body = "";
      res.on('data', data => {
        body += data.toString();
      })
      res.on('end', () => {
        const profile = JSON.parse(body);
        printMessage(username, profile.badges.length, profile.points.JavaScript);
      })
    })
}

module.exports.get = get;
