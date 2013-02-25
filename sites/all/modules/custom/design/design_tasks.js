(function($) {
  Drupal.behaviors.designTasks = {
    attach: function(context, settings) {


      $('.pane-design-phase-tasks .pane-title').after("<a href='#'class='expand-all'>Expand All</a>");

      $('a.expand-all').toggle( function() {

        $('.field-name-field-design-phase-task-overview').slideDown('fast');
        $('.field-name-field-related-job-aids-view').slideDown('fast');
        $('.field-name-field-related-teaching-online-vi').slideDown('fast');

      }, function() {
        $('.field-name-field-design-phase-task-overview').slideUp('fast');
        $('.field-name-field-related-job-aids-view').slideUp('fast');
        $('.field-name-field-related-teaching-online-vi').slideUp('fast');
      });

      $('.field-name-field-design-phase-task-overview').hide();
      $('.field-name-field-related-job-aids-view').hide();
      $('.field-name-field-related-teaching-online-vi').hide();

      var titleElement = $('.design-phase-task-row .field-name-title h3');

      titleElement.each(function(index, value) {
        var title = $(value).text();

        $(value).html("<a href='#'>" + title + "</a>");
      });
      
      $('.design-phase-task-row .field-name-title').click(function() {

        $(this).parents('.design-phase-task-row').find('.field-name-field-design-phase-task-overview').slideToggle('fast');

        $(this).parents('.design-phase-task-row').find('.field-name-field-related-job-aids-view').toggle('fast');

        $(this).parents('.design-phase-task-row').find('.field-name-field-related-teaching-online-vi').toggle('fast');

        return false;
      });

    }
  }
})(jQuery);
