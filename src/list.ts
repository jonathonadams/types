/**
 * List
 */

// export const List = <T>(list: T[]) => ({
//   map: <K>(f: (x: T) => K) => list.map(f),
//   foldMap: <K>(f: (x: T, i?: number) => K, initial: any): K =>
//     /* this returns type Concat<K>, but Concat is just for typing the concat interface */
//     (list.reduce((acc, n, i) => acc.concat(f(n, i)), initial) as unknown) as K,
// })

//   List([getUser, getTimeline, getAds])
//     .traverse(Task.of, (f) => f())
//     .fork(console.log, (x) => console.log(x.toJS()));
//   // Promise<[value1, value2, value3]>
