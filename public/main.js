var list=[7350,13230,12348,15876,19683,16807,16348,15625,26460]
let randomNum=list[Math.floor(Math.random()*list.length)]
document.querySelector('#num').innerText=randomNum

document.querySelector('#arw2').addEventListener('click',two)
document.querySelector('#arw3').addEventListener('click',three)
document.querySelector('#arw5').addEventListener('click',five)
document.querySelector('#arw7').addEventListener('click',seven)

function two(){
    randomNum/2==Math.floor(randomNum/2)?randomNum=randomNum/2:randomNum=randomNum*2;
    document.querySelector('#num').innerText=randomNum
    if(randomNum==1){alert('NOT BAD')}
}

function three(){
    randomNum/3==Math.floor(randomNum/3)?randomNum=randomNum/3:randomNum=randomNum*3;
    document.querySelector('#num').innerText=randomNum
    if(randomNum==1){alert('NOT BAD')}
}

function five(){
    randomNum/5==Math.floor(randomNum/5)?randomNum=randomNum/5:randomNum=randomNum*5;
    document.querySelector('#num').innerText=randomNum
    if(randomNum==1){alert('NOT BAD')}
}

function seven(){
    randomNum/7==Math.floor(randomNum/7)?randomNum=randomNum/7:randomNum=randomNum*7;
    document.querySelector('#num').innerText=randomNum
    if(randomNum==1){alert('NOT BAD')}  
}

