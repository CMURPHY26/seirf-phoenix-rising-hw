

$( () => {

    $(".pokemon-card").hover((event) => {
        let $pokePick = $(event.target);
        $pokePick.toggleClass("pokecard-hover");
    });

});