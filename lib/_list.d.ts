/**
 * List
 */
export declare const List: <T = any>(list: T[]) => {
    map: <K>(f: (x: T) => K) => K[];
    foldMap: <K_1>(f: (x: T, i?: number | undefined) => K_1, initial: any) => K_1;
};
