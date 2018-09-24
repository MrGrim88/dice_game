var in_progress = false;
var player_turn = true;
var max_dice = 6;
var max_score = 10000;
var play_direction = 0;
var player2_cpu = true;
var scoring_method = 0;

var player_scores = {
  player: {
    total: 0,
    current: 0,
  },
  cpu: {
    total: 0,
    current: 0,
  }
};

var player_dice = {
  player: {
    kept: [],
    current: [],
  },
  cpu: {
    kept: [],
    current: [],
  }
};

var tbl_fields = document.getElementById('tbl_dice_fields');

function set_score(player, hand, value) {
  player_scores[player][hand] = value;
}
function add_to_score(player, hand, value) {
  player_scores[player][hand] += value;
}
function initialize_player_dice() {
  var players = [
    'player', 'cpu'
  ];
  var types = [
    'current', 'kept'
  ];
  for (var x = 0; x < players.length; x++) {
    var p = players[x];
    for (var y = 0; y < types.length; y++) {
      var t = types[y];
      for (var d = 0; d < max_dice; d++) {
        player_dice[p][t][d] = 0;
      }
    }
  }
}

function draw_fields(fld_name) {
  var tbl_fields = document.getElementById(fld_name);
  var tbl_row = document.createElement('tr');
  for (var i = 0; i < max_dice; i++) {
    var tbl_col = document.createElement('td');
    var input_field = document.createElement('input');

    input_field.type = 'text';
    input_field.id = fld_name + '_die_' + i;
    input_field.className = 'form-control';
    input_field.value = '0';
    tbl_col.appendChild(input_field);
    tbl_row.appendChild(tbl_col);
  }
  tbl_fields.appendChild(tbl_row);
}

function redraw_fields() {
  var field_names = [
    'tbl_dice_fields', 'tbl_dice_current'
  ];
  var roll_types = [
    'kept', 'current'
  ];

  for(var i = 0; i < field_names. length; i++) {
    var f = field_names[i];
    var p = (player_turn == true) ? 'player': 'cpu';
    var s = player_dice[p][roll_types[i]];
    //console.log(s);

    for (var d = 0; d < max_dice; d++) {
      var el = document.getElementById(f + '_die_' + d);
      if (s[d] > 0) {
        el.value = s[d];
      } else {
        el.value = '';
      }
    }
  }
}

$(document).ready(function() {
  console.log('Script Loaded');

  var lbl_cur_score = $('#current_score');
  var lbl_tot_score = $('#total_score');
  var lbl_turn = $('#turn_indicator');


  function update_scores() {
    if (player_turn == true) {
      lbl_tot_score.html(player_scores.player.total);
      lbl_cur_score.html(player_scores.player.current);
      lbl_turn.html('Your Turn');
    } else {
      lbl_tot_score.html(player_scores.cpu.total);
      lbl_cur_score.html(player_scores.cpu.current);
      lbl_turn.html('CPU\'s Turn');
    }
    console.log('Scores Updated');
  }

  $('#btn_new_game').click(function() {
    console.log('btn_new_game Clicked');

    in_progress = true;
    player2_cpu = true;

    player_scores = {
      player: {
        total: 0,
        current: 0,
      },
      cpu: {
        total: 0,
        current: 0,
      }
    };

    $('#game_board').css('display', 'block');

    update_scores();
    initialize_player_dice();
    draw_fields('tbl_dice_fields');
    draw_fields('tbl_dice_current');

    $('#btn_quit').removeAttr('disabled');
  });
  $('#btn_options').click(function() {
    console.log('btn_options Clicked');
    $('#options_screen').css('display', 'block');
  });
  $('#btn_quit').click(function() {
    console.log('btn_quit Clicked');
    $('#btn_quit').attr('disabled', 'disabled');
  });
  $('#save_options').click(function() {
    //console.log('save_options Clicked');
    //Save Options Here
    var errors = false;

    var opt_dice = parseInt($('#num_dice').val());
    if (opt_dice < 6 || opt_dice == '' || opt_dice > 10) {
      errors = true;
      $('#opt_header').append('<div class="alert alert-danger">Dice must be between 6 and 10.');
    }
    var opt_score = parseInt($('#max_score').val());
    if (opt_score < 5000 || opt_score == '' || opt_score > 500000) {
      errors = true;
      $('#opt_header').append('<div class="alert alert-danger">Score must be between 5,000 and 500,000.');
    }

    var play_dir = parseInt($('#play_direction').val());
    var score_meth = parseInt($('#score_method').val());

    if (errors == false) {
      max_dice = opt_dice;
      //console.log('Max Dice set to ' + max_dice);
      max_score = opt_score;
      //console.log('Max Score set to ' + max_score);
      play_direction = play_dir;
      //console.log('Play Direction set to ' + play_direction);
      scoring_method = score_meth;
      $('#options_screen').css('display', 'none');
    }
  });
});
