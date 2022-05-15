function results() {
    var question1 =document.exam.question1.value;
    var question2 =document.exam.question2.value;
    var question3 =document.exam.question3.value;
    var question4 =document.exam.question4.value;
    var question5 =document.exam.question5.value;

    const answers=[question1,question1,question3, question4,question5];

    var marks=0;
    

    const markingScheme=["Hypertext Markup Language","Cascading Style Sheet","s-tag","c++","Creates functionality"];
    //for (let i = 0; i in answers; i++) {
    if (question1=== "Hypertext Markup Language") {
        marks++;
    }if (question2=== "Cascading Style Sheet") {
        marks++;
    }
    if (question3=== "s-tag") {
        marks++;
    }
    if (question4=== "c++") {
        marks++;
    }
    if (question5= "Creates functionality") {
        marks++;
    }

    let score=marks*19.66;
    
    //document.getElementById("results");
    document.write(score);
    

    if (score>=90) {
        document.write("  GRADE : A  EXECELLENT");
        //document.getElementById("results");
    } else if (score>=80) {
        document.write("  GRADE : A-  GOOD WORK");
        //document.getElementById("results");
    }else if(score>=70)
    {
       document.write("  GRADE : B+ SATISFACTORY"); 
       //document.getElementById("results");
    }else if(score>=65)
    {
        document.write(" GRADE : B  FAIR TRIAL, AIM HIGHER.");
        //document.getElementById("results");
    }else if(score>=60){ 
        document.write(" GRADE C+ AVERAGELY WELL, IMPROVE")
    }else if (score>=50) {
         document.write("GRADE C : AVERAGE")
    }else{
        document.write("FAIL : RETAKE THE EXAM")
    }
}