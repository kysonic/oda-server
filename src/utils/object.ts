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
