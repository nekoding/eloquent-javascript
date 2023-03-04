const call1 = () => {
    console.log("call1")
}

const call2 = () => {
    call1()
    console.log("call2")
}

const call3 = () => {
    call2()
    console.log("call3")
}

const call4 = () => {
    call3()
    console.log("call4")
}

call1() // 1
call2() // 1 -> 2
call3() // 1 -> 2 -> 3
call4() // 1 -> 2 -> 3 -> 4

const callAll = () => {
    call1()
    call2()
    call3()
    call4()
    console.log("callAll")
}

callAll()

// experimen error call stack

const panggil1 = () => {
    panggil2()
    console.log("panggil1")
}

const panggil2 = () => {
    panggil1()
    console.log("panggil2")
}

// panggil1() -> error Maximum call stack size exceeded