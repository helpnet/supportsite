(function($) {
  Drupal.behaviors.designPhases = {
    attach: function(context, settings) {

      var menuLinks;

      $('.node-design-phase-description').hide();

      menuLinks = $('.pane-menu-menu-design-model-test-menu li.leaf a');

      $.each(menuLinks, function(key, value) {

        var node = $(value).attr('id');

        var nodeDiv = $('div#' + node);

        $(value).click( function() {

          $('.node-design-phase-description').hide();

          $(nodeDiv).fadeIn('fast'); 

          return false;
        });

      });


    }
  }
})(jQuery);