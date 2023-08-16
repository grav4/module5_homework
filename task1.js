let x = prompt('Введите значение:');
x = +x;
let y = Boolean(x);
let z = x%2;
if(y === true){
   if(z ===0){
       alert('Четное число');
   }
   else alert('Нечетное число');
}
else if(y === false){
   alert('Упс,кажется, вы ошиблись.');
}  //2nd task