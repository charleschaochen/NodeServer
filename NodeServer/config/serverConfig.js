/**
 * Created by ccn1069 on 2015/5/4.
 */
var serverConfig = {
    port: "4000",
    web_root: "../web",
    welcome_page: "/index.html",
    error_page: {
        "404": "/404.html"
    }
};

module.exports.config = serverConfig;