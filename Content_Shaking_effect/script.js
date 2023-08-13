document.addEventListener("mousemove", function(details){
    document.querySelectorAll(".img").forEach((elem) => {
        const position = elem.getAttribute("value");
        var x = (window.innerWidth - details.clientX*position)/50;
        var y = (window.innerHeight - details.clientY*position)/50;

        elem.style.transform = `translateX(${x}px) translateY(${y}px)`

    })
})