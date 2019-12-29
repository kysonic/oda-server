import * as Mailgun from 'mailgun-js';
import configs from '../configs';

export const mailgun = Mailgun({
    apiKey: configs.mailgun?.apiKey,
    domain: configs.mailgun?.domain
});

export async function sendTestMail() {
    const data = {
        from: 'Excited User <me@samples.mailgun.org>',
        to: 'soooyc@gmail.com',
        subject: 'Hello',
        text: 'Testing some Mailgun awesomeness!'
    };

    const response = await mailgun.messages().send(data);
}

export async function validateEmail(email: string): Promise<void> {

}
