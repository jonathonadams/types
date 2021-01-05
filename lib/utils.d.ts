declare const logIt: <T>(x: T) => T;
declare const parseJSON: (contents: string) => import("./either").EitherMonad<any>;
export { logIt, parseJSON };
