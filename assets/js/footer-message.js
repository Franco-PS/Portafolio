const buttonScroll= document.getElementById('alerWhatsApp')
buttonScroll.addEventListener('click',()=>{
    let aler= document.createElement('div');
    aler.classList.add('alertaWhat')
    aler.innerHTML=`
    <strong>¡Hola!</strong> Por buenas prácticas no se 
    recomienda poner números telefónicos, ni correo en 
    texto plano le sujerimos ocupar los otros medios 
    que se muestran en contacto.
    `
    let contac= document.getElementById('contact');
    contac.append(aler);
    setTimeout(()=> aler.remove(),6000);
})