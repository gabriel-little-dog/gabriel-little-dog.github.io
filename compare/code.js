document.getElementById("btn").addEventListener("click", onclick)
function onclick () {
    let f = document.getElementById("first").valueAsNumber
    let s = document.getElementById("second").valueAsNumber
    let t = document.getElementById("third").valueAsNumber
    if (f >= s && f>=t) {
        results = f
    } else if (s>=f && s>=t) {
        results = s
    } else {results = t}
    document.getElementById("result").innerHTML = "The Max is " + results

}