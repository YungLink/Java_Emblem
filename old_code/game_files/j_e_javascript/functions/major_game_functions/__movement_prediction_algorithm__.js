//  ---   ---   ---   ---   ---	  --- // ---   ---   ---   ---	---   ---   ---   ---   ---	  ---   ---   ---   ---   ---
// Movement Prediction Algorithm.
//  ---   ---   ---   ---   ---	  --- // ---   ---   ---   ---	---   ---   ---   ---   ---   ---   ---   ---   ---   ---
			function mov_pre_alg(unit_mov, unit_type, atk_range, heal_t_f) {

/*			mov_pre_array = 	[
				    ["_", "_", "_", "_", "_", "X", "_", "X", "X", "X"],
				    ["_", "_", "F", "_", "_", "X", "_", "X", "_", "X"],
				    ["_", "F", "_", "_", "_", "X", "_", "_", "_", "_"],
				    ["_", "_", "_", "_", "X", "X", "X", "X", "_", "X"],
				    ["_", "_", "_", "_", "_", "X", "_", "_", "_", "_"],
				    ["W", "_", "W", "W", "_", "_", "_", "_", "_", "_"],
				    ["W", "_", "W", "W", "_", "_", "_", "_", "_", "_"],
				    ["_", "_", "_", "W", "W", "_", "_", "_", "_", "_"],
				    ["_", "_", "_", "W", "W", "_", "_", "F", "_", "F"],
				    ["F", "_", "_", "W", "W", "_", "_", "F", "F", "_"]
				]; */

		mov_pre_array = 	[
				["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
				["_", "X", "_", "_", "_", "_", "_", "_", "_", "_"],
				["_", "X", "_", "_", "_", "_", "_", "X", "_", "_"],
				["_", "X", "_", "_", "X", "_", "_", "_", "_", "_"],
				["_", "_", "_", "_", "_", "_", "X", "X", "X", "X"],
				["X", "X", "X", "X", "_", "_", "_", "_", "_", "_"],
				["_", "_", "_", "_", "_", "X", "_", "_", "X", "_"],
				["_", "_", "X", "_", "_", "_", "_", "_", "X", "_"],
				["_", "_", "_", "_", "_", "_", "_", "_", "X", "_"],
				["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"]
			];
			// this changes the array location of the selected player
			// to "P", enabling the movement prediction algorithm to work.
			//
			var xx = document.getElementsByClassName("selected_" + gl_sel_char_tag_rec)[0].getAttribute("data-coord");
			var xx1 = xx.substr(1, 1);
			var xx2 = xx.substr(3, 1);
			mov_pre_array[xx1][xx2] = "P";


	// this code is borrowed from my solution to the unit refreshing problem.

			// then the same thing for all the
			var enemy_units_array = $('div.' + color_of_opposite_team + '_unit').toArray();
			for (i = 0; i < enemy_units_array.length; i++) {
				var en_dat_coord_complex = document.getElementsByClassName(color_of_opposite_team + '_unit')[i].getAttribute("data-coord");
				var simple_x = en_dat_coord_complex.substr(1, 1);
				var simple_y = en_dat_coord_complex.substr(3, 1);
				mov_pre_array[simple_x][simple_y] = "E";
			}

	//	I.	// I. Movement Tiles.

			for (var j = 1; j < unit_mov +1; j++) {
				for (var i = 0; i < 10; i++) {
			    	for (var k = 0; k < 10; k++) {
						if (mov_pre_array[k][i] === "P") {
							if (k > 0) {
								if (unit_type === "flying") {
									if (mov_pre_array[k-1][i] === "_" || mov_pre_array[k-1][i] === "W" || mov_pre_array[k-1][i] === "F") {
										mov_pre_array[k-1][i] = "K";
									}
								} else if (unit_type === "ground") { // ground forest movement 1/4 ...
									if (mov_pre_array[k-1][i] === "_") {
									mov_pre_array[k-1][i] = "K";
									} else if (mov_pre_array[k-1][i] === "F") {
										mov_pre_array[k-1][i] = "_T"; // forest 1 remaining temporary
									}
								}
							}
						} else if (mov_pre_array[k][i] === "_T2") {
							mov_pre_array[k][i] = "K";
						}
			    	}
				}
				for (var i = 0; i < 10; i++) {
			    	for (var k = 0; k < 10; k++) {
						if (mov_pre_array[k][i] === "P") {
							if (i < 9) {
								if (unit_type === "flying") {
									if (mov_pre_array[k][i+1] === "_" || mov_pre_array[k][i+1] === "W" || mov_pre_array[k][i+1] === "F") {
										mov_pre_array[k][i+1] = "K";
									}
								} else if (unit_type === "ground") { // ground forest movement 2/4 ...
									if (mov_pre_array[k][i+1] === "_") {
										mov_pre_array[k][i+1] = "K";
									} else if (mov_pre_array[k][i+1] === "F") {
										mov_pre_array[k][i+1] = "_T";
									}
								}
							}
						} else if (mov_pre_array[k][i] === "_T2") {
							mov_pre_array[k][i] = "K";
						}
			    	}
				}
				for (var i = 0; i < 10; i++) {
			    	for (var k = 0; k < 10; k++) {
						if (mov_pre_array[k][i] === "P") {
							if (k < 9) {
								if (unit_type === "flying") {
									if (mov_pre_array[k+1][i] === "_" || mov_pre_array[k+1][i] === "W" || mov_pre_array[k+1][i] === "F") {
										mov_pre_array[k+1][i] = "K";
									}
								} else if (unit_type === "ground") {  // ground forest movement 3/4 ...
									if (mov_pre_array[k+1][i] === "_") {
									mov_pre_array[k+1][i] = "K";
									} else if (mov_pre_array[k+1][i] === "F") {
										mov_pre_array[k+1][i] = "_T";
									}
								}
							}
						} else if (mov_pre_array[k][i] === "_T2") {
							mov_pre_array[k][i] = "K";
						}
			    	}
				}
				for (var i = 0; i < 10; i++) {
			    	for (var k = 0; k < 10; k++) {
						if (mov_pre_array[k][i] === "P") {
							if (i > 0) {
								if (unit_type === "flying") {
									if (mov_pre_array[k][i-1] === "_" || mov_pre_array[k][i-1] === "W" || mov_pre_array[k][i-1] === "F") {
										mov_pre_array[k][i-1] = "K";
									}
								} else if (unit_type === "ground") { // ground forest movement 4/4 ...
									if (mov_pre_array[k][i-1] === "_") {
									mov_pre_array[k][i-1] = "K";
									} else if (mov_pre_array[k][i-1] === "F") {
										mov_pre_array[k][i-1] = "_T";
									}
								}
							}
						} else if (mov_pre_array[k][i] === "_T2") {
							mov_pre_array[k][i] = "K";
						}
			    	}
				}
				//appendage. 5th section of part I.
				for (var i = 0; i < 10; i++) {
			    	for (var k = 0; k < 10; k++) {
						if (mov_pre_array[k][i] === "P") {
							mov_pre_array[k][i] = "B";
			        	} else if (mov_pre_array[k][i] === "K") {
							mov_pre_array[k][i] = "P";
						} else if (mov_pre_array[k][i] === "_T") {
							mov_pre_array[k][i] = "_T2";
						}
			    	}
				}
			}
			//  --- only happens once.
			for (var i = 0; i < 10; i++) {
				for (var k = 0; k < 10; k++) {
					if (mov_pre_array[k][i] === "P") {
						mov_pre_array[k][i] = "B";
					// some funky forest-related business.
					} else if (mov_pre_array[k][i] === "_T2" || mov_pre_array[k][i] === "F") {
						mov_pre_array[k][i] = "_";
					}
				}
			}

			// attack range one.
			//pot attack range stants for potential attack range
			// attack-predictor-specific variables:

	//	II.	// II. Attack Tiles.

	 		// switch statement determining varialbes which
			// help determine the range.
			var interrupt = "placeholder stirng";
			var subtract_range_1 = "placeholder string";

			if (atk_range === "0") {
				interrupt = true;
				suptract_range_1 = false;
			} else if (atk_range === "1") {
				interrupt = false;
				subtract_range_1 = false;
			} else if (atk_range === "1-2") {
				interrupt = false;
				subtract_range_1 = false;
			} else if (atk_range === "2 only") {
				interrupt = false;
				subtract_range_1 = true;
			}

			// universal first step. red tile generation of attack range 1.
			if (interrupt === true) {
				doNothing = "nothing";
			} else if (interrupt === false) {
				// moves four directions off of every blue square
					for (var i = 0; i < 10; i++) {
				    	for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "B") {
								if (k > 0) {
									if (mov_pre_array[k-1][i] === "_" || mov_pre_array[k-1][i] === "W" || mov_pre_array[k-1][i] === "E") {
									mov_pre_array[k-1][i] = "T";
									} else if (mov_pre_array[k-1][i] === "X") {
										mov_pre_array[k-1][i] = "XR";
									}
								}
							}
				    	}
					}
					for (var i = 0; i < 10; i++) {
				    	for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "B") {
								if (i > 0) {
									if (mov_pre_array[k][i-1] === "_" || mov_pre_array[k][i-1] === "W" || mov_pre_array[k][i-1] === "E") {
										mov_pre_array[k][i-1] = "T";
									} else if (mov_pre_array[k][i-1] === "X") {
										mov_pre_array[k][i-1] = "XR";
									}
								}
							}
				    	}
					}
					for (var i = 0; i < 10; i++) {
				    	for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "B") {
								if (k < 9) {
									if (mov_pre_array[k+1][i] === "_" || mov_pre_array[k+1][i] === "W" || mov_pre_array[k+1][i] === "E") {
										mov_pre_array[k+1][i] = "T";
									} else if (mov_pre_array[k+1][i] === "X") {
										mov_pre_array[k+1][i] = "XR";
									}
								}
							}
				    	}
					}
					for (var i = 0; i < 10; i++) {
				    	for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "B") {
								if (i < 9) {
									if (mov_pre_array[k][i+1] === "_" || mov_pre_array[k][i+1] === "W" || mov_pre_array[k][i+1] === "E") {
										mov_pre_array[k][i+1] = "T";
									} else if (mov_pre_array[k][i+1] === "X") {
										mov_pre_array[k][i+1] = "XR";
									}
								}
							}
				    	}
					}
					// then here they all turn to "R", for red, or "H" for heal.
					for (var i = 0; i < 10; i++) {
						for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "T") {
								if (heal_t_f === false) {
									mov_pre_array[k][i] = "R";
								} else if (heal_t_f === true) {
									mov_pre_array[k][i] = "H";
								}
							}
						}
					}
			}
			// conditional second step.
			// full round of red tile generation for range 1-2, and first step in range 2 only.
			if ((atk_range === "1-2") || (atk_range === "2 only") && (interrupt === false)) {
					for (var i = 0; i < 10; i++) {
				    	for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "R" || mov_pre_array[k][i] === "XR") {
								if (k > 0) {
									if (mov_pre_array[k-1][i] === "_" || mov_pre_array[k-1][i] === "W" || mov_pre_array[k-1][i] === "E") {
									mov_pre_array[k-1][i] = "T";
									}
								}
							}
				    	}
					}
					for (var i = 0; i < 10; i++) {
				    	for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "R" || mov_pre_array[k][i] === "XR") {
								if (i > 0) {
									if (mov_pre_array[k][i-1] === "_" || mov_pre_array[k][i-1] === "W" || mov_pre_array[k][i-1] === "E") {
										mov_pre_array[k][i-1] = "T";
									}
								}
							}
				    	}
					}
					for (var i = 0; i < 10; i++) {
				    	for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "R" || mov_pre_array[k][i] === "XR") {
								if (k < 9) {
									if (mov_pre_array[k+1][i] === "_" || mov_pre_array[k+1][i] === "W" || mov_pre_array[k+1][i] === "E") {
										mov_pre_array[k+1][i] = "T";
									}
								}
							}
				    	}
					}
					for (var i = 0; i < 10; i++) {
				    	for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "R" || mov_pre_array[k][i] === "XR" ) {
								if (i < 9) {
									if (mov_pre_array[k][i+1] === "_" || mov_pre_array[k][i+1] === "W" || mov_pre_array[k][i+1] === "E") {
										mov_pre_array[k][i+1] = "T";
									}
								}
							}
				    	}
					}
					for (var i = 0; i < 10; i++) {
						for (var k = 0; k < 10; k++) {
							if (mov_pre_array[k][i] === "T") {
									mov_pre_array[k][i] = "R";
							}
						}
					}
			}
			// section: subtraction of attack posibilities.

			// conditional third step.
			// subraction of relevant red tiles for atack range "2 only."
			if (subtract_range_1 === true) {
					// run a subtraction series.
					// here goes ...
				for (var i = 0; i < 10; i++) {
					for (var k = 0; k < 10; k++) {
						// resetter:
						var terminate = false;

							// if the tile is red,
							if (mov_pre_array[k][i] === "R") {
								// if it makes sense to check the top for blue:
								if (k > 1) {
									// check the top for blue
									if (mov_pre_array[k-2][i] === "B") {
									terminate = true;
									}
								// else move on:
								}

								// check the top right ...
								// if it hasn't already been legitimated,
								if (terminate === false) {
									// if it makes sense to check the top right for blue:
									if ((k > 0) && (i < 9)) {
										// check the top right for blue:
										if (mov_pre_array[k-1][i+1] === "B") {
										terminate = true;
										}
									// else move on:
									}
								}

								// if it hasn't already been legitimated,
								if (terminate === false) {
									// if it makes sense to check the right for blue,
									if (i < 8) {
										// check the right for blue:
										if (mov_pre_array[k][i+2] === "B") {
										terminate = true;
										} else {
											doNothing = "nothing";
										}
									// else move on:
									} else {
										doNothing = "nothing";
									}
								} else {
									doNothing = "nothing";
								}


								// if it hasn't already been legitimated,
								if (terminate === false) {
									// if it makes sense to check the bottom right for blue,
									if ((i < 9) && (k < 9)) {
										// check the bottom right for blue:
										if (mov_pre_array[k+1][i+1] === "B") {
										terminate = true;
										}
									// else move on:
									}
								}

								// if it hasn't already been legitimated,
								if (terminate === false) {
									// if it makes sense to check the bottom for blue,
									if (k < 8) {
										// check the bottom for blue:
										if (mov_pre_array[k+2][i] === "B") {
										terminate = true;
										}
									// else move on:
									}
								}

								// if it hasn't already been legitimated,
								if (terminate === false) {
									// if it makes sense to check the bottom left for blue,
									if ((k < 9) && (i > 0)) {
										// check the bottom left for blue:
										if (mov_pre_array[k+1][i-1] === "B") {
										terminate = true;
										}
									// else move on:
									}
								}

								// if it hasn't already been legitimated,
								if (terminate === false) {
									// if it makes sense to check the left for blue,
									if (i > 1) {
										// check the left for blue:
										if (mov_pre_array[k][i-2] === "B") {
										terminate = true;
										}
									// else move on:
									}
								}

								// if it hasn't already been legitimated,
								if (terminate === false) {
									// if it makes sense to check the top left for blue,
									if ((k > 0) && (i > 0)) {
										// check the top left for blue:
										if (mov_pre_array[k-1][i-1] === "B") {
										terminate = true;
										} // not terminating the search
									// else move on:
									} // moving on to the next step
								} // skipping the whole step

								// if the search was never terminated, no blue was found.
								// so, the tile loses its status.
								if (terminate === false) {
									mov_pre_array[k][i] = "_"; // i wonder whether i will need to return it to its old value, instead of "_"
								}

							}
					} // first axis for loop
				} // sedond axis for loop



			}	 // if she wasn't an archer in the first place, don't bother

			var mov_pre_array3 = mov_pre_array;
			return mov_pre_array;
			}


