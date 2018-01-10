// curr_i_w_a = current i with adjustments.
function red_em_all(curr_k_w_a, curr_i_w_a) {



  if ($('*[data-coord="3'+ curr_k_w_a + '3' + curr_i_w_a + '"]').hasClass(color_of_opposite_team + "_unit")) {
    // declare a shorthand (1 of 12) ...
    var current_char_name = $('*[data-coord="3'+ curr_k_w_a + '3' + curr_i_w_a + '"]').data("chname");

    // red them, ...
    $('*[data-coord="3'+ curr_k_w_a + '3' + curr_i_w_a + '"]').switchClass(current_char_name, "reded_" + current_char_name, 0);
    $('*[data-coord="3'+ curr_k_w_a + '3' + curr_i_w_a + '"]').addClass("possible_attack_target");
  // else, if it's an ally ...

  } else if ($('*[data-coord="3'+ curr_k_w_a + '3' + curr_i_w_a + '"]').hasClass(team_of_current_phase + "_unit")) {
  // if it's greyed, turn it to greyed and blued
    // declare a shorthand (1 of 12) ...
//    var current_char_name = $('*[data-coord="3'+ curr_k_w_a + '3' + curr_i_w_a + '"]').data("chname");
//    if ($('*[data-coord="3'+ curr_k_w_a + '3' + curr_i_w_a + '"]').hasClass(team_of_current_phase + "_unit").hasClass("greyed_" + current_char_name)) {
//      $('*[data-coord="3'+ curr_k_w_a + '3' + curr_i_w_a + '"]').switchClass("greyed_" + current_char_name, "greyed_blued_" + current_char_name, 0);
    // else turn it to blued
//    } else {
  //    $('*[data-coord="3'+ curr_k_w_a + '3' + curr_i_w_a + '"]').switchClass(current_char_name, "blued_" + current_char_name);
  //  }
    // else, if its not an impassible spot, red the tile...
    var cant_red_em_yet = "damn.";
  } else if (!(map01dyn_array[curr_k_w_a][curr_i_w_a] === "X")) {
    $('*[data-coord="0'+ curr_k_w_a +'0' + curr_i_w_a +'"]').switchClass('mpt','mpt_red', 0);

  }
}




function E_A_P_A() {


// the flag is king!

// var the_current_k = jQuery.extend(true, ex_char_k_pos_coord);
// var the_current_i = jQuery.extend(true, ex_char_i_pos_coord);

var the_current_k = ex_char_k_pos_coord;
var the_current_i = ex_char_i_pos_coord;


// something i should have done first.
var km2 = Number(the_current_k - 2);
var km1 = Number(the_current_k - 1);
var kp0 = Number(the_current_k);
var kp1 = Number(the_current_k + 1);
var kp2 = Number(the_current_k + 2);

var im2 = Number(the_current_i - 2);
var im1 = Number(the_current_i - 1);
var ip0 = Number(the_current_i);
var ip1 = Number(the_current_i + 1);
var ip2 = Number(the_current_i + 2);

// 08 the declaration syntax is good, and the file path is good. dammit.



// EXTENDED CHARACTER ATTACK PREDICTION ALGORITHM

// 08 can i load this onto the script's back?

// 08 this could be made much simpler (for the machine) if i put the range options in front of the particulars.
// 08 the simple expedient of saving the data "chname" into a variable would save us going off of the page. but, later.

var e_a_p_a_sel_char_atk_range = all_weapons_and_items[exis_char_obj_array[the_current_k][the_current_i].inv_slot_1iid][7];  // 08 don't loose this, self. lol. try blacking it out though. then, eventually, making it a parameter.
		// i'm just going to do the whole thing for range 1-2, and then add in the &&s necessary for ranges 2 only and 1.
// the top section.



if ((the_current_k > 0) && ((e_a_p_a_sel_char_atk_range === "1") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
  // if the space above the selected unit is an enemy unit ...
  // complete attack prediction ...
  red_em_all(km1, ip0);

  // checks upper right and upper left.
  if ((the_current_i > 0) && ((e_a_p_a_sel_char_atk_range === "2 only") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
    //--// check the upper left
    // complete attack prediction ...
    red_em_all(km1, im1);
  }

  if ((the_current_i < 9) && ((e_a_p_a_sel_char_atk_range === "2 only") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
  //--// check the upper right
    red_em_all(km1, ip1);
  }

  // if the space above the directly above space is availible, check that one, too.
  if ((the_current_k > 1) && ((e_a_p_a_sel_char_atk_range === "2 only") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
    red_em_all(km2, ip0);
  }
}

// the bottom section.
if ((the_current_k < 9) && ((e_a_p_a_sel_char_atk_range === "1") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
  // if the space below the selected unit is an enemy unit, terminate the search and present the attack function.
  red_em_all(kp1, ip0);

  // checks down right and down left.
  if ((the_current_i > 0) && ((e_a_p_a_sel_char_atk_range === "2 only") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
  //--// check the lower left
    red_em_all(kp1, im1);
  }

  if ((the_current_i < 9) && ((e_a_p_a_sel_char_atk_range === "2 only") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
  //--// check the lower right
    red_em_all(kp1, ip1);
  }

  // if the space below the directly below space is availible, check that one, too.
  if ((the_current_k < 8) && ((e_a_p_a_sel_char_atk_range === "2 only") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
    red_em_all(kp2, ip0);
  }
}

// the sides.
//--// right side.
if ((the_current_i > 0) && ((e_a_p_a_sel_char_atk_range === "1") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
  // right square check
  red_em_all(kp0, ip1);

  if ((the_current_i > 1) && ((e_a_p_a_sel_char_atk_range === "2 only") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
  // double right square check
    red_em_all(kp0, ip2);
  }
}

//--// left side.
if ((the_current_i < 9) && ((e_a_p_a_sel_char_atk_range === "1") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
  // left square check
  red_em_all(kp0, im1);

  if ((the_current_i < 8) && ((e_a_p_a_sel_char_atk_range === "2 only") || (e_a_p_a_sel_char_atk_range === "1-2"))) {
  // double left square check
    red_em_all(kp0, im2);
  }
}


// the flag gets all the way to here if the above is redded.
}
