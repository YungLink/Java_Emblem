// Ancillary Functions: click / back switches

function color_m_p_tiles() {
  for (var i = 0; i < MAP_WIDTH_SC; i++) {
    for (var k = 0; k < MAP_HEIGHT_SC; k++) {
      if (mov_pre_array2[k][i] === "B") {
        $('*[data-coord="0'+ k +'0' + i +'"]').switchClass('mpt','mpt_blue', 0);
        $('*[data-coord="3'+ k +'3' + i +'"]').switchClass('cle','cle_blue', 0);
      }
      if (mov_pre_array2[k][i] === "R") {
        $('*[data-coord="0'+ k +'0' + i +'"]').switchClass('mpt','mpt_red', 0);
      }
    }
  }
}

// length uniformity doesn't seem to be necessary for this part of the program.
function color_units_spaces() {
  // CHANGE the colors of the tiles under all of the relevant units, appropriately.
  for (var i = 0; i < MAP_WIDTH_SC; i++) {
    for (var k = 0; k < MAP_HEIGHT_SC; k++) {
      // if you find a 'b' that is also an ally unit (B on array, the other on cle) ...
      if ((mov_pre_array2[k][i] === "B") && ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass(team_of_current_phase + '_unit'))) {
        // if it's its greyed version ...
        if ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass("greyed_unit")) {
        // change it to "greyed-blued" :
          $('*[data-coord="3'+ k +'3' + i +'"]').switchClass("greyed_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), "greyed_blued_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), 0);
        // otherwise, since it is unmoved ...
        } else if ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass("unmoved_unit")) {
        // add "blued" in front of it.
          $('*[data-coord="3'+ k +'3' + i +'"]').switchClass($('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), "blued_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), 0);
        }
      }
      //  if you find an 'r' that is also an enemy unit (R on array, the other on cle) ...
      if ((mov_pre_array2[k][i] === "R") && ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass(color_of_opposite_team + '_unit'))) {
        // since it is automatically going to be unmoved ...
        // add "reded" in front of it.
          $('*[data-coord="3'+ k +'3' + i +'"]').switchClass(($('*[data-coord="3'+ k +'3' + i +'"]')).data("chname"), "reded_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), 0);
      }
    }
  }
}

function simple_mpt_erase() {
  // cleaning up from the m.p.a.
  $('div.mpt_blue').switchClass('mpt_blue','mpt', 0);
  $('div.mpt_red').switchClass('mpt_red', 'mpt', 0);
  $('div.cle_blue').switchClass('cle_blue','cle', 0);
}

function remove_unit_select_status() {
  $(this).removeClass('sel_unmoved_unit'); // removed
  $(this).addClass("greyed_unit"); // 08 yeah it's weird, but it's fine.
//  var a = $(this).data("chname");
//  $(this).switchClass("selected_" + a, a, 0);
  // 09 piping probably only has to happen because the globals are defined on a different page.
  // i removed "selected_ (chname)" removal. i'm not sure its still in the other pares of the program
}


function uncolor_units_spaces() {
  for (var i = 0; i < MAP_WIDTH_SC; i++) {
    for (var k = 0; k < MAP_HEIGHT_SC; k++) {
      // if you find a 'b' that is also an ally unit (B on array, the other on cle) ...
      if ((mov_pre_array2[k][i] === "B") && ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass(team_of_current_phase + '_unit')) && !($('*[data-coord="3'+ k +'3' + i +'"]').data("chname") === gl_sel_char_tag_rec))  {
        //
        if ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass("greyed_unit")) {
        //
          $('*[data-coord="3'+ k +'3' + i +'"]').switchClass("greyed_blued_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), "greyed_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), 0);
        //

        } else if ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass("unmoved_unit")) {
        // take "blued" away from it.
          $('*[data-coord="3'+ k +'3' + i +'"]').switchClass('blued_' + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), 0);
        }
      }
      //  if it's an enemy and the mov pre array has it as an R ...
      if ((mov_pre_array2[k][i] === "R") && ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass(color_of_opposite_team + '_unit'))) {
          // un-red it.
          $('*[data-coord="3'+ k +'3' + i +'"]').switchClass("reded_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), 0);
      }
    }
  }
}


