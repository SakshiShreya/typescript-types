/**
 * - This type is used when two objects A and B are merged together.
 *
 * If there are two objects A and B, and they are merged using Object.assign then this will be equal to that type
 *
 * ✔ For e.g.
 * type Example = MergeObjects<
 *    { a: number; b: string },
 *    { a: string; c: number }
 * >;
 * results in
 * {
 *    a: string; // second object wins in event of collision
 *    b: string;
 *    c: number;
 * }
 */

// ‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣ TYPE ‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣
type MergeObjects<A, B> = B & Pick<A, Exclude<keyof A, keyof B>>;
// ‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣

namespace NMergeObjects {
  // ✔ Example:
  type TypeA = { a: number; b: string };
  type TypeB = { a: string; c: number };

  const a: TypeA = { a: 123, b: "Hello" };
  const b: TypeB = { a: "hello", c: 234 };

  const c: MergeObjects<TypeA, TypeB> = Object.assign(a, b);
  const d: MergeObjects<TypeA, TypeB> = { ...a, ...b };

  // ❌ It can't be used with more than two Generic parameters For e.g. MergeObjects<A, B, C> is not valid
  // ✔ For merging more than 2 objects
  type TypeE = { c: boolean; d: string };

  const e: TypeE = { c: true, d: "Hello" };
}
