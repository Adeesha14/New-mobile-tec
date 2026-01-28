function toggleSidebar() {
    var sidebar = document.getElementById("sideget");
    if (sidebar.style.display === "block") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "block";
    }

    document.getElementById("close").style.display = "none";
}
function conform(){
    alert("Thank You...! Your Order Succsessfuly Submit");
    let fname = document.getElementById("firstname").value;
    let lname = document.getElementById("lastname").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let code = document.getElementById("code").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    let cardholder = document.getElementById("cdname").value;
    let bank = document.getElementById("bankname").value;
    let cardnumber = document.getElementById("cardnumber").value;
    let validdate = document.getElementById("vdate").value;
    let cvv = document.getElementById("snumber").value;

    localStorage.setItem("firstName",fname);
    window.location.href = "cart.html";


    console.log(fname, lname, address, city, code, phone, email, cardholder, bank, cardnumber, validdate, cvv);

    
}
function resetform(){
    localStorage.clear();
    location.reload();
}

