import * as yup from 'yup';

const userEmailPasswordRules = {
    email: yup.string().email().required(),
    password: yup.string().min(3).required(),
};

const userDataRules = {
    data: yup.object().shape({
        name: yup.string().max(25)
    })
};

export default {
    query: {},
    mutation: {
        signup: yup.object().shape({
            ...userEmailPasswordRules,
            ...userDataRules,
        }),
        login: yup.object().shape({
            ...userEmailPasswordRules
        }),
        updateMyUser: yup.object().shape({
            ...userDataRules
        }),
    }
}
