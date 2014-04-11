/**
 * Array indexOf() polyfill for ie < 9. Packaged for Bower by
 * Matthew Toledo.  Original author was Julien Bouquillon.
 * 
 * @see https://gist.github.com/revolunet/1908355
 * @author Julien Bouquillon
 * @return void
 */
(function() {
if (!Array.prototype.indexOf)
  {
    Array.prototype.indexOf = function(elt /*, from*/)
    {
      var len = this.length >>> 0;
      var from = Number(arguments[1]) || 0;
      from = (from < 0)
           ? Math.ceil(from)
           : Math.floor(from);
      if (from < 0)
        from += len;
   
      for (; from < len; from++)
      {
        if (from in this &&
            this[from] === elt)
          return from;
      }
      return -1;
    };
  }
})();