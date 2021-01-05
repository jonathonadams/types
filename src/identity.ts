/**
 * The Identity Monad
 */
interface IdentityMonad<T = any> {
  map: <K = any>(f: (x: T) => K) => IdentityMonad<K>;
  chain: <K = any>(f: (x: T) => K) => K;
  extract: () => T;
  concat: <O = any, K = any>(other: IdentityMonad<O>) => IdentityMonad<K>;
}

const Identity = <T = any>(x: T): IdentityMonad<T> => ({
  map: (f) => Identity(f(x)),
  chain: (f) => f(x),
  extract: () => x,
  concat: <O, K>(o: IdentityMonad<O>) =>
    Identity(((x as unknown) as { concat: (x: O) => K }).concat(o.extract())),
});

Identity.of = <T>(x: T) => Identity(x);

export { Identity, IdentityMonad };
