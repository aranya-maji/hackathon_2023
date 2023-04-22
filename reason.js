function clclr(val)
{
    document.getElementById(val).style.color = "green";
    document.getElementById(val).style.borderColor = "green";
    document.getElementById(val).style.transitionDuration = "0.5s";
}

function clrbk(val)
{
    document.getElementById(val).style.color = "white";
    document.getElementById(val).style.borderColor = "white";
    document.getElementById(val).style.transitionDuration = "0.5s";
}

function op(val)
{
    document.getElementById("details").style.transitionDuration = "0.5s";
    document.getElementById("details").style.opacity = "100%";
    document.getElementById("box1").style.opacity = "100%";
    document.getElementById("box2").style.opacity = "100%";
    document.getElementById("box1").style.transitionDuration = "1s";
    document.getElementById("box2").style.transitionDuration = "1s";
}