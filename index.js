const MyPromise = require('./MyPromise')

// let promise = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success111')
//   }, 1000)
//   // console.log(a)
// })

// promise.then((value) => {
//   console.log('resolve:', value)
// }, (reason) => {
//   console.log('reject:', reason)
// })

// promise.then((value) => {
//   console.log('resolve1:', value)
// }, (reason) => {
//   console.log('reject1:', reason)
// })

// let promise1 = new MyPromise((resolve, reject) => {
//     resolve('promise1')
// })

// const promise2 = promise1.then((value) => {
//   return value + ' -> then -> promise2'
// })
// .then((value) => {
//   console.log('resolve:', value)
// }, (reason) => {
//   console.log('reject:', reason)
// })

// let promise1 = new MyPromise((resolve, reject) => {
//     resolve('promise1')
//     // reject('Error')
// })

// const promise2 = promise1.then((value) => {
//   return promise2
// }, (reason) => {
//   return reason
// })

// promise2.then((value) => {
//   console.log('resolve:', value)
// }, (reason) => {
//   console.log('reject:', reason)
// })

let promise1 = new MyPromise((resolve, reject) => {
  resolve('promise1')
  // reject('Error')
})

const promise2 = promise1.then((value) => {
  return new MyPromise((resolve, reject) => {
    setTimeout(() => {
      resolve(new MyPromise((resolve, reject) => {
        resolve(new MyPromise((resolve, reject) => {
          resolve(666)
        }))
      }))
      // reject()
    }, 2000)
  })
  // return new Error('error111')
  // return Promise.resolve(222)
  // return 333
}, (reason) => {
  return reason
})

promise2.then().then().then().then((value) => {
  throw Error('error')
}, (reason) => {
  console.log('reject:', reason)
}).catch((reason) => {
  console.log('catch:', reason)
})