function generate_live_battle_console(attacker_battle_array, defender_battle_array, attacker_char_name, defender_char_name) {

game_state = "battle_event";

// the text lines
$("p.battle_console_text_line").switchClass("battle_console_element_neg_20", "z_pos_11", 0);

// the background
$("#battle_console_center_background").switchClass("battle_console_background_neg_20", "z_pos_10", 0);

var left_time_01 = (Math.random() * 300);
function gen_left_char_art_bkrnd() {
$("#battle_console_left_char_bat_art").switchClass("battle_console_char_art_neg_20", "z_pos_11", 0);
}
setTimeout(gen_left_char_art_bkrnd, 200 + left_time_01);
// then the designs at (gen_left_char_art, 300 + left_time_01);

var right_time_01 = (Math.random() * 300); // lol. the "right time".
function gen_right_char_art_bkrnd() {
$("#battle_console_right_char_bat_art").switchClass("battle_console_char_art_neg_20", "z_pos_11", 0);
}
setTimeout(gen_right_char_art_bkrnd, 200 + right_time_01);
// then the designs at (gen_right_char_art, 300 + right_time_01);


// its always left that is attacking right.


// no wait its just seven stats. hp, hit, damage, crit,
// last_use (true/false), and x2 speed advantage (t/f)
// everything else gets calculated beforehand.

// these two arrays are the only system inputs
// var l_u_b_s = [16, 97, 12, 23, true, true]; // hp remaining, hit, damage, crit, last use (t/f), x2 attack (t/f)
// var r_u_b_s = [45, 36, 22, 5, false, false, true]; // ditto ... + can respond (t/f)

// left unit battle statistics


var l_u_b_s = jQuery.extend(true, [], attacker_battle_array);
// right unit battle statistics
var r_u_b_s = jQuery.extend(true, [], defender_battle_array);

// 09 just a little extra code to help us with plain english, or something ...
var left_potential = true;
var right_potential = true;

if (r_u_b_s[6] === false) {
	right_potential = false;
}

var b_e_left_hp_remaining = l_u_b_s[0].valueOf();
var b_e_right_hp_remaining = r_u_b_s[0].valueOf(); // oh my god. copy and paste.

// var b_e_left_hp_remaining = 100;
// var b_e_right_hp_remaining = 100;

var hp_after_hit_I = "empty. ";
var hp_after_hit_I_response = "empty. ";


// right weapon attrition, and left weapon attrition.
var r_w_a = 0;
var l_w_a = 0;

var battle_state = "live"; // as opposed to conlcuded, which will stop other sections from activating.
var battle_state_temp_ticker = 1000; // the temporal ticker will affect the timeout of other parts of the function.
var b_s_text_line_ticker = 1;
// making sure that i can change the battle timing easily at any time...
var a_beat = 750;
// i need to make sure that I program attrition outputs.

var right_char_dead = false;
var left_char_dead = false;

// ** timeout
// console.log(attacker_char_name + ' attacks. ');
battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
function text_maker_00() {
document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + ' attacks... ';
b_s_text_line_ticker = (b_s_text_line_ticker + 1);
}
setTimeout(text_maker_00, battle_state_temp_ticker);
// ** timeout
if ((Math.random() * 100) < l_u_b_s[3]) {
	// console.log(attacker_char_name + ' lands a critical hit for ' + (l_u_b_s[2] * 3) + ' damage!');
	battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
	function text_maker_01() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + ' lands a critical hit for ' + (l_u_b_s[2] * 3) + ' damage!';
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_01, battle_state_temp_ticker);
	l_w_a = l_w_a + 1;
	if (b_e_right_hp_remaining <= (l_u_b_s[2] * 3)) {
		r_u_b_s[0] = 0;
		right_char_dead = true;
		b_e_right_hp_remaining = 0;
		// console.log(defender_char_name + " dies in battle!");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat); // a logical error!!!
		function text_maker_02() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + " dies in battle!";
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_02, battle_state_temp_ticker);
		if (l_u_b_s[4] === true) {
			// console.log(attacker_char_name + "'s weapon breaks.");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_03() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + "'s weapon breaks.";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_03, battle_state_temp_ticker);
			left_potential = false;
		}
	} else {
		b_e_right_hp_remaining = (b_e_right_hp_remaining - (l_u_b_s[2] * 3));
		hp_after_hit_I = (r_u_b_s[0] - (l_u_b_s[2] * 3));
		// console.log(defender_char_name + " has " + r_u_b_s[0] + " health remaining.");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_04() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + " has " + hp_after_hit_I + " health remaining.";
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_04, battle_state_temp_ticker);
		if (l_u_b_s[4] === true) {
			// console.log(attacker_char_name + "'s weapon breaks!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_05() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + "'s weapon breaks!";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_05, battle_state_temp_ticker);
			left_potential = false;
		}
	}
	// opponent takes the damage.

} else if ((Math.random() * 100) < l_u_b_s[1]) {
	// console.log(attacker_char_name + ' lands a hit for ' + (l_u_b_s[2]) +  ' damage.');
	battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
	function text_maker_06() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + ' lands a hit for ' + l_u_b_s[2] +  ' damage.';
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_06, battle_state_temp_ticker);
	l_w_a = l_w_a + 1;
	if (b_e_right_hp_remaining <= (l_u_b_s[2])) {
		r_u_b_s[0] = 0;
		right_char_dead = true;
		b_e_right_hp_remaining = 0;
		// console.log(defender_char_name + " dies in battle!");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_07() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + " dies in battle!";
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_07, battle_state_temp_ticker);
		if (l_u_b_s[4] === true) {
			// console.log(attacker_char_name + "'s weapon breaks!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_08() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + "'s weapon breaks!";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_08, battle_state_temp_ticker);
			left_potential = false;
		}
	} else {
		// r_u_b_s[0] = r_u_b_s[0] - l_u_b_s[2];
		b_e_right_hp_remaining = (b_e_right_hp_remaining - l_u_b_s[2]);
		hp_after_hit_I = (r_u_b_s[0] - l_u_b_s[2]);
		// console.log(defender_char_name + " has " + r_u_b_s[0] + " health remaining.");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_09() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + " has " + hp_after_hit_I + " health remaining.";
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_09, battle_state_temp_ticker);
		if (l_u_b_s[4] === true) {
			// console.log(attacker_char_name + "'s weapon breaks!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_10() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + "'s weapon breaks!";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_10, battle_state_temp_ticker);
			left_potential = false;
		}
	}
} else {
	// console.log(attacker_char_name + ' misses.');
	battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
	function text_maker_11() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + ' misses.';
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_11, battle_state_temp_ticker);
}
// console.log(" ");
battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
function text_maker_12() {
document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
b_s_text_line_ticker = (b_s_text_line_ticker + 1);
}
setTimeout(text_maker_12, battle_state_temp_ticker);

