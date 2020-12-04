import { Id } from './identity';
import { Task } from './task';

const t1 = Task<void, string>((rej, res) => {
  setTimeout(() => {
    res('it worked');
  }, 1000);
}).map((string) => string.toUpperCase());

it('should work', async () => {
  const res = await new Promise((res, rej) => t1.fork(rej, res));
  expect(res).toBe('IT WORKED');
});
