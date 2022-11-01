import type { FC } from 'react';
import { IconType } from 'react-icons/lib';
import { Tooltip } from 'react-tippy';

interface TechItemProps {
	icon: IconType;
	name: string;
}

const TechItem: FC<TechItemProps> = ({ icon, name }) => {
	return (
		<>
			<li className="p-2">
				<Tooltip title={name} position={'top'} duration={250}>
					<span className="">{icon({ className: 'h-6 w-6' })}</span>
				</Tooltip>
			</li>
		</>
	);
};

export default TechItem;
