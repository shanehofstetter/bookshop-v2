export const addCssClass = (classes, className) => [...classes.split(' '), className].join(' ');

export interface GenericProperties {
    [key: string]: any;
}