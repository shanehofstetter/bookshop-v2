export const distinctById = <T>(objects: { id: any, [key: string]: any }[]): T[] => {
    const result = [];
    const map = new Map();
    for (const item of objects) {
        if (!map.has(item.id)) {
            map.set(item.id, true);
            result.push(item);
        }
    }
    return result;
};