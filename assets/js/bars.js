// const nuevoDoc= document.getElementById('downloadBtn');
// nuevoDoc.addEventListener('click', e=>{
    
//     let windowShow= document.createElement('div');
//     let areaShow= document.getElementById('main');
    
//     windowShow.id="showPdf"
//     windowShow.classList.add('block__window')
//     windowShow.innerHTML=`
//     <div class="block__pdf" ></div>
//     `
   
//     areaShow.append(windowShow)
//     if(windowShow){
//         windowShow.addEventListener('click',e=>{
//             console.log(e.target)
//             let ver= document.getElementById('showPdf')
//             ver.remove(windowShow)
//         })
//     }
    

// })
const openElem= document.getElementById('btnCV');
const openmodal= document.getElementById('body');

openElem.addEventListener('click',()=>{
    const elemWindow= document.createElement('div');
    elemWindow.id= `block__window`;
    elemWindow.classList.add('block__window');
    elemWindow.innerHTML=`
    <div class="block__pdf container" >
    <iframe src="./assets/img/Francisco-cv.pdf" width="100%" height="100%">
    </div>
    `
    openmodal.append(elemWindow);
    if(elemWindow){
        elemWindow.addEventListener('click',()=>{
            elemWindow.remove(elemWindow);
        })
    }
})

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