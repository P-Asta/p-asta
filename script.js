document.addEventListener("scroll",(e) => {
    if (scrollY < 429){
        document.querySelector("#index").style.transform = `translateY(${scrollY}px)`;
    }
    if (scrollY > 600){
        document.querySelector("#favlangs > .fx").style.gap = `${50000/scrollY}px`;
    }

    show_lang(-200, ".title-1");
    show_lang(0, "#favlangs > .fx");
})


function show_lang(y, q){
    var e = document.querySelector(q)
    if (scrollY > 700 + y && scrollY < 2100){
        e.style.transform = `translateY(${scrollY-300}px)`;
        e.style.animationFillMode = `forwards`;
        e.style.animationName = `hello`;
        e.style.animationDuration = `.2s`;
        
        e.style.opacity = `1`;
        e.style.transition = "all 0s"
        e.style.transform = `0`
    }else{
        e.style.transition = "all .2s"
        e.style.animationName = ``;
        setTimeout(() => {
            e.style.opacity = `0`;
        }, 0);
    }
}

if (screen.width < 1200){
    location.href = "none.html"
}