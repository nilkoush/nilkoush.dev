import common from '../public/locales/en/common.json';

export interface ProjectType {
	image: string;
	title: string;
	description: string;
	build_with: string;
	link: string;
}

export interface Resources {
	common: typeof common;
}
