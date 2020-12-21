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
	var elements = divMaximum.querySelectorAll('li>a');
	for(var i = 0; i < elements.length; i++){
		var link = elements[i].innerHTML.toString();
		if(!link.includes('http://internal.com')&&(link.includes(`http://`)||link.includes(`ftp://`))){
			elements[i].className = 'external-red';
		}
	}
}