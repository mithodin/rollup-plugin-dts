// >main-a<.d.ts
export type { A as AnInterface } from './main-b.d-f2c3871d.js';
// >main-b<.d.ts
export type { T as Type } from './main-b.d-f2c3871d.js';
// main-b.d-f2c3871d.d.ts
interface AnInterface {}
type Type = {}
export type { AnInterface as A, Type as T };
