import type { FC } from 'react';
import { ImSpinner2 } from 'react-icons/im';
import { IoPaperPlane } from 'react-icons/io5';

interface SubmitButtonProps {
	isSubmitting: boolean;
}

const SubmitButton: FC<SubmitButtonProps> = ({ isSubmitting }) => {
	return (
		<>
			<button
				className="flex items-center justify-center gap-2 rounded-lg bg-gray-900 py-2 font-semibold text-white transition-all hover:bg-gray-700 focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 dark:bg-primary-500 dark:hover:bg-primary-600"
				type="submit"
				disabled={isSubmitting}
			>
				{!isSubmitting ? (
					<>
						Send <IoPaperPlane className="h-4 w-4" />
					</>
				) : (
					<>
						Sending <ImSpinner2 className="h-4 w-4 animate-spin" />
					</>
				)}
			</button>
		</>
	);
};

export default SubmitButton;
