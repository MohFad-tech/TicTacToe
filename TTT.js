var reset=document.querySelector('#b');

var square=document.querySelectorAll('td');

function clear(){
    for(var i=0;i<square.length;i++){
        square[i].textContent='';
    }
}

reset.addEventListener('click',clear);

var oneone=document.querySelector('#oneOne');
var onetwo=document.querySelector('#oneTwo');
var onethree=document.querySelector('#oneThree');
var twoone=document.querySelector('#twoOne');
var twotwo=document.querySelector('#twoTwo');
var twothree=document.querySelector('#twoThree');
var threeone=document.querySelector('#threeOne');
var threetwo=document.querySelector('#threeTwo');
var threethree=document.querySelector('#threeThree');

oneone.addEventListener('click',function(){
    oneone.textContent='X';
})
oneone.addEventListener('dblclick',function(){
    oneone.textContent='O';
})
onetwo.addEventListener('click',function(){
    onetwo.textContent='X';
})
onetwo.addEventListener('dblclick',function(){
    onetwo.textContent='O';
})
onethree.addEventListener('click',function(){
    onethree.textContent='X';
})
onethree.addEventListener('dblclick',function(){
    onethree.textContent='O';
})
twoone.addEventListener('click',function(){
    twoone.textContent='X';
})
twoone.addEventListener('dblclick',function(){
    twoone.textContent='O';
})
twotwo.addEventListener('click',function(){
    twotwo.textContent='X';
})
twotwo.addEventListener('dblclick',function(){
    twotwo.textContent='O';
})
twothree.addEventListener('click',function(){
    twothree.textContent='X';
})
twothree.addEventListener('dblclick',function(){
    twothree.textContent='O';
})
threeone.addEventListener('click',function(){
    threeone.textContent='X';
})
threeone.addEventListener('dblclick',function(){
    threeone.textContent='O';
})
threetwo.addEventListener('click',function(){
    threeone.textContent='X';
})
threetwo.addEventListener('dblclick',function(){
    threetwo.textContent='O';
})
threethree.addEventListener('click',function(){
    threethree.textContent='X';
})
threethree.addEventListener('dblclick',function(){
    threethree.textContent='O';
})


