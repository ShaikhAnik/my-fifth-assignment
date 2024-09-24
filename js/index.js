
 document.getElementById('btn-add-donate').addEventListener('click',function(){
        const addDonation = getInputFieldValueById('input-add-donation');
        const donateBalance =getTextFieldValueById('donation-balance');
        const totalBalance= getTextFieldValueById('total-balance');
        if( typeof addDonation === 'number' && !isNaN(addDonation) && addDonation >0 && addDonation <= totalBalance){
        
         
        
           const newDonationBalance= addDonation + donateBalance;
           document.getElementById('donation-balance').innerText= newDonationBalance;
             
           
            
            const newTotalBalance = totalBalance - addDonation;
            
            document.getElementById('total-balance').innerText= newTotalBalance;


                
            const div = document.createElement('div');
            div.classList.add('border','border-solid','rounded','border-gray-500','p-5','mb-6','mt-7');
            div.innerHTML =`
                <p class="text-lg font-bold">${addDonation} Taka is Donated for Flood at Noakhali, Bangladesh</p>
                <p class="text-gray-500"> Date : ${new Date().toString()}  </p>
            `
            document.getElementById('history-donation').appendChild(div);

     
        
        }else{
            alert("Invalid Donation Amount");
        }

 })
 
  


 document.getElementById('btn-add-donate2').addEventListener('click',function(){
    const addDonationSecond = getInputFieldValueById('input-add-donation2');
    const donateBalanceSecond =getTextFieldValueById('donation-balance2');
    const totalBalance= getTextFieldValueById('total-balance');
    if( typeof addDonationSecond === 'number' && !isNaN(addDonationSecond) && addDonationSecond >0 && addDonationSecond <= totalBalance){
    

       

        const newDonationBalance2= addDonationSecond + donateBalanceSecond;
        document.getElementById('donation-balance2').innerText= newDonationBalance2;
         
                
       
        
        const newTotalBalance = totalBalance - addDonationSecond;
        document.getElementById('total-balance').innerText = newTotalBalance;



        const div = document.createElement('div');
        div.classList.add('border','border-solid','rounded','border-gray-500','p-5','mb-6','mt-7');
        div.innerHTML =`
               <p class="text-lg font-bold">${addDonationSecond} Taka is Donated for Flood Relief in Feni,Bangladesh</p>
            <p class="text-gray-500"> Date : ${new Date().toString()}  </p>
        `
        document.getElementById('history-donation').appendChild(div);

    
    }else{
        alert("Invalid Donation Amount");
    }

})

document.getElementById('btn-add-donate3').addEventListener('click',function(){
    const addDonationThird = getInputFieldValueById('input-add-donation3');
    const donateBalanceThird =getTextFieldValueById('donation-balance3');
    const totalBalance= getTextFieldValueById('total-balance');
    if( typeof addDonationThird === 'number' && !isNaN(addDonationThird) && addDonationThird >0 && addDonationThird <= totalBalance){
    

       

        const newDonationBalance3= addDonationThird + donateBalanceThird;
        document.getElementById('donation-balance3').innerText= newDonationBalance3;
         
                
        
        
        const newTotalBalance = totalBalance - addDonationThird;
        document.getElementById('total-balance').innerText = newTotalBalance;

        
       


        const div = document.createElement('div');
        div.classList.add('border','border-solid','rounded','border-gray-500','p-5','mb-6','mt-7');
        div.innerHTML = `
            <p class="text-lg font-bold">${addDonationThird} Taka is Donated for Aid for Injured in the Quota Movement</p>
            <p class="text-gray-500"> Date : ${new Date().toString()}  </p>
        `
        document.getElementById('history-donation').appendChild(div);   
        
    
    }else{
        alert("Invalid Donation Amount");
    }

})
 
 
const historyBtn =document.getElementById('history-button');
const donationBtn =document.getElementById('donation-btn');
historyBtn.addEventListener('click',function(){
    historyBtn.classList.add('bg-secondary', "text-primary");

   
  donationBtn.classList.remove('bg-secondary', "text-primary");

  document.getElementById('card-section').classList.add('hidden');
  document.getElementById('history-donation').classList.remove('hidden');
})

donationBtn.addEventListener('click',function(){
    donationBtn.classList.add('bg-secondary', "text-primary");
    historyBtn.classList.remove('bg-secondary', "text-primary");
document.getElementById('card-section').classList.remove('hidden');
document.getElementById('history-donation').classList.add('hidden');

})
 




  
