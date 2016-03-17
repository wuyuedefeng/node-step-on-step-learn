var config = {
    "oauth_client_id": "1c12b4a1306f5348dd81",
    "oauth_client_secret": "2e507f76390b9b80de65b30b2ea93ec5dfcf0bb3",
};
config.authVisitUrl = "https://github.com/login/oauth/authorize?scope=user:email&client_id=" + config.oauth_client_id;

module.exports = config;