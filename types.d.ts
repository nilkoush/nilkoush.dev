import common from '../public/locales/en/common.json';

export interface ProjectType {
	id: number;
	image: string;
	title: string;
	description: string;
	build_with: string;
	link: string;
}

export interface Resources {
	common: typeof common;
}
