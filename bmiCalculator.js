formBMI = document.getElementById('frBmi')
res = document.getElementById('divResult')

formBMI.addEventListener('submit',function(e){
    e.preventDefault();
    
    ht = parseFloat(document.getElementById('inpHeight').value);
    wt = parseFloat(document.getElementById('inpWeight').value);
    
    if(ht == '' || ht <= 0 || isNaN(ht))
    {
        res.innerHTML = "<span>Please provide valid height</span>"
    }
    else if(wt == '' || wt <= 0 || isNaN(wt))
        {
            res.innerHTML = "<span>Please provide valid weight</span>"
        }    
    else
    {        
        resultBMI = (wt/(ht*ht)).toFixed(2)
        res.innerHTML = `<h3>BMI=</h3> ${resultBMI}`
    }
});
