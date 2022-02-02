/* delta = b² - 4.a.c */

function calculate() {
    let a = document.getElementById('coeficiente-a').value
    let b = document.getElementById('coeficiente-b').value
    let c = document.getElementById('coeficiente-c').value
    let resultX1 = document.getElementById('x1')
    let resultX2 = document.getElementById('x2')

    console.log(a)
    console.log(b)
    console.log(c)


    let delta = Math.pow((b), 2) - 4 * (a) * (c)

    if (delta > 0) {
        let x1 = (-(b) + Math.sqrt(delta, 2)) / (2 * a)
        let x2 = (-(b) - Math.sqrt(delta, 2)) / (2 * a)

        resultX1.innerHTML = x1.toFixed(2)
        resultX2.innerHTML = x2.toFixed(2)
    }

    if (delta < 0) {
        resultX1.innerHTML = "ERROR"
        resultX2.innerHTML = "ERROR"
    }

    if (delta === 0) {
        let x1 = -(b) / (2 * a)
        let x2 = -(b) / (2 * a)

        resultX1.innerHTML = x1.toFixed(2)
        resultX2.innerHTML = x2.toFixed(2)
        document.querySelector(".x2").classList.toggle("x2-none");
    }



    console.log(x1)
    console.log(x2)


}

/* let delta = Math.pow(b,2) - 4*a*c
let x1 = (-b + Math.sqrt(delta,2)) / (2*a)

console.log(x1) */