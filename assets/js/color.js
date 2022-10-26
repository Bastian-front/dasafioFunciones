let color = '';
document.addEventListener('keydown', function (e){

    if (e.key === 'a') {
        color = 'green';
        } else if (e.key === 's') {
        color = 'yellow'
        }
        else if (e.key === 'd') {
            color = 'brown';
            }
            else if (e.key === 'f') {
                color = 'blue';
                }
                else{
                    color = 'coral';
                }
        })
        
const c1 = document.getElementById("caja1")
const c2 = document.getElementById("caja2")
const c3 = document.getElementById("caja3")
const c4 = document.getElementById("caja4")

c1.addEventListener("click", () => c1.style.backgroundColor = color)
c2.addEventListener("click", () => c2.style.backgroundColor = color)
c3.addEventListener("click", () => c3.style.backgroundColor = color)
c4.addEventListener("click", () => c4.style.backgroundColor = color)
    

