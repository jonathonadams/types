interface EitherMonad<T = any> {
    isLeft: boolean;
    map: <X = any>(f: (x: T) => X) => EitherMonad<X> | EitherMonad<T>;
    fold: <X = any, K = any>(f: (x: T) => X, g: (x: T) => K) => X | K;
    chain<K = any>(f: (x: T) => K): K | EitherMonad<T>;
    concat: <O = any>(o: EitherMonad) => EitherMonad<T> | EitherMonad<O>;
    toString: () => string;
}
declare const Either: {
    Right: <R = any>(x: R) => EitherMonad<R>;
    Left: <L = any>(x: L) => EitherMonad<L>;
    of: <R = any>(x: R) => EitherMonad<R>;
    tryCatch: <T = any>(f: (...args: any[]) => T) => EitherMonad<any>;
    fromNullable: <T_1 = any>(x: T_1) => EitherMonad<T_1>;
};
export { Either, EitherMonad };
