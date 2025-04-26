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
          for (var s = {}, a = [], i = 0; i < e.length; i++) {
            var c = e[i],
              l = r.base ? c[0] + r.base : c[0],
              u = s[l] || 0,
              p = "".concat(l, " ").concat(u);
            s[l] = u + 1;
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
              var m = o(f, r);
              (r.byIndex = i),
                t.splice(i, 0, { identifier: p, updater: m, references: 1 });
            }
            a.push(p);
          }
          return a;
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
          var s = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var a = 0; a < s.length; a++) {
              var i = n(s[a]);
              t[i].references--;
            }
            for (var c = r(e, o), l = 0; l < s.length; l++) {
              var u = n(s[l]);
              0 === t[u].references && (t[u].updater(), t.splice(u, 1));
            }
            s = c;
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
      175: (e, t, n) => {
        n.d(t, { A: () => i });
        var r = n(354),
          o = n.n(r),
          s = n(314),
          a = n.n(s)()(o());
        a.push([
          e.id,
          "// extracted by mini-css-extract-plugin\nexport {};",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style/profile.css"],
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
            (t.i = function (e, n, r, o, s) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var a = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var c = this[i][0];
                  null != c && (a[c] = !0);
                }
              for (var l = 0; l < e.length; l++) {
                var u = [].concat(e[l]);
                (r && a[u[0]]) ||
                  (void 0 !== s &&
                    (void 0 === u[5] ||
                      (u[1] = "@layer"
                        .concat(u[5].length > 0 ? " ".concat(u[5]) : "", " {")
                        .concat(u[1], "}")),
                    (u[5] = s)),
                  n &&
                    (u[2]
                      ? ((u[1] = "@media "
                          .concat(u[2], " {")
                          .concat(u[1], "}")),
                        (u[2] = n))
                      : (u[2] = n)),
                  o &&
                    (u[4]
                      ? ((u[1] = "@supports ("
                          .concat(u[4], ") {")
                          .concat(u[1], "}")),
                        (u[4] = o))
                      : (u[4] = "".concat(o))),
                  t.push(u));
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
              s = "/*# ".concat(o, " */");
            return [t].concat([s]).join("\n");
          }
          return [t].join("\n");
        };
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
                var s = n.sourceMap;
                s &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(s)))),
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
    var s = (t[r] = { id: r, exports: {} });
    return e[r](s, s.exports, n), s.exports;
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
          const s = { name: e, email: t, password: n };
          o.push(s),
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
    s = n.n(o),
    a = n(825),
    i = n.n(a),
    c = n(659),
    l = n.n(c),
    u = n(56),
    p = n.n(u),
    d = n(540),
    f = n.n(d),
    m = n(113),
    g = n.n(m),
    h = n(175),
    v = {};
  (v.styleTagTransform = g()),
    (v.setAttributes = p()),
    (v.insert = l().bind(null, "head")),
    (v.domAPI = i()),
    (v.insertStyleElement = f()),
    s()(h.A, v),
    h.A && h.A.locals && h.A.locals;
  class y extends HTMLElement {
    connectedCallback() {
      const e = r.getCurrentUser();
      e
        ? ((this.innerHTML = `\n      <a href="home.html" class="back-button">\n        <i class="ph ph-arrow-left"></i>\n        Profile\n      </a>\n      <profile-photo name="${e.name || "User"}"></profile-photo>\n      <hr style="margin: 24px 0;">\n      <account-settings \n        email="${e.email || ""}" \n        password="${e.password ? "••••••••" : ""}"\n      ></account-settings>\n      <div style="text-align: right; margin-top: 24px;">\n        <action-button text="Log out" danger></action-button>\n      </div>\n    `),
          this.querySelector("action-button[danger]").addEventListener(
            "click",
            () => {
              r.logout(), (window.location.href = "login.html");
            },
          ))
        : (window.location.href = "login.html");
    }
  }
  customElements.define("user-profile", y);
  class x extends HTMLElement {
    connectedCallback() {
      const e = this.getAttribute("name") || "User";
      this.innerHTML = `\n      <div style="display: flex; align-items: center; gap: 20px;">\n        <div style="\n          width: 80px; \n          height: 80px; \n          border-radius: 50%; \n          background: #f0f0f0;\n          display: flex;\n          align-items: center;\n          justify-content: center;\n          font-size: 32px;\n          color: #666;\n        ">${e.charAt(0).toUpperCase()}</div>\n        <div>\n          <h2 style="margin: 0 0 6px; color: #333; font-size: 20px;">${e}</h2>\n          <a href="#" style="color: #1a73e8; font-size: 14px; text-decoration: none;">✎ Edit photo</a>\n        </div>\n      </div>\n    `;
    }
  }
  customElements.define("profile-photo", x);
  class b extends HTMLElement {
    connectedCallback() {
      const e = this.getAttribute("email") || "",
        t = this.getAttribute("password") || "••••••••";
      this.innerHTML = `\n      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px;">\n        <div style="flex: 1; margin-right: 16px;">\n          <p style="margin: 0 0 4px; color: #555; font-size: 14px;">Email</p>\n          <p style="margin: 0; color: #333; font-weight: 500; word-break: break-all;">${e}</p>\n        </div>\n        <action-button text="Change email"></action-button>\n      </div>\n\n      <div style="display: flex; justify-content: space-between; align-items: center;">\n        <div style="flex: 1; margin-right: 16px;">\n          <p style="margin: 0 0 4px; color: #555; font-size: 14px;">Password</p>\n          <p style="margin: 0; color: #333; font-weight: 500;">${t}</p>\n        </div>\n        <action-button text="Change password"></action-button>\n      </div>\n    `;
    }
  }
  customElements.define("account-settings", b);
  class w extends HTMLElement {
    connectedCallback() {
      const e = this.getAttribute("text") || "Click",
        t = this.hasAttribute("danger");
      this.innerHTML = `\n      <button style="\n        background: ${t ? "#ffecec" : "#eee"};\n        color: ${t ? "#e53935" : "#333"};\n        padding: 8px 16px;\n        border: none;\n        border-radius: 20px;\n        font-size: 14px;\n        cursor: pointer;\n        transition: background 0.3s;\n        white-space: nowrap;\n      ">\n        ${e}\n      </button>\n    `;
    }
  }
  customElements.define("action-button", w);
})();
//# sourceMappingURL=profile.b3b7da46da4ba39ee537.bundle.js.map
