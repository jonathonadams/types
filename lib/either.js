const Either = (() => {
    const Right = (x) => ({
        isLeft: false,
        map: (f) => Right(f(x)),
        fold: (_, g) => g(x),
        chain: (f) => f(x),
        concat: (other) => other.fold((_) => other, 
        // TODO => should type the concat interface?
        (y) => Right(x.concat(y))),
        toString: () => `Right(${x})`,
    });
    const Left = (x) => ({
        isLeft: true,
        map: (_) => Left(x),
        fold: (f, _) => f(x),
        chain: (f) => Left(x),
        concat: (o) => Left(x),
        toString: () => `Left(${x})`,
    });
    const of = Right;
    const tryCatch = (f) => {
        try {
            return Right(f());
        }
        catch (e) {
            return Left(e);
        }
    };
    const fromNullable = (x) => (x != null ? Right(x) : Left(x));
    return { Right, Left, of, tryCatch, fromNullable };
})();
export { Either };
