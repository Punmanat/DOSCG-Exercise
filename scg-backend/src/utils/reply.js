const request = require("request")
const reply = (reply_token, msg)=> {
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer PcD8OWAGMrOVmgoULRnJBPn3xRQ0qUXXTP9Cdvdf7PqaPQC53dOYsIRitjAtw1ST3QIt0A9DJm7k1cqlkP5TKx0dhc3Wf17A7J+/VysDhlm10jfIH0z3RQwiO8WplUIgJuEs6YvqgF/pIMw9zQOGvAdB04t89/1O/w1cDnyilFU='
    }
    let body = JSON.stringify({
        replyToken: reply_token,
        messages: [{
            type: 'text',
            text: "สวัสดีครับ"
        }]
    })
    request.post({
        url: 'https://api.line.me/v2/bot/message/reply',
        headers: headers,
        body: body
    }, (err, res, body) => {
        console.log('status = ' + res.statusCode);
    });
}
module.exports = reply