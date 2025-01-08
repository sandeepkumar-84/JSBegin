const buttons1 = document.querySelectorAll('span')
        const body1 = document.querySelector('body')
        
        buttons1.forEach(function(button){
        button.addEventListener('click',function(e){                
        if(e.target.id === 'grey')
        body1.style.backgroundColor = e.target.id
        if(e.target.id === 'blue')
        body1.style.backgroundColor = e.target.id 
        if(e.target.id === 'red')
        body1.style.backgroundColor = e.target.id
        if(e.target.id === 'yellow')
        body1.style.backgroundColor = e.target.id             
    });
});  