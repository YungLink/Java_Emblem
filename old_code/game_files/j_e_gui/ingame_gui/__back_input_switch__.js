// III. THE BACK FUNCTIONS

$(document).keydown( function (e) {
  if ((game_state === "extended character") && ((e.which === 32) || (e.which === 66))) {
      // destroy menu (there should be a function for this)
    $("div.z_index_5").switchClass("z_index_5", "z_index_neg_1", 0);
    document.getElementById("in-game general menu").innerHTML = ' ';

    // delete the data from the existential object array ...
    exis_char_obj_array[ex_char_k_pos_coord][ex_char_i_pos_coord] = "rien";

    $("div." + gl_sel_char_tag_rec).removeClass("greyed_unit"); // although, it's really an extended unit. // 08 load onto javascript
    $("div." + gl_sel_char_tag_rec).removeClass(team_of_current_phase + "_unit");
    $("div." + gl_sel_char_tag_rec).switchClass(gl_sel_char_tag_rec, "cle", 0);
    $("div." + gl_sel_char_tag_rec).removeData("chname"); // do i do this when i move characters around? ... and, does it matter ?


    // return old position from cache
    $('#x' + (ex_char_position_i_cache_converted).toString() + 'y' + (ex_char_position_k_cache_converted).toString() + 'z3').switchClass("cle", "selected_" + gl_sel_char_tag_rec, 0);
    $('#x' + (ex_char_position_i_cache_converted).toString() + 'y' + (ex_char_position_k_cache_converted).toString() + 'z3').addClass('sel_unmoved_unit');
    $('#x' + (ex_char_position_i_cache_converted).toString() + 'y' + (ex_char_position_k_cache_converted).toString() + 'z3').addClass(team_of_current_phase + '_unit');
    $('#x' + (ex_char_position_i_cache_converted).toString() + 'y' + (ex_char_position_k_cache_converted).toString() + 'z3').data("chname", gl_sel_char_tag_rec);



    // add the data to to existential object array
    // all without speaking the sacred and forbidden object names....

    if (gl_sel_char_tag_rec === "erica1") {
      exis_char_obj_array[ex_char_position_k_cache_array_coord][ex_char_position_i_cache_array_coord] = erica1;
    } else if (gl_sel_char_tag_rec === "npc_knight1") {
      exis_char_obj_array[ex_char_position_k_cache_array_coord][ex_char_position_i_cache_array_coord] = npc_knight1;
    } else if (gl_sel_char_tag_rec === "npc_knight2") {
      exis_char_obj_array[ex_char_position_k_cache_array_coord][ex_char_position_i_cache_array_coord] = npc_knight2;
    } else if (gl_sel_char_tag_rec === "npc_knight3") {
      exis_char_obj_array[ex_char_position_k_cache_array_coord][ex_char_position_i_cache_array_coord] = npc_knight3;
    } else if (gl_sel_char_tag_rec === "pent1") {
      exis_char_obj_array[ex_char_position_k_cache_array_coord][ex_char_position_i_cache_array_coord] = pent1;
    } else if (gl_sel_char_tag_rec === "seth1") {
      exis_char_obj_array[ex_char_position_k_cache_array_coord][ex_char_position_i_cache_array_coord] = seth1;
    } else if (gl_sel_char_tag_rec === "npc_knight001") {
      exis_char_obj_array[ex_char_position_k_cache_array_coord][ex_char_position_i_cache_array_coord] = npc_knight001;
    } else if (gl_sel_char_tag_rec === "npc_knight002") {
      exis_char_obj_array[ex_char_position_k_cache_array_coord][ex_char_position_i_cache_array_coord] = npc_knight002;
    }

  // i think i need to change the game state or something. or the character select status.

    ex_char_position_k_cache = "empty"; // maybe it's these that don't work. i'm calling it a night.
    ex_char_position_i_cache = "empty";



    // -----------

    for (var i = 0; i < 10; i++) {
      for (var k = 0; k < 10; k++) {
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
    // i think that this part has to come second, for reasons I honestly don't understand.
    for (var i = 0; i < 10; i++) {
      for (var k = 0; k < 10; k++) {
        if (mov_pre_array2[k][i] === "B") {
//					//and here is where the magic happens
        $('*[data-coord="0'+ k +'0' + i +'"]').switchClass('mpt','mpt_blue', 0);
        $('*[data-coord="3'+ k +'3' + i +'"]').switchClass('cle','cle_blue', 0);	// this notation is going to become a problem for maps larger than 10 x 10.
        }
        if (mov_pre_array2[k][i] === "R") {
        $('*[data-coord="0'+ k +'0' + i +'"]').switchClass('mpt','mpt_red', 0);	// hmm. interesting that this happens on the z0 level.
        }
      }
    }


    game_state = "character selected";
    ex_char_position_k_cache_converted = (10 - Number(this.getAttribute("data-coord").substr(1, 1))); // these aren't going to work once we get into double digits.
    ex_char_position_i_cache_converted = (1 + Number(this.getAttribute("data-coord").substr(3, 1))); // but i've said that before.
   // this part actually works really well.



} else if ((game_state === "character selected") && ((e.which === 32) || (e.which === 66))) {
    // clean up from the M P A
    $('div.mpt_blue').switchClass('mpt_blue','mpt', 0);
    $('div.mpt_red').switchClass('mpt_red', 'mpt', 0);
    $('div.cle_blue').switchClass('cle_blue','cle', 0);


    for (var i = 0; i < 10; i++) {
      for (var k = 0; k < 10; k++) {
        // if you find a 'b' that is also an ally unit (B on array, the other on cle) ...
        if ((mov_pre_array2[k][i] === "B") && ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass(team_of_current_phase + '_unit'))) { // clear one line
          // if it's its greyed version ...
          if ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass("greyed_unit")) {
          // change it to "greyed-blued" :
            $('*[data-coord="3'+ k +'3' + i +'"]').switchClass("greyed_blued_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), "greyed_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), 0);
          // otherwise, since it is unmoved ...
          } else if ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass("unmoved_unit")) {
          // add "blued" in front of it.
            $('*[data-coord="3'+ k +'3' + i +'"]').switchClass('blued_' + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), 0);
          }
        }
        //  if you find an 'r' that is also an enemy unit (R on array, the other on cle) ...
        if ((mov_pre_array2[k][i] === "R") && ($('*[data-coord="3'+ k +'3' + i +'"]').hasClass(color_of_opposite_team + '_unit'))) {
          // since it is automatically going to be unmoved ...
          // add "reded" in front of it.
            $('*[data-coord="3'+ k +'3' + i +'"]').switchClass("reded_" + $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), $('*[data-coord="3'+ k +'3' + i +'"]').data("chname"), 0);
        }
      }
    }

    // change the character back to unselected.
    $('div.selected_' + gl_sel_char_tag_rec).switchClass('selected_' + gl_sel_char_tag_rec, gl_sel_char_tag_rec, 0);
    $('div.' + gl_sel_char_tag_rec).switchClass("sel_unmoved_unit", "unmoved_unit", 0);
    // change the game state.
    game_state = "open map";
    // empty the global variables which hold units.
    gl_sel_char_tag_rec = "none";
    char_select_status = "unselected";
  } else if ((game_state === "select_target") && ((e.which === 32) || (e.which === 66))) {

    erase_ex_char_attack_prediction_tiles();
    // open the menu again.

    // something has to happen here. *******************************
    var the_current_k = ex_char_k_pos_coord; //
    var the_current_i = ex_char_i_pos_coord; //

    var attack_option_load = calculate_atk_optn_truth_value(the_current_k, the_current_i);

    var ex_char_menu_boolean_array = create_exis_menu_array(attack_option_load); // 08 *** wormhole notation // *** passing the buck.

    var global_prepared_i_g_m_text_array = populate_ex_char_menu_text(ex_char_menu_boolean_array); // 08 ** wormhole notation // *** passing the buck.
    var ex_char_menu_height = global_prepared_i_g_m_text_array.length;


    var i_g_m_disp_array = relatively_position_ex_char_menu(the_current_k, the_current_i, ex_char_menu_height); // 08 *** wormhole notation. // *** piping compatable (yes, passing the buck)

    // generates the character extend menu frame, without any buttons.
    document.getElementById("in-game general menu").innerHTML += '<div style="top: ' + i_g_m_disp_array[0].toString() + 'px; left: ' + i_g_m_disp_array[1].toString() + 'px; width:120px; height: ' + i_g_m_disp_array[2].toString() + 'px; display: inline-block; opacity: .7; z-index: 4; position: fixed; border-radius: 5px; background-color: #c2d6d6;" ></div>';
    // here is where i can generate all of the menu items on top of it. really ought to use a function for this, too.

    relatively_position_and_generate_ex_char_menu_buttons(ex_char_menu_height, global_prepared_i_g_m_text_array, i_g_m_disp_array);

    game_state = "extended character";

  } else if ((game_state === "pre_attack_screen") && ((e.which === 32) || (e.which === 66))) {
    erase_pre_attack_screen();
    game_state = "select_target";
    // recolor?
  }
});

// debugging tools, the flag, for the technique, "flagging", or, "progressive flagging":
// document.getElementById("in-game general menu").innerHTML += '<div class ="signal"></div>';


// the console log flag!! holy shit this will be useful. 09 this is probably one of the best tools in my kit so far.
// document.getElementById("in-game general menu").innerHTML += '<div class="signal">' + 'signal' + '</div>';
//  [ ] make this into a function, defined in its own page. flag(thing to write);
