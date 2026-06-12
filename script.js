const students = {

MCA101:{
name:"Radhika Berde",
percentage:85,
status:"PASS"
},

MCA102:{
name:"Sneha Gangan",
percentage:78,
status:"PASS"
},

MCA103:{
name:"Tanvi More",
percentage:35,
status:"FAIL"
}

};

function checkResult(){

let rollNo =
document.getElementById("rollNo")
.value
.toUpperCase();

let student =
students[rollNo];

if(!student){

alert("Student Not Found");

return;
}

document.getElementById(
"studentName"
).innerHTML =
student.name;

document.getElementById(
"studentRoll"
).innerHTML =
"Roll No : " + rollNo;

document.getElementById(
"studentStatus"
).innerHTML =
"Status : " + student.status;

document.getElementById(
"progressBar"
).style.width =
student.percentage + "%";

document.getElementById(
"progressBar"
).innerHTML =
student.percentage + "%";

document.getElementById(
"resultCard"
).style.display =
"block";
}