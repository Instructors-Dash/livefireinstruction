import { createTransport, type Transporter } from "nodemailer";

type SendEmailOptions = {
	/** Email address of the recipient */
	to: string;
	/** Email address of the sender */
	from?: string;
	/** Email address to reply to */
	replyTo?: string;
	/** Subject line of the email */
	subject: string;
	/** Message used for the body of the email */
	html: string;
	/** Text version of the email */
	text?: string;
};

export async function sendEmail(options: SendEmailOptions): Promise<Transporter> {
	const transporter = await getEmailTransporter();
	return new Promise(async (resolve, reject) => {
		// Build the email message
		const { to, from, replyTo, subject, html, text } = options;
		const message = { to, from, replyTo, subject, html, text };
		// Send the email
		transporter.sendMail(message, (err, info) => {
			// Log the error if one occurred
			if (err) {
				console.error(err);
				reject(err);
			}
			// Log the message ID and preview URL if available.
			if (info) {
				console.log("Message sent:", info.messageId);
				resolve(info);
			} else {
				reject(new Error("Email sending failed, but no info object was returned."));
			}
		});
	});
}

async function getEmailTransporter(): Promise<Transporter> {
	return new Promise((resolve, reject) => {
		if (!import.meta.env.RESEND_API_KEY) {
			throw new Error("Missing Resend configuration");
		}
		const transporter = createTransport({
			host: "smtp.resend.com",
			secure: true,
			port: 465,
			auth: { user: "resend", pass: import.meta.env.RESEND_API_KEY },
		});
		resolve(transporter);
	});
}
