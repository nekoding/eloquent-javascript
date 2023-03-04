function factorialRecursion(angka) {
    if (angka == 0) {
        return 1;
    }
    
    return angka * factorialRecursion(angka - 1)
}

console.log(factorialRecursion(5))
console.log(factorialRecursion(7))