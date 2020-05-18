/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  let set = new Set(fields);
  return Object.fromEntries(
    Object.entries(obj)
      .filter(([key, value]) => !set.has(key))
  );
};
