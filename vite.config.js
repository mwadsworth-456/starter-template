import { defineConfig, mergeConfig } from 'vite';
import defaultConfig from './node_modules/mod-build/vite.config.js';
import { templateData } from './template.js';
import { siteData } from './siteconfig.js';
import path from 'node:path';

const config = { ...siteData(), ...templateData() };

export default defineConfig(() => mergeConfig(
	defaultConfig(config),
	defineConfig({
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
						$icons-folder: "~/fonts/modstyle-icons";
						$rating-icons-folder: "~/images/rating-icons";
						@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
						@import "~/styles/base/index";
						@import "~/styles/icons/index";
						@import "~/styles/templates/dark-mode";`
				}
			}
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './node_modules/mod-build/src'),
				'~': path.resolve(__dirname, './node_modules/mod-base/src')
			}
		}
	})
));
