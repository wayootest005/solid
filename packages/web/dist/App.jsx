const fileName_1 = "C:/Users/t/Desktop/Programmieren/Solid/my-solid-project11/packages/web/src/App.tsx";
import * as tsplus_module_1 from "@effect/core/stream/Stream/operations/make";
import * as tsplus_module_2 from "@effect/core/stream/Stream/operations/map";
import * as tsplus_module_3 from "@effect/core/stream/Stream/operations/runCollect";
import * as tsplus_module_4 from "@tsplus/stdlib/collections/Chunk/map";
import * as tsplus_module_5 from "@effect/core/io/Effect/operations/map";
import * as tsplus_module_6 from "@effect/core/io/Effect/operations/struct";
import * as tsplus_module_7 from "@effect/core/io/Effect/operations/runtime";
/* @refresh reload */
import './index.css';
import "@effect/core/global";
import '@tsplus/stdlib/global';
const f = (n) => n.toString();
const stream = tsplus_module_1.make(1, 2, 3, 4, 5);
const program = tsplus_module_6.struct({
    actual: tsplus_module_3.runCollect(tsplus_module_2.map_(stream, f, fileName_1 + ":12:21"), fileName_1 + ":12:35"),
    expected: tsplus_module_5.map_(tsplus_module_3.runCollect(stream, fileName_1 + ":13:30"), chunk => tsplus_module_4.map_(chunk, f), fileName_1 + ":13:36")
}, fileName_1 + ":11:30");
const { actual, expected } = await tsplus_module_7.unsafeRunPromise(program, fileName_1 + ":16:60");
console.log(actual);
export const App = () => {
    return (<p class="text-4xl text-green-700 text-center py-20">Hello tailwind!</p>);
};
//# sourceMappingURL=App.jsx.map