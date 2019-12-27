import * as yup from 'yup';

const userEmailPasswordRules = {
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
};

export default {
    query: {

    },
    mutation: {
        signup: yup.object().shape({
            ...userEmailPasswordRules,
            data: yup.object().shape({
                name: yup.string().max(25)
            })
        }),
        login: yup.object().shape({
            ...userEmailPasswordRules
        }),
    }
}