// II. -------------------------------------------------------------------------

// timeout **
// right responds
// console.log(defender_char_name + ' responds.');
if (right_char_dead === false) {
	battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
	function text_maker_13() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + ' responds...';
	$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_13, battle_state_temp_ticker);
}
// timeout **
if (right_char_dead === true) {
	var placeholder = "placeholder"; // this is just going to suck time. i need to put the end sequence program here.
} else if (r_u_b_s[6] === false){
	var placeholder = "placeholder";
	// console.log(defender_char_name + " cannot respond.");
	battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
	function text_maker_14() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + " cannot respond.";
	$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_14, battle_state_temp_ticker);
} else if ((Math.random() * 100) < r_u_b_s[3]) {
	// console.log(defender_char_name + ' lands a critical hit for ' + (r_u_b_s[2] * 3) + ' damage!');
	battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
	function text_maker_15() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + ' lands a critical hit for ' + (r_u_b_s[2] * 3) + ' damage!';
	$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_15, battle_state_temp_ticker);
	r_w_a = r_w_a + 1;
	if (l_u_b_s[0] <= (r_u_b_s[2] * 3)) {
		l_u_b_s[0] = 0;
		left_char_dead = true;
		b_e_left_hp_remaining = 0;
		// console.log(attacker_char_name + " dies in battle!");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_16() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + " dies in battle!";
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_16, battle_state_temp_ticker);
		if (r_u_b_s[4] === true) {
			// console.log(defender_char_name + "'s weapon breaks!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_17() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + "'s weapon breaks!";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_17, battle_state_temp_ticker);
			right_potential = false;
		}
	} else {
		// l_u_b_s[0] = l_u_b_s[0] - (r_u_b_s[2] * 3);
		b_e_left_hp_remaining = (b_e_left_hp_remaining - (r_u_b_s[2] * 3));
		hp_after_hit_I_response = (l_u_b_s[0] - (r_u_b_s[2] * 3));
		// console.log(attacker_char_name + " has " + l_u_b_s[0] + " health remaining.");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_18() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + " has " + hp_after_hit_I_response + " health remaining.";
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_18, battle_state_temp_ticker);
		if (r_u_b_s[4] === true) {
			// console.log(defender_char_name + "'s weapon breaks!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_19() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + "'s weapon breaks!";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_19, battle_state_temp_ticker);
			right_potential = false;
		}
	}
	// opponent takes the damage.
} else if ((Math.random() * 100) < r_u_b_s[1]) {
	// console.log(defender_char_name + ' lands a hit for ' + (r_u_b_s[2]) +  ' damage.');
	battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
	function text_maker_20() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + ' lands a hit for ' + r_u_b_s[2] +  ' damage.';
	$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_20, battle_state_temp_ticker);
	r_w_a = r_w_a + 1;
	if (b_e_left_hp_remaining <= r_u_b_s[2]) {
		l_u_b_s[0] = 0;
		b_e_left_hp_remaining = 0;
		left_char_dead = true;
		// console.log(attacker_char_name + " dies in battle!");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_21() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + " dies in battle!";
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_21, battle_state_temp_ticker);
		if (r_u_b_s[4] === true) {
			// console.log(defender_char_name + "'s weapon breaks!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_22() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + "'s weapon breaks!";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_22, battle_state_temp_ticker);
			right_potential = false;
		}
	} else {
		// l_u_b_s[0] = l_u_b_s[0] - r_u_b_s[2];
		b_e_left_hp_remaining = (b_e_left_hp_remaining - r_u_b_s[2]);
		hp_after_hit_I_response = (l_u_b_s[0] - r_u_b_s[2]);
		// console.log(attacker_char_name + " has " + l_u_b_s[0] + " health remaining.");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_23() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + " has " + hp_after_hit_I_response + " health remaining.";
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_23, battle_state_temp_ticker);
		if (r_u_b_s[4] === true) {
			// console.log(defender_char_name + "'s weapon breaks!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_24() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + "'s weapon breaks!";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_24, battle_state_temp_ticker);
			right_potential = false;
		}
	}
} else {
	// console.log(defender_char_name + ' misses.');
	battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
	function text_maker_25() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + ' misses.';
	$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_25, battle_state_temp_ticker);
}
// console.log(" ");
battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
function text_maker_26() {
document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
b_s_text_line_ticker = (b_s_text_line_ticker + 1);
}
setTimeout(text_maker_26, battle_state_temp_ticker);



