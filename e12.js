document.querySelector('.b1').addEventListener('click' , () => {
    document.querySelector('.i1').value = 123;
});
document.querySelector('.b2').addEventListener('click' , () => {
    let data = +document.querySelector('.i2').value;
    document.querySelector('.out2').innerHTML += data;
});
document.querySelector('.b3').addEventListener('click' , () => {
    let data = +document.querySelector('.i3').value;
    document.querySelector('.out3').innerHTML = data;
});
document.querySelector('.b4').addEventListener('click' , () => {
    let data = +document.querySelector('.i4').value;
    document.querySelector('.out4').innerHTML = data;
});
document.querySelector('.b5').addEventListener('click' , () => {
    let data = +document.querySelector('.i5').value;
    document.querySelector('.out5').innerHTML = data;
});
document.querySelector('.b6').addEventListener('click' , () => {
    if (document.querySelector('.i-6').checked) {
        document.querySelector('.i-6').checked = false;
    }
    else {
        document.querySelector('.i-6').checked = true;
    }
});
document.querySelector('.b7').addEventListener('click' , () => {
    let radio = document.querySelector('.i7'); 
    for (let i = 0; i < radio.clientHeight; i++) {
        if (radio[i].checked) {
            data = radio[i].value;
            break;
        }
    }
    document.querySelector('.out7').innerHTML = data;
});
document.querySelector('.b8').addEventListener('click' , () => {
    let data = document.querySelector('s8').value;
    document.querySelector('.out8').innerHTML = data;
});
document.querySelector('.b10').addEventListener('click' , () => {
    let data = document.querySelector('s10').value;
    document.querySelector('.out10').innerHTML = data;
});
document.querySelector('.b11').addEventListener('click' , () => {
    let data = document.querySelector('s11').value;
    document.querySelector('.out11').innerHTML = data;
});
document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
    console.dir(form.elements.myselect.value);
    form.reset();
});