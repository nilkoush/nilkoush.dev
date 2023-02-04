const path = require('path');

/**
 * @type {import('next-i18next').UserConfig}
 */
module.exports = {
	i18n: {
		locales: ['en', 'cs'],
		defaultLocale: 'en',
		localePath: path.resolve('./public/locales'),
	},
};
