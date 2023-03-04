// Exercises pg 37

const height = 8
let template = '';

for(let i = 0; i < height; i++) {
    for (j = 0; j < i; j++) {
        template += "#"
    }

    template += "\n"
}

console.log(template)