let intro = document.querySelector(".intro")
let logo = document.querySelector(".logo-header")
let logoSpan = document.querySelectorAll(".logo")

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, 400)

        })

        setTimeout(() => {
            logoSpan.forEach((span, idx)=>{

                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, 200);

            })
        }, 2000);

        setTimeout(() => {
            intro.style.opacity = '0'
        }, 1500);

        setTimeout(() => {
            intro.style.display = 'none'
        }, 2400);

    })

})