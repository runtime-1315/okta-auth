export const oktaConfig = {
	issuer: `https://trial-6929187.okta.com/oauth2/default`,
	clientId: "0oa3pc8o5lU6M6zao697",
	redirectUri: `${window.location.origin}/login/callback`,
	scopes: ["openid", "profile", "email"],
	pkce: true,
};
