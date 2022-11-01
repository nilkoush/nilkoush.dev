import { FieldProps, getIn } from 'formik';
import type { FC } from 'react';

interface TextFormFieldProps extends FieldProps {
	label: string;
}

const TextFormField: FC<TextFormFieldProps> = ({
	field,
	form,
	label,
	...props
}) => {
	const errorText =
		getIn(form.touched, field.name) && getIn(form.errors, field.name);

	return (
		<>
			<div className="flex flex-col gap-1">
				<label
					className="mb-1 text-sm font-bold dark:text-slate-500"
					htmlFor={field.name}
				>
					{label}
				</label>
				<input
					className={`${
						errorText ? '!border border-red-600 ' : ''
					}bg-slate-300/50 border-0 p-2 text-sm placeholder:text-gray-600 dark:bg-slate-200/5 dark:placeholder:text-slate-200/20`}
					id={field.name}
					{...field}
					{...props}
				/>
				<p className="text-sm text-red-600">{errorText}</p>
			</div>
		</>
	);
};

export default TextFormField;
