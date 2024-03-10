// @ts-nocheck
import transporter from "$lib/emailSetup.server.js";

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const first = formData.get("first")
            const last = formData.get("last");
            const company = formData.get("company");
            const email = formData.get("email");
            const phone = formData.get("phone");
            const body = formData.get("body");

            console.log(body);

            const message = {
                from: 'hr@shuert.com',
                to: 'ksmith@shuert.com',
                subject: `New contact form submission from ${first} ${last} at ${company}!`,
                html: `<html>
                    <body>
                        <p>${first} ${last} from ${company} has submitted the below information in the contact form.</p>
                        <p>Email: ${email}</p>
                        <p>Phone Number: ${phone}</p>
                        <p>Comments: ${body}</p>
                    </body>
                </html>`
            };

            const sendEmail = async (message) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(message);

            return {
                success: "Email is sent",
            };
        } catch (error) {
            console.error(error);
        }
    }
};