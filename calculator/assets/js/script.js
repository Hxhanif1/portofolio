function calculate() {
    
    /* Make sure that the form is valid */
    if ($( "#myform" ).valid()) {
        
        /* get the operands from the form */
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;

        /* convert the operands from string to floating point */
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);

        /* figure out which operator was checked and place the value in operator */
        var operator;
        if (document.getElementById("additionOperator").checked) {
            operator = document.getElementById("additionOperator").value;
        }
        if (document.getElementById("subtractionOperator").checked) {
            operator = document.getElementById("subtractionOperator").value;
        }
        if (document.getElementById("multipicationOperator").checked) {
            operator = document.getElementById("multipicationOperator").value;
        }

        if (document.getElementById("divisionOperator").checked) {
            operator = document.getElementById("divisionOperator").value;
        }

        var result;
        
        /* if the operator was "+" then set result to the minimum */
        if (operator == "addition") {
            result=operand1fp + operand2fp
            }
        
        if (operator == "subtraction") {
             result=operand1fp - operand2fp

        }
        
        
     if (operator == "multipication") {
                      result=operand1fp * operand2fp
     }
     
          if (operator == "division") {
                                    result=operand1fp / operand2fp
          }


              



        
        
 
        /* if the operator was "-" then set result to the maximum */
        if (operator == "-") {
            if(operand1fp >= operand2fp && operand1fp >= operand3fp) {
                result = operand1fp;
            }
            if(operand2fp >= operand1fp && operand2fp >= operand3fp) {
                result = operand2fp;
            }
            if(operand3fp >= operand1fp && operand3fp >= operand2fp) {
                result = operand3fp;
            }
        }

        /* if operator was "*" the calcualute the average of 3 operands */
        if (operator == "*") {
            result = (operand1fp + operand2fp + operand3fp) / 3.0;
        }
        
         /* if operator was "/" the calcualute the average of 3 operands */
        if (operator == "/") {
            result = (operand1fp + operand2fp + operand3fp) / 3.0;
        }
        
        /* convert the result to a string and display it */
        document.getElementById("Result").innerHTML = result.toString();
    }
}

function clearform() {
    
    /* Set all of the form values to blank or false */
    document.getElementById("Operand1").value = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand1Error").innerHTML = "";
    document.getElementById("Operand2Error").innerHTML = "";
    document.getElementById("additionOperator").checked = false;
    document.getElementById("subtractionOperator").checked = false;
    document.getElementById("multipicationOperator").checked = false;
    document.getElementById("divisionOperator").checked = false;

    document.getElementById("OperatorError").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}

/* Form Validation */
$( "#myform" ).validate({
 
});