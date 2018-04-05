$(document).ready(function(){


$(document).on("click", ".btn", function () {
     var result = $(this).data('answered');
     $("#resultsModal .modal-body ").text(result);
     // As pointed out in comments, 
     // it is superfluous to have to manually call the modal.
     // $('#addBookDialog').modal('show');
});

// timed interval to limit time to answer questions
var number = 100;

//  Variable that will hold our interval ID when we execute
//  the "run" function
var intervalId;

//  When the resume button gets clicked, execute the run function.
$(document).on("click", ".start", function(){
  number = 100;
  run();
});

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
  $("#timesupBlock").css("display","none");
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#timer").html(number);


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
   $("#timesupBlock").css("display","block");
   $("#resultsModal .modal-body ").text("out of time. times up!");
   $("#resultsModal").modal('show');
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}

//  Execute the run function.
run();
//=====================================================
// All answers are true

});