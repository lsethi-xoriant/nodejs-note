var api_user = process.env.user || '1530234656@qq.com';
var api_key = process.env.key;
var sendgrid = require("sendgrid")(api_user, api_key);
sendgrid.send({
    to: 'tangshiqiangcn@gmail.com',
    from: '1530234656@qq.com',
    subject: 'hello',
    text: 'my first email'
}, function (err, json) {
    if (err) {
        console.log("err\n", err);
    }
    console.log("json\n", json);
});