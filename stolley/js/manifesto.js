jQuery.noConflict();
(function($) {
  $(function() {
    $('html').removeClass('nojs').addClass('js');
    $('abbr[title]').each(function() {
      var abbr, expandedText;
      abbr = $(this).text();
      $(this).attr('data-expanded', $(this).attr('title') + " (" + abbr + ")");
      $(this).attr('tabindex','0');
    });
    $('abbr[title]').on('click keypress', function() {
      $(this).html($(this).attr('data-expanded')).addClass('expanded').removeAttr('title tabindex');
    });
    // Grabbing breakpoints from the CSS media queries using a technique outlined at
    //https://www.lullabot.com/articles/importing-css-breakpoints-into-javascript
    var breakpoint = {};
    breakpoint.refreshValue = function () {
      this.value = window.getComputedStyle(document.querySelector('body'), ':after').getPropertyValue('content').replace(/\"/g, '');
    };
    $(window).resize(function () {
      breakpoint.refreshValue();
      loadASCIIArt();
    }).resize();
    function loadASCIIArt() {
      $('#ascii pre').remove();
      $('#ascii').prepend($('#ascii-' + breakpoint.value).html());
    }
  });
})(jQuery);

