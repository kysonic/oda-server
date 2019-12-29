import * as Mailgun from 'mailgun-js';
import configs from '../configs';
import {renderEmailTemplate, EMAIL_DEFAULT_RESOURCES} from '../email';

export const mailgun = Mailgun({
    apiKey: configs.email?.mailgun?.apiKey,
    domain: configs.email?.mailgun?.domain
});

const MAILGUN_SUCCESS_MESSAGE = 'Queued. Thank you.';

export async function sendMailgunEmail(email, subject, html, resources = []) {
    const data = {
        from: configs.email?.from,
        to: email,
        subject: subject,
        html: html,
        inline: EMAIL_DEFAULT_RESOURCES.concat([])
    };

    const response = await mailgun.messages().send(data);

    if (response?.message !== MAILGUN_SUCCESS_MESSAGE) {
        throw new Error(response.message);
    }

    return response;
}

export async function validateEmail(email: string, url: string): Promise<void> {
    const html = await renderEmailTemplate('approve-email', {url});

    return sendMailgunEmail(email, 'Подтверждение email', html);
}
