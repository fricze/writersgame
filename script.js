;(function(){
var h;
function p(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
var aa = "closure_uid_" + (1E9 * Math.random() >>> 0), ba = 0;
function ca(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function da(a, b) {
  null != a && this.append.apply(this, arguments);
}
da.prototype.wa = "";
da.prototype.append = function(a, b, c) {
  this.wa += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.wa += arguments[d];
    }
  }
  return this;
};
da.prototype.toString = function() {
  return this.wa;
};
var ea = null;
function fa() {
  return new q(null, 5, [ga, !0, ha, !0, ia, !1, ja, !1, ka, null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function la(a) {
  return r(a) ? !1 : !0;
}
function s(a, b) {
  return a[p(null == b ? null : b)] ? !0 : a._ ? !0 : u ? !1 : null;
}
function ma(a) {
  return null == a ? null : a.constructor;
}
function v(a, b) {
  var c = ma(b), c = r(r(c) ? c.Ja : c) ? c.Ia : p(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function na(a) {
  var b = a.Ia;
  return r(b) ? b : "" + y(a);
}
function z(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
var pa = {}, qa = {};
function ra(a) {
  if (a ? a.K : a) {
    return a.K(a);
  }
  var b;
  b = ra[p(null == a ? null : a)];
  if (!b && (b = ra._, !b)) {
    throw v("ICounted.-count", a);
  }
  return b.call(null, a);
}
var sa = {};
function ta(a, b) {
  if (a ? a.J : a) {
    return a.J(a, b);
  }
  var c;
  c = ta[p(null == a ? null : a)];
  if (!c && (c = ta._, !c)) {
    throw v("ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var ua = {}, A = function() {
  function a(a, b, c) {
    if (a ? a.X : a) {
      return a.X(a, b, c);
    }
    var g;
    g = A[p(null == a ? null : a)];
    if (!g && (g = A._, !g)) {
      throw v("IIndexed.-nth", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.r : a) {
      return a.r(a, b);
    }
    var c;
    c = A[p(null == a ? null : a)];
    if (!c && (c = A._, !c)) {
      throw v("IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), wa = {};
function B(a) {
  if (a ? a.R : a) {
    return a.R(a);
  }
  var b;
  b = B[p(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw v("ISeq.-first", a);
  }
  return b.call(null, a);
}
function C(a) {
  if (a ? a.T : a) {
    return a.T(a);
  }
  var b;
  b = C[p(null == a ? null : a)];
  if (!b && (b = C._, !b)) {
    throw v("ISeq.-rest", a);
  }
  return b.call(null, a);
}
var xa = {}, ya = {}, D = function() {
  function a(a, b, c) {
    if (a ? a.H : a) {
      return a.H(a, b, c);
    }
    var g;
    g = D[p(null == a ? null : a)];
    if (!g && (g = D._, !g)) {
      throw v("ILookup.-lookup", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.G : a) {
      return a.G(a, b);
    }
    var c;
    c = D[p(null == a ? null : a)];
    if (!c && (c = D._, !c)) {
      throw v("ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function za(a, b) {
  if (a ? a.Na : a) {
    return a.Na(a, b);
  }
  var c;
  c = za[p(null == a ? null : a)];
  if (!c && (c = za._, !c)) {
    throw v("IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function Aa(a, b, c) {
  if (a ? a.xa : a) {
    return a.xa(a, b, c);
  }
  var d;
  d = Aa[p(null == a ? null : a)];
  if (!d && (d = Aa._, !d)) {
    throw v("IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var Ba = {}, Ca = {};
function Da(a) {
  if (a ? a.fb : a) {
    return a.fb();
  }
  var b;
  b = Da[p(null == a ? null : a)];
  if (!b && (b = Da._, !b)) {
    throw v("IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function Ea(a) {
  if (a ? a.ob : a) {
    return a.ob();
  }
  var b;
  b = Ea[p(null == a ? null : a)];
  if (!b && (b = Ea._, !b)) {
    throw v("IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var Fa = {}, Ga = {};
function Ha(a, b, c) {
  if (a ? a.gb : a) {
    return a.gb(a, b, c);
  }
  var d;
  d = Ha[p(null == a ? null : a)];
  if (!d && (d = Ha._, !d)) {
    throw v("IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function Ia(a) {
  if (a ? a.Ra : a) {
    return a.Ra(a);
  }
  var b;
  b = Ia[p(null == a ? null : a)];
  if (!b && (b = Ia._, !b)) {
    throw v("IDeref.-deref", a);
  }
  return b.call(null, a);
}
var Ja = {};
function Ka(a) {
  if (a ? a.C : a) {
    return a.C(a);
  }
  var b;
  b = Ka[p(null == a ? null : a)];
  if (!b && (b = Ka._, !b)) {
    throw v("IMeta.-meta", a);
  }
  return b.call(null, a);
}
function La(a, b) {
  if (a ? a.D : a) {
    return a.D(a, b);
  }
  var c;
  c = La[p(null == a ? null : a)];
  if (!c && (c = La._, !c)) {
    throw v("IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var Ma = {}, Oa = function() {
  function a(a, b, c) {
    if (a ? a.Q : a) {
      return a.Q(a, b, c);
    }
    var g;
    g = Oa[p(null == a ? null : a)];
    if (!g && (g = Oa._, !g)) {
      throw v("IReduce.-reduce", a);
    }
    return g.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.P : a) {
      return a.P(a, b);
    }
    var c;
    c = Oa[p(null == a ? null : a)];
    if (!c && (c = Oa._, !c)) {
      throw v("IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(d, c, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, d, c);
      case 3:
        return a.call(this, d, c, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Pa(a, b) {
  if (a ? a.w : a) {
    return a.w(a, b);
  }
  var c;
  c = Pa[p(null == a ? null : a)];
  if (!c && (c = Pa._, !c)) {
    throw v("IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function Qa(a) {
  if (a ? a.A : a) {
    return a.A(a);
  }
  var b;
  b = Qa[p(null == a ? null : a)];
  if (!b && (b = Qa._, !b)) {
    throw v("IHash.-hash", a);
  }
  return b.call(null, a);
}
var Ra = {};
function Sa(a) {
  if (a ? a.I : a) {
    return a.I(a);
  }
  var b;
  b = Sa[p(null == a ? null : a)];
  if (!b && (b = Sa._, !b)) {
    throw v("ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var Ta = {};
function E(a, b) {
  if (a ? a.sb : a) {
    return a.sb(0, b);
  }
  var c;
  c = E[p(null == a ? null : a)];
  if (!c && (c = E._, !c)) {
    throw v("IWriter.-write", a);
  }
  return c.call(null, a, b);
}
var Ua = {};
function Va(a, b, c) {
  if (a ? a.v : a) {
    return a.v(a, b, c);
  }
  var d;
  d = Va[p(null == a ? null : a)];
  if (!d && (d = Va._, !d)) {
    throw v("IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Wa(a, b, c) {
  if (a ? a.rb : a) {
    return a.rb(0, b, c);
  }
  var d;
  d = Wa[p(null == a ? null : a)];
  if (!d && (d = Wa._, !d)) {
    throw v("IWatchable.-notify-watches", a);
  }
  return d.call(null, a, b, c);
}
function Xa(a) {
  if (a ? a.ya : a) {
    return a.ya(a);
  }
  var b;
  b = Xa[p(null == a ? null : a)];
  if (!b && (b = Xa._, !b)) {
    throw v("IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Ya(a, b) {
  if (a ? a.Ba : a) {
    return a.Ba(a, b);
  }
  var c;
  c = Ya[p(null == a ? null : a)];
  if (!c && (c = Ya._, !c)) {
    throw v("ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Za(a) {
  if (a ? a.Ca : a) {
    return a.Ca(a);
  }
  var b;
  b = Za[p(null == a ? null : a)];
  if (!b && (b = Za._, !b)) {
    throw v("ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function $a(a, b, c) {
  if (a ? a.Aa : a) {
    return a.Aa(a, b, c);
  }
  var d;
  d = $a[p(null == a ? null : a)];
  if (!d && (d = $a._, !d)) {
    throw v("ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function ab(a, b, c) {
  if (a ? a.qb : a) {
    return a.qb(0, b, c);
  }
  var d;
  d = ab[p(null == a ? null : a)];
  if (!d && (d = ab._, !d)) {
    throw v("ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function bb(a) {
  if (a ? a.mb : a) {
    return a.mb();
  }
  var b;
  b = bb[p(null == a ? null : a)];
  if (!b && (b = bb._, !b)) {
    throw v("IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function F(a) {
  if (a ? a.Pa : a) {
    return a.Pa(a);
  }
  var b;
  b = F[p(null == a ? null : a)];
  if (!b && (b = F._, !b)) {
    throw v("IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function G(a) {
  if (a ? a.Qa : a) {
    return a.Qa(a);
  }
  var b;
  b = G[p(null == a ? null : a)];
  if (!b && (b = G._, !b)) {
    throw v("IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function cb(a) {
  if (a ? a.Oa : a) {
    return a.Oa(a);
  }
  var b;
  b = cb[p(null == a ? null : a)];
  if (!b && (b = cb._, !b)) {
    throw v("IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function db(a) {
  this.Lb = a;
  this.o = 0;
  this.g = 1073741824;
}
db.prototype.sb = function(a, b) {
  return this.Lb.append(b);
};
function eb(a) {
  var b = new da;
  a.v(null, new db(b), fa());
  return "" + y(b);
}
function fb(a, b) {
  if (r(gb.a ? gb.a(a, b) : gb.call(null, a, b))) {
    return 0;
  }
  var c = la(a.N);
  if (r(c ? b.N : c)) {
    return-1;
  }
  if (r(a.N)) {
    if (la(b.N)) {
      return 1;
    }
    c = hb.a ? hb.a(a.N, b.N) : hb.call(null, a.N, b.N);
    return 0 === c ? hb.a ? hb.a(a.name, b.name) : hb.call(null, a.name, b.name) : c;
  }
  return ib ? hb.a ? hb.a(a.name, b.name) : hb.call(null, a.name, b.name) : null;
}
function H(a, b, c, d, e) {
  this.N = a;
  this.name = b;
  this.oa = c;
  this.pa = d;
  this.da = e;
  this.g = 2154168321;
  this.o = 4096;
}
h = H.prototype;
h.v = function(a, b) {
  return E(b, this.oa);
};
h.A = function() {
  var a = this.pa;
  return null != a ? a : this.pa = a = jb.a ? jb.a(I.c ? I.c(this.N) : I.call(null, this.N), I.c ? I.c(this.name) : I.call(null, this.name)) : jb.call(null, I.c ? I.c(this.N) : I.call(null, this.N), I.c ? I.c(this.name) : I.call(null, this.name));
};
h.D = function(a, b) {
  return new H(this.N, this.name, this.oa, this.pa, b);
};
h.C = function() {
  return this.da;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.b(c, this, null);
      case 3:
        return D.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
h.c = function(a) {
  return D.b(a, this, null);
};
h.a = function(a, b) {
  return D.b(a, this, b);
};
h.w = function(a, b) {
  return b instanceof H ? this.oa === b.oa : !1;
};
h.toString = function() {
  return this.oa;
};
function J(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 8388608 || a.Ub)) {
    return a.I(null);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new kb(a, 0);
  }
  if (s(Ra, a)) {
    return Sa(a);
  }
  if (u) {
    throw Error([y(a), y("is not ISeqable")].join(""));
  }
  return null;
}
function M(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.g & 64 || a.za)) {
    return a.R(null);
  }
  a = J(a);
  return null == a ? null : B(a);
}
function N(a) {
  return null != a ? a && (a.g & 64 || a.za) ? a.T(null) : (a = J(a)) ? C(a) : lb : lb;
}
function O(a) {
  return null == a ? null : a && (a.g & 128 || a.pb) ? a.U(null) : J(N(a));
}
var gb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || Pa(a, b);
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.a(a, d)) {
          if (O(e)) {
            a = d, d = M(e), e = O(e);
          } else {
            return b.a(d, M(e));
          }
        } else {
          return!1;
        }
      }
    }
    a.i = 2;
    a.f = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, P(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.f = c.f;
  b.c = function() {
    return!0;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
qa["null"] = !0;
ra["null"] = function() {
  return 0;
};
Date.prototype.w = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
Pa.number = function(a, b) {
  return a === b;
};
Ja["function"] = !0;
Ka["function"] = function() {
  return null;
};
pa["function"] = !0;
Qa._ = function(a) {
  return a[aa] || (a[aa] = ++ba);
};
var mb = function() {
  function a(a, b, d, c) {
    for (var k = ra(a);;) {
      if (c < k) {
        d = b.a ? b.a(d, A.a(a, c)) : b.call(null, d, A.a(a, c)), c += 1;
      } else {
        return d;
      }
    }
  }
  function b(a, b, d) {
    for (var c = ra(a), k = 0;;) {
      if (k < c) {
        d = b.a ? b.a(d, A.a(a, k)) : b.call(null, d, A.a(a, k)), k += 1;
      } else {
        return d;
      }
    }
  }
  function c(a, b) {
    var d = ra(a);
    if (0 === d) {
      return b.n ? b.n() : b.call(null);
    }
    for (var c = A.a(a, 0), k = 1;;) {
      if (k < d) {
        c = b.a ? b.a(c, A.a(a, k)) : b.call(null, c, A.a(a, k)), k += 1;
      } else {
        return c;
      }
    }
  }
  var d = null, d = function(d, f, g, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}(), nb = function() {
  function a(a, b, d, c) {
    for (var k = a.length;;) {
      if (c < k) {
        d = b.a ? b.a(d, a[c]) : b.call(null, d, a[c]), c += 1;
      } else {
        return d;
      }
    }
  }
  function b(a, b, d) {
    for (var c = a.length, k = 0;;) {
      if (k < c) {
        d = b.a ? b.a(d, a[k]) : b.call(null, d, a[k]), k += 1;
      } else {
        return d;
      }
    }
  }
  function c(a, b) {
    var d = a.length;
    if (0 === a.length) {
      return b.n ? b.n() : b.call(null);
    }
    for (var c = a[0], k = 1;;) {
      if (k < d) {
        c = b.a ? b.a(c, a[k]) : b.call(null, c, a[k]), k += 1;
      } else {
        return c;
      }
    }
  }
  var d = null, d = function(d, f, g, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
function ob(a) {
  return a ? a.g & 2 || a.yb ? !0 : a.g ? !1 : s(qa, a) : s(qa, a);
}
function pb(a) {
  return a ? a.g & 16 || a.nb ? !0 : a.g ? !1 : s(ua, a) : s(ua, a);
}
function kb(a, b) {
  this.d = a;
  this.j = b;
  this.o = 0;
  this.g = 166199550;
}
h = kb.prototype;
h.A = function() {
  return qb.c ? qb.c(this) : qb.call(null, this);
};
h.U = function() {
  return this.j + 1 < this.d.length ? new kb(this.d, this.j + 1) : null;
};
h.J = function(a, b) {
  return Q.a ? Q.a(b, this) : Q.call(null, b, this);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return nb.l(this.d, b, this.d[this.j], this.j + 1);
};
h.Q = function(a, b, c) {
  return nb.l(this.d, b, c, this.j);
};
h.I = function() {
  return this;
};
h.K = function() {
  return this.d.length - this.j;
};
h.R = function() {
  return this.d[this.j];
};
h.T = function() {
  return this.j + 1 < this.d.length ? new kb(this.d, this.j + 1) : lb;
};
h.w = function(a, b) {
  return rb.a ? rb.a(this, b) : rb.call(null, this, b);
};
h.r = function(a, b) {
  var c = b + this.j;
  return c < this.d.length ? this.d[c] : null;
};
h.X = function(a, b, c) {
  a = b + this.j;
  return a < this.d.length ? this.d[a] : c;
};
var sb = function() {
  function a(a, b) {
    return b < a.length ? new kb(a, b) : null;
  }
  function b(a) {
    return c.a(a, 0);
  }
  var c = null, c = function(d, c) {
    switch(arguments.length) {
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), P = function() {
  function a(a, b) {
    return sb.a(a, b);
  }
  function b(a) {
    return sb.a(a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
Pa._ = function(a, b) {
  return a === b;
};
var tb = function() {
  function a(a, b) {
    return null != a ? ta(a, b) : ta(lb, b);
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.a(a, d), d = M(e), e = O(e);
        } else {
          return b.a(a, d);
        }
      }
    }
    a.i = 2;
    a.f = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, P(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.f = c.f;
  b.a = a;
  b.e = c.e;
  return b;
}();
function R(a) {
  if (null != a) {
    if (a && (a.g & 2 || a.yb)) {
      a = a.K(null);
    } else {
      if (a instanceof Array) {
        a = a.length;
      } else {
        if ("string" === typeof a) {
          a = a.length;
        } else {
          if (s(qa, a)) {
            a = ra(a);
          } else {
            if (u) {
              a: {
                a = J(a);
                for (var b = 0;;) {
                  if (ob(a)) {
                    a = b + ra(a);
                    break a;
                  }
                  a = O(a);
                  b += 1;
                }
                a = void 0;
              }
            } else {
              a = null;
            }
          }
        }
      }
    }
  } else {
    a = 0;
  }
  return a;
}
var ub = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return J(a) ? M(a) : c;
      }
      if (pb(a)) {
        return A.b(a, b, c);
      }
      if (J(a)) {
        a = O(a), b -= 1;
      } else {
        return u ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (J(a)) {
          return M(a);
        }
        throw Error("Index out of bounds");
      }
      if (pb(a)) {
        return A.a(a, b);
      }
      if (J(a)) {
        var c = O(a), g = b - 1;
        a = c;
        b = g;
      } else {
        if (u) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), S = function() {
  function a(a, b, c) {
    if (null != a) {
      if (a && (a.g & 16 || a.nb)) {
        return a.X(null, b, c);
      }
      if (a instanceof Array || "string" === typeof a) {
        return b < a.length ? a[b] : c;
      }
      if (s(ua, a)) {
        return A.a(a, b);
      }
      if (u) {
        if (a ? a.g & 64 || a.za || (a.g ? 0 : s(wa, a)) : s(wa, a)) {
          return ub.b(a, b, c);
        }
        throw Error([y("nth not supported on this type "), y(na(ma(a)))].join(""));
      }
      return null;
    }
    return c;
  }
  function b(a, b) {
    if (null == a) {
      return null;
    }
    if (a && (a.g & 16 || a.nb)) {
      return a.r(null, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s(ua, a)) {
      return A.a(a, b);
    }
    if (u) {
      if (a ? a.g & 64 || a.za || (a.g ? 0 : s(wa, a)) : s(wa, a)) {
        return ub.a(a, b);
      }
      throw Error([y("nth not supported on this type "), y(na(ma(a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), vb = function() {
  function a(a, b, c) {
    return null != a ? a && (a.g & 256 || a.zb) ? a.H(null, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s(ya, a) ? D.b(a, b, c) : u ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.g & 256 || a.zb) ? a.G(null, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s(ya, a) ? D.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), xb = function() {
  function a(a, b, c) {
    return null != a ? Aa(a, b, c) : wb.a ? wb.a([b], [c]) : wb.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, l, k) {
      var m = null;
      3 < arguments.length && (m = P(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, l, m);
    }
    function c(a, d, e, k) {
      for (;;) {
        if (a = b.b(a, d, e), r(k)) {
          d = M(k), e = M(O(k)), k = O(O(k));
        } else {
          return a;
        }
      }
    }
    a.i = 3;
    a.f = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var k = M(a);
      a = N(a);
      return c(b, d, k, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f, g) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.e(b, e, f, P(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 3;
  b.f = c.f;
  b.b = a;
  b.e = c.e;
  return b;
}();
function yb(a) {
  var b = "function" == p(a);
  return b ? b : a ? r(r(null) ? null : a.Ob) ? !0 : a.kb ? !1 : s(pa, a) : s(pa, a);
}
function zb(a) {
  var b = null != a;
  return(b ? a ? a.g & 131072 || a.Bb || (a.g ? 0 : s(Ja, a)) : s(Ja, a) : b) ? Ka(a) : null;
}
var Ab = {}, Bb = 0;
function I(a) {
  if (a && (a.g & 4194304 || a.Sb)) {
    a = a.A(null);
  } else {
    if ("number" === typeof a) {
      a = Math.floor(a) % 2147483647;
    } else {
      if (!0 === a) {
        a = 1;
      } else {
        if (!1 === a) {
          a = 0;
        } else {
          if ("string" === typeof a) {
            255 < Bb && (Ab = {}, Bb = 0);
            var b = Ab[a];
            if ("number" !== typeof b) {
              for (var c = b = 0;c < a.length;++c) {
                b = 31 * b + a.charCodeAt(c), b %= 4294967296;
              }
              Ab[a] = b;
              Bb += 1;
            }
            a = b;
          } else {
            a = null == a ? 0 : u ? Qa(a) : null;
          }
        }
      }
    }
  }
  return a;
}
function Cb(a) {
  return a ? a.g & 16777216 || a.Vb ? !0 : a.g ? !1 : s(Ta, a) : s(Ta, a);
}
function Db(a) {
  return null == a ? !1 : a ? a.g & 1024 || a.Tb ? !0 : a.g ? !1 : s(Ba, a) : s(Ba, a);
}
function Eb(a) {
  return a ? a.g & 16384 || a.Xb ? !0 : a.g ? !1 : s(Ga, a) : s(Ga, a);
}
function T(a) {
  return a ? a.o & 512 || a.Pb ? !0 : !1 : !1;
}
function Fb(a) {
  var b = [];
  ca(a, function(a, d) {
    return b.push(d);
  });
  return b;
}
function Gb(a, b, c, d, e) {
  for (;0 !== e;) {
    c[d] = a[b], d += 1, e -= 1, b += 1;
  }
}
var Hb = {};
function Ib(a) {
  return null == a ? !1 : a ? a.g & 64 || a.za ? !0 : a.g ? !1 : s(wa, a) : s(wa, a);
}
function Jb(a) {
  return r(a) ? !0 : !1;
}
function hb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (ma(a) === ma(b)) {
    return a && (a.o & 2048 || a.Ga) ? a.Ha(null, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (u) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Kb = function() {
  function a(a, b, c, g) {
    for (;;) {
      var l = hb(S.a(a, g), S.a(b, g));
      if (0 === l && g + 1 < c) {
        g += 1;
      } else {
        return l;
      }
    }
  }
  function b(a, b) {
    var f = R(a), g = R(b);
    return f < g ? -1 : f > g ? 1 : u ? c.l(a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.l = a;
  return c;
}(), Mb = function() {
  function a(a, b, c) {
    for (c = J(c);;) {
      if (c) {
        b = a.a ? a.a(b, M(c)) : a.call(null, b, M(c)), c = O(c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = J(b);
    return c ? Lb.b ? Lb.b(a, M(c), O(c)) : Lb.call(null, a, M(c), O(c)) : a.n ? a.n() : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), Lb = function() {
  function a(a, b, c) {
    return c && (c.g & 524288 || c.Db) ? c.Q(null, a, b) : c instanceof Array ? nb.b(c, a, b) : "string" === typeof c ? nb.b(c, a, b) : s(Ma, c) ? Oa.b(c, a, b) : u ? Mb.b(a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.g & 524288 || b.Db) ? b.P(null, a) : b instanceof Array ? nb.a(b, a) : "string" === typeof b ? nb.a(b, a) : s(Ma, b) ? Oa.a(b, a) : u ? Mb.a(a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Nb(a) {
  return 0 <= a ? Math.floor.c ? Math.floor.c(a) : Math.floor.call(null, a) : Math.ceil.c ? Math.ceil.c(a) : Math.ceil.call(null, a);
}
function Ob(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Pb(a, b) {
  for (var c = b, d = J(a);;) {
    if (d && 0 < c) {
      c -= 1, d = O(d);
    } else {
      return d;
    }
  }
}
var y = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var l = null;
      1 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, l);
    }
    function c(a, d) {
      for (var e = new da(b.c(a)), k = d;;) {
        if (r(k)) {
          e = e.append(b.c(M(k))), k = O(k);
        } else {
          return e.toString();
        }
      }
    }
    a.i = 1;
    a.f = function(a) {
      var b = M(a);
      a = N(a);
      return c(b, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, P(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 1;
  b.f = c.f;
  b.n = function() {
    return "";
  };
  b.c = a;
  b.e = c.e;
  return b;
}();
function rb(a, b) {
  return Jb(Cb(b) ? function() {
    for (var c = J(a), d = J(b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (gb.a(M(c), M(d))) {
        c = O(c), d = O(d);
      } else {
        return u ? !1 : null;
      }
    }
  }() : null);
}
function jb(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function qb(a) {
  if (J(a)) {
    var b = I(M(a));
    for (a = O(a);;) {
      if (null == a) {
        return b;
      }
      b = jb(b, I(M(a)));
      a = O(a);
    }
  } else {
    return 0;
  }
}
function Qb(a) {
  var b = 0;
  for (a = J(a);;) {
    if (a) {
      var c = M(a), b = (b + (I(Rb.c ? Rb.c(c) : Rb.call(null, c)) ^ I(Sb.c ? Sb.c(c) : Sb.call(null, c)))) % 4503599627370496;
      a = O(a);
    } else {
      return b;
    }
  }
}
function Tb(a, b, c, d, e) {
  this.m = a;
  this.Da = b;
  this.ga = c;
  this.count = d;
  this.k = e;
  this.o = 0;
  this.g = 65937646;
}
h = Tb.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
h.U = function() {
  return 1 === this.count ? null : this.ga;
};
h.J = function(a, b) {
  return new Tb(this.m, b, this, this.count + 1, null);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return Mb.a(b, this);
};
h.Q = function(a, b, c) {
  return Mb.b(b, c, this);
};
h.I = function() {
  return this;
};
h.K = function() {
  return this.count;
};
h.R = function() {
  return this.Da;
};
h.T = function() {
  return 1 === this.count ? lb : this.ga;
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new Tb(b, this.Da, this.ga, this.count, this.k);
};
h.C = function() {
  return this.m;
};
function Ub(a) {
  this.m = a;
  this.o = 0;
  this.g = 65937614;
}
h = Ub.prototype;
h.A = function() {
  return 0;
};
h.U = function() {
  return null;
};
h.J = function(a, b) {
  return new Tb(this.m, b, null, 1, null);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return Mb.a(b, this);
};
h.Q = function(a, b, c) {
  return Mb.b(b, c, this);
};
h.I = function() {
  return null;
};
h.K = function() {
  return 0;
};
h.R = function() {
  return null;
};
h.T = function() {
  return lb;
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new Ub(b);
};
h.C = function() {
  return this.m;
};
var lb = new Ub(null), Vb = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (a instanceof kb && 0 === a.j) {
      b = a.d;
    } else {
      a: {
        for (b = [];;) {
          if (null != a) {
            b.push(a.R(null)), a = a.U(null);
          } else {
            break a;
          }
        }
        b = void 0;
      }
    }
    a = b.length;
    for (var e = lb;;) {
      if (0 < a) {
        var f = a - 1, e = e.J(null, b[a - 1]);
        a = f;
      } else {
        return e;
      }
    }
  }
  a.i = 0;
  a.f = function(a) {
    a = J(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Xb(a, b, c, d) {
  this.m = a;
  this.Da = b;
  this.ga = c;
  this.k = d;
  this.o = 0;
  this.g = 65929452;
}
h = Xb.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
h.U = function() {
  return null == this.ga ? null : J(this.ga);
};
h.J = function(a, b) {
  return new Xb(null, b, this, this.k);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return Mb.a(b, this);
};
h.Q = function(a, b, c) {
  return Mb.b(b, c, this);
};
h.I = function() {
  return this;
};
h.R = function() {
  return this.Da;
};
h.T = function() {
  return null == this.ga ? lb : this.ga;
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new Xb(b, this.Da, this.ga, this.k);
};
h.C = function() {
  return this.m;
};
function Q(a, b) {
  var c = null == b;
  return(c ? c : b && (b.g & 64 || b.za)) ? new Xb(null, a, b, null) : new Xb(null, a, J(b), null);
}
function U(a, b, c, d) {
  this.N = a;
  this.name = b;
  this.la = c;
  this.pa = d;
  this.g = 2153775105;
  this.o = 4096;
}
h = U.prototype;
h.v = function(a, b) {
  return E(b, [y(":"), y(this.la)].join(""));
};
h.A = function() {
  null == this.pa && (this.pa = jb(I(this.N), I(this.name)) + 2654435769);
  return this.pa;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return vb.a(c, this);
      case 3:
        return vb.b(c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
h.c = function(a) {
  return vb.a(a, this);
};
h.a = function(a, b) {
  return vb.b(a, this, b);
};
h.w = function(a, b) {
  return b instanceof U ? this.la === b.la : !1;
};
h.toString = function() {
  return[y(":"), y(this.la)].join("");
};
function Yb(a, b) {
  return a === b ? !0 : a instanceof U && b instanceof U ? a.la === b.la : !1;
}
var Zb = function() {
  function a(a, b) {
    return new U(a, b, [y(r(a) ? [y(a), y("/")].join("") : null), y(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof U) {
      return a;
    }
    if (a instanceof H) {
      var b;
      if (a && (a.o & 4096 || a.Cb)) {
        b = a.N;
      } else {
        throw Error([y("Doesn't support namespace: "), y(a)].join(""));
      }
      return new U(b, V.c ? V.c(a) : V.call(null, a), a.oa, null);
    }
    return "string" === typeof a ? (b = a.split("/"), 2 === b.length ? new U(b[0], b[1], a, null) : new U(null, b[0], a, null)) : null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function W(a, b, c, d) {
  this.m = a;
  this.ua = b;
  this.s = c;
  this.k = d;
  this.o = 0;
  this.g = 32374988;
}
h = W.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
h.U = function() {
  Sa(this);
  return null == this.s ? null : O(this.s);
};
h.J = function(a, b) {
  return Q(b, this);
};
h.toString = function() {
  return eb(this);
};
function $b(a) {
  null != a.ua && (a.s = a.ua.n ? a.ua.n() : a.ua.call(null), a.ua = null);
  return a.s;
}
h.P = function(a, b) {
  return Mb.a(b, this);
};
h.Q = function(a, b, c) {
  return Mb.b(b, c, this);
};
h.I = function() {
  $b(this);
  if (null == this.s) {
    return null;
  }
  for (var a = this.s;;) {
    if (a instanceof W) {
      a = $b(a);
    } else {
      return this.s = a, J(this.s);
    }
  }
};
h.R = function() {
  Sa(this);
  return null == this.s ? null : M(this.s);
};
h.T = function() {
  Sa(this);
  return null != this.s ? N(this.s) : lb;
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new W(b, this.ua, this.s, this.k);
};
h.C = function() {
  return this.m;
};
function ac(a, b) {
  this.O = a;
  this.end = b;
  this.o = 0;
  this.g = 2;
}
ac.prototype.K = function() {
  return this.end;
};
ac.prototype.add = function(a) {
  this.O[this.end] = a;
  return this.end += 1;
};
ac.prototype.aa = function() {
  var a = new bc(this.O, 0, this.end);
  this.O = null;
  return a;
};
function bc(a, b, c) {
  this.d = a;
  this.u = b;
  this.end = c;
  this.o = 0;
  this.g = 524306;
}
h = bc.prototype;
h.P = function(a, b) {
  return nb.l(this.d, b, this.d[this.u], this.u + 1);
};
h.Q = function(a, b, c) {
  return nb.l(this.d, b, c, this.u);
};
h.mb = function() {
  if (this.u === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new bc(this.d, this.u + 1, this.end);
};
h.r = function(a, b) {
  return this.d[this.u + b];
};
h.X = function(a, b, c) {
  return 0 <= b && b < this.end - this.u ? this.d[this.u + b] : c;
};
h.K = function() {
  return this.end - this.u;
};
var cc = function() {
  function a(a, b, c) {
    return new bc(a, b, c);
  }
  function b(a, b) {
    return new bc(a, b, a.length);
  }
  function c(a) {
    return new bc(a, 0, a.length);
  }
  var d = null, d = function(d, f, g) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.c = c;
  d.a = b;
  d.b = a;
  return d;
}();
function dc(a, b, c, d) {
  this.aa = a;
  this.ba = b;
  this.m = c;
  this.k = d;
  this.g = 31850732;
  this.o = 1536;
}
h = dc.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
h.U = function() {
  if (1 < ra(this.aa)) {
    return new dc(bb(this.aa), this.ba, this.m, null);
  }
  var a = Sa(this.ba);
  return null == a ? null : a;
};
h.J = function(a, b) {
  return Q(b, this);
};
h.toString = function() {
  return eb(this);
};
h.I = function() {
  return this;
};
h.R = function() {
  return A.a(this.aa, 0);
};
h.T = function() {
  return 1 < ra(this.aa) ? new dc(bb(this.aa), this.ba, this.m, null) : null == this.ba ? lb : this.ba;
};
h.Oa = function() {
  return null == this.ba ? null : this.ba;
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new dc(this.aa, this.ba, b, this.k);
};
h.C = function() {
  return this.m;
};
h.Pa = function() {
  return this.aa;
};
h.Qa = function() {
  return null == this.ba ? lb : this.ba;
};
function ec(a, b) {
  return 0 === ra(a) ? b : new dc(a, b, null, null);
}
function fc(a) {
  for (var b = [];;) {
    if (J(a)) {
      b.push(M(a)), a = O(a);
    } else {
      return b;
    }
  }
}
function gc(a, b) {
  if (ob(a)) {
    return R(a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && J(c)) {
      c = O(c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var ic = function hc(b) {
  return null == b ? null : null == O(b) ? J(M(b)) : u ? Q(M(b), hc(O(b))) : null;
}, jc = function() {
  function a(a, b) {
    return new W(null, function() {
      var c = J(a);
      return c ? T(c) ? ec(F(c), d.a(G(c), b)) : Q(M(c), d.a(N(c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new W(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new W(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, f) {
      var e = null;
      2 < arguments.length && (e = P(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, e);
    }
    function b(a, c, f) {
      return function t(a, b) {
        return new W(null, function() {
          var c = J(a);
          return c ? T(c) ? ec(F(c), t(G(c), b)) : Q(M(c), t(N(c), b)) : r(b) ? t(M(b), O(b)) : null;
        }, null, null);
      }(d.a(a, c), f);
    }
    a.i = 2;
    a.f = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, l) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, g);
      default:
        return e.e(d, g, P(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = 2;
  d.f = e.f;
  d.n = c;
  d.c = b;
  d.a = a;
  d.e = e.e;
  return d;
}(), kc = function() {
  function a(a, b, c, d) {
    return Q(a, Q(b, Q(c, d)));
  }
  function b(a, b, c) {
    return Q(a, Q(b, c));
  }
  var c = null, d = function() {
    function a(c, d, e, m, n) {
      var t = null;
      4 < arguments.length && (t = P(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, m, t);
    }
    function b(a, c, d, f, e) {
      return Q(a, Q(c, Q(d, Q(f, ic(e)))));
    }
    a.i = 4;
    a.f = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var e = M(a);
      a = O(a);
      var n = M(a);
      a = N(a);
      return b(c, d, e, n, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, l, k) {
    switch(arguments.length) {
      case 1:
        return J(c);
      case 2:
        return Q(c, f);
      case 3:
        return b.call(this, c, f, g);
      case 4:
        return a.call(this, c, f, g, l);
      default:
        return d.e(c, f, g, l, P(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = 4;
  c.f = d.f;
  c.c = function(a) {
    return J(a);
  };
  c.a = function(a, b) {
    return Q(a, b);
  };
  c.b = b;
  c.l = a;
  c.e = d.e;
  return c;
}();
function lc(a, b, c) {
  var d = J(c);
  if (0 === b) {
    return a.n ? a.n() : a.call(null);
  }
  c = B(d);
  var e = C(d);
  if (1 === b) {
    return a.c ? a.c(c) : a.c ? a.c(c) : a.call(null, c);
  }
  var d = B(e), f = C(e);
  if (2 === b) {
    return a.a ? a.a(c, d) : a.a ? a.a(c, d) : a.call(null, c, d);
  }
  var e = B(f), g = C(f);
  if (3 === b) {
    return a.b ? a.b(c, d, e) : a.b ? a.b(c, d, e) : a.call(null, c, d, e);
  }
  var f = B(g), l = C(g);
  if (4 === b) {
    return a.l ? a.l(c, d, e, f) : a.l ? a.l(c, d, e, f) : a.call(null, c, d, e, f);
  }
  g = B(l);
  l = C(l);
  if (5 === b) {
    return a.t ? a.t(c, d, e, f, g) : a.t ? a.t(c, d, e, f, g) : a.call(null, c, d, e, f, g);
  }
  a = B(l);
  var k = C(l);
  if (6 === b) {
    return a.ea ? a.ea(c, d, e, f, g, a) : a.ea ? a.ea(c, d, e, f, g, a) : a.call(null, c, d, e, f, g, a);
  }
  var l = B(k), m = C(k);
  if (7 === b) {
    return a.ra ? a.ra(c, d, e, f, g, a, l) : a.ra ? a.ra(c, d, e, f, g, a, l) : a.call(null, c, d, e, f, g, a, l);
  }
  var k = B(m), n = C(m);
  if (8 === b) {
    return a.cb ? a.cb(c, d, e, f, g, a, l, k) : a.cb ? a.cb(c, d, e, f, g, a, l, k) : a.call(null, c, d, e, f, g, a, l, k);
  }
  var m = B(n), t = C(n);
  if (9 === b) {
    return a.eb ? a.eb(c, d, e, f, g, a, l, k, m) : a.eb ? a.eb(c, d, e, f, g, a, l, k, m) : a.call(null, c, d, e, f, g, a, l, k, m);
  }
  var n = B(t), w = C(t);
  if (10 === b) {
    return a.Sa ? a.Sa(c, d, e, f, g, a, l, k, m, n) : a.Sa ? a.Sa(c, d, e, f, g, a, l, k, m, n) : a.call(null, c, d, e, f, g, a, l, k, m, n);
  }
  var t = B(w), x = C(w);
  if (11 === b) {
    return a.Ta ? a.Ta(c, d, e, f, g, a, l, k, m, n, t) : a.Ta ? a.Ta(c, d, e, f, g, a, l, k, m, n, t) : a.call(null, c, d, e, f, g, a, l, k, m, n, t);
  }
  var w = B(x), K = C(x);
  if (12 === b) {
    return a.Ua ? a.Ua(c, d, e, f, g, a, l, k, m, n, t, w) : a.Ua ? a.Ua(c, d, e, f, g, a, l, k, m, n, t, w) : a.call(null, c, d, e, f, g, a, l, k, m, n, t, w);
  }
  var x = B(K), L = C(K);
  if (13 === b) {
    return a.Va ? a.Va(c, d, e, f, g, a, l, k, m, n, t, w, x) : a.Va ? a.Va(c, d, e, f, g, a, l, k, m, n, t, w, x) : a.call(null, c, d, e, f, g, a, l, k, m, n, t, w, x);
  }
  var K = B(L), X = C(L);
  if (14 === b) {
    return a.Wa ? a.Wa(c, d, e, f, g, a, l, k, m, n, t, w, x, K) : a.Wa ? a.Wa(c, d, e, f, g, a, l, k, m, n, t, w, x, K) : a.call(null, c, d, e, f, g, a, l, k, m, n, t, w, x, K);
  }
  var L = B(X), oa = C(X);
  if (15 === b) {
    return a.Xa ? a.Xa(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L) : a.Xa ? a.Xa(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L) : a.call(null, c, d, e, f, g, a, l, k, m, n, t, w, x, K, L);
  }
  var X = B(oa), va = C(oa);
  if (16 === b) {
    return a.Ya ? a.Ya(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X) : a.Ya ? a.Ya(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X) : a.call(null, c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X);
  }
  var oa = B(va), Na = C(va);
  if (17 === b) {
    return a.Za ? a.Za(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa) : a.Za ? a.Za(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa) : a.call(null, c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa);
  }
  var va = B(Na), Wb = C(Na);
  if (18 === b) {
    return a.$a ? a.$a(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa, va) : a.$a ? a.$a(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa, va) : a.call(null, c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa, va);
  }
  Na = B(Wb);
  Wb = C(Wb);
  if (19 === b) {
    return a.ab ? a.ab(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa, va, Na) : a.ab ? a.ab(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa, va, Na) : a.call(null, c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa, va, Na);
  }
  var bd = B(Wb);
  C(Wb);
  if (20 === b) {
    return a.bb ? a.bb(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa, va, Na, bd) : a.bb ? a.bb(c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa, va, Na, bd) : a.call(null, c, d, e, f, g, a, l, k, m, n, t, w, x, K, L, X, oa, va, Na, bd);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var mc = function() {
  function a(a, b, c, d, f) {
    b = kc.l(b, c, d, f);
    c = a.i;
    return a.f ? (d = gc(b, c + 1), d <= c ? lc(a, d, b) : a.f(b)) : a.apply(a, fc(b));
  }
  function b(a, b, c, d) {
    b = kc.b(b, c, d);
    c = a.i;
    return a.f ? (d = gc(b, c + 1), d <= c ? lc(a, d, b) : a.f(b)) : a.apply(a, fc(b));
  }
  function c(a, b, c) {
    b = kc.a(b, c);
    c = a.i;
    if (a.f) {
      var d = gc(b, c + 1);
      return d <= c ? lc(a, d, b) : a.f(b);
    }
    return a.apply(a, fc(b));
  }
  function d(a, b) {
    var c = a.i;
    if (a.f) {
      var d = gc(b, c + 1);
      return d <= c ? lc(a, d, b) : a.f(b);
    }
    return a.apply(a, fc(b));
  }
  var e = null, f = function() {
    function a(c, d, f, e, g, x) {
      var K = null;
      5 < arguments.length && (K = P(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, f, e, g, K);
    }
    function b(a, c, d, f, e, g) {
      c = Q(c, Q(d, Q(f, Q(e, ic(g)))));
      d = a.i;
      return a.f ? (f = gc(c, d + 1), f <= d ? lc(a, f, c) : a.f(c)) : a.apply(a, fc(c));
    }
    a.i = 5;
    a.f = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var f = M(a);
      a = O(a);
      var e = M(a);
      a = O(a);
      var g = M(a);
      a = N(a);
      return b(c, d, f, e, g, a);
    };
    a.e = b;
    return a;
  }(), e = function(e, l, k, m, n, t) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, l);
      case 3:
        return c.call(this, e, l, k);
      case 4:
        return b.call(this, e, l, k, m);
      case 5:
        return a.call(this, e, l, k, m, n);
      default:
        return f.e(e, l, k, m, n, P(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.i = 5;
  e.f = f.f;
  e.a = d;
  e.b = c;
  e.l = b;
  e.t = a;
  e.e = f.e;
  return e;
}(), nc = function() {
  function a(a, b) {
    return!gb.a(a, b);
  }
  var b = null, c = function() {
    function a(c, d, l) {
      var k = null;
      2 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, k);
    }
    function b(a, c, d) {
      return la(mc.l(gb, a, c, d));
    }
    a.i = 2;
    a.f = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return b(c, d, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!1;
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, P(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.f = c.f;
  b.c = function() {
    return!1;
  };
  b.a = a;
  b.e = c.e;
  return b;
}();
function oc(a, b) {
  for (;;) {
    if (null == J(b)) {
      return!0;
    }
    if (r(a.c ? a.c(M(b)) : a.call(null, M(b)))) {
      var c = a, d = O(b);
      a = c;
      b = d;
    } else {
      return u ? !1 : null;
    }
  }
}
function pc(a) {
  if ("number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10)) {
    return 0 === (a & 1);
  }
  throw Error([y("Argument must be an integer: "), y(a)].join(""));
}
function qc(a) {
  return a;
}
var rc = function() {
  function a(a, b, c, d) {
    return function() {
      function e(a) {
        var b = null;
        0 < arguments.length && (b = P(Array.prototype.slice.call(arguments, 0), 0));
        return n.call(this, b);
      }
      function n(e) {
        return mc.t(a, b, c, d, e);
      }
      e.i = 0;
      e.f = function(a) {
        a = J(a);
        return n(a);
      };
      e.e = n;
      return e;
    }();
  }
  function b(a, b, c) {
    return function() {
      function d(a) {
        var b = null;
        0 < arguments.length && (b = P(Array.prototype.slice.call(arguments, 0), 0));
        return e.call(this, b);
      }
      function e(d) {
        return mc.l(a, b, c, d);
      }
      d.i = 0;
      d.f = function(a) {
        a = J(a);
        return e(a);
      };
      d.e = e;
      return d;
    }();
  }
  function c(a, b) {
    return function() {
      function c(a) {
        var b = null;
        0 < arguments.length && (b = P(Array.prototype.slice.call(arguments, 0), 0));
        return d.call(this, b);
      }
      function d(c) {
        return mc.b(a, b, c);
      }
      c.i = 0;
      c.f = function(a) {
        a = J(a);
        return d(a);
      };
      c.e = d;
      return c;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var w = null;
      4 < arguments.length && (w = P(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, d, e, f) {
      return function() {
        function b(a) {
          var c = null;
          0 < arguments.length && (c = P(Array.prototype.slice.call(arguments, 0), 0));
          return g.call(this, c);
        }
        function g(b) {
          return mc.t(a, c, d, e, jc.a(f, b));
        }
        b.i = 0;
        b.f = function(a) {
          a = J(a);
          return g(a);
        };
        b.e = g;
        return b;
      }();
    }
    a.i = 4;
    a.f = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var e = M(a);
      a = O(a);
      var f = M(a);
      a = N(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, l, k, m) {
    switch(arguments.length) {
      case 1:
        return d;
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, l);
      case 4:
        return a.call(this, d, g, l, k);
      default:
        return e.e(d, g, l, k, P(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = 4;
  d.f = e.f;
  d.c = function(a) {
    return a;
  };
  d.a = c;
  d.b = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), sc = function() {
  function a(a, b, c, e) {
    return new W(null, function() {
      var m = J(b), n = J(c), t = J(e);
      return m && n && t ? Q(a.b ? a.b(M(m), M(n), M(t)) : a.call(null, M(m), M(n), M(t)), d.l(a, N(m), N(n), N(t))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new W(null, function() {
      var e = J(b), m = J(c);
      return e && m ? Q(a.a ? a.a(M(e), M(m)) : a.call(null, M(e), M(m)), d.b(a, N(e), N(m))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new W(null, function() {
      var c = J(b);
      if (c) {
        if (T(c)) {
          for (var e = F(c), m = R(e), n = new ac(Array(m), 0), t = 0;;) {
            if (t < m) {
              var w = a.c ? a.c(A.a(e, t)) : a.call(null, A.a(e, t));
              n.add(w);
              t += 1;
            } else {
              break;
            }
          }
          return ec(n.aa(), d.a(a, G(c)));
        }
        return Q(a.c ? a.c(M(c)) : a.call(null, M(c)), d.a(a, N(c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, t) {
      var w = null;
      4 < arguments.length && (w = P(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, w);
    }
    function b(a, c, e, f, g) {
      return d.a(function(b) {
        return mc.a(a, b);
      }, function x(a) {
        return new W(null, function() {
          var b = d.a(J, a);
          return oc(qc, b) ? Q(d.a(M, b), x(d.a(N, b))) : null;
        }, null, null);
      }(tb.e(g, f, P([e, c], 0))));
    }
    a.i = 4;
    a.f = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var e = M(a);
      a = O(a);
      var f = M(a);
      a = N(a);
      return b(c, d, e, f, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, l, k, m) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, g);
      case 3:
        return b.call(this, d, g, l);
      case 4:
        return a.call(this, d, g, l, k);
      default:
        return e.e(d, g, l, k, P(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = 4;
  d.f = e.f;
  d.a = c;
  d.b = b;
  d.l = a;
  d.e = e.e;
  return d;
}(), uc = function tc(b, c) {
  return new W(null, function() {
    if (0 < b) {
      var d = J(c);
      return d ? Q(M(d), tc(b - 1, N(d))) : null;
    }
    return null;
  }, null, null);
};
function vc(a, b) {
  return new W(null, function() {
    var c;
    a: {
      c = a;
      for (var d = b;;) {
        if (d = J(d), 0 < c && d) {
          c -= 1, d = N(d);
        } else {
          c = d;
          break a;
        }
      }
      c = void 0;
    }
    return c;
  }, null, null);
}
var wc = function() {
  function a(a, b) {
    return uc(a, c.c(b));
  }
  function b(a) {
    return new W(null, function() {
      return Q(a, c.c(a));
    }, null, null);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), yc = function xc(b, c) {
  return Q(c, new W(null, function() {
    return xc(b, b.c ? b.c(c) : b.call(null, c));
  }, null, null));
}, zc = function() {
  function a(a, c) {
    return new W(null, function() {
      var f = J(a), g = J(c);
      return f && g ? Q(M(f), Q(M(g), b.a(N(f), N(g)))) : null;
    }, null, null);
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      return new W(null, function() {
        var c = sc.a(J, tb.e(e, d, P([a], 0)));
        return oc(qc, c) ? jc.a(sc.a(M, c), mc.a(b, sc.a(N, c))) : null;
      }, null, null);
    }
    a.i = 2;
    a.f = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, P(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.f = c.f;
  b.a = a;
  b.e = c.e;
  return b;
}(), Bc = function Ac(b, c) {
  return new W(null, function() {
    var d = J(c);
    if (d) {
      if (T(d)) {
        for (var e = F(d), f = R(e), g = new ac(Array(f), 0), l = 0;;) {
          if (l < f) {
            if (r(b.c ? b.c(A.a(e, l)) : b.call(null, A.a(e, l)))) {
              var k = A.a(e, l);
              g.add(k);
            }
            l += 1;
          } else {
            break;
          }
        }
        return ec(g.aa(), Ac(b, G(d)));
      }
      e = M(d);
      d = N(d);
      return r(b.c ? b.c(e) : b.call(null, e)) ? Q(e, Ac(b, d)) : Ac(b, d);
    }
    return null;
  }, null, null);
};
function Cc(a, b) {
  var c;
  null != a ? a && (a.o & 4 || a.Rb) ? (c = Lb.b(Ya, Xa(a), b), c = Za(c)) : c = Lb.b(ta, a, b) : c = Lb.b(tb, lb, b);
  return c;
}
var Dc = function() {
  function a(a, b, c, l) {
    return new W(null, function() {
      var k = J(l);
      if (k) {
        var m = uc(a, k);
        return a === R(m) ? Q(m, d.l(a, b, c, vc(b, k))) : ta(lb, uc(a, jc.a(m, c)));
      }
      return null;
    }, null, null);
  }
  function b(a, b, c) {
    return new W(null, function() {
      var l = J(c);
      if (l) {
        var k = uc(a, l);
        return a === R(k) ? Q(k, d.b(a, b, vc(b, l))) : null;
      }
      return null;
    }, null, null);
  }
  function c(a, b) {
    return d.b(a, a, b);
  }
  var d = null, d = function(d, f, g, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}(), Fc = function Ec(b, c, d) {
  var e = S.b(c, 0, null);
  return(c = Pb(c, 1)) ? xb.b(b, e, Ec(vb.a(b, e), c, d)) : xb.b(b, e, d);
};
function Gc(a, b) {
  this.p = a;
  this.d = b;
}
function Hc(a) {
  return new Gc(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Ic(a) {
  a = a.h;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Jc(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Hc(a);
    d.d[0] = c;
    c = d;
    b -= 5;
  }
}
var Lc = function Kc(b, c, d, e) {
  var f = new Gc(d.p, z(d.d)), g = b.h - 1 >>> c & 31;
  5 === c ? f.d[g] = e : (d = d.d[g], b = null != d ? Kc(b, c - 5, d, e) : Jc(null, c - 5, e), f.d[g] = b);
  return f;
};
function Mc(a, b) {
  throw Error([y("No item "), y(a), y(" in vector of length "), y(b)].join(""));
}
function Nc(a, b) {
  if (0 <= b && b < a.h) {
    if (b >= Ic(a)) {
      return a.q;
    }
    for (var c = a.root, d = a.shift;;) {
      if (0 < d) {
        var e = d - 5, c = c.d[b >>> d & 31], d = e
      } else {
        return c.d;
      }
    }
  } else {
    return Mc(b, a.h);
  }
}
var Pc = function Oc(b, c, d, e, f) {
  var g = new Gc(d.p, z(d.d));
  if (0 === c) {
    g.d[e & 31] = f;
  } else {
    var l = e >>> c & 31;
    b = Oc(b, c - 5, d.d[l], e, f);
    g.d[l] = b;
  }
  return g;
};
function Y(a, b, c, d, e, f) {
  this.m = a;
  this.h = b;
  this.shift = c;
  this.root = d;
  this.q = e;
  this.k = f;
  this.o = 4;
  this.g = 167668511;
}
h = Y.prototype;
h.ya = function() {
  return new Qc(this.h, this.shift, Rc.c ? Rc.c(this.root) : Rc.call(null, this.root), Sc.c ? Sc.c(this.q) : Sc.call(null, this.q));
};
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
h.G = function(a, b) {
  return A.b(this, b, null);
};
h.H = function(a, b, c) {
  return A.b(this, b, c);
};
h.xa = function(a, b, c) {
  if (0 <= b && b < this.h) {
    return Ic(this) <= b ? (a = z(this.q), a[b & 31] = c, new Y(this.m, this.h, this.shift, this.root, a, null)) : new Y(this.m, this.h, this.shift, Pc(this, this.shift, this.root, b, c), this.q, null);
  }
  if (b === this.h) {
    return ta(this, c);
  }
  if (u) {
    throw Error([y("Index "), y(b), y(" out of bounds  [0,"), y(this.h), y("]")].join(""));
  }
  return null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.r(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
h.c = function(a) {
  return this.r(null, a);
};
h.a = function(a, b) {
  return this.X(null, a, b);
};
h.J = function(a, b) {
  if (32 > this.h - Ic(this)) {
    for (var c = this.q.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.q[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Y(this.m, this.h + 1, this.shift, this.root, d, null);
  }
  c = (d = this.h >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Hc(null), d.d[0] = this.root, e = Jc(null, this.shift, new Gc(null, this.q)), d.d[1] = e) : d = Lc(this, this.shift, this.root, new Gc(null, this.q));
  return new Y(this.m, this.h + 1, c, d, [b], null);
};
h.fb = function() {
  return A.a(this, 0);
};
h.ob = function() {
  return A.a(this, 1);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return mb.a(this, b);
};
h.Q = function(a, b, c) {
  return mb.b(this, b, c);
};
h.I = function() {
  return 0 === this.h ? null : 32 > this.h ? P.c(this.q) : u ? Tc.b ? Tc.b(this, 0, 0) : Tc.call(null, this, 0, 0) : null;
};
h.K = function() {
  return this.h;
};
h.gb = function(a, b, c) {
  return Aa(this, b, c);
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new Y(b, this.h, this.shift, this.root, this.q, this.k);
};
h.C = function() {
  return this.m;
};
h.r = function(a, b) {
  return Nc(this, b)[b & 31];
};
h.X = function(a, b, c) {
  return 0 <= b && b < this.h ? A.a(this, b) : c;
};
var Z = new Gc(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), Uc = new Y(null, 0, 5, Z, [], 0);
function Vc(a, b, c, d, e, f) {
  this.F = a;
  this.W = b;
  this.j = c;
  this.u = d;
  this.m = e;
  this.k = f;
  this.g = 32243948;
  this.o = 1536;
}
h = Vc.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
h.U = function() {
  if (this.u + 1 < this.W.length) {
    var a = Tc.l ? Tc.l(this.F, this.W, this.j, this.u + 1) : Tc.call(null, this.F, this.W, this.j, this.u + 1);
    return null == a ? null : a;
  }
  return cb(this);
};
h.J = function(a, b) {
  return Q(b, this);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return mb.a(Wc.b ? Wc.b(this.F, this.j + this.u, R(this.F)) : Wc.call(null, this.F, this.j + this.u, R(this.F)), b);
};
h.Q = function(a, b, c) {
  return mb.b(Wc.b ? Wc.b(this.F, this.j + this.u, R(this.F)) : Wc.call(null, this.F, this.j + this.u, R(this.F)), b, c);
};
h.I = function() {
  return this;
};
h.R = function() {
  return this.W[this.u];
};
h.T = function() {
  if (this.u + 1 < this.W.length) {
    var a = Tc.l ? Tc.l(this.F, this.W, this.j, this.u + 1) : Tc.call(null, this.F, this.W, this.j, this.u + 1);
    return null == a ? lb : a;
  }
  return G(this);
};
h.Oa = function() {
  var a = this.W.length, a = this.j + a < ra(this.F) ? Tc.b ? Tc.b(this.F, this.j + a, 0) : Tc.call(null, this.F, this.j + a, 0) : null;
  return null == a ? null : a;
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return Tc.t ? Tc.t(this.F, this.W, this.j, this.u, b) : Tc.call(null, this.F, this.W, this.j, this.u, b);
};
h.Pa = function() {
  return cc.a(this.W, this.u);
};
h.Qa = function() {
  var a = this.W.length, a = this.j + a < ra(this.F) ? Tc.b ? Tc.b(this.F, this.j + a, 0) : Tc.call(null, this.F, this.j + a, 0) : null;
  return null == a ? lb : a;
};
var Tc = function() {
  function a(a, b, c, d, k) {
    return new Vc(a, b, c, d, k, null);
  }
  function b(a, b, c, d) {
    return new Vc(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new Vc(a, Nc(a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, g, l, k) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, g);
      case 4:
        return b.call(this, d, f, g, l);
      case 5:
        return a.call(this, d, f, g, l, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.b = c;
  d.l = b;
  d.t = a;
  return d;
}();
function Xc(a, b, c, d, e) {
  this.m = a;
  this.ca = b;
  this.start = c;
  this.end = d;
  this.k = e;
  this.o = 0;
  this.g = 32400159;
}
h = Xc.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
h.G = function(a, b) {
  return A.b(this, b, null);
};
h.H = function(a, b, c) {
  return A.b(this, b, c);
};
h.xa = function(a, b, c) {
  var d = this, e = d.start + b;
  return Yc.t ? Yc.t(d.m, xb.b(d.ca, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null) : Yc.call(null, d.m, xb.b(d.ca, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.r(null, c);
      case 3:
        return this.X(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
h.c = function(a) {
  return this.r(null, a);
};
h.a = function(a, b) {
  return this.X(null, a, b);
};
h.J = function(a, b) {
  return Yc.t ? Yc.t(this.m, Ha(this.ca, this.end, b), this.start, this.end + 1, null) : Yc.call(null, this.m, Ha(this.ca, this.end, b), this.start, this.end + 1, null);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return mb.a(this, b);
};
h.Q = function(a, b, c) {
  return mb.b(this, b, c);
};
h.I = function() {
  var a = this;
  return function c(d) {
    return d === a.end ? null : Q(A.a(a.ca, d), new W(null, function() {
      return c(d + 1);
    }, null, null));
  }(a.start);
};
h.K = function() {
  return this.end - this.start;
};
h.gb = function(a, b, c) {
  return Aa(this, b, c);
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return Yc.t ? Yc.t(b, this.ca, this.start, this.end, this.k) : Yc.call(null, b, this.ca, this.start, this.end, this.k);
};
h.C = function() {
  return this.m;
};
h.r = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Mc(b, this.end - this.start) : A.a(this.ca, this.start + b);
};
h.X = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : A.b(this.ca, this.start + b, c);
};
function Yc(a, b, c, d, e) {
  for (;;) {
    if (b instanceof Xc) {
      c = b.start + c, d = b.start + d, b = b.ca;
    } else {
      var f = R(b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new Xc(a, b, c, d, e);
    }
  }
}
var Wc = function() {
  function a(a, b, c) {
    return Yc(null, a, b, c, null);
  }
  function b(a, b) {
    return c.b(a, b, R(a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}();
function Rc(a) {
  return new Gc({}, z(a.d));
}
function Sc(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Gb(a, 0, b, 0, a.length);
  return b;
}
var $c = function Zc(b, c, d, e) {
  d = b.root.p === d.p ? d : new Gc(b.root.p, z(d.d));
  var f = b.h - 1 >>> c & 31;
  if (5 === c) {
    b = e;
  } else {
    var g = d.d[f];
    b = null != g ? Zc(b, c - 5, g, e) : Jc(b.root.p, c - 5, e);
  }
  d.d[f] = b;
  return d;
};
function Qc(a, b, c, d) {
  this.h = a;
  this.shift = b;
  this.root = c;
  this.q = d;
  this.g = 275;
  this.o = 88;
}
h = Qc.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
h.c = function(a) {
  return this.G(null, a);
};
h.a = function(a, b) {
  return this.H(null, a, b);
};
h.G = function(a, b) {
  return A.b(this, b, null);
};
h.H = function(a, b, c) {
  return A.b(this, b, c);
};
h.r = function(a, b) {
  if (this.root.p) {
    return Nc(this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
h.X = function(a, b, c) {
  return 0 <= b && b < this.h ? A.a(this, b) : c;
};
h.K = function() {
  if (this.root.p) {
    return this.h;
  }
  throw Error("count after persistent!");
};
h.qb = function(a, b, c) {
  var d = this;
  if (d.root.p) {
    if (0 <= b && b < d.h) {
      return Ic(this) <= b ? d.q[b & 31] = c : (a = function f(a, l) {
        var k = d.root.p === l.p ? l : new Gc(d.root.p, z(l.d));
        if (0 === a) {
          k.d[b & 31] = c;
        } else {
          var m = b >>> a & 31, n = f(a - 5, k.d[m]);
          k.d[m] = n;
        }
        return k;
      }.call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.h) {
      return Ya(this, c);
    }
    if (u) {
      throw Error([y("Index "), y(b), y(" out of bounds for TransientVector of length"), y(d.h)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
h.Aa = function(a, b, c) {
  return ab(this, b, c);
};
h.Ba = function(a, b) {
  if (this.root.p) {
    if (32 > this.h - Ic(this)) {
      this.q[this.h & 31] = b;
    } else {
      var c = new Gc(this.root.p, this.q), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.q = d;
      if (this.h >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Jc(this.root.p, this.shift, c);
        this.root = new Gc(this.root.p, d);
        this.shift = e;
      } else {
        this.root = $c(this, this.shift, this.root, c);
      }
    }
    this.h += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
h.Ca = function() {
  if (this.root.p) {
    this.root.p = null;
    var a = this.h - Ic(this), b = Array(a);
    Gb(this.q, 0, b, 0, a);
    return new Y(null, this.h, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function ad() {
  this.o = 0;
  this.g = 2097152;
}
ad.prototype.w = function() {
  return!1;
};
var cd = new ad;
function dd(a, b) {
  return Jb(Db(b) ? R(a) === R(b) ? oc(qc, sc.a(function(a) {
    return gb.a(vb.b(b, M(a), cd), M(O(a)));
  }, a)) : null : null);
}
function ed(a, b) {
  var c = a.d;
  if (b instanceof U) {
    a: {
      for (var d = c.length, e = b.la, f = 0;;) {
        if (d <= f) {
          c = -1;
          break a;
        }
        var g = c[f];
        if (g instanceof U && e === g.la) {
          c = f;
          break a;
        }
        if (u) {
          f += 2;
        } else {
          c = null;
          break a;
        }
      }
      c = void 0;
    }
  } else {
    if ("string" == typeof b || "number" === typeof b) {
      a: {
        d = c.length;
        for (e = 0;;) {
          if (d <= e) {
            c = -1;
            break a;
          }
          if (b === c[e]) {
            c = e;
            break a;
          }
          if (u) {
            e += 2;
          } else {
            c = null;
            break a;
          }
        }
        c = void 0;
      }
    } else {
      if (b instanceof H) {
        a: {
          d = c.length;
          e = b.oa;
          for (f = 0;;) {
            if (d <= f) {
              c = -1;
              break a;
            }
            g = c[f];
            if (g instanceof H && e === g.oa) {
              c = f;
              break a;
            }
            if (u) {
              f += 2;
            } else {
              c = null;
              break a;
            }
          }
          c = void 0;
        }
      } else {
        if (null == b) {
          a: {
            d = c.length;
            for (e = 0;;) {
              if (d <= e) {
                c = -1;
                break a;
              }
              if (null == c[e]) {
                c = e;
                break a;
              }
              if (u) {
                e += 2;
              } else {
                c = null;
                break a;
              }
            }
            c = void 0;
          }
        } else {
          if (u) {
            a: {
              d = c.length;
              for (e = 0;;) {
                if (d <= e) {
                  c = -1;
                  break a;
                }
                if (gb.a(b, c[e])) {
                  c = e;
                  break a;
                }
                if (u) {
                  e += 2;
                } else {
                  c = null;
                  break a;
                }
              }
              c = void 0;
            }
          } else {
            c = null;
          }
        }
      }
    }
  }
  return c;
}
function fd(a, b, c) {
  this.d = a;
  this.j = b;
  this.da = c;
  this.o = 0;
  this.g = 32374990;
}
h = fd.prototype;
h.A = function() {
  return qb(this);
};
h.U = function() {
  return this.j < this.d.length - 2 ? new fd(this.d, this.j + 2, this.da) : null;
};
h.J = function(a, b) {
  return Q(b, this);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return Mb.a(b, this);
};
h.Q = function(a, b, c) {
  return Mb.b(b, c, this);
};
h.I = function() {
  return this;
};
h.K = function() {
  return(this.d.length - this.j) / 2;
};
h.R = function() {
  return new Y(null, 2, 5, Z, [this.d[this.j], this.d[this.j + 1]], null);
};
h.T = function() {
  return this.j < this.d.length - 2 ? new fd(this.d, this.j + 2, this.da) : lb;
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new fd(this.d, this.j, b);
};
h.C = function() {
  return this.da;
};
function q(a, b, c, d) {
  this.m = a;
  this.h = b;
  this.d = c;
  this.k = d;
  this.o = 4;
  this.g = 16123663;
}
h = q.prototype;
h.ya = function() {
  return new gd({}, this.d.length, z(this.d));
};
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
h.G = function(a, b) {
  return D.b(this, b, null);
};
h.H = function(a, b, c) {
  a = ed(this, b);
  return-1 === a ? c : this.d[a + 1];
};
h.xa = function(a, b, c) {
  a = ed(this, b);
  if (-1 === a) {
    if (this.h < hd) {
      a = this.d;
      for (var d = a.length, e = Array(d + 2), f = 0;;) {
        if (f < d) {
          e[f] = a[f], f += 1;
        } else {
          break;
        }
      }
      e[d] = b;
      e[d + 1] = c;
      return new q(this.m, this.h + 1, e, null);
    }
    return La(Aa(Cc(id, this), b, c), this.m);
  }
  return c === this.d[a + 1] ? this : u ? (b = z(this.d), b[a + 1] = c, new q(this.m, this.h, b, null)) : null;
};
h.Na = function(a, b) {
  return-1 !== ed(this, b);
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
h.c = function(a) {
  return this.G(null, a);
};
h.a = function(a, b) {
  return this.H(null, a, b);
};
h.J = function(a, b) {
  return Eb(b) ? Aa(this, A.a(b, 0), A.a(b, 1)) : Lb.b(ta, this, b);
};
h.toString = function() {
  return eb(this);
};
h.I = function() {
  return 0 <= this.d.length - 2 ? new fd(this.d, 0, null) : null;
};
h.K = function() {
  return this.h;
};
h.w = function(a, b) {
  return dd(this, b);
};
h.D = function(a, b) {
  return new q(b, this.h, this.d, this.k);
};
h.C = function() {
  return this.m;
};
var jd = new q(null, 0, [], null), hd = 8;
function kd(a) {
  for (var b = a.length, c = 0, d = Xa(jd);;) {
    if (c < b) {
      var e = c + 2, d = $a(d, a[c], a[c + 1]), c = e
    } else {
      return Za(d);
    }
  }
}
function gd(a, b, c) {
  this.sa = a;
  this.fa = b;
  this.d = c;
  this.o = 56;
  this.g = 258;
}
h = gd.prototype;
h.Aa = function(a, b, c) {
  if (r(this.sa)) {
    a = ed(this, b);
    if (-1 === a) {
      if (this.fa + 2 <= 2 * hd) {
        return this.fa += 2, this.d.push(b), this.d.push(c), this;
      }
      a = ld.a ? ld.a(this.fa, this.d) : ld.call(null, this.fa, this.d);
      return $a(a, b, c);
    }
    c !== this.d[a + 1] && (this.d[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
h.Ba = function(a, b) {
  if (r(this.sa)) {
    if (b ? b.g & 2048 || b.Ab || (b.g ? 0 : s(Ca, b)) : s(Ca, b)) {
      return $a(this, Rb.c ? Rb.c(b) : Rb.call(null, b), Sb.c ? Sb.c(b) : Sb.call(null, b));
    }
    for (var c = J(b), d = this;;) {
      var e = M(c);
      if (r(e)) {
        c = O(c), d = $a(d, Rb.c ? Rb.c(e) : Rb.call(null, e), Sb.c ? Sb.c(e) : Sb.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
h.Ca = function() {
  if (r(this.sa)) {
    return this.sa = !1, new q(null, Nb((this.fa - this.fa % 2) / 2), this.d, null);
  }
  throw Error("persistent! called twice");
};
h.G = function(a, b) {
  return D.b(this, b, null);
};
h.H = function(a, b, c) {
  if (r(this.sa)) {
    return a = ed(this, b), -1 === a ? c : this.d[a + 1];
  }
  throw Error("lookup after persistent!");
};
h.K = function() {
  if (r(this.sa)) {
    return Nb((this.fa - this.fa % 2) / 2);
  }
  throw Error("count after persistent!");
};
function ld(a, b) {
  for (var c = Xa(id), d = 0;;) {
    if (d < a) {
      c = $a(c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function md() {
  this.M = !1;
}
function nd(a, b) {
  return a === b ? !0 : Yb(a, b) ? !0 : u ? gb.a(a, b) : null;
}
var od = function() {
  function a(a, b, c, g, l) {
    a = z(a);
    a[b] = c;
    a[g] = l;
    return a;
  }
  function b(a, b, c) {
    a = z(a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, g, l) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, g, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.b = b;
  c.t = a;
  return c;
}(), pd = function() {
  function a(a, b, c, g, l, k) {
    a = a.ta(b);
    a.d[c] = g;
    a.d[l] = k;
    return a;
  }
  function b(a, b, c, g) {
    a = a.ta(b);
    a.d[c] = g;
    return a;
  }
  var c = null, c = function(c, e, f, g, l, k) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, g);
      case 6:
        return a.call(this, c, e, f, g, l, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.l = b;
  c.ea = a;
  return c;
}();
function qd(a, b, c) {
  this.p = a;
  this.B = b;
  this.d = c;
}
h = qd.prototype;
h.Z = function(a, b, c, d, e, f) {
  var g = 1 << (c >>> b & 31), l = Ob(this.B & g - 1);
  if (0 === (this.B & g)) {
    var k = Ob(this.B);
    if (2 * k < this.d.length) {
      a = this.ta(a);
      b = a.d;
      f.M = !0;
      a: {
        for (c = 2 * (k - l), f = 2 * l + (c - 1), k = 2 * (l + 1) + (c - 1);;) {
          if (0 === c) {
            break a;
          }
          b[k] = b[f];
          k -= 1;
          c -= 1;
          f -= 1;
        }
      }
      b[2 * l] = d;
      b[2 * l + 1] = e;
      a.B |= g;
      return a;
    }
    if (16 <= k) {
      l = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      l[c >>> b & 31] = rd.Z(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.B >>> d & 1) && (l[d] = null != this.d[e] ? rd.Z(a, b + 5, I(this.d[e]), this.d[e], this.d[e + 1], f) : this.d[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new sd(a, k + 1, l);
    }
    return u ? (b = Array(2 * (k + 4)), Gb(this.d, 0, b, 0, 2 * l), b[2 * l] = d, b[2 * l + 1] = e, Gb(this.d, 2 * l, b, 2 * (l + 1), 2 * (k - l)), f.M = !0, a = this.ta(a), a.d = b, a.B |= g, a) : null;
  }
  k = this.d[2 * l];
  g = this.d[2 * l + 1];
  return null == k ? (k = g.Z(a, b + 5, c, d, e, f), k === g ? this : pd.l(this, a, 2 * l + 1, k)) : nd(d, k) ? e === g ? this : pd.l(this, a, 2 * l + 1, e) : u ? (f.M = !0, pd.ea(this, a, 2 * l, null, 2 * l + 1, td.ra ? td.ra(a, b + 5, k, g, c, d, e) : td.call(null, a, b + 5, k, g, c, d, e))) : null;
};
h.Ea = function() {
  return ud.c ? ud.c(this.d) : ud.call(null, this.d);
};
h.ta = function(a) {
  if (a === this.p) {
    return this;
  }
  var b = Ob(this.B), c = Array(0 > b ? 4 : 2 * (b + 1));
  Gb(this.d, 0, c, 0, 2 * b);
  return new qd(a, this.B, c);
};
h.Y = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), g = Ob(this.B & f - 1);
  if (0 === (this.B & f)) {
    var l = Ob(this.B);
    if (16 <= l) {
      g = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      g[b >>> a & 31] = rd.Y(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.B >>> c & 1) && (g[c] = null != this.d[d] ? rd.Y(a + 5, I(this.d[d]), this.d[d], this.d[d + 1], e) : this.d[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new sd(null, l + 1, g);
    }
    a = Array(2 * (l + 1));
    Gb(this.d, 0, a, 0, 2 * g);
    a[2 * g] = c;
    a[2 * g + 1] = d;
    Gb(this.d, 2 * g, a, 2 * (g + 1), 2 * (l - g));
    e.M = !0;
    return new qd(null, this.B | f, a);
  }
  l = this.d[2 * g];
  f = this.d[2 * g + 1];
  return null == l ? (l = f.Y(a + 5, b, c, d, e), l === f ? this : new qd(null, this.B, od.b(this.d, 2 * g + 1, l))) : nd(c, l) ? d === f ? this : new qd(null, this.B, od.b(this.d, 2 * g + 1, d)) : u ? (e.M = !0, new qd(null, this.B, od.t(this.d, 2 * g, null, 2 * g + 1, td.ea ? td.ea(a + 5, l, f, b, c, d) : td.call(null, a + 5, l, f, b, c, d)))) : null;
};
h.ma = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.B & e)) {
    return d;
  }
  var f = Ob(this.B & e - 1), e = this.d[2 * f], f = this.d[2 * f + 1];
  return null == e ? f.ma(a + 5, b, c, d) : nd(c, e) ? f : u ? d : null;
};
var rd = new qd(null, 0, []);
function sd(a, b, c) {
  this.p = a;
  this.h = b;
  this.d = c;
}
h = sd.prototype;
h.Z = function(a, b, c, d, e, f) {
  var g = c >>> b & 31, l = this.d[g];
  if (null == l) {
    return a = pd.l(this, a, g, rd.Z(a, b + 5, c, d, e, f)), a.h += 1, a;
  }
  b = l.Z(a, b + 5, c, d, e, f);
  return b === l ? this : pd.l(this, a, g, b);
};
h.Ea = function() {
  return vd.c ? vd.c(this.d) : vd.call(null, this.d);
};
h.ta = function(a) {
  return a === this.p ? this : new sd(a, this.h, z(this.d));
};
h.Y = function(a, b, c, d, e) {
  var f = b >>> a & 31, g = this.d[f];
  if (null == g) {
    return new sd(null, this.h + 1, od.b(this.d, f, rd.Y(a + 5, b, c, d, e)));
  }
  a = g.Y(a + 5, b, c, d, e);
  return a === g ? this : new sd(null, this.h, od.b(this.d, f, a));
};
h.ma = function(a, b, c, d) {
  var e = this.d[b >>> a & 31];
  return null != e ? e.ma(a + 5, b, c, d) : d;
};
function wd(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (nd(c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function xd(a, b, c, d) {
  this.p = a;
  this.ia = b;
  this.h = c;
  this.d = d;
}
h = xd.prototype;
h.Z = function(a, b, c, d, e, f) {
  if (c === this.ia) {
    b = wd(this.d, this.h, d);
    if (-1 === b) {
      if (this.d.length > 2 * this.h) {
        return a = pd.ea(this, a, 2 * this.h, d, 2 * this.h + 1, e), f.M = !0, a.h += 1, a;
      }
      c = this.d.length;
      b = Array(c + 2);
      Gb(this.d, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.M = !0;
      f = this.h + 1;
      a === this.p ? (this.d = b, this.h = f, a = this) : a = new xd(this.p, this.ia, f, b);
      return a;
    }
    return this.d[b + 1] === e ? this : pd.l(this, a, b + 1, e);
  }
  return(new qd(a, 1 << (this.ia >>> b & 31), [null, this, null, null])).Z(a, b, c, d, e, f);
};
h.Ea = function() {
  return ud.c ? ud.c(this.d) : ud.call(null, this.d);
};
h.ta = function(a) {
  if (a === this.p) {
    return this;
  }
  var b = Array(2 * (this.h + 1));
  Gb(this.d, 0, b, 0, 2 * this.h);
  return new xd(a, this.ia, this.h, b);
};
h.Y = function(a, b, c, d, e) {
  return b === this.ia ? (a = wd(this.d, this.h, c), -1 === a ? (a = 2 * this.h, b = Array(a + 2), Gb(this.d, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.M = !0, new xd(null, this.ia, this.h + 1, b)) : gb.a(this.d[a], d) ? this : new xd(null, this.ia, this.h, od.b(this.d, a + 1, d))) : (new qd(null, 1 << (this.ia >>> a & 31), [null, this])).Y(a, b, c, d, e);
};
h.ma = function(a, b, c, d) {
  a = wd(this.d, this.h, c);
  return 0 > a ? d : nd(c, this.d[a]) ? this.d[a + 1] : u ? d : null;
};
var td = function() {
  function a(a, b, c, g, l, k, m) {
    var n = I(c);
    if (n === l) {
      return new xd(null, n, 2, [c, g, k, m]);
    }
    var t = new md;
    return rd.Z(a, b, n, c, g, t).Z(a, b, l, k, m, t);
  }
  function b(a, b, c, g, l, k) {
    var m = I(b);
    if (m === g) {
      return new xd(null, m, 2, [b, c, l, k]);
    }
    var n = new md;
    return rd.Y(a, m, b, c, n).Y(a, g, l, k, n);
  }
  var c = null, c = function(c, e, f, g, l, k, m) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, g, l, k);
      case 7:
        return a.call(this, c, e, f, g, l, k, m);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ea = b;
  c.ra = a;
  return c;
}();
function yd(a, b, c, d, e) {
  this.m = a;
  this.$ = b;
  this.j = c;
  this.s = d;
  this.k = e;
  this.o = 0;
  this.g = 32374860;
}
h = yd.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
h.J = function(a, b) {
  return Q(b, this);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return Mb.a(b, this);
};
h.Q = function(a, b, c) {
  return Mb.b(b, c, this);
};
h.I = function() {
  return this;
};
h.R = function() {
  return null == this.s ? new Y(null, 2, 5, Z, [this.$[this.j], this.$[this.j + 1]], null) : M(this.s);
};
h.T = function() {
  return null == this.s ? ud.b ? ud.b(this.$, this.j + 2, null) : ud.call(null, this.$, this.j + 2, null) : ud.b ? ud.b(this.$, this.j, O(this.s)) : ud.call(null, this.$, this.j, O(this.s));
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new yd(b, this.$, this.j, this.s, this.k);
};
h.C = function() {
  return this.m;
};
var ud = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new yd(null, a, b, null, null);
          }
          var g = a[b + 1];
          if (r(g) && (g = g.Ea(), r(g))) {
            return new yd(null, a, b + 2, g, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new yd(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.b(a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.b = a;
  return c;
}();
function zd(a, b, c, d, e) {
  this.m = a;
  this.$ = b;
  this.j = c;
  this.s = d;
  this.k = e;
  this.o = 0;
  this.g = 32374860;
}
h = zd.prototype;
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = qb(this);
};
h.J = function(a, b) {
  return Q(b, this);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return Mb.a(b, this);
};
h.Q = function(a, b, c) {
  return Mb.b(b, c, this);
};
h.I = function() {
  return this;
};
h.R = function() {
  return M(this.s);
};
h.T = function() {
  return vd.l ? vd.l(null, this.$, this.j, O(this.s)) : vd.call(null, null, this.$, this.j, O(this.s));
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new zd(b, this.$, this.j, this.s, this.k);
};
h.C = function() {
  return this.m;
};
var vd = function() {
  function a(a, b, c, g) {
    if (null == g) {
      for (g = b.length;;) {
        if (c < g) {
          var l = b[c];
          if (r(l) && (l = l.Ea(), r(l))) {
            return new zd(a, b, c + 1, l, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new zd(a, b, c, g, null);
    }
  }
  function b(a) {
    return c.l(null, a, 0, null);
  }
  var c = null, c = function(c, e, f, g) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, g);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.l = a;
  return c;
}();
function Ad(a, b, c, d, e, f) {
  this.m = a;
  this.h = b;
  this.root = c;
  this.S = d;
  this.V = e;
  this.k = f;
  this.o = 4;
  this.g = 16123663;
}
h = Ad.prototype;
h.ya = function() {
  return new Bd({}, this.root, this.h, this.S, this.V);
};
h.A = function() {
  var a = this.k;
  return null != a ? a : this.k = a = Qb(this);
};
h.G = function(a, b) {
  return D.b(this, b, null);
};
h.H = function(a, b, c) {
  return null == b ? this.S ? this.V : c : null == this.root ? c : u ? this.root.ma(0, I(b), b, c) : null;
};
h.xa = function(a, b, c) {
  if (null == b) {
    return this.S && c === this.V ? this : new Ad(this.m, this.S ? this.h : this.h + 1, this.root, !0, c, null);
  }
  a = new md;
  b = (null == this.root ? rd : this.root).Y(0, I(b), b, c, a);
  return b === this.root ? this : new Ad(this.m, a.M ? this.h + 1 : this.h, b, this.S, this.V, null);
};
h.Na = function(a, b) {
  return null == b ? this.S : null == this.root ? !1 : u ? this.root.ma(0, I(b), b, Hb) !== Hb : null;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
h.c = function(a) {
  return this.G(null, a);
};
h.a = function(a, b) {
  return this.H(null, a, b);
};
h.J = function(a, b) {
  return Eb(b) ? Aa(this, A.a(b, 0), A.a(b, 1)) : Lb.b(ta, this, b);
};
h.toString = function() {
  return eb(this);
};
h.I = function() {
  if (0 < this.h) {
    var a = null != this.root ? this.root.Ea() : null;
    return this.S ? Q(new Y(null, 2, 5, Z, [null, this.V], null), a) : a;
  }
  return null;
};
h.K = function() {
  return this.h;
};
h.w = function(a, b) {
  return dd(this, b);
};
h.D = function(a, b) {
  return new Ad(b, this.h, this.root, this.S, this.V, this.k);
};
h.C = function() {
  return this.m;
};
var id = new Ad(null, 0, null, !1, null, 0);
function wb(a, b) {
  for (var c = a.length, d = 0, e = Xa(id);;) {
    if (d < c) {
      var f = d + 1, e = e.Aa(null, a[d], b[d]), d = f
    } else {
      return Za(e);
    }
  }
}
function Bd(a, b, c, d, e) {
  this.p = a;
  this.root = b;
  this.count = c;
  this.S = d;
  this.V = e;
  this.o = 56;
  this.g = 258;
}
h = Bd.prototype;
h.Aa = function(a, b, c) {
  return Cd(this, b, c);
};
h.Ba = function(a, b) {
  var c;
  a: {
    if (this.p) {
      if (b ? b.g & 2048 || b.Ab || (b.g ? 0 : s(Ca, b)) : s(Ca, b)) {
        c = Cd(this, Rb.c ? Rb.c(b) : Rb.call(null, b), Sb.c ? Sb.c(b) : Sb.call(null, b));
        break a;
      }
      c = J(b);
      for (var d = this;;) {
        var e = M(c);
        if (r(e)) {
          c = O(c), d = Cd(d, Rb.c ? Rb.c(e) : Rb.call(null, e), Sb.c ? Sb.c(e) : Sb.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
h.Ca = function() {
  var a;
  if (this.p) {
    this.p = null, a = new Ad(null, this.count, this.root, this.S, this.V, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
h.G = function(a, b) {
  return null == b ? this.S ? this.V : null : null == this.root ? null : this.root.ma(0, I(b), b);
};
h.H = function(a, b, c) {
  return null == b ? this.S ? this.V : c : null == this.root ? c : this.root.ma(0, I(b), b, c);
};
h.K = function() {
  if (this.p) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function Cd(a, b, c) {
  if (a.p) {
    if (null == b) {
      a.V !== c && (a.V = c), a.S || (a.count += 1, a.S = !0);
    } else {
      var d = new md;
      b = (null == a.root ? rd : a.root).Z(a.p, 0, I(b), b, c, d);
      b !== a.root && (a.root = b);
      d.M && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var Dd = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    for (var b = J(a), e = Xa(id);;) {
      if (b) {
        a = O(O(b));
        var f = M(b), b = M(O(b)), e = $a(e, f, b), b = a;
      } else {
        return Za(e);
      }
    }
  }
  a.i = 0;
  a.f = function(a) {
    a = J(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Ed(a, b) {
  this.na = a;
  this.da = b;
  this.o = 0;
  this.g = 32374988;
}
h = Ed.prototype;
h.A = function() {
  return qb(this);
};
h.U = function() {
  var a = this.na, a = (a ? a.g & 128 || a.pb || (a.g ? 0 : s(xa, a)) : s(xa, a)) ? this.na.U(null) : O(this.na);
  return null == a ? null : new Ed(a, this.da);
};
h.J = function(a, b) {
  return Q(b, this);
};
h.toString = function() {
  return eb(this);
};
h.P = function(a, b) {
  return Mb.a(b, this);
};
h.Q = function(a, b, c) {
  return Mb.b(b, c, this);
};
h.I = function() {
  return this;
};
h.R = function() {
  return this.na.R(null).fb();
};
h.T = function() {
  var a = this.na, a = (a ? a.g & 128 || a.pb || (a.g ? 0 : s(xa, a)) : s(xa, a)) ? this.na.U(null) : O(this.na);
  return null != a ? new Ed(a, this.da) : lb;
};
h.w = function(a, b) {
  return rb(this, b);
};
h.D = function(a, b) {
  return new Ed(this.na, b);
};
h.C = function() {
  return this.da;
};
function Rb(a) {
  return Da(a);
}
function Sb(a) {
  return Ea(a);
}
function Fd(a, b, c) {
  this.m = a;
  this.va = b;
  this.k = c;
  this.o = 4;
  this.g = 15077647;
}
h = Fd.prototype;
h.ya = function() {
  return new Gd(Xa(this.va));
};
h.A = function() {
  var a = this.k;
  if (null != a) {
    return a;
  }
  a: {
    for (var a = 0, b = J(this);;) {
      if (b) {
        var c = M(b), a = (a + I(c)) % 4503599627370496, b = O(b)
      } else {
        break a;
      }
    }
    a = void 0;
  }
  return this.k = a;
};
h.G = function(a, b) {
  return D.b(this, b, null);
};
h.H = function(a, b, c) {
  return za(this.va, b) ? b : c;
};
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.G(null, c);
      case 3:
        return this.H(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
h.c = function(a) {
  return this.G(null, a);
};
h.a = function(a, b) {
  return this.H(null, a, b);
};
h.J = function(a, b) {
  return new Fd(this.m, xb.b(this.va, b, null), null);
};
h.toString = function() {
  return eb(this);
};
h.I = function() {
  var a = J(this.va);
  return a ? new Ed(a, null) : null;
};
h.K = function() {
  return ra(this.va);
};
h.w = function(a, b) {
  var c = this;
  return(null == b ? !1 : b ? b.g & 4096 || b.Wb ? !0 : b.g ? !1 : s(Fa, b) : s(Fa, b)) && R(c) === R(b) && oc(function(a) {
    return vb.b(c, a, Hb) === Hb ? !1 : !0;
  }, b);
};
h.D = function(a, b) {
  return new Fd(b, this.va, this.k);
};
h.C = function() {
  return this.m;
};
var Hd = new Fd(null, jd, 0);
function Id(a) {
  var b = a.length;
  if (b <= hd) {
    for (var c = 0, d = Xa(jd);;) {
      if (c < b) {
        var e = c + 1, d = $a(d, a[c], null), c = e
      } else {
        return new Fd(null, Za(d), null);
      }
    }
  } else {
    for (c = 0, d = Xa(Hd);;) {
      if (c < b) {
        e = c + 2, d = Ya(d, a[c]), c = e;
      } else {
        return Za(d);
      }
    }
  }
}
function Gd(a) {
  this.ha = a;
  this.g = 259;
  this.o = 136;
}
h = Gd.prototype;
h.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return D.b(this.ha, c, Hb) === Hb ? null : c;
      case 3:
        return D.b(this.ha, c, Hb) === Hb ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
h.apply = function(a, b) {
  return this.call.apply(this, [this].concat(z(b)));
};
h.c = function(a) {
  return D.b(this.ha, a, Hb) === Hb ? null : a;
};
h.a = function(a, b) {
  return D.b(this.ha, a, Hb) === Hb ? b : a;
};
h.G = function(a, b) {
  return D.b(this, b, null);
};
h.H = function(a, b, c) {
  return D.b(this.ha, b, Hb) === Hb ? c : b;
};
h.K = function() {
  return R(this.ha);
};
h.Ba = function(a, b) {
  this.ha = $a(this.ha, b, null);
  return this;
};
h.Ca = function() {
  return new Fd(null, Za(this.ha), null);
};
function V(a) {
  if (a && (a.o & 4096 || a.Cb)) {
    return a.name;
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([y("Doesn't support name: "), y(a)].join(""));
}
var Kd = function Jd(b, c) {
  return new W(null, function() {
    var d = J(c);
    return d ? r(b.c ? b.c(M(d)) : b.call(null, M(d))) ? Q(M(d), Jd(b, N(d))) : null : null;
  }, null, null);
}, Ld = function() {
  function a(a, b, c) {
    return function() {
      var d = null, e = function() {
        function d(a, b, c, f) {
          var g = null;
          3 < arguments.length && (g = P(Array.prototype.slice.call(arguments, 3), 0));
          return e.call(this, a, b, c, g);
        }
        function e(d, k, m, n) {
          return new Y(null, 3, 5, Z, [mc.t(a, d, k, m, n), mc.t(b, d, k, m, n), mc.t(c, d, k, m, n)], null);
        }
        d.i = 3;
        d.f = function(a) {
          var b = M(a);
          a = O(a);
          var c = M(a);
          a = O(a);
          var d = M(a);
          a = N(a);
          return e(b, c, d, a);
        };
        d.e = e;
        return d;
      }(), d = function(d, k, w, x) {
        switch(arguments.length) {
          case 0:
            return new Y(null, 3, 5, Z, [a.n ? a.n() : a.call(null), b.n ? b.n() : b.call(null), c.n ? c.n() : c.call(null)], null);
          case 1:
            return new Y(null, 3, 5, Z, [a.c ? a.c(d) : a.call(null, d), b.c ? b.c(d) : b.call(null, d), c.c ? c.c(d) : c.call(null, d)], null);
          case 2:
            return new Y(null, 3, 5, Z, [a.a ? a.a(d, k) : a.call(null, d, k), b.a ? b.a(d, k) : b.call(null, d, k), c.a ? c.a(d, k) : c.call(null, d, k)], null);
          case 3:
            return new Y(null, 3, 5, Z, [a.b ? a.b(d, k, w) : a.call(null, d, k, w), b.b ? b.b(d, k, w) : b.call(null, d, k, w), c.b ? c.b(d, k, w) : c.call(null, d, k, w)], null);
          default:
            return e.e(d, k, w, P(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      d.i = 3;
      d.f = e.f;
      return d;
    }();
  }
  function b(a, b) {
    return function() {
      var c = null, d = function() {
        function c(a, b, e, f) {
          var g = null;
          3 < arguments.length && (g = P(Array.prototype.slice.call(arguments, 3), 0));
          return d.call(this, a, b, e, g);
        }
        function d(c, e, l, k) {
          return new Y(null, 2, 5, Z, [mc.t(a, c, e, l, k), mc.t(b, c, e, l, k)], null);
        }
        c.i = 3;
        c.f = function(a) {
          var b = M(a);
          a = O(a);
          var c = M(a);
          a = O(a);
          var e = M(a);
          a = N(a);
          return d(b, c, e, a);
        };
        c.e = d;
        return c;
      }(), c = function(c, e, l, w) {
        switch(arguments.length) {
          case 0:
            return new Y(null, 2, 5, Z, [a.n ? a.n() : a.call(null), b.n ? b.n() : b.call(null)], null);
          case 1:
            return new Y(null, 2, 5, Z, [a.c ? a.c(c) : a.call(null, c), b.c ? b.c(c) : b.call(null, c)], null);
          case 2:
            return new Y(null, 2, 5, Z, [a.a ? a.a(c, e) : a.call(null, c, e), b.a ? b.a(c, e) : b.call(null, c, e)], null);
          case 3:
            return new Y(null, 2, 5, Z, [a.b ? a.b(c, e, l) : a.call(null, c, e, l), b.b ? b.b(c, e, l) : b.call(null, c, e, l)], null);
          default:
            return d.e(c, e, l, P(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      c.i = 3;
      c.f = d.f;
      return c;
    }();
  }
  function c(a) {
    return function() {
      var b = null, c = function() {
        function b(a, d, e, f) {
          var g = null;
          3 < arguments.length && (g = P(Array.prototype.slice.call(arguments, 3), 0));
          return c.call(this, a, d, e, g);
        }
        function c(b, d, e, g) {
          return new Y(null, 1, 5, Z, [mc.t(a, b, d, e, g)], null);
        }
        b.i = 3;
        b.f = function(a) {
          var b = M(a);
          a = O(a);
          var d = M(a);
          a = O(a);
          var e = M(a);
          a = N(a);
          return c(b, d, e, a);
        };
        b.e = c;
        return b;
      }(), b = function(b, d, e, g) {
        switch(arguments.length) {
          case 0:
            return new Y(null, 1, 5, Z, [a.n ? a.n() : a.call(null)], null);
          case 1:
            return new Y(null, 1, 5, Z, [a.c ? a.c(b) : a.call(null, b)], null);
          case 2:
            return new Y(null, 1, 5, Z, [a.a ? a.a(b, d) : a.call(null, b, d)], null);
          case 3:
            return new Y(null, 1, 5, Z, [a.b ? a.b(b, d, e) : a.call(null, b, d, e)], null);
          default:
            return c.e(b, d, e, P(arguments, 3));
        }
        throw Error("Invalid arity: " + arguments.length);
      };
      b.i = 3;
      b.f = c.f;
      return b;
    }();
  }
  var d = null, e = function() {
    function a(c, d, e, f) {
      var t = null;
      3 < arguments.length && (t = P(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, t);
    }
    function b(a, c, d, e) {
      var f = kc.l(a, c, d, e);
      return function() {
        function a(b, c, d) {
          return Lb.b(function(a, e) {
            return tb.a(a, e.b ? e.b(b, c, d) : e.call(null, b, c, d));
          }, Uc, f);
        }
        function b(a, c) {
          return Lb.b(function(b, d) {
            return tb.a(b, d.a ? d.a(a, c) : d.call(null, a, c));
          }, Uc, f);
        }
        function c(a) {
          return Lb.b(function(b, c) {
            return tb.a(b, c.c ? c.c(a) : c.call(null, a));
          }, Uc, f);
        }
        function d() {
          return Lb.b(function(a, b) {
            return tb.a(a, b.n ? b.n() : b.call(null));
          }, Uc, f);
        }
        var e = null, g = function() {
          function a(c, d, e, f) {
            var g = null;
            3 < arguments.length && (g = P(Array.prototype.slice.call(arguments, 3), 0));
            return b.call(this, c, d, e, g);
          }
          function b(a, c, d, e) {
            return Lb.b(function(b, f) {
              return tb.a(b, mc.t(f, a, c, d, e));
            }, Uc, f);
          }
          a.i = 3;
          a.f = function(a) {
            var c = M(a);
            a = O(a);
            var d = M(a);
            a = O(a);
            var e = M(a);
            a = N(a);
            return b(c, d, e, a);
          };
          a.e = b;
          return a;
        }(), e = function(e, f, l, k) {
          switch(arguments.length) {
            case 0:
              return d.call(this);
            case 1:
              return c.call(this, e);
            case 2:
              return b.call(this, e, f);
            case 3:
              return a.call(this, e, f, l);
            default:
              return g.e(e, f, l, P(arguments, 3));
          }
          throw Error("Invalid arity: " + arguments.length);
        };
        e.i = 3;
        e.f = g.f;
        return e;
      }();
    }
    a.i = 3;
    a.f = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var e = M(a);
      a = N(a);
      return b(c, d, e, a);
    };
    a.e = b;
    return a;
  }(), d = function(d, g, l, k) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, g);
      case 3:
        return a.call(this, d, g, l);
      default:
        return e.e(d, g, l, P(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.i = 3;
  d.f = e.f;
  d.c = c;
  d.a = b;
  d.b = a;
  d.e = e.e;
  return d;
}();
function Md(a, b, c, d, e, f, g) {
  var l = ea;
  try {
    ea = null == ea ? null : ea - 1;
    if (null != ea && 0 > ea) {
      return E(a, "#");
    }
    E(a, c);
    J(g) && (b.b ? b.b(M(g), a, f) : b.call(null, M(g), a, f));
    for (var k = O(g), m = ka.c(f);k && (null == m || 0 !== m);) {
      E(a, d);
      b.b ? b.b(M(k), a, f) : b.call(null, M(k), a, f);
      var n = O(k);
      c = m - 1;
      k = n;
      m = c;
    }
    r(ka.c(f)) && (E(a, d), b.b ? b.b("...", a, f) : b.call(null, "...", a, f));
    return E(a, e);
  } finally {
    ea = l;
  }
}
var Nd = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = P(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = J(b), f = null, g = 0, l = 0;;) {
      if (l < g) {
        var k = f.r(null, l);
        E(a, k);
        l += 1;
      } else {
        if (e = J(e)) {
          f = e, T(f) ? (e = F(f), g = G(f), f = e, k = R(e), e = g, g = k) : (k = M(f), E(a, k), e = O(f), f = null, g = 0), l = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.i = 1;
  a.f = function(a) {
    var d = M(a);
    a = N(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), Od = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function Pd(a) {
  return[y('"'), y(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return Od[a];
  })), y('"')].join("");
}
var Sd = function Qd(b, c, d) {
  if (null == b) {
    return E(c, "nil");
  }
  if (void 0 === b) {
    return E(c, "#\x3cundefined\x3e");
  }
  if (u) {
    r(function() {
      var c = vb.a(d, ia);
      return r(c) ? (c = b ? b.g & 131072 || b.Bb ? !0 : b.g ? !1 : s(Ja, b) : s(Ja, b)) ? zb(b) : c : c;
    }()) && (E(c, "^"), Qd(zb(b), c, d), E(c, " "));
    if (null == b) {
      return E(c, "nil");
    }
    if (b.Ja) {
      return b.jb(b, c, d);
    }
    if (b && (b.g & 2147483648 || b.L)) {
      return b.v(null, c, d);
    }
    if (ma(b) === Boolean || "number" === typeof b) {
      return E(c, "" + y(b));
    }
    if (b.constructor === Object) {
      return E(c, "#js "), Rd.l ? Rd.l(sc.a(function(c) {
        return new Y(null, 2, 5, Z, [Zb.c(c), b[c]], null);
      }, Fb(b)), Qd, c, d) : Rd.call(null, sc.a(function(c) {
        return new Y(null, 2, 5, Z, [Zb.c(c), b[c]], null);
      }, Fb(b)), Qd, c, d);
    }
    if (b instanceof Array) {
      return Md(c, Qd, "#js [", " ", "]", d, b);
    }
    if ("string" == typeof b) {
      return r(ha.c(d)) ? E(c, Pd(b)) : E(c, b);
    }
    if (yb(b)) {
      return Nd.e(c, P(["#\x3c", "" + y(b), "\x3e"], 0));
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + y(b);;) {
          if (R(d) < c) {
            d = [y("0"), y(d)].join("");
          } else {
            return d;
          }
        }
      };
      return Nd.e(c, P(['#inst "', "" + y(b.getUTCFullYear()), "-", e(b.getUTCMonth() + 1, 2), "-", e(b.getUTCDate(), 2), "T", e(b.getUTCHours(), 2), ":", e(b.getUTCMinutes(), 2), ":", e(b.getUTCSeconds(), 2), ".", e(b.getUTCMilliseconds(), 3), "-", '00:00"'], 0));
    }
    return b instanceof RegExp ? Nd.e(c, P(['#"', b.source, '"'], 0)) : (b ? b.g & 2147483648 || b.L || (b.g ? 0 : s(Ua, b)) : s(Ua, b)) ? Va(b, c, d) : u ? Nd.e(c, P(["#\x3c", "" + y(b), "\x3e"], 0)) : null;
  }
  return null;
}, Td = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = P(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    var b;
    if (null == a || la(J(a))) {
      b = "";
    } else {
      b = y;
      var e = fa(), f = new da;
      a: {
        var g = new db(f);
        Sd(M(a), g, e);
        a = J(O(a));
        for (var l = null, k = 0, m = 0;;) {
          if (m < k) {
            var n = l.r(null, m);
            E(g, " ");
            Sd(n, g, e);
            m += 1;
          } else {
            if (a = J(a)) {
              l = a, T(l) ? (a = F(l), k = G(l), l = a, n = R(a), a = k, k = n) : (n = M(l), E(g, " "), Sd(n, g, e), a = O(l), l = null, k = 0), m = 0;
            } else {
              break a;
            }
          }
        }
      }
      b = "" + b(f);
    }
    return b;
  }
  a.i = 0;
  a.f = function(a) {
    a = J(a);
    return b(a);
  };
  a.e = b;
  return a;
}();
function Rd(a, b, c, d) {
  return Md(c, function(a, c, d) {
    b.b ? b.b(Da(a), c, d) : b.call(null, Da(a), c, d);
    E(c, " ");
    return b.b ? b.b(Ea(a), c, d) : b.call(null, Ea(a), c, d);
  }, "{", ", ", "}", d, J(a));
}
Ed.prototype.L = !0;
Ed.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
kb.prototype.L = !0;
kb.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
Xc.prototype.L = !0;
Xc.prototype.v = function(a, b, c) {
  return Md(b, Sd, "[", " ", "]", c, this);
};
dc.prototype.L = !0;
dc.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
q.prototype.L = !0;
q.prototype.v = function(a, b, c) {
  return Rd(this, Sd, b, c);
};
W.prototype.L = !0;
W.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
yd.prototype.L = !0;
yd.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
Vc.prototype.L = !0;
Vc.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
Ad.prototype.L = !0;
Ad.prototype.v = function(a, b, c) {
  return Rd(this, Sd, b, c);
};
Fd.prototype.L = !0;
Fd.prototype.v = function(a, b, c) {
  return Md(b, Sd, "#{", " ", "}", c, this);
};
Y.prototype.L = !0;
Y.prototype.v = function(a, b, c) {
  return Md(b, Sd, "[", " ", "]", c, this);
};
Tb.prototype.L = !0;
Tb.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
fd.prototype.L = !0;
fd.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
Ub.prototype.L = !0;
Ub.prototype.v = function(a, b) {
  return E(b, "()");
};
Xb.prototype.L = !0;
Xb.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
zd.prototype.L = !0;
zd.prototype.v = function(a, b, c) {
  return Md(b, Sd, "(", " ", ")", c, this);
};
Y.prototype.Ga = !0;
Y.prototype.Ha = function(a, b) {
  return Kb.a(this, b);
};
Xc.prototype.Ga = !0;
Xc.prototype.Ha = function(a, b) {
  return Kb.a(this, b);
};
U.prototype.Ga = !0;
U.prototype.Ha = function(a, b) {
  return fb(this, b);
};
H.prototype.Ga = !0;
H.prototype.Ha = function(a, b) {
  return fb(this, b);
};
function Ud(a, b, c, d) {
  this.state = a;
  this.m = b;
  this.Nb = c;
  this.wb = d;
  this.g = 2153938944;
  this.o = 2;
}
h = Ud.prototype;
h.A = function() {
  return this[aa] || (this[aa] = ++ba);
};
h.rb = function(a, b, c) {
  a = J(this.wb);
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.r(null, f), l = S.b(g, 0, null), g = S.b(g, 1, null);
      g.l ? g.l(l, this, b, c) : g.call(null, l, this, b, c);
      f += 1;
    } else {
      if (a = J(a)) {
        T(a) ? (d = F(a), a = G(a), l = d, e = R(d), d = l) : (d = M(a), l = S.b(d, 0, null), g = S.b(d, 1, null), g.l ? g.l(l, this, b, c) : g.call(null, l, this, b, c), a = O(a), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
};
h.v = function(a, b, c) {
  E(b, "#\x3cAtom: ");
  Sd(this.state, b, c);
  return E(b, "\x3e");
};
h.C = function() {
  return this.m;
};
h.Ra = function() {
  return this.state;
};
h.w = function(a, b) {
  return this === b;
};
var Wd = function() {
  function a(a) {
    return new Ud(a, null, null, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var l = null;
      1 < arguments.length && (l = P(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, l);
    }
    function b(a, c) {
      var d = Ib(c) ? mc.a(Dd, c) : c, e = vb.a(d, Vd), d = vb.a(d, ia);
      return new Ud(a, d, e, null);
    }
    a.i = 1;
    a.f = function(a) {
      var c = M(a);
      a = N(a);
      return b(c, a);
    };
    a.e = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.e(b, P(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 1;
  b.f = c.f;
  b.c = a;
  b.e = c.e;
  return b;
}();
function Xd(a, b) {
  var c = a.Nb;
  if (null != c && !r(c.c ? c.c(b) : c.call(null, b))) {
    throw Error([y("Assert failed: "), y("Validator rejected reference state"), y("\n"), y(Td.e(P([Vb(new H(null, "validate", "validate", 1233162959, null), new H(null, "new-value", "new-value", 972165309, null))], 0)))].join(""));
  }
  c = a.state;
  a.state = b;
  null != a.wb && Wa(a, c, b);
  return b;
}
;var ja = new U(null, "dup", "dup"), Yd = new U(null, "country", "country"), ib = new U(null, "default", "default"), Zd = new U(null, "recur", "recur"), $d = new U(null, "position", "position"), ae = new U(null, "mousedown", "mousedown"), be = new U(null, "mouseover", "mouseover"), ce = new U(null, "class", "class"), de = new U(null, "mouseout", "mouseout"), ga = new U(null, "flush-on-newline", "flush-on-newline"), ee = new U(null, "surname", "surname"), fe = new U(null, "style", "style"), ge = new U(null, 
"mouseleave", "mouseleave"), he = new U(null, "title", "title"), ie = new U(null, "mouseup", "mouseup"), je = new U(null, ".writers-game", ".writers-game"), ke = new U(null, "top", "top"), ka = new U(null, "print-length", "print-length"), le = new U(null, "left", "left"), u = new U(null, "else", "else"), ha = new U(null, "readably", "readably"), me = new U(null, "mouseenter", "mouseenter"), Vd = new U(null, "validator", "validator"), ia = new U(null, "meta", "meta"), ne = new U(null, "mousemove", 
"mousemove"), oe = new U(null, "alive", "alive"), pe = new U(null, "classes", "classes"), qe = new U(null, "writer", "writer"), re = new U(null, ".writers-list", ".writers-list");
var se = function() {
  function a(a, b) {
    return mc.a(y, vc(1, zc.a(wc.c(a), b)));
  }
  function b(a) {
    return mc.a(y, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function te(a, b) {
  for (var c = 0;;) {
    if (c = a.indexOf(b, c), 0 <= c) {
      var d;
      if (d = 0 === c || " " === a.charAt(c - 1)) {
        d = a.length;
        var e = c + b.length;
        d = e <= d ? e === d || " " === a.charAt(e) : null;
      }
      if (d) {
        return c;
      }
      c += b.length;
    } else {
      return null;
    }
  }
}
var ue = function() {
  function a(a, b) {
    var c = $(a), g;
    g = V(b).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
    if (J(g)) {
      var l = c.classList;
      if (r(l)) {
        g = J(g.split(/\s+/));
        for (var k = null, m = 0, n = 0;;) {
          if (n < m) {
            var t = k.r(null, n);
            l.add(t);
            n += 1;
          } else {
            if (g = J(g)) {
              k = g, T(k) ? (g = F(k), n = G(k), k = g, m = R(g), g = n) : (g = M(k), l.add(g), g = O(k), k = null, m = 0), n = 0;
            } else {
              break;
            }
          }
        }
      } else {
        for (l = c.className, g = J(g.split(/\s+/)), k = null, n = m = 0;;) {
          if (n < m) {
            t = k.r(null, n), r(te(l, t)) || (c.className = "" === l ? t : [y(l), y(" "), y(t)].join("")), n += 1;
          } else {
            if (g = J(g)) {
              k = g, T(k) ? (g = F(k), n = G(k), k = g, m = R(g), g = n) : (g = M(k), r(te(l, g)) || (c.className = "" === l ? g : [y(l), y(" "), y(g)].join("")), g = O(k), k = null, m = 0), n = 0;
            } else {
              break;
            }
          }
        }
      }
    }
    return c;
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      a = $(a);
      d = J(tb.a(e, d));
      e = null;
      for (var k = 0, m = 0;;) {
        if (m < k) {
          var n = e.r(null, m);
          b.a(a, n);
          m += 1;
        } else {
          if (d = J(d)) {
            e = d, T(e) ? (d = F(e), m = G(e), e = d, k = R(d), d = m) : (d = M(e), b.a(a, d), d = O(e), e = null, k = 0), m = 0;
          } else {
            break;
          }
        }
      }
      return a;
    }
    a.i = 2;
    a.f = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, P(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.f = c.f;
  b.a = a;
  b.e = c.e;
  return b;
}(), ve = function() {
  function a(a, b) {
    var c = $(a), g = V(b), l = c.classList;
    if (r(l)) {
      l.remove(g);
    } else {
      l = c.className;
      a: {
        for (var k = l;;) {
          var m = k.length, n = te(k, g);
          if (r(n)) {
            var t = n + g.length, k = "" + y(t < m ? [y(k.substring(0, n)), y(k.substr(t + 1))].join("") : k.substring(0, n - 1))
          } else {
            g = k;
            break a;
          }
        }
        g = void 0;
      }
      l !== g && (c.className = g);
    }
    return c;
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      a = $(a);
      d = J(tb.a(e, d));
      e = null;
      for (var k = 0, m = 0;;) {
        if (m < k) {
          var n = e.r(null, m);
          b.a(a, n);
          m += 1;
        } else {
          if (d = J(d)) {
            e = d, T(e) ? (d = F(e), k = G(e), e = d, n = R(d), d = k, k = n) : (n = M(e), b.a(a, n), d = O(e), e = null, k = 0), m = 0;
          } else {
            return null;
          }
        }
      }
    }
    a.i = 2;
    a.f = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, P(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.f = c.f;
  b.a = a;
  b.e = c.e;
  return b;
}();
function we(a) {
  return "string" === typeof a ? a : se.a(" ", sc.a(function(a) {
    var c = S.b(a, 0, null);
    a = S.b(a, 1, null);
    return[y(V(c)), y(":"), y(V(a)), y(";")].join("");
  }, a));
}
var xe = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = P(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    if (!pc(R(b))) {
      throw Error([y("Assert failed: "), y(Td.e(P([Vb(new H(null, "even?", "even?", -1543640034, null), Vb(new H(null, "count", "count", -1545680184, null), new H(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
    }
    for (var e = $(a), f = e.style, g = J(Dc.a(2, b)), l = null, k = 0, m = 0;;) {
      if (m < k) {
        var n = l.r(null, m), t = S.b(n, 0, null), n = S.b(n, 1, null);
        f[V(t)] = n;
        m += 1;
      } else {
        if (g = J(g)) {
          T(g) ? (k = F(g), g = G(g), l = k, k = R(k)) : (k = M(g), l = S.b(k, 0, null), k = S.b(k, 1, null), f[V(l)] = k, g = O(g), l = null, k = 0), m = 0;
        } else {
          break;
        }
      }
    }
    return e;
  }
  a.i = 1;
  a.f = function(a) {
    var d = M(a);
    a = N(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}(), ye = function() {
  function a(a, b, c) {
    if (r(c)) {
      if (yb(c)) {
        return a = $(a), a[V(b)] = c, a;
      }
      a = $(a);
      a.setAttribute(V(b), b === fe ? we(c) : c);
      return a;
    }
    return null;
  }
  function b(a, b) {
    return c.b($(a), b, "true");
  }
  var c = null, d = function() {
    function a(c, d, e, m) {
      var n = null;
      3 < arguments.length && (n = P(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, e, n);
    }
    function b(a, d, e, f) {
      if (!pc(R(f))) {
        throw Error([y("Assert failed: "), y(Td.e(P([Vb(new H(null, "even?", "even?", -1543640034, null), Vb(new H(null, "count", "count", -1545680184, null), new H(null, "kvs", "kvs", -1640424927, null)))], 0)))].join(""));
      }
      a = $(a);
      d = J(Q(new Y(null, 2, 5, Z, [d, e], null), Dc.a(2, f)));
      e = null;
      for (var n = f = 0;;) {
        if (n < f) {
          var t = e.r(null, n), w = S.b(t, 0, null), t = S.b(t, 1, null);
          c.b(a, w, t);
          n += 1;
        } else {
          if (d = J(d)) {
            T(d) ? (f = F(d), d = G(d), e = f, f = R(f)) : (f = M(d), e = S.b(f, 0, null), f = S.b(f, 1, null), c.b(a, e, f), d = O(d), e = null, f = 0), n = 0;
          } else {
            break;
          }
        }
      }
      return a;
    }
    a.i = 3;
    a.f = function(a) {
      var c = M(a);
      a = O(a);
      var d = M(a);
      a = O(a);
      var e = M(a);
      a = N(a);
      return b(c, d, e, a);
    };
    a.e = b;
    return a;
  }(), c = function(c, f, g, l) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, f);
      case 3:
        return a.call(this, c, f, g);
      default:
        return d.e(c, f, g, P(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.i = 3;
  c.f = d.f;
  c.a = b;
  c.b = a;
  c.e = d.e;
  return c;
}();
function ze(a) {
  return Array.prototype.slice.call(a);
}
;var Ae;
function Be(a, b, c) {
  if (a ? a.ib : a) {
    return a.ib(0, b, c);
  }
  var d;
  d = Be[p(null == a ? null : a)];
  if (!d && (d = Be._, !d)) {
    throw v("WritePort.put!", a);
  }
  return d.call(null, a, b, c);
}
function Ce(a) {
  if (a ? a.ub : a) {
    return!0;
  }
  var b;
  b = Ce[p(null == a ? null : a)];
  if (!b && (b = Ce._, !b)) {
    throw v("Handler.active?", a);
  }
  return b.call(null, a);
}
function De(a) {
  if (a ? a.hb : a) {
    return a.hb();
  }
  var b;
  b = De[p(null == a ? null : a)];
  if (!b && (b = De._, !b)) {
    throw v("Buffer.full?", a);
  }
  return b.call(null, a);
}
;var Ee, Ge = function Fe(b) {
  "undefined" === typeof Ee && (Ee = function(b, d, e) {
    this.ka = b;
    this.lb = d;
    this.Jb = e;
    this.o = 0;
    this.g = 393216;
  }, Ee.Ja = !0, Ee.Ia = "cljs.core.async.impl.ioc-helpers/t28840", Ee.jb = function(b, d) {
    return E(d, "cljs.core.async.impl.ioc-helpers/t28840");
  }, Ee.prototype.ub = function() {
    return!0;
  }, Ee.prototype.C = function() {
    return this.Jb;
  }, Ee.prototype.D = function(b, d) {
    return new Ee(this.ka, this.lb, d);
  });
  return new Ee(b, Fe, null);
};
function He(a) {
  try {
    return a[0].call(null, a);
  } catch (b) {
    if (b instanceof Object) {
      throw a[4].tb(), b;
    }
    if (u) {
      throw b;
    }
    return null;
  }
}
function Ie(a, b) {
  var c = b.Fb(Ge(function(b) {
    a[2] = b;
    a[1] = 7;
    return He(a);
  }));
  return r(c) ? (a[2] = Ia(c), a[1] = 7, Zd) : null;
}
function Je(a, b) {
  var c = a[4];
  null != b && c.ib(0, b, Ge(function() {
    return null;
  }));
  c.tb();
  return c;
}
;function Ke(a, b, c, d, e) {
  for (var f = 0;;) {
    if (f < e) {
      c[d + f] = a[b + f], f += 1;
    } else {
      break;
    }
  }
}
function Le(a, b, c, d) {
  this.head = a;
  this.q = b;
  this.length = c;
  this.d = d;
}
Le.prototype.pop = function() {
  if (0 === this.length) {
    return null;
  }
  var a = this.d[this.q];
  this.d[this.q] = null;
  this.q = (this.q + 1) % this.d.length;
  this.length -= 1;
  return a;
};
Le.prototype.unshift = function(a) {
  this.d[this.head] = a;
  this.head = (this.head + 1) % this.d.length;
  this.length += 1;
  return null;
};
function Me(a, b) {
  a.length + 1 === a.d.length && a.resize();
  a.unshift(b);
}
Le.prototype.resize = function() {
  var a = Array(2 * this.d.length);
  return this.q < this.head ? (Ke(this.d, this.q, a, 0, this.length), this.q = 0, this.head = this.length, this.d = a) : this.q > this.head ? (Ke(this.d, this.q, a, 0, this.d.length - this.q), Ke(this.d, 0, a, this.d.length - this.q, this.head), this.q = 0, this.head = this.length, this.d = a) : this.q === this.head ? (this.head = this.q = 0, this.d = a) : null;
};
function Ne(a, b) {
  for (var c = a.length, d = 0;;) {
    if (d < c) {
      var e = a.pop();
      (b.c ? b.c(e) : b.call(null, e)) && a.unshift(e);
      d += 1;
    } else {
      break;
    }
  }
}
function Oe(a) {
  if (!(0 < a)) {
    throw Error([y("Assert failed: "), y("Can't create a ring buffer of size 0"), y("\n"), y(Td.e(P([Vb(new H(null, "\x3e", "\x3e", -1640531465, null), new H(null, "n", "n", -1640531417, null), 0)], 0)))].join(""));
  }
  return new Le(0, 0, 0, Array(a));
}
function Pe(a, b) {
  this.O = a;
  this.Kb = b;
  this.o = 0;
  this.g = 2;
}
Pe.prototype.K = function() {
  return this.O.length;
};
Pe.prototype.hb = function() {
  return this.O.length === this.Kb;
};
Pe.prototype.Eb = function() {
  return this.O.pop();
};
function Qe(a, b) {
  if (!la(De(a))) {
    throw Error([y("Assert failed: "), y("Can't add to a full buffer"), y("\n"), y(Td.e(P([Vb(new H(null, "not", "not", -1640422260, null), Vb(new H("impl", "full?", "impl/full?", -1337857039, null), new H(null, "this", "this", -1636972457, null)))], 0)))].join(""));
  }
  a.O.unshift(b);
}
;var Re = null, Se = Oe(32), Te = !1, Ue = !1;
function Ve() {
  Te = !0;
  Ue = !1;
  for (var a = 0;;) {
    var b = Se.pop();
    if (null != b && (b.n ? b.n() : b.call(null), 1024 > a)) {
      a += 1;
      continue;
    }
    break;
  }
  Te = !1;
  return 0 < Se.length ? We.n ? We.n() : We.call(null) : null;
}
"undefined" !== typeof MessageChannel && (Re = new MessageChannel, Re.port1.onmessage = function() {
  return Ve();
});
function We() {
  var a = Ue;
  if (r(a ? Te : a)) {
    return null;
  }
  Ue = !0;
  return "undefined" !== typeof MessageChannel ? Re.port2.postMessage(0) : "undefined" !== typeof setImmediate ? setImmediate(Ve) : u ? setTimeout(Ve, 0) : null;
}
function Xe(a) {
  Me(Se, a);
  We();
}
;var Ye, $e = function Ze(b) {
  "undefined" === typeof Ye && (Ye = function(b, d, e) {
    this.M = b;
    this.xb = d;
    this.Ib = e;
    this.o = 0;
    this.g = 425984;
  }, Ye.Ja = !0, Ye.Ia = "cljs.core.async.impl.channels/t28829", Ye.jb = function(b, d) {
    return E(d, "cljs.core.async.impl.channels/t28829");
  }, Ye.prototype.Ra = function() {
    return this.M;
  }, Ye.prototype.C = function() {
    return this.Ib;
  }, Ye.prototype.D = function(b, d) {
    return new Ye(this.M, this.xb, d);
  });
  return new Ye(b, Ze, null);
};
function af(a, b) {
  this.vb = a;
  this.M = b;
}
function bf(a) {
  return Ce(a.vb);
}
function cf(a, b, c, d, e, f) {
  this.Fa = a;
  this.La = b;
  this.Ma = c;
  this.Ka = d;
  this.O = e;
  this.closed = f;
}
cf.prototype.tb = function() {
  if (!this.closed) {
    for (this.closed = !0;;) {
      var a = this.Fa.pop();
      if (null != a) {
        Xe(function(a) {
          return function() {
            return a.c ? a.c(null) : a.call(null, null);
          };
        }(a.ka, a));
      } else {
        break;
      }
    }
  }
};
cf.prototype.Fb = function(a) {
  if (null != this.O && 0 < R(this.O)) {
    return $e(this.O.Eb());
  }
  for (;;) {
    var b = this.Ma.pop();
    if (null != b) {
      return a = b.M, Xe(b.vb.ka), $e(a);
    }
    if (this.closed) {
      return $e(null);
    }
    64 < this.La ? (this.La = 0, Ne(this.Fa, Ce)) : this.La += 1;
    if (!(1024 > this.Fa.length)) {
      throw Error([y("Assert failed: "), y([y("No more than "), y(1024), y(" pending takes are allowed on a single channel.")].join("")), y("\n"), y(Td.e(P([Vb(new H(null, "\x3c", "\x3c", -1640531467, null), Vb(new H(null, ".-length", ".-length", 1395928862, null), new H(null, "takes", "takes", -1530407291, null)), new H("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
    }
    Me(this.Fa, a);
    return null;
  }
};
cf.prototype.ib = function(a, b, c) {
  if (null == b) {
    throw Error([y("Assert failed: "), y("Can't put nil in on a channel"), y("\n"), y(Td.e(P([Vb(new H(null, "not", "not", -1640422260, null), Vb(new H(null, "nil?", "nil?", -1637150201, null), new H(null, "val", "val", -1640415014, null)))], 0)))].join(""));
  }
  if (this.closed) {
    return $e(null);
  }
  for (;;) {
    a = this.Fa.pop();
    if (null != a) {
      c = c.ka, Xe(function(a) {
        return function() {
          return a.c ? a.c(b) : a.call(null, b);
        };
      }(a.ka, c, a));
    } else {
      if (null == this.O || this.O.hb()) {
        64 < this.Ka ? (this.Ka = 0, Ne(this.Ma, bf)) : this.Ka += 1;
        if (!(1024 > this.Ma.length)) {
          throw Error([y("Assert failed: "), y([y("No more than "), y(1024), y(" pending puts are allowed on a single channel."), y(" Consider using a windowed buffer.")].join("")), y("\n"), y(Td.e(P([Vb(new H(null, "\x3c", "\x3c", -1640531467, null), Vb(new H(null, ".-length", ".-length", 1395928862, null), new H(null, "puts", "puts", -1637078787, null)), new H("impl", "MAX-QUEUE-SIZE", "impl/MAX-QUEUE-SIZE", -1989946393, null))], 0)))].join(""));
        }
        Me(this.Ma, new af(c, b));
        return null;
      }
      c = c.ka;
      Qe(this.O, b);
    }
    return $e(null);
  }
};
function df(a, b, c) {
  this.key = a;
  this.M = b;
  this.forward = c;
  this.o = 0;
  this.g = 2155872256;
}
df.prototype.v = function(a, b, c) {
  return Md(b, Sd, "[", " ", "]", c, this);
};
df.prototype.I = function() {
  return ta(ta(lb, this.M), this.key);
};
(function() {
  function a(a, b, c) {
    c = Array(c + 1);
    for (var g = 0;;) {
      if (g < c.length) {
        c[g] = null, g += 1;
      } else {
        break;
      }
    }
    return new df(a, b, c);
  }
  function b(a) {
    return c.b(null, null, a);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.b = a;
  return c;
})().c(0);
var ff = function ef(b) {
  "undefined" === typeof Ae && (Ae = function(b, d, e) {
    this.ka = b;
    this.lb = d;
    this.Hb = e;
    this.o = 0;
    this.g = 393216;
  }, Ae.Ja = !0, Ae.Ia = "cljs.core.async/t26879", Ae.jb = function(b, d) {
    return E(d, "cljs.core.async/t26879");
  }, Ae.prototype.ub = function() {
    return!0;
  }, Ae.prototype.C = function() {
    return this.Hb;
  }, Ae.prototype.D = function(b, d) {
    return new Ae(this.ka, this.lb, d);
  });
  return new Ae(b, ef, null);
}, gf = function() {
  function a(a) {
    a = gb.a(a, 0) ? null : a;
    a = "number" === typeof a ? new Pe(Oe(a), a) : a;
    return new cf(Oe(32), 0, Oe(32), 0, a, null);
  }
  function b() {
    return c.c(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.n = b;
  c.c = a;
  return c;
}();
function hf() {
  return null;
}
var jf = function() {
  function a(a, b, c, d) {
    a = Be(a, b, ff(c));
    r(r(a) ? nc.a(c, hf) : a) && (r(d) ? c.n ? c.n() : c.call(null) : Xe(c));
    return null;
  }
  function b(a, b, c) {
    return d.l(a, b, c, !0);
  }
  function c(a, b) {
    return d.b(a, b, hf);
  }
  var d = null, d = function(d, f, g, l) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, g);
      case 4:
        return a.call(this, d, f, g, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.a = c;
  d.b = b;
  d.l = a;
  return d;
}();
var kf = {};
function lf(a) {
  if (a ? a.qa : a) {
    return a.qa(a);
  }
  var b;
  b = lf[p(null == a ? null : a)];
  if (!b && (b = lf._, !b)) {
    throw v("PElement.-elem", a);
  }
  return b.call(null, a);
}
function mf(a, b) {
  var c = a.indexOf("#", b), d = a.indexOf(".", b), e = Math.min(c, d);
  return 0 > e ? Math.max(c, d) : e;
}
function nf(a) {
  var b = V(a), c = mf(b, 0);
  a = document.createElement(0 < c ? b.substring(0, c) : 0 === c ? "div" : u ? b : null);
  if (0 <= c) {
    for (b = b.substring(c);;) {
      var c = mf(b, 1), d = 0 <= c ? b.substring(0, c) : b, e = d.charAt(0);
      if (gb.a("#", e)) {
        a.setAttribute("id", d.substring(1));
      } else {
        if (gb.a(".", e)) {
          ue.a(a, d.substring(1));
        } else {
          if (u) {
            throw Error([y("No matching clause: "), y(d.charAt(0))].join(""));
          }
        }
      }
      if (0 <= c) {
        b = b.substring(c);
      } else {
        break;
      }
    }
  }
  return a;
}
var of = function() {
  function a(a, b) {
    if (b ? r(r(null) ? null : b.ja) || (b.kb ? 0 : s(kf, b)) : s(kf, b)) {
      return a.appendChild(lf(b)), a;
    }
    if (Ib(b)) {
      for (var f = J(b), g = null, l = 0, k = 0;;) {
        if (k < l) {
          var m = g.r(null, k);
          c.a(a, m);
          k += 1;
        } else {
          if (f = J(f)) {
            g = f, T(g) ? (f = F(g), k = G(g), g = f, l = R(f), f = k) : (f = M(g), c.a(a, f), f = O(g), g = null, l = 0), k = 0;
          } else {
            break;
          }
        }
      }
      return a;
    }
    if (null == b) {
      f = a;
    } else {
      if (u) {
        throw[y("Don't know how to make node from: "), y(Td.e(P([b], 0)))].join("");
      }
      f = null;
    }
    return f;
  }
  function b(a) {
    return c.a(document.createDocumentFragment(), a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}();
function $(a) {
  return(a ? r(r(null) ? null : a.ja) || (a.kb ? 0 : s(kf, a)) : s(kf, a)) ? lf(a) : of.c(a);
}
kf.string = !0;
lf.string = function(a) {
  return a instanceof U ? nf(a) : document.createTextNode("" + y(a));
};
kf.number = !0;
lf.number = function(a) {
  return document.createTextNode("" + y(a));
};
Y.prototype.ja = !0;
Y.prototype.qa = function() {
  for (var a = S.b(this, 0, null), b = S.b(this, 1, null), c = Pb(this, 2), a = nf(a), d = Db(b) && !(b ? r(r(null) ? null : b.ja) || (b.kb ? 0 : s(kf, b)) : s(kf, b)) ? b : null, b = r(d) ? c : Q(b, c), c = J(d), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var g = d.r(null, f), l = S.b(g, 0, null), g = S.b(g, 1, null), k = l;
      if (gb.a(pe, k)) {
        for (var l = J(g), g = null, m = k = 0;;) {
          if (m < k) {
            var n = g.r(null, m);
            ue.a(a, n);
            m += 1;
          } else {
            if (l = J(l)) {
              g = l, T(g) ? (l = F(g), m = G(g), g = l, k = R(l), l = m) : (l = M(g), ue.a(a, l), l = O(g), g = null, k = 0), m = 0;
            } else {
              break;
            }
          }
        }
      } else {
        gb.a(ce, k) ? ue.a(a, g) : u && ye.b(a, l, g);
      }
      f += 1;
    } else {
      if (c = J(c)) {
        if (T(c)) {
          e = F(c), c = G(c), d = e, e = R(e);
        } else {
          e = M(c);
          d = S.b(e, 0, null);
          e = S.b(e, 1, null);
          f = d;
          if (gb.a(pe, f)) {
            for (d = J(e), e = null, l = f = 0;;) {
              if (l < f) {
                g = e.r(null, l), ue.a(a, g), l += 1;
              } else {
                if (d = J(d)) {
                  e = d, T(e) ? (d = F(e), l = G(e), e = d, f = R(d), d = l) : (d = M(e), ue.a(a, d), d = O(e), e = null, f = 0), l = 0;
                } else {
                  break;
                }
              }
            }
          } else {
            gb.a(ce, f) ? ue.a(a, e) : u && ye.b(a, d, e);
          }
          c = O(c);
          d = null;
          e = 0;
        }
        f = 0;
      } else {
        break;
      }
    }
  }
  a.appendChild($(b));
  return a;
};
Document.prototype.ja = !0;
Document.prototype.qa = function() {
  return this;
};
Text.prototype.ja = !0;
Text.prototype.qa = function() {
  return this;
};
DocumentFragment.prototype.ja = !0;
DocumentFragment.prototype.qa = function() {
  return this;
};
HTMLElement.prototype.ja = !0;
HTMLElement.prototype.qa = function() {
  return this;
};
try {
  Window.prototype.ja = !0, Window.prototype.qa = function() {
    return this;
  };
} catch (pf) {
  if (pf instanceof ReferenceError) {
    console.log("PElement: js/Window not defined by browser, skipping it... (running on phantomjs?)");
  } else {
    if (u) {
      throw pf;
    }
  }
}
;var qf = function() {
  function a(a, b) {
    var c = $(a);
    c.appendChild($(b));
    return c;
  }
  var b = null, c = function() {
    function a(b, d, l) {
      var k = null;
      2 < arguments.length && (k = P(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, k);
    }
    function c(a, d, e) {
      a = $(a);
      d = J(Q(d, e));
      e = null;
      for (var k = 0, m = 0;;) {
        if (m < k) {
          var n = e.r(null, m);
          b.a(a, n);
          m += 1;
        } else {
          if (d = J(d)) {
            e = d, T(e) ? (d = F(e), m = G(e), e = d, k = R(d), d = m) : (d = M(e), b.a(a, d), d = O(e), e = null, k = 0), m = 0;
          } else {
            break;
          }
        }
      }
      return a;
    }
    a.i = 2;
    a.f = function(a) {
      var b = M(a);
      a = O(a);
      var d = M(a);
      a = N(a);
      return c(b, d, a);
    };
    a.e = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.e(b, e, P(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.i = 2;
  b.f = c.f;
  b.a = a;
  b.e = c.e;
  return b;
}();
function rf() {
  var a = Ia(sf), a = $(a);
  a.parentNode.removeChild(a);
}
var uf = function tf(b) {
  return(null == b ? 0 : b ? b.g & 8 || b.Qb || (b.g ? 0 : s(sa, b)) : s(sa, b)) ? se.a(" ", sc.a(tf, b)) : "string" === typeof b || b instanceof U ? V(b) : null;
};
function vf(a) {
  return Kd(qc, yc(function(a) {
    return a.parentNode;
  }, $(a)));
}
var wf = function() {
  function a(a, b) {
    var c = ze($($(a)).querySelectorAll(uf(b)));
    return function(a) {
      return 0 <= c.indexOf(a);
    };
  }
  function b(a) {
    return c.a(document, a);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.c = b;
  c.a = a;
  return c;
}(), xf = function() {
  function a(a, b, c) {
    var g = $(a);
    a = $(b);
    return M(Bc(wf.a(g, c), Kd(function(a) {
      return a !== g;
    }, vf(a))));
  }
  function b(a, b) {
    return M(Bc(wf.c(b), vf($(a))));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.a = b;
  c.b = a;
  return c;
}(), yf = Cc(jd, sc.a(function(a) {
  var b = S.b(a, 0, null);
  a = S.b(a, 1, null);
  return new Y(null, 2, 5, Z, [b, new kd([a, function(a) {
    return function(b) {
      var e = b.relatedTarget, f;
      f = b.Mb;
      f = r(f) ? f : b.currentTarget;
      r(e) && (e = $(e), f = $(f), e = r(f.contains) ? f.contains(e) : r(f.compareDocumentPosition) ? 0 != (f.compareDocumentPosition(e) & 16) : null);
      return r(e) ? null : a.c ? a.c(b) : a.call(null, b);
    };
  }])], null);
}, new q(null, 2, [me, be, ge, de], null)));
function zf(a, b, c) {
  return function(d) {
    var e = xf.b($(a), d.target, b);
    return r(e) ? (d.Mb = e, c.c ? c.c(d) : c.call(null, d)) : null;
  };
}
function Af(a) {
  a = $(a).Gb;
  return r(a) ? a : jd;
}
var Bf = function() {
  function a(a, d, e) {
    var f = null;
    2 < arguments.length && (f = P(Array.prototype.slice.call(arguments, 2), 0));
    return b.call(this, a, d, f);
  }
  function b(a, b, e) {
    a = $(a);
    return a.Gb = mc.b(b, Af(a), e);
  }
  a.i = 2;
  a.f = function(a) {
    var d = M(a);
    a = O(a);
    var e = M(a);
    a = N(a);
    return b(d, e, a);
  };
  a.e = b;
  return a;
}();
function Cf(a) {
  return Cb(a) ? Ld.a(function(a) {
    return $(M(a));
  }, N).call(null, a) : new Y(null, 2, 5, Z, [$(a), null], null);
}
var Df = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = P(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    if (!pc(R(b))) {
      throw Error([y("Assert failed: "), y(Td.e(P([Vb(new H(null, "even?", "even?", -1543640034, null), Vb(new H(null, "count", "count", -1545680184, null), new H(null, "type-fs", "type-fs", 1801297401, null)))], 0)))].join(""));
    }
    for (var e = Cf(a), f = S.b(e, 0, null), e = S.b(e, 1, null), g = J(Dc.a(2, b)), l = null, k = 0, m = 0;;) {
      if (m < k) {
        for (var n = l.r(null, m), t = S.b(n, 0, null), n = S.b(n, 1, null), t = J(vb.b(yf, t, new kd([t, qc]))), w = null, x = 0, K = 0;;) {
          if (K < x) {
            var L = w.r(null, K), X = S.b(L, 0, null), L = S.b(L, 1, null), L = (r(e) ? rc.b(zf, f, e) : qc).call(null, L.c ? L.c(n) : L.call(null, n));
            Bf.e(f, Fc, P([new Y(null, 3, 5, Z, [e, X, n], null), L], 0));
            r(f.addEventListener) ? f.addEventListener(V(X), L) : f.attachEvent(V(X), L);
            K += 1;
          } else {
            if (t = J(t)) {
              T(t) ? (x = F(t), t = G(t), w = x, x = R(x)) : (x = M(t), w = S.b(x, 0, null), x = S.b(x, 1, null), x = (r(e) ? rc.b(zf, f, e) : qc).call(null, x.c ? x.c(n) : x.call(null, n)), Bf.e(f, Fc, P([new Y(null, 3, 5, Z, [e, w, n], null), x], 0)), r(f.addEventListener) ? f.addEventListener(V(w), x) : f.attachEvent(V(w), x), t = O(t), w = null, x = 0), K = 0;
            } else {
              break;
            }
          }
        }
        m += 1;
      } else {
        if (g = J(g)) {
          if (T(g)) {
            k = F(g), g = G(g), l = k, k = R(k);
          } else {
            l = M(g);
            k = S.b(l, 0, null);
            l = S.b(l, 1, null);
            k = J(vb.b(yf, k, new kd([k, qc])));
            m = null;
            for (t = n = 0;;) {
              if (t < n) {
                x = m.r(null, t), w = S.b(x, 0, null), x = S.b(x, 1, null), x = (r(e) ? rc.b(zf, f, e) : qc).call(null, x.c ? x.c(l) : x.call(null, l)), Bf.e(f, Fc, P([new Y(null, 3, 5, Z, [e, w, l], null), x], 0)), r(f.addEventListener) ? f.addEventListener(V(w), x) : f.attachEvent(V(w), x), t += 1;
              } else {
                if (k = J(k)) {
                  T(k) ? (n = F(k), k = G(k), m = n, n = R(n)) : (n = M(k), m = S.b(n, 0, null), n = S.b(n, 1, null), n = (r(e) ? rc.b(zf, f, e) : qc).call(null, n.c ? n.c(l) : n.call(null, l)), Bf.e(f, Fc, P([new Y(null, 3, 5, Z, [e, m, l], null), n], 0)), r(f.addEventListener) ? f.addEventListener(V(m), n) : f.attachEvent(V(m), n), k = O(k), m = null, n = 0), t = 0;
                } else {
                  break;
                }
              }
            }
            g = O(g);
            l = null;
            k = 0;
          }
          m = 0;
        } else {
          break;
        }
      }
    }
    return a;
  }
  a.i = 1;
  a.f = function(a) {
    var d = M(a);
    a = N(a);
    return b(d, a);
  };
  a.e = b;
  return a;
}();
var Ef = Id([new q(null, 3, [ee, "Stasiuk", Yd, "Poland", oe, !0], null), new q(null, 3, [ee, "Libera", Yd, "Poland", oe, !0], null), new q(null, 3, [ee, "\u015awietlicki", Yd, "Poland", oe, !0], null), new q(null, 3, [ee, "Shakespeare", Yd, "Great Britain", oe, !1], null), new q(null, 3, [ee, "Cortazar", Yd, "Argentina", oe, !1], null), new q(null, 3, [ee, "Milne", Yd, "Great Britain", oe, !1], null), new q(null, 3, [ee, "Borges", Yd, "Argentina", oe, !1], null)]), Ff = Id([new q(null, 2, [he, "Opowie\u015bci o kronopiach i famach", 
qe, "Cortazar"], null), new q(null, 2, [he, "Madame", qe, "Libera"], null), new q(null, 2, [he, "Gra w klasy", qe, "Cortazar"], null), new q(null, 2, [he, "Dwana\u015bcie", qe, "\u015awietlicki"], null), new q(null, 2, [he, "Jad\u0105c do Babadag", qe, "Stasiuk"], null), new q(null, 2, [he, "Liryki loza\u0144skie", qe, "Libera"], null), new q(null, 2, [he, "Przez rzek\u0119", qe, "Stasiuk"], null)]), Gf = Id([new q(null, 2, [he, "Pami\u0119\u0107 Szekspira", qe, "Borges"], null), new q(null, 2, [he, 
"Ksi\u0119ga sn\u00f3w", qe, "Borges"], null), new q(null, 2, [he, "Chatka Puchatka", qe, "Milne"], null), new q(null, 2, [he, "Kubu\u015b Puchatek", qe, "Milne"], null), new q(null, 2, [he, "Zimne kraje", qe, "\u015awietlicki"], null), new q(null, 2, [he, "Sen nocy letniej", qe, "Shakespeare"], null), new q(null, 2, [he, "Kupiec wenecki", qe, "Shakespeare"], null)]);
function Hf(a, b) {
  var c = gf.c(1);
  Xe(function() {
    var d = function() {
      return function(a) {
        return function() {
          function b(c) {
            for (;;) {
              var d = a(c);
              if (!Yb(d, Zd)) {
                return d;
              }
            }
          }
          function c() {
            var a = [null, null, null, null, null, null];
            a[0] = d;
            a[1] = 1;
            return a;
          }
          var d = null, d = function(a) {
            switch(arguments.length) {
              case 0:
                return c.call(this);
              case 1:
                return b.call(this, a);
            }
            throw Error("Invalid arity: " + arguments.length);
          };
          d.n = c;
          d.c = b;
          return d;
        }();
      }(function(c) {
        var d = c[1];
        return 7 === d ? (d = c[2], d = b.c ? b.c(d) : b.call(null, d), c[5] = d, c[2] = null, c[1] = 2, Zd) : 6 === d ? (d = c[2], c[2] = d, c[1] = 3, Zd) : 5 === d ? (c[2] = null, c[1] = 6, Zd) : 4 === d ? Ie(c, a) : 3 === d ? (d = c[2], Je(c, d)) : 2 === d ? (c[1] = 4, Zd) : 1 === d ? (c[2] = null, c[1] = 2, Zd) : null;
      });
    }(), e = function() {
      var a = d.n ? d.n() : d.call(null);
      a[4] = c;
      return a;
    }();
    return He(e);
  });
}
function If(a) {
  a = Ib(a) ? mc.a(Dd, a) : a;
  var b = vb.a(a, he);
  a = document.createElement("li");
  a.className = "book";
  a.appendChild(function() {
    var a = document.createElement("h2");
    a.appendChild($(b));
    return a;
  }());
  return a;
}
function Jf(a) {
  var b = Ib(a) ? mc.a(Dd, a) : a;
  a = vb.a(b, oe);
  vb.a(b, Yd);
  var c = vb.a(b, ee), b = document.createElement("li");
  r([y(r(a) ? "alive " : null), y("writer")].join("")) && (b.className = [y(b.className), y(" "), y([y(r(a) ? "alive " : null), y("writer")].join(""))].join("").trim());
  b.appendChild(function() {
    var a = document.createElement("h2");
    a.className = "surname";
    a.appendChild($(c));
    return a;
  }());
  return b;
}
var Kf = document.body, Lf = gf.n(), Mf = gf.n();
Df.e(Kf, P([ne, function(a) {
  return jf.a(Lf, a);
}], 0));
var sf = Wd.c(null), Nf = Wd.c(!1), Of = Wd.c(null);
Hf(Lf, function(a) {
  if (r(Ia(sf))) {
    var b = a.clientX;
    a = a.clientY;
    var c = Ia(sf).clientHeight / 2, d = Ia(sf).clientWidth / 2;
    return xe.e(Ia(sf), P([le, [y(b - d), y("px")].join(""), ke, [y(a - c), y("px")].join("")], 0));
  }
  return null;
});
var Pf = ze(document.getElementsByClassName("done"))[0], Qf = ze(document.getElementsByClassName("left"))[0], Rf = R(Ff) + R(Gf);
Hf(Mf, function() {
  var a = R(ze(document.getElementsByClassName("book"))), b = Rf - a, c = $(Pf);
  c.innerHTML = "";
  qf.a(c, b);
  b = $(Qf);
  b.innerHTML = "";
  qf.a(b, a);
  return 0 === a ? alert("won!") : null;
});
jf.a(Mf, "");
for (var Sf = J(Ef), Tf = null, Uf = 0, Vf = 0;;) {
  if (Vf < Uf) {
    var Wf = Tf.r(null, Vf);
    qf.a(document.querySelector(uf(new Y(null, 2, 5, Z, [je, re], null))), function() {
      var a = Jf(Wf);
      return Df.e(a, P([ie, function(a, c, d, e, f, g) {
        return function() {
          return gb.a(Ia(Of), g.c ? g.c(ee) : g.call(null, ee)) ? (rf(), jf.a(Mf, "")) : null;
        };
      }(Sf, Tf, Uf, Vf, a, Wf)], 0));
    }());
    Vf += 1;
  } else {
    var Xf = J(Sf);
    if (Xf) {
      var Yf = Xf;
      if (T(Yf)) {
        var Zf = F(Yf), $f = G(Yf), ag = Zf, bg = R(Zf), Sf = $f, Tf = ag, Uf = bg
      } else {
        var cg = M(Yf);
        qf.a(document.querySelector(uf(new Y(null, 2, 5, Z, [je, re], null))), function() {
          var a = Jf(cg);
          return Df.e(a, P([ie, function(a, c, d, e, f, g) {
            return function() {
              return gb.a(Ia(Of), g.c ? g.c(ee) : g.call(null, ee)) ? (rf(), jf.a(Mf, "")) : null;
            };
          }(Sf, Tf, Uf, Vf, a, cg, Yf, Xf)], 0));
        }());
        Sf = O(Yf);
        Tf = null;
        Uf = 0;
      }
      Vf = 0;
    } else {
      break;
    }
  }
}
function dg(a) {
  for (var b = J(a), c = null, d = 0, e = 0;;) {
    if (e < d) {
      var f = c.r(null, e);
      qf.a(ze(document.getElementsByClassName("books-list"))[0], function() {
        var a = If(f);
        Df.e(Kf, P([ie, function(a, b, c, d, e) {
          return function() {
            ve.a(Kf, "moving");
            Xd(sf, null);
            Xd(Of, null);
            return r(Ia(Nf)) ? null : xe.e(e, P([$d, "static"], 0));
          };
        }(b, c, d, e, a, f)], 0));
        return Df.e(a, P([ae, function(a, b, c, d, e, f) {
          return function() {
            ue.a(Kf, "moving");
            xe.e(e, P([$d, "absolute", le, e.offsetLeft, ke, e.offsetTop], 0));
            Xd(sf, e);
            return Xd(Of, f.c ? f.c(qe) : f.call(null, qe));
          };
        }(b, c, d, e, a, f)], 0));
      }());
      e += 1;
    } else {
      var g = J(b);
      if (g) {
        var l = g;
        if (T(l)) {
          var k = F(l);
          a = G(l);
          var m = k, k = R(k), b = a, c = m, d = k;
        } else {
          f = M(l), qf.a(ze(document.getElementsByClassName("books-list"))[0], function() {
            var a = If(f);
            Df.e(Kf, P([ie, function(a, b, c, d, e) {
              return function() {
                ve.a(Kf, "moving");
                Xd(sf, null);
                Xd(Of, null);
                return r(Ia(Nf)) ? null : xe.e(e, P([$d, "static"], 0));
              };
            }(b, c, d, e, a, f, l, g)], 0));
            return Df.e(a, P([ae, function(a, b, c, d, e, f) {
              return function() {
                ue.a(Kf, "moving");
                xe.e(e, P([$d, "absolute", le, e.offsetLeft, ke, e.offsetTop], 0));
                Xd(sf, e);
                return Xd(Of, f.c ? f.c(qe) : f.call(null, qe));
              };
            }(b, c, d, e, a, f, l, g)], 0));
          }()), b = O(l), c = null, d = 0;
        }
        e = 0;
      } else {
        break;
      }
    }
  }
}
dg(Ff);
dg(Gf);

})();