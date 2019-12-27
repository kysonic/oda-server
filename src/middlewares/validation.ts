import {validate} from '../services/validation';

export async function validation(resolve, root, args, context, info) {
    const operation = info.operation?.operation;
    const selection = info.operation?.selectionSet?.selections[0]?.name?.value;

    await validate(operation, selection, args);

    return resolve(root, args, context, info);
}
