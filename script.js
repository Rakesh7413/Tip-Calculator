window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip()
{
    var bill = document.querySelector("#bill").value;
    var tipPercentage = document.querySelector("#services").value;
    var persons = document.querySelector("#persons").value;
    if(bill === '' || tipPercentage === 'Select' || persons === '')
    {
        alert("Please enter valid values");
        return;
    }
    if(persons === '1')
    {
        document.querySelector('#each').style.display = 'none';
    }
    else
    {
        document.querySelector('#each').style.display = 'block';
    }
    var tip=(bill*tipPercentage)/persons;
    tip=tip.toFixed(2);
    document.getElementById("total").innerHTML=tip;
}