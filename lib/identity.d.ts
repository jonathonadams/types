/**
 * The Identity Monad
 */
interface IdentityMonad<T = any> {
    map: <K = any>(f: (x: T) => K) => IdentityMonad<K>;
    chain: <K = any>(f: (x: T) => K) => K;
    extract: () => T;
    concat: <O = any, K = any>(other: IdentityMonad<O>) => IdentityMonad<K>;
}
declare const Identity: {
    <T = any>(x: T): IdentityMonad<T>;
    of<T_1>(x: T_1): IdentityMonad<T_1>;
};
export { Identity, IdentityMonad };
