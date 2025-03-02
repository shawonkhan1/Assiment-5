

// 6btn clik and work
function updateValues(button) {
    let value1 = document.getElementById("value1");
    let value2 = document.getElementById("value2");

    value1.innerText = parseInt(value1.innerText) - 1;

    
    value2.innerText = parseInt(value2.innerText) + 1;

   
    alert("Board Updated Successfully");
    
    if (parseInt(value1.innerText) === 0) {
       
        alert("Congratulation !!! You have completed all the curent task");
    }

    
    button.disabled = true;
}


    let buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        updateValues(button);
    });
});

// nav bar a icon a click korle body color cng hobe
let MainColor = ['blue','#2c2c2c','#303030', 'red', '#fafafa','pink', 'black', '#fff8e1 '];
let CurrentColor = 0;

document.getElementById('Icon').addEventListener('click',function(){
    document.body.style.backgroundColor = MainColor[CurrentColor];
    CurrentColor = (CurrentColor + 1) % MainColor.length;
})


// discover something a clik korle amk main html a nie jabe

document.getElementById('main').addEventListener('click',function(){
    window.location.href = './main.html';
})



// discover something a clik korle amk main html a nie jabe

document.getElementById('main').addEventListener('click',function(){
    window.location.href = './main.html';
})


// clear history btn a click korle history asbe
document.getElementById('btn1').addEventListener('click',function(){
    document.getElementById('none1').style.display = 'block';
})

document.getElementById('btn2').addEventListener('click',function(){
    document.getElementById('none2').style.display = 'block';
})

document.getElementById('btn3').addEventListener('click',function(){
    document.getElementById('none3').style.display = 'block';
})

document.getElementById('btn4').addEventListener('click',function(){
    document.getElementById('none4').style.display = 'block';
})

document.getElementById('btn5').addEventListener('click',function(){
    document.getElementById('none5').style.display = 'block';
})

document.getElementById('btn6').addEventListener('click',function(){
    document.getElementById('none6').style.display = 'block';
})


// history dlte hoie jabe
document.getElementById('clear').addEventListener('click',function(){
    document.getElementById('clear-history').style.display = 'none'
})

// date dkanor jnno
function updateTime() {
    const currentDate = new Date();
    const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = currentDate.toLocaleDateString('en-US', options);
    document.getElementById('time').innerHTML = formattedDate;
}

setInterval(updateTime, 1000);
updateTime();






