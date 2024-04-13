const capacity = 20;
    let counter = 0;

    let inButton=document.getElementById("inButton");
    let outButton=document.getElementById("outButton");
    let counterSpan =document.getElementById("counter");

    counterSpan.style.color="red";
    counterSpan.innerText =counter;

    function update(){
        counterSpan.innerText=counter;
    }

    function increment(){
        let val=parseInt(document.getElementById("inn").value);
        if(isNaN(val)){
            alert("INPUT SOME VALUE !!!");   
            }
        else if(counter+val <= capacity){
            counter=counter+val;
            update();
        }
        else{
            console.log(val);
            alert("Club is full "+(capacity-counter)+" capacity left");
        }
    }

    /*function Decrement(){
        counter=counter-1;
    }*/

    inButton.addEventListener("click", increment);//old method

    outButton.addEventListener("click", () => {//new method after version ES6
        let val=parseInt(document.getElementById("out").value);
        if(isNaN(val)){
            alert("INPUT SOME VALUE !!!")   
            }
        else if(counter > 0+val-1){
            counter=counter-val;
            update();
        }
        else{
            alert("Club is empty "+(counter)+" space occupied");
        }
    });