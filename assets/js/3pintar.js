function pintar(){
    ele = document.getElementById("ele1")
    ele.style.backgroundColor = 'yellow'
    }
    ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);

    // función modificada

    ele = document.getElementById("ele1")
    function pintar (){
        ele.style.backgroundColor = 'yellow'
    }
    ele.addEventListener("click", pintar);

    // función con color por defecto

    ele = document.getElementById("ele1")
    function pintar (color = 'green'){
        ele.style.backgroundColor = color
    }
    ele.addEventListener("click", function (){pintar('yellow' ) });


