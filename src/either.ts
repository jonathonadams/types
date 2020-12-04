export interface EitherMonad<T = any> {
  isLeft: boolean;
  map: <X = any>(f: (x: T) => X) => EitherMonad<X> | EitherMonad<T>;
  fold: <X = any, K = any>(f: (x: T) => X, g: (x: T) => K) => X | K;
  chain<K = any>(f: (x: T) => K): K | EitherMonad<T>;
  concat: <O = any>(o: EitherMonad) => EitherMonad<T> | EitherMonad<O>;
  toString: () => string; // inspect
}

export const Either = (() => {
  const Right = <R = any>(x: R): EitherMonad<R> => ({
    isLeft: false,
    map: (f) => Right(f(x)),
    fold: (_, g) => g(x),
    chain: (f) => f(x),
    concat: (other) =>
      other.fold(
        (_) => other,
        // TODO => should type the concat interface?
        (y) => Right((x as any).concat(y))
      ),
    toString: () => `Right(${x})`,
  });

  const Left = <L = any>(x: L): EitherMonad<L> => ({
    isLeft: true,
    map: (_) => Left(x),
    fold: (f, _) => f(x),
    chain: (f) => Left(x),
    concat: (o) => Left(x),
    toString: () => `Left(${x})`,
  });

  const of = Right;
  const tryCatch = <T = any>(f: (...args: any[]) => T) => {
    try {
      return Right(f());
    } catch (e) {
      return Left(e);
    }
  };

  const fromNullable = <T = any>(x: T) => (x != null ? Right(x) : Left(x));

  return { Right, Left, of, tryCatch, fromNullable };
})();
