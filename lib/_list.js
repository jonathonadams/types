/**
 * List
 */
export const List = (list) => ({
    map: (f) => list.map(f),
    foldMap: (f, initial) => 
    /* this returns type Concat<K>, but Concat is just for typing the concat interface */
    list.reduce((acc, n, i) => acc.concat(f(n, i)), initial),
});
//   List([getUser, getTimeline, getAds])
//     .traverse(Task.of, (f) => f())
//     .fork(console.log, (x) => console.log(x.toJS()));
//   // Promise<[value1, value2, value3]>
// monoid
// List.empty = List()
// List.prototype.empty = List.empty
// // traversable
// List.prototype.traverse = function(point, f) {
//   return this.reduce((ys, x) =>
//     ys.map(x => y => x.concat([y])).ap(f(x)), point(this.empty))
// }
// List.prototype.sequence = derived.sequence
// // foldable
// List.prototype.fold = derived.fold
// List.prototype.foldMap = derived.foldMap
// // applicative
// List.prototype.ap = function(other) {
//   return this.map(f => other.map(x => f(x))).flatten()
// }
// // monad
// List.prototype.chain = List.prototype.flatMap;
// // comonad#extend - extract needs list to be non empty
// List.prototype.extend = function(f) {
//   return this.map((x, i) => f(this.slice(i)))
// }
