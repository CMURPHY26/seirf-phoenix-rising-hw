$( () => {

    if (typeof jQuery == 'undefined'){
        console.log('oops! I still have to link my jQuery properly!');
      } else {console.log('I did it! I linked jQuery and this js file!')};
      
      //Year 1
      //Query for your div with the id of container and set it to a variable named $container
      const $container = $(".container");
      //console.log $container
      console.log($container);
      //Create an <h1> element and set it to a variable called $h1 and console log it
      //Add some text inside the h1 element. Example text: 'Hogwarts'
      const $h1 = $("<h1>").text("Hogwarts");
      console.log($h1);
      //Why isn't your $h1 appearing on your page?
      $container.append($h1);

      //Year 2
      // h2 element with your name
      const $h2 = $("<h2>").text("Chris");
      //h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin)
      const $h3 = $("<h3>").text("Gryffindor");
      //h4 element with your pet's name
      //this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
      const $h4 = $("<h4>").addClass("dog").text("Indi");
      //h4 element with your wand 
      const $h4Wand = $("<h4>").text("Hornbeam Wand with Dragon Heartstring Core");

      $container.append($h2);
      $container.append($h3);
      $container.append($h4);
      $container.append($h4Wand);


      //Year 3
      //Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
      const $ul = $("<ul>").attr("storage", "trunk");
      
      //list items of
      const listOfItems = ["butter beer", "invisibility cloak","magic map","time turner", "leash","Bertie Bott's Every Flavor [Jelly] Beans"];
      //LOOP through list array, create an li element, add the text of that array index and append the list item to the unordered list
      for(let i = 0; i < listOfItems.length; i++) {
          let $li = $("<li>").text(listOfItems[i]);
          $ul.append($li);
      };
      //append the unordered list to the container
      $container.append($ul);
      //Loop through indices 1-3 to add the class secret
      for(let i = 1; i < 4; i ++){
      $("li").eq(i).addClass("secret");
      }
      //add class dog to index 4 of array
      $("li").eq(4).addClass("dog");
      

      //Year 4
      //Make a table
      //Right above your table add an h5 that says 'Spring 2017'
      //CREATE h5 and append to container
      const $h5 = $("<h5>").text("Spring 2017");
      $container.append($h5);
      //array holding days of the week
      const dayArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
      //CREATE table elements for table, thead, th1 and th2
      const $table = $("<table>");
      const $thead = $("<thead>");
      const $th1 = $("<th>").text("Day");
      const $th2 = $("<th>").text("Classes");
      //append table to container
      $container.append($table);
      //append thead to table
      $table.append($thead);
      //append both th to thead
      $thead.append($th1);
      $thead.append($th2);

      //LOOP through day array
      for(let i = 0; i < dayArray.length; i++) {
        //CREATE new table row
        const $tr = $("<tr>");
        //CREATE new table data cell and add text for index from day array
        const $td1 = $("<td>").text(dayArray[i]);
        //CREATE a new table data cell and add text for classes
        const $td2 = $("<td>").text("Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)");
        //append table row to table
          $table.append($tr);
          //append both table data cells to table row
          $tr.append($td1);
          $tr.append($td2);
      };

      //Year 5
      //Break your wand! (select the element that contains your wand and remove it)
      $h4Wand.remove();

      //Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
      $("li").eq(0).remove();
      // $("li").eq(0).fadeOut();
      //Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
      $h4Wand.text("Regular Wand");
      $h4.after($h4Wand);
      //Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
      $h4Wand.css("color", "indigo");

      //Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
      const $pet = $('.dog').eq(0);
      $pet.remove();
      $h1.before($pet);


      //Have your pet come back (remove your pet from the DOM, put it back in its original location)
      $pet.remove();
      $h3.after($pet);

      //Year 6
      // Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
      // $(".secret").hide('slow');

      // Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
      $(".secret").delay(2000).hide('slow');

      // Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)

      $('.secret').delay(2000).show('slow');

      // Accident! You transmogrified your pet's leash into half cabbage
      // add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class, should remain unaffected
      const $leash = $('li').eq(3).addClass("cabbage");

      // add an attribute of color:CHARTREUSE; in your main.css for all elements that have a class of cabbage
      // Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)
      $leash.removeClass('cabbage');

      //Year 7
      // Though your time at Hogwarts is nearly over, your journey of learning has just begun
      // Update your class schedule to read 'Fall 2018'
      $h5.text("Fall 2018")
      // Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
      let $butterBeer = $("<li>").text('Butter beer');
      $ul.prepend($butterBeer);

      // Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unordered list's property of trunk with a new property of chest
      $ul.attr("storage", "chest");

      // Add some CSS to your page. Feel free to experiment and make this page your own
      $h5.css("font-size", "1.25em");
      $thead.css("font-size", "1.5em");
      $img = $('<img>').attr('src', 'https://cdn.europosters.eu/image/1300/posters/harry-potter-hogwarts-day-i71938.jpg').css("max-width", "500px");
      $h1.after($img);
      $h1.css('color', 'purple')

      // Take a screenshot of your page and add it to your homework folder
      //DONE
















});