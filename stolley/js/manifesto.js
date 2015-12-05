jQuery.noConflict();
(function($) {
  $(function() {
    $('html').removeClass('nojs').addClass('js');
    $('#header').append('<p class="skip">ASCII art below. <a href="#preamble">Skip to text.</a></p>'
      + '<figure id="ascii" role="img" aria-labelledby="ascii-caption">'
      + '<figcaption id="ascii-caption">ASCII art of title and author of Lo-Fi Manifesto.</figcaption>'
      + '</figure>');
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
    $('#manifesto-points dt').each(function() {
      var point = {}
      var text = $(this).text();
      // Grab text content & data-fragment values
      point.count = text.substr(0,3); // Preserve opening number for browsers that don't understand content: in CSS
      point.text = text.substr(3); // Slice off opening number, ., and space
      point.fragment = $(this).attr('data-fragment');
      $(this).attr('id', "point-" + point.fragment);
      $(this).html('<b>'+point.count+'</b>'+'<a href=#point-' + point.fragment + '>' + point.text + '</a>');
    });
    $('#manifesto-points dt').on('click keypress', function() {
      $('#manifesto-points').toggleClass('expanded');
    });
  });
})(jQuery);

