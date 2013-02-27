(function($) {
  Drupal.behaviors.designModelGraphic = { 
    attach: function(context, settings) {

      $('ul.menu').hide();

      // Create the paper canvas from a DOM element.
      var paperDiv = $('.pane-main-menu .pane-content')[0];

      paper = Raphael(paperDiv, 600, 400);

      // Create the middle bubble.
      var model = paper.circle(paper.width * .30, paper.height * .4, 60);

      model.attr("fill", "rgb(213, 73, 73)");
      model.attr("stroke", "rgb(116, 39, 39)");

      modelLabel = paper.text(model.attrs.cx, model.attrs.cy, "Design\nModel");
      modelLabel.attr("font", "20px 'Lucida Grande'");

      // Function to add the bubbles.
      function createPhaseBubble(link, xval, yval) {

        var phase = paper.circle(xval, yval, 40);

        phase.attr("fill", "rgb(129, 179, 157)");
        phase.attr('href', '#');

        label = paper.text(phase.attrs.cx, phase.attrs.cy, link.text);
        label.attr("font", "20px", "Lucida Grande");
        label.attr('href', '#');

        circleHover(phase, xval, yval);
        circleHover(label, xval, yval);

        $(label.node).click(function() {
          link.click();
          return false;
        });

        $(phase.node).click(function() {
          link.click();
          return false; 
        });

        return phase;

      }
      
      // Reusable code to draw underlying circle with hover.
      function circleHover(element, xval, yval) {
        element.hover(function() {
          shadow = paper.circle(xval, yval, 39);
          shadow.toBack();
          g = shadow.glow();
          g.toBack();
        }, function() {
          g.remove();
        });
      }

      // Get coordinates for each phase.
      x = model.attrs.cx;
      y = model.attrs.cy;
      r = 115;
      n = 5;
      var coordinates = [];

      for(i = 1; i <= 5; i++) {
        x1 = r * Math.cos((i * 2 * Math.PI)/n) + x;
        y1 = r * Math.sin((i * 2 * Math.PI)/n) + y;

        var c = {};
        c.x = x1;
        c.y = y1;

        coordinates.push(c);

      }

      // Get the menu links.
      var phaseLinks = $('.menu li').children();

      // Create an object for each phase.
      var plan = {
        link: phaseLinks[0],
        xpos: coordinates[3].x,
        ypos: coordinates[3].y,
      }

      var design = {
        link: phaseLinks[1],
        xpos: coordinates[4].x,
        ypos: coordinates[4].y,
      }

      var create = {
        link: phaseLinks[2],
        xpos: coordinates[0].x,
        ypos: coordinates[0].y,
      }

      var teach = {
        link: phaseLinks[3],
        xpos: coordinates[1].x,
        ypos: coordinates[1].y,
      }

      var evaluate = {
        link: phaseLinks[4],
        xpos: coordinates[2].x,
        ypos: coordinates[2].y,
      }

      var phaseObjects = [plan, design, create, teach, evaluate];

      // Create a bubble for each phase.
      var bubbles = [];

      for (i=0; i < phaseLinks.length; i++) {
        bubble = createPhaseBubble(phaseLinks[i], phaseObjects[i].xpos, phaseObjects[i].ypos, 40);
        bubbles.push(bubble);
      }

      console.log(bubbles);

      // Draw lines between the bubbles.
      for (i=0; i < bubbles.length; i++) {
        var line;
        var linex1 = bubbles[i].attrs.cx;
        var liney1 = bubbles[i].attrs.cy;

        if (i < bubbles.length - 1) {
          var linex2 = bubbles[i + 1].attrs.cx;
          var liney2 = bubbles[i + 1].attrs.cy;
        } 
        else {
          var linex2 = bubbles[0].attrs.cx;
          var liney2 = bubbles[0].attrs.cy;
        }

        line = paper.path("M" + linex1 + "," + liney1 + "L" + linex2 + "," + liney2);

        line.toBack();
        line.attr('stroke-width', '5');
      }

    }
  }
})(jQuery);