// this !!!!!!!!!!!!!!!!!!!!!!!!!
      // doesn't sel_char_atk_range have to be made global? I think i would rather find a way to feed it to the function as a parameter.
      function ex_atk_pre_alg(EAPA_ex_char_k, EAPA_ex_char_i, EAPA_atk_range) {
        if (EAPA_ex_char_k > 0) {
          // if the space above the selected unit is an enemy unit, terminate the search and present the attack function.
          if ((EAPA_atk_range === "1") || (EAPA_atk_range === "1-2")) {
              // if it's an enemy, flag it. red selector class.
              // else if its an ally, red it
              // else if its anything but an X on the ____ ??? then red the mpt. (non-clickable) level.
              // do this many many times.
              if ($('*[data-coord="3'+ (EAPA_ex_char_k - 1) + '3' + EAPA_ex_char_i + '"]').hasClass(color_of_opposite_team + "_unit")) {

              } else if ($('*[data-coord="3'+ (EAPA_ex_char_k - 1) + '3' + EAPA_ex_char_i + '"]').hasClass(team_of_current_phase + "_unit")) {

              }
          }
          // checks upper right and upper left.
          if (EAPA_ex_char_i > 0) {
          //--// check the upper left
            if (((EAPA_atk_range === "2 only") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ (EAPA_ex_char_k - 1) + '3' + (EAPA_ex_char_i - 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {

            }
          }
          if (the_current_i < 9) {
          //--// check the upper right
            if (((EAPA_atk_range === "2 only") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ (EAPA_ex_char_k - 1) + '3' + (EAPA_ex_char_i + 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {

            }
          }
          // if the space above the directly above space is availible, check that one, too.
          if (EAPA_ex_char_k > 1) {
            if (((EAPA_atk_range === "2 only") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3' + (EAPA_ex_char_k - 2) + '3' + EAPA_ex_char_i + '"]').hasClass(color_of_opposite_team + "_unit"))) {

            }
          }
        }
        // the bottom section.
        if (EAPA_ex_char_k < 9) {
          // if the space below the selected unit is an enemy unit, terminate the search and present the attack function.
          if (((EAPA_atk_range === "1") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ (EAPA_ex_char_k + 1) + '3' + EAPA_ex_char_i + '"]').hasClass(color_of_opposite_team + "_unit"))) {

          }
          // checks down right and down left.
          if (the_current_i > 0) {
          //--// check the lower left
            if (((EAPA_atk_range === "2 only") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ (EAPA_ex_char_k + 1) + '3' + (EAPA_ex_char_i - 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {

            }
          }
          if (the_current_i < 9) {
          //--// check the lower right
            if (((EAPA_atk_range === "2 only") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ (EAPA_ex_char_k + 1) + '3' + (EAPA_ex_char_i + 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {

            }
          }
          // if the space below the directly below space is availible, check that one, too.
          if (the_current_k < 8) {
            if (((EAPA_atk_range === "2 only") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ (EAPA_ex_char_k + 2) +'3' + EAPA_ex_char_i + '"]').hasClass(color_of_opposite_team + "_unit"))) {

            }
          }
        }
        // the sides.
        //--// right side.
        if (EAPA_ex_char_i > 0) {
          // right square check
          if (((EAPA_atk_range === "1") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ EAPA_ex_char_k +'3' + (EAPA_ex_char_i + 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {

          }
          if (EAPA_ex_char_i > 1) {
          // double right square check
            if (((EAPA_atk_range === "2 only") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ EAPA_ex_char_k +'3' + (EAPA_ex_char_i + 2) + '"]').hasClass(color_of_opposite_team + "_unit"))) {

            }
          }
        }
        //--// left side.
        if (EAPA_ex_char_i < 9) {
          // left square check
          if (((EAPA_atk_range === "1") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ EAPA_ex_char_k +'3' + (EAPA_ex_char_i - 1) + '"]').hasClass(color_of_opposite_team + "_unit"))) {

          }
          if (EAPA_ex_char_i < 8) {
          // double left square check
            if (((EAPA_atk_range === "2 only") || (EAPA_atk_range === "1-2")) && ($('*[data-coord="3'+ EAPA_ex_char_k +'3' + (EAPA_ex_char_i - 2) + '"]').hasClass(color_of_opposite_team + "_unit"))) {

            }
          }
        }


      }
