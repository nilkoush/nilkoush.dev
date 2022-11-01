// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	email: string;
	message: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	const data = req.body as Data;

	if (!data) return res.status(400).json({ result: 'cs' });

	if (data.message.length < 1 || data.email.length < 1)
		return res.status(400).json({ result: 'FIELD_EMPTY' });
	if (data.message.length > 1000)
		return res.status(400).json({ result: 'MESSAGE_TOO_LONG' });
	if (data.email.length > 500)
		return res.status(400).json({ result: 'NAME_TOO_LONG' });

	axios
		.post(process.env.WEBHOOK_URL as string, {
			embeds: [
				{
					color: 0x000000,
					author: {
						name: data.email,
					},
					description: data.message,
					timestamp: new Date(),
				},
			],
		})
		.then((response) => {
			if (response.data.err)
				return res.status(500).json({ result: 'DISCORD_API_ERROR' });
			return res
				.status(200)
				.json({ result: 'You have successfully sent the message.' });
		});
}
