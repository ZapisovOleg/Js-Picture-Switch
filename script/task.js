const elements = document.querySelectorAll('.main-item .items');
for(i=0;i<elements.length;i++){
    elements[i].addEventListener('click',funcItem);
}


function funcItem(){
    this.classList.toggle('items-hidden');
}


