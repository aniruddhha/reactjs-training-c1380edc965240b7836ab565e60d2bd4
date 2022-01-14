class ArrowDemos {

    constructor() {
        this.a = 10
        this.b = 20

    }

    demo1() {
        function abc() {
            console.log(`Calling Abc`)
        }

        abc()

        const fn1 = abc
        fn1()

        const pqr = () => console.log(`Calling Pqr`)
        pqr()
    }

    demo2() {
        const dateConverter = dt => dt.toISOString().slice(0, 10)
        console.log(dateConverter(new Date()))

        const dateConverterOld = function (dt) {
            return dt.toISOString().slice(0, 10)
        }
        console.log(dateConverterOld(new Date()))
    }

    demo3() {
        const strAppender = (a, b) => {
            const aUp = a.toString()
            const bUp = b.toString()

            return `${aUp} - ${bUp}`
        }

        console.log(strAppender(new Date(), new Date()))
    }

    demo4() {
        const abc = () => {
            let i = 10
            console.log(`In Arrow`)
            console.log(this)
            this.demo1()
        }

        abc()

        function pqr() {
            let i = 10
            console.log(`In Normal ${i}`)
            console.log(this)
            // demo1()
        }

        pqr()
    }
}

const ad = new ArrowDemos()
ad.demo4()

function abc() {
    console.log(this)
}
abc()

const pqr = () => console.log(this)
pqr()

function demo4() {

}


