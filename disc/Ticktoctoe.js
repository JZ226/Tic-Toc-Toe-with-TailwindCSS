let Boxes = document.querySelectorAll('.box');
let Message = document.querySelector('.Msg');
let Winmsg = document.querySelector('.Msgcontainer');
let Reset = document.querySelector('.reset');
let turnO=true;
let count = 0;
const winpattren =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const Drawfunc = () =>{
    Message.innerText='The Game Is Draw there is no winner in this Game!!! RESET TO PLAY AGAIN';
    Winmsg.classList.remove('hidden');
    Disablefunc();
};
Boxes.forEach(box=>{
    box.addEventListener('click',()=>{
        count++;
        if(count===9){
            Drawfunc();
        }
       else if(turnO){
        box.style.color='green';
            box.innerText='o';
             turnO = false;
        }
        else{
            box.innerText='X';
            turnO = true;
        }
        box.disabled = true;
        checkwining();
    });
});
const resetfunc = () => {
    count=0;
    turnO=true;
    Enablefunc();
    Winmsg.classList.add('hidden');
};
const Enablefunc = () =>{
    for(let box of Boxes){
        box.disabled = false;
        box.innerHTML=" ";
    }
};
const Disablefunc = () =>{
    for(let box of Boxes){
        box.disabled = true;
    }
};
const showwinner = (pos1) =>{
    Message.innerText=`Congratulations the winner is ${pos1}`;
    Winmsg.classList.remove("hidden");
    Disablefunc();
    };
const checkwining = () =>{
    for(let pattren of winpattren){
        let pos1=Boxes[pattren[0]].innerText;
        let pos2=Boxes[pattren[1]].innerText;
        let pos3=Boxes[pattren[2]].innerText;
        if(pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                showwinner(pos1);
            }
        }
    }
};
Reset.addEventListener('click',resetfunc);