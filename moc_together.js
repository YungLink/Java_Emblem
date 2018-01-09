
// this function is named as an acronym for "movement options calculator".
// it is the algorithm that determines which spaces it is possible for a
// given unit to move into, which will eventually be displayed by highlighting
// all of those tiles in blue.

/*

parameters, left to right: selected unit x-coordinate, selected unit y-
coordinate, movement range, the array represeting the terrain and location of
enemy units (ms movement array**), movement type, map dimensions (width & height).

** I don't remember what "ms" stands for. Probably "mutable" or something -- it
progessively gets changed as the function runs. See accompanying documentation
for what this input array needs to look like. 

*/
var moc = function (su_x, su_y, m_range, ms_mov_arr, m_type, map_dims) {

  /* This is the "single diamond search", an operation which searches the four
  tiles surrounding a given tile. It is so named because these four squares
  make a kind of diamond-shape around the starting tile. The operation of the
  whole function is comprised of many individual instances of this smaller
  function.
  The whole function works by first running this inner operation on the starting
  tile (of the selected unit), and then recursively running the same operation
  on each of the 'child tiles' which yield positive results from this initial
  search, the search area eventually expands to fill all of the tiles to which
  a given unit can move. */
  var moc_sds = function(x, y) {
    // this array keeps track of whether the center tile has completely infect-
    // ed, or partially infected it's neighbors. The array is for later use
    // deciding whether or not the center tile in the SDS needs to be operated
    // on again by the SDS. If it has any partial infections to keep working on,
    // it is kept alive.
    var change_t_f = [0, 0, 0, 0];
    var moc_changer = {
      // different unit types interpret terrain differently, such that it is
      // more difficult for some units to move through certain terrain than
      // others. This is reflected in delay numbers like 2 and 1 which follow
      // certain terrain for certain unit types.
      standard: function(v, ind) {
        // for the meaning of the letters, see the accompanying documentation.

        if (v==="_") { change_t_f[ind] = 2; return "P_"; }
        else if ((v==="E")||(v==="X")||(v==="W")||(v==="M")) { return v; }
        // 2 to move into forest/pillar
        else if (v==="F")   { change_t_f[ind] = 1; return "F1_"; }
        else if (v==="F1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into desert
        else if (v==="D")   { change_t_f[ind] = 1; return "D1_"; }
        else if (v==="D1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into a fort
        else if (v==="C")   { change_t_f[ind] = 1; return "C1_"; }
        else if (v==="C1")  { change_t_f[ind] = 2; return "P_";  }
        else { return v; }
      },
      flying: function(v) {
        if (!((v==="X")||(v==="E"))) { change_t_f[ind] = 2; return "P_"; }
        else { return v; }
        // no need for a guard statement, there is nothing to disprove.
      },
      mounted: function(v) {
        if (v==="_") { change_t_f[ind] = 2; return "P_"; }
        else if ((v==="E")||(v==="X")||(v==="W")||(v==="M")) { return v; }
        // 3 to move into forest/pillar
        else if (v==="F")   { change_t_f[ind] = 1; return "F2_"; }
        else if (v==="F2")  { change_t_f[ind] = 1; return "F1_"; }
        else if (v==="F1")  { change_t_f[ind] = 2; return "P_";  }
        // 3 to move into desert
        else if (v==="D")   { change_t_f[ind] = 1; return "D2_"; }
        else if (v==="D2")  { change_t_f[ind] = 1; return "D1_"; }
        else if (v==="D1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into a fort
        else if (v==="C")   { change_t_f[ind] = 1; return "C1_"; }
        else if (v==="C1")  { change_t_f[ind] = 2; return "P_";  }
        else { return v; }
      },
      magic: function(v) {
        if ((v==="_")||(v==="D")) { change_t_f[ind] = 2; return "P_"; }
        else if ((v==="E")||(v==="X")||(v==="W")||(v==="M")) { return v; }
        // 2 to move into forest/pillar
        else if (v==="F")   { change_t_f[ind] = 1; return "F1_"; }
        else if (v==="F1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into a fort
        else if (v==="C")   { change_t_f[ind] = 1; return "C1_"; }
        else if (v==="C1")  { change_t_f[ind] = 2; return "P_";  }
        else { return v; }
      },
      armoured: function(v) {
        if (v==="_") { change_t_f[ind] = 2; return "P_"; }
        else if ((v==="E")||(v==="X")||(v==="W")||(v==="M")) { return v; }
        // 2 to move into forest/pillar
        else if (v==="F")   { change_t_f[ind] = 1; return "F1_"; }
        else if (v==="F1")  { change_t_f[ind] = 2; return "P_";  }
        // 3 to move into desert
        else if (v==="D")   { change_t_f[ind] = 1; return "D2_"; }
        else if (v==="D2")  { change_t_f[ind] = 1; return "D1_"; }
        else if (v==="D1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into a fort
        else if (v==="C")   { change_t_f[ind] = 1; return "C1_"; }
        else if (v==="C1")  { change_t_f[ind] = 2; return "P_";  }
        else { return v; }
      },
      pirate: function(v) {
        if (v==="_") { change_t_f[ind] = 2; return "P_"; }
        else if ((v==="E")||(v==="X")||(v==="M")) { return v; }
        // 2 to move into forest/pillar
        else if (v==="F")   { change_t_f[ind] = 1; return "F1_"; }
        else if (v==="F1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into water
        else if (v==="W")   { change_t_f[ind] = 1; return "W1_"; }
        else if (v==="W1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into desert
        else if (v==="D")   { change_t_f[ind] = 1; return "D1_"; }
        else if (v==="D1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into a fort
        else if (v==="C")   { change_t_f[ind] = 1; return "C1_"; }
        else if (v==="C1")  { change_t_f[ind] = 2; return "P_";  }
        else { return v; }
      },
      // brigand/berserker
      brig_bers: function(v) {
        if (v==="_") { change_t_f[ind] = 2; return "P_"; }
        else if ((v==="E")||(v==="X")||(v==="W")) { return v; }
        // 2 to move into forest/pillar
        else if (v==="F")   { change_t_f[ind] = 1; return "F1_"; }
        else if (v==="F1")  { change_t_f[ind] = 2; return "P_";  }
        // 3 to move onto mountains
        else if (v==="M")   { change_t_f[ind] = 1; return "M2_"; }
        else if (v==="M2")  { change_t_f[ind] = 1; return "M1_"; }
        else if (v==="M1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into desert
        else if (v==="D")   { change_t_f[ind] = 1; return "D1_"; }
        else if (v==="D1")  { change_t_f[ind] = 2; return "P_";  }
        // 2 to move into a fort
        else if (v==="C")   { change_t_f[ind] = 1; return "C1_"; }
        else if (v==="C1")  { change_t_f[ind] = 2; return "P_";  }
        else { return v; }
      }
    }
    // I am uncertain whether the above object is redefined every time the
    // function is called, but i don't think it is.

    // In any case, here are the operations, with what I suspect are minimally
    // efficient guard statements, as they check in each individual case whether
    // the tile being searched is within the border of the map dimensions.

    // examine the tile above center tile.
    if(y <= map_dims[1] )      {
      // this first part edits the character on the mutable movement array.
      ms_mov_arr[x][y+1] = moc_changer[m_type](ms_mov_arr[x][y+1], 0);
       /* this second part saves any newly blued, or "infected", tiles to an
       array so that they will conduct their own "SDS" in the next phase.
       (the program used to use nested for loops to check every single map
       tile in every cycle to search for the tiles to expand from. this is
       much more efficient). I used "ewn" out of supersitious fear of ever
       using the word "new" in a variable name. */
      if (change_t_f[0] === 2) { ewn_to_chk_arr.push([x,y+1]); }
    }

    // examine the tile to the left of center tile.
    if(x > 0 )                 {
      ms_mov_arr[x-1][y] = moc_changer[m_type](ms_mov_arr[x-1][y], 1);
      if (change_t_f[1] === 2) { ewn_to_chk_arr.push([x-1,y]); }
    }
    // examine the tile below center tile.
    if(y > 0 )                 {
      ms_mov_arr[x][y-1] = moc_changer[m_type](ms_mov_arr[x][y-1], 2);
      if (change_t_f[2] === 2) { ewn_to_chk_arr.push([x,y-1]); }
    }
    // examine the tile to the right of center tile.
    if(x <= map_dims[1]  )     {
      ms_mov_arr[x+1][y] = moc_changer[m_type](ms_mov_arr[x+1][y], 3);
      if (change_t_f[3] === 2) { ewn_to_chk_arr.push([x+1,y]); }
    }
    if (change_t_f.includes(1)) { ewn_to_chk_arr.push([x,y]); }
  }

  /* I called this section, which uses all the above material, the "seeker."
  It is the outer function, superordinate over the SDS. It seeks for tiles
  to use "SDS" on. */

  var moc_seeker = function() {

    // These functions and variable declarations are for use by the main for
    // loop below.
    var to_chk_arr = [[su_x, su_y]];

    var cycle_cleanup = function (arr) {
      // convert cycle-end text
      // at the end of each "cycle",
      // "P_" is used
      var conv_cyc_end_txt = function (char) {
        if      (char === "P_") { return "B"; }
        // strips off the underscore. Underscores are used as delay characters,
        // keeping other SDS operations in the same phase from acting on
        // recently (too recently) "infected" squares.
        else { return char[0] + char[1]; }
      }
      // searches the entire map.
      for (k=0; k<map_dims[0]; k++) {
        for (i=0; i<map_dims[1]; i++) {
          ms_mov_arr[k][i] = conv_cyc_end_txt(ms_mov_arr[k][i]);
        }
      }

    }

    // Main for loop.
    for (j=0; j<m_range; j++) {
      // a guard statment ending the foor loop early if there is nothing left
      // to check, as would happen if a unit was totally boxed in by obstacles.
      if (to_chk_arr.length === 0) { return; }
      // re-defining the new "to check array" as empty.
      ewn_to_chk_arr = [];
      // a for loop which runs "SDS" on each tile to check.
      for(p=0; p<to_chk_arr.length; p++) {
        moc_sds(to_chk_arr[p][0],to_chk_arr[p][1]);
      }
      // updates the "to check array" with only all of the new things which need
      // to be checked.
      to_chk_arr = ewn_to_chk_arr;
      cycle_cleanup(ms_mov_arr); // scans the entire map.
    }
    return ms_mov_arr;
  }

  // returns the result of its main function, the Seeker.
  return moc_seeker(su_x, su_y, m_range, ms_mov_arr, m_type, map_dims);

}
