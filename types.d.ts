import common from '../public/locales/en/common.json';

export interface RepoType {
	id: number;
	name: string;
	description: string;
	url: string;
	homepage: string;
	stargazers_count: number;
	forks: number;
	language: 'TypeScript' | 'Python';
}

export interface Resources {
	common: typeof common;
}
