const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        var node = new Node(data);

        if(this.length == 0) {
            this._tail = this._head = node;
        }
        else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    _at(index) {
        var x = this._head;
        for(var i = 0; i != index; i++) {
            x = x.next;
        }
        return x;
    }

    at(index) {
        return this._at(index).data;
    }

    insertAt(index, data) {
        if(index == this.length) {
            this.append(data);
        }
        this._at(index).data = data;
    }

    isEmpty() {
        if(this.length == 0) {
            return true;
        }
        else {
            return false
        }
    }

    clear() {
        var count = this.length - 1;
        for(var x = 0; x <= this.length; x++) {
            var i = count - x;
            while (i >= 0) {
                var n = this._head.data;
                n = null;
                this.deleteAt(i);
                i--;
            }
        }
    }

    deleteAt(index) {
        var node = this._head;
        var removeNode = this._at(index);
        if(this.length == 1) {
            constructor();
        }
        else {
            removeNode.prev.next = removeNode.next;
        }
        this.length--;
        return this;
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
