import {objectHasProperties} from '../utils/object';

export function parallel(where, props = [], clause = 'contains'): void {
    const clauses = props.map( prop => {
        const value = where[prop];
        delete where[prop];
        return {[`${prop}_${clause}`]: value};
    });
    where.OR = [...clauses];
}
