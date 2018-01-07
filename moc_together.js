
var moc = function (su_x, su_y, m_range, ms_mov_arr, m_type, map_dims) {

  var moc_sds = function(x, y) {
    var change_t_f = [0, 0, 0, 0];
    var moc_changer = {
      standard: function(v, ind) {
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

    // with minimally efficient interior guard statements
    if(y <= map_dims[1] )      {
      ms_mov_arr[x][y+1] = moc_changer[m_type](ms_mov_arr[x][y+1], 0);
      if (change_t_f[0] === 2) { ewn_to_chk_arr.push([x,y+1]); }
    }
    if(x > 0 )                 {
      ms_mov_arr[x-1][y] = moc_changer[m_type](ms_mov_arr[x-1][y], 1);
      if (change_t_f[1] === 2) { ewn_to_chk_arr.push([x-1,y]); }
    }
    if(y > 0 )                 {
      ms_mov_arr[x][y-1] = moc_changer[m_type](ms_mov_arr[x][y-1], 2);
      if (change_t_f[2] === 2) { ewn_to_chk_arr.push([x,y-1]); }
    }
    if(x <= map_dims[1]  )     {
      ms_mov_arr[x+1][y] = moc_changer[m_type](ms_mov_arr[x+1][y], 3);
      if (change_t_f[3] === 2) { ewn_to_chk_arr.push([x+1,y]); }
    }
    if (change_t_f.includes(1)) { ewn_to_chk_arr.push([x,y]); }
  }

  var moc_seeker = function() {
    var to_chk_arr = [[su_x, su_y]];

    var cycle_cleanup = function (arr) {
      // convert cycle-end text
      var conv_cyc_end_txt = function (char) {
        if      (char === "P_") { return "B"; }
        else { return char[0] + char[1]; } // strips off the underscore
      }
      for (k=0; k<map_dims[0]; k++) {
        for (i=0; i<map_dims[1]; i++) {
          ms_mov_arr[k][i] = conv_cyc_end_txt(ms_mov_arr[k][i]);
        }
      }

    }
    for (j=0; j<m_range; j++) {
      if (to_chk_arr.length === 0) { return; }
      ewn_to_chk_arr = [];
      for(p=0; p<to_chk_arr.length; p++) {
        moc_sds(to_chk_arr[p][0],to_chk_arr[p][1]);
      }
      to_chk_arr = ewn_to_chk_arr;
      cycle_cleanup(ms_mov_arr); // ** scans the entire map.
    }
    // final cleanup
    // final cleanup is unecessary, but we will need to change ally spaces that are blue to "Q."
    return ms_mov_arr;
  }

  return moc_seeker(su_x, su_y, m_range, ms_mov_arr, m_type, map_dims);

}
