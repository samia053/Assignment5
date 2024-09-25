document.getElementById("first-btn").addEventListener("click",function(event){

    event.preventDefault();
    const addMoney = getInputFieldValuedById("first-input");
    //console.log(addMoney);
    const current = getTextFieldValueById("current-amount");
    //console.log(current);

        if(isNaN(addMoney) || addMoney<0){
            alert("enter valid amount");
            return;
        }
        if(current<addMoney){
            alert("you do not have enough money");
        }

        if( addMoney<=current){

            const updatedMoney = current-addMoney;
            console.log(updatedMoney);
            document.getElementById("current-amount").innerText =updatedMoney;
            const updatedDonation = getTextFieldValueById("donatedMoney1")+ addMoney;
            console.log(updatedDonation);
            document.getElementById("donatedMoney1").innerText=updatedDonation;


        //   modal

           // modal
           my_modal_3.showModal();

            // history
            const date = new Date();
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const p =document.createElement("p");
            p.innerText = `Donated  for Noakhali: ${addMoney} tk. at ${currentTime} , date ${date}`;
            console.log(p);

            document.getElementById("history").appendChild(p);


        }

  

            

            
        
        


})
























// document.getElementById("first-btn").addEventListener("click" , function(event){
//     const CurrentAmount =  document.getElementById("current-amount").innerText;
//     const currentMoney =parseFloat(CurrentAmount);
//     event.preventDefault;
//     const firstDonation =document.getElementById("first-input").value;
//     console.log(firstDonation);
//     const firstDonated1 = document.getElementById("donatedMoney1").innerText;
//     if(firstDonation<0 || currentMoney<firstDonation){
//         alert("neg number");
//         return;
//     }
//     else 
//     {
//         const Donation1 = parseFloat(firstDonation);
//         const updated = currentMoney - Donation1;
//         document.getElementById("current-amount").innerText =updated;
//         const firstValue = parseFloat(firstDonated1);
//         const newUpdated = firstValue+ Donation1;
//         document.getElementById("donatedMoney1").innerText =newUpdated;
        

//     }

    



   

//     // document.getElementById("current-amount").innerText = updatedMoney;
//     // const Noakhali = document.getElementById("donatedMoney1").innerText;
    
//     // const x= Noakhali+firstDonation;
//     // document.getElementById("donatedMoney1").innerText =x;

    

// })