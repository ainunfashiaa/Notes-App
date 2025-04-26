(() => {
  "use strict";
  var e = {
      56: (e, t, n) => {
        e.exports = function (e) {
          var t = n.nc;
          t && e.setAttribute("nonce", t);
        };
      },
      72: (e) => {
        var t = [];
        function n(e) {
          for (var n = -1, r = 0; r < t.length; r++)
            if (t[r].identifier === e) {
              n = r;
              break;
            }
          return n;
        }
        function r(e, r) {
          for (var a = {}, s = [], i = 0; i < e.length; i++) {
            var c = e[i],
              u = r.base ? c[0] + r.base : c[0],
              l = a[u] || 0,
              d = "".concat(u, " ").concat(l);
            a[u] = l + 1;
            var p = n(d),
              m = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) t[p].references++, t[p].updater(m);
            else {
              var f = o(m, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: d, updater: f, references: 1 });
            }
            s.push(d);
          }
          return s;
        }
        function o(e, t) {
          var n = t.domAPI(t);
          return (
            n.update(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap &&
                  t.supports === e.supports &&
                  t.layer === e.layer
                )
                  return;
                n.update((e = t));
              } else n.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var s = 0; s < a.length; s++) {
              var i = n(a[s]);
              t[i].references--;
            }
            for (var c = r(e, o), u = 0; u < a.length; u++) {
              var l = n(a[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            a = c;
          };
        };
      },
      113: (e) => {
        e.exports = function (e, t) {
          if (t.styleSheet) t.styleSheet.cssText = e;
          else {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(e));
          }
        };
      },
      314: (e) => {
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = "",
                  r = void 0 !== t[5];
                return (
                  t[4] && (n += "@supports (".concat(t[4], ") {")),
                  t[2] && (n += "@media ".concat(t[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      t[5].length > 0 ? " ".concat(t[5]) : "",
                      " {",
                    )),
                  (n += e(t)),
                  r && (n += "}"),
                  t[2] && (n += "}"),
                  t[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (t.i = function (e, n, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var s = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (s[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && s[l[0]]) ||
                  (void 0 !== a &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = a)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  o &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = o))
                      : (l[4] = "".concat(o))),
                  t.push(l));
              }
            }),
            t
          );
        };
      },
      354: (e) => {
        e.exports = function (e) {
          var t = e[1],
            n = e[3];
          if (!n) return t;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(o, " */");
            return [t].concat([a]).join("\n");
          }
          return [t].join("\n");
        };
      },
      424: (e, t, n) => {
        n.d(t, { A: () => i });
        var r = n(354),
          o = n.n(r),
          a = n(314),
          s = n.n(a)()(o());
        s.push([
          e.id,
          "// extracted by mini-css-extract-plugin\nexport {};",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style/form-style.css"],
            names: [],
            mappings: "AAAA;QACS,CAAA",
            sourcesContent: [
              "// extracted by mini-css-extract-plugin\nexport {};",
            ],
            sourceRoot: "",
          },
        ]);
        const i = s;
      },
      540: (e) => {
        e.exports = function (e) {
          var t = document.createElement("style");
          return e.setAttributes(t, e.attributes), e.insert(t, e.options), t;
        };
      },
      659: (e) => {
        var t = {};
        e.exports = function (e, n) {
          var r = (function (e) {
            if (void 0 === t[e]) {
              var n = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (e) {
                  n = null;
                }
              t[e] = n;
            }
            return t[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      825: (e) => {
        e.exports = function (e) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var t = e.insertStyleElement(e);
          return {
            update: function (n) {
              !(function (e, t, n) {
                var r = "";
                n.supports && (r += "@supports (".concat(n.supports, ") {")),
                  n.media && (r += "@media ".concat(n.media, " {"));
                var o = void 0 !== n.layer;
                o &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  o && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var a = n.sourceMap;
                a &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                      " */",
                    )),
                  t.styleTagTransform(r, e, t.options);
              })(t, e, n);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(t);
            },
          };
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var a = (t[r] = { id: r, exports: {} });
    return e[r](a, a.exports, n), a.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t)
        n.o(t, r) &&
          !n.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nc = void 0);
  const r = class {
    static async register(e, t, n) {
      return new Promise((r) => {
        setTimeout(() => {
          const o = JSON.parse(localStorage.getItem("notes-app-users") || "[]");
          if (o.some((e) => e.email === t))
            return void r({
              status: "fail",
              message: "Email already registered",
            });
          const a = { name: e, email: t, password: n };
          o.push(a),
            localStorage.setItem("notes-app-users", JSON.stringify(o)),
            r({ status: "success", message: "Registration successful" });
        }, 1e3);
      });
    }
    static async login(e, t) {
      return new Promise((n) => {
        setTimeout(() => {
          const r = JSON.parse(
            localStorage.getItem("notes-app-users") || "[]",
          ).find((n) => n.email === e && n.password === t);
          r
            ? (localStorage.setItem(
                "notes-app-current-user",
                JSON.stringify(r),
              ),
              n({ status: "success", message: "Login successful", data: r }))
            : n({ status: "fail", message: "Invalid email or password" });
        }, 1e3);
      });
    }
    static logout() {
      localStorage.removeItem("notes-app-current-user");
    }
    static getCurrentUser() {
      return JSON.parse(localStorage.getItem("notes-app-current-user"));
    }
  };
  var o = n(72),
    a = n.n(o),
    s = n(825),
    i = n.n(s),
    c = n(659),
    u = n.n(c),
    l = n(56),
    d = n.n(l),
    p = n(540),
    m = n.n(p),
    f = n(113),
    g = n.n(f),
    h = n(424),
    v = {};
  (v.styleTagTransform = g()),
    (v.setAttributes = d()),
    (v.insert = u().bind(null, "head")),
    (v.domAPI = i()),
    (v.insertStyleElement = m()),
    a()(h.A, v),
    h.A && h.A.locals && h.A.locals;
  class y extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" }), this.render();
    }
    render() {
      (this.shadowRoot.innerHTML =
        '\n      <style>\n        .loading {\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          border: 3px solid rgba(255,255,255,.3);\n          border-radius: 50%;\n          border-top-color: #f39ba9;\n          animation: spin 1s ease-in-out infinite;\n          margin-left: 10px;\n        }\n        \n        input {\n          width: 100% !important;\n          max-width: 600px !important;\n          padding: 0.8rem 1rem !important;\n          border: 1px solid #ccc !important;\n          border-radius: 999px !important;\n          font-size: 1rem !important;\n          outline: none !important;\n          margin: 8px 0;\n        }\n        \n        button {\n          width: 100%;\n          max-width: 600px;\n          padding: 0.8rem;\n          border: none;\n          background-color: #fdecec;\n          color: #6c6c6c;\n          font-weight: 600;\n          font-size: 1rem;\n          border-radius: 999px;\n          cursor: pointer;\n          transition: background-color 0.3s ease;\n          margin-top: 2.5rem;\n        }\n\n        button:hover {\n          background-color: #fcd9d9;\n        }\n\n        @keyframes spin {\n          to { transform: rotate(360deg); }\n        }\n      </style>\n\n      <div class="container">\n        <h2>Hello Again!</h2>\n        <p>We\'ve missed you and can\'t wait to see the amazing notes you\'ll create every day.</p>\n\n        <form id="loginForm">\n          <input type="email" placeholder="Email" required id="email">\n          <input type="password" placeholder="Password" required id="password">\n          <button type="submit" id="submitBtn">Login</button>\n        </form>\n\n        <p class="register-link">Don\'t have an account? <a href="signup.html">Sign up</a> here.</p>\n      </div>\n    '),
        this.shadowRoot
          .querySelector("#loginForm")
          .addEventListener("submit", async (e) => {
            e.preventDefault();
            const t = this.shadowRoot.getElementById("email").value,
              n = this.shadowRoot.getElementById("password").value,
              o = this.shadowRoot.getElementById("submitBtn");
            (o.disabled = !0),
              (o.innerHTML = 'Logging In <span class="loading"></span>');
            try {
              const e = await r.login(t, n);
              "success" === e.status
                ? (window.location.href = "home.html")
                : alert(e.message);
            } catch (e) {
              alert("An error occurred during login");
            } finally {
              (o.disabled = !1), (o.textContent = "Login");
            }
          });
    }
  }
  customElements.define("login-form", y);
})();
//# sourceMappingURL=login.3ada9ca65b8a069bb3d3.bundle.js.map
