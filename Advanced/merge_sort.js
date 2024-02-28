const arr = [1, 3, 8, 6, 5, 4, 9, 2, 5, 7, 7];
function separateFunction(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = separateFunction(arr.slice(0, mid));
  const right = separateFunction(arr.slice(mid, arr.length));
  return sortFunction(left, right);
}
console.log(separateFunction(arr));

function sortFunction(left, right) {
  let merged = [];
  let l_index = 0;
  let r_index = 0;

  while (l_index < left.length && r_index < right.length) {
    if (left[l_index] < right[r_index]) {
      merged.push(left[l_index]);
      l_index++;
    } else {
      merged.push(right[r_index]);
      r_index++;
    }
  }
  merged = merged.concat(left.slice(l_index)).concat(right.slice(r_index));
  return merged
}
