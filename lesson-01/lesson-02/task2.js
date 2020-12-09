//minimum
// 1.
var user = {};

user.name = 'Pylyp';
user.surname  = 'Shevchenko';
console.log(user);

user.name = 'Sergiy'
console.log(user);

delete user.name;
console.log(user);
console.log();

//2.
var employeeSalaries = {
    'employee1' : 20000,
    'employee2' : 15000,
    'employee3' : 10000,
    'employee4' : 25000,
    'employee5' : 20000,
    'employee6' : 30000
};

var sumSalary = 0;
for (var salary in employeeSalaries){
    sumSalary += employeeSalaries[salary];
}
console.log('The amount of salaries = ' + sumSalary);
console.log();

//maximum
//3.
function calc(x, y, action){
    var res;
    try{
        if (action==='*'){
            res = x * y;
        } else if (action==='/'){
            res = x / y;
        }else if (action==='+'){
            res = x + y;
        }else if (action==='-'){
            res = x - y;
        } else {
            throw new Error();
        }
        if (!res || x == null || y == null){
            throw new Error();
        }
        console.log(x + ' ' + action + ' ' + y + ' = '+ res);
    } catch (err){
        console.log('Error! Not correct input data');
    }
}

calc(12, 4, '*');
calc(12, 4, '/');
calc(12, 4, '+');
calc(12, 4, '-');
calc(12, 0, '/');
calc(12, 4, NaN);
calc(12, 4, undefined);
calc(12, 4, null);
calc(NaN, 4, '+');
calc(undefined, 4, '+');
calc(null, 4, '+');
calc(null, 4, '*');
calc(4, null, '/');