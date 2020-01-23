
const createToDo = () => {
    $("#submit").on("click", ()=> {
        console.log($("#input-box").val());
    })

}





$(()=> {
    console.log("It's working");
    createToDo();
});

