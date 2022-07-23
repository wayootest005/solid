import "@effect/core/global";
import '@tsplus/stdlib/global';


const f = (n: number) => n.toString()
const stream = Stream(1, 2, 3, 4, 5)
const program = Effect.struct({
  actual: stream.map(f).runCollect(),
  expected: stream.runCollect().map(chunk => chunk.map(f))
})

program.unsafeRunPromise()
//console.log(actual);

export const test = 5;