$( () => {

    if (typeof jQuery == 'undefined'){
        console.log('oops! I still have to link my jQuery properly!');
      } else {console.log('I did it! I linked jQuery and this js file!')};
      
      //Year 1
      const $container = $(".container");
      
      const $h1 = $("<h1>").text("Hogwarts");

      console.log($h1);

      $container.append($h1);

      //Year 2
      const $h2 = $("<h2>").text("Chris and Lauren");
      const $h3 = $("<h3>").text("Gryffindor");
      const $h4 = $("<h4>").addClass("dog").text("Indi");
      const $h4Wand = $("<h4>").text("Hornbeam Wand with Dragon Heartstring Core");

      $container.append($h2);
      $container.append($h3);
      $container.append($h4);
      $container.append($h4Wand);


      //Year 3
      const $ul = $("<ul>").attr("storage", "trunk");
      

      const listOfItems = ["butter beer", "invisibility cloak","magic map","time turner", "leash","Bertie Bott's Every Flavor [Jelly] Beans"];

      for(let i = 0; i < listOfItems.length; i++) {
          let $li = $("<li>").text(listOfItems[i]);
          $ul.append($li);
      };

      $container.append($ul);
      
      for(let i = 1; i < 4; i ++){
      $("li").eq(i).addClass("secret");
      }

      $("li").eq(4).addClass("dog");
      

      //Year 4
      const $h5 = $("<h5>").text("Spring 2017");
      $container.append($h5);

      const dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

      const $table = $("<table>");
      const $thead = $("<thead>");
      const $th1 = $("<th>").text("Day");
      const $th2 = $("<th>").text("Classes");

      $container.append($table);
      $table.append($thead);
      $thead.append($th1);
      $thead.append($th2);

      for(let i = 0; i < dayArray.length; i++) {
        const $tr = $("<tr>");
        const $td1 = $("<td>").text(dayArray[i]);
        const $td2 = $("<td>").text("Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)");
          $table.append($tr);
          $tr.append($td1);
          $tr.append($td2);
      }















});