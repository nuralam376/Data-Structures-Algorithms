class Dictionary {
  constructor() {
    this.dictionary = {};
  }

  add(key, value) {
    this.dictionary[key] = value;
  }

  get(key) {
    return this.dictionary[key];
  }
}

const phoneBook = new Dictionary();
phoneBook.add("Abc", "0172917981");
phoneBook.add("Def", "8101821982");
phoneBook.add("Ghi", "7192819271");
console.log(phoneBook.dictionary);
console.log(phoneBook.get("Def"));
