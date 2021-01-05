import type { EitherMonad } from './either';
interface Monoid<T> {
    x: T;
    concat: (f: Monoid<T>) => Monoid<T>;
}
declare type NumberMonoid = Monoid<number>;
declare type BooleanMonoid = Monoid<boolean>;
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
interface Alternative<T = any> {
    ex: EitherMonad<T>;
    concat: <K>(other: Alternative<K>) => Alternative<K> | Alternative<T>;
}
declare const Alternative: <T = any>(ex: EitherMonad<T>) => Alternative;
export { Product, Sum, Any, All, Alternative, Id, Monoid, NumberMonoid, BooleanMonoid, };
