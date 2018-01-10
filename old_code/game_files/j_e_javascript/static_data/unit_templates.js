

// character objects! yipee!!

// unit prototypes, a victory for the concision paradigm
// declaring classes seperately would save me from repeating all of the urls in the types of various strength.

var weak_knight = {
	object_type: "unit",
	char_name: "change_me",  		// character name
	pres_name: "change_me",  		// presentation name
	team_aff: "change_me", 		// color of team affiliation
	// unit class
	u_class: "Knight",
	// unit tupe for battle
	armour: true,
	mounted: false,
	flying: false,
	// battle stats
	max_hp: 28,  	// max health
	cur_hp: 28, 	// current health
	str: 10,  		// strength
	mag: 1,  		// magic
	skl: 6, 		// skill
	spd: 2, 		// speed
	lck: 3, 		// luck
	def: 12, 		// defense
	res: 3, 		// resistance
	// move related stats and types
	move: 4,
	unit_move_type: "ground",
	// experience data
	current_level: 12,
	current_exp: 0,
	// inventory data
	inv_slot_1: "Iron Lance", 			// inventory slot 1
	inv_slot_1ur: 45,  		// inventory slot 1 uses remaining
	inv_slot_1iid: 3, 		// inventory slot item id
	// 2
	inv_slot_2: "empty",			// and so on...
	inv_slot_2ur: "empty",
	inv_slot_2iid: "empty",
	// 3
	inv_slot_3: "empty",
	inv_slot_3ur: "empty",
	inv_slot_3iid: "empty",
	// 4
	inv_slot_4: "empty",
	inv_slot_4ur: "empty",
	inv_slot_4iid: "empty",
	// 5
	inv_slot_5: "empty",
	inv_slot_5ur: "empty",
	inv_slot_5iid: "empty",
	// item-related data
	has_items: "not yet programmed",
	attack_range: "not yet programmed",
	heal_range: "not yet programmed",
	can_use_item: false,
	// information on where the unit came from.

	unit_origin: "This unit originates from Fire Emblem: Sacred Stones. With slight variations, these knights can be found in chapter 12 of the 'hard' difficulty setting."
};

var weak_paladin = {
	object_type: "unit",
	char_name: "change_me",  		// character name
	pres_name: "change_me",  		// presentation name
	team_aff: "change_me", 		// color of team affiliation
	// unit class
	u_class: "Paladin",
	// unit tupe for battle
	armour: false,
	mounted: true,
	flying: false,
	// battle stats
	max_hp: 40,  	// max health
	cur_hp: 40, 	// current health
	str: 12,  		// strength  				// poss. +2
	mag: 4,  		// magic
	skl: 12, 		// skill
	spd: 11, 		// speed  					// poss. +1
	lck: 6, 		// luck 					// poss. +1
	def: 11, 		// defense					// poss. +1
	res: 7, 		// resistance
	// move related stats and types
	move: 7,
	unit_move_type:	"ground", // ground, flying, and pirate are the options. lol.
	// experience data
	current_level: 4,
	current_exp: 0,
	// inventory data
	inv_slot_1: "Silver Lance", 			// inventory slot 1
	inv_slot_1ur: 30,  		// inventory slot 1 uses remaining
	inv_slot_1iid: 2, 		// inventory slot item id
	// 2
	inv_slot_2: "empty",			// and so on...
	inv_slot_2ur: "empty",
	inv_slot_2iid: "empty",
	// 3
	inv_slot_3: "empty",
	inv_slot_3ur: "empty",
	inv_slot_3iid: "empty",
	// 4
	inv_slot_4: "empty",
	inv_slot_4ur: "empty",
	inv_slot_4iid: "empty",
	// 5
	inv_slot_5: "empty",
	inv_slot_5ur: "empty",
	inv_slot_5iid: "empty",
	// item-related data
	has_items: "not yet programmed",
	attack_range: "not yet programmed",
	heal_range: "not yet programmed",
	can_use_item: false,
	// information on where the unit came from
	unit_origin: "there is no biograpgy for this unit."
};

