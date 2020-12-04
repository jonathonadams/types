// import { List, Success, Fail, Validation, ValidationMonad } from './types.js';

// const isPresent = Validation((key: string, x: string) =>
//   !x ? Success(x) : Fail([`${key} must be present`])
// );

// const isEmail = Validation((key: string, x: string) =>
//   /@/.test(x) ? Success(x) : Fail([`${key} must be an email`])
// );

// const validate = (
//   spec: { [key: string]: ValidationMonad<string> },
//   obj: { [key: string]: string }
// ) => {
//   const runFunc = (key: string) => spec[key].run(key, obj[key]);

//   return List(Object.keys(spec)).foldMap(runFunc, Success([obj]));
// };

// const validations = { name: isPresent, email: isPresent.concat(isEmail) };
// const obj = { name: 'adsf', email: 'some@emil.com' };
// const res = validate(validations, obj);

// (res.fold as any)(console.log, console.log);

// /// Validation types

// export interface SuccessMonad<T> {
//   isFail: false;
//   x: T;
//   fold: <K, X>(f: Transform<T, X>, g: Transform<T>) => K;
//   concat: <K, X>(
//     other: SuccessMonad<K> | FailMonad<X>
//   ) => SuccessMonad<T> | FailMonad<X>;
// }

// export interface FailMonad<T> {
//   isFail: true;
//   x: T;
//   fold: <K, X>(f: Transform<T, X>, g: Transform<T>) => X;
//   concat: <K, X>(other: SuccessMonad<K> | FailMonad<X>) => FailMonad<T>;
// }

// type RunFunc<T> = (key: string, x: T) => SuccessMonad<T> | FailMonad<string[]>;

// export interface ValidationMonad<T> {
//   run: RunFunc<T>;
//   concat: (other: ValidationMonad<T>) => ValidationMonad<T>;
// }

// export const Validation = <T>(run: RunFunc<T>): ValidationMonad<T> => ({
//   run,
//   concat: (other) =>
//     Validation((key, x) =>
//       (run(key, x) as SuccessMonad<T>) /*TODO remove type cast*/
//         .concat(other.run(key, x))
//     ),
// });

// export const Success = <T>(x: T): SuccessMonad<T> => ({
//   isFail: false,
//   x,
//   fold: (f, g) => g(x),
//   concat: (other) => (other.isFail ? other : Success(x)),
// });

// export const Fail = <T>(x: T): FailMonad<T> => ({
//   isFail: true,
//   x,
//   fold: (f, g) => f(x),
//   concat: (other) =>
//     other.isFail
//       ? Fail(
//           (x as any) /*TODO -> type the concat*/
//             .concat(other.x)
//         )
//       : Fail(x),
// });
