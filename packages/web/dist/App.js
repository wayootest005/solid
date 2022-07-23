const fileName_1 = "(@org/web) src/App.ts";
import * as tsplus_module_1 from "@effect/core/stream/Stream/operations/make";
import * as tsplus_module_2 from "@effect/core/stream/Stream/operations/map";
import * as tsplus_module_3 from "@effect/core/stream/Stream/operations/runCollect";
import * as tsplus_module_4 from "@tsplus/stdlib/collections/Chunk/map";
import * as tsplus_module_5 from "@effect/core/io/Effect/operations/map";
import * as tsplus_module_6 from "@effect/core/io/Effect/operations/struct";
import * as tsplus_module_7 from "@effect/core/io/Effect/operations/runtime";
const f = (n) => n.toString();
const stream = tsplus_module_1.make(1, 2, 3, 4, 5);
const program = tsplus_module_6.struct({
    actual: tsplus_module_3.runCollect(tsplus_module_2.map_(stream, f, fileName_1 + ":8:21"), fileName_1 + ":8:35"),
    expected: tsplus_module_5.map_(tsplus_module_3.runCollect(stream, fileName_1 + ":9:30"), chunk => tsplus_module_4.map_(chunk, f), fileName_1 + ":9:36")
}, fileName_1 + ":7:30");
tsplus_module_7.unsafeRunPromise(program, fileName_1 + ":12:25");
//console.log(actual);
export const test = 5;
//# sourceMappingURL=App.js.map