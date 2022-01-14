class AsyncAwaitDemo {

    async demo1() {

        const prm = new Promise((res, rej) => {
            setTimeout(() => res('hey hi'), 1500)
        })

        // prm.then(dt => console.log(dt))

        const dt = await prm
        console.log(dt)
    }

    async demo2() {

        const opt = { timeout : 1000 }
        try {
            const r1 = await fetch('https://reqres.in/api/users/2', opt)
            console.log(r1)
            const r2 = await r1.json()
            console.log(r2)
            const r3 = r2['data']
            console.log(r3)
        } catch (error) {
            console.log(error)
        }
    }
}

const aa = new AsyncAwaitDemo()
aa.demo2()