$( () => {
    let bankAccount = Number($("#bankAccount").text());
    console.log(bankAccount);
    const $body = $("body");

if(bankAccount < 0) { 
    $body.css("background-color", "red");
  } else if (bankAccount > 1000) {
    $body.css("background-color", "green");
  }
});

