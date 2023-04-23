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
    const dialogues = ["High academic expectations, fear of failure, and the pressure to perform well in exams can cause stress and anxiety, which can lead to depression.",
    "Being away from family and friends, difficulty making friends, and feeling socially isolated can contribute to feelings of loneliness and depression.",
    "Financial struggles, such as difficulty paying for tuition or other expenses, can be a significant source of stress and anxiety for students.",
    "Issues with romantic relationships, friendships, or family can cause significant emotional distress, leading to depression.",
    "Past experiences of trauma, such as abuse, neglect, or violence, can have long-lasting effects on mental health, including depression.",
    "Substance abuse, including alcohol and drugs, can lead to depression and other mental health problems.",
    "Family history of depression or other mental health conditions can increase the likelihood of a student experiencing depression.",
    "Bullying can have serious and long-lasting effects on students, including depression. When a student is bullied repeatedly, they may feel isolated, helpless, and alone. This can lead to a loss of self-esteem and a sense of hopelessness, which are common symptoms of depression.\nStudents who are bullied may also develop anxiety and fear, which can further exacerbate their depression. They may avoid social situations, stop participating in activities they once enjoyed, and may have trouble sleeping or eating. These symptoms can be debilitating and can interfere with their ability to learn and succeed in school."];
    document.getElementById("para").innerHTML = dialogues[val-1];
}

function clk()
{
    document.getElementById("box1").style.transitionDuration = "1s";
    document.getElementById("box2").style.transitionDuration = "1s";
    document.getElementById("box1").style.opacity = "0%";
    document.getElementById("box2").style.opacity = "0%";
}

function rem()
{
    if(document.getElementById("details").style.opacity == "100%")
    {
        document.getElementById("details").style.transitionDuration = "0.5s";
        document.getElementById("details").style.opacity = "0%";
    }
}