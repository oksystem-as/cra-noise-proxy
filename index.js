var  jsYaml = require("js-yaml");
var fs = require( "fs");

var runProxy = function () {
  var config = fs.readFileSync("config.yaml", "UTF-8");
  var proxyConfig = jsYaml.safeLoad(config);

  if (proxyConfig.dataUrl == undefined || proxyConfig.dataUrl == null ||
    proxyConfig.resourceUrl == undefined || proxyConfig.resourceUrl == null ||
    proxyConfig.prefixToDataUrl == undefined || proxyConfig.prefixToDataUrl == null) {
    throw "Nejsou definovany vsechny parametry!";
  } else {
    console.log("Pokud request obsahuje na zacatku URL [" + proxyConfig.prefixToDataUrl + "] bude poslan na [" + proxyConfig.dataUrl + "] pokud ne, bude poslan na [" + proxyConfig.resourceUrl +"]");
  }

  // for every URL path that starts with /api/, send request to upstream API service
  var customResolver = function (host, url) {
    let regex = new RegExp("^\/" + proxyConfig.prefixToDataUrl + "\/");
    if (regex.test(url)) {
      //   const urlx = require('url');   
      //   let urlxx = urlx.parse('http://10.0.1.59:58081/device/0004A30B0019D0EB/statistics?date=2016-11-10T00:00:00');
      return proxyConfig.dataUrl;
    }
  };

  // assign high priority
  customResolver.priority = 100;

  var proxy = new require('redbird')({
    port: 8080,
    resolvers: [
      customResolver,
      // uses the same priority as default resolver, so will be called after default resolver
      function (host, url) {
        return proxyConfig.resourceUrl
      }]
  })
}

// RUN
runProxy();









