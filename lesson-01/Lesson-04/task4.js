function alert(array){
    console.log(array);
    console.log('-----------------------------');
}
//minimum
var array = [45, -12, 7, 56, -84, 42, -6, 0, 18, 37, 0, -67, 5, 76, 9, -43, 20, -5, 79, -80, 3, 61];
function sortNumbers(number1, number2){
    return number1 - number2;
}
//1.
//a.
var sortedArray = array.sort(sortNumbers)
alert(sortedArray);

//b.
var reverseArray = array.reverse()
alert(reverseArray);

//2.
//numbers >= 0
function positiveNumber(number){
    return number >= 0;
}
var positiveArray = array.filter(positiveNumber);
alert(positiveArray);

//numbers < 0
function negativeNumber(number){
    return number < 0;
}
var negativeArray = array.filter(negativeNumber);
alert(negativeArray);

//maximum
//3.
var students = [
    {yearOfStuding : 3, facultyName : 'faculty_1'},
    {yearOfStuding : 5, facultyName : 'faculty_3'},
    {yearOfStuding : 1, facultyName : 'faculty_2'},
    {yearOfStuding : 4, facultyName : 'faculty_5'},
    {yearOfStuding : 3, facultyName : 'faculty_2'},
    {yearOfStuding : 4, facultyName : 'faculty_1'},
    {yearOfStuding : 1, facultyName : 'faculty_4'},
    {yearOfStuding : 2, facultyName : 'faculty_5'},
    {yearOfStuding : 1, facultyName : 'faculty_4'},
    {yearOfStuding : 3, facultyName : 'faculty_3'},
];
//a.
facultyNames = [];
function addFacultyNames(faculty){
    facultyNames.push(faculty.facultyName);
}
students.forEach(addFacultyNames);
alert(facultyNames);

//b.
function sumYearsOfStuding(sumOfAges, obj){
    return sumOfAges + obj.yearOfStuding;
}
var ageSum = students.reduce(sumYearsOfStuding, 0);
alert(ageSum);