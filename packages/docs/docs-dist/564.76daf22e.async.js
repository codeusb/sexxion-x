(self.webpackChunk_sexxion_x_docs =
  self.webpackChunk_sexxion_x_docs || []).push([
  [564],
  {
    77415: function (dt, ct, I) {
      'use strict';
      var ie = I(31365),
        A = I(77630),
        fe = I(99143);
      function j(w, S) {
        return Ge(w) || le(w, S) || Se(w, S) || ve();
      }
      function ve() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Se(w, S) {
        if (w) {
          if (typeof w == 'string') return Ke(w, S);
          var K = Object.prototype.toString.call(w).slice(8, -1);
          if (
            (K === 'Object' && w.constructor && (K = w.constructor.name),
            K === 'Map' || K === 'Set')
          )
            return Array.from(w);
          if (
            K === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(K)
          )
            return Ke(w, S);
        }
      }
      function Ke(w, S) {
        (S == null || S > w.length) && (S = w.length);
        for (var K = 0, C = new Array(S); K < S; K++) C[K] = w[K];
        return C;
      }
      function le(w, S) {
        var K =
          w == null
            ? null
            : (typeof Symbol != 'undefined' && w[Symbol.iterator]) ||
              w['@@iterator'];
        if (K != null) {
          var C,
            B,
            W,
            z,
            Y = [],
            v = !0,
            k = !1;
          try {
            if (((W = (K = K.call(w)).next), S === 0)) {
              if (Object(K) !== K) return;
              v = !1;
            } else
              for (
                ;
                !(v = (C = W.call(K)).done) &&
                (Y.push(C.value), Y.length !== S);
                v = !0
              );
          } catch (G) {
            (k = !0), (B = G);
          } finally {
            try {
              if (!v && K.return != null && ((z = K.return()), Object(z) !== z))
                return;
            } finally {
              if (k) throw B;
            }
          }
          return Y;
        }
      }
      function Ge(w) {
        if (Array.isArray(w)) return w;
      }
      var He = {
          toString: function (S) {
            return typeof S.type == 'string' && S.type in this
              ? 'enum' in S
                ? this.enum(S)
                : this[S.type](S)
              : S.type
              ? this.getValidClassName(S) || S.type
              : 'const' in S
              ? ''.concat(S.const)
              : 'oneOf' in S
              ? this.oneOf(S)
              : 'unknown';
          },
          string: function (S) {
            return S.type;
          },
          number: function (S) {
            return S.type;
          },
          boolean: function (S) {
            return S.type;
          },
          any: function (S) {
            return S.type;
          },
          object: function (S) {
            var K = this,
              C = [];
            return (
              Object.entries(S.properties || {}).forEach(function (B) {
                var W,
                  z = j(B, 2),
                  Y = z[0],
                  v = z[1];
                C.push(
                  ''
                    .concat(Y)
                    .concat(
                      (W = S.required) !== null && W !== void 0 && W.includes(Y)
                        ? ''
                        : '?',
                      ': ',
                    )
                    .concat(v.type === 'object' ? 'object' : K.toString(v)),
                );
              }),
              C.length ? '{ '.concat(C.join('; '), ' }') : '{}'
            );
          },
          array: function (S) {
            if (S.items) {
              var K = this.getValidClassName(S.items);
              return K
                ? ''.concat(K, '[]')
                : ''.concat(this.toString(S.items), '[]');
            }
            return 'any[]';
          },
          element: function (S) {
            return '<'.concat(S.componentName, ' />');
          },
          function: function (S) {
            var K = this,
              C = S.signature;
            if (!C) return 'Function';
            var B = 'oneOf' in C ? C.oneOf : [C];
            return B.map(function (W) {
              return ''
                .concat(W.isAsync ? 'async ' : '', '(')
                .concat(
                  W.arguments
                    .map(function (z) {
                      return ''.concat(z.key, ': ').concat(K.toString(z));
                    })
                    .join(', '),
                  ') => ',
                )
                .concat(K.toString(W.returnType));
            }).join(' | ');
          },
          dom: function (S) {
            return S.className || 'DOM';
          },
          enum: function (S) {
            return S.enum
              .map(function (K) {
                return JSON.stringify(K);
              })
              .join(' | ');
          },
          oneOf: function (S) {
            var K = this;
            return S.oneOf
              .map(function (C) {
                return K.getValidClassName(C) || K.toString(C);
              })
              .join(' | ');
          },
          getValidClassName: function (S) {
            return 'className' in S &&
              typeof S.className == 'string' &&
              S.className !== '__type'
              ? S.className
              : null;
          },
        },
        qe = function (S) {
          var K = useState(function () {
              return He.toString(S);
            }),
            C = j(K, 2),
            B = C[0],
            W = C[1];
          return (
            useEffect(
              function () {
                W(He.toString(S));
              },
              [S],
            ),
            React.createElement('code', null, B)
          );
        },
        se = function (S) {
          var K,
            C = useRouteMeta(),
            B = C.frontmatter,
            W = useAtomAssets(),
            z = W.components,
            Y = S.id || B.atomId,
            v = useIntl();
          if (!Y)
            throw new Error('`id` properties if required for API component!');
          var k = z == null ? void 0 : z[Y];
          return React.createElement(
            'div',
            { className: 'markdown' },
            React.createElement(
              Table,
              null,
              React.createElement(
                'thead',
                null,
                React.createElement(
                  'tr',
                  null,
                  React.createElement(
                    'th',
                    null,
                    v.formatMessage({ id: 'api.component.name' }),
                  ),
                  React.createElement(
                    'th',
                    null,
                    v.formatMessage({ id: 'api.component.description' }),
                  ),
                  React.createElement(
                    'th',
                    null,
                    v.formatMessage({ id: 'api.component.type' }),
                  ),
                  React.createElement(
                    'th',
                    null,
                    v.formatMessage({ id: 'api.component.default' }),
                  ),
                ),
              ),
              React.createElement(
                'tbody',
                null,
                k &&
                  (K = k.propsConfig) !== null &&
                  K !== void 0 &&
                  K.properties
                  ? Object.entries(k.propsConfig.properties).map(function (G) {
                      var X,
                        H = j(G, 2),
                        ee = H[0],
                        Q = H[1];
                      return React.createElement(
                        'tr',
                        { key: ee },
                        React.createElement('td', null, ee),
                        React.createElement('td', null, Q.description || '--'),
                        React.createElement(
                          'td',
                          null,
                          React.createElement(qe, Q),
                        ),
                        React.createElement(
                          'td',
                          null,
                          React.createElement(
                            'code',
                            null,
                            (X = k.propsConfig.required) !== null &&
                              X !== void 0 &&
                              X.includes(ee)
                              ? v.formatMessage({
                                  id: 'api.component.required',
                                })
                              : JSON.stringify(Q.default) || '--',
                          ),
                        ),
                      );
                    })
                  : React.createElement(
                      'tr',
                      null,
                      React.createElement(
                        'td',
                        { colSpan: 4 },
                        v.formatMessage(
                          {
                            id: 'api.component.'.concat(
                              z ? 'not.found' : 'unavailable',
                            ),
                          },
                          { id: Y },
                        ),
                      ),
                    ),
              ),
            ),
          );
        },
        Le = null;
    },
    75431: function (dt, ct, I) {
      'use strict';
      var ie = I(77630);
      function A() {
        return (
          (A = Object.assign
            ? Object.assign.bind()
            : function (ve) {
                for (var Se = 1; Se < arguments.length; Se++) {
                  var Ke = arguments[Se];
                  for (var le in Ke)
                    Object.prototype.hasOwnProperty.call(Ke, le) &&
                      (ve[le] = Ke[le]);
                }
                return ve;
              }),
          A.apply(this, arguments)
        );
      }
      var fe = function (Se) {
          return React.createElement(
            'span',
            A({ className: 'dumi-default-badge' }, Se),
          );
        },
        j = null;
    },
    99143: function (dt, ct, I) {
      'use strict';
      I.d(ct, {
        Z: function () {
          return w;
        },
      });
      var ie = I(23510),
        A = I.n(ie),
        fe = I(77630),
        j = ['children'];
      function ve(S, K) {
        return He(S) || Ge(S, K) || Ke(S, K) || Se();
      }
      function Se() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Ke(S, K) {
        if (S) {
          if (typeof S == 'string') return le(S, K);
          var C = Object.prototype.toString.call(S).slice(8, -1);
          if (
            (C === 'Object' && S.constructor && (C = S.constructor.name),
            C === 'Map' || C === 'Set')
          )
            return Array.from(S);
          if (
            C === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(C)
          )
            return le(S, K);
        }
      }
      function le(S, K) {
        (K == null || K > S.length) && (K = S.length);
        for (var C = 0, B = new Array(K); C < K; C++) B[C] = S[C];
        return B;
      }
      function Ge(S, K) {
        var C =
          S == null
            ? null
            : (typeof Symbol != 'undefined' && S[Symbol.iterator]) ||
              S['@@iterator'];
        if (C != null) {
          var B,
            W,
            z,
            Y,
            v = [],
            k = !0,
            G = !1;
          try {
            if (((z = (C = C.call(S)).next), K === 0)) {
              if (Object(C) !== C) return;
              k = !1;
            } else
              for (
                ;
                !(k = (B = z.call(C)).done) &&
                (v.push(B.value), v.length !== K);
                k = !0
              );
          } catch (X) {
            (G = !0), (W = X);
          } finally {
            try {
              if (!k && C.return != null && ((Y = C.return()), Object(Y) !== Y))
                return;
            } finally {
              if (G) throw W;
            }
          }
          return v;
        }
      }
      function He(S) {
        if (Array.isArray(S)) return S;
      }
      function qe(S, K) {
        if (S == null) return {};
        var C = se(S, K),
          B,
          W;
        if (Object.getOwnPropertySymbols) {
          var z = Object.getOwnPropertySymbols(S);
          for (W = 0; W < z.length; W++)
            (B = z[W]),
              !(K.indexOf(B) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(S, B) &&
                (C[B] = S[B]);
        }
        return C;
      }
      function se(S, K) {
        if (S == null) return {};
        var C = {},
          B = Object.keys(S),
          W,
          z;
        for (z = 0; z < B.length; z++)
          (W = B[z]), !(K.indexOf(W) >= 0) && (C[W] = S[W]);
        return C;
      }
      var Le = function (K) {
          var C = K.children,
            B = qe(K, j),
            W = (0, fe.useRef)(null),
            z = (0, fe.useState)(!1),
            Y = ve(z, 2),
            v = Y[0],
            k = Y[1],
            G = (0, fe.useState)(!1),
            X = ve(G, 2),
            H = X[0],
            ee = X[1];
          return (
            (0, fe.useEffect)(function () {
              var Q = W.current;
              if (Q) {
                var be = A()(function () {
                  k(Q.scrollLeft > 0),
                    ee(Q.scrollLeft < Q.scrollWidth - Q.offsetWidth);
                }, 100);
                return (
                  be(),
                  Q.addEventListener('scroll', be),
                  window.addEventListener('resize', be),
                  function () {
                    Q.removeEventListener('scroll', be),
                      window.removeEventListener('resize', be);
                  }
                );
              }
            }, []),
            fe.createElement(
              'div',
              { className: 'dumi-default-table' },
              fe.createElement(
                'div',
                {
                  className: 'dumi-default-table-content',
                  ref: W,
                  'data-left-folded': v || void 0,
                  'data-right-folded': H || void 0,
                },
                fe.createElement('table', B, C),
              ),
            )
          );
        },
        w = Le;
    },
    51069: function (dt, ct, I) {
      'use strict';
      var ie = I(12492),
        A = I(44882),
        fe = I(21034),
        j = I(80990),
        ve = I(25256),
        Se = I(93192),
        Ke = I(72054),
        le = I(78275),
        Ge = I(41816),
        He = I(95607),
        qe = I(7527),
        se = I.n(qe),
        Le = I(61440),
        w = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
        S = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
        K = ''
          .concat(w, ' ')
          .concat(S)
          .split(/[\s\n]+/),
        C = 'aria-',
        B = 'data-';
      function W(t, a) {
        return t.indexOf(a) === 0;
      }
      function z(t) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
          o;
        a === !1
          ? (o = { aria: !0, data: !0, attr: !0 })
          : a === !0
          ? (o = { aria: !0 })
          : (o = (0, j.Z)({}, a));
        var e = {};
        return (
          Object.keys(t).forEach(function (l) {
            ((o.aria && (l === 'role' || W(l, C))) ||
              (o.data && W(l, B)) ||
              (o.attr && K.includes(l))) &&
              (e[l] = t[l]);
          }),
          e
        );
      }
      var Y = I(94564),
        v = I(77630),
        k = v.createContext(null);
      function G(t) {
        var a = t.dropPosition,
          o = t.dropLevelOffset,
          e = t.indent,
          l = {
            pointerEvents: 'none',
            position: 'absolute',
            right: 0,
            backgroundColor: 'red',
            height: 2,
          };
        switch (a) {
          case -1:
            (l.top = 0), (l.left = -o * e);
            break;
          case 1:
            (l.bottom = 0), (l.left = -o * e);
            break;
          case 0:
            (l.bottom = 0), (l.left = e);
            break;
        }
        return v.createElement('div', { style: l });
      }
      function X(t) {
        if (t == null) throw new TypeError('Cannot destructure ' + t);
      }
      var H = I(58253),
        ee = I(59132),
        Q = I(37518),
        be = I(69698),
        Ne = I(74426),
        Ae = v.forwardRef(function (t, a) {
          var o = t.height,
            e = t.offsetY,
            l = t.offsetX,
            s = t.children,
            u = t.prefixCls,
            n = t.onInnerResize,
            r = t.innerProps,
            i = t.rtl,
            d = t.extra,
            c = {},
            f = { display: 'flex', flexDirection: 'column' };
          if (e !== void 0) {
            var p;
            (c = { height: o, position: 'relative', overflow: 'hidden' }),
              (f = (0, j.Z)(
                (0, j.Z)({}, f),
                {},
                ((p = { transform: 'translateY('.concat(e, 'px)') }),
                (0, A.Z)(p, i ? 'marginRight' : 'marginLeft', -l),
                (0, A.Z)(p, 'position', 'absolute'),
                (0, A.Z)(p, 'left', 0),
                (0, A.Z)(p, 'right', 0),
                (0, A.Z)(p, 'top', 0),
                p),
              ));
          }
          return v.createElement(
            'div',
            { style: c },
            v.createElement(
              Ne.Z,
              {
                onResize: function (y) {
                  var m = y.offsetHeight;
                  m && n && n();
                },
              },
              v.createElement(
                'div',
                (0, ie.Z)(
                  {
                    style: f,
                    className: se()(
                      (0, A.Z)({}, ''.concat(u, '-holder-inner'), u),
                    ),
                    ref: a,
                  },
                  r,
                ),
                s,
                d,
              ),
            ),
          );
        });
      Ae.displayName = 'Filler';
      var et = Ae,
        De = I(46938);
      function Ve(t, a) {
        var o = 'touches' in t ? t.touches[0] : t;
        return o[a ? 'pageX' : 'pageY'];
      }
      var ut = v.forwardRef(function (t, a) {
          var o,
            e = t.prefixCls,
            l = t.rtl,
            s = t.scrollOffset,
            u = t.scrollRange,
            n = t.onStartMove,
            r = t.onStopMove,
            i = t.onScroll,
            d = t.horizontal,
            c = t.spinSize,
            f = t.containerSize,
            p = t.style,
            g = t.thumbStyle,
            y = v.useState(!1),
            m = (0, H.Z)(y, 2),
            h = m[0],
            b = m[1],
            E = v.useState(null),
            x = (0, H.Z)(E, 2),
            N = x[0],
            T = x[1],
            D = v.useState(null),
            P = (0, H.Z)(D, 2),
            R = P[0],
            F = P[1],
            O = !l,
            $ = v.useRef(),
            M = v.useRef(),
            U = v.useState(!1),
            te = (0, H.Z)(U, 2),
            de = te[0],
            J = te[1],
            q = v.useRef(),
            Ce = function () {
              clearTimeout(q.current),
                J(!0),
                (q.current = setTimeout(function () {
                  J(!1);
                }, 3e3));
            },
            Te = u - f || 0,
            we = f - c || 0,
            ce = Te > 0,
            pe = v.useMemo(
              function () {
                if (s === 0 || Te === 0) return 0;
                var ge = s / Te;
                return ge * we;
              },
              [s, Te, we],
            ),
            ke = function (re) {
              re.stopPropagation(), re.preventDefault();
            },
            Oe = v.useRef({ top: pe, dragging: h, pageY: N, startTop: R });
          Oe.current = { top: pe, dragging: h, pageY: N, startTop: R };
          var ze = function (re) {
            b(!0),
              T(Ve(re, d)),
              F(Oe.current.top),
              n(),
              re.stopPropagation(),
              re.preventDefault();
          };
          v.useEffect(function () {
            var ge = function (rt) {
                rt.preventDefault();
              },
              re = $.current,
              Ie = M.current;
            return (
              re.addEventListener('touchstart', ge),
              Ie.addEventListener('touchstart', ze),
              function () {
                re.removeEventListener('touchstart', ge),
                  Ie.removeEventListener('touchstart', ze);
              }
            );
          }, []);
          var $e = v.useRef();
          $e.current = Te;
          var Be = v.useRef();
          (Be.current = we),
            v.useEffect(
              function () {
                if (h) {
                  var ge,
                    re = function (rt) {
                      var _e = Oe.current,
                        st = _e.dragging,
                        je = _e.pageY,
                        ht = _e.startTop;
                      if ((De.Z.cancel(ge), st)) {
                        var Xe = Ve(rt, d) - je,
                          V = ht;
                        !O && d ? (V -= Xe) : (V += Xe);
                        var Pe = $e.current,
                          Ee = Be.current,
                          xe = Ee ? V / Ee : 0,
                          ue = Math.ceil(xe * Pe);
                        (ue = Math.max(ue, 0)),
                          (ue = Math.min(ue, Pe)),
                          (ge = (0, De.Z)(function () {
                            i(ue, d);
                          }));
                      }
                    },
                    Ie = function () {
                      b(!1), r();
                    };
                  return (
                    window.addEventListener('mousemove', re),
                    window.addEventListener('touchmove', re),
                    window.addEventListener('mouseup', Ie),
                    window.addEventListener('touchend', Ie),
                    function () {
                      window.removeEventListener('mousemove', re),
                        window.removeEventListener('touchmove', re),
                        window.removeEventListener('mouseup', Ie),
                        window.removeEventListener('touchend', Ie),
                        De.Z.cancel(ge);
                    }
                  );
                }
              },
              [h],
            ),
            v.useEffect(
              function () {
                Ce();
              },
              [s],
            ),
            v.useImperativeHandle(a, function () {
              return { delayHidden: Ce };
            });
          var me = ''.concat(e, '-scrollbar'),
            ne = {
              position: 'absolute',
              visibility: de && ce ? null : 'hidden',
            },
            he = {
              position: 'absolute',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: 99,
              cursor: 'pointer',
              userSelect: 'none',
            };
          return (
            d
              ? ((ne.height = 8),
                (ne.left = 0),
                (ne.right = 0),
                (ne.bottom = 0),
                (he.height = '100%'),
                (he.width = c),
                O ? (he.left = pe) : (he.right = pe))
              : ((ne.width = 8),
                (ne.top = 0),
                (ne.bottom = 0),
                O ? (ne.right = 0) : (ne.left = 0),
                (he.width = '100%'),
                (he.height = c),
                (he.top = pe)),
            v.createElement(
              'div',
              {
                ref: $,
                className: se()(
                  me,
                  ((o = {}),
                  (0, A.Z)(o, ''.concat(me, '-horizontal'), d),
                  (0, A.Z)(o, ''.concat(me, '-vertical'), !d),
                  (0, A.Z)(o, ''.concat(me, '-visible'), de),
                  o),
                ),
                style: (0, j.Z)((0, j.Z)({}, ne), p),
                onMouseDown: ke,
                onMouseMove: Ce,
              },
              v.createElement('div', {
                ref: M,
                className: se()(
                  ''.concat(me, '-thumb'),
                  (0, A.Z)({}, ''.concat(me, '-thumb-moving'), h),
                ),
                style: (0, j.Z)((0, j.Z)({}, he), g),
                onMouseDown: ze,
              }),
            )
          );
        }),
        it = ut;
      function Ct(t) {
        var a = t.children,
          o = t.setRef,
          e = v.useCallback(function (l) {
            o(l);
          }, []);
        return v.cloneElement(a, { ref: e });
      }
      function kt(t, a, o, e, l, s, u) {
        var n = u.getKey;
        return t.slice(a, o + 1).map(function (r, i) {
          var d = a + i,
            c = s(r, d, { style: { width: e } }),
            f = n(r);
          return v.createElement(
            Ct,
            {
              key: f,
              setRef: function (g) {
                return l(r, g);
              },
            },
            c,
          );
        });
      }
      var mt = I(7757),
        lt = (function () {
          function t() {
            (0, Se.Z)(this, t),
              (this.maps = void 0),
              (this.id = 0),
              (this.maps = Object.create(null));
          }
          return (
            (0, Ke.Z)(t, [
              {
                key: 'set',
                value: function (o, e) {
                  (this.maps[o] = e), (this.id += 1);
                },
              },
              {
                key: 'get',
                value: function (o) {
                  return this.maps[o];
                },
              },
            ]),
            t
          );
        })(),
        St = lt;
      function Dt(t, a, o) {
        var e = v.useState(0),
          l = (0, H.Z)(e, 2),
          s = l[0],
          u = l[1],
          n = (0, v.useRef)(new Map()),
          r = (0, v.useRef)(new St()),
          i = (0, v.useRef)();
        function d() {
          De.Z.cancel(i.current);
        }
        function c() {
          var p =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          d();
          var g = function () {
            n.current.forEach(function (m, h) {
              if (m && m.offsetParent) {
                var b = (0, mt.Z)(m),
                  E = b.offsetHeight;
                r.current.get(h) !== E && r.current.set(h, b.offsetHeight);
              }
            }),
              u(function (m) {
                return m + 1;
              });
          };
          p ? g() : (i.current = (0, De.Z)(g));
        }
        function f(p, g) {
          var y = t(p),
            m = n.current.get(y);
          g ? (n.current.set(y, g), c()) : n.current.delete(y),
            !m != !g && (g ? a == null || a(p) : o == null || o(p));
        }
        return (
          (0, v.useEffect)(function () {
            return d;
          }, []),
          [f, c, r.current, s]
        );
      }
      var bt = I(65726),
        Et = I(6713),
        ae = I(70561);
      function Ze(t, a, o, e) {
        if (!a.length) return o;
        var l = _toArray(a),
          s = l[0],
          u = l.slice(1),
          n;
        return (
          !t && typeof s == 'number'
            ? (n = [])
            : Array.isArray(t)
            ? (n = _toConsumableArray(t))
            : (n = _objectSpread({}, t)),
          e && o === void 0 && u.length === 1
            ? delete n[s][u[0]]
            : (n[s] = Ze(n[s], u, o, e)),
          n
        );
      }
      function Fe(t, a, o) {
        var e =
          arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
        return a.length && e && o === void 0 && !get(t, a.slice(0, -1))
          ? t
          : Ze(t, a, o, e);
      }
      function xt(t) {
        return (
          _typeof(t) === 'object' &&
          t !== null &&
          Object.getPrototypeOf(t) === Object.prototype
        );
      }
      function Ut(t) {
        return Array.isArray(t) ? [] : {};
      }
      var Tn = typeof Reflect == 'undefined' ? Object.keys : Reflect.ownKeys;
      function ta() {
        for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
          a[o] = arguments[o];
        var e = Ut(a[0]);
        return (
          a.forEach(function (l) {
            function s(u, n) {
              var r = new Set(n),
                i = get(l, u),
                d = Array.isArray(i);
              if (d || xt(i)) {
                if (!r.has(i)) {
                  r.add(i);
                  var c = get(e, u);
                  d
                    ? (e = Fe(e, u, []))
                    : (!c || _typeof(c) !== 'object') && (e = Fe(e, u, Ut(i))),
                    Tn(i).forEach(function (f) {
                      s([].concat(_toConsumableArray(u), [f]), r);
                    });
                }
              } else e = Fe(e, u, i);
            }
            s([]);
          }),
          e
        );
      }
      var On = 10;
      function Pn(t, a, o, e, l, s, u, n) {
        var r = v.useRef(),
          i = v.useState(null),
          d = (0, H.Z)(i, 2),
          c = d[0],
          f = d[1];
        return (
          (0, Q.Z)(
            function () {
              if (c && c.times < On) {
                if (!t.current) {
                  f(function (Ce) {
                    return (0, j.Z)({}, Ce);
                  });
                  return;
                }
                s();
                var p = c.targetAlign,
                  g = c.originAlign,
                  y = c.index,
                  m = c.offset,
                  h = t.current.clientHeight,
                  b = !1,
                  E = p,
                  x = null;
                if (h) {
                  for (
                    var N = p || g,
                      T = 0,
                      D = 0,
                      P = 0,
                      R = Math.min(a.length - 1, y),
                      F = 0;
                    F <= R;
                    F += 1
                  ) {
                    var O = l(a[F]);
                    D = T;
                    var $ = o.get(O);
                    (P = D + ($ === void 0 ? e : $)), (T = P);
                  }
                  for (var M = N === 'top' ? m : h - m, U = R; U >= 0; U -= 1) {
                    var te = l(a[U]),
                      de = o.get(te);
                    if (de === void 0) {
                      b = !0;
                      break;
                    }
                    if (((M -= de), M <= 0)) break;
                  }
                  switch (N) {
                    case 'top':
                      x = D - m;
                      break;
                    case 'bottom':
                      x = P - h + m;
                      break;
                    default: {
                      var J = t.current.scrollTop,
                        q = J + h;
                      D < J ? (E = 'top') : P > q && (E = 'bottom');
                    }
                  }
                  x !== null && u(x), x !== c.lastTop && (b = !0);
                }
                b &&
                  f(
                    (0, j.Z)(
                      (0, j.Z)({}, c),
                      {},
                      { times: c.times + 1, targetAlign: E, lastTop: x },
                    ),
                  );
              }
            },
            [c, t.current],
          ),
          function (p) {
            if (p == null) {
              n();
              return;
            }
            if ((De.Z.cancel(r.current), typeof p == 'number')) u(p);
            else if (p && (0, fe.Z)(p) === 'object') {
              var g,
                y = p.align;
              'index' in p
                ? (g = p.index)
                : (g = a.findIndex(function (b) {
                    return l(b) === p.key;
                  }));
              var m = p.offset,
                h = m === void 0 ? 0 : m;
              f({ times: 0, index: g, offset: h, originAlign: y });
            }
          }
        );
      }
      function na(t, a, o, e) {
        var l = o - t,
          s = a - o,
          u = Math.min(l, s) * 2;
        if (e <= u) {
          var n = Math.floor(e / 2);
          return e % 2 ? o + n + 1 : o - n;
        }
        return l > s ? o - (e - s) : o + (e - l);
      }
      function Mn(t, a, o) {
        var e = t.length,
          l = a.length,
          s,
          u;
        if (e === 0 && l === 0) return null;
        e < l ? ((s = t), (u = a)) : ((s = a), (u = t));
        var n = { __EMPTY_ITEM__: !0 };
        function r(g) {
          return g !== void 0 ? o(g) : n;
        }
        for (
          var i = null, d = Math.abs(e - l) !== 1, c = 0;
          c < u.length;
          c += 1
        ) {
          var f = r(s[c]),
            p = r(u[c]);
          if (f !== p) {
            (i = c), (d = d || f !== r(u[c + 1]));
            break;
          }
        }
        return i === null ? null : { index: i, multiple: d };
      }
      function wn(t, a, o) {
        var e = v.useState(t),
          l = (0, H.Z)(e, 2),
          s = l[0],
          u = l[1],
          n = v.useState(null),
          r = (0, H.Z)(n, 2),
          i = r[0],
          d = r[1];
        return (
          v.useEffect(
            function () {
              var c = Mn(s || [], t || [], a);
              (c == null ? void 0 : c.index) !== void 0 &&
                (o == null || o(c.index), d(t[c.index])),
                u(t);
            },
            [t],
          ),
          [i]
        );
      }
      var Ln =
          (typeof navigator == 'undefined'
            ? 'undefined'
            : (0, fe.Z)(navigator)) === 'object' &&
          /Firefox/i.test(navigator.userAgent),
        Gt = Ln,
        Vt = function (t, a) {
          var o = (0, v.useRef)(!1),
            e = (0, v.useRef)(null);
          function l() {
            clearTimeout(e.current),
              (o.current = !0),
              (e.current = setTimeout(function () {
                o.current = !1;
              }, 50));
          }
          var s = (0, v.useRef)({ top: t, bottom: a });
          return (
            (s.current.top = t),
            (s.current.bottom = a),
            function (u) {
              var n =
                  arguments.length > 1 && arguments[1] !== void 0
                    ? arguments[1]
                    : !1,
                r = (u < 0 && s.current.top) || (u > 0 && s.current.bottom);
              return (
                n && r
                  ? (clearTimeout(e.current), (o.current = !1))
                  : (!r || o.current) && l(),
                !o.current && r
              );
            }
          );
        };
      function Zn(t, a, o, e, l) {
        var s = (0, v.useRef)(0),
          u = (0, v.useRef)(null),
          n = (0, v.useRef)(null),
          r = (0, v.useRef)(!1),
          i = Vt(a, o);
        function d(m, h) {
          De.Z.cancel(u.current),
            (s.current += h),
            (n.current = h),
            !i(h) &&
              (Gt || m.preventDefault(),
              (u.current = (0, De.Z)(function () {
                var b = r.current ? 10 : 1;
                l(s.current * b), (s.current = 0);
              })));
        }
        function c(m, h) {
          l(h, !0), Gt || m.preventDefault();
        }
        var f = (0, v.useRef)(null),
          p = (0, v.useRef)(null);
        function g(m) {
          if (t) {
            De.Z.cancel(p.current),
              (p.current = (0, De.Z)(function () {
                f.current = null;
              }, 2));
            var h = m.deltaX,
              b = m.deltaY,
              E = m.shiftKey,
              x = h,
              N = b;
            (f.current === 'sx' || (!f.current && E && b && !h)) &&
              ((x = b), (N = 0), (f.current = 'sx'));
            var T = Math.abs(x),
              D = Math.abs(N);
            f.current === null && (f.current = e && T > D ? 'x' : 'y'),
              f.current === 'y' ? d(m, N) : c(m, x);
          }
        }
        function y(m) {
          t && (r.current = m.detail === n.current);
        }
        return [g, y];
      }
      var In = 14 / 15;
      function An(t, a, o) {
        var e = (0, v.useRef)(!1),
          l = (0, v.useRef)(0),
          s = (0, v.useRef)(null),
          u = (0, v.useRef)(null),
          n,
          r = function (f) {
            if (e.current) {
              var p = Math.ceil(f.touches[0].pageY),
                g = l.current - p;
              (l.current = p),
                o(g) && f.preventDefault(),
                clearInterval(u.current),
                (u.current = setInterval(function () {
                  (g *= In),
                    (!o(g, !0) || Math.abs(g) <= 0.1) &&
                      clearInterval(u.current);
                }, 16));
            }
          },
          i = function () {
            (e.current = !1), n();
          },
          d = function (f) {
            n(),
              f.touches.length === 1 &&
                !e.current &&
                ((e.current = !0),
                (l.current = Math.ceil(f.touches[0].pageY)),
                (s.current = f.target),
                s.current.addEventListener('touchmove', r),
                s.current.addEventListener('touchend', i));
          };
        (n = function () {
          s.current &&
            (s.current.removeEventListener('touchmove', r),
            s.current.removeEventListener('touchend', i));
        }),
          (0, Q.Z)(
            function () {
              return (
                t && a.current.addEventListener('touchstart', d),
                function () {
                  var c;
                  (c = a.current) === null ||
                    c === void 0 ||
                    c.removeEventListener('touchstart', d),
                    n(),
                    clearInterval(u.current);
                }
              );
            },
            [t],
          );
      }
      var $n = 20;
      function Yt() {
        var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
          a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
          o = (t / a) * 100;
        return (
          isNaN(o) && (o = 0),
          (o = Math.max(o, $n)),
          (o = Math.min(o, t / 2)),
          Math.floor(o)
        );
      }
      function jn(t, a, o, e) {
        var l = v.useMemo(
            function () {
              return [new Map(), []];
            },
            [t, o.id, e],
          ),
          s = (0, H.Z)(l, 2),
          u = s[0],
          n = s[1],
          r = function (d) {
            var c =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : d,
              f = u.get(d),
              p = u.get(c);
            if (f === void 0 || p === void 0)
              for (var g = t.length, y = n.length; y < g; y += 1) {
                var m,
                  h = t[y],
                  b = a(h);
                u.set(b, y);
                var E = (m = o.get(b)) !== null && m !== void 0 ? m : e;
                if (
                  ((n[y] = (n[y - 1] || 0) + E),
                  b === d && (f = y),
                  b === c && (p = y),
                  f !== void 0 && p !== void 0)
                )
                  break;
              }
            return { top: n[f - 1] || 0, bottom: n[p] };
          };
        return r;
      }
      var Hn = [
          'prefixCls',
          'className',
          'height',
          'itemHeight',
          'fullHeight',
          'style',
          'data',
          'children',
          'itemKey',
          'virtual',
          'direction',
          'scrollWidth',
          'component',
          'onScroll',
          'onVirtualScroll',
          'onVisibleChange',
          'innerProps',
          'extraRender',
          'styles',
        ],
        Fn = [],
        Wn = { overflowY: 'auto', overflowAnchor: 'none' };
      function zn(t, a) {
        var o = t.prefixCls,
          e = o === void 0 ? 'rc-virtual-list' : o,
          l = t.className,
          s = t.height,
          u = t.itemHeight,
          n = t.fullHeight,
          r = n === void 0 ? !0 : n,
          i = t.style,
          d = t.data,
          c = t.children,
          f = t.itemKey,
          p = t.virtual,
          g = t.direction,
          y = t.scrollWidth,
          m = t.component,
          h = m === void 0 ? 'div' : m,
          b = t.onScroll,
          E = t.onVirtualScroll,
          x = t.onVisibleChange,
          N = t.innerProps,
          T = t.extraRender,
          D = t.styles,
          P = (0, ee.Z)(t, Hn),
          R = !!(p !== !1 && s && u),
          F = R && d && (u * d.length > s || !!y),
          O = g === 'rtl',
          $ = se()(e, (0, A.Z)({}, ''.concat(e, '-rtl'), O), l),
          M = d || Fn,
          U = (0, v.useRef)(),
          te = (0, v.useRef)(),
          de = (0, v.useState)(0),
          J = (0, H.Z)(de, 2),
          q = J[0],
          Ce = J[1],
          Te = (0, v.useState)(0),
          we = (0, H.Z)(Te, 2),
          ce = we[0],
          pe = we[1],
          ke = (0, v.useState)(!1),
          Oe = (0, H.Z)(ke, 2),
          ze = Oe[0],
          $e = Oe[1],
          Be = function () {
            $e(!0);
          },
          me = function () {
            $e(!1);
          },
          ne = v.useCallback(
            function (L) {
              return typeof f == 'function' ? f(L) : L == null ? void 0 : L[f];
            },
            [f],
          ),
          he = { getKey: ne };
        function ge(L) {
          Ce(function (Z) {
            var _;
            typeof L == 'function' ? (_ = L(Z)) : (_ = L);
            var ye = Br(_);
            return (U.current.scrollTop = ye), ye;
          });
        }
        var re = (0, v.useRef)({ start: 0, end: M.length }),
          Ie = (0, v.useRef)(),
          nt = wn(M, ne),
          rt = (0, H.Z)(nt, 1),
          _e = rt[0];
        Ie.current = _e;
        var st = Dt(ne, null, null),
          je = (0, H.Z)(st, 4),
          ht = je[0],
          Xe = je[1],
          V = je[2],
          Pe = je[3],
          Ee = v.useMemo(
            function () {
              if (!R)
                return {
                  scrollHeight: void 0,
                  start: 0,
                  end: M.length - 1,
                  offset: void 0,
                };
              if (!F) {
                var L;
                return {
                  scrollHeight:
                    ((L = te.current) === null || L === void 0
                      ? void 0
                      : L.offsetHeight) || 0,
                  start: 0,
                  end: M.length - 1,
                  offset: void 0,
                };
              }
              for (
                var Z = 0, _, ye, Qe, Qr = M.length, yt = 0;
                yt < Qr;
                yt += 1
              ) {
                var qr = M[yt],
                  ea = ne(qr),
                  Rn = V.get(ea),
                  _t = Z + (Rn === void 0 ? u : Rn);
                _t >= q && _ === void 0 && ((_ = yt), (ye = Z)),
                  _t > q + s && Qe === void 0 && (Qe = yt),
                  (Z = _t);
              }
              return (
                _ === void 0 && ((_ = 0), (ye = 0), (Qe = Math.ceil(s / u))),
                Qe === void 0 && (Qe = M.length - 1),
                (Qe = Math.min(Qe + 1, M.length - 1)),
                { scrollHeight: Z, start: _, end: Qe, offset: ye }
              );
            },
            [F, R, q, M, Pe, s],
          ),
          xe = Ee.scrollHeight,
          ue = Ee.start,
          Me = Ee.end,
          at = Ee.offset;
        (re.current.start = ue), (re.current.end = Me);
        var ot = v.useState({ width: 0, height: s }),
          Je = (0, H.Z)(ot, 2),
          Ue = Je[0],
          Hr = Je[1],
          Fr = function (Z) {
            Hr({
              width: Z.width || Z.offsetWidth,
              height: Z.height || Z.offsetHeight,
            });
          },
          mn = (0, v.useRef)(),
          Sn = (0, v.useRef)(),
          Wr = v.useMemo(
            function () {
              return Yt(Ue.width, y);
            },
            [Ue.width, y],
          ),
          zr = v.useMemo(
            function () {
              return Yt(Ue.height, xe);
            },
            [Ue.height, xe],
          ),
          $t = xe - s,
          jt = (0, v.useRef)($t);
        jt.current = $t;
        function Br(L) {
          var Z = L;
          return (
            Number.isNaN(jt.current) || (Z = Math.min(Z, jt.current)),
            (Z = Math.max(Z, 0)),
            Z
          );
        }
        var bn = q <= 0,
          En = q >= $t,
          _r = Vt(bn, En),
          Ht = function () {
            return { x: O ? -ce : ce, y: q };
          },
          Ft = (0, v.useRef)(Ht()),
          Wt = (0, bt.Z)(function () {
            if (E) {
              var L = Ht();
              (Ft.current.x !== L.x || Ft.current.y !== L.y) &&
                (E(L), (Ft.current = L));
            }
          });
        function xn(L, Z) {
          var _ = L;
          Z
            ? ((0, be.flushSync)(function () {
                pe(_);
              }),
              Wt())
            : ge(_);
        }
        function Ur(L) {
          var Z = L.currentTarget.scrollTop;
          Z !== q && ge(Z), b == null || b(L), Wt();
        }
        var zt = function (Z) {
            var _ = Z,
              ye = y - Ue.width;
            return (_ = Math.max(_, 0)), (_ = Math.min(_, ye)), _;
          },
          Gr = (0, bt.Z)(function (L, Z) {
            Z
              ? ((0, be.flushSync)(function () {
                  pe(function (_) {
                    var ye = _ + (O ? -L : L);
                    return zt(ye);
                  });
                }),
                Wt())
              : ge(function (_) {
                  var ye = _ + L;
                  return ye;
                });
          }),
          Vr = Zn(R, bn, En, !!y, Gr),
          Kn = (0, H.Z)(Vr, 2),
          Bt = Kn[0],
          Nn = Kn[1];
        An(R, U, function (L, Z) {
          return _r(L, Z)
            ? !1
            : (Bt({ preventDefault: function () {}, deltaY: L }), !0);
        }),
          (0, Q.Z)(
            function () {
              function L(_) {
                R && _.preventDefault();
              }
              var Z = U.current;
              return (
                Z.addEventListener('wheel', Bt),
                Z.addEventListener('DOMMouseScroll', Nn),
                Z.addEventListener('MozMousePixelScroll', L),
                function () {
                  Z.removeEventListener('wheel', Bt),
                    Z.removeEventListener('DOMMouseScroll', Nn),
                    Z.removeEventListener('MozMousePixelScroll', L);
                }
              );
            },
            [R],
          ),
          (0, Q.Z)(
            function () {
              y &&
                pe(function (L) {
                  return zt(L);
                });
            },
            [Ue.width, y],
          );
        var Cn = function () {
            var Z, _;
            (Z = mn.current) === null || Z === void 0 || Z.delayHidden(),
              (_ = Sn.current) === null || _ === void 0 || _.delayHidden();
          },
          kn = Pn(
            U,
            M,
            V,
            u,
            ne,
            function () {
              return Xe(!0);
            },
            ge,
            Cn,
          );
        v.useImperativeHandle(a, function () {
          return {
            getScrollInfo: Ht,
            scrollTo: function (Z) {
              function _(ye) {
                return (
                  ye &&
                  (0, fe.Z)(ye) === 'object' &&
                  ('left' in ye || 'top' in ye)
                );
              }
              _(Z) ? (Z.left !== void 0 && pe(zt(Z.left)), kn(Z.top)) : kn(Z);
            },
          };
        }),
          (0, Q.Z)(
            function () {
              if (x) {
                var L = M.slice(ue, Me + 1);
                x(L, M);
              }
            },
            [ue, Me, M],
          );
        var Yr = jn(M, ne, V, u),
          Xr =
            T == null
              ? void 0
              : T({
                  start: ue,
                  end: Me,
                  virtual: F,
                  offsetX: ce,
                  offsetY: at,
                  rtl: O,
                  getSize: Yr,
                }),
          Jr = kt(M, ue, Me, y, ht, c, he),
          gt = null;
        s &&
          ((gt = (0, j.Z)((0, A.Z)({}, r ? 'height' : 'maxHeight', s), Wn)),
          R &&
            ((gt.overflowY = 'hidden'),
            y && (gt.overflowX = 'hidden'),
            ze && (gt.pointerEvents = 'none')));
        var Dn = {};
        return (
          O && (Dn.dir = 'rtl'),
          v.createElement(
            'div',
            (0, ie.Z)(
              {
                style: (0, j.Z)((0, j.Z)({}, i), {}, { position: 'relative' }),
                className: $,
              },
              Dn,
              P,
            ),
            v.createElement(
              Ne.Z,
              { onResize: Fr },
              v.createElement(
                h,
                {
                  className: ''.concat(e, '-holder'),
                  style: gt,
                  ref: U,
                  onScroll: Ur,
                  onMouseEnter: Cn,
                },
                v.createElement(
                  et,
                  {
                    prefixCls: e,
                    height: xe,
                    offsetX: ce,
                    offsetY: at,
                    scrollWidth: y,
                    onInnerResize: Xe,
                    ref: te,
                    innerProps: N,
                    rtl: O,
                    extra: Xr,
                  },
                  Jr,
                ),
              ),
            ),
            F &&
              xe > s &&
              v.createElement(it, {
                ref: mn,
                prefixCls: e,
                scrollOffset: q,
                scrollRange: xe,
                rtl: O,
                onScroll: xn,
                onStartMove: Be,
                onStopMove: me,
                spinSize: zr,
                containerSize: Ue.height,
                style: D == null ? void 0 : D.verticalScrollBar,
                thumbStyle: D == null ? void 0 : D.verticalScrollBarThumb,
              }),
            F &&
              y &&
              v.createElement(it, {
                ref: Sn,
                prefixCls: e,
                scrollOffset: ce,
                scrollRange: y,
                rtl: O,
                onScroll: xn,
                onStartMove: Be,
                onStopMove: me,
                spinSize: Wr,
                containerSize: Ue.width,
                horizontal: !0,
                style: D == null ? void 0 : D.horizontalScrollBar,
                thumbStyle: D == null ? void 0 : D.horizontalScrollBarThumb,
              }),
          )
        );
      }
      var Xt = v.forwardRef(zn);
      Xt.displayName = 'List';
      var Bn = Xt,
        _n = Bn,
        Un = I(82859),
        Gn = function (a) {
          for (
            var o = a.prefixCls,
              e = a.level,
              l = a.isStart,
              s = a.isEnd,
              u = ''.concat(o, '-indent-unit'),
              n = [],
              r = 0;
            r < e;
            r += 1
          ) {
            var i;
            n.push(
              v.createElement('span', {
                key: r,
                className: se()(
                  u,
                  ((i = {}),
                  (0, A.Z)(i, ''.concat(u, '-start'), l[r]),
                  (0, A.Z)(i, ''.concat(u, '-end'), s[r]),
                  i),
                ),
              }),
            );
          }
          return v.createElement(
            'span',
            { 'aria-hidden': 'true', className: ''.concat(o, '-indent') },
            n,
          );
        },
        Vn = v.memo(Gn);
      function Re(t, a) {
        return t[a];
      }
      var Yn = I(30123),
        Xn = I(22875),
        Jn = ['children'];
      function Jt(t, a) {
        return ''.concat(t, '-').concat(a);
      }
      function Qn(t) {
        return t && t.type && t.type.isTreeNode;
      }
      function ft(t, a) {
        return t != null ? t : a;
      }
      function Kt(t) {
        var a = t || {},
          o = a.title,
          e = a._title,
          l = a.key,
          s = a.children,
          u = o || 'title';
        return {
          title: u,
          _title: e || [u],
          key: l || 'key',
          children: s || 'children',
        };
      }
      function ra(t, a) {
        var o = new Map();
        function e(l) {
          var s =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
          (l || []).forEach(function (u) {
            var n = u[a.key],
              r = u[a.children];
            warning(
              n != null,
              'Tree node must have a certain key: ['.concat(s).concat(n, ']'),
            );
            var i = String(n);
            warning(
              !o.has(i) || n === null || n === void 0,
              "Same 'key' exist in the Tree: ".concat(i),
            ),
              o.set(i, !0),
              e(r, ''.concat(s).concat(i, ' > '));
          });
        }
        e(t);
      }
      function qn(t) {
        function a(o) {
          var e = (0, Yn.Z)(o);
          return e
            .map(function (l) {
              if (!Qn(l))
                return (
                  (0, Y.ZP)(
                    !l,
                    'Tree/TreeNode can only accept TreeNode as children.',
                  ),
                  null
                );
              var s = l.key,
                u = l.props,
                n = u.children,
                r = (0, ee.Z)(u, Jn),
                i = (0, j.Z)({ key: s }, r),
                d = a(n);
              return d.length && (i.children = d), i;
            })
            .filter(function (l) {
              return l;
            });
        }
        return a(t);
      }
      function Rt(t, a, o) {
        var e = Kt(o),
          l = e._title,
          s = e.key,
          u = e.children,
          n = new Set(a === !0 ? [] : a),
          r = [];
        function i(d) {
          var c =
            arguments.length > 1 && arguments[1] !== void 0
              ? arguments[1]
              : null;
          return d.map(function (f, p) {
            for (
              var g = Jt(c ? c.pos : '0', p), y = ft(f[s], g), m, h = 0;
              h < l.length;
              h += 1
            ) {
              var b = l[h];
              if (f[b] !== void 0) {
                m = f[b];
                break;
              }
            }
            var E = (0, j.Z)(
              (0, j.Z)({}, (0, Xn.Z)(f, [].concat((0, ve.Z)(l), [s, u]))),
              {},
              {
                title: m,
                key: y,
                parent: c,
                pos: g,
                children: null,
                data: f,
                isStart: [].concat((0, ve.Z)(c ? c.isStart : []), [p === 0]),
                isEnd: [].concat((0, ve.Z)(c ? c.isEnd : []), [
                  p === d.length - 1,
                ]),
              },
            );
            return (
              r.push(E),
              a === !0 || n.has(y)
                ? (E.children = i(f[u] || [], E))
                : (E.children = []),
              E
            );
          });
        }
        return i(t), r;
      }
      function er(t, a, o) {
        var e = {};
        (0, fe.Z)(o) === 'object' ? (e = o) : (e = { externalGetKey: o }),
          (e = e || {});
        var l = e,
          s = l.childrenPropName,
          u = l.externalGetKey,
          n = l.fieldNames,
          r = Kt(n),
          i = r.key,
          d = r.children,
          c = s || d,
          f;
        u
          ? typeof u == 'string'
            ? (f = function (y) {
                return y[u];
              })
            : typeof u == 'function' &&
              (f = function (y) {
                return u(y);
              })
          : (f = function (y, m) {
              return ft(y[i], m);
            });
        function p(g, y, m, h) {
          var b = g ? g[c] : t,
            E = g ? Jt(m.pos, y) : '0',
            x = g ? [].concat((0, ve.Z)(h), [g]) : [];
          if (g) {
            var N = f(g, E),
              T = {
                node: g,
                index: y,
                pos: E,
                key: N,
                parentPos: m.node ? m.pos : null,
                level: m.level + 1,
                nodes: x,
              };
            a(T);
          }
          b &&
            b.forEach(function (D, P) {
              p(D, P, { node: g, pos: E, level: m ? m.level + 1 : -1 }, x);
            });
        }
        p(null);
      }
      function tr(t) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
          o = a.initWrapper,
          e = a.processEntity,
          l = a.onProcessFinished,
          s = a.externalGetKey,
          u = a.childrenPropName,
          n = a.fieldNames,
          r = arguments.length > 2 ? arguments[2] : void 0,
          i = s || r,
          d = {},
          c = {},
          f = { posEntities: d, keyEntities: c };
        return (
          o && (f = o(f) || f),
          er(
            t,
            function (p) {
              var g = p.node,
                y = p.index,
                m = p.pos,
                h = p.key,
                b = p.parentPos,
                E = p.level,
                x = p.nodes,
                N = { node: g, nodes: x, index: y, key: h, pos: m, level: E },
                T = ft(h, m);
              (d[m] = N),
                (c[T] = N),
                (N.parent = d[b]),
                N.parent &&
                  ((N.parent.children = N.parent.children || []),
                  N.parent.children.push(N)),
                e && e(N, f);
            },
            { externalGetKey: i, childrenPropName: u, fieldNames: n },
          ),
          l && l(f),
          f
        );
      }
      function vt(t, a) {
        var o = a.expandedKeys,
          e = a.selectedKeys,
          l = a.loadedKeys,
          s = a.loadingKeys,
          u = a.checkedKeys,
          n = a.halfCheckedKeys,
          r = a.dragOverNodeKey,
          i = a.dropPosition,
          d = a.keyEntities,
          c = Re(d, t),
          f = {
            eventKey: t,
            expanded: o.indexOf(t) !== -1,
            selected: e.indexOf(t) !== -1,
            loaded: l.indexOf(t) !== -1,
            loading: s.indexOf(t) !== -1,
            checked: u.indexOf(t) !== -1,
            halfChecked: n.indexOf(t) !== -1,
            pos: String(c ? c.pos : ''),
            dragOver: r === t && i === 0,
            dragOverGapTop: r === t && i === -1,
            dragOverGapBottom: r === t && i === 1,
          };
        return f;
      }
      function oe(t) {
        var a = t.data,
          o = t.expanded,
          e = t.selected,
          l = t.checked,
          s = t.loaded,
          u = t.loading,
          n = t.halfChecked,
          r = t.dragOver,
          i = t.dragOverGapTop,
          d = t.dragOverGapBottom,
          c = t.pos,
          f = t.active,
          p = t.eventKey,
          g = (0, j.Z)(
            (0, j.Z)({}, a),
            {},
            {
              expanded: o,
              selected: e,
              checked: l,
              loaded: s,
              loading: u,
              halfChecked: n,
              dragOver: r,
              dragOverGapTop: i,
              dragOverGapBottom: d,
              pos: c,
              active: f,
              key: p,
            },
          );
        return (
          'props' in g ||
            Object.defineProperty(g, 'props', {
              get: function () {
                return (
                  (0, Y.ZP)(
                    !1,
                    'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.',
                  ),
                  t
                );
              },
            }),
          g
        );
      }
      var nr = [
          'eventKey',
          'className',
          'style',
          'dragOver',
          'dragOverGapTop',
          'dragOverGapBottom',
          'isLeaf',
          'isStart',
          'isEnd',
          'expanded',
          'selected',
          'checked',
          'halfChecked',
          'loading',
          'domRef',
          'active',
          'data',
          'onMouseMove',
          'selectable',
        ],
        Qt = 'open',
        qt = 'close',
        rr = '---',
        ar = (function (t) {
          (0, Ge.Z)(o, t);
          var a = (0, He.Z)(o);
          function o() {
            var e;
            (0, Se.Z)(this, o);
            for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
              s[u] = arguments[u];
            return (
              (e = a.call.apply(a, [this].concat(s))),
              (e.state = { dragNodeHighlight: !1 }),
              (e.selectHandle = void 0),
              (e.cacheIndent = void 0),
              (e.onSelectorClick = function (n) {
                var r = e.props.context.onNodeClick;
                r(n, oe(e.props)),
                  e.isSelectable() ? e.onSelect(n) : e.onCheck(n);
              }),
              (e.onSelectorDoubleClick = function (n) {
                var r = e.props.context.onNodeDoubleClick;
                r(n, oe(e.props));
              }),
              (e.onSelect = function (n) {
                if (!e.isDisabled()) {
                  var r = e.props.context.onNodeSelect;
                  r(n, oe(e.props));
                }
              }),
              (e.onCheck = function (n) {
                if (!e.isDisabled()) {
                  var r = e.props,
                    i = r.disableCheckbox,
                    d = r.checked,
                    c = e.props.context.onNodeCheck;
                  if (!(!e.isCheckable() || i)) {
                    var f = !d;
                    c(n, oe(e.props), f);
                  }
                }
              }),
              (e.onMouseEnter = function (n) {
                var r = e.props.context.onNodeMouseEnter;
                r(n, oe(e.props));
              }),
              (e.onMouseLeave = function (n) {
                var r = e.props.context.onNodeMouseLeave;
                r(n, oe(e.props));
              }),
              (e.onContextMenu = function (n) {
                var r = e.props.context.onNodeContextMenu;
                r(n, oe(e.props));
              }),
              (e.onDragStart = function (n) {
                var r = e.props.context.onNodeDragStart;
                n.stopPropagation(),
                  e.setState({ dragNodeHighlight: !0 }),
                  r(n, (0, le.Z)(e));
                try {
                  n.dataTransfer.setData('text/plain', '');
                } catch (i) {}
              }),
              (e.onDragEnter = function (n) {
                var r = e.props.context.onNodeDragEnter;
                n.preventDefault(), n.stopPropagation(), r(n, (0, le.Z)(e));
              }),
              (e.onDragOver = function (n) {
                var r = e.props.context.onNodeDragOver;
                n.preventDefault(), n.stopPropagation(), r(n, (0, le.Z)(e));
              }),
              (e.onDragLeave = function (n) {
                var r = e.props.context.onNodeDragLeave;
                n.stopPropagation(), r(n, (0, le.Z)(e));
              }),
              (e.onDragEnd = function (n) {
                var r = e.props.context.onNodeDragEnd;
                n.stopPropagation(),
                  e.setState({ dragNodeHighlight: !1 }),
                  r(n, (0, le.Z)(e));
              }),
              (e.onDrop = function (n) {
                var r = e.props.context.onNodeDrop;
                n.preventDefault(),
                  n.stopPropagation(),
                  e.setState({ dragNodeHighlight: !1 }),
                  r(n, (0, le.Z)(e));
              }),
              (e.onExpand = function (n) {
                var r = e.props,
                  i = r.loading,
                  d = r.context.onNodeExpand;
                i || d(n, oe(e.props));
              }),
              (e.setSelectHandle = function (n) {
                e.selectHandle = n;
              }),
              (e.getNodeState = function () {
                var n = e.props.expanded;
                return e.isLeaf() ? null : n ? Qt : qt;
              }),
              (e.hasChildren = function () {
                var n = e.props.eventKey,
                  r = e.props.context.keyEntities,
                  i = Re(r, n) || {},
                  d = i.children;
                return !!(d || []).length;
              }),
              (e.isLeaf = function () {
                var n = e.props,
                  r = n.isLeaf,
                  i = n.loaded,
                  d = e.props.context.loadData,
                  c = e.hasChildren();
                return r === !1 ? !1 : r || (!d && !c) || (d && i && !c);
              }),
              (e.isDisabled = function () {
                var n = e.props.disabled,
                  r = e.props.context.disabled;
                return !!(r || n);
              }),
              (e.isCheckable = function () {
                var n = e.props.checkable,
                  r = e.props.context.checkable;
                return !r || n === !1 ? !1 : r;
              }),
              (e.syncLoadData = function (n) {
                var r = n.expanded,
                  i = n.loading,
                  d = n.loaded,
                  c = e.props.context,
                  f = c.loadData,
                  p = c.onNodeLoad;
                i ||
                  (f &&
                    r &&
                    !e.isLeaf() &&
                    !e.hasChildren() &&
                    !d &&
                    p(oe(e.props)));
              }),
              (e.isDraggable = function () {
                var n = e.props,
                  r = n.data,
                  i = n.context.draggable;
                return !!(i && (!i.nodeDraggable || i.nodeDraggable(r)));
              }),
              (e.renderDragHandler = function () {
                var n = e.props.context,
                  r = n.draggable,
                  i = n.prefixCls;
                return r != null && r.icon
                  ? v.createElement(
                      'span',
                      { className: ''.concat(i, '-draggable-icon') },
                      r.icon,
                    )
                  : null;
              }),
              (e.renderSwitcherIconDom = function (n) {
                var r = e.props.switcherIcon,
                  i = e.props.context.switcherIcon,
                  d = r || i;
                return typeof d == 'function'
                  ? d((0, j.Z)((0, j.Z)({}, e.props), {}, { isLeaf: n }))
                  : d;
              }),
              (e.renderSwitcher = function () {
                var n = e.props.expanded,
                  r = e.props.context.prefixCls;
                if (e.isLeaf()) {
                  var i = e.renderSwitcherIconDom(!0);
                  return i !== !1
                    ? v.createElement(
                        'span',
                        {
                          className: se()(
                            ''.concat(r, '-switcher'),
                            ''.concat(r, '-switcher-noop'),
                          ),
                        },
                        i,
                      )
                    : null;
                }
                var d = se()(
                    ''.concat(r, '-switcher'),
                    ''.concat(r, '-switcher_').concat(n ? Qt : qt),
                  ),
                  c = e.renderSwitcherIconDom(!1);
                return c !== !1
                  ? v.createElement(
                      'span',
                      { onClick: e.onExpand, className: d },
                      c,
                    )
                  : null;
              }),
              (e.renderCheckbox = function () {
                var n = e.props,
                  r = n.checked,
                  i = n.halfChecked,
                  d = n.disableCheckbox,
                  c = e.props.context.prefixCls,
                  f = e.isDisabled(),
                  p = e.isCheckable();
                if (!p) return null;
                var g = typeof p != 'boolean' ? p : null;
                return v.createElement(
                  'span',
                  {
                    className: se()(
                      ''.concat(c, '-checkbox'),
                      r && ''.concat(c, '-checkbox-checked'),
                      !r && i && ''.concat(c, '-checkbox-indeterminate'),
                      (f || d) && ''.concat(c, '-checkbox-disabled'),
                    ),
                    onClick: e.onCheck,
                  },
                  g,
                );
              }),
              (e.renderIcon = function () {
                var n = e.props.loading,
                  r = e.props.context.prefixCls;
                return v.createElement('span', {
                  className: se()(
                    ''.concat(r, '-iconEle'),
                    ''.concat(r, '-icon__').concat(e.getNodeState() || 'docu'),
                    n && ''.concat(r, '-icon_loading'),
                  ),
                });
              }),
              (e.renderSelector = function () {
                var n = e.state.dragNodeHighlight,
                  r = e.props,
                  i = r.title,
                  d = i === void 0 ? rr : i,
                  c = r.selected,
                  f = r.icon,
                  p = r.loading,
                  g = r.data,
                  y = e.props.context,
                  m = y.prefixCls,
                  h = y.showIcon,
                  b = y.icon,
                  E = y.loadData,
                  x = y.titleRender,
                  N = e.isDisabled(),
                  T = ''.concat(m, '-node-content-wrapper'),
                  D;
                if (h) {
                  var P = f || b;
                  D = P
                    ? v.createElement(
                        'span',
                        {
                          className: se()(
                            ''.concat(m, '-iconEle'),
                            ''.concat(m, '-icon__customize'),
                          ),
                        },
                        typeof P == 'function' ? P(e.props) : P,
                      )
                    : e.renderIcon();
                } else E && p && (D = e.renderIcon());
                var R;
                typeof d == 'function' ? (R = d(g)) : x ? (R = x(g)) : (R = d);
                var F = v.createElement(
                  'span',
                  { className: ''.concat(m, '-title') },
                  R,
                );
                return v.createElement(
                  'span',
                  {
                    ref: e.setSelectHandle,
                    title: typeof d == 'string' ? d : '',
                    className: se()(
                      ''.concat(T),
                      ''.concat(T, '-').concat(e.getNodeState() || 'normal'),
                      !N && (c || n) && ''.concat(m, '-node-selected'),
                    ),
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    onContextMenu: e.onContextMenu,
                    onClick: e.onSelectorClick,
                    onDoubleClick: e.onSelectorDoubleClick,
                  },
                  D,
                  F,
                  e.renderDropIndicator(),
                );
              }),
              (e.renderDropIndicator = function () {
                var n = e.props,
                  r = n.disabled,
                  i = n.eventKey,
                  d = e.props.context,
                  c = d.draggable,
                  f = d.dropLevelOffset,
                  p = d.dropPosition,
                  g = d.prefixCls,
                  y = d.indent,
                  m = d.dropIndicatorRender,
                  h = d.dragOverNodeKey,
                  b = d.direction,
                  E = !!c,
                  x = !r && E && h === i,
                  N = y != null ? y : e.cacheIndent;
                return (
                  (e.cacheIndent = y),
                  x
                    ? m({
                        dropPosition: p,
                        dropLevelOffset: f,
                        indent: N,
                        prefixCls: g,
                        direction: b,
                      })
                    : null
                );
              }),
              e
            );
          }
          return (
            (0, Ke.Z)(o, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.syncLoadData(this.props);
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.syncLoadData(this.props);
                },
              },
              {
                key: 'isSelectable',
                value: function () {
                  var l = this.props.selectable,
                    s = this.props.context.selectable;
                  return typeof l == 'boolean' ? l : s;
                },
              },
              {
                key: 'render',
                value: function () {
                  var l,
                    s = this.props,
                    u = s.eventKey,
                    n = s.className,
                    r = s.style,
                    i = s.dragOver,
                    d = s.dragOverGapTop,
                    c = s.dragOverGapBottom,
                    f = s.isLeaf,
                    p = s.isStart,
                    g = s.isEnd,
                    y = s.expanded,
                    m = s.selected,
                    h = s.checked,
                    b = s.halfChecked,
                    E = s.loading,
                    x = s.domRef,
                    N = s.active,
                    T = s.data,
                    D = s.onMouseMove,
                    P = s.selectable,
                    R = (0, ee.Z)(s, nr),
                    F = this.props.context,
                    O = F.prefixCls,
                    $ = F.filterTreeNode,
                    M = F.keyEntities,
                    U = F.dropContainerKey,
                    te = F.dropTargetKey,
                    de = F.draggingNodeKey,
                    J = this.isDisabled(),
                    q = z(R, { aria: !0, data: !0 }),
                    Ce = Re(M, u) || {},
                    Te = Ce.level,
                    we = g[g.length - 1],
                    ce = this.isDraggable(),
                    pe = !J && ce,
                    ke = de === u,
                    Oe = P !== void 0 ? { 'aria-selected': !!P } : void 0;
                  return v.createElement(
                    'div',
                    (0, ie.Z)(
                      {
                        ref: x,
                        className: se()(
                          n,
                          ''.concat(O, '-treenode'),
                          ((l = {}),
                          (0, A.Z)(l, ''.concat(O, '-treenode-disabled'), J),
                          (0, A.Z)(
                            l,
                            ''
                              .concat(O, '-treenode-switcher-')
                              .concat(y ? 'open' : 'close'),
                            !f,
                          ),
                          (0, A.Z)(
                            l,
                            ''.concat(O, '-treenode-checkbox-checked'),
                            h,
                          ),
                          (0, A.Z)(
                            l,
                            ''.concat(O, '-treenode-checkbox-indeterminate'),
                            b,
                          ),
                          (0, A.Z)(l, ''.concat(O, '-treenode-selected'), m),
                          (0, A.Z)(l, ''.concat(O, '-treenode-loading'), E),
                          (0, A.Z)(l, ''.concat(O, '-treenode-active'), N),
                          (0, A.Z)(l, ''.concat(O, '-treenode-leaf-last'), we),
                          (0, A.Z)(l, ''.concat(O, '-treenode-draggable'), ce),
                          (0, A.Z)(l, 'dragging', ke),
                          (0, A.Z)(l, 'drop-target', te === u),
                          (0, A.Z)(l, 'drop-container', U === u),
                          (0, A.Z)(l, 'drag-over', !J && i),
                          (0, A.Z)(l, 'drag-over-gap-top', !J && d),
                          (0, A.Z)(l, 'drag-over-gap-bottom', !J && c),
                          (0, A.Z)(l, 'filter-node', $ && $(oe(this.props))),
                          l),
                        ),
                        style: r,
                        draggable: pe,
                        'aria-grabbed': ke,
                        onDragStart: pe ? this.onDragStart : void 0,
                        onDragEnter: ce ? this.onDragEnter : void 0,
                        onDragOver: ce ? this.onDragOver : void 0,
                        onDragLeave: ce ? this.onDragLeave : void 0,
                        onDrop: ce ? this.onDrop : void 0,
                        onDragEnd: ce ? this.onDragEnd : void 0,
                        onMouseMove: D,
                      },
                      Oe,
                      q,
                    ),
                    v.createElement(Vn, {
                      prefixCls: O,
                      level: Te,
                      isStart: p,
                      isEnd: g,
                    }),
                    this.renderDragHandler(),
                    this.renderSwitcher(),
                    this.renderCheckbox(),
                    this.renderSelector(),
                  );
                },
              },
            ]),
            o
          );
        })(v.Component),
        Tt = function (a) {
          return v.createElement(k.Consumer, null, function (o) {
            return v.createElement(ar, (0, ie.Z)({}, a, { context: o }));
          });
        };
      (Tt.displayName = 'TreeNode'), (Tt.isTreeNode = 1);
      var Ot = Tt;
      function or(t, a) {
        var o = v.useState(!1),
          e = (0, H.Z)(o, 2),
          l = e[0],
          s = e[1];
        (0, Q.Z)(
          function () {
            if (l)
              return (
                t(),
                function () {
                  a();
                }
              );
          },
          [l],
        ),
          (0, Q.Z)(function () {
            return (
              s(!0),
              function () {
                s(!1);
              }
            );
          }, []);
      }
      var ir = [
          'className',
          'style',
          'motion',
          'motionNodes',
          'motionType',
          'onMotionStart',
          'onMotionEnd',
          'active',
          'treeNodeRequiredProps',
        ],
        en = function (a, o) {
          var e = a.className,
            l = a.style,
            s = a.motion,
            u = a.motionNodes,
            n = a.motionType,
            r = a.onMotionStart,
            i = a.onMotionEnd,
            d = a.active,
            c = a.treeNodeRequiredProps,
            f = (0, ee.Z)(a, ir),
            p = v.useState(!0),
            g = (0, H.Z)(p, 2),
            y = g[0],
            m = g[1],
            h = v.useContext(k),
            b = h.prefixCls,
            E = u && n !== 'hide';
          (0, Q.Z)(
            function () {
              u && E !== y && m(E);
            },
            [u],
          );
          var x = function () {
              u && r();
            },
            N = v.useRef(!1),
            T = function () {
              u && !N.current && ((N.current = !0), i());
            };
          or(x, T);
          var D = function (R) {
            E === R && T();
          };
          return u
            ? v.createElement(
                Un.ZP,
                (0, ie.Z)({ ref: o, visible: y }, s, {
                  motionAppear: n === 'show',
                  onVisibleChanged: D,
                }),
                function (P, R) {
                  var F = P.className,
                    O = P.style;
                  return v.createElement(
                    'div',
                    {
                      ref: R,
                      className: se()(''.concat(b, '-treenode-motion'), F),
                      style: O,
                    },
                    u.map(function ($) {
                      var M = (0, ie.Z)({}, (X($.data), $.data)),
                        U = $.title,
                        te = $.key,
                        de = $.isStart,
                        J = $.isEnd;
                      delete M.children;
                      var q = vt(te, c);
                      return v.createElement(
                        Ot,
                        (0, ie.Z)({}, M, q, {
                          title: U,
                          active: d,
                          data: $.data,
                          key: te,
                          isStart: de,
                          isEnd: J,
                        }),
                      );
                    }),
                  );
                },
              )
            : v.createElement(
                Ot,
                (0, ie.Z)({ domRef: o, className: e, style: l }, f, {
                  active: d,
                }),
              );
        };
      en.displayName = 'MotionTreeNode';
      var lr = v.forwardRef(en),
        sr = lr;
      function dr() {
        var t =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
          a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
          o = t.length,
          e = a.length;
        if (Math.abs(o - e) !== 1) return { add: !1, key: null };
        function l(s, u) {
          var n = new Map();
          s.forEach(function (i) {
            n.set(i, !0);
          });
          var r = u.filter(function (i) {
            return !n.has(i);
          });
          return r.length === 1 ? r[0] : null;
        }
        return o < e ? { add: !0, key: l(t, a) } : { add: !1, key: l(a, t) };
      }
      function tn(t, a, o) {
        var e = t.findIndex(function (n) {
            return n.key === o;
          }),
          l = t[e + 1],
          s = a.findIndex(function (n) {
            return n.key === o;
          });
        if (l) {
          var u = a.findIndex(function (n) {
            return n.key === l.key;
          });
          return a.slice(s + 1, u);
        }
        return a.slice(s + 1);
      }
      var cr = [
          'prefixCls',
          'data',
          'selectable',
          'checkable',
          'expandedKeys',
          'selectedKeys',
          'checkedKeys',
          'loadedKeys',
          'loadingKeys',
          'halfCheckedKeys',
          'keyEntities',
          'disabled',
          'dragging',
          'dragOverNodeKey',
          'dropPosition',
          'motion',
          'height',
          'itemHeight',
          'virtual',
          'focusable',
          'activeItem',
          'focused',
          'tabIndex',
          'onKeyDown',
          'onFocus',
          'onBlur',
          'onActiveChange',
          'onListChangeStart',
          'onListChangeEnd',
        ],
        nn = {
          width: 0,
          height: 0,
          display: 'flex',
          overflow: 'hidden',
          opacity: 0,
          border: 0,
          padding: 0,
          margin: 0,
        },
        ur = function () {},
        tt = 'RC_TREE_MOTION_'.concat(Math.random()),
        Pt = { key: tt },
        rn = { key: tt, level: 0, index: 0, pos: '0', node: Pt, nodes: [Pt] },
        an = {
          parent: null,
          children: [],
          pos: rn.pos,
          data: Pt,
          title: null,
          key: tt,
          isStart: [],
          isEnd: [],
        };
      function on(t, a, o, e) {
        return a === !1 || !o ? t : t.slice(0, Math.ceil(o / e) + 1);
      }
      function ln(t) {
        var a = t.key,
          o = t.pos;
        return ft(a, o);
      }
      function fr(t) {
        for (var a = String(t.data.key), o = t; o.parent; )
          (o = o.parent), (a = ''.concat(o.data.key, ' > ').concat(a));
        return a;
      }
      var sn = v.forwardRef(function (t, a) {
        var o = t.prefixCls,
          e = t.data,
          l = t.selectable,
          s = t.checkable,
          u = t.expandedKeys,
          n = t.selectedKeys,
          r = t.checkedKeys,
          i = t.loadedKeys,
          d = t.loadingKeys,
          c = t.halfCheckedKeys,
          f = t.keyEntities,
          p = t.disabled,
          g = t.dragging,
          y = t.dragOverNodeKey,
          m = t.dropPosition,
          h = t.motion,
          b = t.height,
          E = t.itemHeight,
          x = t.virtual,
          N = t.focusable,
          T = t.activeItem,
          D = t.focused,
          P = t.tabIndex,
          R = t.onKeyDown,
          F = t.onFocus,
          O = t.onBlur,
          $ = t.onActiveChange,
          M = t.onListChangeStart,
          U = t.onListChangeEnd,
          te = (0, ee.Z)(t, cr),
          de = v.useRef(null),
          J = v.useRef(null);
        v.useImperativeHandle(a, function () {
          return {
            scrollTo: function (Pe) {
              de.current.scrollTo(Pe);
            },
            getIndentWidth: function () {
              return J.current.offsetWidth;
            },
          };
        });
        var q = v.useState(u),
          Ce = (0, H.Z)(q, 2),
          Te = Ce[0],
          we = Ce[1],
          ce = v.useState(e),
          pe = (0, H.Z)(ce, 2),
          ke = pe[0],
          Oe = pe[1],
          ze = v.useState(e),
          $e = (0, H.Z)(ze, 2),
          Be = $e[0],
          me = $e[1],
          ne = v.useState([]),
          he = (0, H.Z)(ne, 2),
          ge = he[0],
          re = he[1],
          Ie = v.useState(null),
          nt = (0, H.Z)(Ie, 2),
          rt = nt[0],
          _e = nt[1],
          st = v.useRef(e);
        st.current = e;
        function je() {
          var V = st.current;
          Oe(V), me(V), re([]), _e(null), U();
        }
        (0, Q.Z)(
          function () {
            we(u);
            var V = dr(Te, u);
            if (V.key !== null)
              if (V.add) {
                var Pe = ke.findIndex(function (ot) {
                    var Je = ot.key;
                    return Je === V.key;
                  }),
                  Ee = on(tn(ke, e, V.key), x, b, E),
                  xe = ke.slice();
                xe.splice(Pe + 1, 0, an), me(xe), re(Ee), _e('show');
              } else {
                var ue = e.findIndex(function (ot) {
                    var Je = ot.key;
                    return Je === V.key;
                  }),
                  Me = on(tn(e, ke, V.key), x, b, E),
                  at = e.slice();
                at.splice(ue + 1, 0, an), me(at), re(Me), _e('hide');
              }
            else ke !== e && (Oe(e), me(e));
          },
          [u, e],
        ),
          v.useEffect(
            function () {
              g || je();
            },
            [g],
          );
        var ht = h ? Be : e,
          Xe = {
            expandedKeys: u,
            selectedKeys: n,
            loadedKeys: i,
            loadingKeys: d,
            checkedKeys: r,
            halfCheckedKeys: c,
            dragOverNodeKey: y,
            dropPosition: m,
            keyEntities: f,
          };
        return v.createElement(
          v.Fragment,
          null,
          D &&
            T &&
            v.createElement(
              'span',
              { style: nn, 'aria-live': 'assertive' },
              fr(T),
            ),
          v.createElement(
            'div',
            null,
            v.createElement('input', {
              style: nn,
              disabled: N === !1 || p,
              tabIndex: N !== !1 ? P : null,
              onKeyDown: R,
              onFocus: F,
              onBlur: O,
              value: '',
              onChange: ur,
              'aria-label': 'for screen reader',
            }),
          ),
          v.createElement(
            'div',
            {
              className: ''.concat(o, '-treenode'),
              'aria-hidden': !0,
              style: {
                position: 'absolute',
                pointerEvents: 'none',
                visibility: 'hidden',
                height: 0,
                overflow: 'hidden',
                border: 0,
                padding: 0,
              },
            },
            v.createElement(
              'div',
              { className: ''.concat(o, '-indent') },
              v.createElement('div', {
                ref: J,
                className: ''.concat(o, '-indent-unit'),
              }),
            ),
          ),
          v.createElement(
            _n,
            (0, ie.Z)({}, te, {
              data: ht,
              itemKey: ln,
              height: b,
              fullHeight: !1,
              virtual: x,
              itemHeight: E,
              prefixCls: ''.concat(o, '-list'),
              ref: de,
              onVisibleChange: function (Pe, Ee) {
                var xe = new Set(Pe),
                  ue = Ee.filter(function (Me) {
                    return !xe.has(Me);
                  });
                ue.some(function (Me) {
                  return ln(Me) === tt;
                }) && je();
              },
            }),
            function (V) {
              var Pe = V.pos,
                Ee = (0, ie.Z)({}, (X(V.data), V.data)),
                xe = V.title,
                ue = V.key,
                Me = V.isStart,
                at = V.isEnd,
                ot = ft(ue, Pe);
              delete Ee.key, delete Ee.children;
              var Je = vt(ot, Xe);
              return v.createElement(
                sr,
                (0, ie.Z)({}, Ee, Je, {
                  title: xe,
                  active: !!T && ue === T.key,
                  pos: Pe,
                  data: V.data,
                  isStart: Me,
                  isEnd: at,
                  motion: h,
                  motionNodes: ue === tt ? ge : null,
                  motionType: rt,
                  onMotionStart: M,
                  onMotionEnd: je,
                  treeNodeRequiredProps: Xe,
                  onMouseMove: function () {
                    $(null);
                  },
                }),
              );
            },
          ),
        );
      });
      sn.displayName = 'NodeList';
      var vr = sn,
        pr = null;
      function We(t, a) {
        if (!t) return [];
        var o = t.slice(),
          e = o.indexOf(a);
        return e >= 0 && o.splice(e, 1), o;
      }
      function Ye(t, a) {
        var o = (t || []).slice();
        return o.indexOf(a) === -1 && o.push(a), o;
      }
      function Mt(t) {
        return t.split('-');
      }
      function hr(t, a) {
        var o = [],
          e = Re(a, t);
        function l() {
          var s =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
          s.forEach(function (u) {
            var n = u.key,
              r = u.children;
            o.push(n), l(r);
          });
        }
        return l(e.children), o;
      }
      function gr(t) {
        if (t.parent) {
          var a = Mt(t.pos);
          return Number(a[a.length - 1]) === t.parent.children.length - 1;
        }
        return !1;
      }
      function yr(t) {
        var a = Mt(t.pos);
        return Number(a[a.length - 1]) === 0;
      }
      function dn(t, a, o, e, l, s, u, n, r, i) {
        var d,
          c = t.clientX,
          f = t.clientY,
          p = t.target.getBoundingClientRect(),
          g = p.top,
          y = p.height,
          m = (i === 'rtl' ? -1 : 1) * (((l == null ? void 0 : l.x) || 0) - c),
          h = (m - 12) / e,
          b = Re(n, o.props.eventKey);
        if (f < g + y / 2) {
          var E = u.findIndex(function (te) {
              return te.key === b.key;
            }),
            x = E <= 0 ? 0 : E - 1,
            N = u[x].key;
          b = Re(n, N);
        }
        var T = b.key,
          D = b,
          P = b.key,
          R = 0,
          F = 0;
        if (!r.includes(T))
          for (var O = 0; O < h && gr(b); O += 1) (b = b.parent), (F += 1);
        var $ = a.props.data,
          M = b.node,
          U = !0;
        return (
          yr(b) &&
          b.level === 0 &&
          f < g + y / 2 &&
          s({ dragNode: $, dropNode: M, dropPosition: -1 }) &&
          b.key === o.props.eventKey
            ? (R = -1)
            : (D.children || []).length && r.includes(P)
            ? s({ dragNode: $, dropNode: M, dropPosition: 0 })
              ? (R = 0)
              : (U = !1)
            : F === 0
            ? h > -1.5
              ? s({ dragNode: $, dropNode: M, dropPosition: 1 })
                ? (R = 1)
                : (U = !1)
              : s({ dragNode: $, dropNode: M, dropPosition: 0 })
              ? (R = 0)
              : s({ dragNode: $, dropNode: M, dropPosition: 1 })
              ? (R = 1)
              : (U = !1)
            : s({ dragNode: $, dropNode: M, dropPosition: 1 })
            ? (R = 1)
            : (U = !1),
          {
            dropPosition: R,
            dropLevelOffset: F,
            dropTargetKey: b.key,
            dropTargetPos: b.pos,
            dragOverNodeKey: P,
            dropContainerKey:
              R === 0
                ? null
                : ((d = b.parent) === null || d === void 0 ? void 0 : d.key) ||
                  null,
            dropAllowed: U,
          }
        );
      }
      function cn(t, a) {
        if (t) {
          var o = a.multiple;
          return o ? t.slice() : t.length ? [t[0]] : t;
        }
      }
      var mr = function (a) {
        return a;
      };
      function Sr(t, a) {
        if (!t) return [];
        var o = a || {},
          e = o.processProps,
          l = e === void 0 ? mr : e,
          s = Array.isArray(t) ? t : [t];
        return s.map(function (u) {
          var n = u.children,
            r = _objectWithoutProperties(u, pr),
            i = Sr(n, a);
          return React.createElement(
            TreeNode,
            _extends({ key: r.key }, l(r)),
            i,
          );
        });
      }
      function wt(t) {
        if (!t) return null;
        var a;
        if (Array.isArray(t)) a = { checkedKeys: t, halfCheckedKeys: void 0 };
        else if ((0, fe.Z)(t) === 'object')
          a = {
            checkedKeys: t.checked || void 0,
            halfCheckedKeys: t.halfChecked || void 0,
          };
        else
          return (
            (0, Y.ZP)(!1, '`checkedKeys` is not an array or an object'), null
          );
        return a;
      }
      function un(t, a) {
        var o = new Set();
        function e(l) {
          if (!o.has(l)) {
            var s = Re(a, l);
            if (s) {
              o.add(l);
              var u = s.parent,
                n = s.node;
              n.disabled || (u && e(u.key));
            }
          }
        }
        return (
          (t || []).forEach(function (l) {
            e(l);
          }),
          (0, ve.Z)(o)
        );
      }
      function fn(t, a) {
        var o = new Set();
        return (
          t.forEach(function (e) {
            a.has(e) || o.add(e);
          }),
          o
        );
      }
      function br(t) {
        var a = t || {},
          o = a.disabled,
          e = a.disableCheckbox,
          l = a.checkable;
        return !!(o || e) || l === !1;
      }
      function Er(t, a, o, e) {
        for (var l = new Set(t), s = new Set(), u = 0; u <= o; u += 1) {
          var n = a.get(u) || new Set();
          n.forEach(function (c) {
            var f = c.key,
              p = c.node,
              g = c.children,
              y = g === void 0 ? [] : g;
            l.has(f) &&
              !e(p) &&
              y
                .filter(function (m) {
                  return !e(m.node);
                })
                .forEach(function (m) {
                  l.add(m.key);
                });
          });
        }
        for (var r = new Set(), i = o; i >= 0; i -= 1) {
          var d = a.get(i) || new Set();
          d.forEach(function (c) {
            var f = c.parent,
              p = c.node;
            if (!(e(p) || !c.parent || r.has(c.parent.key))) {
              if (e(c.parent.node)) {
                r.add(f.key);
                return;
              }
              var g = !0,
                y = !1;
              (f.children || [])
                .filter(function (m) {
                  return !e(m.node);
                })
                .forEach(function (m) {
                  var h = m.key,
                    b = l.has(h);
                  g && !b && (g = !1), !y && (b || s.has(h)) && (y = !0);
                }),
                g && l.add(f.key),
                y && s.add(f.key),
                r.add(f.key);
            }
          });
        }
        return {
          checkedKeys: Array.from(l),
          halfCheckedKeys: Array.from(fn(s, l)),
        };
      }
      function xr(t, a, o, e, l) {
        for (var s = new Set(t), u = new Set(a), n = 0; n <= e; n += 1) {
          var r = o.get(n) || new Set();
          r.forEach(function (f) {
            var p = f.key,
              g = f.node,
              y = f.children,
              m = y === void 0 ? [] : y;
            !s.has(p) &&
              !u.has(p) &&
              !l(g) &&
              m
                .filter(function (h) {
                  return !l(h.node);
                })
                .forEach(function (h) {
                  s.delete(h.key);
                });
          });
        }
        u = new Set();
        for (var i = new Set(), d = e; d >= 0; d -= 1) {
          var c = o.get(d) || new Set();
          c.forEach(function (f) {
            var p = f.parent,
              g = f.node;
            if (!(l(g) || !f.parent || i.has(f.parent.key))) {
              if (l(f.parent.node)) {
                i.add(p.key);
                return;
              }
              var y = !0,
                m = !1;
              (p.children || [])
                .filter(function (h) {
                  return !l(h.node);
                })
                .forEach(function (h) {
                  var b = h.key,
                    E = s.has(b);
                  y && !E && (y = !1), !m && (E || u.has(b)) && (m = !0);
                }),
                y || s.delete(p.key),
                m && u.add(p.key),
                i.add(p.key);
            }
          });
        }
        return {
          checkedKeys: Array.from(s),
          halfCheckedKeys: Array.from(fn(u, s)),
        };
      }
      function Lt(t, a, o, e) {
        var l = [],
          s;
        e ? (s = e) : (s = br);
        var u = new Set(
            t.filter(function (d) {
              var c = !!Re(o, d);
              return c || l.push(d), c;
            }),
          ),
          n = new Map(),
          r = 0;
        Object.keys(o).forEach(function (d) {
          var c = o[d],
            f = c.level,
            p = n.get(f);
          p || ((p = new Set()), n.set(f, p)), p.add(c), (r = Math.max(r, f));
        }),
          (0, Y.ZP)(
            !l.length,
            'Tree missing follow keys: '.concat(
              l
                .slice(0, 100)
                .map(function (d) {
                  return "'".concat(d, "'");
                })
                .join(', '),
            ),
          );
        var i;
        return (
          a === !0
            ? (i = Er(u, n, r, s))
            : (i = xr(u, a.halfCheckedKeys, n, r, s)),
          i
        );
      }
      var Kr = 10,
        vn = (function (t) {
          (0, Ge.Z)(o, t);
          var a = (0, He.Z)(o);
          function o() {
            var e;
            (0, Se.Z)(this, o);
            for (var l = arguments.length, s = new Array(l), u = 0; u < l; u++)
              s[u] = arguments[u];
            return (
              (e = a.call.apply(a, [this].concat(s))),
              (e.destroyed = !1),
              (e.delayedDragEnterLogic = void 0),
              (e.loadingRetryTimes = {}),
              (e.state = {
                keyEntities: {},
                indent: null,
                selectedKeys: [],
                checkedKeys: [],
                halfCheckedKeys: [],
                loadedKeys: [],
                loadingKeys: [],
                expandedKeys: [],
                draggingNodeKey: null,
                dragChildrenKeys: [],
                dropTargetKey: null,
                dropPosition: null,
                dropContainerKey: null,
                dropLevelOffset: null,
                dropTargetPos: null,
                dropAllowed: !0,
                dragOverNodeKey: null,
                treeData: [],
                flattenNodes: [],
                focused: !1,
                activeKey: null,
                listChanging: !1,
                prevProps: null,
                fieldNames: Kt(),
              }),
              (e.dragStartMousePosition = null),
              (e.dragNode = void 0),
              (e.currentMouseOverDroppableNodeKey = null),
              (e.listRef = v.createRef()),
              (e.onNodeDragStart = function (n, r) {
                var i = e.state,
                  d = i.expandedKeys,
                  c = i.keyEntities,
                  f = e.props.onDragStart,
                  p = r.props.eventKey;
                (e.dragNode = r),
                  (e.dragStartMousePosition = { x: n.clientX, y: n.clientY });
                var g = We(d, p);
                e.setState({
                  draggingNodeKey: p,
                  dragChildrenKeys: hr(p, c),
                  indent: e.listRef.current.getIndentWidth(),
                }),
                  e.setExpandedKeys(g),
                  window.addEventListener('dragend', e.onWindowDragEnd),
                  f == null || f({ event: n, node: oe(r.props) });
              }),
              (e.onNodeDragEnter = function (n, r) {
                var i = e.state,
                  d = i.expandedKeys,
                  c = i.keyEntities,
                  f = i.dragChildrenKeys,
                  p = i.flattenNodes,
                  g = i.indent,
                  y = e.props,
                  m = y.onDragEnter,
                  h = y.onExpand,
                  b = y.allowDrop,
                  E = y.direction,
                  x = r.props,
                  N = x.pos,
                  T = x.eventKey,
                  D = (0, le.Z)(e),
                  P = D.dragNode;
                if (
                  (e.currentMouseOverDroppableNodeKey !== T &&
                    (e.currentMouseOverDroppableNodeKey = T),
                  !P)
                ) {
                  e.resetDragState();
                  return;
                }
                var R = dn(n, P, r, g, e.dragStartMousePosition, b, p, c, d, E),
                  F = R.dropPosition,
                  O = R.dropLevelOffset,
                  $ = R.dropTargetKey,
                  M = R.dropContainerKey,
                  U = R.dropTargetPos,
                  te = R.dropAllowed,
                  de = R.dragOverNodeKey;
                if (f.indexOf($) !== -1 || !te) {
                  e.resetDragState();
                  return;
                }
                if (
                  (e.delayedDragEnterLogic || (e.delayedDragEnterLogic = {}),
                  Object.keys(e.delayedDragEnterLogic).forEach(function (J) {
                    clearTimeout(e.delayedDragEnterLogic[J]);
                  }),
                  P.props.eventKey !== r.props.eventKey &&
                    (n.persist(),
                    (e.delayedDragEnterLogic[N] = window.setTimeout(
                      function () {
                        if (e.state.draggingNodeKey !== null) {
                          var J = (0, ve.Z)(d),
                            q = Re(c, r.props.eventKey);
                          q &&
                            (q.children || []).length &&
                            (J = Ye(d, r.props.eventKey)),
                            'expandedKeys' in e.props || e.setExpandedKeys(J),
                            h == null ||
                              h(J, {
                                node: oe(r.props),
                                expanded: !0,
                                nativeEvent: n.nativeEvent,
                              });
                        }
                      },
                      800,
                    ))),
                  P.props.eventKey === $ && O === 0)
                ) {
                  e.resetDragState();
                  return;
                }
                e.setState({
                  dragOverNodeKey: de,
                  dropPosition: F,
                  dropLevelOffset: O,
                  dropTargetKey: $,
                  dropContainerKey: M,
                  dropTargetPos: U,
                  dropAllowed: te,
                }),
                  m == null ||
                    m({ event: n, node: oe(r.props), expandedKeys: d });
              }),
              (e.onNodeDragOver = function (n, r) {
                var i = e.state,
                  d = i.dragChildrenKeys,
                  c = i.flattenNodes,
                  f = i.keyEntities,
                  p = i.expandedKeys,
                  g = i.indent,
                  y = e.props,
                  m = y.onDragOver,
                  h = y.allowDrop,
                  b = y.direction,
                  E = (0, le.Z)(e),
                  x = E.dragNode;
                if (x) {
                  var N = dn(
                      n,
                      x,
                      r,
                      g,
                      e.dragStartMousePosition,
                      h,
                      c,
                      f,
                      p,
                      b,
                    ),
                    T = N.dropPosition,
                    D = N.dropLevelOffset,
                    P = N.dropTargetKey,
                    R = N.dropContainerKey,
                    F = N.dropAllowed,
                    O = N.dropTargetPos,
                    $ = N.dragOverNodeKey;
                  d.indexOf(P) !== -1 ||
                    !F ||
                    (x.props.eventKey === P && D === 0
                      ? (e.state.dropPosition === null &&
                          e.state.dropLevelOffset === null &&
                          e.state.dropTargetKey === null &&
                          e.state.dropContainerKey === null &&
                          e.state.dropTargetPos === null &&
                          e.state.dropAllowed === !1 &&
                          e.state.dragOverNodeKey === null) ||
                        e.resetDragState()
                      : (T === e.state.dropPosition &&
                          D === e.state.dropLevelOffset &&
                          P === e.state.dropTargetKey &&
                          R === e.state.dropContainerKey &&
                          O === e.state.dropTargetPos &&
                          F === e.state.dropAllowed &&
                          $ === e.state.dragOverNodeKey) ||
                        e.setState({
                          dropPosition: T,
                          dropLevelOffset: D,
                          dropTargetKey: P,
                          dropContainerKey: R,
                          dropTargetPos: O,
                          dropAllowed: F,
                          dragOverNodeKey: $,
                        }),
                    m == null || m({ event: n, node: oe(r.props) }));
                }
              }),
              (e.onNodeDragLeave = function (n, r) {
                e.currentMouseOverDroppableNodeKey === r.props.eventKey &&
                  !n.currentTarget.contains(n.relatedTarget) &&
                  (e.resetDragState(),
                  (e.currentMouseOverDroppableNodeKey = null));
                var i = e.props.onDragLeave;
                i == null || i({ event: n, node: oe(r.props) });
              }),
              (e.onWindowDragEnd = function (n) {
                e.onNodeDragEnd(n, null, !0),
                  window.removeEventListener('dragend', e.onWindowDragEnd);
              }),
              (e.onNodeDragEnd = function (n, r) {
                var i = e.props.onDragEnd;
                e.setState({ dragOverNodeKey: null }),
                  e.cleanDragState(),
                  i == null || i({ event: n, node: oe(r.props) }),
                  (e.dragNode = null),
                  window.removeEventListener('dragend', e.onWindowDragEnd);
              }),
              (e.onNodeDrop = function (n, r) {
                var i,
                  d =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : !1,
                  c = e.state,
                  f = c.dragChildrenKeys,
                  p = c.dropPosition,
                  g = c.dropTargetKey,
                  y = c.dropTargetPos,
                  m = c.dropAllowed;
                if (m) {
                  var h = e.props.onDrop;
                  if (
                    (e.setState({ dragOverNodeKey: null }),
                    e.cleanDragState(),
                    g !== null)
                  ) {
                    var b = (0, j.Z)(
                        (0, j.Z)({}, vt(g, e.getTreeNodeRequiredProps())),
                        {},
                        {
                          active:
                            ((i = e.getActiveItem()) === null || i === void 0
                              ? void 0
                              : i.key) === g,
                          data: Re(e.state.keyEntities, g).node,
                        },
                      ),
                      E = f.indexOf(g) !== -1;
                    (0, Y.ZP)(
                      !E,
                      "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.",
                    );
                    var x = Mt(y),
                      N = {
                        event: n,
                        node: oe(b),
                        dragNode: e.dragNode ? oe(e.dragNode.props) : null,
                        dragNodesKeys: [e.dragNode.props.eventKey].concat(f),
                        dropToGap: p !== 0,
                        dropPosition: p + Number(x[x.length - 1]),
                      };
                    d || h == null || h(N), (e.dragNode = null);
                  }
                }
              }),
              (e.cleanDragState = function () {
                var n = e.state.draggingNodeKey;
                n !== null &&
                  e.setState({
                    draggingNodeKey: null,
                    dropPosition: null,
                    dropContainerKey: null,
                    dropTargetKey: null,
                    dropLevelOffset: null,
                    dropAllowed: !0,
                    dragOverNodeKey: null,
                  }),
                  (e.dragStartMousePosition = null),
                  (e.currentMouseOverDroppableNodeKey = null);
              }),
              (e.triggerExpandActionExpand = function (n, r) {
                var i = e.state,
                  d = i.expandedKeys,
                  c = i.flattenNodes,
                  f = r.expanded,
                  p = r.key,
                  g = r.isLeaf;
                if (!(g || n.shiftKey || n.metaKey || n.ctrlKey)) {
                  var y = c.filter(function (h) {
                      return h.key === p;
                    })[0],
                    m = oe(
                      (0, j.Z)(
                        (0, j.Z)({}, vt(p, e.getTreeNodeRequiredProps())),
                        {},
                        { data: y.data },
                      ),
                    );
                  e.setExpandedKeys(f ? We(d, p) : Ye(d, p)),
                    e.onNodeExpand(n, m);
                }
              }),
              (e.onNodeClick = function (n, r) {
                var i = e.props,
                  d = i.onClick,
                  c = i.expandAction;
                c === 'click' && e.triggerExpandActionExpand(n, r),
                  d == null || d(n, r);
              }),
              (e.onNodeDoubleClick = function (n, r) {
                var i = e.props,
                  d = i.onDoubleClick,
                  c = i.expandAction;
                c === 'doubleClick' && e.triggerExpandActionExpand(n, r),
                  d == null || d(n, r);
              }),
              (e.onNodeSelect = function (n, r) {
                var i = e.state.selectedKeys,
                  d = e.state,
                  c = d.keyEntities,
                  f = d.fieldNames,
                  p = e.props,
                  g = p.onSelect,
                  y = p.multiple,
                  m = r.selected,
                  h = r[f.key],
                  b = !m;
                b ? (y ? (i = Ye(i, h)) : (i = [h])) : (i = We(i, h));
                var E = i
                  .map(function (x) {
                    var N = Re(c, x);
                    return N ? N.node : null;
                  })
                  .filter(function (x) {
                    return x;
                  });
                e.setUncontrolledState({ selectedKeys: i }),
                  g == null ||
                    g(i, {
                      event: 'select',
                      selected: b,
                      node: r,
                      selectedNodes: E,
                      nativeEvent: n.nativeEvent,
                    });
              }),
              (e.onNodeCheck = function (n, r, i) {
                var d = e.state,
                  c = d.keyEntities,
                  f = d.checkedKeys,
                  p = d.halfCheckedKeys,
                  g = e.props,
                  y = g.checkStrictly,
                  m = g.onCheck,
                  h = r.key,
                  b,
                  E = {
                    event: 'check',
                    node: r,
                    checked: i,
                    nativeEvent: n.nativeEvent,
                  };
                if (y) {
                  var x = i ? Ye(f, h) : We(f, h),
                    N = We(p, h);
                  (b = { checked: x, halfChecked: N }),
                    (E.checkedNodes = x
                      .map(function (O) {
                        return Re(c, O);
                      })
                      .filter(function (O) {
                        return O;
                      })
                      .map(function (O) {
                        return O.node;
                      })),
                    e.setUncontrolledState({ checkedKeys: x });
                } else {
                  var T = Lt([].concat((0, ve.Z)(f), [h]), !0, c),
                    D = T.checkedKeys,
                    P = T.halfCheckedKeys;
                  if (!i) {
                    var R = new Set(D);
                    R.delete(h);
                    var F = Lt(
                      Array.from(R),
                      { checked: !1, halfCheckedKeys: P },
                      c,
                    );
                    (D = F.checkedKeys), (P = F.halfCheckedKeys);
                  }
                  (b = D),
                    (E.checkedNodes = []),
                    (E.checkedNodesPositions = []),
                    (E.halfCheckedKeys = P),
                    D.forEach(function (O) {
                      var $ = Re(c, O);
                      if ($) {
                        var M = $.node,
                          U = $.pos;
                        E.checkedNodes.push(M),
                          E.checkedNodesPositions.push({ node: M, pos: U });
                      }
                    }),
                    e.setUncontrolledState({ checkedKeys: D }, !1, {
                      halfCheckedKeys: P,
                    });
                }
                m == null || m(b, E);
              }),
              (e.onNodeLoad = function (n) {
                var r = n.key,
                  i = new Promise(function (d, c) {
                    e.setState(function (f) {
                      var p = f.loadedKeys,
                        g = p === void 0 ? [] : p,
                        y = f.loadingKeys,
                        m = y === void 0 ? [] : y,
                        h = e.props,
                        b = h.loadData,
                        E = h.onLoad;
                      if (!b || g.indexOf(r) !== -1 || m.indexOf(r) !== -1)
                        return null;
                      var x = b(n);
                      return (
                        x
                          .then(function () {
                            var N = e.state.loadedKeys,
                              T = Ye(N, r);
                            E == null || E(T, { event: 'load', node: n }),
                              e.setUncontrolledState({ loadedKeys: T }),
                              e.setState(function (D) {
                                return { loadingKeys: We(D.loadingKeys, r) };
                              }),
                              d();
                          })
                          .catch(function (N) {
                            if (
                              (e.setState(function (D) {
                                return { loadingKeys: We(D.loadingKeys, r) };
                              }),
                              (e.loadingRetryTimes[r] =
                                (e.loadingRetryTimes[r] || 0) + 1),
                              e.loadingRetryTimes[r] >= Kr)
                            ) {
                              var T = e.state.loadedKeys;
                              (0, Y.ZP)(
                                !1,
                                'Retry for `loadData` many times but still failed. No more retry.',
                              ),
                                e.setUncontrolledState({
                                  loadedKeys: Ye(T, r),
                                }),
                                d();
                            }
                            c(N);
                          }),
                        { loadingKeys: Ye(m, r) }
                      );
                    });
                  });
                return i.catch(function () {}), i;
              }),
              (e.onNodeMouseEnter = function (n, r) {
                var i = e.props.onMouseEnter;
                i == null || i({ event: n, node: r });
              }),
              (e.onNodeMouseLeave = function (n, r) {
                var i = e.props.onMouseLeave;
                i == null || i({ event: n, node: r });
              }),
              (e.onNodeContextMenu = function (n, r) {
                var i = e.props.onRightClick;
                i && (n.preventDefault(), i({ event: n, node: r }));
              }),
              (e.onFocus = function () {
                var n = e.props.onFocus;
                e.setState({ focused: !0 });
                for (
                  var r = arguments.length, i = new Array(r), d = 0;
                  d < r;
                  d++
                )
                  i[d] = arguments[d];
                n == null || n.apply(void 0, i);
              }),
              (e.onBlur = function () {
                var n = e.props.onBlur;
                e.setState({ focused: !1 }), e.onActiveChange(null);
                for (
                  var r = arguments.length, i = new Array(r), d = 0;
                  d < r;
                  d++
                )
                  i[d] = arguments[d];
                n == null || n.apply(void 0, i);
              }),
              (e.getTreeNodeRequiredProps = function () {
                var n = e.state,
                  r = n.expandedKeys,
                  i = n.selectedKeys,
                  d = n.loadedKeys,
                  c = n.loadingKeys,
                  f = n.checkedKeys,
                  p = n.halfCheckedKeys,
                  g = n.dragOverNodeKey,
                  y = n.dropPosition,
                  m = n.keyEntities;
                return {
                  expandedKeys: r || [],
                  selectedKeys: i || [],
                  loadedKeys: d || [],
                  loadingKeys: c || [],
                  checkedKeys: f || [],
                  halfCheckedKeys: p || [],
                  dragOverNodeKey: g,
                  dropPosition: y,
                  keyEntities: m,
                };
              }),
              (e.setExpandedKeys = function (n) {
                var r = e.state,
                  i = r.treeData,
                  d = r.fieldNames,
                  c = Rt(i, n, d);
                e.setUncontrolledState(
                  { expandedKeys: n, flattenNodes: c },
                  !0,
                );
              }),
              (e.onNodeExpand = function (n, r) {
                var i = e.state.expandedKeys,
                  d = e.state,
                  c = d.listChanging,
                  f = d.fieldNames,
                  p = e.props,
                  g = p.onExpand,
                  y = p.loadData,
                  m = r.expanded,
                  h = r[f.key];
                if (!c) {
                  var b = i.indexOf(h),
                    E = !m;
                  if (
                    ((0, Y.ZP)(
                      (m && b !== -1) || (!m && b === -1),
                      'Expand state not sync with index check',
                    ),
                    E ? (i = Ye(i, h)) : (i = We(i, h)),
                    e.setExpandedKeys(i),
                    g == null ||
                      g(i, {
                        node: r,
                        expanded: E,
                        nativeEvent: n.nativeEvent,
                      }),
                    E && y)
                  ) {
                    var x = e.onNodeLoad(r);
                    x &&
                      x
                        .then(function () {
                          var N = Rt(e.state.treeData, i, f);
                          e.setUncontrolledState({ flattenNodes: N });
                        })
                        .catch(function () {
                          var N = e.state.expandedKeys,
                            T = We(N, h);
                          e.setExpandedKeys(T);
                        });
                  }
                }
              }),
              (e.onListChangeStart = function () {
                e.setUncontrolledState({ listChanging: !0 });
              }),
              (e.onListChangeEnd = function () {
                setTimeout(function () {
                  e.setUncontrolledState({ listChanging: !1 });
                });
              }),
              (e.onActiveChange = function (n) {
                var r = e.state.activeKey,
                  i = e.props,
                  d = i.onActiveChange,
                  c = i.itemScrollOffset,
                  f = c === void 0 ? 0 : c;
                r !== n &&
                  (e.setState({ activeKey: n }),
                  n !== null && e.scrollTo({ key: n, offset: f }),
                  d == null || d(n));
              }),
              (e.getActiveItem = function () {
                var n = e.state,
                  r = n.activeKey,
                  i = n.flattenNodes;
                return r === null
                  ? null
                  : i.find(function (d) {
                      var c = d.key;
                      return c === r;
                    }) || null;
              }),
              (e.offsetActiveKey = function (n) {
                var r = e.state,
                  i = r.flattenNodes,
                  d = r.activeKey,
                  c = i.findIndex(function (g) {
                    var y = g.key;
                    return y === d;
                  });
                c === -1 && n < 0 && (c = i.length),
                  (c = (c + n + i.length) % i.length);
                var f = i[c];
                if (f) {
                  var p = f.key;
                  e.onActiveChange(p);
                } else e.onActiveChange(null);
              }),
              (e.onKeyDown = function (n) {
                var r = e.state,
                  i = r.activeKey,
                  d = r.expandedKeys,
                  c = r.checkedKeys,
                  f = r.fieldNames,
                  p = e.props,
                  g = p.onKeyDown,
                  y = p.checkable,
                  m = p.selectable;
                switch (n.which) {
                  case Le.Z.UP: {
                    e.offsetActiveKey(-1), n.preventDefault();
                    break;
                  }
                  case Le.Z.DOWN: {
                    e.offsetActiveKey(1), n.preventDefault();
                    break;
                  }
                }
                var h = e.getActiveItem();
                if (h && h.data) {
                  var b = e.getTreeNodeRequiredProps(),
                    E =
                      h.data.isLeaf === !1 ||
                      !!(h.data[f.children] || []).length,
                    x = oe(
                      (0, j.Z)(
                        (0, j.Z)({}, vt(i, b)),
                        {},
                        { data: h.data, active: !0 },
                      ),
                    );
                  switch (n.which) {
                    case Le.Z.LEFT: {
                      E && d.includes(i)
                        ? e.onNodeExpand({}, x)
                        : h.parent && e.onActiveChange(h.parent.key),
                        n.preventDefault();
                      break;
                    }
                    case Le.Z.RIGHT: {
                      E && !d.includes(i)
                        ? e.onNodeExpand({}, x)
                        : h.children &&
                          h.children.length &&
                          e.onActiveChange(h.children[0].key),
                        n.preventDefault();
                      break;
                    }
                    case Le.Z.ENTER:
                    case Le.Z.SPACE: {
                      y &&
                      !x.disabled &&
                      x.checkable !== !1 &&
                      !x.disableCheckbox
                        ? e.onNodeCheck({}, x, !c.includes(i))
                        : !y &&
                          m &&
                          !x.disabled &&
                          x.selectable !== !1 &&
                          e.onNodeSelect({}, x);
                      break;
                    }
                  }
                }
                g == null || g(n);
              }),
              (e.setUncontrolledState = function (n) {
                var r =
                    arguments.length > 1 && arguments[1] !== void 0
                      ? arguments[1]
                      : !1,
                  i =
                    arguments.length > 2 && arguments[2] !== void 0
                      ? arguments[2]
                      : null;
                if (!e.destroyed) {
                  var d = !1,
                    c = !0,
                    f = {};
                  Object.keys(n).forEach(function (p) {
                    if (p in e.props) {
                      c = !1;
                      return;
                    }
                    (d = !0), (f[p] = n[p]);
                  }),
                    d && (!r || c) && e.setState((0, j.Z)((0, j.Z)({}, f), i));
                }
              }),
              (e.scrollTo = function (n) {
                e.listRef.current.scrollTo(n);
              }),
              e
            );
          }
          return (
            (0, Ke.Z)(
              o,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    (this.destroyed = !1), this.onUpdated();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    this.onUpdated();
                  },
                },
                {
                  key: 'onUpdated',
                  value: function () {
                    var l = this.props,
                      s = l.activeKey,
                      u = l.itemScrollOffset,
                      n = u === void 0 ? 0 : u;
                    s !== void 0 &&
                      s !== this.state.activeKey &&
                      (this.setState({ activeKey: s }),
                      s !== null && this.scrollTo({ key: s, offset: n }));
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    window.removeEventListener('dragend', this.onWindowDragEnd),
                      (this.destroyed = !0);
                  },
                },
                {
                  key: 'resetDragState',
                  value: function () {
                    this.setState({
                      dragOverNodeKey: null,
                      dropPosition: null,
                      dropLevelOffset: null,
                      dropTargetKey: null,
                      dropContainerKey: null,
                      dropTargetPos: null,
                      dropAllowed: !1,
                    });
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var l,
                      s = this.state,
                      u = s.focused,
                      n = s.flattenNodes,
                      r = s.keyEntities,
                      i = s.draggingNodeKey,
                      d = s.activeKey,
                      c = s.dropLevelOffset,
                      f = s.dropContainerKey,
                      p = s.dropTargetKey,
                      g = s.dropPosition,
                      y = s.dragOverNodeKey,
                      m = s.indent,
                      h = this.props,
                      b = h.prefixCls,
                      E = h.className,
                      x = h.style,
                      N = h.showLine,
                      T = h.focusable,
                      D = h.tabIndex,
                      P = D === void 0 ? 0 : D,
                      R = h.selectable,
                      F = h.showIcon,
                      O = h.icon,
                      $ = h.switcherIcon,
                      M = h.draggable,
                      U = h.checkable,
                      te = h.checkStrictly,
                      de = h.disabled,
                      J = h.motion,
                      q = h.loadData,
                      Ce = h.filterTreeNode,
                      Te = h.height,
                      we = h.itemHeight,
                      ce = h.virtual,
                      pe = h.titleRender,
                      ke = h.dropIndicatorRender,
                      Oe = h.onContextMenu,
                      ze = h.onScroll,
                      $e = h.direction,
                      Be = h.rootClassName,
                      me = h.rootStyle,
                      ne = z(this.props, { aria: !0, data: !0 }),
                      he;
                    return (
                      M &&
                        ((0, fe.Z)(M) === 'object'
                          ? (he = M)
                          : typeof M == 'function'
                          ? (he = { nodeDraggable: M })
                          : (he = {})),
                      v.createElement(
                        k.Provider,
                        {
                          value: {
                            prefixCls: b,
                            selectable: R,
                            showIcon: F,
                            icon: O,
                            switcherIcon: $,
                            draggable: he,
                            draggingNodeKey: i,
                            checkable: U,
                            checkStrictly: te,
                            disabled: de,
                            keyEntities: r,
                            dropLevelOffset: c,
                            dropContainerKey: f,
                            dropTargetKey: p,
                            dropPosition: g,
                            dragOverNodeKey: y,
                            indent: m,
                            direction: $e,
                            dropIndicatorRender: ke,
                            loadData: q,
                            filterTreeNode: Ce,
                            titleRender: pe,
                            onNodeClick: this.onNodeClick,
                            onNodeDoubleClick: this.onNodeDoubleClick,
                            onNodeExpand: this.onNodeExpand,
                            onNodeSelect: this.onNodeSelect,
                            onNodeCheck: this.onNodeCheck,
                            onNodeLoad: this.onNodeLoad,
                            onNodeMouseEnter: this.onNodeMouseEnter,
                            onNodeMouseLeave: this.onNodeMouseLeave,
                            onNodeContextMenu: this.onNodeContextMenu,
                            onNodeDragStart: this.onNodeDragStart,
                            onNodeDragEnter: this.onNodeDragEnter,
                            onNodeDragOver: this.onNodeDragOver,
                            onNodeDragLeave: this.onNodeDragLeave,
                            onNodeDragEnd: this.onNodeDragEnd,
                            onNodeDrop: this.onNodeDrop,
                          },
                        },
                        v.createElement(
                          'div',
                          {
                            role: 'tree',
                            className: se()(
                              b,
                              E,
                              Be,
                              ((l = {}),
                              (0, A.Z)(l, ''.concat(b, '-show-line'), N),
                              (0, A.Z)(l, ''.concat(b, '-focused'), u),
                              (0, A.Z)(
                                l,
                                ''.concat(b, '-active-focused'),
                                d !== null,
                              ),
                              l),
                            ),
                            style: me,
                          },
                          v.createElement(
                            vr,
                            (0, ie.Z)(
                              {
                                ref: this.listRef,
                                prefixCls: b,
                                style: x,
                                data: n,
                                disabled: de,
                                selectable: R,
                                checkable: !!U,
                                motion: J,
                                dragging: i !== null,
                                height: Te,
                                itemHeight: we,
                                virtual: ce,
                                focusable: T,
                                focused: u,
                                tabIndex: P,
                                activeItem: this.getActiveItem(),
                                onFocus: this.onFocus,
                                onBlur: this.onBlur,
                                onKeyDown: this.onKeyDown,
                                onActiveChange: this.onActiveChange,
                                onListChangeStart: this.onListChangeStart,
                                onListChangeEnd: this.onListChangeEnd,
                                onContextMenu: Oe,
                                onScroll: ze,
                              },
                              this.getTreeNodeRequiredProps(),
                              ne,
                            ),
                          ),
                        ),
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (l, s) {
                    var u = s.prevProps,
                      n = { prevProps: l };
                    function r(T) {
                      return (!u && T in l) || (u && u[T] !== l[T]);
                    }
                    var i,
                      d = s.fieldNames;
                    if (
                      (r('fieldNames') &&
                        ((d = Kt(l.fieldNames)), (n.fieldNames = d)),
                      r('treeData')
                        ? (i = l.treeData)
                        : r('children') &&
                          ((0, Y.ZP)(
                            !1,
                            '`children` of Tree is deprecated. Please use `treeData` instead.',
                          ),
                          (i = qn(l.children))),
                      i)
                    ) {
                      n.treeData = i;
                      var c = tr(i, { fieldNames: d });
                      n.keyEntities = (0, j.Z)(
                        (0, A.Z)({}, tt, rn),
                        c.keyEntities,
                      );
                    }
                    var f = n.keyEntities || s.keyEntities;
                    if (r('expandedKeys') || (u && r('autoExpandParent')))
                      n.expandedKeys =
                        l.autoExpandParent || (!u && l.defaultExpandParent)
                          ? un(l.expandedKeys, f)
                          : l.expandedKeys;
                    else if (!u && l.defaultExpandAll) {
                      var p = (0, j.Z)({}, f);
                      delete p[tt],
                        (n.expandedKeys = Object.keys(p).map(function (T) {
                          return p[T].key;
                        }));
                    } else
                      !u &&
                        l.defaultExpandedKeys &&
                        (n.expandedKeys =
                          l.autoExpandParent || l.defaultExpandParent
                            ? un(l.defaultExpandedKeys, f)
                            : l.defaultExpandedKeys);
                    if (
                      (n.expandedKeys || delete n.expandedKeys,
                      i || n.expandedKeys)
                    ) {
                      var g = Rt(
                        i || s.treeData,
                        n.expandedKeys || s.expandedKeys,
                        d,
                      );
                      n.flattenNodes = g;
                    }
                    if (
                      (l.selectable &&
                        (r('selectedKeys')
                          ? (n.selectedKeys = cn(l.selectedKeys, l))
                          : !u &&
                            l.defaultSelectedKeys &&
                            (n.selectedKeys = cn(l.defaultSelectedKeys, l))),
                      l.checkable)
                    ) {
                      var y;
                      if (
                        (r('checkedKeys')
                          ? (y = wt(l.checkedKeys) || {})
                          : !u && l.defaultCheckedKeys
                          ? (y = wt(l.defaultCheckedKeys) || {})
                          : i &&
                            (y = wt(l.checkedKeys) || {
                              checkedKeys: s.checkedKeys,
                              halfCheckedKeys: s.halfCheckedKeys,
                            }),
                        y)
                      ) {
                        var m = y,
                          h = m.checkedKeys,
                          b = h === void 0 ? [] : h,
                          E = m.halfCheckedKeys,
                          x = E === void 0 ? [] : E;
                        if (!l.checkStrictly) {
                          var N = Lt(b, !0, f);
                          (b = N.checkedKeys), (x = N.halfCheckedKeys);
                        }
                        (n.checkedKeys = b), (n.halfCheckedKeys = x);
                      }
                    }
                    return r('loadedKeys') && (n.loadedKeys = l.loadedKeys), n;
                  },
                },
              ],
            ),
            o
          );
        })(v.Component);
      (vn.defaultProps = {
        prefixCls: 'rc-tree',
        showLine: !1,
        showIcon: !0,
        selectable: !0,
        multiple: !1,
        checkable: !1,
        disabled: !1,
        checkStrictly: !1,
        draggable: !1,
        defaultExpandParent: !0,
        autoExpandParent: !1,
        defaultExpandAll: !1,
        defaultExpandedKeys: [],
        defaultCheckedKeys: [],
        defaultSelectedKeys: [],
        dropIndicatorRender: G,
        allowDrop: function () {
          return !0;
        },
        expandAction: !1,
      }),
        (vn.TreeNode = Ot);
      var aa = null,
        oa = null;
      function pt(t) {
        '@babel/helpers - typeof';
        return (
          (pt =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (a) {
                  return typeof a;
                }
              : function (a) {
                  return a &&
                    typeof Symbol == 'function' &&
                    a.constructor === Symbol &&
                    a !== Symbol.prototype
                    ? 'symbol'
                    : typeof a;
                }),
          pt(t)
        );
      }
      function pn(t, a) {
        var o = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(t);
          a &&
            (e = e.filter(function (l) {
              return Object.getOwnPropertyDescriptor(t, l).enumerable;
            })),
            o.push.apply(o, e);
        }
        return o;
      }
      function hn(t) {
        for (var a = 1; a < arguments.length; a++) {
          var o = arguments[a] != null ? arguments[a] : {};
          a % 2
            ? pn(Object(o), !0).forEach(function (e) {
                Nr(t, e, o[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o))
            : pn(Object(o)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(o, e),
                );
              });
        }
        return t;
      }
      function Nr(t, a, o) {
        return (
          (a = Cr(a)),
          a in t
            ? Object.defineProperty(t, a, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[a] = o),
          t
        );
      }
      function Cr(t) {
        var a = kr(t, 'string');
        return pt(a) === 'symbol' ? a : String(a);
      }
      function kr(t, a) {
        if (pt(t) !== 'object' || t === null) return t;
        var o = t[Symbol.toPrimitive];
        if (o !== void 0) {
          var e = o.call(t, a || 'default');
          if (pt(e) !== 'object') return e;
          throw new TypeError('@@toPrimitive must return a primitive value.');
        }
        return (a === 'string' ? String : Number)(t);
      }
      function Dr(t, a) {
        return Or(t) || Tr(t, a) || gn(t, a) || Rr();
      }
      function Rr() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Tr(t, a) {
        var o =
          t == null
            ? null
            : (typeof Symbol != 'undefined' && t[Symbol.iterator]) ||
              t['@@iterator'];
        if (o != null) {
          var e,
            l,
            s,
            u,
            n = [],
            r = !0,
            i = !1;
          try {
            if (((s = (o = o.call(t)).next), a === 0)) {
              if (Object(o) !== o) return;
              r = !1;
            } else
              for (
                ;
                !(r = (e = s.call(o)).done) &&
                (n.push(e.value), n.length !== a);
                r = !0
              );
          } catch (d) {
            (i = !0), (l = d);
          } finally {
            try {
              if (!r && o.return != null && ((u = o.return()), Object(u) !== u))
                return;
            } finally {
              if (i) throw l;
            }
          }
          return n;
        }
      }
      function Or(t) {
        if (Array.isArray(t)) return t;
      }
      function Pr(t) {
        return Lr(t) || wr(t) || gn(t) || Mr();
      }
      function Mr() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function gn(t, a) {
        if (t) {
          if (typeof t == 'string') return Zt(t, a);
          var o = Object.prototype.toString.call(t).slice(8, -1);
          if (
            (o === 'Object' && t.constructor && (o = t.constructor.name),
            o === 'Map' || o === 'Set')
          )
            return Array.from(t);
          if (
            o === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)
          )
            return Zt(t, a);
        }
      }
      function wr(t) {
        if (
          (typeof Symbol != 'undefined' && t[Symbol.iterator] != null) ||
          t['@@iterator'] != null
        )
          return Array.from(t);
      }
      function Lr(t) {
        if (Array.isArray(t)) return Zt(t);
      }
      function Zt(t, a) {
        (a == null || a > t.length) && (a = t.length);
        for (var o = 0, e = new Array(a); o < a; o++) e[o] = t[o];
        return e;
      }
      function Nt(t) {
        var a =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '',
          o = [];
        return (
          [].concat(t).forEach(function (e, l) {
            var s = ''.concat(a ? ''.concat(a, '-') : '').concat(l);
            switch (e == null ? void 0 : e.type) {
              case 'ul': {
                var u,
                  n =
                    ((u = o[o.length - 1]) === null || u === void 0
                      ? void 0
                      : u.children) || o,
                  r = Nt(e.props.children || [], s);
                n.push.apply(n, Pr(r));
                break;
              }
              case 'li': {
                var i = Nt(e.props.children, s);
                o.push({
                  title: [].concat(e.props.children).filter(function (d) {
                    return d.type !== 'ul';
                  }),
                  key: s,
                  children: i,
                  isLeaf: !i.length,
                });
                break;
              }
              default:
            }
          }),
          o
        );
      }
      var Zr = function (a) {
          var o = useState(Nt(a)),
            e = Dr(o, 2),
            l = e[0],
            s = e[1];
          return (
            useEffect(
              function () {
                s(Nt(a));
              },
              [a],
            ),
            l
          );
        },
        Ir = function (a) {
          var o = a.isLeaf,
            e = a.expanded;
          return o
            ? React.createElement(
                'span',
                { className: 'dumi-default-tree-icon' },
                React.createElement(FileOutlined, { fill: 'currentColor' }),
              )
            : e
            ? React.createElement(
                'span',
                { className: 'dumi-default-tree-icon' },
                React.createElement(FolderOpenOutlined, {
                  fill: 'currentColor',
                }),
              )
            : React.createElement(
                'span',
                { className: 'dumi-default-tree-icon' },
                React.createElement(FolderOutlined, { fill: 'currentColor' }),
              );
        },
        Ar = function (a) {
          var o = a.isLeaf,
            e = a.expanded;
          return o
            ? React.createElement('span', {
                className: 'tree-switcher-leaf-line',
              })
            : e
            ? React.createElement(
                'span',
                { className: 'tree-switcher-line-icon' },
                React.createElement(
                  'span',
                  { className: 'dumi-default-tree-icon' },
                  React.createElement(MinusSquareOutlined, {
                    fill: 'currentColor',
                  }),
                ),
              )
            : React.createElement(
                'span',
                { className: 'tree-switcher-line-icon' },
                React.createElement(
                  'span',
                  { className: 'dumi-default-tree-icon' },
                  React.createElement(PlusSquareOutlined, {
                    fill: 'currentColor',
                  }),
                ),
              );
        },
        It = function () {
          return { height: 0, opacity: 0 };
        },
        yn = function (a) {
          var o = a.scrollHeight;
          return { height: o, opacity: 1 };
        },
        $r = function (a) {
          return { height: a ? a.offsetHeight : 0 };
        },
        At = function (a, o) {
          return (
            (o == null ? void 0 : o.deadline) === !0 ||
            o.propertyName === 'height'
          );
        },
        jr = {
          motionName: 'ant-motion-collapse',
          onAppearStart: It,
          onEnterStart: It,
          onAppearActive: yn,
          onEnterActive: yn,
          onLeaveStart: $r,
          onLeaveActive: It,
          onAppearEnd: At,
          onEnterEnd: At,
          onLeaveEnd: At,
          motionDeadline: 500,
        },
        ia = function (t) {
          var a = Zr(t.children),
            o = createRef(),
            e = function (s, u) {
              var n = u.isLeaf;
              n ||
                s.shiftKey ||
                s.metaKey ||
                s.ctrlKey ||
                o.current.onNodeExpand(s, u);
            };
          return React.createElement(Tree, {
            className: 'dumi-default-tree',
            icon: Ir,
            ref: o,
            itemHeight: 20,
            showLine: !0,
            selectable: !1,
            virtual: !1,
            motion: hn(hn({}, jr), {}, { motionAppear: !1 }),
            onClick: e,
            treeData: [{ key: '0', title: t.title || '<root>', children: a }],
            defaultExpandAll: !0,
            switcherIcon: Ar,
          });
        };
    },
    23510: function (dt, ct, I) {
      var ie = 'Expected a function',
        A = NaN,
        fe = '[object Symbol]',
        j = /^\s+|\s+$/g,
        ve = /^[-+]0x[0-9a-f]+$/i,
        Se = /^0b[01]+$/i,
        Ke = /^0o[0-7]+$/i,
        le = parseInt,
        Ge = typeof I.g == 'object' && I.g && I.g.Object === Object && I.g,
        He = typeof self == 'object' && self && self.Object === Object && self,
        qe = Ge || He || Function('return this')(),
        se = Object.prototype,
        Le = se.toString,
        w = Math.max,
        S = Math.min,
        K = function () {
          return qe.Date.now();
        };
      function C(k, G, X) {
        var H,
          ee,
          Q,
          be,
          Ne,
          Ae,
          et = 0,
          De = !1,
          Ve = !1,
          ut = !0;
        if (typeof k != 'function') throw new TypeError(ie);
        (G = v(G) || 0),
          W(X) &&
            ((De = !!X.leading),
            (Ve = 'maxWait' in X),
            (Q = Ve ? w(v(X.maxWait) || 0, G) : Q),
            (ut = 'trailing' in X ? !!X.trailing : ut));
        function it(ae) {
          var Ze = H,
            Fe = ee;
          return (H = ee = void 0), (et = ae), (be = k.apply(Fe, Ze)), be;
        }
        function Ct(ae) {
          return (et = ae), (Ne = setTimeout(lt, G)), De ? it(ae) : be;
        }
        function kt(ae) {
          var Ze = ae - Ae,
            Fe = ae - et,
            xt = G - Ze;
          return Ve ? S(xt, Q - Fe) : xt;
        }
        function mt(ae) {
          var Ze = ae - Ae,
            Fe = ae - et;
          return Ae === void 0 || Ze >= G || Ze < 0 || (Ve && Fe >= Q);
        }
        function lt() {
          var ae = K();
          if (mt(ae)) return St(ae);
          Ne = setTimeout(lt, kt(ae));
        }
        function St(ae) {
          return (Ne = void 0), ut && H ? it(ae) : ((H = ee = void 0), be);
        }
        function Dt() {
          Ne !== void 0 && clearTimeout(Ne),
            (et = 0),
            (H = Ae = ee = Ne = void 0);
        }
        function bt() {
          return Ne === void 0 ? be : St(K());
        }
        function Et() {
          var ae = K(),
            Ze = mt(ae);
          if (((H = arguments), (ee = this), (Ae = ae), Ze)) {
            if (Ne === void 0) return Ct(Ae);
            if (Ve) return (Ne = setTimeout(lt, G)), it(Ae);
          }
          return Ne === void 0 && (Ne = setTimeout(lt, G)), be;
        }
        return (Et.cancel = Dt), (Et.flush = bt), Et;
      }
      function B(k, G, X) {
        var H = !0,
          ee = !0;
        if (typeof k != 'function') throw new TypeError(ie);
        return (
          W(X) &&
            ((H = 'leading' in X ? !!X.leading : H),
            (ee = 'trailing' in X ? !!X.trailing : ee)),
          C(k, G, { leading: H, maxWait: G, trailing: ee })
        );
      }
      function W(k) {
        var G = typeof k;
        return !!k && (G == 'object' || G == 'function');
      }
      function z(k) {
        return !!k && typeof k == 'object';
      }
      function Y(k) {
        return typeof k == 'symbol' || (z(k) && Le.call(k) == fe);
      }
      function v(k) {
        if (typeof k == 'number') return k;
        if (Y(k)) return A;
        if (W(k)) {
          var G = typeof k.valueOf == 'function' ? k.valueOf() : k;
          k = W(G) ? G + '' : G;
        }
        if (typeof k != 'string') return k === 0 ? k : +k;
        k = k.replace(j, '');
        var X = Se.test(k);
        return X || Ke.test(k)
          ? le(k.slice(2), X ? 2 : 8)
          : ve.test(k)
          ? A
          : +k;
      }
      dt.exports = B;
    },
  },
]);
