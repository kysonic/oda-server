import * as ejs from 'ejs';

type Data = {
    [key: string]: unknown
}

const EMAIL_ASSETS_PATH = './assets/email/';

export const EMAIL_DEFAULT_RESOURCES = [
    `./public/${EMAIL_ASSETS_PATH}logo.png`
];

export async function renderEmailTemplate(templateName: string, data: Data, local = false): Promise<string> {
    data.assetsPath = local ? EMAIL_ASSETS_PATH : 'cid:';
    return ejs.renderFile(`${__dirname}/templates/${templateName}.ejs`, data);
}
