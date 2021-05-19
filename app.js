// Submit event
document.getElementById('calculate').addEventListener('click', calculateLoan);

document.getElementById('results').style.display = 'none';

function calculateLoan(e){
    // UI Variables
        const amount = document.getElementById('amount');
        const interest = document.getElementById('interest');
        const years = document.getElementById('years');

        const monthlyPayment =  document.getElementById('monthly-payment');
        const totalPayment =  document.getElementById('total-payment');
        const totalInterest =  document.getElementById('total-interest');

        const principal = parseFloat(amount.value);
        const calculatedInterest = parseFloat(interest.value) /100 / 12;
        const calculatedPayments = parseFloat(years.value) * 12;


        //Monthly patment
        const emi = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal*emi*calculatedInterest)/(emi-1);

        if(isFinite(monthly)){
            monthlyPayment.value = ("EMI : " +monthly.toFixed(2));
            totalPayment.value = ("Total Payment : " +(monthly * calculatedPayments).toFixed(2));
            totalInterest.value = ("Total Interest : " +((monthly * calculatedPayments)- principal).toFixed(2));

            document.getElementById('results').style.display = 'block';
        }else {
            alert("Please Check Inputs");
        }

    e.preventDefault();
    
}


