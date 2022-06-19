function showhide(paraName) {
    let para = document.getElementById(paraName);
    if (para.style.display != 'none') { // agar display none nahi hai 
        para.style.display = 'none'; // toh none kar do
    }
    else {
        para.style.display = 'block'; // nahi toh block rehney do
    }
}












