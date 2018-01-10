// MOUSE ENTER FUNCTIONS
// these functions aren't part of the root document because they are essentally cosmetic.

var automatic_hover_cursor_on = false;


$('div').mouseenter(function() {
  if ((game_state === "open map") && (automatic_hover_cursor_on === true) && ($(this).hasClass('cle'))) {
    $(this).switchClass("cle", "cle_cursor", 0);
  } else if ($(this).hasClass('clickable_ex_char_menu_part')) {
    $(this).switchClass("clickable_ex_char_menu_part", "clickable_ex_char_menu_part_lit", 0);
  }
});
$('div').mouseleave(function() {
  if ((automatic_hover_cursor_on === true) && ($(this).hasClass('cle_cursor'))) {
    $(this).switchClass("cle_cursor", "cle", 0);
  } else if ($(this).hasClass('clickable_ex_char_menu_part_lit')) {
    $(this).switchClass("clickable_ex_char_menu_part_lit", "clickable_ex_char_menu_part", 100);
  }
});
