### github oauth
参考资料:
> * github官方文档: [https://developer.github.com/guides/basics-of-authentication/](https://developer.github.com/guides/basics-of-authentication/)

准备
> 配置github授权信息[https://github.com/settings/developers](https://github.com/settings/developers)
比如
{
	"application name": "node-china.club",
	"homepage url": "http://localhost:3000",
	"application desc": '123',
	"Authorization callback URL": 'http://localhost:3000/github/authCallback' #github认证后的回调地址
}

使用
> 点击超链接访问github认证地址：
> * "https://github.com/login/oauth/authorize?scope=user:email&client_id=" + oauth_client_id; #oauth_client_id在配置github授权信息时获得

> 认证成功github会调用配置github授权信息的回调地址，并在在回调地址上带有code参数
> * 类似：http://localhost:3000/github/authCallback?code=cba3d6c775c7bab5b559

> 获取到code后，用code换取token
> * POST: https://github.com/login/oauth/access_token" 会获取到token

> 通过token换取用户信息
> * GET: https://api.github.com/user #set Authorization值为： token，成功后即可返回用户信息

[详情请参见本demo实例](https://github.com/wuyuedefeng/node-step-on-step-learn/tree/master/baseModuleUseDemo/githubOauthDemo)




