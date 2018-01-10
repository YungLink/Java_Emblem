
			// II. THE CLICK FUNCTIONS

		$('div').click(function() {


				if ((game_state === "open map") && $(this).hasClass("unmoved_unit")  && (char_select_status === "unselected") && $(this).hasClass(team_of_current_phase + "_unit")) {



					var character_key = $(this).data("chname");

					$(this).switchClass(character_key, 'selected_' + character_key, 0);
					$(this).switchClass("unmoved_unit", "sel_unmoved_unit", 0);

					char_select_status = "selected";
					gl_sel_char_tag_rec = character_key; // here i set one variable equal to another.

					var sel_char_k_coord = Number(this.getAttribute("data-coord").substr(1, 1));
					var sel_char_i_coord = Number(this.getAttribute("data-coord").substr(3, 1));

					var temp_k = sel_char_k_coord;
					var temp_i = sel_char_i_coord;
          mov_pre_array2 = mov_pre_alg(exis_char_obj_array[temp_k][temp_i].move, exis_char_obj_array[temp_k][temp_i].unit_move_type, all_weapons_and_items[exis_char_obj_array[temp_k][temp_i].inv_slot_1iid][7], false).slice(0);
          mov_pre_array_cache = $.extend(true, [], mov_pre_array2); // 08 added 0825
					// i'm about to duplicate this, so it really oughta be a function.

					color_m_p_tiles();
					color_units_spaces();

					game_state = "character selected";

					// these can't be plaed anywhere else because
					ex_char_position_k_cache_array_coord = Number(this.getAttribute("data-coord").substr(1, 1));
					ex_char_position_i_cache_array_coord = Number(this.getAttribute("data-coord").substr(3, 1));

					ex_char_position_k_cache_converted = (10 - Number(this.getAttribute("data-coord").substr(1, 1))); // these aren't going to work once we get into double digits.
					ex_char_position_i_cache_converted = (1 + Number(this.getAttribute("data-coord").substr(3, 1)));  // but i've said that before.




				} else if ( $(this).hasClass("sel_unmoved_unit") ) {


					// changes
          simple_mpt_erase(); // defined in:  "__click_and_back_function_ancillaries__.js", number ___.

					// changes character animation, existential status, and a pre-emptive greyed_unit status
					// found in ... __click_and_back_function_ancillaries__.js
				//	var this_character = $(this).data("chname");
					remove_unit_select_status(); // defined in:  "__click_and_back_function_ancillaries__.js", number ___.

					uncolor_units_spaces();

          var the_current_k = Number(this.getAttribute("data-coord").substr(1, 1));
					var the_current_i = Number(this.getAttribute("data-coord").substr(3, 1));
          // a global change
          ex_char_k_pos_coord = Number(this.getAttribute("data-coord").substr(1, 1));
          ex_char_i_pos_coord = Number(this.getAttribute("data-coord").substr(3, 1));



          // add referent, subtract referent
          // (add referent)
					if (gl_sel_char_tag_rec === "erica1") {
            exis_char_obj_array[the_current_k][the_current_i] = erica1;
          } else if (gl_sel_char_tag_rec === "npc_knight1") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight1;
          } else if (gl_sel_char_tag_rec === "npc_knight2") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight2;
          } else if (gl_sel_char_tag_rec === "npc_knight3") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight3;
          } else if (gl_sel_char_tag_rec === "pent1") {
            exis_char_obj_array[the_current_k][the_current_i] = pent1;
          } else if (gl_sel_char_tag_rec === "seth1") {
            exis_char_obj_array[the_current_k][the_current_i] = seth1;
          } else if (gl_sel_char_tag_rec === "npc_knight001") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight001;
          } else if (gl_sel_char_tag_rec === "npc_knight002") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight002;
          } else if (gl_sel_char_tag_rec === "npc_archer_green_team") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_green_team;
          } else if (gl_sel_char_tag_rec === "npc_archer_green_team_02") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_green_team_02;
          } else if (gl_sel_char_tag_rec === "npc_archer_green_team_03") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_green_team_03;
          } else if (gl_sel_char_tag_rec === "npc_archer_green_team_04") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_green_team_04;

          } else if (gl_sel_char_tag_rec === "npc_archer_red_team") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_red_team;
          } else if (gl_sel_char_tag_rec === "npc_archer_red_team_02") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_red_team_02;
          } else if (gl_sel_char_tag_rec === "npc_archer_red_team_03") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_red_team_03;
          } else if (gl_sel_char_tag_rec === "npc_archer_red_team_04") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_red_team_04;

          } else if (gl_sel_char_tag_rec === "npc_fighter_green_team") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_green_team;
          } else if (gl_sel_char_tag_rec === "npc_fighter_green_team_02") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_green_team_02;
          } else if (gl_sel_char_tag_rec === "npc_fighter_green_team_03") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_green_team_03;
          } else if (gl_sel_char_tag_rec === "npc_fighter_green_team_04") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_green_team_04;

          } else if (gl_sel_char_tag_rec === "npc_fighter_red_team") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_red_team;
          } else if (gl_sel_char_tag_rec === "npc_fighter_red_team_02") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_red_team_02;
          } else if (gl_sel_char_tag_rec === "npc_fighter_red_team_03") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_red_team_03;
          } else if (gl_sel_char_tag_rec === "npc_fighter_red_team_04") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_red_team_04;

					} else if (gl_sel_char_tag_rec === "paladin_red_team") {
						exis_char_obj_array[the_current_k][the_current_i] = paladin_red_team;
					} else if (gl_sel_char_tag_rec === "lord_green_team") {
						exis_char_obj_array[the_current_k][the_current_i] = lord_green_team;
					} else if (gl_sel_char_tag_rec === "sage_green_team") {
						exis_char_obj_array[the_current_k][the_current_i] = sage_green_team;
					}

					var attack_option_load = calculate_atk_optn_truth_value(the_current_k, the_current_i);


					var ex_char_menu_boolean_array = create_exis_menu_array(attack_option_load);


					var global_prepared_i_g_m_text_array = populate_ex_char_menu_text(ex_char_menu_boolean_array); // 08 ** wormhole notation // *** passing the buck.

					var ex_char_menu_height = global_prepared_i_g_m_text_array.length;


					var i_g_m_disp_array = relatively_position_ex_char_menu(the_current_k, the_current_i, ex_char_menu_height); // 08 *** wormhole notation. // *** piping compatable (yes, passing the buck)

					// generates the character extend menu.
					document.getElementById("in-game general menu").innerHTML += '<div style="top: ' + i_g_m_disp_array[0].toString() + 'px; left: ' + i_g_m_disp_array[1].toString() + 'px; width:120px; height: ' + i_g_m_disp_array[2].toString() + 'px; display: inline-block; opacity: .7; z-index: 4; position: fixed; border-radius: 5px; background-color: #c2d6d6;" ></div>';
					// here is where i can generate all of the menu items on top of it. really ought to use a function for this, too.

					relatively_position_and_generate_ex_char_menu_buttons(ex_char_menu_height, global_prepared_i_g_m_text_array, i_g_m_disp_array);

					$(this).switchClass("selected_" + gl_sel_char_tag_rec, gl_sel_char_tag_rec, 0);
					$(this).addClass("greyed_unit");

					game_state = "extended character";


					// do i have to clean out the character key here?
				} else if ( $(this).hasClass("cle_blue") && (char_select_status === "selected") && !$(this).hasClass("unmoved_unit") && !$(this).hasClass("greyed_unit") ) {
					// data is cached from way back when the unit was selected.
					// subtracting all of the data from the old square.
					$('div.selected_' + gl_sel_char_tag_rec).removeClass('sel_unmoved_unit'); // removed
					$('div.selected_' + gl_sel_char_tag_rec).removeClass(team_of_current_phase + '_unit'); // mirror 003
					$('div.selected_' + gl_sel_char_tag_rec).removeData("chname"); // mirror 001
					$('div.selected_' + gl_sel_char_tag_rec).switchClass("selected_" + gl_sel_char_tag_rec, "cle", 0);
					// adding all of the data to the new square.
					// some interesting choices here.
					$(this).switchClass("cle_blue", gl_sel_char_tag_rec, 0);
					$(this).addClass("greyed_unit"); // although, it's really an extended unit. // 08 this is the source of my earlier issue. //added
          // change the above??? ^^^
					$(this).addClass(team_of_current_phase + "_unit"); // mirror 003


					$(this).data("chname", gl_sel_char_tag_rec); // mirror 001


          // cleaning up from the m.p.a.
					simple_mpt_erase();

          // clean up the part which colors tiles with units on them ... (second use of this. it ought to be a function.
          // except that it needs not to rely on the DOM. But, we'll see if i ever change that. )
          // this is such a waste of little elves that i want to puke.

          uncolor_units_spaces();

					// I need to make all of these separate functions, defined a long a-- time ago,
					// not referring to anything outside of themselves and instead taking parameters.

					// i need the part here where it decides which parts of the menu can be included, and where each will sit.

					var the_current_k = Number(this.getAttribute("data-coord").substr(1, 1));
					var the_current_i = Number(this.getAttribute("data-coord").substr(3, 1));
          // a global change
          ex_char_k_pos_coord = Number(this.getAttribute("data-coord").substr(1, 1));
          ex_char_i_pos_coord = Number(this.getAttribute("data-coord").substr(3, 1));


          if (gl_sel_char_tag_rec === "erica1") {
            exis_char_obj_array[the_current_k][the_current_i] = erica1;
          } else if (gl_sel_char_tag_rec === "npc_knight1") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight1;
          } else if (gl_sel_char_tag_rec === "npc_knight2") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight2;
          } else if (gl_sel_char_tag_rec === "npc_knight3") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight3;
          } else if (gl_sel_char_tag_rec === "pent1") {
            exis_char_obj_array[the_current_k][the_current_i] = pent1;
          } else if (gl_sel_char_tag_rec === "seth1") {
            exis_char_obj_array[the_current_k][the_current_i] = seth1;
          } else if (gl_sel_char_tag_rec === "npc_knight001") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight001;
          } else if (gl_sel_char_tag_rec === "npc_knight002") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_knight002;
          } else if (gl_sel_char_tag_rec === "npc_archer_green_team") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_green_team;
          } else if (gl_sel_char_tag_rec === "npc_archer_green_team_02") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_green_team_02;
          } else if (gl_sel_char_tag_rec === "npc_archer_green_team_03") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_green_team_03;
          } else if (gl_sel_char_tag_rec === "npc_archer_green_team_04") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_green_team_04;

          } else if (gl_sel_char_tag_rec === "npc_archer_red_team") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_red_team;
          } else if (gl_sel_char_tag_rec === "npc_archer_red_team_02") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_red_team_02;
          } else if (gl_sel_char_tag_rec === "npc_archer_red_team_03") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_red_team_03;
          } else if (gl_sel_char_tag_rec === "npc_archer_red_team_04") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_archer_red_team_04;

          } else if (gl_sel_char_tag_rec === "npc_fighter_green_team") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_green_team;
          } else if (gl_sel_char_tag_rec === "npc_fighter_green_team_02") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_green_team_02;
          } else if (gl_sel_char_tag_rec === "npc_fighter_green_team_03") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_green_team_03;
          } else if (gl_sel_char_tag_rec === "npc_fighter_green_team_04") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_green_team_04;

          } else if (gl_sel_char_tag_rec === "npc_fighter_red_team") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_red_team;
          } else if (gl_sel_char_tag_rec === "npc_fighter_red_team_02") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_red_team_02;
          } else if (gl_sel_char_tag_rec === "npc_fighter_red_team_03") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_red_team_03;
          } else if (gl_sel_char_tag_rec === "npc_fighter_red_team_04") {
            exis_char_obj_array[the_current_k][the_current_i] = npc_fighter_red_team_04;

					} else if (gl_sel_char_tag_rec === "paladin_red_team") {
						exis_char_obj_array[the_current_k][the_current_i] = paladin_red_team;
					} else if (gl_sel_char_tag_rec === "lord_green_team") {
						exis_char_obj_array[the_current_k][the_current_i] = lord_green_team;
					} else if (gl_sel_char_tag_rec === "sage_green_team") {
						exis_char_obj_array[the_current_k][the_current_i] = sage_green_team;
					}




          exis_char_obj_array[ex_char_position_k_cache_array_coord][ex_char_position_i_cache_array_coord] = "rien";
    //    exis_char_obj_array[the_current_k][the_current_i] = ;


          // subtract referent



					// ATTACK OPTION
					// pipe attack range can equal "1", "1-2", and "2 only" // oh... i guess piping automatically happens when you have function parameters.
					// i need to change this to a function, immediately. and i need to find a way to become more organized.



					var attack_option_load = calculate_atk_optn_truth_value(the_current_k, the_current_i);

					var ex_char_menu_boolean_array = create_exis_menu_array(attack_option_load); // 08 *** wormhole notation // *** passing the buck.

					var global_prepared_i_g_m_text_array = populate_ex_char_menu_text(ex_char_menu_boolean_array); // 08 ** wormhole notation // *** passing the buck.
  				var ex_char_menu_height = global_prepared_i_g_m_text_array.length;


					var i_g_m_disp_array = relatively_position_ex_char_menu(the_current_k, the_current_i, ex_char_menu_height); // 08 *** wormhole notation. // *** piping compatable (yes, passing the buck)

					// flag

					// generates the character extend menu frame, without any buttons.
					document.getElementById("in-game general menu").innerHTML += '<div style="top: ' + i_g_m_disp_array[0].toString() + 'px; left: ' + i_g_m_disp_array[1].toString() + 'px; width:120px; height: ' + i_g_m_disp_array[2].toString() + 'px; display: inline-block; opacity: .7; z-index: 4; position: fixed; border-radius: 5px; background-color: #c2d6d6;" ></div>';
					// here is where i can generate all of the menu items on top of it. really ought to use a function for this, too.

					relatively_position_and_generate_ex_char_menu_buttons(ex_char_menu_height, global_prepared_i_g_m_text_array, i_g_m_disp_array);
					game_state = "extended character";


        } else if ($(this).hasClass("attack_menu_option") && (game_state === "extended character")) {

					/*
          i will make a new function:
          extended attack prediction algorithm, EAPA, pronounced 'EEE-puh'
          */

          // kill the extended character menu (this can be made into a function) ...
          $("div.z_index_5").switchClass("z_index_5", "z_index_neg_1", 0);
					document.getElementById("in-game general menu").innerHTML = ' ';

          // run the exctended character attack prediction algorithm ...
          E_A_P_A();
          // game state alteration ...
          game_state = "select_target";


				} else if (($(this).hasClass("wait_menu_option")) && (game_state === "extended character")) {
					// grey the waiting unit.
					$("div." + gl_sel_char_tag_rec).switchClass(gl_sel_char_tag_rec, "greyed_" + gl_sel_char_tag_rec, 0);
					gl_sel_char_tag_rec = "none";
					char_select_status = "unselected";
					// lose the ingame menu.
					$("div.z_index_5").switchClass("z_index_5", "z_index_neg_1", 0);
					document.getElementById("in-game general menu").innerHTML = ' ';
					game_state = "open map";
					// change phases (this function should be declared seperately.)

					// ADD THE PHASE CHANGE EVENT SCREEN

					//
						// this part ends the turn, and doesn't really belong here anymore.
						if ($('.' + team_of_current_phase + '_unit.unmoved_unit').length === 0) {  // this combines the classes. it's the length of the junction.
						// PE - then switch phases, otherwise, don't.
						// the following block is, unfortunately, decidedly un-general; un-universal.
					//		nada = "nada";
							if (team_of_current_phase === "green") {
								color_of_opposite_team = "green";
								team_of_current_phase = "red";
								// PE switch all the greyed to unmoved, existentially ...
								// PE and switch the concomitant animations back, too ... (this happens first)

								// There once was a line i left here that screwed things up immensely.
							} else if (team_of_current_phase === "red") {
								color_of_opposite_team = "red";
								team_of_current_phase = "green";
							}
							var refreshing_units_array = $('div.greyed_unit').toArray();
							for (i = 0; i < refreshing_units_array.length; i++){
								$(refreshing_units_array[i]).switchClass("greyed_" + $(refreshing_units_array[i]).data("chname"), $(refreshing_units_array[i]).data("chname"));
							};
							// lol what is the difference between these two statements. oh. nvm.
							$('div.greyed_unit').switchClass('greyed_unit','unmoved_unit', 0);
				//			animate_phase_change(team_of_current_phase);
					//		game_state = "confirm_phase_change";
						}

        // major section : "other?"
        } else if ((game_state === "select_target") && $(this).hasClass("possible_attack_target")) {



          // 08 this is all pretty muddled and confusing right now.
          // 08 these are objects
          // this stands for attacking character and defending character.

          var att_cha = jQuery.extend(true, {}, exis_char_obj_array[ex_char_k_pos_coord][ex_char_i_pos_coord]); //i'll need to write these
          var def_cha = jQuery.extend(true, {}, exis_char_obj_array[Number(this.getAttribute("data-coord").substr(1, 1))][Number(this.getAttribute("data-coord").substr(3, 1))]); //i'll need to write these




					// save them to global here.
					// cmon...almost done... it almost loops.
					global_def_cha_k_coord = Number(this.getAttribute("data-coord").substr(1, 1));
					global_def_cha_i_coord = Number(this.getAttribute("data-coord").substr(3, 1));
					// i have to make sure that this is the only way by which a unit can be attacked.
					// if there are other ways, like, shifting through possible attack targets,
					// then those will have to change these values.

					if (ex_char_k_pos_coord === global_def_cha_k_coord) {
						if ((ex_char_i_pos_coord === (global_def_cha_i_coord + 1)) || (ex_char_i_pos_coord === (global_def_cha_i_coord - 1))) {
							range_of_attack = "1";
						} else {
							range_of_attack = "2";
						}
					} else if ((ex_char_k_pos_coord === (global_def_cha_k_coord + 1)) || (ex_char_k_pos_coord === (global_def_cha_k_coord - 1))) {
						if (ex_char_i_pos_coord === global_def_cha_i_coord) {
							range_of_attack = "1";
						} else {
							range_of_attack = "2";
						}
					} else {
						range_of_attack = "2";
					}
					// 09. oh. there is a faster way.

          // 		template
    //      var slia =
    //      character name,
    //      weapon name,
    //      weapon uses,
    //      health remaining,
    //      health total,
    //      dmg,
    //      hit perc,
    //      crit perc;

          // 08 these are arrays


					var external_slia = generate_attacking_character_text_array(att_cha, def_cha);
          var external_sria = generate_defending_character_text_array(att_cha, def_cha);


          // ex_char_k_pos_coord
					// 09 this hasn't been texted at all, which is hilarious.
          generate_pre_attack_screen(external_slia, external_sria);
	  			// 09 the flag works even here. most unexpected.

					global_b_e_atk_name = external_slia[0];

					global_attacker_b_e_a[0] = external_slia[3].valueOf(); // current hp.
					global_attacker_b_e_a[1] = 85; // hit.    alwaus 85 until i calculate it.
					global_attacker_b_e_a[2] = external_slia[5].valueOf(); // damage
					global_attacker_b_e_a[3] = 15; // crit. 	always 15 until i calculate it.
					global_attacker_b_e_a[4] = false; // last use always false for now.
					// five is set with the function.
					global_attacker_b_e_a[6] = "empty. "; // there is no attacker six.

					global_b_e_def_name = external_sria[0];

					global_defender_b_e_a[0] = external_sria[3].valueOf(); // current hp.
					global_defender_b_e_a[1] = 85; // hit.     always 85 until i calculate it.
					global_defender_b_e_a[2] = external_sria[5].valueOf(); // damage
					global_defender_b_e_a[3] = 15; // crit.    always 15 until i calculate it.
					global_defender_b_e_a[4] = false; // last use always false for now.
					// five is set with the function.


					var d_c_r = all_weapons_and_items[def_cha.inv_slot_1iid][7];
					// shoot. the range at which they are attacking is stored nowhere.
					if (((range_of_attack === "1") && (d_c_r === "2 only")) || ((range_of_attack === "2") && (d_c_r === "1"))) {
					global_defender_b_e_a[6] = false;
					} else {
					global_defender_b_e_a[6] = true;
					}
					// speed advantage calculation. (attacking twice.)
					if ((att_cha.spd - 5) >= def_cha.spd) {
						global_attacker_b_e_a[5] = true;
						global_defender_b_e_a[5] = false;
					} else if ((def_cha.spd - 5) >= att_cha.spd) {
						global_attacker_b_e_a[5] = false;
						global_defender_b_e_a[5] = true;
					} else {
						global_attacker_b_e_a[5] = false;
						global_defender_b_e_a[5] = false;
					}

          game_state = "pre_attack_screen";


        } else if ((game_state === "pre_attack_screen") && $(this.hasClass("confirm_option"))) {
					var placeholder = "placeholder";
					// generate_live_battle_console();
        }


		});
		// temproary, probably to be an alternate later.
		$(document).keydown( function (e) {
		  // if the user presses enter ...
		  if ((game_state === "pre_attack_screen") && (e.which === 13)) {
				// variables for generate_live_battle_console.
				// var b_e_left_hp_remaining = "empty. ";
				// var b_e_right_hp_remaining = "empty. ";
		    generate_live_battle_console(global_attacker_b_e_a, global_defender_b_e_a, global_b_e_atk_name, global_b_e_def_name);
				erase_pre_attack_screen();
				erase_ex_char_attack_prediction_tiles();
				gl_sel_char_tag_rec = "none";
				char_select_status = "unselected";

				// end the sequence if its to be ended.
				// this part ends the turn, and doesn't really belong here anymore.
				if ($('.' + team_of_current_phase + '_unit.unmoved_unit').length === 0) {  // this combines the classes. it's the length of the junction.
				// PE - then switch phases, otherwise, don't.
				// the following block is, unfortunately, decidedly un-general; un-universal.
			//		nada = "nada";
					if (team_of_current_phase === "green") {
						color_of_opposite_team = "green";
						team_of_current_phase = "red";
						// PE switch all the greyed to unmoved, existentially ...
						// PE and switch the concomitant animations back, too ... (this happens first)

						// There once was a line i left here that screwed things up immensely. 
					} else if (team_of_current_phase === "red") {
						color_of_opposite_team = "red";
						team_of_current_phase = "green";
					}
					var refreshing_units_array = $('div.greyed_unit').toArray();
					for (i = 0; i < refreshing_units_array.length; i++){
						$(refreshing_units_array[i]).switchClass("greyed_" + $(refreshing_units_array[i]).data("chname"), $(refreshing_units_array[i]).data("chname"));
					};
					// lol what is the difference between these two statements. oh. nvm.
					$('div.greyed_unit').switchClass('greyed_unit','unmoved_unit', 0);
		//			animate_phase_change(team_of_current_phase);
			//		game_state = "confirm_phase_change";
				}

		  } // switch option close
		}); // enterpress close
