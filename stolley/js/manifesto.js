jQuery.noConflict();
(function($) {
  $(function() {
    $('abbr[title]').each(function() {
      var abbr, expandedText;
      abbr = $(this).text();
      $(this).attr('data-expanded', $(this).attr('title') + " (" + abbr + ")");
    });
    $('abbr[title]').click(function() {
      $(this).html($(this).attr('data-expanded')).addClass('expanded').removeAttr('title');
    });
  });
})(jQuery);

