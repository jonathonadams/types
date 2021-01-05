import { Task } from './task';
// natural transform definition
// nt(a.map(f)) == nt(a).map(f)
// F a -> T a
const eitherToTask = (e) => e.fold(Task.rejected, Task.of);
export { eitherToTask };
