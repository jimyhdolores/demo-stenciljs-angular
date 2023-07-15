import { Config } from '@stencil/core';

export const config: Config = {
	namespace: 'utp-web-components',
	globalStyle: 'src/global.css',
	srcDir: 'src',
	outputTargets: [
		{
			type: 'dist',
			esmLoaderPath: '../loader',
			copy: [
				{
					src: 'assets/',
					dest: 'assets/'
				}
			]
		},
		{
			type: 'dist-custom-elements'
		},
		{
			type: 'docs-readme'
		},
		{
			type: 'www',
			copy: [
				{
					src: 'assets',
					dest: 'build/assets'
				}
			],
			serviceWorker: null // disable service workers
		}
	]
};
