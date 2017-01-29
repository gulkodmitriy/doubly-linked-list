const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
}

    append(data) {
        var node = new Node(data);

        if(this.length){
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return node;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index >= 0 && index < this.length) {
            var s = this._head;
            while (index--) {
                s = s.next;
            }
            return s.data;
        }
    }

    insertAt(index, data) {
        if (index >= 0 && index < this.length){
            var s = this._head;
            while (index--) {
                s = s.next;
            }
            var m = s;
            m.prev = s.prev;
            s.prev = data;
            m.next = s;
            m.data = data;

        }
    }

    isEmpty() {
        if(this.length) {
            return false;
        }else{
            return true;
        }
    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
    }

    deleteAt(index) {
        if (index >= 0 && index < this.length) {
            var s = this._head;
            while (index--) {
                s = s.next;
            }
            s.prev.next = s.next;
        }
    }

    reverse() {
        var l = this._head;
        var m = this._tail;
        for(var i = 0; i < this.length/2; i++){
            var n = l.data;
            l.data = m.data;
            m.data = n;
            l = l.next;
            m = m.prev;
        }
    }

    indexOf(data) {
        var index=0;
        var s = this._head;
        if(s.data != data){
            s = s.next;
            index++;
            if(index > this.length-1){
                return -1;
            }
        }if(s.data == data){
            return index;
        }
    }
}

module.exports = LinkedList;
