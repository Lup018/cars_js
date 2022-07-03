let boton = document.querySelector('#boton');
boton.addEventListener("click", (e) =>{  
    let color = document.getElementById('colores').value;
    let precio = document.getElementById('precio').value;
    let cantidad = document.getElementById('cantidad').value;
    let total = document.getElementById('total');    
    total.innerHTML = precio * cantidad;
    let cantidadLaptop = document.getElementById('cantidadLaptop');
    cantidadLaptop.innerHTML = cantidad;
    let circle = document.getElementById('circle');
    circle.style.backgroundColor = color;
})