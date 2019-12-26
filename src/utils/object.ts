export function objectMap(object: Object, mapFunction: Function): Object {
    return Object.fromEntries(
        Object.entries(object).map(
            ([k, v], i) => [k, mapFunction(v, k, i)]
        )
    )
}

export function objectMapToArray(object: Object, mapFunction: Function): Array<any> {
    return Object.entries(object).map(
        ([k, v], i) => mapFunction(v, k, i)
    )
}

export function objectHasProperties(object: Object, properties: Array<string>): number {
    let includesCount = 0;
    properties.forEach(prop => {
        if (object[prop]) {
            includesCount++;
        }
    });
    return includesCount;
}

export function merge<T extends object = object>(target: T, ...sources: T[]): T {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    if (source === undefined) {
        return target;
    }

    if (isMergebleObject(target) && isMergebleObject(source)) {
        Object.keys(source).forEach(function(key: string) {
            if (Array.isArray(source[key]) && target[key]) {
                target[key] = source[key].concat(target[key]);
            } else if (isMergebleObject(source[key])) {
                if (!target[key]) {
                    target[key] = {};
                }
                merge(target[key], source[key]);
            } else {
                target[key] = source[key];
            }
        });
    }

    return merge(target, ...sources);
}

export function isObject(item: any): boolean {
    return item !== null && typeof item === 'object';
}

export function isMergebleObject(item): boolean {
    return isObject(item) && !Array.isArray(item);
}
