const students = {

    MCA101:{
        name:"Radhika Berde",
        percentage:85,
        status:"PASS",
        java:90,
        python:85,
        dbms:80
    },

    MCA102:{
        name:"Sneha Patil",
        percentage:78,
        status:"PASS",
        java:75,
        python:80,
        dbms:79
    },

    MCA103:{
        name:"Tanvi More",
        percentage:35,
        status:"FAIL",
        java:40,
        python:30,
        dbms:35
    }

};

function checkResult(){

    let rollNo =
    document.getElementById("rollNo")
    .value
    .toUpperCase();

    let student = students[rollNo];

    if(!student){

        alert("Student Not Found");
        return;
    }

    document.getElementById("studentName").innerHTML =
    student.name;

    document.getElementById("studentRoll").innerHTML =
    rollNo;

    document.getElementById("studentPercentage").innerHTML =
    student.percentage + "%";

    document.getElementById("studentStatus").innerHTML =
    student.status;

    document.getElementById("javaMarks").innerHTML =
    student.java;

    document.getElementById("pythonMarks").innerHTML =
    student.python;

    document.getElementById("dbmsMarks").innerHTML =
    student.dbms;

    document.getElementById("progressBar").style.width =
    student.percentage + "%";

    document.getElementById("progressBar").innerHTML =
    student.percentage + "%";

    document.getElementById("resultCard").style.display =
    "block";
}