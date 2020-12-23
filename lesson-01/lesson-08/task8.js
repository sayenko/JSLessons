clearTheText.onclick = function (){
    comeText.style.display = 'none';
}

hideTheButton.onclick = function (){
    hideTheButton.style.display = 'none';
}
heading.onclick = function (){
    var hideDepartments = document.getElementById('menu').querySelectorAll('ul>li');
    for(var i = 0; i < hideDepartments.length; i++){
        if(!hideDepartments[i].style.display.includes('none')){
            hideDepartments[i].style.display = 'none';
        } else {
            hideDepartments[i].style.display = '';
        }
    }
}