(self.webpackChunk_sexxion_x_docs =
  self.webpackChunk_sexxion_x_docs || []).push([
  [99],
  {
    49707: function (A, S, a) {
      'use strict';
      a.d(S, {
        r: function () {
          return V;
        },
      });
      var e = a(77630),
        m = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        z = (x, D, Z) =>
          D in x
            ? m(x, D, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: Z,
              })
            : (x[D] = Z),
        Y = (x, D) => {
          for (var Z in D || (D = {})) j.call(D, Z) && z(x, Z, D[Z]);
          if (N) for (var Z of N(D)) h.call(D, Z) && z(x, Z, D[Z]);
          return x;
        };
      const V = (x) =>
        e.createElement(
          'svg',
          Y({ viewBox: '64 64 896 896' }, x),
          e.createElement('path', {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          }),
        );
      var U =
        'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODg0IDI1NmgtNzVjLTUuMSAwLTkuOSAyLjUtMTIuOSA2LjZMNTEyIDY1NC4yIDIyNy45IDI2Mi42Yy0zLTQuMS03LjgtNi42LTEyLjktNi42aC03NWMtNi41IDAtMTAuMyA3LjQtNi41IDEyLjdsMzUyLjYgNDg2LjFjMTIuOCAxNy42IDM5IDE3LjYgNTEuNyAwbDM1Mi42LTQ4Ni4xYzMuOS01LjMuMS0xMi43LTYuNC0xMi43eiIvPjwvc3ZnPg==';
    },
    41360: function (A, S, a) {
      'use strict';
      a.r(S),
        a.d(S, {
          default: function () {
            return n;
          },
        });
      var e = a(77630),
        m = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        z = (t, r, u) =>
          r in t
            ? m(t, r, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: u,
              })
            : (t[r] = u),
        Y = (t, r) => {
          for (var u in r || (r = {})) j.call(r, u) && z(t, u, r[u]);
          if (N) for (var u of N(r)) h.call(r, u) && z(t, u, r[u]);
          return t;
        };
      const V = (t) =>
        e.createElement(
          'svg',
          Y({ viewBox: '64 64 896 896' }, t),
          e.createElement('path', {
            d: 'M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z',
          }),
        );
      var U =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMTIwIDIzMGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em0wIDQyNGg0OTZjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LThIMTIwYy00LjQgMC04IDMuNi04IDh2NTZjMCA0LjQgMy42IDggOCA4em03ODQgMTQwSDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6bTAtNDI0SDEyMGMtNC40IDAtOCAzLjYtOCA4djU2YzAgNC40IDMuNiA4IDggOGg3ODRjNC40IDAgOC0zLjYgOC04di01NmMwLTQuNC0zLjYtOC04LTh6Ii8+PC9zdmc+',
        x = function (t, r, u, I) {
          function O(o) {
            return o instanceof u
              ? o
              : new u(function (c) {
                  c(o);
                });
          }
          return new (u || (u = Promise))(function (o, c) {
            function i(w) {
              try {
                k(I.next(w));
              } catch (F) {
                c(F);
              }
            }
            function H(w) {
              try {
                k(I.throw(w));
              } catch (F) {
                c(F);
              }
            }
            function k(w) {
              w.done ? o(w.value) : O(w.value).then(i, H);
            }
            k((I = I.apply(t, r || [])).next());
          });
        };
      function D(t) {
        let r = 0,
          u = 0,
          I = t;
        do
          (r += I.offsetTop || 0),
            (u += I.offsetLeft || 0),
            (I = I.offsetParent);
        while (I);
        return { top: r, left: u };
      }
      class Z {
        constructor(r) {
          this.element = r;
        }
        getHorizontalScroll() {
          return this.element.scrollLeft;
        }
        getVerticalScroll() {
          return this.element.scrollTop;
        }
        getMaxHorizontalScroll() {
          return this.element.scrollWidth - this.element.clientWidth;
        }
        getMaxVerticalScroll() {
          return this.element.scrollHeight - this.element.clientHeight;
        }
        getHorizontalElementScrollOffset(r, u) {
          return D(r).left - D(u).left;
        }
        getVerticalElementScrollOffset(r, u) {
          return D(r).top - D(u).top;
        }
        scrollTo(r, u) {
          (this.element.scrollLeft = r), (this.element.scrollTop = u);
        }
      }
      class G {
        constructor() {
          this.element = window;
        }
        getHorizontalScroll() {
          return window.scrollX || document.documentElement.scrollLeft;
        }
        getVerticalScroll() {
          return window.scrollY || document.documentElement.scrollTop;
        }
        getMaxHorizontalScroll() {
          return (
            Math.max(
              document.body.scrollWidth,
              document.documentElement.scrollWidth,
              document.body.offsetWidth,
              document.documentElement.offsetWidth,
              document.body.clientWidth,
              document.documentElement.clientWidth,
            ) - window.innerWidth
          );
        }
        getMaxVerticalScroll() {
          return (
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight,
            ) - window.innerHeight
          );
        }
        getHorizontalElementScrollOffset(r) {
          return (
            (window.scrollX || document.documentElement.scrollLeft) +
            r.getBoundingClientRect().left
          );
        }
        getVerticalElementScrollOffset(r) {
          return (
            (window.scrollY || document.documentElement.scrollTop) +
            r.getBoundingClientRect().top
          );
        }
        scrollTo(r, u) {
          window.scrollTo(r, u);
        }
      }
      const M = {
          elements: [],
          cancelMethods: [],
          add: (t, r) => {
            M.elements.push(t), M.cancelMethods.push(r);
          },
          remove: (t, r) => {
            const u = M.elements.indexOf(t);
            u > -1 &&
              (r && M.cancelMethods[u](),
              M.elements.splice(u, 1),
              M.cancelMethods.splice(u, 1));
          },
        },
        y = typeof window != 'undefined',
        l = {
          cancelOnUserAction: !0,
          easing: (t) => --t * t * t + 1,
          elementToScroll: y ? window : null,
          horizontalOffset: 0,
          maxDuration: 3e3,
          minDuration: 250,
          speed: 500,
          verticalOffset: 0,
        };
      function d(t, r = {}) {
        return x(this, void 0, void 0, function* () {
          if (y) {
            if (!window.Promise)
              throw "Browser doesn't support Promises, and animated-scroll-to depends on it, please provide a polyfill.";
          } else
            return new Promise((ie) => {
              ie(!1);
            });
          let u,
            I,
            O,
            o = Object.assign(Object.assign({}, l), r);
          const c = o.elementToScroll === window,
            i = !!o.elementToScroll.nodeName;
          if (!c && !i)
            throw 'Element to scroll needs to be either window or DOM element.';
          const H = c ? document.documentElement : o.elementToScroll;
          getComputedStyle(H).getPropertyValue('scroll-behavior') ===
            'smooth' &&
            console.warn(
              `${H.tagName} has "scroll-behavior: smooth" which can mess up with animated-scroll-to's animations`,
            );
          const w = c ? new G() : new Z(o.elementToScroll);
          if (t instanceof Element) {
            if (
              ((O = t),
              i &&
                (!o.elementToScroll.contains(O) ||
                  o.elementToScroll.isSameNode(O)))
            )
              throw 'options.elementToScroll has to be a parent of scrollToElement';
            (u = w.getHorizontalElementScrollOffset(O, o.elementToScroll)),
              (I = w.getVerticalElementScrollOffset(O, o.elementToScroll));
          } else if (typeof t == 'number')
            (u = w.getHorizontalScroll()), (I = t);
          else if (Array.isArray(t) && t.length === 2)
            (u = t[0] === null ? w.getHorizontalScroll() : t[0]),
              (I = t[1] === null ? w.getVerticalScroll() : t[1]);
          else
            throw `Wrong function signature. Check documentation.
Available method signatures are:
  animateScrollTo(y:number, options)
  animateScrollTo([x:number | null, y:number | null], options)
  animateScrollTo(scrollToElement:Element, options)`;
          (u += o.horizontalOffset), (I += o.verticalOffset);
          const F = w.getMaxHorizontalScroll(),
            te = w.getHorizontalScroll();
          u > F && (u = F);
          const $ = u - te,
            J = w.getMaxVerticalScroll(),
            b = w.getVerticalScroll();
          I > J && (I = J);
          const re = I - b,
            ee = Math.abs(Math.round(($ / 1e3) * o.speed)),
            ne = Math.abs(Math.round((re / 1e3) * o.speed));
          let ue = ee > ne ? ee : ne;
          return (
            ue < o.minDuration
              ? (ue = o.minDuration)
              : ue > o.maxDuration && (ue = o.maxDuration),
            new Promise((ie, de) => {
              $ === 0 && re === 0 && ie(!0), M.remove(w.element, !0);
              let me;
              const ge = () => {
                Me(), cancelAnimationFrame(me), ie(!1);
              };
              M.add(w.element, ge);
              const ye = (fe) => fe.preventDefault(),
                oe = o.cancelOnUserAction ? ge : ye,
                se = o.cancelOnUserAction ? { passive: !0 } : { passive: !1 },
                ce = ['wheel', 'touchstart', 'keydown', 'mousedown'],
                Me = () => {
                  ce.forEach((fe) => {
                    w.element.removeEventListener(fe, oe, se);
                  });
                };
              ce.forEach((fe) => {
                w.element.addEventListener(fe, oe, se);
              });
              const Ae = Date.now(),
                Ne = () => {
                  var fe = Date.now() - Ae,
                    Le = fe / ue;
                  const ve = Math.round(te + $ * o.easing(Le)),
                    g = Math.round(b + re * o.easing(Le));
                  fe < ue && (ve !== u || g !== I)
                    ? (w.scrollTo(ve, g), (me = requestAnimationFrame(Ne)))
                    : (w.scrollTo(u, I),
                      cancelAnimationFrame(me),
                      Me(),
                      M.remove(w.element, !1),
                      ie(!0));
                };
              me = requestAnimationFrame(Ne);
            })
          );
        });
      }
      var L = d,
        E = a(31365),
        Q = a(85813),
        B = a(56585),
        P = a(90095),
        W = a(68547),
        R = a(27538),
        q = a(74147),
        v = a(16234),
        T = a(67586);
      function C(t, r) {
        return ae(t) || le(t, r) || K(t, r) || X();
      }
      function X() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function K(t, r) {
        if (t) {
          if (typeof t == 'string') return _(t, r);
          var u = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (u === 'Object' && t.constructor && (u = t.constructor.name),
            u === 'Map' || u === 'Set')
          )
            return Array.from(t);
          if (
            u === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u)
          )
            return _(t, r);
        }
      }
      function _(t, r) {
        (r == null || r > t.length) && (r = t.length);
        for (var u = 0, I = new Array(r); u < r; u++) I[u] = t[u];
        return I;
      }
      function le(t, r) {
        var u =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (u != null) {
          var I,
            O,
            o,
            c,
            i = [],
            H = !0,
            k = !1;
          try {
            if (((o = (u = u.call(t)).next), r === 0)) {
              if (Object(u) !== u) return;
              H = !1;
            } else
              for (
                ;
                !(H = (I = o.call(u)).done) &&
                (i.push(I.value), i.length !== r);
                H = !0
              );
          } catch (w) {
            (k = !0), (O = w);
          } finally {
            try {
              if (!H && u.return != null && ((c = u.return()), Object(c) !== c))
                return;
            } finally {
              if (k) throw O;
            }
          }
          return i;
        }
      }
      function ae(t) {
        if (Array.isArray(t)) return t;
      }
      var p = function () {
          var r = (0, E.YB)(),
            u = (0, E.pC)(),
            I = (0, E.tx)(),
            O = (0, E.TH)(),
            o = O.hash,
            c = O.pathname,
            i = (0, E.WF)(),
            H = i.loading,
            k = i.hostname,
            w = (0, e.useState)(!1),
            F = C(w, 2),
            te = F[0],
            $ = F[1],
            J = (0, E.eL)(),
            b = J.frontmatter,
            re = b.sidebar !== !1 && (I == null ? void 0 : I.length) > 0;
          return (
            (0, e.useEffect)(
              function () {
                var ee = o.replace('#', '');
                ee &&
                  setTimeout(function () {
                    var ne = document.getElementById(decodeURIComponent(ee));
                    ne && L(ne.offsetTop - 80, { maxDuration: 300 });
                  }, 1);
              },
              [H, o],
            ),
            e.createElement(
              'div',
              {
                className: 'dumi-default-doc-layout',
                'data-mobile-sidebar-active': te || void 0,
                onClick: function () {
                  return $(!1);
                },
              },
              e.createElement(
                E.ql,
                null,
                e.createElement('html', { lang: r.locale.replace(/-.+$/, '') }),
                b.title && e.createElement('title', null, b.title),
                b.title &&
                  e.createElement('meta', {
                    property: 'og:title',
                    content: b.title,
                  }),
                b.description &&
                  e.createElement('meta', {
                    name: 'description',
                    content: b.description,
                  }),
                b.description &&
                  e.createElement('meta', {
                    property: 'og:description',
                    content: b.description,
                  }),
                b.keywords &&
                  e.createElement('meta', {
                    name: 'keywords',
                    content: b.keywords.join(','),
                  }),
                b.keywords &&
                  b.keywords.map(function (ee) {
                    return e.createElement('meta', {
                      key: ee,
                      property: 'article:tag',
                      content: ee,
                    });
                  }),
                k && e.createElement('link', { rel: 'canonical', href: k + c }),
              ),
              e.createElement(R.Z, null),
              e.createElement(q.Z, null),
              e.createElement(P.Z, null),
              re &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-doc-layout-mobile-bar' },
                  e.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'dumi-default-sidebar-btn',
                      onClick: function (ne) {
                        ne.stopPropagation(),
                          $(function (ue) {
                            return !ue;
                          });
                      },
                    },
                    e.createElement(V, null),
                    r.formatMessage({ id: 'layout.sidebar.btn' }),
                  ),
                ),
              e.createElement(
                'main',
                null,
                re && e.createElement(v.Z, null),
                e.createElement(
                  Q.Z,
                  null,
                  e.createElement('article', null, u),
                  e.createElement(B.Z, null),
                  e.createElement(W.Z, null),
                ),
                b.toc === 'content' &&
                  e.createElement(
                    'div',
                    { className: 'dumi-default-doc-layout-toc-wrapper' },
                    e.createElement('h4', null, 'TABLE OF CONTENTS'),
                    e.createElement(T.Z, null),
                  ),
              ),
            )
          );
        },
        n = p;
    },
    20587: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return M;
        },
      });
      var e = a(31365),
        m = a(77630);
      function N(y, l) {
        return V(y) || Y(y, l) || h(y, l) || j();
      }
      function j() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function h(y, l) {
        if (y) {
          if (typeof y == 'string') return z(y, l);
          var d = Object.prototype.toString.call(y).slice(8, -1);
          if (
            (d === 'Object' && y.constructor && (d = y.constructor.name),
            d === 'Map' || d === 'Set')
          )
            return Array.from(y);
          if (
            d === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d)
          )
            return z(y, l);
        }
      }
      function z(y, l) {
        (l == null || l > y.length) && (l = y.length);
        for (var d = 0, L = new Array(l); d < l; d++) L[d] = y[d];
        return L;
      }
      function Y(y, l) {
        var d =
          y == null
            ? null
            : (typeof Symbol != 'undefined' && y[Symbol.iterator]) ||
              y['@@iterator'];
        if (d != null) {
          var L,
            E,
            Q,
            B,
            P = [],
            W = !0,
            R = !1;
          try {
            if (((Q = (d = d.call(y)).next), l === 0)) {
              if (Object(d) !== d) return;
              W = !1;
            } else
              for (
                ;
                !(W = (L = Q.call(d)).done) &&
                (P.push(L.value), P.length !== l);
                W = !0
              );
          } catch (q) {
            (R = !0), (E = q);
          } finally {
            try {
              if (!W && d.return != null && ((B = d.return()), Object(B) !== B))
                return;
            } finally {
              if (R) throw E;
            }
          }
          return P;
        }
      }
      function V(y) {
        if (Array.isArray(y)) return y;
      }
      var U = function () {
          return m.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            m.createElement('path', {
              d: 'M8.218 1.455c3.527.109 6.327 3.018 6.327 6.545 0 3.6-2.945 6.545-6.545 6.545a6.562 6.562 0 0 1-6.036-4h.218c3.6 0 6.545-2.945 6.545-6.545 0-.91-.182-1.745-.509-2.545m0-1.455c-.473 0-.909.218-1.2.618-.29.4-.327.946-.145 1.382.254.655.4 1.31.4 2 0 2.8-2.291 5.09-5.091 5.09h-.218c-.473 0-.91.22-1.2.62-.291.4-.328.945-.146 1.38C1.891 14.074 4.764 16 8 16c4.4 0 8-3.6 8-8a7.972 7.972 0 0 0-7.745-8h-.037Z',
            }),
          );
        },
        x = function () {
          return m.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            m.createElement('path', {
              d: 'M8 13a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1ZM8 3a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1Zm7 4a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2h1ZM3 8a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h1a1 1 0 0 1 1 1Zm9.95 3.536.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414Zm-9.9-7.072-.707-.707a1 1 0 0 1 1.414-1.414l.707.707A1 1 0 0 1 3.05 4.464Zm9.9 0a1 1 0 0 1-1.414-1.414l.707-.707a1 1 0 0 1 1.414 1.414l-.707.707Zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707ZM8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z',
            }),
          );
        },
        D = function () {
          return m.createElement(
            'svg',
            { viewBox: '0 0 16 16' },
            m.createElement('path', {
              d: 'M14.595 8a6.595 6.595 0 1 1-13.19 0 6.595 6.595 0 0 1 13.19 0ZM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0Zm0 2.014v11.972A5.986 5.986 0 0 0 8 2.014Z',
            }),
          );
        },
        Z = { light: x, dark: U, auto: D },
        G = function () {
          var l = (0, e.WF)(),
            d = l.themeConfig.prefersColor.default,
            L = (0, e.YB)(),
            E = (0, e.OI)(),
            Q = N(E, 3),
            B = Q[1],
            P = B === void 0 ? d : B,
            W = Q[2],
            R = Z[P];
          return m.createElement(
            'span',
            {
              className: 'dumi-default-color-switch',
              'data-dumi-tooltip': L.formatMessage({
                id: 'header.color.mode.'.concat(P),
              }),
              'data-dumi-tooltip-bottom': !0,
            },
            R && m.createElement(R, null),
            m.createElement(
              'select',
              {
                onChange: function (v) {
                  return W(v.target.value);
                },
                value: P,
              },
              ['light', 'dark', 'auto'].map(function (q) {
                return m.createElement(
                  'option',
                  { value: q, key: q },
                  L.formatMessage({ id: 'header.color.mode.'.concat(q) }),
                );
              }),
            ),
          );
        },
        M = G;
    },
    71957: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return p;
        },
      });
      var e = a(77630),
        m = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        z = (n, t, r) =>
          t in n
            ? m(n, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (n[t] = r),
        Y = (n, t) => {
          for (var r in t || (t = {})) j.call(t, r) && z(n, r, t[r]);
          if (N) for (var r of N(t)) h.call(t, r) && z(n, r, t[r]);
          return n;
        };
      const V = (n) =>
        e.createElement(
          'svg',
          Y({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 0 0 0 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
          }),
        );
      var U =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODcyIDQ3NEgyODYuOWwzNTAuMi0zMDRjNS42LTQuOSAyLjItMTQtNS4yLTE0aC04OC41Yy0zLjkgMC03LjYgMS40LTEwLjUgMy45TDE1NSA0ODcuOGEzMS45NiAzMS45NiAwIDAgMCAwIDQ4LjNMNTM1LjEgODY2YzEuNSAxLjMgMy4zIDIgNS4yIDJoOTEuNWM3LjQgMCAxMC44LTkuMiA1LjItMTRMMjg2LjkgNTUwSDg3MmM0LjQgMCA4LTMuNiA4LTh2LTYwYzAtNC40LTMuNi04LTgtOHoiLz48L3N2Zz4=',
        x = Object.defineProperty,
        D = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        M = (n, t, r) =>
          t in n
            ? x(n, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (n[t] = r),
        y = (n, t) => {
          for (var r in t || (t = {})) Z.call(t, r) && M(n, r, t[r]);
          if (D) for (var r of D(t)) G.call(t, r) && M(n, r, t[r]);
          return n;
        };
      const l = (n) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          }),
          e.createElement('path', {
            d: 'M686.7 638.6 544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
          }),
        );
      var d =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTEyIDY0QzI2NC42IDY0IDY0IDI2NC42IDY0IDUxMnMyMDAuNiA0NDggNDQ4IDQ0OCA0NDgtMjAwLjYgNDQ4LTQ0OFM3NTkuNCA2NCA1MTIgNjR6bTAgODIwYy0yMDUuNCAwLTM3Mi0xNjYuNi0zNzItMzcyczE2Ni42LTM3MiAzNzItMzcyIDM3MiAxNjYuNiAzNzIgMzcyLTE2Ni42IDM3Mi0zNzIgMzcyeiIvPjxwYXRoIGQ9Ik02ODYuNyA2MzguNiA1NDQuMSA1MzUuNVYyODhjMC00LjQtMy42LTgtOC04SDQ4OGMtNC40IDAtOCAzLjYtOCA4djI3NS40YzAgMi42IDEuMiA1IDMuMyA2LjVsMTY1LjQgMTIwLjZjMy42IDIuNiA4LjYgMS44IDExLjItMS43bDI4LjYtMzljMi42LTMuNyAxLjgtOC43LTEuOC0xMS4yeiIvPjwvc3ZnPg==',
        L = Object.defineProperty,
        E = Object.getOwnPropertySymbols,
        Q = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        P = (n, t, r) =>
          t in n
            ? L(n, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (n[t] = r),
        W = (n, t) => {
          for (var r in t || (t = {})) Q.call(t, r) && P(n, r, t[r]);
          if (E) for (var r of E(t)) B.call(t, r) && P(n, r, t[r]);
          return n;
        };
      const R = (n) =>
        e.createElement(
          'svg',
          W({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z',
          }),
        );
      var q =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNMjU3LjcgNzUyYzIgMCA0LS4yIDYtLjVMNDMxLjkgNzIyYzItLjQgMy45LTEuMyA1LjMtMi44bDQyMy45LTQyMy45YTkuOTYgOS45NiAwIDAgMCAwLTE0LjFMNjk0LjkgMTE0LjljLTEuOS0xLjktNC40LTIuOS03LjEtMi45cy01LjIgMS03LjEgMi45TDI1Ni44IDUzOC44Yy0xLjUgMS41LTIuNCAzLjMtMi44IDUuM2wtMjkuNSAxNjguMmEzMy41IDMzLjUgMCAwIDAgOS40IDI5LjhjNi42IDYuNCAxNC45IDkuOSAyMy44IDkuOXptNjcuNC0xNzQuNEw2ODcuOCAyMTVsNzMuMyA3My4zLTM2Mi43IDM2Mi42LTg4LjkgMTUuNyAxNS42LTg5ek04ODAgODM2SDE0NGMtMTcuNyAwLTMyIDE0LjMtMzIgMzJ2MzZjMCA0LjQgMy42IDggOCA4aDc4NGM0LjQgMCA4LTMuNiA4LTh2LTM2YzAtMTcuNy0xNC4zLTMyLTMyLTMyeiIvPjwvc3ZnPg==',
        v = a(31365);
      function T(n, t) {
        return le(n) || _(n, t) || X(n, t) || C();
      }
      function C() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function X(n, t) {
        if (n) {
          if (typeof n == 'string') return K(n, t);
          var r = Object.prototype.toString.call(n).slice(8, -1);
          if (
            (r === 'Object' && n.constructor && (r = n.constructor.name),
            r === 'Map' || r === 'Set')
          )
            return Array.from(n);
          if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return K(n, t);
        }
      }
      function K(n, t) {
        (t == null || t > n.length) && (t = n.length);
        for (var r = 0, u = new Array(t); r < t; r++) u[r] = n[r];
        return u;
      }
      function _(n, t) {
        var r =
          n == null
            ? null
            : (typeof Symbol != 'undefined' && n[Symbol.iterator]) ||
              n['@@iterator'];
        if (r != null) {
          var u,
            I,
            O,
            o,
            c = [],
            i = !0,
            H = !1;
          try {
            if (((O = (r = r.call(n)).next), t === 0)) {
              if (Object(r) !== r) return;
              i = !1;
            } else
              for (
                ;
                !(i = (u = O.call(r)).done) &&
                (c.push(u.value), c.length !== t);
                i = !0
              );
          } catch (k) {
            (H = !0), (I = k);
          } finally {
            try {
              if (!i && r.return != null && ((o = r.return()), Object(o) !== o))
                return;
            } finally {
              if (H) throw I;
            }
          }
          return c;
        }
      }
      function le(n) {
        if (Array.isArray(n)) return n;
      }
      var ae = function () {
          var t = (0, v.TH)(),
            r = t.pathname,
            u = (0, v.tx)(),
            I = (0, v.WF)(),
            O = I.themeConfig,
            o = (0, v.eL)(),
            c = o.frontmatter,
            i = (0, v.YB)(),
            H = (0, e.useState)(void 0),
            k = T(H, 2),
            w = k[0],
            F = k[1],
            te = (0, e.useState)(void 0),
            $ = T(te, 2),
            J = $[0],
            b = $[1],
            re = (0, e.useState)(''),
            ee = T(re, 2),
            ne = ee[0],
            ue = ee[1],
            ie = (0, e.useState)(''),
            de = T(ie, 2),
            me = de[0],
            ge = de[1],
            ye = O.editLink && c.filename,
            oe = O.lastUpdated && c.lastUpdated;
          return (
            (0, e.useLayoutEffect)(
              function () {
                if (u) {
                  var se = u.reduce(function (Me, Ae) {
                      return Me.concat(Ae.children);
                    }, []),
                    ce = se.findIndex(function (Me) {
                      return Me.link === r;
                    });
                  F(se[ce - 1]), b(se[ce + 1]);
                }
              },
              [r, u],
            ),
            (0, e.useLayoutEffect)(
              function () {
                oe &&
                  (ue(new Date(c.lastUpdated).toISOString()),
                  ge(
                    new Intl.DateTimeFormat(void 0, {
                      dateStyle: 'short',
                      timeStyle: 'short',
                    }).format(c.lastUpdated),
                  ));
              },
              [oe],
            ),
            e.createElement(
              'footer',
              { className: 'dumi-default-content-footer' },
              e.createElement(
                'dl',
                null,
                oe &&
                  e.createElement(
                    'dd',
                    null,
                    e.createElement(l, null),
                    e.createElement(v._H, {
                      id: 'content.footer.last.updated',
                    }),
                    e.createElement('time', { dateTime: ne }, me),
                  ),
                ye &&
                  e.createElement(
                    'dd',
                    null,
                    e.createElement(
                      'a',
                      {
                        target: '_blank',
                        href: ''.concat(
                          i.formatMessage(
                            { id: '$internal.edit.link' },
                            { filename: c.filename },
                          ),
                        ),
                        rel: 'noreferrer',
                      },
                      e.createElement(R, null),
                      e.createElement(v._H, {
                        id: 'content.footer.actions.edit',
                      }),
                    ),
                  ),
              ),
              e.createElement(
                'nav',
                null,
                w &&
                  e.createElement(
                    v.rU,
                    { to: w.link, 'data-prev': !0 },
                    e.createElement(
                      'small',
                      null,
                      e.createElement(V, null),
                      e.createElement(v._H, {
                        id: 'content.footer.actions.previous',
                      }),
                    ),
                    w.title,
                  ),
                J &&
                  e.createElement(
                    v.rU,
                    { to: J.link, 'data-next': !0 },
                    e.createElement(
                      'small',
                      null,
                      e.createElement(v._H, {
                        id: 'content.footer.actions.next',
                      }),
                      e.createElement(V, null),
                    ),
                    J.title,
                  ),
              ),
            )
          );
        },
        p = ae;
    },
    62082: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return j;
        },
      });
      var e = a(31365),
        m = a(77630),
        N = function (z) {
          var Y = (0, e.tx)(),
            V = (0, e.WF)(),
            U = V.themeConfig,
            x = (0, e.eL)(),
            D = x.frontmatter;
          return m.createElement(
            'div',
            {
              className: 'dumi-default-content',
              'data-no-sidebar': !Y || D.sidebar === !1 || void 0,
              'data-no-footer': U.footer === !1 || void 0,
            },
            z.children,
          );
        },
        j = N;
    },
    47206: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return j;
        },
      });
      var e = a(31365),
        m = a(77630),
        N = function () {
          var z,
            Y = (0, e.eL)(),
            V = Y.frontmatter;
          return !((z = V.features) === null || z === void 0) && z.length
            ? m.createElement(
                'div',
                {
                  className: 'dumi-default-features',
                  'data-cols':
                    [3, 2].find(function (U) {
                      return V.features.length % U === 0;
                    }) || 3,
                },
                V.features.map(function (U) {
                  var x = U.title,
                    D = U.description,
                    Z = U.emoji,
                    G = U.link,
                    M;
                  return (
                    G &&
                      (M = /^(\w+:)\/\/|^(mailto|tel):/.test(G)
                        ? m.createElement(
                            'a',
                            { href: G, target: '_blank', rel: 'noreferrer' },
                            x,
                          )
                        : m.createElement(e.rU, { to: G }, x)),
                    m.createElement(
                      'div',
                      { key: x, className: 'dumi-default-features-item' },
                      Z && m.createElement('i', null, Z),
                      x && m.createElement('h3', null, M || x),
                      D &&
                        m.createElement('p', {
                          dangerouslySetInnerHTML: { __html: D },
                        }),
                    )
                  );
                }),
              )
            : null;
        },
        j = N;
    },
    69421: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return j;
        },
      });
      var e = a(31365),
        m = a(77630),
        N = function () {
          var z = (0, e.WF)(),
            Y = z.themeConfig;
          return Y.footer
            ? m.createElement('div', {
                className: 'dumi-default-footer',
                dangerouslySetInnerHTML: { __html: Y.footer },
              })
            : null;
        },
        j = N;
    },
    31397: function (A, S, a) {
      'use strict';
      var e = a(77630),
        m = function () {
          return e.createElement(e.Fragment, null);
        };
      S.Z = m;
    },
    45424: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return p;
        },
      });
      var e = a(77630),
        m = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        z = (n, t, r) =>
          t in n
            ? m(n, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (n[t] = r),
        Y = (n, t) => {
          for (var r in t || (t = {})) j.call(t, r) && z(n, r, t[r]);
          if (N) for (var r of N(t)) h.call(t, r) && z(n, r, t[r]);
          return n;
        };
      const V = (n) =>
        e.createElement(
          'svg',
          Y({ fillRule: 'evenodd', viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 0 1 0 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 0 1 0 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 0 1-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 0 1-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7a.169.169 0 0 1-.06-.07.12.12 0 0 1 0-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7a.199.199 0 0 1-.06-.09.12.12 0 0 1 0-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 0 1 .07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 0 1 .07 0z',
          }),
        );
      var U =
          'data:image/svg+xml;base64,PHN2ZyBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHZpZXdCb3g9IjY0IDY0IDg5NiA4OTYiPjxwYXRoIGQ9Ik03OTkuODYgMTY2LjMxYy4wMiAwIC4wNC4wMi4wOC4wNmw1Ny42OSA1Ny43Yy4wNC4wMy4wNS4wNS4wNi4wOGEuMTIuMTIgMCAwIDEgMCAuMDZjMCAuMDMtLjAyLjA1LS4wNi4wOUw1NjkuOTMgNTEybDI4Ny43IDI4Ny43Yy4wNC4wNC4wNS4wNi4wNi4wOWEuMTIuMTIgMCAwIDEgMCAuMDdjMCAuMDItLjAyLjA0LS4wNi4wOGwtNTcuNyA1Ny42OWMtLjAzLjA0LS4wNS4wNS0uMDcuMDZhLjEyLjEyIDAgMCAxLS4wNyAwYy0uMDMgMC0uMDUtLjAyLS4wOS0uMDZMNTEyIDU2OS45M2wtMjg3LjcgMjg3LjdjLS4wNC4wNC0uMDYuMDUtLjA5LjA2YS4xMi4xMiAwIDAgMS0uMDcgMGMtLjAyIDAtLjA0LS4wMi0uMDgtLjA2bC01Ny42OS01Ny43YS4xNjkuMTY5IDAgMCAxLS4wNi0uMDcuMTIuMTIgMCAwIDEgMC0uMDdjMC0uMDMuMDItLjA1LjA2LS4wOUw0NTQuMDcgNTEybC0yODcuNy0yODcuN2EuMTk5LjE5OSAwIDAgMS0uMDYtLjA5LjEyLjEyIDAgMCAxIDAtLjA3YzAtLjAyLjAyLS4wNC4wNi0uMDhsNTcuNy01Ny42OWMuMDMtLjA0LjA1LS4wNS4wNy0uMDZhLjEyLjEyIDAgMCAxIC4wNyAwYy4wMyAwIC4wNS4wMi4wOS4wNkw1MTIgNDU0LjA3bDI4Ny43LTI4Ny43Yy4wNC0uMDQuMDYtLjA1LjA5LS4wNmEuMTIuMTIgMCAwIDEgLjA3IDB6Ii8+PC9zdmc+',
        x = Object.defineProperty,
        D = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        M = (n, t, r) =>
          t in n
            ? x(n, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (n[t] = r),
        y = (n, t) => {
          for (var r in t || (t = {})) Z.call(t, r) && M(n, r, t[r]);
          if (D) for (var r of D(t)) G.call(t, r) && M(n, r, t[r]);
          return n;
        };
      const l = (n) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, n),
          e.createElement('path', {
            d: 'M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z',
          }),
        );
      var d =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA0IDE2MEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wIDYyNEgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04em0wLTMxMkgxMjBjLTQuNCAwLTggMy42LTggOHY2NGMwIDQuNCAzLjYgOCA4IDhoNzg0YzQuNCAwIDgtMy42IDgtOHYtNjRjMC00LjQtMy42LTgtOC04eiIvPjwvc3ZnPg==',
        L = a(31365),
        E = a(46217),
        Q = a(93367),
        B = a(55545),
        P = a(4470),
        W = a(96009),
        R = a(78801),
        q = a(99868),
        v = a(25136);
      function T(n, t) {
        return le(n) || _(n, t) || X(n, t) || C();
      }
      function C() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function X(n, t) {
        if (n) {
          if (typeof n == 'string') return K(n, t);
          var r = Object.prototype.toString.call(n).slice(8, -1);
          if (
            (r === 'Object' && n.constructor && (r = n.constructor.name),
            r === 'Map' || r === 'Set')
          )
            return Array.from(n);
          if (
            r === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
          )
            return K(n, t);
        }
      }
      function K(n, t) {
        (t == null || t > n.length) && (t = n.length);
        for (var r = 0, u = new Array(t); r < t; r++) u[r] = n[r];
        return u;
      }
      function _(n, t) {
        var r =
          n == null
            ? null
            : (typeof Symbol != 'undefined' && n[Symbol.iterator]) ||
              n['@@iterator'];
        if (r != null) {
          var u,
            I,
            O,
            o,
            c = [],
            i = !0,
            H = !1;
          try {
            if (((O = (r = r.call(n)).next), t === 0)) {
              if (Object(r) !== r) return;
              i = !1;
            } else
              for (
                ;
                !(i = (u = O.call(r)).done) &&
                (c.push(u.value), c.length !== t);
                i = !0
              );
          } catch (k) {
            (H = !0), (I = k);
          } finally {
            try {
              if (!i && r.return != null && ((o = r.return()), Object(o) !== o))
                return;
            } finally {
              if (H) throw I;
            }
          }
          return c;
        }
      }
      function le(n) {
        if (Array.isArray(n)) return n;
      }
      var ae = function () {
          var t = (0, L.eL)(),
            r = t.frontmatter,
            u = (0, e.useState)(!1),
            I = T(u, 2),
            O = I[0],
            o = I[1],
            c = (0, L.WF)(),
            i = c.themeConfig,
            H = (0, e.useMemo)(
              function () {
                return i.socialLinks
                  ? Object.keys(i.socialLinks)
                      .slice(0, 5)
                      .map(function (k) {
                        return { icon: k, link: i.socialLinks[k] };
                      })
                  : [];
              },
              [i.socialLinks],
            );
          return e.createElement(
            'div',
            {
              className: 'dumi-default-header',
              'data-static': !!r.hero || void 0,
              'data-mobile-active': O || void 0,
              onClick: function () {
                return o(!1);
              },
            },
            e.createElement(
              'div',
              { className: 'dumi-default-header-content' },
              e.createElement(
                'section',
                { className: 'dumi-default-header-left' },
                e.createElement(P.Z, null),
              ),
              e.createElement(
                'section',
                { className: 'dumi-default-header-right' },
                e.createElement(W.Z, null),
                e.createElement(
                  'div',
                  { className: 'dumi-default-header-right-aside' },
                  e.createElement(q.ZP, null),
                  e.createElement(B.Z, null),
                  e.createElement(R.Z, null),
                  i.prefersColor.switch && e.createElement(E.Z, null),
                  H.map(function (k) {
                    return e.createElement(v.Z, {
                      icon: k.icon,
                      link: k.link,
                      key: k.link,
                    });
                  }),
                  e.createElement(Q.Z, null),
                ),
              ),
              e.createElement(
                'button',
                {
                  type: 'button',
                  className: 'dumi-default-header-menu-btn',
                  onClick: function (w) {
                    w.stopPropagation(),
                      o(function (F) {
                        return !F;
                      });
                  },
                },
                O ? e.createElement(V, null) : e.createElement(l, null),
              ),
            ),
          );
        },
        p = ae;
    },
    42731: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return N;
        },
      });
      var e = a(77630),
        m = function (h) {
          return e.createElement(
            'h1',
            { className: 'dumi-default-hero-title' },
            e.createElement('span', null, h.children),
          );
        },
        N = m;
    },
    76408: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return h;
        },
      });
      var e = a(31365),
        m = a(32701),
        N = a(77630),
        j = function () {
          var Y,
            V = (0, e.eL)(),
            U = V.frontmatter;
          return 'hero' in U
            ? N.createElement(
                'div',
                { className: 'dumi-default-hero' },
                U.hero.title && N.createElement(m.Z, null, U.hero.title),
                U.hero.description &&
                  N.createElement('p', {
                    dangerouslySetInnerHTML: { __html: U.hero.description },
                  }),
                !!(
                  !((Y = U.hero.actions) === null || Y === void 0) && Y.length
                ) &&
                  N.createElement(
                    'div',
                    { className: 'dumi-default-hero-actions' },
                    U.hero.actions.map(function (x) {
                      var D = x.text,
                        Z = x.link;
                      return /^(\w+:)\/\/|^(mailto|tel):/.test(Z)
                        ? N.createElement(
                            'a',
                            {
                              href: Z,
                              target: '_blank',
                              rel: 'noreferrer',
                              key: D,
                            },
                            D,
                          )
                        : N.createElement(e.rU, { key: D, to: Z }, D);
                    }),
                  ),
              )
            : null;
        },
        h = j;
    },
    56302: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return G;
        },
      });
      var e = a(49707),
        m = a(31365),
        N = a(77630);
      function j(M, y) {
        return U(M) || V(M, y) || z(M, y) || h();
      }
      function h() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function z(M, y) {
        if (M) {
          if (typeof M == 'string') return Y(M, y);
          var l = Object.prototype.toString.call(M).slice(8, -1);
          if (
            (l === 'Object' && M.constructor && (l = M.constructor.name),
            l === 'Map' || l === 'Set')
          )
            return Array.from(M);
          if (
            l === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          )
            return Y(M, y);
        }
      }
      function Y(M, y) {
        (y == null || y > M.length) && (y = M.length);
        for (var l = 0, d = new Array(y); l < y; l++) d[l] = M[l];
        return d;
      }
      function V(M, y) {
        var l =
          M == null
            ? null
            : (typeof Symbol != 'undefined' && M[Symbol.iterator]) ||
              M['@@iterator'];
        if (l != null) {
          var d,
            L,
            E,
            Q,
            B = [],
            P = !0,
            W = !1;
          try {
            if (((E = (l = l.call(M)).next), y === 0)) {
              if (Object(l) !== l) return;
              P = !1;
            } else
              for (
                ;
                !(P = (d = E.call(l)).done) &&
                (B.push(d.value), B.length !== y);
                P = !0
              );
          } catch (R) {
            (W = !0), (L = R);
          } finally {
            try {
              if (!P && l.return != null && ((Q = l.return()), Object(Q) !== Q))
                return;
            } finally {
              if (W) throw L;
            }
          }
          return B;
        }
      }
      function U(M) {
        if (Array.isArray(M)) return M;
      }
      function x(M) {
        var y = M.pathname,
          l = M.current,
          d = M.target,
          L =
            'base' in l
              ? y.replace(l.base.replace(/\/$/, ''), '') || '/'
              : y.replace(new RegExp(''.concat(l.suffix, '$')), '');
        return 'base' in d
          ? ''
              .concat(d.base.replace(/\/$/, ''))
              .concat(L)
              .replace(/([^/])\/$/, '$1')
          : ''.concat(L).concat(d.suffix);
      }
      var D = function (y) {
          var l = y.locale,
            d = y.current,
            L = (0, m.TH)(),
            E = L.pathname,
            Q = (0, N.useState)(function () {
              return x({ pathname: E, current: d, target: l });
            }),
            B = j(Q, 2),
            P = B[0],
            W = B[1];
          return (
            (0, N.useEffect)(
              function () {
                W(x({ pathname: E, current: d, target: l }));
              },
              [E, d.id, l.id],
            ),
            N.createElement(
              m.rU,
              { className: 'dumi-default-lang-switch', to: P },
              l.name,
            )
          );
        },
        Z = function () {
          var y = (0, m.WF)(),
            l = y.locales,
            d = (0, m.YB)(),
            L = d.locale,
            E = (0, m.bU)();
          return l.length <= 1
            ? null
            : l.length > 2
            ? N.createElement(
                'div',
                { className: 'dumi-default-lang-select' },
                N.createElement(
                  'select',
                  {
                    defaultValue: L,
                    onChange: function (B) {
                      m.m8.push(
                        x({
                          pathname: m.m8.location.pathname,
                          current: E,
                          target: l.find(function (P) {
                            var W = P.id;
                            return W === B.target.value;
                          }),
                        }),
                      );
                    },
                  },
                  l.map(function (Q) {
                    return N.createElement(
                      'option',
                      { key: Q.id, value: Q.id },
                      Q.name,
                    );
                  }),
                ),
                N.createElement(e.r, null),
              )
            : N.createElement(D, {
                locale: l.find(function (Q) {
                  var B = Q.id;
                  return B !== L;
                }),
                current: E,
              });
        },
        G = Z;
    },
    62476: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return j;
        },
      });
      var e = a(31365),
        m = a(77630),
        N = function () {
          var z = (0, e.WF)(),
            Y = z.themeConfig,
            V = (0, e.bU)();
          return m.createElement(
            e.rU,
            { className: 'dumi-default-logo', to: 'base' in V ? V.base : '/' },
            Y.logo !== !1 &&
              m.createElement('img', {
                src:
                  Y.logo ||
                  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAACCCAMAAACww5CIAAACf1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8YkP8AAAACCxMamv/6+voaGhoXi/YYjv8aoP8cq/8dr/8bo/8cqP8bpv8Ykv8drv8BAwUcrP8Zlf8Xjf/s7OzLy8scp/8anP8ZmP/d3d0BBArg4ODT09O7u7sEGCsKCgoanf8YlP/8/Pz09PTIyMgMTIV1dXUGKEVEREQ0NDQODg4GBgYdsv8dsf8Zl//m5uYVgOXj4+MWgtfW1tYTc87BwcERbLWzs7Ovr6+np6cQX6OgoKCTk5MMSXlwcHBra2tiYmIVFRUetf/39/fp6ekWhOkXi+QVfNvY2NjPz88TdcUSb7u6urq3t7cPYK0NUJGQkJCLi4ttbW0JO2cINFtVVVVRUVEHMFEHLEs6OjoEHDEiIiIcHBwXj/vx8fEWh+4Sb8gRbL+rq6upqakOVZiWlpaJiYmGhoYMSIF9fX15eXkKPnQLRHJMTExHR0c9PT0FHzkqKiomJiYEFyUBBw8bovfu7u4Wht4UedsUeMrFxcW9vb0RZrOkpKSampoPXZqAgIALQmtlZWUJOGJZWVkIMFcFIUExMTEwMDAtLS0DEh8Zl/v4+PgXj/QWhvEWhvAYku8YjuwUfNcUfNAVfc0RaLkSaKsRZ6kPWqENUYlbW1sCEBhkSPCkAAAAOHRSTlMA87y4BeKrltbFnUDo0MCup6D67t7ayZKGemtmWS8rEwLNso1wVEpFGaR+UDUlHwmBYls5i1oN/DMym4YAAAfTSURBVHjaxNndS1NxHMfxX5s6t1Kz1KzsuazMnqjgyxv03ovtQrYxUBEfLkREVBQf0AsFBRUUQvEiSVFQ0YsuiiIiqKC/oH+o31lzjtPZg55zttfVNnbx5ffw+X53pmx5UFl2+XLZ4zpVOPWlJFTntYyiBwF/VbX39Sv9upYU9/QHjbXe6qqayrrnylXXi0kov3GVuFiMuNqbHhIu3FcuuohZZ+jDh7mdXkwqlGtKMGmOSFzrGiYe5ZL4+vdsd/SHFyYxtIQlIdiD4ftCa39osTlxRtzwHO1tUOLm0XYk6T3asMRtdKHdUs6qv+L1l/vKgak2SYjqN+1yYg2G5NgR4Pd5/F7fk9sO3YhSkoYkaW40KCk2Rj9KUoikqmtOn8YpydE6J7xFyq5yUhxIjvZJcUfZ5EOb6oxGQmPdtEQlR4Mxupc6IoOdzWiVypabaF1BiesIS876OiSufRXtvO0DcSi2dAN+ZcclYFZsCaOps3nYUOKprDTiSWzqAioCnpIX9ep03pxkw7jYtMWx0pdn7Jb2i1jixN3cM6OGFCti0zgpyopOsw6xiZHoyHIPLIhNHdD7bWR+c7znFD3+PNp+vxhmRkNi28BoWAzBPbQHKhdlQLe4ogsoVTl4ijYjrmiKATdUdvfjh9Ely8DVHFvWe3HJMBBQ2QWAd+KSeeBxjtuxKC7ZzG07Ht0DusQlfwDfs2wZ4b2EYVBcESHO81BlcIWESXHFV7Qss5aXY1FxRSj7L7QAhv3tsaVBMVn8Ou1MFUtjW3sYKjL0jO6QWJiA7iZxysBbtDplpRT4KZbQWkUbHRMnGFUUKwuNaH1iaRJ+Tf8bDbqcWJH2HuCV+l9DpkuxtdsuGlpYHNAJ1FqNMjnE9QocOXJCPwJ309zPT9la8e5yUJwwC/jTBNWQ5EkIqEyzHROSJzvWSeFDW5M8OUArsdgMq2EmanOyGB4WSyMYAhZp2TwkJouw2mZvmusUSwtraA//m7DXZ8SsBxiQM5tGSxNuv3+ZU/NmIpfN9qDXxp1sO4LDNrE202J6cHE1TVq2f1uNiA39K9/7JJ0JwGe6nvOSZ4OA1/R0bFbyrBWoMUX2nOTZAOA3pcSXjFW7UOJnU17VAYeZv98pTvsB1KsTRVXAtqQVA/rFWSNo11SKiuRYZeknEBRn7WJ4rZKuX8pcROvBj6g4rLUZQ8NJYBo2Jb/ax2KkhKYf6I1I3oWngKqUhfgkBTCL1pics1elICaS/5Y9jk+XBdEBeJKhHZGCCLZAWTIkBqQgNlr+NbGi2wHgS1tTAbQNAxW3i1R58WWgd725ANZ7gXPFNaqagrvwt1t7aW0qiOIAPlErPqJCq6JWrW8r1ar1xf0n4NxnnpCELEKyCNmkJZSQRSCbQltooS4sVApiC10U2kWhFRUEEdGF4vuNH8g7c9NQ2pjepPcB/r5ADjlnzp2ZM+QMXHeYb+1WfO5hi5QfveYe33XJ4+d8a3MNQHbI75KhMt9z9wF4FRNcIi3wO94bAHJiQHCHNgmgh3QD8D1MCK6I+KeNCUgbgFFRcEX8Qwhov014o/juUlEoxeqrgpsA7oWp4AZprnpv1ANgShFcoU4a+36jMgOuVGYmnuJ1Wb0hKWqCC8QCgI4dqyfRbNCFoqDBX7Xz6C0AS660K3UKQCdhuqAbdqFT+B8mAXQTbhtbpM7ng4Yn1oytOwFMu5AP9QGAa4Qz8lFwvFWIH6G7Qjijc8/LDueDyvd4z151EYBvwOF+lRFTAK6TGi+ACWdLk0ozANqvkpojAFJKRnCSlFt3m8pLc9bJTylVn64ty9rJfEl1cpVKbH3uJ2v1QleUqOCI2h9xeeP0aVqLCA4JSLk6s7hu6CbkqOAIGpyB7iRZ5xLvFWlHEkITyjK/41/v9h0AC3lngpCz0PXWf0yDUcmBhFDt0T/flx8CkNL8VLAZjUhvAHSQek5AtyALdqP5e9BdbPCkZsbuFRKVvlRHs/W1AfC902yNgoriWwCeqw1fSL+J2VkWNBF8vckr6mPQ3ZcjtkVBA/3z4Ju6Bs5ANzck2BQFpUMTxlVZQ4ege95vUxRUHoPOe5s01OWBbryf2hEFDX4Fc4Vs4gaYZ3ZEQeXBJPgMcFPnwYzJVmeE6jGsGCNAE/rAlPIBamkMQv9YCLpzxJRjYMr5BLXyg5EvgTlKTOoEkw2LUct6dTz4ojqCNO04mMm4ZE150mhMuQ+jHppwAUxqUM5QK9qkPLIE5jhpygkvmHJYiW45FaL8IwmdZy9pUtc2MK9HtvgloZngJyMVp3tJ846ASb7Q1NYrg1JN+ukDs4e05LwHTO5bUKG0tRBEeXAKzJ3rpEXdB8C9fBIWKW0hhOBIBdy2K6R11zvALY6EFYE21yHF4OdKEkz7ObIlXXvAhV4OquoApaYbpCo9qayA29lLturibhimSgOSFjG1ILRwYnwShn09xArnT8PwdnHML6n+hl+2gD8Wjj+rLMOwq49Y5dZpVKUWS++VcCwdCdT5/Uhck5SH45VpVO3qJFbq2Y5Vvly2VBgQY5KqKWI6HY+n06KiqVJMSQyP/37wB6v29xGrnThyEDWh5dyr+fJscbQw/OjRcGG0OFvO3n+QSqKm7exlYgsvNgolkyFs1HGV2OQgTGsjNjnVBtO8Owj3nwbhgWnttgWxy2PaoWaC+AuAXqWYKHupMgAAAABJRU5ErkJggg==',
                alt: Y.name,
              }),
            Y.name,
          );
        },
        j = N;
    },
    28471: function (A, S, a) {
      'use strict';
      var e = a(77630),
        m = function () {
          return e.createElement(e.Fragment, null);
        };
      S.Z = m;
    },
    43874: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return y;
        },
      });
      var e = a(49707),
        m = a(31365),
        N = a(98882),
        j = a(77630);
      function h() {
        return (
          (h = Object.assign
            ? Object.assign.bind()
            : function (l) {
                for (var d = 1; d < arguments.length; d++) {
                  var L = arguments[d];
                  for (var E in L)
                    Object.prototype.hasOwnProperty.call(L, E) && (l[E] = L[E]);
                }
                return l;
              }),
          h.apply(this, arguments)
        );
      }
      function z(l, d) {
        return D(l) || x(l, d) || V(l, d) || Y();
      }
      function Y() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function V(l, d) {
        if (l) {
          if (typeof l == 'string') return U(l, d);
          var L = Object.prototype.toString.call(l).slice(8, -1);
          if (
            (L === 'Object' && l.constructor && (L = l.constructor.name),
            L === 'Map' || L === 'Set')
          )
            return Array.from(l);
          if (
            L === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(L)
          )
            return U(l, d);
        }
      }
      function U(l, d) {
        (d == null || d > l.length) && (d = l.length);
        for (var L = 0, E = new Array(d); L < d; L++) E[L] = l[L];
        return E;
      }
      function x(l, d) {
        var L =
          l == null
            ? null
            : (typeof Symbol != 'undefined' && l[Symbol.iterator]) ||
              l['@@iterator'];
        if (L != null) {
          var E,
            Q,
            B,
            P,
            W = [],
            R = !0,
            q = !1;
          try {
            if (((B = (L = L.call(l)).next), d === 0)) {
              if (Object(L) !== L) return;
              R = !1;
            } else
              for (
                ;
                !(R = (E = B.call(L)).done) &&
                (W.push(E.value), W.length !== d);
                R = !0
              );
          } catch (v) {
            (q = !0), (Q = v);
          } finally {
            try {
              if (!R && L.return != null && ((P = L.return()), Object(P) !== P))
                return;
            } finally {
              if (q) throw Q;
            }
          }
          return W;
        }
      }
      function D(l) {
        if (Array.isArray(l)) return l;
      }
      var Z = function (d) {
          var L = d.data,
            E = (0, m.TH)(),
            Q = E.pathname,
            B = (0, j.useState)(function () {
              var X;
              return (X = L.children) === null || X === void 0
                ? void 0
                : X.some(function (K) {
                    var _ = K.activePath || K.link;
                    return _ && Q.startsWith(_);
                  });
            }),
            P = z(B, 2),
            W = P[0],
            R = P[1],
            q =
              L.children &&
              j.createElement(
                'button',
                {
                  className: 'dumi-default-navbar-collapse-btn',
                  type: 'button',
                  onClick: function (K) {
                    K.stopPropagation(),
                      R(function (_) {
                        return !_;
                      });
                  },
                  'data-collapsed': W || void 0,
                },
                j.createElement(e.r, null),
              ),
            v =
              L.children &&
              j.createElement(
                'ul',
                {
                  className: 'dumi-default-navbar-dropdown',
                  'data-collapsed': W || void 0,
                },
                j.createElement(G, { data: L.children }),
              ),
            T = L.activePath || L.link,
            C = T && Q.startsWith(T) ? { className: 'active' } : {};
          return L.link
            ? j.createElement(
                j.Fragment,
                null,
                j.createElement(m.rU, h({ to: L.link }, C), L.title),
                q,
                v,
              )
            : j.createElement(
                j.Fragment,
                null,
                j.createElement(
                  'span',
                  h(
                    {
                      onClick: function (K) {
                        K.stopPropagation(),
                          R(function (_) {
                            return !_;
                          });
                      },
                    },
                    C,
                  ),
                  L.title,
                ),
                q,
                v,
              );
        },
        G = function (d) {
          var L = d.data;
          return j.createElement(
            j.Fragment,
            null,
            L.map(function (E) {
              return j.createElement(
                'li',
                { key: E.activePath || E.link || E.title },
                E.link && /^(\w+:)\/\/|^(mailto|tel):/.test(E.link)
                  ? j.createElement(
                      'a',
                      { href: E.link, target: '_blank', rel: 'noreferrer' },
                      E.title,
                    )
                  : j.createElement(Z, { data: E }),
              );
            }),
          );
        },
        M = function () {
          var d = (0, m.OK)();
          return j.createElement(
            'ul',
            { className: 'dumi-default-navbar' },
            j.createElement(G, { data: d }),
            j.createElement(N.Z, null),
          );
        },
        y = M;
    },
    36756: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return G;
        },
      });
      var e = a(31365),
        m = a(77630);
      function N(M, y) {
        return V(M) || Y(M, y) || h(M, y) || j();
      }
      function j() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function h(M, y) {
        if (M) {
          if (typeof M == 'string') return z(M, y);
          var l = Object.prototype.toString.call(M).slice(8, -1);
          if (
            (l === 'Object' && M.constructor && (l = M.constructor.name),
            l === 'Map' || l === 'Set')
          )
            return Array.from(M);
          if (
            l === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)
          )
            return z(M, y);
        }
      }
      function z(M, y) {
        (y == null || y > M.length) && (y = M.length);
        for (var l = 0, d = new Array(y); l < y; l++) d[l] = M[l];
        return d;
      }
      function Y(M, y) {
        var l =
          M == null
            ? null
            : (typeof Symbol != 'undefined' && M[Symbol.iterator]) ||
              M['@@iterator'];
        if (l != null) {
          var d,
            L,
            E,
            Q,
            B = [],
            P = !0,
            W = !1;
          try {
            if (((E = (l = l.call(M)).next), y === 0)) {
              if (Object(l) !== l) return;
              P = !1;
            } else
              for (
                ;
                !(P = (d = E.call(l)).done) &&
                (B.push(d.value), B.length !== y);
                P = !0
              );
          } catch (R) {
            (W = !0), (L = R);
          } finally {
            try {
              if (!P && l.return != null && ((Q = l.return()), Object(Q) !== Q))
                return;
            } finally {
              if (W) throw L;
            }
          }
          return B;
        }
      }
      function V(M) {
        if (Array.isArray(M)) return M;
      }
      var U = function () {
          return m.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            m.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847Zm7.988 11.332H2.73l.8-.674c.274-.2.324-.674.124-.923-.2-.275-.674-.325-.923-.125L.735 12.53c-.275.275-.4.525-.4.874 0 .325.125.674.4.874l1.997 1.597a.829.829 0 0 0 .4.125c.199 0 .398-.075.523-.275.2-.274.2-.723-.125-.923l-.998-.799h10.459c.399 0 .674-.274.674-.674 0-.424-.275-.674-.674-.674Z',
            }),
          );
        },
        x = function () {
          return m.createElement(
            'svg',
            { viewBox: '0 0 14 16' },
            m.createElement('path', {
              d: 'M5.003 6.39v3.594c0 .4.275.674.674.674.4 0 .674-.274.674-.674V1.323h1.997v8.661c0 .4.274.674.674.674s.674-.274.674-.674V1.323h3.295c.399 0 .674-.275.674-.674 0-.4-.275-.649-.674-.649H4.928C3.131 0 1.733 1.398 1.733 3.195S3.206 6.39 5.003 6.39Zm0-5.067v3.72c-1.073 0-1.922-.8-1.922-1.873s.799-1.847 1.922-1.847ZM1.01 12.655h10.26l-.8-.674c-.274-.2-.324-.674-.124-.923.2-.275.674-.325.923-.125l1.997 1.597c.275.275.4.525.4.874 0 .325-.125.674-.4.874l-1.997 1.597a.829.829 0 0 1-.399.125.59.59 0 0 1-.524-.275c-.2-.274-.2-.723.125-.923l.998-.799H1.009c-.399 0-.674-.274-.674-.674 0-.424.275-.674.674-.674Z',
            }),
          );
        },
        D = 'dumi:rtl',
        Z = function () {
          var y = (0, m.useState)(!1),
            l = N(y, 2),
            d = l[0],
            L = l[1],
            E = (0, e.WF)(),
            Q = E.themeConfig;
          return (
            (0, m.useEffect)(function () {
              localStorage.getItem(D) &&
                (L(!0),
                document.documentElement.setAttribute('data-direction', 'rtl'));
            }, []),
            Q.rtl
              ? m.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'dumi-default-rtl-switch',
                    onClick: function () {
                      d
                        ? (document.documentElement.removeAttribute(
                            'data-direction',
                          ),
                          localStorage.removeItem(D))
                        : (document.documentElement.setAttribute(
                            'data-direction',
                            'rtl',
                          ),
                          localStorage.setItem(D, '1')),
                        L(!d);
                    },
                    'data-dumi-tooltip': d ? 'RTL' : 'LTR',
                    'data-dumi-tooltip-bottom': !0,
                  },
                  d ? m.createElement(U, null) : m.createElement(x, null),
                )
              : null
          );
        },
        G = Z;
    },
    64709: function (A, S, a) {
      'use strict';
      a.d(S, {
        ZP: function () {
          return O;
        },
      });
      var e = a(77630),
        m = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        z = (o, c, i) =>
          c in o
            ? m(o, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (o[c] = i),
        Y = (o, c) => {
          for (var i in c || (c = {})) j.call(c, i) && z(o, i, c[i]);
          if (N) for (var i of N(c)) h.call(c, i) && z(o, i, c[i]);
          return o;
        };
      const V = (o) =>
        e.createElement(
          'svg',
          Y({ viewBox: '64 64 896 896' }, o),
          e.createElement('path', {
            d: 'M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z',
          }),
        );
      var U =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODYyIDQ2NS4zaC04MWMtNC42IDAtOSAyLTEyLjEgNS41TDU1MCA3MjMuMVYxNjBjMC00LjQtMy42LTgtOC04aC02MGMtNC40IDAtOCAzLjYtOCA4djU2My4xTDI1NS4xIDQ3MC44Yy0zLTMuNS03LjQtNS41LTEyLjEtNS41aC04MWMtNi44IDAtMTAuNSA4LjEtNiAxMy4yTDQ4Ny45IDg2MWEzMS45NiAzMS45NiAwIDAgMCA0OC4zIDBMODY4IDQ3OC41YzQuNS01LjIuOC0xMy4yLTYtMTMuMnoiLz48L3N2Zz4=',
        x = Object.defineProperty,
        D = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        M = (o, c, i) =>
          c in o
            ? x(o, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (o[c] = i),
        y = (o, c) => {
          for (var i in c || (c = {})) Z.call(c, i) && M(o, i, c[i]);
          if (D) for (var i of D(c)) G.call(c, i) && M(o, i, c[i]);
          return o;
        };
      const l = (o) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, o),
          e.createElement('path', {
            d: 'M868 545.5 536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z',
          }),
        );
      var d =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODY4IDU0NS41IDUzNi4xIDE2M2EzMS45NiAzMS45NiAwIDAgMC00OC4zIDBMMTU2IDU0NS41YTcuOTcgNy45NyAwIDAgMCA2IDEzLjJoODFjNC42IDAgOS0yIDEyLjEtNS41TDQ3NCAzMDAuOVY4NjRjMCA0LjQgMy42IDggOCA4aDYwYzQuNCAwIDgtMy42IDgtOFYzMDAuOWwyMTguOSAyNTIuM2MzIDMuNSA3LjQgNS41IDEyLjEgNS41aDgxYzYuOCAwIDEwLjUtOCA2LTEzLjJ6Ii8+PC9zdmc+',
        L = Object.defineProperty,
        E = Object.getOwnPropertySymbols,
        Q = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        P = (o, c, i) =>
          c in o
            ? L(o, c, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: i,
              })
            : (o[c] = i),
        W = (o, c) => {
          for (var i in c || (c = {})) Q.call(c, i) && P(o, i, c[i]);
          if (E) for (var i of E(c)) B.call(c, i) && P(o, i, c[i]);
          return o;
        };
      const R = (o) =>
        e.createElement(
          'svg',
          W({ viewBox: '64 64 896 896' }, o),
          e.createElement('path', {
            d: 'M909.6 854.5 649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z',
          }),
        );
      var q =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTA5LjYgODU0LjUgNjQ5LjkgNTk0LjhDNjkwLjIgNTQyLjcgNzEyIDQ3OSA3MTIgNDEyYzAtODAuMi0zMS4zLTE1NS40LTg3LjktMjEyLjEtNTYuNi01Ni43LTEzMi04Ny45LTIxMi4xLTg3LjlzLTE1NS41IDMxLjMtMjEyLjEgODcuOUMxNDMuMiAyNTYuNSAxMTIgMzMxLjggMTEyIDQxMmMwIDgwLjEgMzEuMyAxNTUuNSA4Ny45IDIxMi4xQzI1Ni41IDY4MC44IDMzMS44IDcxMiA0MTIgNzEyYzY3IDAgMTMwLjYtMjEuOCAxODIuNy02MmwyNTkuNyAyNTkuNmE4LjIgOC4yIDAgMCAwIDExLjYgMGw0My42LTQzLjVhOC4yIDguMiAwIDAgMCAwLTExLjZ6TTU3MC40IDU3MC40QzUyOCA2MTIuNyA0NzEuOCA2MzYgNDEyIDYzNnMtMTE2LTIzLjMtMTU4LjQtNjUuNkMyMTEuMyA1MjggMTg4IDQ3MS44IDE4OCA0MTJzMjMuMy0xMTYuMSA2NS42LTE1OC40QzI5NiAyMTEuMyAzNTIuMiAxODggNDEyIDE4OHMxMTYuMSAyMy4yIDE1OC40IDY1LjZTNjM2IDM1Mi4yIDYzNiA0MTJzLTIzLjMgMTE2LjEtNjUuNiAxNTguNHoiLz48L3N2Zz4=',
        v = a(31365),
        T = a(56829),
        C = (0, e.forwardRef)(function (o, c) {
          var i = (0, v.YB)(),
            H = (0, e.useRef)(!1),
            k = (0, e.useRef)(null);
          return (
            (0, e.useImperativeHandle)(c, function () {
              return k.current;
            }),
            e.createElement('input', {
              className: 'dumi-default-search-bar-input',
              onCompositionStart: function () {
                return (H.current = !0);
              },
              onCompositionEnd: function (F) {
                (H.current = !1), o.onChange(F.currentTarget.value);
              },
              onFocus: o.onFocus,
              onBlur: o.onBlur,
              onKeyDown: function (F) {
                ['ArrowDown', 'ArrowUp'].includes(F.key) && F.preventDefault(),
                  F.key === 'Escape' && !H.current && F.currentTarget.blur();
              },
              onChange: function (F) {
                var te = F.target.value;
                setTimeout(function () {
                  H.current || o.onChange(te);
                }, 1);
              },
              placeholder: i.formatMessage({ id: 'header.search.placeholder' }),
              ref: k,
            })
          );
        }),
        X = function (c) {
          return (
            (0, e.useEffect)(
              function () {
                if (c.visible) document.body.style.overflow = 'hidden';
                else {
                  var i;
                  (document.body.style.overflow = ''),
                    (i = c.onClose) === null || i === void 0 || i.call(c);
                }
              },
              [c.visible],
            ),
            c.visible
              ? e.createElement(
                  'div',
                  { className: 'dumi-default-search-modal' },
                  e.createElement('div', {
                    className: 'dumi-default-search-modal-mask',
                    onClick: c.onMaskClick,
                  }),
                  e.createElement(
                    'div',
                    { className: 'dumi-default-search-modal-content' },
                    c.children,
                  ),
                )
              : null
          );
        },
        K;
      function _(o, c) {
        return t(o) || n(o, c) || ae(o, c) || le();
      }
      function le() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ae(o, c) {
        if (o) {
          if (typeof o == 'string') return p(o, c);
          var i = Object.prototype.toString.call(o).slice(8, -1);
          if (
            (i === 'Object' && o.constructor && (i = o.constructor.name),
            i === 'Map' || i === 'Set')
          )
            return Array.from(o);
          if (
            i === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          )
            return p(o, c);
        }
      }
      function p(o, c) {
        (c == null || c > o.length) && (c = o.length);
        for (var i = 0, H = new Array(c); i < c; i++) H[i] = o[i];
        return H;
      }
      function n(o, c) {
        var i =
          o == null
            ? null
            : (typeof Symbol != 'undefined' && o[Symbol.iterator]) ||
              o['@@iterator'];
        if (i != null) {
          var H,
            k,
            w,
            F,
            te = [],
            $ = !0,
            J = !1;
          try {
            if (((w = (i = i.call(o)).next), c === 0)) {
              if (Object(i) !== i) return;
              $ = !1;
            } else
              for (
                ;
                !($ = (H = w.call(i)).done) &&
                (te.push(H.value), te.length !== c);
                $ = !0
              );
          } catch (b) {
            (J = !0), (k = b);
          } finally {
            try {
              if (!$ && i.return != null && ((F = i.return()), Object(F) !== F))
                return;
            } finally {
              if (J) throw k;
            }
          }
          return te;
        }
      }
      function t(o) {
        if (Array.isArray(o)) return o;
      }
      var r = /(mac|iphone|ipod|ipad)/i.test(
          typeof navigator != 'undefined'
            ? (K = navigator) === null || K === void 0
              ? void 0
              : K.platform
            : '',
        ),
        u = function (c) {
          return (
            ['TEXTAREA', 'INPUT'].includes(c.tagName) ||
            c.contentEditable === 'true'
          );
        },
        I = function () {
          var c = (0, e.useState)(!1),
            i = _(c, 2),
            H = i[0],
            k = i[1],
            w = (0, e.useRef)(null),
            F = (0, e.useRef)(null),
            te = (0, e.useState)('\u2318'),
            $ = _(te, 2),
            J = $[0],
            b = $[1],
            re = (0, v.OO)(),
            ee = re.keywords,
            ne = re.setKeywords,
            ue = re.result,
            ie = re.loading,
            de = (0, e.useState)(!1),
            me = _(de, 2),
            ge = me[0],
            ye = me[1];
          return (
            (0, e.useEffect)(function () {
              r || b('Ctrl');
              var oe = function (ce) {
                if (
                  (((r ? ce.metaKey : ce.ctrlKey) && ce.key === 'k') ||
                    (ce.key === '/' && !u(ce.target))) &&
                  (ce.preventDefault(), w.current)
                ) {
                  var Me = w.current.getBoundingClientRect(),
                    Ae = Me.top,
                    Ne = Me.bottom,
                    fe = Me.left,
                    Le = Me.right,
                    ve =
                      Ae >= 0 &&
                      fe >= 0 &&
                      Ne <= window.innerHeight &&
                      Le <= window.innerWidth;
                  ve
                    ? w.current.focus()
                    : (ne(''),
                      ye(!0),
                      setTimeout(function () {
                        var g;
                        (g = F.current) === null || g === void 0 || g.focus();
                      }));
                }
                ce.key === 'Escape' && (ce.preventDefault(), ye(!1));
              };
              return (
                document.addEventListener('keydown', oe),
                function () {
                  return document.removeEventListener('keydown', oe);
                }
              );
            }, []),
            e.createElement(
              'div',
              { className: 'dumi-default-search-bar' },
              e.createElement(R, { className: 'dumi-default-search-bar-svg' }),
              e.createElement(C, {
                onFocus: function () {
                  return k(!0);
                },
                onBlur: function () {
                  setTimeout(function () {
                    k(!1);
                  }, 1);
                },
                onChange: function (se) {
                  return ne(se);
                },
                ref: w,
              }),
              e.createElement(
                'span',
                { className: 'dumi-default-search-shortcut' },
                J,
                ' K',
              ),
              ee.trim() &&
                H &&
                (ue.length || !ie) &&
                !ge &&
                e.createElement(
                  'div',
                  { className: 'dumi-default-search-popover' },
                  e.createElement(
                    'section',
                    null,
                    e.createElement(T.Z, { data: ue, loading: ie }),
                  ),
                ),
              e.createElement(
                X,
                {
                  visible: ge,
                  onMaskClick: function () {
                    ye(!1);
                  },
                  onClose: function () {
                    return ne('');
                  },
                },
                e.createElement(
                  'div',
                  { style: { position: 'relative' } },
                  e.createElement(R, {
                    className: 'dumi-default-search-bar-svg',
                  }),
                  e.createElement(C, {
                    onFocus: function () {
                      return k(!0);
                    },
                    onBlur: function () {
                      setTimeout(function () {
                        k(!1);
                      }, 1);
                    },
                    onChange: function (se) {
                      return ne(se);
                    },
                    ref: F,
                  }),
                ),
                e.createElement(T.Z, {
                  data: ue,
                  loading: ie,
                  onItemSelect: function () {
                    ye(!1);
                  },
                }),
                e.createElement(
                  'footer',
                  null,
                  e.createElement(
                    'ul',
                    { className: 'dumi-default-search-modal-commands' },
                    e.createElement(
                      'li',
                      { className: 'dumi-default-search-modal-commands-arrow' },
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(l, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        }),
                      ),
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        e.createElement(V, {
                          width: '10px',
                          height: '10px',
                          fill: 'rgba(0, 0, 0, 0.45)',
                        }),
                      ),
                      e.createElement(
                        'span',
                        {
                          className: 'dumi-default-search-modal-commands-text',
                        },
                        'to navigate',
                      ),
                    ),
                    e.createElement(
                      'li',
                      null,
                      e.createElement(
                        'span',
                        { className: 'dumi-default-search-modal-shortcut' },
                        'esc',
                      ),
                      e.createElement(
                        'span',
                        {
                          className: 'dumi-default-search-modal-commands-text',
                        },
                        'to close',
                      ),
                    ),
                  ),
                ),
              ),
            )
          );
        },
        O = I;
    },
    37965: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return q;
        },
      });
      var e = a(77630),
        m = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        z = (v, T, C) =>
          T in v
            ? m(v, T, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: C,
              })
            : (v[T] = C),
        Y = (v, T) => {
          for (var C in T || (T = {})) j.call(T, C) && z(v, C, T[C]);
          if (N) for (var C of N(T)) h.call(T, C) && z(v, C, T[C]);
          return v;
        };
      const V = (v) =>
        e.createElement(
          'svg',
          Y({ viewBox: '0 0 1024 1024' }, v),
          e.createElement('path', {
            d: 'm885.2 446.3-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0 0 60.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z',
          }),
        );
      var U =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0Ij48cGF0aCBkPSJtODg1LjIgNDQ2LjMtLjItLjgtMTEyLjItMjg1LjFjLTUtMTYuMS0xOS45LTI3LjItMzYuOC0yNy4ySDI4MS4yYy0xNyAwLTMyLjEgMTEuMy0zNi45IDI3LjZMMTM5LjQgNDQzbC0uMy43LS4yLjhjLTEuMyA0LjktMS43IDkuOS0xIDE0LjgtLjEgMS42LS4yIDMuMi0uMiA0LjhWODMwYTYwLjkgNjAuOSAwIDAgMCA2MC44IDYwLjhoNjI3LjJjMzMuNSAwIDYwLjgtMjcuMyA2MC45LTYwLjhWNDY0LjFjMC0xLjMgMC0yLjYtLjEtMy43LjQtNC45IDAtOS42LTEuMy0xNC4xem0tMjk1LjgtNDMtLjMgMTUuN2MtLjggNDQuOS0zMS44IDc1LjEtNzcuMSA3NS4xLTIyLjEgMC00MS4xLTcuMS01NC44LTIwLjZTNDM2IDQ0MS4yIDQzNS42IDQxOWwtLjMtMTUuN0gyMjkuNUwzMDkgMjEwaDM5OS4ybDgxLjcgMTkzLjNINTg5LjR6bS0zNzUgNzYuOGgxNTcuM2MyNC4zIDU3LjEgNzYgOTAuOCAxNDAuNCA5MC44IDMzLjcgMCA2NS05LjQgOTAuMy0yNy4yIDIyLjItMTUuNiAzOS41LTM3LjQgNTAuNy02My42aDE1Ni41VjgxNEgyMTQuNFY0ODAuMXoiLz48L3N2Zz4=',
        x = a(31365);
      function D(v, T) {
        return l(v) || y(v, T) || G(v, T) || Z();
      }
      function Z() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function G(v, T) {
        if (v) {
          if (typeof v == 'string') return M(v, T);
          var C = Object.prototype.toString.call(v).slice(8, -1);
          if (
            (C === 'Object' && v.constructor && (C = v.constructor.name),
            C === 'Map' || C === 'Set')
          )
            return Array.from(v);
          if (
            C === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)
          )
            return M(v, T);
        }
      }
      function M(v, T) {
        (T == null || T > v.length) && (T = v.length);
        for (var C = 0, X = new Array(T); C < T; C++) X[C] = v[C];
        return X;
      }
      function y(v, T) {
        var C =
          v == null
            ? null
            : (typeof Symbol != 'undefined' && v[Symbol.iterator]) ||
              v['@@iterator'];
        if (C != null) {
          var X,
            K,
            _,
            le,
            ae = [],
            p = !0,
            n = !1;
          try {
            if (((_ = (C = C.call(v)).next), T === 0)) {
              if (Object(C) !== C) return;
              p = !1;
            } else
              for (
                ;
                !(p = (X = _.call(C)).done) &&
                (ae.push(X.value), ae.length !== T);
                p = !0
              );
          } catch (t) {
            (n = !0), (K = t);
          } finally {
            try {
              if (
                !p &&
                C.return != null &&
                ((le = C.return()), Object(le) !== le)
              )
                return;
            } finally {
              if (n) throw K;
            }
          }
          return ae;
        }
      }
      function l(v) {
        if (Array.isArray(v)) return v;
      }
      var d = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M5.333 10.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 13.333 4 12.89 4 12s.444-1.333 1.333-1.333Z',
            }),
            e.createElement('path', {
              d: 'M13.207 2.667h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Zm8 0h.126a1.206 1.206 0 0 1 1.2 1.326l-2.413 24.14a1.333 1.333 0 0 1-1.327 1.2h-.126a1.206 1.206 0 0 1-1.2-1.326l2.413-24.14c.068-.682.642-1.2 1.327-1.2Z',
            }),
            e.createElement('path', {
              d: 'M5.333 18.667h21.334c.889 0 1.333.444 1.333 1.333s-.444 1.333-1.333 1.333H5.333C4.444 21.333 4 20.89 4 20s.444-1.333 1.333-1.333Z',
            }),
          );
        },
        L = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M9.402 0h14.78L30 6.16V24.5c0 1.933-1.71 3.5-3.589 3.5H9.401C7.524 28 6 26.433 6 24.5v-21C6 1.567 7.523 0 9.402 0ZM23 2v4.183c0 .451.366.817.817.817H28l-5-5Zm3.333 24c.92 0 1.667-.768 1.667-1.714V8.857h-5c-.92 0-1.667-.767-1.667-1.714V2H9.667C8.747 2 8 2.768 8 3.714v20.572C8 25.232 8.746 26 9.667 26h16.666Z',
            }),
          );
        },
        E = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M6.12 14.589h6.628l1.52 4.004h2.485l-5.938-15.19H8.053L2.115 18.732H4.6l1.52-4.143ZM8.88 6.855c.139-.414.277-.828.415-1.38h.138c0 .138.138.414.414 1.104 0 .138.138.276.138.276 0 .138.829 2.072 2.21 5.938H6.672c1.519-3.866 2.21-5.8 2.21-5.938Zm8.148 2.348h12.705v1.933H17.029V9.203ZM2.115 20.665h27.619v1.933H2.114v-1.933Zm14.914-5.662h12.705v1.933H17.029v-1.933ZM2.115 26.327h27.619v1.933H2.114v-1.933ZM17.029 3.54h12.705v1.934H17.029V3.54Z',
            }),
          );
        },
        Q = function () {
          return e.createElement(
            'svg',
            { viewBox: '0 0 32 32', xmlns: 'http://www.w3.org/2000/svg' },
            e.createElement('path', {
              d: 'M28 6h-5a5 5 0 0 0-10 0H8a2 2 0 0 0-2 2v5a5 5 0 0 0 0 10v5a2 2 0 0 0 2 2h7v-2a3 3 0 0 1 6 0v2h7a2 2 0 0 0 2-2v-7h-2a3 3 0 0 1 0-6h2V8a2 2 0 0 0-2-2Zm-5 12a5 5 0 0 0 5 5v5h-5a5 5 0 0 0-10 0H8v-7H6a3 3 0 0 1 0-6h2V8h7V6a3 3 0 0 1 6 0v2h7v5a5 5 0 0 0-5 5Z',
            }),
          );
        },
        B = { title: d, page: L, content: E, demo: Q },
        P = function (T) {
          return e.createElement(
            e.Fragment,
            null,
            T.texts.map(function (C, X) {
              return e.createElement(
                e.Fragment,
                { key: X },
                C.highlighted ? e.createElement('mark', null, C.text) : C.text,
              );
            }),
          );
        },
        W = function (T) {
          var C = (0, e.useCallback)(
              function () {
                var ae = 0,
                  p = [];
                return (
                  T.forEach(function (n) {
                    n.title &&
                      p.push({ type: 'title', value: { title: n.title } }),
                      n.hints.forEach(function (t) {
                        p.push({ type: 'hint', activeIndex: ae++, value: t });
                      });
                  }),
                  [p, ae]
                );
              },
              [T],
            ),
            X = (0, e.useState)(C),
            K = D(X, 2),
            _ = K[0],
            le = K[1];
          return (
            (0, e.useEffect)(
              function () {
                le(C);
              },
              [T],
            ),
            _
          );
        },
        R = function (T) {
          var C = W(T.data),
            X = D(C, 2),
            K = X[0],
            _ = X[1],
            le = (0, e.useState)(-1),
            ae = D(le, 2),
            p = ae[0],
            n = ae[1];
          return (
            (0, e.useEffect)(function () {
              var t = function (u) {
                if (u.key === 'ArrowDown') n((p + 1) % _);
                else if (u.key === 'ArrowUp') n((p + _ - 1) % _);
                else if (u.key === 'Enter' && p >= 0) {
                  var I,
                    O = K.find(function (o) {
                      return o.type === 'hint' && o.activeIndex === p;
                    }).value;
                  x.m8.push(O.link),
                    (I = T.onItemSelect) === null ||
                      I === void 0 ||
                      I.call(T, O),
                    document.activeElement.blur();
                }
                ['Escape', 'Enter'].includes(u.key) && n(-1);
              };
              return (
                document.addEventListener('keydown', t),
                function () {
                  return document.removeEventListener('keydown', t);
                }
              );
            }),
            e.createElement(
              'div',
              {
                className: 'dumi-default-search-result',
                onMouseEnter: function () {
                  return n(-1);
                },
                onMouseDownCapture: function (r) {
                  return r.preventDefault();
                },
                onMouseUpCapture: function () {
                  document.activeElement.blur();
                },
              },
              T.data.length || T.loading
                ? e.createElement(
                    'dl',
                    null,
                    K.map(function (t, r) {
                      return t.type === 'title'
                        ? e.createElement(
                            'dt',
                            { key: String(r) },
                            t.value.title,
                          )
                        : e.createElement(
                            'dd',
                            { key: String(r) },
                            e.createElement(
                              x.rU,
                              {
                                to: t.value.link,
                                'data-active': p === t.activeIndex || void 0,
                                onClick: function () {
                                  var I;
                                  return (I = T.onItemSelect) === null ||
                                    I === void 0
                                    ? void 0
                                    : I.call(T, t.value);
                                },
                              },
                              e.createElement(B[t.value.type]),
                              e.createElement(
                                'h4',
                                null,
                                e.createElement(P, {
                                  texts: t.value.highlightTitleTexts,
                                }),
                              ),
                              e.createElement(
                                'p',
                                null,
                                e.createElement(P, {
                                  texts: t.value.highlightTexts,
                                }),
                              ),
                            ),
                          );
                    }),
                  )
                : e.createElement(
                    'div',
                    { className: 'dumi-default-search-empty' },
                    e.createElement(V, null),
                    e.createElement(x._H, { id: 'search.not.found' }),
                  ),
            )
          );
        },
        q = R;
    },
    5013: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return h;
        },
      });
      var e = a(31365),
        m = a(67586),
        N = a(77630),
        j = function () {
          var Y = (0, e.TH)(),
            V = Y.pathname,
            U = (0, e.eL)(),
            x = (0, e.tx)();
          return x
            ? N.createElement(
                'div',
                { className: 'dumi-default-sidebar' },
                x.map(function (D, Z) {
                  return N.createElement(
                    'dl',
                    { className: 'dumi-default-sidebar-group', key: String(Z) },
                    D.title && N.createElement('dt', null, D.title),
                    D.children.map(function (G) {
                      return N.createElement(
                        'dd',
                        { key: G.link },
                        N.createElement(
                          e.OL,
                          { to: G.link, title: G.title, end: !0 },
                          G.title,
                        ),
                        G.link === V &&
                          U.frontmatter.toc === 'menu' &&
                          N.createElement(m.Z, null),
                      );
                    }),
                  );
                }),
              )
            : null;
        },
        h = j;
    },
    94515: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return ve;
        },
      });
      var e = a(77630),
        m = Object.defineProperty,
        N = Object.getOwnPropertySymbols,
        j = Object.prototype.hasOwnProperty,
        h = Object.prototype.propertyIsEnumerable,
        z = (g, s, f) =>
          s in g
            ? m(g, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (g[s] = f),
        Y = (g, s) => {
          for (var f in s || (s = {})) j.call(s, f) && z(g, f, s[f]);
          if (N) for (var f of N(s)) h.call(s, f) && z(g, f, s[f]);
          return g;
        };
      const V = (g) =>
        e.createElement(
          'svg',
          Y({ viewBox: '64 64 896 896' }, g),
          e.createElement('path', {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-32 736H663.9V602.2h104l15.6-120.7H663.9v-77.1c0-35 9.7-58.8 59.8-58.8h63.9v-108c-11.1-1.5-49-4.8-93.2-4.8-92.2 0-155.3 56.3-155.3 159.6v89H434.9v120.7h104.3V848H176V176h672v672z',
          }),
        );
      var U =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODgwIDExMkgxNDRjLTE3LjcgMC0zMiAxNC4zLTMyIDMydjczNmMwIDE3LjcgMTQuMyAzMiAzMiAzMmg3MzZjMTcuNyAwIDMyLTE0LjMgMzItMzJWMTQ0YzAtMTcuNy0xNC4zLTMyLTMyLTMyem0tMzIgNzM2SDY2My45VjYwMi4yaDEwNGwxNS42LTEyMC43SDY2My45di03Ny4xYzAtMzUgOS43LTU4LjggNTkuOC01OC44aDYzLjl2LTEwOGMtMTEuMS0xLjUtNDktNC44LTkzLjItNC44LTkyLjIgMC0xNTUuMyA1Ni4zLTE1NS4zIDE1OS42djg5SDQzNC45djEyMC43aDEwNC4zVjg0OEgxNzZWMTc2aDY3MnY2NzJ6Ii8+PC9zdmc+',
        x = Object.defineProperty,
        D = Object.getOwnPropertySymbols,
        Z = Object.prototype.hasOwnProperty,
        G = Object.prototype.propertyIsEnumerable,
        M = (g, s, f) =>
          s in g
            ? x(g, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (g[s] = f),
        y = (g, s) => {
          for (var f in s || (s = {})) Z.call(s, f) && M(g, f, s[f]);
          if (D) for (var f of D(s)) G.call(s, f) && M(g, f, s[f]);
          return g;
        };
      const l = (g) =>
        e.createElement(
          'svg',
          y({ viewBox: '64 64 896 896' }, g),
          e.createElement('path', {
            d: 'M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0 1 38.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z',
          }),
        );
      var d =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTExLjYgNzYuM0MyNjQuMyA3Ni4yIDY0IDI3Ni40IDY0IDUyMy41IDY0IDcxOC45IDE4OS4zIDg4NSAzNjMuOCA5NDZjMjMuNSA1LjkgMTkuOS0xMC44IDE5LjktMjIuMnYtNzcuNWMtMTM1LjcgMTUuOS0xNDEuMi03My45LTE1MC4zLTg4LjlDMjE1IDcyNiAxNzEuNSA3MTggMTg0LjUgNzAzYzMwLjktMTUuOSA2Mi40IDQgOTguOSA1Ny45IDI2LjQgMzkuMSA3Ny45IDMyLjUgMTA0IDI2IDUuNy0yMy41IDE3LjktNDQuNSAzNC43LTYwLjgtMTQwLjYtMjUuMi0xOTkuMi0xMTEtMTk5LjItMjEzIDAtNDkuNSAxNi4zLTk1IDQ4LjMtMTMxLjctMjAuNC02MC41IDEuOS0xMTIuMyA0LjktMTIwIDU4LjEtNS4yIDExOC41IDQxLjYgMTIzLjIgNDUuMyAzMy04LjkgNzAuNy0xMy42IDExMi45LTEzLjYgNDIuNCAwIDgwLjIgNC45IDExMy41IDEzLjkgMTEuMy04LjYgNjcuMy00OC44IDEyMS4zLTQzLjkgMi45IDcuNyAyNC43IDU4LjMgNS41IDExOCAzMi40IDM2LjggNDguOSA4Mi43IDQ4LjkgMTMyLjMgMCAxMDIuMi01OSAxODguMS0yMDAgMjEyLjlhMTI3LjUgMTI3LjUgMCAwIDEgMzguMSA5MXYxMTIuNWMuOCA5IDAgMTcuOSAxNSAxNy45IDE3Ny4xLTU5LjcgMzA0LjYtMjI3IDMwNC42LTQyNC4xIDAtMjQ3LjItMjAwLjQtNDQ3LjMtNDQ3LjUtNDQ3LjN6Ii8+PC9zdmc+',
        L = Object.defineProperty,
        E = Object.getOwnPropertySymbols,
        Q = Object.prototype.hasOwnProperty,
        B = Object.prototype.propertyIsEnumerable,
        P = (g, s, f) =>
          s in g
            ? L(g, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (g[s] = f),
        W = (g, s) => {
          for (var f in s || (s = {})) Q.call(s, f) && P(g, f, s[f]);
          if (E) for (var f of E(s)) B.call(s, f) && P(g, f, s[f]);
          return g;
        };
      const R = (g) =>
        e.createElement(
          'svg',
          W({ viewBox: '64 64 896 896' }, g),
          e.createElement('path', {
            d: 'M913.9 552.2 805 181.4v-.1c-7.6-22.9-25.7-36.5-48.3-36.5-23.4 0-42.5 13.5-49.7 35.2l-71.4 213H388.8l-71.4-213c-7.2-21.7-26.3-35.2-49.7-35.2-23.1 0-42.5 14.8-48.4 36.6L110.5 552.2c-4.4 14.7 1.2 31.4 13.5 40.7l368.5 276.4c2.6 3.6 6.2 6.3 10.4 7.8l8.6 6.4 8.5-6.4c4.9-1.7 9-4.7 11.9-8.9l368.4-275.4c12.4-9.2 18-25.9 13.6-40.6zM751.7 193.4c1-1.8 2.9-1.9 3.5-1.9 1.1 0 2.5.3 3.4 3L818 394.3H684.5l67.2-200.9zm-487.4 1c.9-2.6 2.3-2.9 3.4-2.9 2.7 0 2.9.1 3.4 1.7l67.3 201.2H206.5l57.8-200zM158.8 558.7l28.2-97.3 202.4 270.2-230.6-172.9zm73.9-116.4h122.1l90.8 284.3-212.9-284.3zM512.9 776 405.7 442.3H620L512.9 776zm157.9-333.7h119.5L580 723.1l90.8-280.8zm-40.7 293.9 207.3-276.7 29.5 99.2-236.8 177.5z',
          }),
        );
      var q =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTEzLjkgNTUyLjIgODA1IDE4MS40di0uMWMtNy42LTIyLjktMjUuNy0zNi41LTQ4LjMtMzYuNS0yMy40IDAtNDIuNSAxMy41LTQ5LjcgMzUuMmwtNzEuNCAyMTNIMzg4LjhsLTcxLjQtMjEzYy03LjItMjEuNy0yNi4zLTM1LjItNDkuNy0zNS4yLTIzLjEgMC00Mi41IDE0LjgtNDguNCAzNi42TDExMC41IDU1Mi4yYy00LjQgMTQuNyAxLjIgMzEuNCAxMy41IDQwLjdsMzY4LjUgMjc2LjRjMi42IDMuNiA2LjIgNi4zIDEwLjQgNy44bDguNiA2LjQgOC41LTYuNGM0LjktMS43IDktNC43IDExLjktOC45bDM2OC40LTI3NS40YzEyLjQtOS4yIDE4LTI1LjkgMTMuNi00MC42ek03NTEuNyAxOTMuNGMxLTEuOCAyLjktMS45IDMuNS0xLjkgMS4xIDAgMi41LjMgMy40IDNMODE4IDM5NC4zSDY4NC41bDY3LjItMjAwLjl6bS00ODcuNCAxYy45LTIuNiAyLjMtMi45IDMuNC0yLjkgMi43IDAgMi45LjEgMy40IDEuN2w2Ny4zIDIwMS4ySDIwNi41bDU3LjgtMjAwek0xNTguOCA1NTguN2wyOC4yLTk3LjMgMjAyLjQgMjcwLjItMjMwLjYtMTcyLjl6bTczLjktMTE2LjRoMTIyLjFsOTAuOCAyODQuMy0yMTIuOS0yODQuM3pNNTEyLjkgNzc2IDQwNS43IDQ0Mi4zSDYyMEw1MTIuOSA3NzZ6bTE1Ny45LTMzMy43aDExOS41TDU4MCA3MjMuMWw5MC44LTI4MC44em0tNDAuNyAyOTMuOSAyMDcuMy0yNzYuNyAyOS41IDk5LjItMjM2LjggMTc3LjV6Ii8+PC9zdmc+',
        v = Object.defineProperty,
        T = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        X = Object.prototype.propertyIsEnumerable,
        K = (g, s, f) =>
          s in g
            ? v(g, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (g[s] = f),
        _ = (g, s) => {
          for (var f in s || (s = {})) C.call(s, f) && K(g, f, s[f]);
          if (T) for (var f of T(s)) X.call(s, f) && K(g, f, s[f]);
          return g;
        };
      const le = (g) =>
        e.createElement(
          'svg',
          _({ viewBox: '64 64 896 896' }, g),
          e.createElement('path', {
            d: 'M847.7 112H176.3c-35.5 0-64.3 28.8-64.3 64.3v671.4c0 35.5 28.8 64.3 64.3 64.3h671.4c35.5 0 64.3-28.8 64.3-64.3V176.3c0-35.5-28.8-64.3-64.3-64.3zm0 736c-447.8-.1-671.7-.2-671.7-.3.1-447.8.2-671.7.3-671.7 447.8.1 671.7.2 671.7.3-.1 447.8-.2 671.7-.3 671.7zM230.6 411.9h118.7v381.8H230.6zm59.4-52.2c37.9 0 68.8-30.8 68.8-68.8a68.8 68.8 0 1 0-137.6 0c-.1 38 30.7 68.8 68.8 68.8zm252.3 245.1c0-49.8 9.5-98 71.2-98 60.8 0 61.7 56.9 61.7 101.2v185.7h118.6V584.3c0-102.8-22.2-181.9-142.3-181.9-57.7 0-96.4 31.7-112.3 61.7h-1.6v-52.2H423.7v381.8h118.6V604.8z',
          }),
        );
      var ae =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODQ3LjcgMTEySDE3Ni4zYy0zNS41IDAtNjQuMyAyOC44LTY0LjMgNjQuM3Y2NzEuNGMwIDM1LjUgMjguOCA2NC4zIDY0LjMgNjQuM2g2NzEuNGMzNS41IDAgNjQuMy0yOC44IDY0LjMtNjQuM1YxNzYuM2MwLTM1LjUtMjguOC02NC4zLTY0LjMtNjQuM3ptMCA3MzZjLTQ0Ny44LS4xLTY3MS43LS4yLTY3MS43LS4zLjEtNDQ3LjguMi02NzEuNy4zLTY3MS43IDQ0Ny44LjEgNjcxLjcuMiA2NzEuNy4zLS4xIDQ0Ny44LS4yIDY3MS43LS4zIDY3MS43ek0yMzAuNiA0MTEuOWgxMTguN3YzODEuOEgyMzAuNnptNTkuNC01Mi4yYzM3LjkgMCA2OC44LTMwLjggNjguOC02OC44YTY4LjggNjguOCAwIDEgMC0xMzcuNiAwYy0uMSAzOCAzMC43IDY4LjggNjguOCA2OC44em0yNTIuMyAyNDUuMWMwLTQ5LjggOS41LTk4IDcxLjItOTggNjAuOCAwIDYxLjcgNTYuOSA2MS43IDEwMS4ydjE4NS43aDExOC42VjU4NC4zYzAtMTAyLjgtMjIuMi0xODEuOS0xNDIuMy0xODEuOS01Ny43IDAtOTYuNCAzMS43LTExMi4zIDYxLjdoLTEuNnYtNTIuMkg0MjMuN3YzODEuOGgxMTguNlY2MDQuOHoiLz48L3N2Zz4=',
        p = Object.defineProperty,
        n = Object.getOwnPropertySymbols,
        t = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable,
        u = (g, s, f) =>
          s in g
            ? p(g, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (g[s] = f),
        I = (g, s) => {
          for (var f in s || (s = {})) t.call(s, f) && u(g, f, s[f]);
          if (n) for (var f of n(s)) r.call(s, f) && u(g, f, s[f]);
          return g;
        };
      const O = (g) =>
        e.createElement(
          'svg',
          I({ viewBox: '64 64 896 896' }, g),
          e.createElement('path', {
            d: 'M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94 336.64 336.64 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6 0 13.2 1.6 26.4 4.2 39.1-141.5-7.4-267.7-75-351.6-178.5a169.32 169.32 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850 671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2 33.2-24.3 62.3-54.4 85.5-88.2z',
          }),
        );
      var o =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNOTI4IDI1NC4zYy0zMC42IDEzLjItNjMuOSAyMi43LTk4LjIgMjYuNGExNzAuMSAxNzAuMSAwIDAgMCA3NS05NCAzMzYuNjQgMzM2LjY0IDAgMCAxLTEwOC4yIDQxLjJBMTcwLjEgMTcwLjEgMCAwIDAgNjcyIDE3NGMtOTQuNSAwLTE3MC41IDc2LjYtMTcwLjUgMTcwLjYgMCAxMy4yIDEuNiAyNi40IDQuMiAzOS4xLTE0MS41LTcuNC0yNjcuNy03NS0zNTEuNi0xNzguNWExNjkuMzIgMTY5LjMyIDAgMCAwLTIzLjIgODYuMWMwIDU5LjIgMzAuMSAxMTEuNCA3NiAxNDIuMWExNzIgMTcyIDAgMCAxLTc3LjEtMjEuN3YyLjFjMCA4Mi45IDU4LjYgMTUxLjYgMTM2LjcgMTY3LjRhMTgwLjYgMTgwLjYgMCAwIDEtNDQuOSA1LjhjLTExLjEgMC0yMS42LTEuMS0zMi4yLTIuNkMyMTEgNjUyIDI3My45IDcwMS4xIDM0OC44IDcwMi43Yy01OC42IDQ1LjktMTMyIDcyLjktMjExLjcgNzIuOS0xNC4zIDAtMjcuNS0uNS00MS4yLTIuMUMxNzEuNSA4MjIgMjYxLjIgODUwIDM1Ny44IDg1MCA2NzEuNCA4NTAgODQzIDU5MC4yIDg0MyAzNjQuN2MwLTcuNCAwLTE0LjgtLjUtMjIuMiAzMy4yLTI0LjMgNjIuMy01NC40IDg1LjUtODguMnoiLz48L3N2Zz4=',
        c = Object.defineProperty,
        i = Object.getOwnPropertySymbols,
        H = Object.prototype.hasOwnProperty,
        k = Object.prototype.propertyIsEnumerable,
        w = (g, s, f) =>
          s in g
            ? c(g, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (g[s] = f),
        F = (g, s) => {
          for (var f in s || (s = {})) H.call(s, f) && w(g, f, s[f]);
          if (i) for (var f of i(s)) k.call(s, f) && w(g, f, s[f]);
          return g;
        };
      const te = (g) =>
        e.createElement(
          'svg',
          F({ viewBox: '64 64 896 896' }, g),
          e.createElement('path', {
            d: 'M457.3 543c-68.1-17.7-145 16.2-174.6 76.2-30.1 61.2-1 129.1 67.8 151.3 71.2 23 155.2-12.2 184.4-78.3 28.7-64.6-7.2-131-77.6-149.2zm-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6-22-10-28.5-35.7-14.6-57.2 13.7-21.4 42.3-31 64.4-21.7 22.4 9.5 29.6 35 16 57.3zm45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1-8.5-3.5-11.2-13.1-6.4-21.5 5-8.4 15.6-12.4 24.1-9.1 8.7 3.2 11.8 12.9 7 21.5zm334.5-197.2c15 4.8 31-3.4 35.9-18.3 11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3 28.45 28.45 0 0 0-21.9 33.8 28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3 28.45 28.45 0 0 0 18.2 36zm99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3 33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1 40.3 44.7 51.2 105.7 34 159.1-5.6 17.4 3.9 36 21.3 41.7 17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9zM729 499c-12.2-3.6-20.5-6.1-14.1-22.1 13.8-34.7 15.2-64.7.3-86-28-40.1-104.8-37.9-192.8-1.1 0 0-27.6 12.1-20.6-9.8 13.5-43.5 11.5-79.9-9.6-101-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2 80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245 0-65.5-55.2-102.6-104.8-118zM443 810.8c-143 14.1-266.5-50.5-275.8-144.5-9.3-93.9 99.2-181.5 242.2-195.6 143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8z',
          }),
        );
      var $ =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNDU3LjMgNTQzYy02OC4xLTE3LjctMTQ1IDE2LjItMTc0LjYgNzYuMi0zMC4xIDYxLjItMSAxMjkuMSA2Ny44IDE1MS4zIDcxLjIgMjMgMTU1LjItMTIuMiAxODQuNC03OC4zIDI4LjctNjQuNi03LjItMTMxLTc3LjYtMTQ5LjJ6bS01MiAxNTYuMmMtMTMuOCAyMi4xLTQzLjUgMzEuNy02NS44IDIxLjYtMjItMTAtMjguNS0zNS43LTE0LjYtNTcuMiAxMy43LTIxLjQgNDIuMy0zMSA2NC40LTIxLjcgMjIuNCA5LjUgMjkuNiAzNSAxNiA1Ny4zem00NS41LTU4LjVjLTUgOC42LTE2LjEgMTIuNy0yNC43IDkuMS04LjUtMy41LTExLjItMTMuMS02LjQtMjEuNSA1LTguNCAxNS42LTEyLjQgMjQuMS05LjEgOC43IDMuMiAxMS44IDEyLjkgNyAyMS41em0zMzQuNS0xOTcuMmMxNSA0LjggMzEtMy40IDM1LjktMTguMyAxMS44LTM2LjYgNC40LTc4LjQtMjMuMi0xMDlhMTExLjM5IDExMS4zOSAwIDAgMC0xMDYtMzQuMyAyOC40NSAyOC40NSAwIDAgMC0yMS45IDMzLjggMjguMzkgMjguMzkgMCAwIDAgMzMuOCAyMS44YzE4LjQtMy45IDM4LjMgMS44IDUxLjkgMTYuN2E1NC4yIDU0LjIgMCAwIDEgMTEuMyA1My4zIDI4LjQ1IDI4LjQ1IDAgMCAwIDE4LjIgMzZ6bTk5LjgtMjA2Yy01Ni43LTYyLjktMTQwLjQtODYuOS0yMTcuNy03MC41YTMyLjk4IDMyLjk4IDAgMCAwLTI1LjQgMzkuMyAzMy4xMiAzMy4xMiAwIDAgMCAzOS4zIDI1LjVjNTUtMTEuNyAxMTQuNCA1LjQgMTU0LjggNTAuMSA0MC4zIDQ0LjcgNTEuMiAxMDUuNyAzNCAxNTkuMS01LjYgMTcuNCAzLjkgMzYgMjEuMyA0MS43IDE3LjQgNS42IDM2LTMuOSA0MS42LTIxLjJ2LS4xYzI0LjEtNzUuNCA4LjktMTYxLjEtNDcuOS0yMjMuOXpNNzI5IDQ5OWMtMTIuMi0zLjYtMjAuNS02LjEtMTQuMS0yMi4xIDEzLjgtMzQuNyAxNS4yLTY0LjcuMy04Ni0yOC00MC4xLTEwNC44LTM3LjktMTkyLjgtMS4xIDAgMC0yNy42IDEyLjEtMjAuNi05LjggMTMuNS00My41IDExLjUtNzkuOS05LjYtMTAxLTQ3LjctNDcuOC0xNzQuNiAxLjgtMjgzLjUgMTEwLjZDMTI3LjMgNDcxLjEgODAgNTU3LjUgODAgNjMyLjIgODAgNzc1LjEgMjYzLjIgODYyIDQ0Mi41IDg2MmMyMzUgMCAzOTEuMy0xMzYuNSAzOTEuMy0yNDUgMC02NS41LTU1LjItMTAyLjYtMTA0LjgtMTE4ek00NDMgODEwLjhjLTE0MyAxNC4xLTI2Ni41LTUwLjUtMjc1LjgtMTQ0LjUtOS4zLTkzLjkgOTkuMi0xODEuNSAyNDIuMi0xOTUuNiAxNDMtMTQuMiAyNjYuNSA1MC41IDI3NS44IDE0NC40QzY5NC40IDcwOSA1ODYgNzk2LjYgNDQzIDgxMC44eiIvPjwvc3ZnPg==',
        J = Object.defineProperty,
        b = Object.getOwnPropertySymbols,
        re = Object.prototype.hasOwnProperty,
        ee = Object.prototype.propertyIsEnumerable,
        ne = (g, s, f) =>
          s in g
            ? J(g, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (g[s] = f),
        ue = (g, s) => {
          for (var f in s || (s = {})) re.call(s, f) && ne(g, f, s[f]);
          if (b) for (var f of b(s)) ee.call(s, f) && ne(g, f, s[f]);
          return g;
        };
      const ie = (g) =>
        e.createElement(
          'svg',
          ue({ viewBox: '64 64 896 896' }, g),
          e.createElement('path', {
            d: 'M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3 .1 0 87.4 55.6 52.4 154.7-25.6 52.5-65.8 95.6-108.8 144.7-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1 20.5-.2 35.9-.3 46.3-.3 135.8 0 250.6-117.6 245.9-248.4-3.2-89.9-31.9-110.2-41.8-149.6zm-204.1 334c-10.6 0-26.2.1-46.8.3l-23.6.2-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6-52.5 12.6-110 16.2-172.7 9.6 18-20.5 36.5-41.6 55.4-63.1 92-104.6 173.8-197.5 236.9-268.5l1.4-1.4 1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1 9.7-11.1 17.3-19.9 24.5-28.6 30.7-36.7 52.2-67.8 69-102.2l1.6-3.3 1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8 22.5.7 46.5 1.9 71.7 3.6 33.3 2.3 55.5 12.9 71.1 29.2 5.8 6 10.2 12.5 13.4 18.7 1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2 3 11.8 6.9 22.4 12.3 34.4 2.1 4.7 9.5 20.1 11 23.3 10.3 22.7 15.4 43 16.7 78.7 3.3 94.6-82.7 181.9-182 181.9z',
          }),
        );
      var de =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNODU0LjYgMzcwLjZjLTkuOS0zOS40IDkuOS0xMDIuMiA3My40LTEyNC40bC02Ny45LTMuNnMtMjUuNy05MC0xNDMuNi05OGMtMTE3LjgtOC4xLTE5NC45LTMtMTk1LTMgLjEgMCA4Ny40IDU1LjYgNTIuNCAxNTQuNy0yNS42IDUyLjUtNjUuOCA5NS42LTEwOC44IDE0NC43LTEuMyAxLjMtMi41IDIuNi0zLjUgMy43QzMxOS40IDYwNSA5NiA4NjAgOTYgODYwYzI0NS45IDY0LjQgNDEwLjctNi4zIDUwOC4yLTkxLjEgMjAuNS0uMiAzNS45LS4zIDQ2LjMtLjMgMTM1LjggMCAyNTAuNi0xMTcuNiAyNDUuOS0yNDguNC0zLjItODkuOS0zMS45LTExMC4yLTQxLjgtMTQ5LjZ6bS0yMDQuMSAzMzRjLTEwLjYgMC0yNi4yLjEtNDYuOC4zbC0yMy42LjItMTcuOCAxNS41Yy00Ny4xIDQxLTEwNC40IDcxLjUtMTcxLjQgODcuNi01Mi41IDEyLjYtMTEwIDE2LjItMTcyLjcgOS42IDE4LTIwLjUgMzYuNS00MS42IDU1LjQtNjMuMSA5Mi0xMDQuNiAxNzMuOC0xOTcuNSAyMzYuOS0yNjguNWwxLjQtMS40IDEuMy0xLjVjNC4xLTQuNiAyMC42LTIzLjMgMjQuNy0yOC4xIDkuNy0xMS4xIDE3LjMtMTkuOSAyNC41LTI4LjYgMzAuNy0zNi43IDUyLjItNjcuOCA2OS0xMDIuMmwxLjYtMy4zIDEuMi0zLjRjMTMuNy0zOC44IDE1LjQtNzYuOSA2LjItMTEyLjggMjIuNS43IDQ2LjUgMS45IDcxLjcgMy42IDMzLjMgMi4zIDU1LjUgMTIuOSA3MS4xIDI5LjIgNS44IDYgMTAuMiAxMi41IDEzLjQgMTguNyAxIDIgMS43IDMuNiAyLjMgNWw1IDE3LjdjLTE1LjcgMzQuNS0xOS45IDczLjMtMTEuNCAxMDcuMiAzIDExLjggNi45IDIyLjQgMTIuMyAzNC40IDIuMSA0LjcgOS41IDIwLjEgMTEgMjMuMyAxMC4zIDIyLjcgMTUuNCA0MyAxNi43IDc4LjcgMy4zIDk0LjYtODIuNyAxODEuOS0xODIgMTgxLjl6Ii8+PC9zdmc+',
        me = Object.defineProperty,
        ge = Object.getOwnPropertySymbols,
        ye = Object.prototype.hasOwnProperty,
        oe = Object.prototype.propertyIsEnumerable,
        se = (g, s, f) =>
          s in g
            ? me(g, s, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: f,
              })
            : (g[s] = f),
        ce = (g, s) => {
          for (var f in s || (s = {})) ye.call(s, f) && se(g, f, s[f]);
          if (ge) for (var f of ge(s)) oe.call(s, f) && se(g, f, s[f]);
          return g;
        };
      const Me = (g) =>
        e.createElement(
          'svg',
          ce({ viewBox: '64 64 896 896' }, g),
          e.createElement('path', {
            d: 'M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1H564.7zm247.7 497h-59.9l-75.1 50.4-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2-12.9-.7c-.8 0-19.6-.9-41.4 10.6-35.7 19-51.7 56.4-58.7 84.4-18.4 73.1-44.6 123.9-55.7 145.6-3.3 6.4-5.3 10.2-6.2 12.8-1.8 4.9-.8 9.8 2.8 13 10.5 9.5 38.2-2.9 38.5-3 .6-.3 1.3-.6 2.2-1 13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4-3.7 7-7.3 14-10.7 20.8-21.3 42.2-43.4 85.8-126.3 153.6-3.6 2.8-7 8-4.8 13.7 2.4 6.3 9.3 9.1 24.6 9.1 5.4 0 11.8-.3 19.4-1 49.9-4.4 100.8-18 135.1-87.6 17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8-108.1-123-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9l-2.4-3z',
          }),
        );
      var Ae =
          'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSI2NCA2NCA4OTYgODk2Ij48cGF0aCBkPSJNNTY0LjcgMjMwLjFWODAzaDYwbDI1LjIgNzEuNEw3NTYuMyA4MDNoMTMxLjVWMjMwLjFINTY0Ljd6bTI0Ny43IDQ5N2gtNTkuOWwtNzUuMSA1MC40LTE3LjgtNTAuNGgtMThWMzA4LjNoMTcwLjd2NDE4Ljh6TTUyNi4xIDQ4Ni45SDM5My4zYzIuMS00NC45IDQuMy0xMDQuMyA2LjYtMTcyLjloMTMwLjlsLS4xLTguMWMwLS42LS4yLTE0LjctMi4zLTI5LjEtMi4xLTE1LTYuNi0zNC45LTIxLTM0LjlIMjg3LjhjNC40LTIwLjYgMTUuNy02OS43IDI5LjQtOTMuOGw2LjQtMTEuMi0xMi45LS43Yy0uOCAwLTE5LjYtLjktNDEuNCAxMC42LTM1LjcgMTktNTEuNyA1Ni40LTU4LjcgODQuNC0xOC40IDczLjEtNDQuNiAxMjMuOS01NS43IDE0NS42LTMuMyA2LjQtNS4zIDEwLjItNi4yIDEyLjgtMS44IDQuOS0uOCA5LjggMi44IDEzIDEwLjUgOS41IDM4LjItMi45IDM4LjUtMyAuNi0uMyAxLjMtLjYgMi4yLTEgMTMuOS02LjMgNTUuMS0yNSA2OS44LTg0LjVoNTYuN2MuNyAzMi4yIDMuMSAxMzguNCAyLjkgMTcyLjloLTE0MWwtMi4xIDEuNWMtMjMuMSAxNi45LTMwLjUgNjMuMi0zMC44IDY1LjJsLTEuNCA5LjJoMTY3Yy0xMi4zIDc4LjMtMjYuNSAxMTMuNC0zNCAxMjcuNC0zLjcgNy03LjMgMTQtMTAuNyAyMC44LTIxLjMgNDIuMi00My40IDg1LjgtMTI2LjMgMTUzLjYtMy42IDIuOC03IDgtNC44IDEzLjcgMi40IDYuMyA5LjMgOS4xIDI0LjYgOS4xIDUuNCAwIDExLjgtLjMgMTkuNC0xIDQ5LjktNC40IDEwMC44LTE4IDEzNS4xLTg3LjYgMTctMzUuMSAzMS43LTcxLjcgNDMuOS0xMDguOUw0OTcgODUwbDUtMTJjLjgtMS45IDE5LTQ2LjMgNS4xLTk1LjlsLS41LTEuOC0xMDguMS0xMjMtMjIgMTYuNmM2LjQtMjYuMSAxMC42LTQ5LjkgMTIuNS03MS4xaDE1OC43di04YzAtNDAuMS0xOC41LTYzLjktMTkuMi02NC45bC0yLjQtM3oiLz48L3N2Zz4=',
        Ne = a(79417),
        fe = {
          github: l,
          weibo: te,
          twitter: O,
          gitlab: R,
          facebook: V,
          zhihu: Me,
          yuque: ie,
          linkedin: le,
        },
        Le = function (s) {
          var f = s.icon,
            je = s.link,
            pe = (0, Ne.Z)(),
            Ie = (0, e.useMemo)(
              function () {
                return { Icon: fe[f], link: je };
              },
              [f, je],
            );
          return e.createElement(
            'a',
            {
              className: 'dumi-default-icon',
              'data-dumi-tooltip': pe.formatMessage({
                id: 'header.social.'.concat(f),
              }),
              'data-dumi-tooltip-bottom': !0,
              target: '_blank',
              href: Ie.link,
              rel: 'noreferrer',
            },
            e.createElement(Ie.Icon, null),
          );
        },
        ve = Le;
    },
    49841: function (A, S, a) {
      'use strict';
      a.d(S, {
        Z: function () {
          return ae;
        },
      });
      var e = a(49689),
        m = a.n(e),
        N = a(70978),
        j = a.n(N),
        h = a(77630),
        z = a(40067),
        Y = a.n(z),
        V = a(50524),
        U = a.n(V),
        x = a(2198),
        D = a.n(x),
        Z = a(94435),
        G = a.n(Z),
        M = a(5881),
        y = a.n(M),
        l = a(50734),
        d = a.n(l),
        L = U()(function p() {
          Y()(this, p);
        }),
        E = (function (p) {
          G()(t, p);
          var n = y()(t);
          function t(r) {
            var u;
            return (
              Y()(this, t),
              (u = n.call(this)),
              d()(D()(u), 'el', void 0),
              (u.el = r),
              u
            );
          }
          return (
            U()(
              t,
              [
                {
                  key: 'top',
                  get: function () {
                    return this.el.getBoundingClientRect().top;
                  },
                },
                {
                  key: 'outerHeight',
                  get: function () {
                    return this.el.getBoundingClientRect().height;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return this.el.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return this.el.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return (
                      this.scrollTop + this.outerHeight >= this.scrollHeight
                    );
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (u) {
                    this.el.addEventListener('scroll', u);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (u) {
                    this.el.removeEventListener('scroll', u);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function (u) {
                    var I = document.querySelector(u);
                    if (!I) throw new Error('element is not found.');
                    return new t(I);
                  },
                },
              ],
            ),
            t
          );
        })(L),
        Q = (function (p) {
          G()(t, p);
          var n = y()(t);
          function t() {
            return Y()(this, t), n.apply(this, arguments);
          }
          return (
            U()(
              t,
              [
                {
                  key: 'outerHeight',
                  get: function () {
                    return window.innerHeight;
                  },
                },
                {
                  key: 'scrollTop',
                  get: function () {
                    return document.documentElement.scrollTop;
                  },
                },
                {
                  key: 'scrollHeight',
                  get: function () {
                    return document.documentElement.scrollHeight;
                  },
                },
                {
                  key: 'isScrolledToBottom',
                  value: function () {
                    return (
                      this.scrollTop + this.outerHeight >= this.scrollHeight
                    );
                  },
                },
                {
                  key: 'registerScrollEvent',
                  value: function (u) {
                    document.addEventListener('scroll', u);
                  },
                },
                {
                  key: 'unregisterScrollEvent',
                  value: function (u) {
                    document.removeEventListener('scroll', u);
                  },
                },
              ],
              [
                {
                  key: 'create',
                  value: function () {
                    return new t();
                  },
                },
              ],
            ),
            t
          );
        })(L),
        B = (function () {
          function p() {
            Y()(this, p);
          }
          return (
            U()(p, null, [
              {
                key: 'create',
                value: function (t) {
                  return t ? E.create(t) : Q.create();
                },
              },
            ]),
            p
          );
        })(),
        P = function (n) {
          var t = n.sectionRefs,
            r = n.rootSelector,
            u = n.offset,
            I = u === void 0 ? 0 : u,
            O = (0, h.useRef)(null);
          (0, h.useEffect)(
            function () {
              O.current = B.create(r);
            },
            [r],
          );
          var o = (0, h.useCallback)(
              function () {
                return O.current ? O.current.isScrolledToBottom() : !1;
              },
              [O],
            ),
            c = (0, h.useCallback)(
              function (J) {
                if (!O.current) return !1;
                var b = O.current.scrollTop,
                  re = b + O.current.outerHeight,
                  ee = J.getBoundingClientRect(),
                  ne =
                    O.current instanceof E
                      ? b + ee.top - O.current.top + I
                      : b + ee.top + I,
                  ue = ne + ee.height;
                return [ne < re, ue > b].every(function (ie) {
                  return ie;
                });
              },
              [O, I],
            ),
            i = (0, h.useCallback)(
              function () {
                return t.map(function (J) {
                  return J.current ? c(J.current) : !1;
                });
              },
              [c, t],
            ),
            H = (0, h.useState)([]),
            k = j()(H, 2),
            w = k[0],
            F = k[1],
            te = (0, h.useMemo)(
              function () {
                return w.findIndex(function (J) {
                  return J;
                });
              },
              [w],
            ),
            $ = (0, h.useCallback)(
              function () {
                var J = o()
                  ? [].concat(
                      m()(
                        new Array(t.length - 1).fill(!1).map(function (b) {
                          return b;
                        }),
                      ),
                      [!0],
                    )
                  : i();
                F(J);
              },
              [i, o, t],
            );
          return (
            (0, h.useEffect)(
              function () {
                return (
                  $(),
                  O.current && O.current.registerScrollEvent($),
                  function () {
                    O.current && O.current.unregisterScrollEvent($);
                  }
                );
              },
              [$],
            ),
            { elementsStatusInViewport: w, currentElementIndexInViewport: te }
          );
        },
        W = function (n) {
          var t = n.children,
            r = n.sectionRefs,
            u = n.rootSelector,
            I = n.offset,
            O = P({ sectionRefs: r, rootSelector: u, offset: I }),
            o = O.elementsStatusInViewport,
            c = O.currentElementIndexInViewport;
          return t({
            elementsStatusInViewport: o,
            currentElementIndexInViewport: c,
          });
        },
        R = a(31365);
      function q() {
        return (
          (q = Object.assign
            ? Object.assign.bind()
            : function (p) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = arguments[n];
                  for (var r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (p[r] = t[r]);
                }
                return p;
              }),
          q.apply(this, arguments)
        );
      }
      function v(p, n) {
        return _(p) || K(p, n) || C(p, n) || T();
      }
      function T() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function C(p, n) {
        if (p) {
          if (typeof p == 'string') return X(p, n);
          var t = Object.prototype.toString.call(p).slice(8, -1);
          if (
            (t === 'Object' && p.constructor && (t = p.constructor.name),
            t === 'Map' || t === 'Set')
          )
            return Array.from(p);
          if (
            t === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
          )
            return X(p, n);
        }
      }
      function X(p, n) {
        (n == null || n > p.length) && (n = p.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = p[t];
        return r;
      }
      function K(p, n) {
        var t =
          p == null
            ? null
            : (typeof Symbol != 'undefined' && p[Symbol.iterator]) ||
              p['@@iterator'];
        if (t != null) {
          var r,
            u,
            I,
            O,
            o = [],
            c = !0,
            i = !1;
          try {
            if (((I = (t = t.call(p)).next), n === 0)) {
              if (Object(t) !== t) return;
              c = !1;
            } else
              for (
                ;
                !(c = (r = I.call(t)).done) &&
                (o.push(r.value), o.length !== n);
                c = !0
              );
          } catch (H) {
            (i = !0), (u = H);
          } finally {
            try {
              if (!c && t.return != null && ((O = t.return()), Object(O) !== O))
                return;
            } finally {
              if (i) throw u;
            }
          }
          return o;
        }
      }
      function _(p) {
        if (Array.isArray(p)) return p;
      }
      var le = function () {
          var n = (0, R.TH)(),
            t = n.pathname,
            r = n.search,
            u = n.hash,
            I = (0, R.eL)(),
            O = (0, R.zh)(),
            o = (0, R.WF)(),
            c = o.loading,
            i = (0, h.useRef)(0),
            H = (0, h.useState)([]),
            k = v(H, 2),
            w = k[0],
            F = k[1],
            te = h.useMemo(
              function () {
                var $ = I.toc;
                return (
                  O && ($ = O.toc),
                  $.filter(function (J) {
                    var b = J.depth;
                    return b > 1 && b < 4;
                  })
                );
              },
              [I, O],
            );
          return (
            (0, h.useEffect)(
              function () {
                if (!c) {
                  var $ = te.map(function (J) {
                    var b = J.id;
                    return { current: document.getElementById(b) };
                  });
                  F($);
                }
              },
              [t, r, c, te],
            ),
            w.length
              ? h.createElement(W, { sectionRefs: w }, function ($) {
                  var J = $.currentElementIndexInViewport;
                  return (
                    J > -1 && (i.current = J),
                    h.createElement(
                      'ul',
                      { className: 'dumi-default-toc' },
                      te
                        .filter(function (b) {
                          var re = b.depth;
                          return re > 1 && re < 4;
                        })
                        .map(function (b, re) {
                          var ee = ''
                              .concat(r, '#')
                              .concat(encodeURIComponent(b.id)),
                            ne = J > -1 ? J : i.current;
                          return h.createElement(
                            'li',
                            { key: b.id, 'data-depth': b.depth },
                            h.createElement(
                              R.rU,
                              q(
                                {
                                  to: ee,
                                  onClickCapture: function () {
                                    decodeURIComponent(u).slice(1) === b.id &&
                                      R.m8.replace(''.concat(t).concat(r));
                                  },
                                  title: b.title,
                                },
                                ne === re ? { className: 'active' } : {},
                              ),
                              b.title,
                            ),
                          );
                        }),
                    )
                  );
                })
              : null
          );
        },
        ae = le;
    },
    86613: function (A, S, a) {
      var e = a(46354);
      function m(N) {
        if (Array.isArray(N)) return e(N);
      }
      (A.exports = m),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    2198: function (A) {
      function S(a) {
        if (a === void 0)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called",
          );
        return a;
      }
      (A.exports = S),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    5881: function (A, S, a) {
      var e = a(79690),
        m = a(64321),
        N = a(54311);
      function j(h) {
        var z = m();
        return function () {
          var V = e(h),
            U;
          if (z) {
            var x = e(this).constructor;
            U = Reflect.construct(V, arguments, x);
          } else U = V.apply(this, arguments);
          return N(this, U);
        };
      }
      (A.exports = j),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    79690: function (A) {
      function S(a) {
        return (
          (A.exports = S =
            Object.setPrototypeOf
              ? Object.getPrototypeOf.bind()
              : function (m) {
                  return m.__proto__ || Object.getPrototypeOf(m);
                }),
          (A.exports.__esModule = !0),
          (A.exports.default = A.exports),
          S(a)
        );
      }
      (A.exports = S),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    94435: function (A, S, a) {
      var e = a(60907);
      function m(N, j) {
        if (typeof j != 'function' && j !== null)
          throw new TypeError(
            'Super expression must either be null or a function',
          );
        (N.prototype = Object.create(j && j.prototype, {
          constructor: { value: N, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(N, 'prototype', { writable: !1 }),
          j && e(N, j);
      }
      (A.exports = m),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    64321: function (A) {
      function S() {
        if (
          typeof Reflect == 'undefined' ||
          !Reflect.construct ||
          Reflect.construct.sham
        )
          return !1;
        if (typeof Proxy == 'function') return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {}),
            ),
            !0
          );
        } catch (a) {
          return !1;
        }
      }
      (A.exports = S),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    3388: function (A) {
      function S(a) {
        if (
          (typeof Symbol != 'undefined' && a[Symbol.iterator] != null) ||
          a['@@iterator'] != null
        )
          return Array.from(a);
      }
      (A.exports = S),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    75333: function (A) {
      function S() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      (A.exports = S),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    54311: function (A, S, a) {
      var e = a(44825).default,
        m = a(2198);
      function N(j, h) {
        if (h && (e(h) === 'object' || typeof h == 'function')) return h;
        if (h !== void 0)
          throw new TypeError(
            'Derived constructors may only return object or undefined',
          );
        return m(j);
      }
      (A.exports = N),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    60907: function (A) {
      function S(a, e) {
        return (
          (A.exports = S =
            Object.setPrototypeOf
              ? Object.setPrototypeOf.bind()
              : function (N, j) {
                  return (N.__proto__ = j), N;
                }),
          (A.exports.__esModule = !0),
          (A.exports.default = A.exports),
          S(a, e)
        );
      }
      (A.exports = S),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
    49689: function (A, S, a) {
      var e = a(86613),
        m = a(3388),
        N = a(23720),
        j = a(75333);
      function h(z) {
        return e(z) || m(z) || N(z) || j();
      }
      (A.exports = h),
        (A.exports.__esModule = !0),
        (A.exports.default = A.exports);
    },
  },
]);