// III. ------------------------------------------------------------------------
//		// A. --------------------------------------------------------------------
// the extra attack.


if ((left_char_dead === true) || (right_char_dead === true)) {
	var placeholder = "placeholder";
} else if ((l_u_b_s[5] === true) && (left_potential === true)) {

	// console.log(attacker_char_name + ' attacks again. ');
	battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
	function text_maker_27() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + ' attacks again...';
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_27, battle_state_temp_ticker);

	if ((Math.random() * 100) < l_u_b_s[3]) {
		// console.log(attacker_char_name + ' lands a critical hit for ' + (l_u_b_s[2] * 3) + ' damage!');
		battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
		function text_maker_28() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + ' lands a critical hit for ' + (l_u_b_s[2] * 3) + ' damage!';
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_28, battle_state_temp_ticker);
		l_w_a = l_w_a + 1;
		if (b_e_right_hp_remaining <= (l_u_b_s[2] * 3)) {
			r_u_b_s[0] = 0;
			b_e_right_hp_remaining = 0;
			right_char_dead = true;
			// console.log(defender_char_name + " dies in battle!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_29() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + " dies in battle!";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_29, battle_state_temp_ticker);
			// console.log(" ");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_30() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_30, battle_state_temp_ticker);
		} else {
			b_e_right_hp_remaining = (b_e_right_hp_remaining - (l_u_b_s[2] * 3));
			// console.log(defender_char_name + " has " + r_u_b_s[0] + " health remaining.");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_31() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + " has " + b_e_right_hp_remaining + " health remaining.";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_31, battle_state_temp_ticker);
			// console.log(" ");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_32() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_32, battle_state_temp_ticker);
		}
		// opponent takes the damage.
	} else if ((Math.random() * 100) < l_u_b_s[1]) {
		// console.log(attacker_char_name + ' lands a hit for ' + (l_u_b_s[2]) +  ' damage.');
		battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
		function text_maker_33() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + ' lands a hit for ' + (l_u_b_s[2]) +  ' damage.';
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_33, battle_state_temp_ticker);
		l_w_a = l_w_a + 1;
		if (b_e_right_hp_remaining <= l_u_b_s[2]) {
			r_u_b_s[0] = 0;
			b_e_right_hp_remaining = 0;
			right_char_dead = true;
			// console.log(defender_char_name + " dies in battle!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_34() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + " dies in battle!";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_34, battle_state_temp_ticker);
			// console.log(" ");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_35() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_35, battle_state_temp_ticker);
		} else {
			b_e_right_hp_remaining = (b_e_right_hp_remaining - l_u_b_s[2]);
			// console.log(defender_char_name + " has " + r_u_b_s[0] + " health remaining.");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_36() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + " has " + b_e_right_hp_remaining + " health remaining.";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_36, battle_state_temp_ticker);
			// console.log(" ");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_37() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_37, battle_state_temp_ticker);
		}
	} else if (left_potential === false) {
		// console.log(" ");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_38() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_38, battle_state_temp_ticker);
	} else {
		// console.log(attacker_char_name + ' unit misses.');
		battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
		function text_maker_39() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + ' misses.';
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_39, battle_state_temp_ticker);
		// console.log(" ");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_40() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_40, battle_state_temp_ticker);
	}

