/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  let compareStrings = function(str1, str2) {
    let result = str1.localeCompare(str2, 'ru', {caseFirst: 'upper'});
    return result * (param === 'asc' ? 1 : -1)
  };

  return arr.sort(compareStrings);
}
