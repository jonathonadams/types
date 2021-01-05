/**
 * Task monad
 */
declare type Fork<E = any, T = any> = (rej: (err: E) => void, res: (success: T) => void) => void;
interface TaskMonad<E = any, T = any> {
    fork: Fork<E, T>;
    ap: <K = any, O = any>(other: TaskMonad<E, O>) => TaskMonad<E, K>;
    map: <K = any>(f: (x: T) => K) => TaskMonad<E, K>;
    chain: <K = any>(f: (x: T) => TaskMonad<E, K>) => TaskMonad<E, K>;
    concat: <K = any, O = any>(other: TaskMonad<E, O>) => TaskMonad<E, K>;
    fold: <K = any, X = any>(f: (x: E) => TaskMonad<E, K>, g: (x: T) => TaskMonad<E, X>) => TaskMonad<E, K | X>;
}
declare const Task: {
    <E = any, T = any>(fork: Fork<E, T>): TaskMonad<E, T>;
    of<E_1, T_1>(x: T_1): TaskMonad<E_1, T_1>;
    rejected<E_2, T_2>(x: E_2): TaskMonad<E_2, T_2>;
    fromPromised<E_3, T_3>(fn: (...args: any[]) => Promise<T_3>): (...args: any[]) => TaskMonad<E_3, T_3>;
};
export { Task, TaskMonad };
