$(document).keydown(function (e) {
  // 09 show health bars - little green divs on top of divs with borders
  // if the user presses option/alt or 'h'
  if ((game_state === "open map") && ((e.which === 18) || (e.which === 72))) {
    for (var i = 0; i < 10; i++) {
      for (var k = 0; k < 10; k++) {
        if (!(exis_char_obj_array[k][i] === 'rien')) {
          var hp_bar_width = ( (Math.round((exis_char_obj_array[k][i].cur_hp / exis_char_obj_array[k][i].max_hp) * 58)).toString() + "px");
          $('*[data-coord="4'+ k +'4' + i +'"]').css({"width": hp_bar_width});
          $('*[data-coord="4'+ k +'4' + i +'"]').switchClass("health_bar_invisible", "health_bar_visible", 0);
        }
      }
    }
  }
});

$(document).keyup(function (e) {
  // if the user presses option/alt or 'h'
  if ((game_state === "open map") && ((e.which === 18) || (e.which === 72))) {
  // 09 hide health bars - little green divs on top of divs with borders
    $("div.health_bar_visible").switchClass("health_bar_visible", "health_bar_invisible", 200); // might trip up on a quick double - trigger without a litte more code.
  }
});
