function makeBuffer(){
    var text = '';

    return {
        print : function(){
            return text;
        },
        add : function(newText){
            text = text.concat(newText);
        },
        clear : function(){
            text = '';
        }
    };
}

var buffer = makeBuffer();
console.log(buffer.print());
buffer.add( 'JavaScript');
buffer.add( 'Вчити');
buffer.add( 'Потрібно!');
console.log(buffer.print());
buffer.add(0);
buffer.add(1);
buffer.add(0);
console.log(buffer.print());
console.log('-------------------------------');
buffer.add("Тест");
buffer.add("тебе не з'їсть");
console.log(buffer.print()); // Тест тебе не з'їсть
console.log('------------clear--------------');
buffer.clear();
console.log(buffer.print()); // ""