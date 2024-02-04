let btn=document.querySelectorAll(".box");

let heading=document.querySelector("h1");

let rBtn=document.querySelector(".reset");


let turnO=false;
let turnX=true;

//console.log(btn);
// let count=0;

btn.forEach((b) => {
    


b.addEventListener("click", () => {
   
    if(turnO===true)
    {

        
        b.innerText="O";
        b.classList.add("o");
        turnX=true;
        turnO=false;
        
        
    }

    else{
        b.innerText="X";
        b.classList.add("x");
        turnO=true;
        turnX=false;
       
    }
  
    b.disabled=true;
    let r=checkWinner();
   
    
   
})


})

let d=[0,1,2,3,4,5,6,7,8];

let matchingItems=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]

];

const isDraw=(r) => {
    let count=0;
    if(r!=true){
    for(let i of d)
    {
        if(btn[i].innerText!="")
        {
            count++;
        }
        
    }
    if(count==9)
    draw();
    }
};

const buttonDisable= () =>{
    for(let i of btn)
    {
        i.disabled=true;
    }
};
const resetGame=() => {
    for(let but of btn)
    {
        but.disabled=false;
        but.innerText="";
        turnO=false;
        turnX=true;
    }
};


const draw=() => {
    let msg=document.createElement("h4");
    msg.innerText=`GAME DRAW`;
    //console.log(msg);
    let newBtn=document.createElement("button");
    newBtn.classList.add("reset");
    newBtn.innerText="New Game";
    heading.append(msg);
    heading.append(newBtn);
    newBtn.addEventListener("click" , () => {
        msg.remove();
        resetGame();
        newBtn.remove();
    })
    buttonDisable();
}




const showWinner=(pos1Val) => {
    let msg=document.createElement("h4");
    msg.innerText=`WINNER IS ${pos1Val}`;
    let newBtn=document.createElement("button");
    newBtn.classList.add("reset");
    newBtn.innerText="New Game";
    heading.append(msg);
    heading.append(newBtn);
    newBtn.addEventListener("click" , () => {
        msg.remove();
        resetGame();
        newBtn.remove();
    })
    buttonDisable();
    return true;
    
}

rBtn.addEventListener("click" , () => {
    resetGame();
})





//let flag=0,count=0;
const checkWinner = () => {
    let r,flag=0;
    for(let items of matchingItems)
    {
        let pos1Val=btn[items[0]].innerText;
        let pos2Val=btn[items[1]].innerText;
        let pos3Val=btn[items[2]].innerText;
      // count++;
     if(pos1Val!="" && pos2Val!="" && pos3Val!="") 
     {
        if(pos1Val===pos2Val && pos2Val===pos3Val)
        {
           let r= showWinner(pos1Val);
           flag=1;
        
        }
       
       
       
        
     }
     
   
    }
    if(r!=true && flag==0)
    isDraw(r);


    
 
  

};