//		// B. --------------------------------------------------------------------

} else if ((r_u_b_s[5] === true) && (right_potential === true)) {
	if (right_char_dead === true) {
		var placeholder = "placeholder";
	} else if ((Math.random() * 100) < r_u_b_s[3]) {
		// console.log(defender_char_name + ' attacks again.');
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_41() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + ' attacks again...';
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_41, battle_state_temp_ticker);
		// console.log(defender_char_name + ' lands a critical hit for ' + (r_u_b_s[2] * 3) + ' damage!');
		battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
		function text_maker_42() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + ' lands a critical hit for ' + (r_u_b_s[2] * 3) + ' damage!';
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_42, battle_state_temp_ticker);
		r_w_a = r_w_a + 1;
		if (b_e_left_hp_remaining <= (r_u_b_s[2] * 3)) {
			l_u_b_s[0] = 0;
			left_char_dead = true;
			b_e_left_hp_remaining = 0;
			// console.log(attacker_char_name + " dies in battle!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_43() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + " dies in battle!";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_43, battle_state_temp_ticker);
			// console.log(" ");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_44() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_44, battle_state_temp_ticker);
		} else {
			b_e_left_hp_remaining = (b_e_left_hp_remaining - (r_u_b_s[2] * 3));
			// console.log(attacker_char_name + " has " + l_u_b_s[0] + " health remaining.");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_45() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + " has " + b_e_left_hp_remaining + " health remaining.";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_45, battle_state_temp_ticker);
			// console.log(" ");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_46() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_46, battle_state_temp_ticker);
		}
		// opponent takes the damage.
	} else if ((Math.random() * 100) < r_u_b_s[1]) {
		// console.log(defender_char_name + ' attacks again.');
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_47() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + ' attacks again.';
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_47, battle_state_temp_ticker);
		// console.log(defender_char_name + ' lands a hit for ' + (r_u_b_s[2]) +  ' damage.');
		battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
		function text_maker_48() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + ' lands a hit for ' + r_u_b_s[2] +  ' damage.';
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_48, battle_state_temp_ticker);
		r_w_a = r_w_a + 1;
		if (b_e_left_hp_remaining <= (r_u_b_s[2])) {
			l_u_b_s[0] = 0;
			b_e_left_hp_remaining = 0;
			left_char_dead = true;
			// console.log(attacker_char_name + " dies in battle!");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_49() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + " dies in battle!";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_49, battle_state_temp_ticker);
			// console.log(" ");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_50() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_50, battle_state_temp_ticker);
		} else {
			b_e_left_hp_remaining = (b_e_left_hp_remaining - r_u_b_s[2]);
			// console.log(attacker_char_name + " has " + l_u_b_s[0] + " health remaining.");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_51() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = attacker_char_name + " has " + b_e_left_hp_remaining + " health remaining.";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_51, battle_state_temp_ticker);
			// console.log(" ");
			battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
			function text_maker_52() {
			document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
			$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
			b_s_text_line_ticker = (b_s_text_line_ticker + 1);
			}
			setTimeout(text_maker_52, battle_state_temp_ticker);
		}
	} else if (right_potential === false) {
		// console.log(" ");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_53() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_53, battle_state_temp_ticker);
	} else {
		// console.log(defender_char_name + ' misses.');
		battle_state_temp_ticker = (battle_state_temp_ticker + (a_beat * 2));
		function text_maker_54() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = defender_char_name + ' misses.';
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_54, battle_state_temp_ticker);
		// console.log(" ");
		battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
		function text_maker_55() {
		document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
		$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
		b_s_text_line_ticker = (b_s_text_line_ticker + 1);
		}
		setTimeout(text_maker_55, battle_state_temp_ticker);
	}  // that was all redundant, and space could be saved if i made it
		// into a function
} else {
	// console.log("neither unit is fast enough to attack twice.");
	battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
	function text_maker_56() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = "neither unit is fast enough to attack twice.";
	$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_56, battle_state_temp_ticker);
	// console.log(" ");
	battle_state_temp_ticker = (battle_state_temp_ticker + a_beat);
	function text_maker_57() {
	document.getElementById("battle_console_text_line_" + b_s_text_line_ticker).innerHTML = " ";
	$("#battle_console_text_line_" + b_s_text_line_ticker).addClass("right_aligned");
	b_s_text_line_ticker = (b_s_text_line_ticker + 1);
	}
	setTimeout(text_maker_57, battle_state_temp_ticker);
}

