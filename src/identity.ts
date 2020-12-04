/**
 * The Identity Monad
 */

export interface IdentityMonad<T = any> {
  map: <K = any>(f: (x: T) => K) => IdentityMonad<K>;
  chain: <K = any>(f: (x: T) => K) => K;
  extract: () => T;
  concat: <O = any, K = any>(other: IdentityMonad<O>) => IdentityMonad<K>;
}

export const Id = <T = any>(x: T): IdentityMonad<T> => ({
  map: (f) => Id(f(x)),
  chain: (f) => f(x),
  extract: () => x,
  concat: <O, K>(o: IdentityMonad<O>) =>
    Id(((x as unknown) as { concat: (x: O) => K }).concat(o.extract())),
});

Id.of = <T>(x: T) => Id(x);
