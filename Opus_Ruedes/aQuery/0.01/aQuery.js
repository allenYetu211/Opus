(function() {

  var _aQuery = window.aQuery,
    _$ = window.$

  var aQuery = function(selector) {
    return new aQuery.fn.init(selector);
  }

  aQuery.fn = aQuery.prototype = {
    constructor: aQuery,
    get: function(num) {
      if (num != null) {
        return (num < 0 ? this[num + this.length] : this[num])
      } else {
        return [].slice.call(this)
      }
    },
    eq: function(num) {
      var len = this.length,
        j = +num + (num < 0 ? len : 0)
      return this.pushStack(num >= 0 && num < len ? [this[num]] : [])
    },
    first: function () {
      return this.eq( 0 )
    },
    last: function () {
      return this.eq( this.length - 1 )
    },
    pushStack: function(elems) {
      var ret = aQuery.merge(this.constructor(), elems)
      return ret
    },
  }

  var init = aQuery.fn.init = function(selector) {
    if ( !selector ) {
       return
    }
    var ontarge = document.querySelectorAll(selector)

    for (var i = 0; i < ontarge.length; i++) {
      this[i] = ontarge[i];
    }

    this.length = ontarge.length

    return this
  }


  aQuery.extend = aQuery.fn.extend = function() {
    var options, src, copy,
      target = arguments[0] || {},
      i = 1,
      length = arguments.length;
    if (i === length) {
      target = this;
      i--;
    }
    for (; i < length; i++) {
      if ((options = arguments[i]) !== null) {
        for (name in options) {
          copy = options[name]
          target[name] = copy;
        }
      }
    }
    return target;
  }

  aQuery.extend({
    setName: function(myName) {
      this.myName = myName
      return this
    },
    getName: function() {
      return this
    },
    merge: function(first, scoend) {
      var len = +scoend.length,
        j = 0,
        i = first.length

      for (; j < len; j++) {
        first[i++] = scoend[j]
      }

      first.length = i
      return first
    }
  })
  aQuery.fn.init.prototype = aQuery.fn

  window.$ = window.aQuery = aQuery;
})()
