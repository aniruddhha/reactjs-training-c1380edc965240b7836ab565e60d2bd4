class RestSpreadDemos {
    demo1() {
        const arr1 = [1, 2, 3]
        const arr2 = [4, 5, 6]

        const merged = [...arr1, ...arr2]
        console.log(merged)
    }

    demo2() {
        const obj1 = { a: 1, b: 2 }
        const obj2 = { a: 3, b: 4, dt: { e: 5 } }
        const merged = { ...obj1, ...obj2 }
        console.log(merged)
    }

    demo3(a, b, c) {
        console.log(`${a}, ${b}, ${c}`)
    }

    demo4(a, b, ...arr) {
        console.log(a)
        console.log(b)
        console.log(arr)
    }

    demo5() {
        const a = 10
        const b = 20
        const obj1 = { a: a, b: b }
        const obj2 = { a, b }
        console.log(obj1)
        console.log(obj2)
    }

    demo6(a, b = 0, c) {
        console.log(`a = ${a}`)
        console.log(`b = ${b}`)
        console.log(`c = ${c}`)
    }
}

const rd = new RestSpreadDemos();
// rd.demo2()

rd.demo3(10, 20, 30)
const arr = [10, 20, 30, 45]
rd.demo3(arr[0], arr[1], arr[2])
rd.demo3(...arr)
const obj1 = { a: 1, b: 2, c: 3 }
// rd.demo3(...obj1)
const str = 'hello'
rd.demo3(...str)
rd.demo4(1, 2, ['a', 'b', true, 15.45, false])
rd.demo4(1, 2)
rd.demo5()
rd.demo6(c = 99, a = 39)