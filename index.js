
function calculateMarks() {
    let subjects = ['Computer Fundamental MS OFFice', 'C Programming', 'Mathmatics', 'HTML,CSS,XML,', 'Bussiness Comunication',];
    let totalMarks = 0;

    for (let subject of subjects) {
        let marks = parseInt(document.getElementById(subject).value) || 0;
        if (marks < 0 || marks > 100) {
            alert("Marks only between 0 and 100");
            return;
        }
        totalMarks += marks;
    }

    let percentage = (totalMarks / 600) * 100;
    let grade = '';

    if (percentage >= 90) grade = 'A+';
    else if (percentage >= 80) grade = 'A';
    else if (percentage >= 70) grade = 'B';
    else if (percentage >= 60) grade = 'C';
    else if (percentage >= 50) grade = 'D';
    else grade = 'F';

    document.getElementById("total").value = totalMarks;
    document.getElementById("percentage").value = percentage.toFixed(2);
    document.getElementById("grade").value = grade;
}