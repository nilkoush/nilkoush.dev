export interface RepoType {
	id: number;
	name: string;
	description: string;
	svn_url: string;
	homepage: string;
	stargazers_count: number;
	forks: number;
	language: 'TypeScript' | 'Python';
}
