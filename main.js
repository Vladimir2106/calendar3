
// вывод года в заголовке
const data1= new Date()
const data2=data1.toLocaleString('default', {year:"numeric", month: 'long' })
const year=document.querySelectorAll('.month div')[1];
year.innerText=data2


//календарь дать - июль первый день месяца 
const perviy = new Date(data1)
perviy.setDate(1)
let s=perviy.getDate();
//let a=perviy.getDay(1)
console.log(s)

//последний день месяца
const last = new Date(perviy)
last.setMonth(last.getMonth()+1)
//last.getDate(0)
//let b=last.getDay()
console.log(last)

//предыдущий месяц
const previous = new Date(perviy) 
previous.setMonth(previous.getMonth()-1)
let previousday=previous.getDate()+26;
//let p=previousday.getDate();
console.log(previousday)

//ли в документе
const day=document.querySelector('.days')
const day1=day.querySelectorAll('li')


function July(){
for (let i=11; i<=day1.length; i++){
    day1[i].innerText=s
    s++
    if(i===41){
        break
    }
}
}
July();


function June(){
    for (let i=7; i<=day1.length; i++){
        day1[i].innerText=previousday
        previousday++;
        if(i===10){
            break
        }
    }
}
June()