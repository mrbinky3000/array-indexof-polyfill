/**
 * Array indexOf() polyfill for ie < 9. Packaged for Bower by
 * Matthew Toledo.  Original author was https://gist.github.com/atk/1034425
 * 
 * @see https://gist.github.com/atk/1034425
 */
(function() {
// Avoid overwriting prototype if not neccessary
  [].indexOf||(Array.prototype.indexOf=
  function(
     a, // search item
     b, // startIndex and/or counter
     c  // length placeholder
  ) { 
     for (
        // initialize length
        var c = this.length;
            // initialize counter (allow for negative startIndex)
        var b = (c + ~~b) % c;
        // loop if index is smaller than length,
        // index is set in (possibly sparse) array
        // and item at index is not identical to the searched one
        b < c && (!(b in this || this[b] !== a));
        // increment counter
        b++
     );
     // if counter equals length (not found), return -1, otherwise counter
     return b ^ c ? b : -1;
  });
})();
