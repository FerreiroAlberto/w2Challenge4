export function arrayLength(array) {
  let i = 0;
  // eslint-disable-next-line no-unused-vars
  for (const item of array) {
    i++;
  }

  return i;
}

export function arrayPush(array, ...elements) {
  const arrLength = arrayLength(array);
  const elementLength = arrayLength(elements);
  for (let i = 0; i < elementLength; i++) {
    array[arrLength + i] = elements[i];
  }

  const newLength = arrayLength(array);
  return newLength;
}

export function arrayUnshift(array, ...elements) {
  const arrLength = arrayLength(array);
  const x = arrayLength(elements);
  for (let i = arrLength - 1; i >= 0; i--) {
    array[i + x] = array[i];
  }

  for (let i = 0; i < x; i++) {
    array[i] = elements[i];
  }

  const newLength = arrayLength(array);
  return newLength;
}

export function arrayIndexOf(array, element, start = 0) {
  let index = -1;
  const startPoint = start;
  const arrLength = arrayLength(array);
  for (let i = startPoint; i < arrLength; i++) {
    if (array[i] === element) {
      index = i;
      return index;
    }
  }
}

export function arrayIncludes(array, value, start = 0) {
  const arrLength = arrayLength(array);
  let startPoint = 0;
  if (start < 0) {
    startPoint = arrLength + start;
  }

  if (start > arrLength) {
    return false;
  }

  for (let i = startPoint; i < arrLength; i++) {
    if (array[i] === value) {
      return true;
    }
  }

  return false;
}
