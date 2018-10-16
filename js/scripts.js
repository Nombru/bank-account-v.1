// BIZ LOJ
function Account(name, balance){
    this.name = name;
    this.balance = balance;
};

function initialBalance(){
  var Balance = 0;
  
};


// UI LOGIC
$(document).ready(function() {
  $("#smbtAcct").click(function(event) {
    event.preventDefault();
      // console.log("hello");

    var inputtedName = $("#newName").val();
    var inputtedDeposit = parseInt($("#initDeposit").val());

    // console.log(inputtedName);
    // console.log(inputtedDeposit);

    $(".firstFade").fadeOut("fast")
    $(".secondFade").fadeIn("slow");


    });
  });
