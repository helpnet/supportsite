(function($) {
  Drupal.behaviors.designPhases = {
    attach: function(context, settings) {

      var menuLinks;

      $('#design-model-page .node-design-phase-description').hide();

      menuLinks = $('#design-model-page .pane-main-menu li.leaf a');

      $.each(menuLinks, function(key, value) {

        var node = $(value).attr('id');

        var nodeDiv = $('div#' + node);

        $(value).click( function() {

          $('#design-model-page .node-design-phase-description').hide();

          $(nodeDiv).fadeIn('fast'); 

          return false;
        });

      });


    }
  }
})(jQuery);
