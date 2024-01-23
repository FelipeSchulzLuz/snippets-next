import * as yup from 'yup';

export const schema = yup.object({
    title: yup.string().required('Title is required'),
    code: yup.string().required('Code is required'),
    notes: yup.string().nullable(),
}).required();