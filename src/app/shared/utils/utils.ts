
export class Utils {
    static isNullOrUndefined = (value: any): boolean => {
        return value === null || typeof value === 'undefined';
    }
}