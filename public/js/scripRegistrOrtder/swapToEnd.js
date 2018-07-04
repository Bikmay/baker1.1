 function clickclack () {
    var pay1 = document.getElementById("cash");
    var bank1 =document.getElementById("bank");


    console.log("fabrika");
    if(pay1.checked==true || bank1.checked==true){
        console.log(document.location.hostname);
        document.location.href="/check.html";
    }
}