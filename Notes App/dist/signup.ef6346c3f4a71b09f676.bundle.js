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
          for (var o = {}, a = [], i = 0; i < e.length; i++) {
            var c = e[i],
              u = r.base ? c[0] + r.base : c[0],
              l = o[u] || 0,
              p = "".concat(u, " ").concat(l);
            o[u] = l + 1;
            var d = n(p),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== d) t[d].references++, t[d].updater(f);
            else {
              var m = s(f, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: p, updater: m, references: 1 });
            }
            a.push(p);
          }
          return a;
        }
        function s(e, t) {
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
        e.exports = function (e, s) {
          var o = r((e = e || []), (s = s || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < o.length; a++) {
              var i = n(o[a]);
              t[i].references--;
            }
            for (var c = r(e, s), u = 0; u < o.length; u++) {
              var l = n(o[u]);
              0 === t[l].references && (t[l].updater(), t.splice(l, 1));
            }
            o = c;
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
            (t.i = function (e, n, r, s, o) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (a[c] = !0);
                }
              for (var u = 0; u < e.length; u++) {
                var l = [].concat(e[u]);
                (r && a[l[0]]) ||
                  (void 0 !== o &&
                    (void 0 === l[5] ||
                      (l[1] = "@layer"
                        .concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {")
                        .concat(l[1], "}")),
                    (l[5] = o)),
                  n &&
                    (l[2]
                      ? ((l[1] = "@media "
                          .concat(l[2], " {")
                          .concat(l[1], "}")),
                        (l[2] = n))
                      : (l[2] = n)),
                  s &&
                    (l[4]
                      ? ((l[1] = "@supports ("
                          .concat(l[4], ") {")
                          .concat(l[1], "}")),
                        (l[4] = s))
                      : (l[4] = "".concat(s))),
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
              s =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              o = "/*# ".concat(s, " */");
            return [t].concat([o]).join("\n");
          }
          return [t].join("\n");
        };
      },
      424: (e, t, n) => {
        n.d(t, { A: () => i });
        var r = n(354),
          s = n.n(r),
          o = n(314),
          a = n.n(o)()(s());
        a.push([
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
        const i = a;
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
                var s = void 0 !== n.layer;
                s &&
                  (r += "@layer".concat(
                    n.layer.length > 0 ? " ".concat(n.layer) : "",
                    " {",
                  )),
                  (r += n.css),
                  s && (r += "}"),
                  n.media && (r += "}"),
                  n.supports && (r += "}");
                var o = n.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
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
    var s = t[r];
    if (void 0 !== s) return s.exports;
    var o = (t[r] = { id: r, exports: {} });
    return e[r](o, o.exports, n), o.exports;
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
          const s = JSON.parse(localStorage.getItem("notes-app-users") || "[]");
          if (s.some((e) => e.email === t))
            return void r({
              status: "fail",
              message: "Email already registered",
            });
          const o = { name: e, email: t, password: n };
          s.push(o),
            localStorage.setItem("notes-app-users", JSON.stringify(s)),
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
  var s = n(72),
    o = n.n(s),
    a = n(825),
    i = n.n(a),
    c = n(659),
    u = n.n(c),
    l = n(56),
    p = n.n(l),
    d = n(540),
    f = n.n(d),
    m = n(113),
    g = n.n(m),
    h = n(424),
    v = {};
  (v.styleTagTransform = g()),
    (v.setAttributes = p()),
    (v.insert = u().bind(null, "head")),
    (v.domAPI = i()),
    (v.insertStyleElement = f()),
    o()(h.A, v),
    h.A && h.A.locals && h.A.locals;
  class y extends HTMLElement {
    constructor() {
      super(), this.attachShadow({ mode: "open" }), this.render();
    }
    render() {
      (this.shadowRoot.innerHTML =
        '\n      <style>\n        @import url(\'/src/style/form-style.css\');\n        \n        .loading {\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          border: 3px solid rgba(255,255,255,.3);\n          border-radius: 50%;\n          border-top-color: #f39ba9;\n          animation: spin 1s ease-in-out infinite;\n          margin-left: 10px;\n        }\n        \n        @keyframes spin {\n          to { transform: rotate(360deg); }\n        }\n      </style>\n\n      <div class="container">\n        <h2>Hello!</h2>\n        <p>Welcome to Notes App — join us and keep track of everything in your life with ease.</p>\n\n        <form id="signupForm">\n          <input type="text" placeholder="Name" required id="name">\n          <input type="email" placeholder="Email" required id="email">\n          <input type="password" placeholder="Password" required id="password">\n          <button type="submit" id="submitBtn">Sign Up</button>\n        </form>\n\n        <p class="register-link">Already have an account? <a href="login.html">Log in</a> here.</p>\n      </div>\n    '),
        this.shadowRoot
          .querySelector("#signupForm")
          .addEventListener("submit", async (e) => {
            e.preventDefault();
            const t = this.shadowRoot.getElementById("name").value,
              n = this.shadowRoot.getElementById("email").value,
              s = this.shadowRoot.getElementById("password").value,
              o = this.shadowRoot.getElementById("submitBtn");
            (o.disabled = !0),
              (o.innerHTML = 'Signing Up <span class="loading"></span>');
            try {
              const e = await r.register(t, n, s);
              "success" === e.status
                ? (alert("Sign up successful! Please login."),
                  (window.location.href = "login.html"))
                : alert(e.message);
            } catch (e) {
              alert("An error occurred during sign up");
            } finally {
              (o.disabled = !1), (o.textContent = "Sign Up");
            }
          });
    }
  }
  customElements.define("sign-up-form", y);
})();
//# sourceMappingURL=signup.ef6346c3f4a71b09f676.bundle.js.map
