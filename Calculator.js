let string='';
let buttons=document.querySelectorAll(".button")
Array.from(buttons).forEach((button)=>{

button.addEventListener('click',(e)=>{//Arrow Function
    if(e.target.innerHTML == "="){// evaluate answers

        string=eval(string);

        if(document.querySelector('input').value=="undefined"){//  undefined changes to zero
        string="0";
        document.querySelector('input').value=string;
        }

        document.querySelector('input').value=string;
        string="";

    }else if(e.target.innerHTML == "C"){//clear screen

        string="";
        document.querySelector('input').value=string;

    }else if(e.target.innerHTML == "DE"){ // deletes one last digit

        string=string.slice(0,-1);
        document.querySelector('input').value=string;
    
    }else{//display data on screen
  
        string = string+e.target.innerHTML;
        document.querySelector('input').value=string;
    }
        })
})



