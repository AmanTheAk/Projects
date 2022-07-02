function navShow() {
    let x = document.getElementById('pageLinks');
    let y = document.getElementById('menu2');
    if (x.style.display != 'none') {
        x.style.display = 'none';
        y.style.display ='none';
    }
    
    else {
        x.style.display = 'flex';
        y.style.display = 'flex';
        y.style.zIndex = 2;
    }
}


function slideShow() {
    let z = document.getElementById('listspace');
    let m = document.getElementById('mymenu2');

    if (z.style.display != 'none') {
        z.style.display ='none';
        m.style.zIndex = 0;
    }
    
    else {
        z.style.display = 'block';
        m.style.zIndex = -2;
    }
}


function showhide(paraName) {
    let para = document.getElementById(paraName);
    if (para.style.display != 'none') { // agar display none nahi hai 
        para.style.display = 'none'; // toh none kar do
    }
    else {
        para.style.display = 'block'; // nahi toh block rehney do
    }
}












