import type { Component } from 'solid-js';
/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import "@effect/core/global";
import '@tsplus/stdlib/global';


const f = (n: number) => n.toString()
const stream = Stream(1, 2, 3, 4, 5)
const program = Effect.struct({
  actual: stream.map(f).runCollect(),
  expected: stream.runCollect().map(chunk => chunk.map(f))
})

const { actual, expected } = await program.unsafeRunPromise()
console.log(actual);

export const App: Component = () => {
  return (
    <p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>
  );
};

