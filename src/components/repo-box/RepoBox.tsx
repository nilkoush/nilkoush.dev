import { RepoType } from '@types';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { BiGitRepoForked } from 'react-icons/bi';
import { FiStar } from 'react-icons/fi';

interface RepoBoxProps {
    repo: RepoType;
}

const RepoBox: FC<RepoBoxProps> = ({ repo }) => {
    return (
        <>
            <motion.a
                className="flex flex-col justify-between rounded-md border border-gray-800/50 bg-white/50 shadow-none shadow-white transition-colors duration-150 hover:shadow-lg dark:bg-white/5"
                whileHover={{ scale: 1.01 }}
                href={repo.svn_url}
                target="_blank"
                rel="noreferrer"
            >
                <main className="p-4">
                    <h3 className="font-semibold">{repo.name}</h3>
                    <p className="text-sm text-gray-800/70 dark:text-gray-100/70">
                        {repo.description ? repo.description : 'nothing'}
                    </p>
                </main>
                <footer className="flex justify-between gap-4 p-4 text-sm text-gray-700 dark:text-gray-300">
                    <p className="flex items-center gap-2">
                        <span
                            className={`h-3 w-3 rounded-full bg-${repo.language}`}
                        ></span>
                        {repo.language}
                    </p>
                    <div className="flex gap-2">
                        <p className="flex flex-row items-center justify-center">
                            <FiStar className="mr-1 h-4 w-4" />
                            {repo.stargazers_count}
                        </p>
                        <p className="flex flex-row items-center justify-center">
                            <BiGitRepoForked className="mr-1 h-4 w-4" />{' '}
                            {repo.forks}
                        </p>
                    </div>
                </footer>
            </motion.a>
        </>
    );
};

export default RepoBox;
