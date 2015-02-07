var Faker = require("Faker");
Faker.locale = 'zh_CN';
var body = [];
for (var i = 0; i < 1000; i++) {
    body.push({
        'name': Faker.name.findName(),
        'domain': Faker.internet.domainName(),
        'ip': Faker.internet.ip(),
        'latitude': Faker.address.latitude(),
        'longitude': Faker.address.longitude()
    }); }
process.stdout.write(JSON.stringify(body));