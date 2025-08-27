/**
 * Site-specific information that can be used
 * inside HTML template using Handlebars
 */
export let siteData = function() {
	return {
		primary_trade: '',
		service: '', // required to fetch the correct tcpa blurb
		gtm_container_ID: 'GTM-TBJV3H',
		email: 'support@website.com',
		email_unsub: 'unsubscribe@website.com',
		domain: 'website.com',
		company_name: '', // sentence case -- used in the <title> (ex: Air Conditioning Pros)
		website_name: 'website.com',
		useCDN: true,
		isWhiteLabel: true,
		isQSPage: true,
		useAccessibleConfig: true,
		useStepsConfig: true,
		isVite: true
	};
};
