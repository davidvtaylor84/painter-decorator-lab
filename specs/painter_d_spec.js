const assert = require('assert')
const Room = require('../room.js')
const Paint = require('../paint.js')
const Decorator = require('../decorator.js')

let room
let paint
let decorator

describe('Room', function(){
    beforeEach (function(){
        room = new Room(230)
    })
    it('has an area in sq metres', function(){
        const actual = room.area
        assert.strictEqual(actual, 230)
    });
    it('is not painted', function(){
        const actual = room.painted
        assert.equal(actual, false)
    });
    it('is painted', function(){
        room.paintRoom()
        const actual = room.painted
        assert.equal(actual, true)
    })
});

describe('Paint', function(){
    beforeEach (function(){
        paint = new Paint('blue',67)
    });
    it('has litres of paint', function(){
        const actual = paint.litres
        assert.strictEqual(actual, 67)
    });
    it('is empty', function(){
        paint.emptyPaintCan()
        const actual = paint.litres
        assert.deepEqual(actual, 0)
    })
});

describe('Decorator', function(){
    this.beforeEach (function(){
        decorator = new Decorator()
    });
    it('has no paint stock', function(){
        const actual = decorator.stock
        assert.deepStrictEqual(actual, [])
    });
    it('has paint stock', function(){
        bluePaint = new Paint('blue paint', 89)
        decorator.addPaint(bluePaint)
        const actual = decorator.stock
        assert.deepEqual(actual, [bluePaint])
    });
    it('total litres of paint', function(){
        bluePaint = new Paint('blue paint', 89)
        decorator.addPaint(bluePaint)
        decorator.addPaint(bluePaint)
        decorator.addPaint(bluePaint)
        const actual = 267
        assert.deepStrictEqual(actual, 267)
    })
})