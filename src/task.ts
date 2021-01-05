/**
 * Task monad
 */
export type Fork<E = any, T = any> = (
  rej: (err: E) => void,
  res: (success: T) => void
) => void;

export interface TaskMonad<E = any, T = any> {
  fork: Fork<E, T>;
  ap: <K = any, O = any>(other: TaskMonad<E, O>) => TaskMonad<E, K>;
  map: <K = any>(f: (x: T) => K) => TaskMonad<E, K>;
  chain: <K = any>(f: (x: T) => TaskMonad<E, K>) => TaskMonad<E, K>;
  concat: <K = any, O = any>(other: TaskMonad<E, O>) => TaskMonad<E, K>;
  fold: <K = any, X = any>(
    f: (x: E) => TaskMonad<E, K>,
    g: (x: T) => TaskMonad<E, X>
  ) => TaskMonad<E, K | X>;
}

export const Task = <E = any, T = any>(fork: Fork<E, T>): TaskMonad<E, T> => ({
  fork, // Nothing happens until you fork it!!!!!
  ap: <K, O>(other: TaskMonad<E, O>) =>
    Task<E, K>((rej, res) =>
      fork(rej, (f) =>
        other.fork(rej, (x) => res(((f as unknown) as (x: O) => K)(x)))
      )
    ),
  map: <K = any>(f: (x: T) => K) =>
    Task<E, K>((rej, res) => fork(rej, (x) => res(f(x)))),
  chain: <K = any>(f: (x: T) => TaskMonad<E, K>) =>
    Task<E, K>((rej, res) => fork(rej, (x) => f(x).fork(rej, res))),
  concat: <K = any, O = any>(other: TaskMonad<E, O>) =>
    Task<E, K>((rej, res) =>
      fork(rej, (x) =>
        other.fork(rej, (y) => {
          res(
            ((x as unknown) as {
              concat: (y: O) => K;
            }).concat(y)
          );
        })
      )
    ),
  fold: <K = any, X = any>(
    f: (x: E) => TaskMonad<E, K>,
    g: (x: T) => TaskMonad<E, X>
  ) =>
    Task<E, K | X>((rej, res) =>
      fork(
        (x) => f(x).fork(rej, res),
        (x) => g(x).fork(rej, res)
      )
    ),
});
// For typing, allow to specify the starting error, even though it is not possible
Task.of = <E, T>(x: T) => Task<E, T>((rej, res) => res(x));
Task.rejected = <E, T>(x: E) => Task<E, T>((rej, res) => rej(x));
Task.fromPromised = <E, T>(fn: (...args: any[]) => Promise<T>) => (
  ...args: any[]
) =>
  Task<E, T>((rej, res) =>
    fn(...args)
      .then(res)
      .catch(rej)
  );
