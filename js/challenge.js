document.addEventListener("DOMContentLoaded", (event) => {
    
    let counter = document.getElementById("counter");

    let plus = document.getElementById("plus")
    plus.addEventListener("click", addOne)

    let minus = document.getElementById("minus")
    minus.addEventListener("click", minusOne)

    let heart = document.getElementById("heart");
    
    let number = 0;
    let time = setInterval(timer, 1000)
    
    let stop = document.getElementById("pause")
    stop.addEventListener("click", pause)

    function pause() {
        clearTimeout(time);
        stop.innerHTML = "resume";
    }
    

    function addOne() {
        counter.innerHTML = number += 1;
    }

    function minusOne() {
        counter.innerHTML = number -= 1;
    }


    function timer() {
        counter.innerHTML = number++;
    }

    let form = document.getElementById("comment-form")
    form.addEventListener("submit", (event) => {
        document.getElementById('list').innerHTML += `<li>${comment-input.value}</li>`
        event.preventDefault();
    })
    
    
});

