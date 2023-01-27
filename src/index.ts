interface Istack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

class Stack<T> implements Istack<T> {
    private storage: T[] = [];

    // 4개까지만 받겠다.
    constructor(private capacity = 4) {}

    push(item: T): void {
        if (this.size() === this.capacity) {
            throw Error('stack is full!');
        }
        this.storage.push(item);
    }

    pop(): T | undefined {
        return this.storage.pop();
    }

    peek(): T | undefined {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
numberStack.push(3);
numberStack.push(100);

console.log(numberStack.peek());
console.log(numberStack.size()); // 4
