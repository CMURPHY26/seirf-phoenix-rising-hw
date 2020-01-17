$( () => {

    if (typeof jQuery == 'undefined'){
        console.log('oops! I still have to link my jQuery properly!');
      } else {console.log('I did it! I linked jQuery and this js file!')};
      

      const $container = $(".container");
      
      const $h1 = $("<h1>").text("Hogwarts");

      console.log($h1);

      $container.append($h1);

      const $h2 = $("<h2>").text("Chris and Lauren");
      const $h3 = $("<h3>").text("Gryffindor");
      const $h4 = $("<h4>").addClass("dog").text("Indi");
      const $h4Wand = $("<h4>").text("Hornbeam Wand with Dragon Heartstring Core");

      $container.append($h2);
      $container.append($h3);
      $container.append($h4);
      $container.append($h4Wand);
      








});