import SubmitButton from '@components/contact-form/SubmitButton';
import TextAreaFormField from '@components/contact-form/TextAreaFormField';
import TextFormField from '@components/contact-form/TextFormField';
import axios from 'axios';
import { Field, Form, Formik } from 'formik';
import type { FC } from 'react';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Field email address must be valid!')
		.required('Field email address is required!'),
	message: yup.string().required('Field message is required!'),
});

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = () => {
	const submitForm = async (
		data: { email: string; message: string },
		resetForm: () => void
	) => {
		await axios
			.post('/api/send', {
				email: data.email,
				message: data.message,
			})
			.then((res) => {
				console.log(res);
				toast.success(res.data.result, {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
				});
			})
			.catch((res) => {
				console.log(res);
				toast.error(res.data.result, {
					position: 'top-right',
					autoClose: 3000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: 'light',
				});
			})
			.finally(() => {
				resetForm();
			});
	};

	return (
		<>
			<Formik
				initialValues={{ email: '', message: '' }}
				onSubmit={(data, { setSubmitting, resetForm }) => {
					setSubmitting(true);
					submitForm(data, resetForm);
				}}
				validationSchema={validationSchema}
			>
				{({ isSubmitting, handleSubmit }) => (
					<Form
						className="flex w-full flex-col gap-2 rounded-md border border-gray-800/50 bg-white/50 p-4 dark:bg-white/5"
						onSubmit={handleSubmit}
					>
						<Field
							label="Email address"
							name="email"
							type="email"
							component={TextFormField}
						/>
						<Field
							label="Message"
							name="message"
							minRows="8"
							component={TextAreaFormField}
						/>
						<SubmitButton isSubmitting={isSubmitting} />
					</Form>
				)}
			</Formik>
		</>
	);
};

export default ContactForm;
