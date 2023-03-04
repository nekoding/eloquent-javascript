const hitung = (callback, ...angka) => {
    return callback(angka)
}

const penjumlahan = hitung((items) => {
    let tmp = 0;
    
    items.forEach(element => {
        tmp += element
    });

    return tmp
}, 1,2,3,4,5)

const perkalian = hitung((items) => {
    return items.reduce(function (carry, item) {
        return carry * item
    })
}, 1,2,3,4,5)

console.log(penjumlahan);
console.log(perkalian)


const perkenalan = name => `Halo, namaku ${name}\n`

const absenBangWindah = (callback, ...names) => {

    // karena disini nerima 2 param maka di `callback` juga harus nerima 2 param
    let res = callback(perkenalan, names)
    
    console.log(...res)
}

absenBangWindah((callback, items) => items.map(callback) ,"eko", "alif", "putra")

const multiplier = (val) => {
    return (res) => res * val
}

const quad = multiplier(4)  

console.log(quad) // quad = anonymous function dari (res) => res * val
console.log(quad(5)) // 5 * 4