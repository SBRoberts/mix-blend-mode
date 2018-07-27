(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

// Document Ready
$(function () {
    // get each example and do the following to each
    $(".examples").children().each(function () {

        // get the blend mode from div's class
        var blend = $(this).prop("class");

        // get rid of pesky row class
        blend = blend.split(" ")[1];

        // append new html to each example with an overlay that applys the blend variable as css
        $(this).append("\n            <div class=\"blend\">\n                <h4 class=\"" + blend + "\">mix-blend-mode: " + blend + "</h4>\n            </div>\n        ");
        $(this).find(".blend").css("mix-blend-mode", "" + blend);
    });
});

// if mix-blend-mode is not supported by the browser
if (window.getComputedStyle(document.body).mixBlendMode === undefined) {
    console.log("This Browser Does Not Support the mix-blend-mode property");
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0EsRUFBRSxZQUFVO0FBQ1I7QUFDQSxNQUFFLFdBQUYsRUFBZSxRQUFmLEdBQTBCLElBQTFCLENBQStCLFlBQVU7O0FBRXJDO0FBQ0EsWUFBSSxRQUFRLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxPQUFiLENBQVo7O0FBRUE7QUFDQSxnQkFBUSxNQUFNLEtBQU4sQ0FBWSxHQUFaLEVBQWlCLENBQWpCLENBQVI7O0FBRUE7QUFDQSxVQUFFLElBQUYsRUFBUSxNQUFSLHVFQUVxQixLQUZyQiwyQkFFK0MsS0FGL0M7QUFLQSxVQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsUUFBYixFQUF1QixHQUF2QixDQUEyQixnQkFBM0IsT0FBK0MsS0FBL0M7QUFDSCxLQWZEO0FBZ0JILENBbEJEOztBQW9CQTtBQUNBLElBQUksT0FBTyxnQkFBUCxDQUF3QixTQUFTLElBQWpDLEVBQXVDLFlBQXZDLEtBQXdELFNBQTVELEVBQXVFO0FBQ25FLFlBQVEsR0FBUixDQUFZLDJEQUFaO0FBQ0giLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvLyBEb2N1bWVudCBSZWFkeVxuJChmdW5jdGlvbigpe1xuICAgIC8vIGdldCBlYWNoIGV4YW1wbGUgYW5kIGRvIHRoZSBmb2xsb3dpbmcgdG8gZWFjaFxuICAgICQoXCIuZXhhbXBsZXNcIikuY2hpbGRyZW4oKS5lYWNoKGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgLy8gZ2V0IHRoZSBibGVuZCBtb2RlIGZyb20gZGl2J3MgY2xhc3NcbiAgICAgICAgbGV0IGJsZW5kID0gJCh0aGlzKS5wcm9wKFwiY2xhc3NcIik7XG5cbiAgICAgICAgLy8gZ2V0IHJpZCBvZiBwZXNreSByb3cgY2xhc3NcbiAgICAgICAgYmxlbmQgPSBibGVuZC5zcGxpdChcIiBcIilbMV07XG5cbiAgICAgICAgLy8gYXBwZW5kIG5ldyBodG1sIHRvIGVhY2ggZXhhbXBsZSB3aXRoIGFuIG92ZXJsYXkgdGhhdCBhcHBseXMgdGhlIGJsZW5kIHZhcmlhYmxlIGFzIGNzc1xuICAgICAgICAkKHRoaXMpLmFwcGVuZChgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxlbmRcIj5cbiAgICAgICAgICAgICAgICA8aDQgY2xhc3M9XCIke2JsZW5kfVwiPm1peC1ibGVuZC1tb2RlOiAke2JsZW5kfTwvaDQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYClcbiAgICAgICAgJCh0aGlzKS5maW5kKFwiLmJsZW5kXCIpLmNzcyhcIm1peC1ibGVuZC1tb2RlXCIsYCR7YmxlbmR9YClcbiAgICB9KTtcbn0pO1xuXG4vLyBpZiBtaXgtYmxlbmQtbW9kZSBpcyBub3Qgc3VwcG9ydGVkIGJ5IHRoZSBicm93c2VyXG5pZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuYm9keSkubWl4QmxlbmRNb2RlID09PSB1bmRlZmluZWQpIHtcbiAgICBjb25zb2xlLmxvZyhcIlRoaXMgQnJvd3NlciBEb2VzIE5vdCBTdXBwb3J0IHRoZSBtaXgtYmxlbmQtbW9kZSBwcm9wZXJ0eVwiKVxufVxuIl19
