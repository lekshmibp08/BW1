class HashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }
    hash(key) {
        let total = 0;
        for(let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i);
        }
        return total % this.size;
    }
    set(key, value) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket) {
            bucket = [[key, value]];
            this.table[index] = bucket;
        } else {
            let sameKeyItem = bucket.find(item => item[0] === key);
            if(!sameKeyItem) {
                bucket.push([key, value]);
            } else {
                sameKeyItem[1] = value;
            }
        }
    }
    get(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket) {
            return null
        }
        let sameKeyItem = bucket.find(item => item[0] === key);
        if(!sameKeyItem) {
            return null;
        }
        return sameKeyItem[1];
    }
    delete(key) {
        let index = this.hash(key);
        let bucket = this.table[index];
        let sameKeyItem = bucket.find(item => item[0] === key);
        if(sameKeyItem) {
            sameKeyItem[1] = undefined;
        }
    }
    display() {
        for(let i = 0; i < this.size; i++) {
            if(this.table[i]) {
                console.log(i, this.table[i]);                
            }            
        }
    }
}

const table = new HashTable(50);

table.set('name', 'Alice');
table.set('mane', 'Bob');
table.set('age', 25);

table.delete("mane");

table.display()
console.log(table.get('name'));
console.log(table.get('mane'));

