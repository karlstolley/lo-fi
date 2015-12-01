jQuery.noConflict();
(function($) {
  $(function() {
    $('abbr[title]').each(function() {
      var abbr, expandedText;
      abbr = $(this).text();
      $(this).attr('data-expanded', $(this).attr('title') + " (" + abbr + ")");
      $(this).attr('tabindex','0');
    });
    $('abbr[title]').on('click keypress', function() {
      $(this).html($(this).attr('data-expanded')).addClass('expanded').removeAttr('title tabindex');
    });
  });
})(jQuery);

