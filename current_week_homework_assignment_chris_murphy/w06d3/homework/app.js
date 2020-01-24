
const createToDo = () => {
    $("#submit").on("click", ()=> {
        console.log( $("#input-box").val() );
        let $toDoItem = $("#input-box").val();
        let $div = $("<div>").addClass("to-do-item")
        let $p = $("<h3>").text($toDoItem);
        let $button = $("<button>").addClass("completed-remove").text("COMPLETED");;
        $div.append($p,$button);
        $("#to-do-list").append($div);
    });

}





$(()=> {
    console.log("It's working");
    createToDo();
});

