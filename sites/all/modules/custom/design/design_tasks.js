(function($) {
  Drupal.behaviors.designTasks = {
    attach: function(context, settings) {

      $('.field-name-field-design-phase-task-overview').hide();
      $('.field-name-field-related-job-aids-view').hide();
      $('.field-name-field-related-teaching-online-vi').hide();
      
      $('.design-phase-task-row .field-name-title').click(function() {

        $(this).parents('.design-phase-task-row').find('.field-name-field-design-phase-task-overview').slideToggle('fast');

        $(this).parents('.design-phase-task-row').find('.field-name-field-related-job-aids-view').toggle('fast');

        $(this).parents('.design-phase-task-row').find('.field-name-field-related-teaching-online-vi').toggle('fast');
      });

    }
  }
})(jQuery);
