import * as ejs from 'ejs';

export async function renderEmailTemplate(templateName, data) {
   return ejs.renderFile(`${__dirname}/templates/${templateName}.ejs`, data);
}
