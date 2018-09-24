<!DOCTYPE html>
<html lang="en-US">
  <head>
    <title>Greedy Dice</title>
    <meta name="author" content="Richard McQuiston" />
    <meta name="description" content=""  />
    <meta name="keywords" content="" />

    <?php
      include_once('includes/head.php');
    ?>
  </head>
  <body class="container">
    <div class="row">
      <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
        <h1 class="h1">Greedy Dice</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2 col-lg-2 col-xl-2 col-sm-4 col-xs-12">
        <input id="btn_new_game" type="button" class="btn btn-primary" value="New Game" />
      </div>
      <div class="col-md-2 col-lg-2 col-xl-2 col-sm-4 col-xs-12">
        <input id="btn_options" type="button" class="btn btn-secondary" value="Options" />
      </div>
      <div class="col-md-2 col-lg-2 col-xl-2 col-sm-4 col-xs-12">
        <input id="btn_quit" type="button" class="btn btn-danger" value="Quit Game" disabled="disabled" />
      </div>
    </div>
    <div class="row" id="game_board" style="display: none">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
          <h2 class="h2" id="turn_indicator"></h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
          <label class="control-label">Current Score:</label> <span id="current_score"></span>
        </div>
        <div class="col-md-6 col-lg-6 col-xl-6 col-sm-12 col-xs-12">
          <label class="control-label">Total Score:</label> <span id="total_score"></span>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 clearfix">
          
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h3 class="h3">Kept Dice</h3>
          <table class="table" id="tbl_dice_fields">

          </table>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <h3 class="h3">Current Roll</h3>
          <table class="table" id="tbl_dice_current">

          </table>
        </div>
      </div>
    </div>
    <div class="row" id="options_screen" style="display: none">
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
          <h2 class="h2" id="opt_header">Options</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
          <table class="table">
            <tbody>
              <tr>
                <td>
                  <label for="num_dice" class="control-label pull-right">Number of Dice:</label>
                </td>
                <td>
                  <input type="text" class="form-control" id="num_dice" name="num_dice" value="6" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="max_score" class="control-label pull-right">Max Score:</label>
                </td>
                <td>
                  <input type="text" class="form-control" id="max_score" name="max_score" value="10000" />
                </td>
              </tr>
              <tr>
                <td>
                  <label for="play_direction" class="control-label pull-right">Play Direction:</label>
                </td>
                <td>
                  <select id="play_direction" size="1" class="form-control">
                    <option value="0" selected="selected">
                      Standard
                    </option>
                    <option value="1">
                      Reverse
                    </option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <label for="score_method" class="control-label pull-right">Scoring Method:</label>
                </td>
                <td>
                  <select id="score_method" size="1" class="form-control">
                    <option value="0" selected="selected">
                      Standard
                    </option>
                    <option value="1">
                      Poker
                    </option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="button" id="save_options" class="btn btn-success" value="Save Options" />
        </div>
      </div>
    </div>
  </body>
</html>
