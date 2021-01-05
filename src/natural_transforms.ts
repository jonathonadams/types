import type { EitherMonad } from './either';
import { Task, TaskMonad } from './task';

// natural transform definition
// nt(a.map(f)) == nt(a).map(f)

// F a -> T a
const eitherToTask = (e: EitherMonad): TaskMonad =>
  e.fold(Task.rejected, Task.of);

export { eitherToTask };
