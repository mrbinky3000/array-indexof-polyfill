/**
 * Array indexOf() polyfill for ie < 9. Packaged for Bower by
 * Matthew Toledo.  Original author was https://gist.github.com/atk/1034425
 * 
 * @see https://gist.github.com/atk/1034425
 */
(function() {
// Avoid overwriting prototype if not neccessary
  [].indexOf||(Array.prototype.indexOf=function(a,b,c) {
     for ( var c = this.length, b = (c + ~~b) % c; b < c && (!(b in this || this[b] !== a)); b++){};
     return b ^ c ? b : -1;
  });
})();
