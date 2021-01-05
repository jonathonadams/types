export const Identity = (x) => ({
    map: (f) => Identity(f(x)),
    chain: (f) => f(x),
    extract: () => x,
    concat: (o) => Identity(x.concat(o.extract())),
});
Identity.of = (x) => Identity(x);