// exchange ends

// console.log("weapon attrition: left = " + l_w_a + ", right = " + r_w_a);

var outputArray = [l_u_b_s[0], l_w_a, r_u_b_s[0], r_w_a];
// console.log(outputArray);
// i think the function could just affect all of these changes from where it is.

function battle_event_self_close() {
	// return alignments to neutrality ...
	for (var i = 1; i < 17; i++) {
		if ($("#battle_console_text_line_" + i).hasClass("right_aligned")) {
			$("#battle_console_text_line_" + i).removeClass("right_aligned");
		}
		document.getElementById("battle_console_text_line_" + i).innerHTML = "";
	}
	// the text lines
	// ugh idk why the following doesn't work, but, to fix it woooould just be 12 lines.

	$(".battle_console_text_line").switchClass("z_pos_11", "battle_console_element_neg_20", 0); // yeah, it just returns it to like, 0 or 1.
	// the backgrounds and console art.
	$("#battle_console_center_background").switchClass("z_pos_10", "battle_console_background_neg_20", 0);
	$("#battle_console_left_char_bat_art").switchClass("z_pos_11", "battle_console_char_art_neg_20", 0);
	$("#battle_console_right_char_bat_art").switchClass("z_pos_11", "battle_console_char_art_neg_20", 0);
}
setTimeout(battle_event_self_close, battle_state_temp_ticker + (a_beat * 3));
game_state = "character_death_event";

