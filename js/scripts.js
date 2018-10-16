// BIZ LOJ
function Account(name, balance){
    this.name = name;
    this.balance = balance;
};



// UI LOGIC
$(document).ready(function() {
  $("#smbtAcct").click(function(event) {
    event.preventDefault();
      // console.log("hello");

    var inputtedName = $("#newName").val();
    var inputtedDeposit = parseInt($("#initDeposit").val());
    inputtedDeposit = inputtedDeposit || 0;
    var userAccount = new Account(inputtedName , inputtedDeposit)

    // debugger
    //
    // console.log(inputtedName);
    // console.log(inputtedDeposit);
    // console.log(userAccount);

    $(".firstFade").fadeOut("fast")
    $(".secondFade").fadeIn("slow");

    $(".currentBalance").append(
      '<div class="currentBalance">' +
        '<div class="name">' +
          '<h5>'inputtedName'</h5>' +
        '</div>' +
        '<div class="balance">' +
          '<h3>'inputtedDeposit'</h3>' +
        '</div>' +
      '</div>' +
      );
    });
  });
