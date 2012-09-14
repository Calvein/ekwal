Ekwal
=====

Ekwal is a jQuery/Zepto plugin or a Vanilla JS (IE9+) plugin which helps you to equalize elements according to their height or width

A [jQuery][]/[Zepto][] or a [Vanilla JS][]/[Vapor.js][] (IE9+) plugin to equalize elements.

jQuery/Zepto Version
--------------------

To use it, just call the `jQuery#ekwal()` method on the elements you want to equalize.
It accept any of the [jQuery dimension methods][] names as a parameter, and is, by default, `height`.
e.g : `$('el').ekwal([dimension])`

* * * * *

Vanilla Version
---------------

To use it, just call the `ekwal()` function with the elements you want to equalize.
As of the jQuery version, it accept a parameter which can be `height` (by default) or `width`
e.g : `ekwal('el'[, 'width'])`

  [jQuery]: http://jquery.com
  [Zepto]: http://zeptojs.com
  [Vanilla JS]: http://vanilla-js.com/
  [Vapor.js]: http://vaporjs.com/
  [jQuery dimension methods]: http://api.jquery.com/category/dimensions/