var weak_sage = {
	object_type: "unit",
	char_name: "change_me",  		// character name
	pres_name: "change_me",  		// presentation name
	team_aff: "change me", 		// color of team affiliation
	// unit class
	u_class: "Sage",
	// unit tupe for battle, true/ false
	armour: false,
	mounted: false,
	flying: false,
	// battle stats
	max_hp: 33,  	// max health
	cur_hp: 33, 	// current health
	str: 3,  		// strength
	mag: 18,  		// magic
	skl: 21, 		// skill
	spd: 17, 		// speed
	lck: 14, 		// luck
	def: 11, 		// defense
	res: 16, 		// resistance
	// move related stats and types
	move: 6,
	unit_move_type: "ground",
	// experience data
	current_level: 6,
	current_exp: 0,
	// inventory data
	inv_slot_1: "Elfire", 			// inventory slot 1
	inv_slot_1ur: 45,  		// inventory slot 1 uses remaining
	inv_slot_1iid: 1, 		// inventory slot item id
	// 2
	inv_slot_2: "empty",			// and so on...
	inv_slot_2ur: "empty",
	inv_slot_2iid: "empty",
	// 3
	inv_slot_3: "empty",
	inv_slot_3ur: "empty",
	inv_slot_3iid: "empty",
	// 4
	inv_slot_4: "empty",
	inv_slot_4ur: "empty",
	inv_slot_4iid: "empty",
	// 5
	inv_slot_5: "empty",
	inv_slot_5ur: "empty",
	inv_slot_5iid: "empty",
	// item-related data
	has_items: "not yet programmed",
	attack_range: "not yet programmed",
	heal_range: "not yet programmed",
	can_use_item: false,
	// information on where the unit came from
	unit_origin: "These stats are pulled straight from the wikia. I didin't even bother to check how the stats lined up. What the hell. Java Emblem is a melting pot like that"
};

var level20_erica = {
	object_type: "unit",
	char_name: "change_me",  		// character name
	pres_name: "change_me",  		// presentation name
	team_aff: "change me", 		// color of team affiliation
	// unit class
	u_class: "Lord",
	// unit tupe for battle, true/ false
	armour: false,
	mounted: false,
	flying: false,
	// battle stats
	max_hp: 30,  	// max health
	cur_hp: 30, 	// current health
	str: 12,  		// strength
	mag: 3,  		// magic
	skl: 20, 		// skill
	spd: 21, 		// speed
	lck: 13, 		// luck
	def: 9, 		// defense
	res: 7, 		// resistance
	// move related stats and types
	move: 5,
	unit_move_type: "ground",
	// experience data
	current_level: 20,
	current_exp: "--",
	// inventory data
	inv_slot_1: "Rapier", 			// inventory slot 1               // i could make this a whole array, having all the weapon stats.
	inv_slot_1ur: 25, // inventory slot 1 uses remaining
	inv_slot_1iid: 0, 		// inventory slot item id
	// 2
	inv_slot_2: "empty",			// and so on...
	inv_slot_2ur: "empty",
	inv_slot_2iid: "empty",
	// 3
	inv_slot_3: "empty",
	inv_slot_3ur: "empty",
	inv_slot_3iid: "empty",
	// 4
	inv_slot_4: "empty",
	inv_slot_4ur: "empty",
	inv_slot_4iid: "empty",
	// 5
	inv_slot_5: "empty",
	inv_slot_5ur: "empty",
	inv_slot_5iid: "empty",
	// item-related data
	has_items: "not yet programmed",
	attack_range: "not yet programmed",
	heal_range: "not yet programmed",
	can_use_item: false,
	// information on where the unit came from
	"unit_origin":"The stats here are taken straight from the wikia, and then I just artificially leveled her up all the way to 20, using the growth rates. And, no, I didn't use a random number generator. I just multiplied the percantage values by 20 levels. What's that you say? I should have done it only 19 times? Because from 1 to 20 is only 19 steps of improvement? Well things get a lot harder to multiply, then! Yes, you pedantic antagonist, she is technically level 21. No, I will not put an asterisc by her level display. Calm down."
};

// i need to make here the part where the individual unit names are generated.
// and where units of the same class are numbered off.
// but, i wonder if i need first to account somehow for the methods of input.

var all_weapons_and_items = [
// [0.item display name(str), 1.total_usues(num--or
// "inf" means unbreakable), 2.item type(str--"weapon", "staff", "self_healing",
// "key"), 3. weapon type (str-"axe", "sword", "lance", "bow", "tome", or "other"),
//	4. might(num), 5. hit(num), 6. crit(num), 7.range(str--"1", "1-2", or "2 only"),
//	8. rank(num--E=0 ... S=5)]
//in a parallel array: [display image file path(str)]
//08 aaand i think there will be a lot more to follow.
// 08 it would be the most fun to make it all systematically easy for the computer.

// 08 useful:
//http://fireemblem.wikia.com/wiki/List_of_weapons_in_Fire_Emblem_Awakening

// this is a platonic inventory. an iron sword is not an iron sword in itself,
// but instead calls upon the holy, superior form of the iron sword each time it must remember its
// might, range, or something else about it.

["Rapier", 35, "weapon", "sword", 5, 90, 10, "1", 0],  						//0000
["Elfire", 35, "weapon", "tome", 5, 85, 0, "1-2", 1],  						//0001
["Silver Lance", 30, "weapon", "lance", 13, 75, 0, "1", 3],				//0002
["Iron Lance", 40, "weapon", "lance", 6, 75, 0, "1", 1],						//0003
["Iron Bow"],
["Iron Axe"]

// these will have to be called all_weapons_and_items[weapon/item id][weapon/item stat]
];
