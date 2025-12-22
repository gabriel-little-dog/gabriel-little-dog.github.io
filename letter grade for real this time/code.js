document.getElementById("btn").addEventListener("click", onclick)
function onclick () {
    let n = document.getElementById("number").valueAsNumber
    if (n >= 97) {
        results = "A+"
    } else if(n >= 93 && n <= 96)
        results = "A"
        else if(n >=90 && n <= 92)
            results = "A-"
            else if (n >= 87 && n <= 89)
                results = "B+"
                else if(n>=83 && n<=86)
                    results = "B"
                    else if(n>=80 && n<=82)
                        results = "B-"
                        else if(n>=77 && n<=79)
                            results = "C+"
                            else if(n>=73 && n<=76)
                                results = "C"
                                else if(n>=70 && n<=72)
                                    results = "C-"
                                    else if(n>=67 && n<=69)
                                        results = "D+"
                                        else if(n>=63 && n<= 66)
                                            results = "D"
                                            else if(n>=60 && n<=62)
                                                results = "D-"
                                                else if(n<=59)
                                                    results = "failing :/"
    document.getElementById("result").innerHTML = "Your grade is  " + results

}