function runaway(id) {
    id.style.top = Math.round(Math.random() * 250) - 100 + 'px';
    id.style.left = Math.round(Math.random() * 250) - 200 + 'px';

    setTimeout(resetFun, 10000);
}

function yesMessage() 
{
    document.body.style.backgroundImage = "url('https://img1.picmix.com/output/stamp/normal/2/0/5/6/316502_7f4ce.gif')";
    document.getElementById("yess").style.backgroundColor = "#d60000";
    document.getElementById("yess").style.color = "#ffc5e6";
    document.getElementById("yess").style.boxShadow = "0 12px 16px 0 rgba(251, 53, 53, 0.24), 0 17px 50px 0 rgba(251, 53, 53, 0.24)";
    document.getElementById("yess").style.textShadow = "3px 3px 3px #ffc5e6;";
    alert("YES, It was obviuse!");
    
	setTimeout(resetFun, 10000);
}


function noMessage()
{
    alert("Please try again...");
    location.reload();
}

function resetFun()
{
    location.reload();
}