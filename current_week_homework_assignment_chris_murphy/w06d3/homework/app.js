
const createToDo = () => {
        console.log( $("#input-box").val() );
        let $toDoItem = $("#input-box").val();
        let $div = $("<div>").addClass("to-do-item")
        let $p = $("<h3>").text($toDoItem);
        let $button = $("<button>").addClass("completed").text("COMPLETED");
        $button.on("click", completeToDo);
        $div.append($p,$button);
        $("#to-do-list").append($div);
        $("#input-box").val("");

}


const completeToDo = (event) => {
        let $toDo = $(event.currentTarget).parent();
        $toDo.css('background-color', "#ED6495");
        $("#completed").append($toDo)
}



$(()=> {
    console.log("It's working");
    $("#submit").on("click", createToDo);

       
    
});

