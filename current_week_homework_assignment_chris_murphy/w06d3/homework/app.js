
const createToDo = () => {
    $("#submit").on("click", ()=> {
        console.log( $("#input-box").val() );
        let $toDoItem = $("#input-box").val();
        let $div = $("<div>").addClass("to-do-item").text($toDoItem);
        $("#to-do-list").append($div);
        
    });

}





$(()=> {
    console.log("It's working");
    createToDo();
});

