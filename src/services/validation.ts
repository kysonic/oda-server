import * as yup from 'yup';

const Schemas = {
    mutation: {
        signup: yup.object().shape({
            email: yup.string().email().required(),
            password: yup.string().min(3).required(),
            data: yup.object().shape({
                name: yup.string().max(25)
            })
        })
    }
};

export async function validate(operation: string, selection: string, args: any): Promise<Array<string>> {
    if (!Schemas[operation]?.[selection] || !Object.keys(args).length) {
        return [];
    }
    return Schemas[operation]?.[selection]?.validate(args) || [];
}
