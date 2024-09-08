var imgfeature = document.querySelector('.img-feature')
var list_image = document.querySelectorAll('.list-image img')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

var current = 0 ;
function aaa(index){
    document.querySelectorAll('.list-image div').forEach(v =>{
        v.classList.remove('active')
    })
    
        current = index ;
        imgfeature.src = list_image[index].getAttribute('src')
        list_image[index].parentElement.classList.add('active') 
 console.log(index)
}


list_image.forEach((imgelenment , index)=>{
    imgelenment.addEventListener('click', e=>{
        aaa(index)
    })
})

prev.addEventListener('click',e =>{
    if(current == 0){
        current = list_image.length-1   
    }
    else{
    current--
    }
    aaa(current)
})
next.addEventListener('click' ,e =>{
    if(current===list_image.length-1){
        current = 0;
    }
    else{
        current++
    }
    aaa(current)
})



