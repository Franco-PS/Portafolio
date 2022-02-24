const openElem= document.getElementById('btnCV');
const openmodal= document.getElementById('body');

openElem.addEventListener('click',()=>{
    const elemWindow= document.createElement('div');
    elemWindow.id= `block__window`;
    elemWindow.classList.add('block__window');
    elemWindow.innerHTML=`
    <div class="block__pdf container" >
    <iframe src="./assets/img/franciscocv.pdf" width="100%" height="100%">
    </div>
    `
    openmodal.append(elemWindow);
    if(elemWindow){
        elemWindow.addEventListener('click',()=>{
            elemWindow.remove(elemWindow);
        })
    }
})