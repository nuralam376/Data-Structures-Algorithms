class Hash {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket.length) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          console.log(currentBucket[i][1]);
        }
      }
    }
    return undefined;
  }

  keys() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) console.log(this.data[i][0][0]);
    }
  }

  values() {
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) console.log(this.data[i][0][1]);
    }
  }
}

const hash = new Hash(5);
hash.set("grapes", 1000);
hash.set("apple", 2000);
hash.get("grapes");
hash.get("apple");
hash.keys();
hash.values();
