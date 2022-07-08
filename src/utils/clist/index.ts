export const clist = (...names: (string|undefined)[]): string => names.filter((entry) => entry != null).join(' ');
