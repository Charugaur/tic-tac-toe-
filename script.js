let btn=document.querySelectorAll('#box');
let turnX=true;
let msg=document.querySelector('.msg-container');

btn.forEach((box)=> {
    box.addEventListener('click',()=>{
       if(turnX){
        box.innerText='X';
        turnX=false;
       }
       else{
        box.innerText='O'
        turnX=true;
       }
       box.disabled=true;
       checkwin();
    });
});

const showWinner=(winner)=>{
    msg.classList.remove('hide');

    }

const winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],];

const checkwin=()=>{
    for(let pattern of winpattern)
    {
        let pos1=btn[pattern[0]].innerText;
        let pos2=btn[pattern[1]].innerText;
        let pos3=btn[pattern[2]].innerText;

        if(pos1!=''&& pos2!=''&& pos3!=''){
            if(pos1==pos2 && pos2==pos3){
                console.log('winner',pos1);
                showWinner(pos1);
            }
        }
    } 
}
let newgame=document.querySelector('#newgame');
newgame.onclick=()=>{
    location.reload();
}
let restart=document.querySelector('.restart');
restart.onclick=()=>{
    location.reload();
}
