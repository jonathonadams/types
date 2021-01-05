import type { EitherMonad } from './either';

export interface Monoid<T> {
  x: T;
  concat: (f: Monoid<T>) => Monoid<T>;
}

export type NumberMonoid = Monoid<number>;
export type BooleanMonoid = Monoid<boolean>;

const Product = (x: number): NumberMonoid => ({
  x,
  concat: (other) => Product(x * other.x),
});
Product.empty = () => Product(1);

const Sum = (x: number): NumberMonoid => ({
  x,
  concat: (other) => Sum(x + other.x),
});
Sum.empty = () => Sum(0);

const Any = (x: boolean): BooleanMonoid => ({
  x,
  concat: (other) => Any(x || other.x),
});
Any.empty = () => Any(false);

const All = (x: boolean): BooleanMonoid => ({
  x,
  concat: (other) => All(x && other.x),
});

All.empty = () => All(true);

const Id = <T>(x: T) => x;

interface Alternative<T = any> {
  ex: EitherMonad<T>;
  concat: <K>(other: Alternative<K>) => Alternative<K> | Alternative<T>;
}

const Alternative = <T = any>(ex: EitherMonad<T>): Alternative => ({
  ex,
  concat: (other) => Alternative(other.ex.isLeft ? ex : ex.concat(other.ex)),
});

export { Product, Sum, Any, All, Id };
