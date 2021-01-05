import type { EitherMonad } from './either';
import { TaskMonad } from './task';
declare const eitherToTask: (e: EitherMonad) => TaskMonad;
export { eitherToTask };
