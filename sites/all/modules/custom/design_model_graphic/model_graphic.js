(function($) {
  Drupal.behaviors.designModelGraphic = { 
    attach: function(context, settings) {

      var planLink = $('.menu li').children()[0];

      var paperDiv = $('.pane-main-menu .pane-content')[0];

      paper = Raphael(paperDiv, 600, 300);

      var model = paper.circle(paper.width * .30, paper.height * .5, 60);

      model.attr("fill", "rgb(213, 73, 73)");
      model.attr("stroke", "rgb(116, 39, 39)");

      modelLabel = paper.text(model.attrs.cx, model.attrs.cy, "Design\nModel");
      modelLabel.attr("font", "20px 'Lucida Grande'");

      var planPhase = paper.circle(paper.width * .50, paper.height * .15, 40);
      planPhase.attr("fill", "rgb(129, 179, 157)");
      planPhase.attr('href', '#');

      planLabel = paper.text(planPhase.attrs.cx, planPhase.attrs.cy, planLink.text);
      planLabel.attr("font", "20px", "Lucida Grande");
      planLabel.attr('href', '#');

      planPhase.click(function() {
        planLink.click();
      });

      planLabel.click(function() {
        planLink.click();
      });


    }
  }
})(jQuery);
