/**
 * ekwal 1.0.0
 *
 * To use it, just call the jQuery#ekwal() method on the elements you want to equalize.
 * It accept any of the jQuery dimension methods names as a parameter, and is, by default, height.
 * e.g : $('el').ekwal([dimension])
 *
 * By François Robichet http://francois.robichet.com or @calvein pretty much everywhere
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Sep 14 19:45:00 2012
*/

!function($) {
    $.fn.ekwal = function(jQueryDimension) {
        // `height` is the default value
        jQueryDimension = jQueryDimension || 'height'
        var $els = this
          , prop = /eight/.test(jQueryDimension) ? 'height' : 'width';

        if (typeof $.fn[jQueryDimension] !== 'function')
            throw new Error('$.fn.' + jQueryDimension + '() do not exist')

        $els[prop](Math.max.apply(null, $.map($els, function(el) {
            return $(el)[jQueryDimension]()
        })))

        return $els
    }
}(window.jQuery || window.Zepto);
