/**
 * - This type is used to extract all keys from an object that have a certain type.
 *
 * ✔ For e.g.
 * if there is an object
 * type A = {a: string, b: number, c: string, d: boolean, e: number}
 *
 * then
 * type Example = ExtractKeysFromObject<A, string>;
 * results in "a" | "c"
 */

// ‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣ TYPE ‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣
type ExtractKeysFromObject<Obj, A> = Exclude<
  {
    [K in keyof Obj]: Record<K, A> extends Pick<Obj, K> ? K : never;
  }[keyof Obj],
  undefined
>;
// ‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣‣

namespace NExtractKeysFromObject {
  // ✔ Example:
  type TypeA = { a: string; b: number; c: string; d: boolean; e: number };

  const a: TypeA = { a: "Hello", b: 123, c: "Bye", d: true, e: 123 };

  const b: ExtractKeysFromObject<TypeA, string> = "a" || "c";
}
