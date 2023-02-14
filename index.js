const text = document.getElementById('text');
let isClicked = true;
document.getElementById('bold').addEventListener('click', function(event){
    if(isClicked){
        text.style.fontWeight = 'bold';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.fontWeight = 'normal';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});

document.getElementById('italic').addEventListener('click', function(event){
    if(isClicked){
        text.style.fontStyle = 'italic';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.fontStyle = 'normal';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});


document.getElementById('underline').addEventListener('click', function(event){
    if(isClicked){
        text.style.textDecoration = 'underline';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.textDecoration = 'none';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});



document.getElementById('left').addEventListener('click', function(event){ 
     if(isClicked){
         text.style.textAlign = 'left';
         event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
         isClicked = false;
     }else{
         text.style.textAlign = '';
         event.target.style.backgroundColor = 'transparent';
         isClicked = true;
     }
});


document.getElementById('center').addEventListener('click', function(event){
    if(isClicked){
        text.style.textAlign = 'center';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.textAlign = '';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});


document.getElementById('right').addEventListener('click', function(event){
    if(isClicked){
        text.style.textAlign = 'right';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.textAlign = '';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});


document.getElementById('justify').addEventListener('click', function(event){
    if(isClicked){
        text.style.textAlign = 'justify';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.textAlign = '';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});


let fontSize = document.getElementById('font-size');
fontSize.addEventListener('click', function(){
    const number = fontSize.value;
    text.style.fontSize = number+'px';
});
fontSize.addEventListener('keyup', function(){
    const number = fontSize.value;
    text.style.fontSize = number+'px';
});

document.getElementById('capital').addEventListener('click', function(event){
    if(isClicked){
        text.style.textTransform = 'uppercase';
        event.target.style.backgroundColor = 'rgba(128, 128, 128, 0.194)';
        isClicked = false;
    }else{
        text.style.textTransform = 'none';
        event.target.style.backgroundColor = 'transparent';
        isClicked = true;
    }
});


document.getElementById('color').addEventListener('change', function(event){
    const color = event.target.value;
    text.style.color = color;
});