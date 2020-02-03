const request = require("request");

const notify = (message) => {
  request(
    {
      method: "POST",
      uri: "https://notify-api.line.me/api/notify",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      auth: {
        bearer: "0KCWKip62DgnuQlC2Q7vSKQjweTjhO1oq9hjSdnVTt6"
      },
      form: {
        message: message
      }
    },
    (err, httpResponse, body) => {
      if (err) {
        console.log(err);
      } else {
       console.log(httpResponse)
      }
    }
  );
};

module.exports = notify;
