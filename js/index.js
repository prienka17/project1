

function getReport(){

      var grade = "";	 
      var  result="";	 
      var dldMarks = document.getElementById('txtdatastructure').value;
      var dcMarks = document.getElementById('txtdatacommununication').value;
      var statMarks = document.getElementById('txtstatistics').value;
      var labMarks = document.getElementById('txtlabwork').value;
      var totalMarks = dldMarks - (- dcMarks) - (-statMarks) - (- labMarks);
      var averageMarks = totalMarks / 4;					
      switch(

          (averageMarks > 60 && averageMarks <= 100) ? 1 : 
          (averageMarks > 50 && averageMarks < 60) ? 2 : 
          (averageMarks > 40 && averageMarks < 50) ? 3 : 0
          )
          
          {
            case 1 :grade = "A";result="First Class";break;
            case 2 :grade = "B"; result="Second Class";break;
            case 3 :grade = "C"; result="Third Class";break;
            case 0 :grade = "D"; result="Fail";break;
          }
          
        
      
      document.getElementById('txtStudentName').value = document.getElementById('txtName').value;
      document.getElementById('txtStudentClass').value = document.getElementById('txtClass').value;
      document.getElementById('txtTotalMarks').value = totalMarks;
      document.getElementById('txtAvgMarks').value = averageMarks;
      document.getElementById('txtGrade').value = grade;
      document.getElementById('txtResult').value = result;

} 