// change the remaining h. p.  of the character objects.
// **** add code here *****


var time_to_die = 0; // death fade animation in milliseconds.
if ((left_char_dead === true) || (right_char_dead === true)) {
	time_to_die = 500;
}

function character_death_event() {
	if (left_char_dead === true) {
		// they dissappear
		var placeholder = "placeholder. ";
	//	 templates. stolen from generation.

		 exis_char_obj_array[ex_char_k_pos_coord][ex_char_i_pos_coord].cur_hp = 0;

		$('*[data-coord="3'+ ex_char_k_pos_coord +'3' + ex_char_i_pos_coord +'"]').switchClass($('*[data-coord="3'+ ex_char_k_pos_coord +'3' + ex_char_i_pos_coord +'"]').data("chname"), "cle", time_to_die);
		$('*[data-coord="3'+ ex_char_k_pos_coord +'3' + ex_char_i_pos_coord +'"]').removeData("chname"); // this needs to come after the above line.
		$('*[data-coord="3'+ ex_char_k_pos_coord +'3' + ex_char_i_pos_coord +'"]').removeClass("unmoved_unit");
		$('*[data-coord="3'+ ex_char_k_pos_coord +'3' + ex_char_i_pos_coord +'"]').removeClass(team_of_current_phase + "_unit");

	} else if (right_char_dead === true) {
		// they dissappear
		var placeholder = "placeholder. ";
	//	 templates. stolen from generation.

	 	exis_char_obj_array[global_def_cha_k_coord][global_def_cha_i_coord].cur_hp = 0;

		$('*[data-coord="3'+ global_def_cha_k_coord +'3' + global_def_cha_i_coord +'"]').switchClass($('*[data-coord="3'+ global_def_cha_k_coord +'3' + global_def_cha_i_coord +'"]').data("chname"), "cle", time_to_die);
		$('*[data-coord="3'+ global_def_cha_k_coord +'3' + global_def_cha_i_coord +'"]').removeData("chname"); // this needs to come after the above line.
		$('*[data-coord="3'+ global_def_cha_k_coord +'3' + global_def_cha_i_coord +'"]').removeClass("greyed_unit");
		$('*[data-coord="3'+ global_def_cha_k_coord +'3' + global_def_cha_i_coord +'"]').removeClass(team_of_current_phase + "_unit");
	} else {
		var placeholder = "placeholder";
	}
}

setTimeout(character_death_event, battle_state_temp_ticker + (a_beat * 4));
// -----------
function return_to_open_map () {
	if (left_char_dead === false) {
	var a = $('*[data-coord="3'+ ex_char_k_pos_coord +'3' + ex_char_i_pos_coord +'"]').data("chname");
	$('*[data-coord="3'+ ex_char_k_pos_coord +'3' + ex_char_i_pos_coord +'"]').switchClass(a, "greyed_" + a, 200); // hole.
	}
	exis_char_obj_array[global_def_cha_k_coord][global_def_cha_i_coord].cur_hp = b_e_right_hp_remaining;
	exis_char_obj_array[ex_char_k_pos_coord][ex_char_i_pos_coord].cur_hp = b_e_left_hp_remaining;
	game_state = "open map";
}
setTimeout(return_to_open_map, battle_state_temp_ticker + (a_beat * 4) + time_to_die); // is this right???
// -----------
}


// https://www.youtube.com/watch?v=EuSmZzLG1xI
