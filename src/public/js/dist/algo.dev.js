"use strict";

function partition(arr, low, high) {
  var temp;
  var pivot = arr[high]['hec-key'];
  var i = low - 1;

  for (var j = low; j <= high - 1; j++) {
    if (arr[j]['hec-key'] <= pivot) {
      i++; // swap arr[i] and arr[j]

      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }

  temp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = temp;
  return i + 1;
}

function qSort(arr, low, high) {
  if (low < high) {
    var pi = partition(arr, low, high);
    qSort(arr, low, pi - 1);
    qSort(arr, pi + 1, high);
  }
} //SEARCH


Bsearch = function Bsearch(arr, x) {
  var start = 0,
      end = arr.length - 1;

  while (start <= end) {
    var _mid = Math.floor((start + end) / 2);

    if (arr[_mid]['hec-key'] === x) return _mid;else if (arr[_mid]['hec-key'] < x) start = _mid + 1;else end = _mid - 1;
  }

  return -1;
};

function BTsearch(Arr, x, f) {
  var start = 0,
      end = Arr.length - 1;

  while (start <= end) {
    mid = start + Math.floor((end - start) / 2);
    if (Arr[mid][f] == x) return mid;
    if (Arr[mid][f] < x) start = mid + 1;else end = mid - 1;
  }

  return -1;
}