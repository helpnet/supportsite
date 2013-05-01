(function($) {
  Drupal.behaviors.designModelGraphic = { 
    attach: function(context, settings) {
      
      if ($.browser.msie) {
        console.log(parseFloat($.browser.version));

        if(parseFloat($.browser.version) < 10) {
          return;
        }
      }

      // Create the paper canvas from a DOM element.
      var paperDiv = $('.pane-main-menu .pane-content')[0];

      paper = Raphael(paperDiv, 600, 400);

      // Create the middle bubble.
      var model = paper.circle(paper.width * .35, paper.height * .5, 60);
    
     // model.attr("fill", "rgb(213, 73, 73)");
      model.attr("stroke", "rgb(116, 39, 39)");

      modelLabel = paper.text(model.attrs.cx, model.attrs.cy, "Design\nModel");
      modelLabel.attr("font", "20px 'Georgia'");

      // Function to add the bubbles.
      function createPhaseBubble(link, xval, yval, image, rolloverImage, w, h, ix, iy) {

        var phase = paper.circle(xval, yval, 50);

        phase.attr("fill", "#e8e8e8");
        phase.attr('stroke', 'rgb(131, 131, 131)');

        icon = paper.image(image, xval-ix, yval-iy, w, h);

        var transparency = paper.circle(xval, yval, 50).toFront();
        transparency.attr('fill', 'rgba(232, 232, 232, 0)');
        transparency.attr('stroke', 'rgba(232, 232, 232, 0)');

        label = paper.text(phase.attrs.cx, phase.attrs.cy+30, link.text);
        label.attr("font", "15px 'Georgia'");
        label.attr('href', '#');

        iconHover(label, xval-ix, yval-iy, rolloverImage, w, h);

        circleHover(phase, xval, yval);
        circleHover(label, xval, yval);
        circleHover(icon, xval, yval);
        circleHover(transparency, xval, yval);

        $(label.node).click(function() {
          link.click();
          return false;
        });

        $(phase.node).click(function() {
          link.click();
          return false; 
        });

        $(icon.node).click(function() {
          link.click();
          return false; 
        });

        $(transparency.node).click(function() {
          link.click();
          return false; 
        });

        return phase;

      }
      
      // Reusable code to draw underlying circle with hover.
      function circleHover(element, xval, yval) {
        element.hover(function() {
          shadow = paper.circle(xval, yval, 40);
          shadow.toBack();
          g = shadow.glow({color: "rgb(131, 131, 131)", width: 40});
          g.toBack();
        }, function() {
          g.remove();
        });
      }

      function iconHover(element, xval, yval, rolloverImage, w, h) {
          element.hover(function() {
              hoverImage = paper.image(rolloverImage, xval, yval, w, h);
              hoverImage.attr('href', '#');
          }, function() {
              hoverImage.remove();
          });
      }


      // Get coordinates for each phase.
      x = model.attrs.cx;
      y = model.attrs.cy;
      r = 140;
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

      // Hide the menu.
      $('#model-graphic-base-menu ul.menu').hide();

      // Get the menu links.
      var phaseLinks = $('#model-graphic-base-menu .menu li').children();

      // Create an object for each phase.
      var plan = {
        link: phaseLinks[0],
        xpos: coordinates[3].x,
        ypos: coordinates[3].y,
        image: 'misc/model/plan.png',
        rolloverImage: 'misc/model/plan_rollover.png',
        w: 45,
        h: 49,
        ix: 22,
        iy: 35,
      }

      var design = {
        link: phaseLinks[1],
        xpos: coordinates[4].x,
        ypos: coordinates[4].y,
        image: 'misc/model/design.png',
        rolloverImage: 'misc/model/design_rollover.png',
        w: 35,
        h: 65,
        ix: 17,
        iy: 45,
      }

      var create = {
        link: phaseLinks[2],
        xpos: coordinates[0].x,
        ypos: coordinates[0].y,
        image: 'misc/model/create.png',
        rolloverImage: 'misc/model/create_rollover.png',
        w: 45,
        h: 39,
        ix: 21,
        iy: 26,
      }

      var teach = {
        link: phaseLinks[3],
        xpos: coordinates[1].x,
        ypos: coordinates[1].y,
        image: 'misc/model/teach.png',
        rolloverImage: 'misc/model/teach_rollover.png',
        w: 45,
        h: 39,
        ix: 21,
        iy: 26,
      }

      var evaluate = {
        link: phaseLinks[4],
        xpos: coordinates[2].x,
        ypos: coordinates[2].y,
        image: 'misc/model/evaluate.png',
        rolloverImage: 'misc/model/evaluate_rollover.png',
        w: 45,
        h: 42,
        ix: 22,
        iy: 30,
      }

      var phaseObjects = [plan, design, create, teach, evaluate];

      // Create a bubble for each phase.
      var bubbles = [];

      for (i=0; i < phaseLinks.length; i++) {
        bubble = createPhaseBubble(phaseLinks[i], phaseObjects[i].xpos, phaseObjects[i].ypos, phaseObjects[i].image, phaseObjects[i].rolloverImage, phaseObjects[i].w, phaseObjects[i].h, phaseObjects[i].ix, phaseObjects[i].iy);
        bubbles.push(bubble);
      }

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
        line.attr('stroke', '#D7D7D7');
        line.attr('stroke-width', '5');
      }

    }
  }
})(jQuery);
