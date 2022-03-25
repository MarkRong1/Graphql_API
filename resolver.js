var testdata = require('./TEST_DATA.json')

var getConnector = function (args) {
    var y = args.nickname;
    return testdata.filter(connector => {
        return connector.CCNICK == y;
    })[0];
}
var getConnectors = function () {
    return testdata;
}
var root = {
    hello:()=>"test",
    connector: getConnector,
    connectors: getConnectors
};

module.exports = root;