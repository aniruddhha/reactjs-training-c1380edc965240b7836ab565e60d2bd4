class PromisesDemo {

    demo1() {
        const prm = new Promise((res, rej) => {
            setTimeout(() => res(`hey hi`), 1500)
        })

        const onFulfilled = dt => console.log(dt)
        const onRejected = err => console.log(err)

        prm.then(onFulfilled, onRejected)
    }

    demo2() {
        const prm = new Promise((res, rej) => {
            setTimeout(() => rej(`Serever Timeout`), 2500)
        })

        const onFulfilled = dt => {
            console.log('SUCCESS')
            console.log(dt)
        }
        const onRejected = err => {
            console.error('FAIL')
            console.error(err)
        }

        prm.then(onFulfilled, onRejected)
    }

    demo3() {
        const pr = new Promise((res, rej) => {
            setInterval(() => res(new Date()), 1500)
        })
        pr.then(dt => dt.toISOString().slice(0, 10), err => console.err(err))
            .then(str => str.split('-'), err => console.err(err))
            .then(arr => arr.map(el => Number.parseInt(el)), err => console.log(err))
            .then(nums => console.log(nums), err => console.log(err))
    }

    demo4() {
        const pr = new Promise((resfdsds, resfsj) => {
            setInterval(() => resfdsds(new Date()), 1500)
        })
        pr.then(dt => dt.toISOString().slice(0, 10))
            .then(str => str.split('-'))
            .then(arr => arr.map(el => Number.parseInt(el)))
            .then(nums => console.log(nums))
            .catch(err => console.log(err))
            .finally(() => console.log(`I will execute all the time`))
    }

    demo5() {
        const newFetch = (method, url) => new Promise((res, rej) => {
            const xhr = new XMLHttpRequest()
            xhr.open(method, url)
            xhr.setRequestHeader(`Content-Type`, `application/json`)
            xhr.setRequestHeader(`Accept`, `application/json`)
            xhr.onerror = () => rej({ status: xhr.status, response: xhr.statusText })
            xhr.onload = () => res({ status: xhr.status, response: xhr.response })

            xhr.send()
        })

        newFetch('GET', 'https://reqres.in/api/users/2')
            .then(res => console.log(res))
            .catch(err => console.log(err))
            .finally(() => { })
    }

    demo6() {

        const reqObj = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        fetch('https://reqres.in/api/users/2', reqObj)
            .then(res => res.json())
            .then(json => json['data'])
            .then(dt => console.log(dt))
            .catch(err => console.log(err))
            .finally(() => console.log('finally'))
    }
}

const pd = new PromisesDemo()
pd.demo6()