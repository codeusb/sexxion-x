'use strict';
(self.webpackChunk_sexxion_x_docs =
  self.webpackChunk_sexxion_x_docs || []).push([
  [923],
  {
    3286: function (g, n, e) {
      e.r(n),
        e.d(n, {
          default: function () {
            return f;
          },
        });
      var a = e(70978),
        d = e.n(a),
        _ = e(77630),
        t = e(31365),
        l = e(45848),
        o = e(30333),
        m = e(36496),
        u = e(41498),
        c = {};
      function f() {
        var p = (0, t.pC)(),
          E = (0, _.useState)(!1),
          r = d()(E, 2),
          x = r[0],
          v = r[1],
          s = (0, _.useRef)(t.m8.location.pathname);
        return (
          (0, _.useEffect)(function () {
            return t.m8.listen(function (i) {
              i.location.pathname !== s.current &&
                ((s.current = i.location.pathname),
                document.documentElement.scrollTo(0, 0));
            });
          }, []),
          (0, u.jsx)(l.D.Provider, {
            value: {
              pkg: {
                name: '@sexxion-x/docs',
                description: 'A static site based on dumi',
                version: '0.0.1',
                license: 'MIT',
                authors: [],
              },
              historyType: 'browser',
              entryExports: c,
              demos: o.DE,
              components: o.wx,
              locales: m.k,
              loading: x,
              setLoading: v,
              hostname: void 0,
              themeConfig: {
                footer:
                  'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',
                prefersColor: { default: 'light', switch: !0 },
                nprogress: !0,
                lastUpdated: !0,
                name: 'sexxion-x',
                favicon:
                  'https://pic.imgdb.cn/item/64a8fcf91ddac507cc96f555.png',
                logo: 'https://pic.imgdb.cn/item/64a8fcf91ddac507cc96f555.png',
                nav: [
                  { title: '\u4ECB\u7ECD', link: '/guide' },
                  { title: '\u57FA\u7840\u7EC4\u4EF6', link: '/uis' },
                  { title: '\u4E1A\u52A1\u7EC4\u4EF6', link: '/works' },
                ],
              },
              _2_level_nav_available: !0,
            },
            children: p,
          })
        );
      }
    },
  },
]);