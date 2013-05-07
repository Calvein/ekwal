/*global ekwal:false */

;(function($) {

$(function() {
    "use strict"; // Yes, that's half an ass, damnit JSHint（╯°□°）╯ ︵ ┻━┻

    // Randomize the height/width of the elements we can test
    var randomSize = function() {
            var tmp;
            return (tmp = Math.floor(100 * Math.random())) > 10 ? tmp : 50;
        },
        $globalPlaceholders = $('.placeholder > li');

    $globalPlaceholders.each(function() {
        var tmp;
        $(this).css({
            height: randomSize(),
            width : randomSize()
        });
    });

    // When the user test the plugin
    $('form').on('submit', function(e) {
        e.preventDefault();
        var $form = $(this),
            $input = $('input', $form);
            // Add a try catch to alert the exception if needed
            try {
                // Use the jQuery/Zepto plugin or the Vanilla one
                if ($form.data('type') === 'jquery') {
                    $('.placeholder > li', $form).ekwal($input.val());
                } else {
                    ekwal($form[0].querySelectorAll('.placeholder > li'), $input.val());
                }
                canIHazKittens && kittensAllTheWay();
            } catch(error) {
                alert(error.message + ' you silly boy.');
            }
    });

    // Useless, as usual, I also was looking for cat sound but fuck it
    var kittensAllTheWay = function() {
            $globalPlaceholders.each(function() {
                var $this = $(this),
                    kitty = 'http://placekitten.com',
                    width = $this.width(),
                    height = $this.height();
                // Yay kittens \o/
                // Can i haz grey kittens?
                kitty += Math.random() > 0.5 ? '/' : '/g/';
                kitty += width + '/' +  height;
                $this.html($('<img>').attr({
                    src: kitty,
                    width: width,
                    height: height
                }));
            });
            canIHazKittens = true;
        },
        canIHazKittens = false,
        kkeys = [],
        konami = '38,38,40,40,37,39,37,39,66,65';
    $(document).on('keydown:kittens', function(e) {
        kkeys.push(e.keyCode);
        if (kkeys.toString().indexOf(konami) >= 0 ) {
            $(document).off('keydown:kittens');
            kittensAllTheWay();
        }
    });
});

}(window.jQuery || window.Zepto));
