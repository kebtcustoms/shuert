// @ts-nocheck
import transporter from "$lib/emailSetup.server.js";

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const first = formData.get("first")
            const last = formData.get("last")
            const email = formData.get("to");
            const subject = formData.get("subject");
            const body = formData.get("body");
            const fileUrl = formData.get("fileUrl");
            console.log(body);

            const message = {
                from: 'hr@shuert.com',
                to: 'ksmith@shuert.com',
                subject: `New submission for the ${subject} job!`,
                html: `<html>
                    <body>
                        <p>${first} ${last} has submitted the below application for the ${subject} job.</p>
                        <p>Click on the link to view: <a href=${fileUrl}>Link</a></p>
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