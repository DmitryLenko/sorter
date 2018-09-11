class Sorter {
  constructor() {
    this.array = [];
    this.setComp = sortingNumbers;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    var temporaryArray = [];
    var index = 0;
    indices.sort(sortingNumbers);
    for(let i = 0; i<this.array.length; i++) {
      for(let j = 0; j< indices.length; j++) {
        if(i === indices[j]) {
          temporaryArray.push(this.array[i]);
        }
      }
    }
    temporaryArray.sort(this.setComp);
    indices.forEach( item => {
      this.array.splice(item,1,temporaryArray[index])
      index++;
    });
  }

  setComparator(compareFunction) {
    this.setComp = compareFunction;
  }
}

function sortingNumbers(a, b) {
  return a - b;
}


module.exports = Sorter;