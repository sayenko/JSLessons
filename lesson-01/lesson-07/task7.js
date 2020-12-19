function fillTheText(){
    var elements = document.getElementById('minimum').querySelectorAll('ul>li');
    for(var i = 0; i < elements.length; i++){
        var currentElement = elements[i];
        console.log(currentElement.innerHTML);
        currentElement.innerHTML = 'new value ' + (i + 1) ;
    }
    var total = document.getElementById('total-amount');
    total.innerHTML = total.innerHTML + elements.length;
}

function isExternalLinks(){
    var divMaximum = document.getElementById('maximum');

    var links = divMaximum.querySelectorAll('ul>li');
    for(var i = 0; i < links.length; i++){
        var element = links[i].innerHTML.toString();
        if(!element.includes('http://internal.com')&&(element.includes(`http://`)||element.includes(`ftp://`))){
            // links[i].style.background = 'red';
            link = ' class="external-red"';
            linkLength = link.length;
            element = [element.slice(0, 2), link, element.slice(2)].join('');
            links[i].innerHTML = element;
        }
    }
}