
document.getElementsByTagName("div")[0].addEventListener('click', function(){
    alert("Hola! Soy el div");
});
document.getElementsByTagName("button")[0].addEventListener('click',function(){
    alert("Hola!");
    event.stopImmediatePropagation();;
})

