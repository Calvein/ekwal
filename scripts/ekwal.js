/**
 * ekwal 1.0.0
 *
 * To use it, just call the ekwal() function with the elements you want to equalize.
 * As of the jQuery version, it accept a parameter which can be height (by default) or width
 * e.g : ekwal('el'[, 'width'])
 *
 * For IE8- support you should use polyfills for
 * * [Array#forEach](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/forEach#Compatibility)
 * * [Array#map](https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/map#Compatibility)
 * * [window.getComputedStyle](https://github.com/jonathantneal/Polyfills-for-IE8/blob/master/getComputedStyle.js)
 *
 * By François Robichet http://francois.robichet.com or @calvein pretty much everywhere
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 *
 * Date: Sep 14 19:45:00 2012
 */

!function() {
    window.ekwal = function(els, prop) {
        els = [].slice.call(els)
        // `height` is the default value
        prop = prop || 'height'

        if (prop !== 'height' && prop !== 'width')
            throw new Error('"' + prop + '" must be "height" (by default) or "width"')

        els.forEach(function(el) {
            el.style[prop] = Math.max.apply(null, els.map(function(el) {
                return parseInt(getComputedStyle(el).getPropertyValue(prop), 10)
            })) + 'px'
        })

        return els
    }
}()