function calculate_atk_optn_truth_value(the_current_k, the_current_i) {
  // the name of this function's parameters is the same as the name of the variables that it takes in those parameters.
  // I have a feeling this is a really bad idea.
  var attack_option_terminate = false;
  var sel_char_atk_range = all_weapons_and_items[exis_char_obj_array[the_current_k][the_current_i].inv_slot_1iid][7];
  // i'm just going to do the whole thing for range 1-2, and then add in the &&s necessary for ranges 2 only and 1.
  // the top section.
  if (the_current_k > 0) {
  	// if the space above the selected unit is an enemy unit, terminate the search and present the attack function.
  	if (((sel_char_atk_range === "1") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ (the_current_k - 1) + '3' + the_current_i + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  		attack_option_terminate = true;
  	}
  	// checks upper right and upper left.
  	if ((the_current_i > 0) && (attack_option_terminate === false)) {
  	//--// check the upper left
  		if (((sel_char_atk_range === "2 only") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ (the_current_k - 1) + '3' + (the_current_i - 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  			attack_option_terminate = true;
  		}
  	}
  	if ((the_current_i < (MAP_WIDTH_SC - 1)) && (attack_option_terminate === false)) {
  	//--// check the upper right
  		if (((sel_char_atk_range === "2 only") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ (the_current_k - 1) + '3' + (the_current_i + 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  			attack_option_terminate = true;
  		}
  	}
  	// if the space above the directly above space is availible, check that one, too.
  	if ((the_current_k > 1) && (attack_option_terminate === false)) {
  		if (((sel_char_atk_range === "2 only") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3' + (the_current_k - 2) + '3' + the_current_i + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  			attack_option_terminate = true;
  		}
  	}
  }
  // the bottom section.
  if ((the_current_k < (MAP_HEIGHT_SC - 1)) && (attack_option_terminate === false)) {
  	// if the space below the selected unit is an enemy unit, terminate the search and present the attack function.
  	if (((sel_char_atk_range === "1") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ (the_current_k + 1) + '3' + the_current_i + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  		attack_option_terminate = true;
  	}
  	// checks down right and down left.
  	if ((the_current_i > 0) && (attack_option_terminate === false)) {
  	//--// check the lower left
  		if (((sel_char_atk_range === "2 only") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ (the_current_k + 1) + '3' + (the_current_i - 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  			attack_option_terminate = true;
  		}
  	}
  	if ((the_current_i < (MAP_WIDTH_SC - 1)) && (attack_option_terminate === false)) {
  	//--// check the lower right
  		if (((sel_char_atk_range === "2 only") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ (the_current_k + 1) + '3' + (the_current_i + 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  			attack_option_terminate = true;
  		}
  	}
  	// if the space below the directly below space is availible, check that one, too.
  	if ((the_current_k < (MAP_HEIGHT_SC - 2)) && (attack_option_terminate === false)) {
  		if (((sel_char_atk_range === "2 only") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ (the_current_k + 2) +'3' + the_current_i + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  			attack_option_terminate = true;
  		}
  	}
  }
  // the sides.
  //--// right side.
  if ((the_current_i > 0) && (attack_option_terminate === false)) {
  	// right square check
  	if (((sel_char_atk_range === "1") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ the_current_k +'3' + (the_current_i + 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  		attack_option_terminate = true;
  	}
  	if ((the_current_i > 1) && (attack_option_terminate === false)) {
  	// double right square check
  		if (((sel_char_atk_range === "2 only") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ the_current_k +'3' + (the_current_i + 2) + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  			attack_option_terminate = true;
  		}
  	}
  }
  //--// left side.
  if ((the_current_i < (MAP_WIDTH_SC - 1)) && (attack_option_terminate === false)) {
  	// left square check
  	if (((sel_char_atk_range === "1") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ the_current_k +'3' + (the_current_i - 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  		attack_option_terminate = true;
  	}
  	if ((the_current_i < (MAP_WIDTH_SC - 2)) && (attack_option_terminate === false)) {
  	// double left square check
  		if (((sel_char_atk_range === "2 only") || (sel_char_atk_range === "1-2")) && ($('*[data-coord="3'+ the_current_k +'3' + (the_current_i - 2) + '"]').hasClass(color_of_opposite_team + "_unit"))) {
  			attack_option_terminate = true;
  		}
  	}
  }
  return attack_option_terminate.valueOf();
}



// ###    // 08 predefine this function. new paradigm. it will increase the clarity of the input switch.
// ###    // 08 can i load this onto the script's back?

	//	wake
	//	  up		// HEAL OPTION  // this isn't finished yet, either . // **** lots of unfinished if / else statements.
	//	here		var heal_option_terminate === false; // i don't think i should actually use terminate.
					// i think  i want it to log all of the options in a new array, and then pull them out for when the game state changes.
					// eh. maybe i shouldn't care. it would be better for run speed (as if i know what effects run speed) if i kept it seperate.
					// doing it twice is as easy as copy and paste.

					// check the space to the top.
	//				if (the_current_i > 0) {
	//					if ($('*[data-coord="0'+ the_current_k +'0' + (the_current_i - 1) + '"]').hasClass(team_of_current_phase + "_unit") && (/*parameter*/)) {
	//						heal_option_terminate = true;
	//					} else {
	//						de_rien = "de rien.";
	//					}
	//				} else {
	//					de_rien = "de rien.";
	//				}
	//				// check the space to the right.
	//				if (the_current_k < 9) {
	//					if ($('*[data-coord="0'+ (the_current_k + 1) +'0' + the_current_i + '"]').hasClass(team_of_current_phase + "_unit") && (/*parameter*/)) {
	//						heal_option_terminate = true;
	//					} else {
	//						de_rien = "de rien.";
	//					}
	//				} else {
	//					de_rien = "de rien.";
	//				}
	//				// check the space to the bottom.
	//				if (the_current_k > 0) {
	//					if ($('*[data-coord="0'+ (the_current_k - 1) +'0' + the_current_i + '"]').hasClass(team_of_current_phase + "_unit") && (/*parameter*/)) {
	//						heal_option_terminate = true;
	//					} else {
	//						de_rien = "de rien.";
	//					}
	//				} else {
	//					de_rien = "de rien.";
	//				}
	//				// check the space to the left.
	//				if (the_current_i < 9) {
	//					if ($('*[data-coord="0'+ the_current_k +'0' + (the_current_i + 1) + '"]').hasClass(team_of_current_phase + "_unit") && (/*parameter*/)) {
	//						heal_option_terminate = true;
	//					} else {
	//						de_rien = "de rien.";
	//					}
	//				} else {
	//					de_rien = "de rien.";
	//				}

					// TRADE OPTION note: This really just isn't finished yet.
					// check the space to the top.
		//			if (the_current_i > 0) {
		//				if ($('*[data-coord="0'+ the_current_k +'0' + (the_current_i - 1) + '"]').hasClass(team_of_current_phase + "_unit") && (/*parameter*/) && (/*they both have items*/)) {
		//					trade_option_terminate = true;
		//				} else {
		//					de_rien = "de rien.";
		//				}
		//			} else {
		//				de_rien = "de rien.";
		//			}
					// check the space to the right.
		//			if (the_current_k < 9) {
		//				if ($('*[data-coord="0'+ (the_current_k + 1) +'0' + the_current_i + '"]').hasClass(team_of_current_phase + "_unit") && (/*parameter*/) && (/*they both have items*/)) {
		//					trade_option_terminate = true;
		//				} else {
		//					de_rien = "de rien.";
		//				}
		//			} else {
		//				de_rien = "de rien.";
		//			}
					// check the space to the bottom.
		//			if (the_current_k > 0) {
		//				if ($('*[data-coord="0'+ (the_current_k - 1) +'0' + the_current_i + '"]').hasClass(team_of_current_phase + "_unit") && (/*parameter*/) && (/*they both have items*/)) {
		//					trade_option_terminate = true;
		//				} else {
		//					de_rien = "de rien.";
		//				}
		//			} else {
		//				de_rien = "de rien.";
		//			}
					// check the space to the left.
		//			if (the_current_i < 9) {
		//				if ($('*[data-coord="0'+ the_current_k +'0' + (the_current_i + 1) + '"]').hasClass(team_of_current_phase + "_unit") && (/*parameter*/) && (/*they both have items*/)) {
		//					trade_option_terminate = true;
		//				} else {
		//					de_rien = "de rien.";
		//				}
		//			} else {
		//				de_rien = "de rien.";
		//			}
					// this part changes the menu.
					// i actually have to move this down below ******
		//			if(trade_option_terminate === true) {
		//				ex_char_menu_boolean_array[4] = true;
		//			} else {
		//				de_rien = "de rien.";
		//			}

function create_exis_menu_array(attack_option_load) {

    var ex_char_menu_boolean_array = [];
    ex_char_menu_boolean_array[0] = false;

    // attack option:
    // if there is someone around within attack possibilities...
    ex_char_menu_boolean_array[1] = false;
    // call the previously defined function here to possibly change the value of ex_char_menu_boolean_array[1]. (do i have to also define the function here?)
    if (attack_option_load === true) {
      ex_char_menu_boolean_array[1] = true;
    }
    // heal option:
    // if there is someone around with heal possibilities...
    ex_char_menu_boolean_array[2] = false;
    // call the previously defined function here to possibly change the value of ex_char_menu_boolean_array[2]. (do i have to also define the function here?)

    // item option:
    // if there are item possibilities ...
    ex_char_menu_boolean_array[3] = false;
    // if the characters	can_use_item = true		then	ex_char_menu_boolean_array[3] = true

    // trade option:
    // if there are trade possibilities
    ex_char_menu_boolean_array[4] = false;
    // checks the four nearby squares for allies. ex_char_menu_boolean_array[4]

    // other option:
    // always false, for now.
    ex_char_menu_boolean_array[5] = false;

    // wait option:
    // probably always true.
    ex_char_menu_boolean_array[6] = true;

    return ex_char_menu_boolean_array;
}

// CONTAINS A MAGIC NUMBER
function populate_ex_char_menu_text(ex_char_menu_boolean_array) {
  var possible_menu_items = ["talk", 'attack', "heal", "item", "trade", "other", "wait"];
  var e_c_m_ticker = 0;
  var prepared_i_g_m_text_array = [];
  for (i = 0; i < 7; i++) {
    if (ex_char_menu_boolean_array[i] === true) {
      prepared_i_g_m_text_array[e_c_m_ticker] = possible_menu_items[i];
      e_c_m_ticker = (e_c_m_ticker + 1);
    }
  }
  // something isn't happening like it ought to. well, like i want it to.
  return prepared_i_g_m_text_array;
  // ? return possible_menu_items;
}




function relatively_position_ex_char_menu(the_current_k, the_current_i, ex_char_menu_height) {
// artificial inputs.
  var i_g_m_height = (ex_char_menu_height * 30); // do i have my syntax right, here?
  var i_g_m_top_disp = "_";
  var i_g_m_left_disp = "_";

// the menu is 120 pixels accross and 210 pixels top to bottom ... on the 10 x 10 map sizing, anyway.
// 08 shoot i never thought of that. to fix that, it would have to be an iframe.
// 08 which might simplify things a little bit.     ...or not.

// the vertical

  if ((60 + (the_current_k * 60)) < i_g_m_height) {
    i_g_m_top_disp = 0;
  } else if ((60 + (the_current_k * 60)) > (600 - i_g_m_height)) {
    i_g_m_top_disp = (600 - i_g_m_height);
  } else {
    // menu is 3 squares to the right of the character
    i_g_m_top_disp = ((60 + (60 * the_current_k)) - 30 - (i_g_m_height / 2)); // omg the problem with this line was that it was i_m_g rather than i_g_m
  }

  //horizontal location decision
  if (the_current_i > 4) {
    // menu is 3 squares to the left of the character
    i_g_m_left_disp = ((60 * the_current_i) - 150);     // formerly     ( - 150 ... )
  } else {
    // menu is 3 squares to the right of the character
    i_g_m_left_disp = (60 + 35 + (60 * the_current_i)); // formerly the ( 60 + 180 + ... )
  }

  // top disp then left disp (displacements)
  var i_g_m_disp_local = [];

  i_g_m_disp_local[0] = i_g_m_top_disp;
  i_g_m_disp_local[1] = i_g_m_left_disp;
  i_g_m_disp_local[2] = i_g_m_height;
  return i_g_m_disp_local;
}

function relatively_position_and_generate_ex_char_menu_buttons(ex_char_menu_height, global_prepared_i_g_m_text_array, i_m_g_disp_array) {
  var internal_prepared_i_g_m_text_array = global_prepared_i_g_m_text_array; // for a reason i don't understand, this changes everything.
  var internal_i_g_m_disp_array = i_m_g_disp_array; // for a reason i don't understand, this changes everything.
  for (i = 0; i < ex_char_menu_height; i++) {
    $('div.' + internal_prepared_i_g_m_text_array[i] + '_menu_option').css({"top":(internal_i_g_m_disp_array[0] + 3 + (i * 30)).toString() + "px"});
    $('div.' + global_prepared_i_g_m_text_array[i] + '_menu_option').css({"left":(internal_i_g_m_disp_array[1] + 3).toString() + "px"});
    $('div.' + global_prepared_i_g_m_text_array[i] + '_menu_option').switchClass("z_index_neg_1", "z_index_5", 0);

  }
}






//back function ancillaries.

function erase_ex_char_attack_prediction_tiles() {

  $('div.mpt_red').switchClass("mpt_red", "mpt", 0);
  // 08 for enemy units . to array, for .lenth, delete the reded. That seems like the most legit way.
  // 08 the following is a lot of unnecessary work. but, "done is better than perfect", to use it a different way, for a second meaning.
  // 08 i do want to finish the whole system, and i could do that in a week. make it so that the teams kill each other. hahaha.
  for (var i = 0; i < 10; i++) {
    for (var k = 0; k < 10; k++) {
      var e_c_a_char_name = $('*[data-coord="3' + k + '3' + i + '"]').data("chname");
      if ($('*[data-coord="3' + k + '3' + i + '"]').hasClass("possible_attack_target")) {
          $('*[data-coord="3' + k + '3' + i + '"]').switchClass("reded_" + e_c_a_char_name, e_c_a_char_name, 0);
          $('*[data-coord="3' + k + '3' + i + '"]').removeClass("possible_attack_target");
      }
    }
  }
}

function generate_pre_attack_screen(external_slia, external_sria) {

//  var slia = external_slia;
//  var sria = external_sria;

  var slia = jQuery.extend(true, [], external_slia); // i don't even know why this has to be done.
  var sria = jQuery.extend(true, [], external_sria);

  				//  the basic backgrounds
  				document.getElementById("pre_atck_rec_left").innerHTML = '<img src=http://i1038.photobucket.com/albums/a463/yung_link/Java%20Emblem%20Reference%202/Java%20Emblem%20Reference%204/left%20pre-attack%20display_zpswqgvqucj.png height="150" width="284">';

  				document.getElementById("pre_atck_rec_right").innerHTML = '<img src=http://i1038.photobucket.com/albums/a463/yung_link/Java%20Emblem%20Reference%202/Java%20Emblem%20Reference%204/right%20pre-attack%20display_zpswn0lphku.png height="150" width="284">';
  				//  left side nonvariable text 08 silly that it generates this every time
  				document.getElementById("left_hp_marker").innerHTML = "HP";   // left hp marker
  				document.getElementById("left_damage_marker").innerHTML = "dmg";  // left damage marker
  				document.getElementById("left_hit_marker").innerHTML = "hit";  // left hit marker
  				document.getElementById("left_crit_marker").innerHTML = "crit"; // left crit marker
  				//  right side nonvariable text 08 silly that it generates this every time
  				document.getElementById("right_hp_marker").innerHTML = "HP"; // right hp marker
  				document.getElementById("right_damage_marker").innerHTML = "dmg";  // right damage marker
  				document.getElementById("right_hit_marker").innerHTML = "hit";  // right hit marker
  				document.getElementById("right_crit_marker").innerHTML = "crit";   // right crit marker
  				//  left side variable text
  				document.getElementById("left_char_name").innerHTML = slia[0];
  				document.getElementById("left_weap_name").innerHTML = slia[1]; // left weap name
  				document.getElementById("left_weap_uses").innerHTML = slia[2]; // left weap uses
  				document.getElementById("left_curr_hp").innerHTML = slia[3]; // left current hp
  				document.getElementById("left_max_hp").innerHTML = "/" + slia[4]; // left max hp
  				document.getElementById("left_damage").innerHTML = slia[5]; // left damage
  				document.getElementById("left_hit").innerHTML = slia[6] + " %"; // left hit
  				document.getElementById("left_crit").innerHTML = slia[7] + " %"; // left crit
  				/// right side variable text
  				document.getElementById("right_char_name").innerHTML = sria[0]; // right char name
          document.getElementById("right_weap_name").innerHTML = sria[1]; // right weap name
  				document.getElementById("right_weap_uses").innerHTML = sria[2]; // right weap uses
  				document.getElementById("right_curr_hp").innerHTML = sria[3]; // right current hp
  				document.getElementById("right_max_hp").innerHTML = "/" + sria[4]; // right max hp
  				document.getElementById("right_damage").innerHTML = sria[5]; // right damage
  				document.getElementById("right_hit").innerHTML = sria[6] + " %"; // right hit
  				document.getElementById("right_crit").innerHTML = sria[7] + " %"; // right crit

          $('p.pre_battle_screen_element_neg4').switchClass('pre_battle_screen_element_neg4', 'pre_battle_screen_element_pos7', 0);
          $('p.pre_battle_screen_element_neg5').switchClass('pre_battle_screen_element_neg5', 'pre_battle_screen_element_pos6', 0);
}

function erase_pre_attack_screen() {
  $('p.pre_battle_screen_element_pos7').switchClass('pre_battle_screen_element_pos7', 'pre_battle_screen_element_neg4', 0);
  $('p.pre_battle_screen_element_pos6').switchClass('pre_battle_screen_element_pos6', 'pre_battle_screen_element_neg5', 0);
  document.getElementById("pre_atck_rec_right").innerHTML = "";
  document.getElementById("pre_atck_rec_left").innerHTML = "";
}

function generate_attacking_character_text_array(att_cha, def_cha) {

  // these stand for aggressor character object and defender character object
  // i think i might have to copy them to get them to work, like i had to the arrays.
  var a_c_o = jQuery.extend(true, {}, att_cha); // i don't even know why this has to be done.
  var d_c_o = jQuery.extend(true, {}, def_cha); // i don't even know why this has to be done.
  var slia = [];
  // left is the aggressor
  // i'm going to have to change the program
  // later, so you can switch between items.
  // but, you know, always start somewhere. there's wisdom in that.
  slia[0] = a_c_o.char_name;
  slia[1] = a_c_o.inv_slot_1;
  slia[2] = a_c_o.inv_slot_1ur;
  slia[3] = a_c_o.cur_hp.valueOf();
  slia[4] = a_c_o.max_hp;

  // damage is ...
  // if speed is 5 greater or more, attacks twice.
  // strength or mag, plus weapon might, minus defense or resistance. (weapon rank bouns???)
  var aggressors_weapon_type = all_weapons_and_items[a_c_o.inv_slot_1iid][3];
  if ((aggressors_weapon_type === "sword") || (aggressors_weapon_type === "lance") || (aggressors_weapon_type === "axe") || (aggressors_weapon_type === "bow")) {
    slia[5] = (a_c_o.str + all_weapons_and_items[a_c_o.inv_slot_1iid][4] - d_c_o.def);
    // send some of this to the battle array.
  } else if (all_weapons_and_items[a_c_o.inv_slot_1iid][3] === "tome") {
    slia[5] = (a_c_o.mag + all_weapons_and_items[a_c_o.inv_slot_1iid][4] - d_c_o.res);
  }
  // hit is... ????
  slia[6] = 85; // until I make this into a formula, i will have it always set to 85.
  // crit is ... ????
  slia[7] = 15; // until I make this into a formula, i will have it always set to 15.

  return slia;
}

function generate_defending_character_text_array(att_cha, def_cha) {

  var a_c_o = jQuery.extend(true, {}, att_cha); // i don't even know why this has to be done.
  var d_c_o = jQuery.extend(true, {}, def_cha); // i don't even know why this has to be done.

  var sria = [];
  sria[0] = d_c_o.char_name;
  sria[1] = d_c_o.inv_slot_1;
  sria[2] = d_c_o.inv_slot_1ur;
  sria[3] = d_c_o.cur_hp.valueOf();
  sria[4] = d_c_o.max_hp;

  var defenders_weapon_type = all_weapons_and_items[d_c_o.inv_slot_1iid][3];
  if ((defenders_weapon_type === "sword") || (defenders_weapon_type === "lance") || (defenders_weapon_type === "axe") || (defenders_weapon_type === "bow")) {
    sria[5] = (d_c_o.str + all_weapons_and_items[d_c_o.inv_slot_1iid][4] - a_c_o.def);
    // send some of this to the battle array.
  } else if (all_weapons_and_items[d_c_o.inv_slot_1iid][3] === "tome") {
    sria[5] = (d_c_o.mag + all_weapons_and_items[d_c_o.inv_slot_1iid][4] - a_c_o.res);
  }
  // hit is... ????
  sria[6] = 85; // until I make this into a formula, i will have it always set to 85.
  // crit is ... ????
  sria[7] = 15; // until I make this into a formula, i will have it always set to 15.
  return sria;
}

function animate_phase_change (team_of_current_phase) {
  $("#phase_change_white_screen").switchClass("z_neg_300", "z_pos_699", 0);

  document.getElementById("phase_change_1").innerHTML = '<img src="game_files/j_e_images/phase_change/' + team_of_current_phase + '_160x1200_top.png" height="80px" width="600px">';
  $("#phase_change_1").addClass("top_phase_change_solid_banner");

  document.getElementById("phase_change_2").innerHTML = '<img src="game_files/j_e_images/phase_change/' + team_of_current_phase + '_50x1200_top.png" height="25px" width="600px">';
  $("#phase_change_2").addClass("top_phase_change_fading_banner");

  document.getElementById("phase_change_3").innerHTML = '<img src="game_files/j_e_images/phase_change/' + team_of_current_phase + '_50x1200_bottom.png" height="25px" width="600px">';
  $("#phase_change_3").addClass("bottom_phase_change_fading_banner");

  document.getElementById("phase_change_4").innerHTML = '<img src="game_files/j_e_images/phase_change/' + team_of_current_phase + '_160x1200_bottom.png" height="80px" width="600px">';
  $("#phase_change_4").addClass("bottom_phase_change_solid_banner");
}
