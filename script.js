function showResult()
{
    let roll=document.getElementById("roll").value;

    if(roll=="101")
    {
        document.getElementById("result").innerHTML=
        "Result: PASS <br> Percentage: 85%";
    }
    else
    {
        document.getElementById("result").innerHTML=
        "Student Record Not Found";
    }
}