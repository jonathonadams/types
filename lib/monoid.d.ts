export interface Monoid<T> {
    x: T;
    concat: (f: Monoid<T>) => Monoid<T>;
}
export declare type NumberMonoid = Monoid<number>;
export declare type BooleanMonoid = Monoid<boolean>;
declare const Product: {
    (x: number): NumberMonoid;
    empty(): NumberMonoid;
};
declare const Sum: {
    (x: number): NumberMonoid;
    empty(): NumberMonoid;
};
declare const Any: {
    (x: boolean): BooleanMonoid;
    empty(): BooleanMonoid;
};
declare const All: {
    (x: boolean): BooleanMonoid;
    empty(): BooleanMonoid;
};
declare const Id: <T>(x: T) => T;
export { Product, Sum, Any, All, Id };
