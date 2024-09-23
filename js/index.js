
 document.getElementById('btn-add-donate').addEventListener('click',function(){
        const addDonation = getInputFieldValueById('input-add-donation');
        const donateBalance =getTextFieldValueById('donation-balance');
        if( typeof addDonation === 'number' && !isNaN(addDonation) && addDonation >0){
        

           
    
            const newDonationBalance= addDonation + donateBalance;
            document.getElementById('donation-balance').innerText= newDonationBalance;
             
        const totalBalance= document.getElementById('total-balance')
        const totalBalanceFinal= parseFloat(totalBalance.innerText);
        const newTotalBalance = totalBalanceFinal - addDonation;
        totalBalance.innerText = newTotalBalance;
        
        
        
        }else{
            alert("Invalid Donation Amount");
        }

 })
 

 document.getElementById('btn-add-donate2').addEventListener('click',function(){
    const addDonationSecond = getInputFieldValueById('input-add-donation2');
    const donateBalanceSecond =getTextFieldValueById('donation-balance2');
    if( typeof addDonationSecond === 'number' && !isNaN(addDonationSecond) && addDonationSecond >0){
    

       

        const newDonationBalance2= addDonationSecond + donateBalanceSecond;
        document.getElementById('donation-balance2').innerText= newDonationBalance2;
         
                
        const totalBalance= getTextFieldValueById('total-balance')
        
        const newTotalBalance = totalBalance - addDonationSecond;
        document.getElementById('total-balance').innerText = newTotalBalance;
    
    
    }else{
        alert("Invalid Donation Amount");
    }

})

document.getElementById('btn-add-donate3').addEventListener('click',function(){
    const addDonationThird = getInputFieldValueById('input-add-donation3');
    const donateBalanceThird =getTextFieldValueById('donation-balance3');
    if( typeof addDonationThird === 'number' && !isNaN(addDonationThird) && addDonationThird >0){
    

       

        const newDonationBalance3= addDonationThird + donateBalanceThird;
        document.getElementById('donation-balance3').innerText= newDonationBalance3;
         
                
        const totalBalance= getTextFieldValueById('total-balance')
        
        const newTotalBalance = totalBalance - addDonationThird;
        document.getElementById('total-balance').innerText = newTotalBalance;
    
    
    }else{
        alert("Invalid Donation Amount");
    }

})
 
 
 
 
