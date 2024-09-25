document.getElementById("second-btn").addEventListener("click",function(event){
    
    event.preventDefault();
    const addMoney2 = getInputFieldValuedById("second-input");
    console.log(addMoney2);
    const current2 = getTextFieldValueById("current-amount");
    console.log(current2);
    
        if(isNaN(addMoney2) || addMoney2<0){
            alert("enter valid amount");
            return;
        }
        if(current2<addMoney2){
            alert("you do not have enough money");
        }

        if( addMoney2 <= current2){

            const updatedMoney2 = current2-addMoney2;
            console.log(updatedMoney2);
            document.getElementById("current-amount").innerText =updatedMoney2;
            const updatedDonation2 = getTextFieldValueById("donatedMoney2")+ addMoney2;
            console.log(updatedDonation2);
            document.getElementById("donatedMoney2").innerText=updatedDonation2;
            // modal
             my_modal_1.showModal();


            

            // history
            const date = new Date();
            const currentTime2 = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const p =document.createElement("p");
            p.innerText = `Donated  for Feni: ${addMoney2} tk. at ${currentTime2} ,date: ${date}`;
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