

// setTimeout(function(){
//     document.querySelector('.container').style.
// },1000)



var item = document.querySelectorAll('.item')

for(var i=0;i<item.length;i++){
    var number = item[i].getAttribute('number')  

    number = parseInt(number)
    counter(item[i],number)
}



function counter(item,number){
    setInterval(function(){
      
            item.innerText = step
    },100)
}