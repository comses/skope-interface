/**
 * Helper for generating the final class name string.
 * @param  {Array.<string|Object>} ...items
 * @return {string}
 */
export
const getClassName = (...items) =>
  items
  // If the item is a map, include all class names specified by the property name when the value is truthy.
  // For example, {a: true, b: false, c: true} => 'a c'.
  .map((x) => (
    typeof x === 'object' && x !== null
    ? Object.keys(x)
      .filter((key) => x[key])
      .join(' ')
    : String(x)
  ))
  // All falsy entries will be removed.
  .filter(Boolean)
  .join(' ');
