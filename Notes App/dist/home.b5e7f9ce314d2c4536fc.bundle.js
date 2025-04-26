(() => {
  var t = {
      47: (t, e, n) => {
        "use strict";
        n.d(e, { A: () => s });
        var r = n(354),
          o = n.n(r),
          a = n(314),
          i = n.n(a)()(o());
        i.push([
          t.id,
          "// extracted by mini-css-extract-plugin\nexport {};",
          "",
          {
            version: 3,
            sources: ["webpack://./src/style/style.css"],
            names: [],
            mappings: "AAAA;QACS,CAAA",
            sourcesContent: [
              "// extracted by mini-css-extract-plugin\nexport {};",
            ],
            sourceRoot: "",
          },
        ]);
        const s = i;
      },
      56: (t, e, n) => {
        "use strict";
        t.exports = function (t) {
          var e = n.nc;
          e && t.setAttribute("nonce", e);
        };
      },
      72: (t) => {
        "use strict";
        var e = [];
        function n(t) {
          for (var n = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === t) {
              n = r;
              break;
            }
          return n;
        }
        function r(t, r) {
          for (var a = {}, i = [], s = 0; s < t.length; s++) {
            var c = t[s],
              l = r.base ? c[0] + r.base : c[0],
              d = a[l] || 0,
              u = "".concat(l, " ").concat(d);
            a[l] = d + 1;
            var h = n(u),
              p = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== h) e[h].references++, e[h].updater(p);
            else {
              var f = o(p, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: u, updater: f, references: 1 });
            }
            i.push(u);
          }
          return i;
        }
        function o(t, e) {
          var n = e.domAPI(e);
          return (
            n.update(t),
            function (e) {
              if (e) {
                if (
                  e.css === t.css &&
                  e.media === t.media &&
                  e.sourceMap === t.sourceMap &&
                  e.supports === t.supports &&
                  e.layer === t.layer
                )
                  return;
                n.update((t = e));
              } else n.remove();
            }
          );
        }
        t.exports = function (t, o) {
          var a = r((t = t || []), (o = o || {}));
          return function (t) {
            t = t || [];
            for (var i = 0; i < a.length; i++) {
              var s = n(a[i]);
              e[s].references--;
            }
            for (var c = r(t, o), l = 0; l < a.length; l++) {
              var d = n(a[l]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            a = c;
          };
        };
      },
      113: (t) => {
        "use strict";
        t.exports = function (t, e) {
          if (e.styleSheet) e.styleSheet.cssText = t;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t));
          }
        };
      },
      314: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var n = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (n += "@supports (".concat(e[4], ") {")),
                  e[2] && (n += "@media ".concat(e[2], " {")),
                  r &&
                    (n += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (n += t(e)),
                  r && (n += "}"),
                  e[2] && (n += "}"),
                  e[4] && (n += "}"),
                  n
                );
              }).join("");
            }),
            (e.i = function (t, n, r, o, a) {
              "string" == typeof t && (t = [[null, t, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (i[c] = !0);
                }
              for (var l = 0; l < t.length; l++) {
                var d = [].concat(t[l]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  n &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = n))
                      : (d[2] = n)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      354: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = t[1],
            n = t[3];
          if (!n) return e;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(n)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r,
                ),
              a = "/*# ".concat(o, " */");
            return [e].concat([a]).join("\n");
          }
          return [e].join("\n");
        };
      },
      540: (t) => {
        "use strict";
        t.exports = function (t) {
          var e = document.createElement("style");
          return t.setAttributes(e, t.attributes), t.insert(e, t.options), e;
        };
      },
      659: (t) => {
        "use strict";
        var e = {};
        t.exports = function (t, n) {
          var r = (function (t) {
            if (void 0 === e[t]) {
              var n = document.querySelector(t);
              if (
                window.HTMLIFrameElement &&
                n instanceof window.HTMLIFrameElement
              )
                try {
                  n = n.contentDocument.head;
                } catch (t) {
                  n = null;
                }
              e[t] = n;
            }
            return e[t];
          })(t);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          r.appendChild(n);
        };
      },
      825: (t) => {
        "use strict";
        t.exports = function (t) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = t.insertStyleElement(t);
          return {
            update: function (n) {
              !(function (t, e, n) {
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
                  e.styleTagTransform(r, t, e.options);
              })(e, t, n);
            },
            remove: function () {
              !(function (t) {
                if (null === t.parentNode) return !1;
                t.parentNode.removeChild(t);
              })(e);
            },
          };
        };
      },
    },
    e = {};
  function n(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var a = (e[r] = { id: r, exports: {} });
    return t[r](a, a.exports, n), a.exports;
  }
  (n.n = (t) => {
    var e = t && t.__esModule ? () => t.default : () => t;
    return n.d(e, { a: e }), e;
  }),
    (n.d = (t, e) => {
      for (var r in e)
        n.o(e, r) &&
          !n.o(t, r) &&
          Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
    }),
    (n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var t = n(72),
        e = n.n(t),
        r = n(825),
        o = n.n(r),
        a = n(659),
        i = n.n(a),
        s = n(56),
        c = n.n(s),
        l = n(540),
        d = n.n(l),
        u = n(113),
        h = n.n(u),
        p = n(47),
        f = {};
      (f.styleTagTransform = h()),
        (f.setAttributes = c()),
        (f.insert = i().bind(null, "head")),
        (f.domAPI = o()),
        (f.insertStyleElement = d()),
        e()(p.A, f),
        p.A && p.A.locals && p.A.locals;
      const m = "https://notes-api.dicoding.dev/v2";
      let y = null,
        v = !1,
        g = !1;
      async function b(t = "all") {
        try {
          let e;
          if (
            ((e =
              "archived" === t
                ? await fetch(`${m}/notes/archived`, {
                    headers: { "Content-Type": "application/json" },
                  })
                : await fetch(`${m}/notes`, {
                    headers: { "Content-Type": "application/json" },
                  })),
            !e.ok)
          )
            throw new Error(`HTTP error! status: ${e.status}`);
          const { data: n } = await e.json();
          return n;
        } catch (t) {
          return console.error("Error fetching notes:", t), [];
        }
      }
      async function E(t, e) {
        try {
          const n = await fetch(`${m}/notes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ title: t, body: e }),
          });
          if (!n.ok) {
            const t = await n.json();
            throw new Error(t.message || "Failed to create note");
          }
          return await n.json();
        } catch (t) {
          throw (console.error("Error creating note:", t), t);
        }
      }
      async function w(t) {
        try {
          const e = await fetch(`${m}/notes/${t}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });
          if (!e.ok) throw new Error(`HTTP error! status: ${e.status}`);
          return await e.json();
        } catch (t) {
          throw (console.error("Error deleting note:", t), t);
        }
      }
      function A() {
        const t = document.getElementById("noteTitle").value.trim(),
          e = document.getElementById("noteBody").value.trim(),
          n = document.getElementById("addNoteBtn"),
          r = t.length > 0;
        v &&
          ((document.getElementById("titleError").style.display = r
            ? "none"
            : "block"),
          document.getElementById("noteTitle").classList.toggle("invalid", !r));
        const o = e.length > 0;
        g &&
          ((document.getElementById("bodyError").style.display = o
            ? "none"
            : "block"),
          document.getElementById("noteBody").classList.toggle("invalid", !o)),
          (function (t) {
            const e = document.getElementById("bodyCounter");
            (e.textContent = `${t}/1000`),
              (e.className =
                "char-counter" +
                (t > 1e3 ? " error" : t > 900 ? " warning" : ""));
          })(e.length),
          (n.disabled = !(r && o));
      }
      async function T(t) {
        try {
          let e = [];
          if ("all" === t) e = await b();
          else if ("archived" === t) e = await b("archived");
          else {
            const n = await (async function () {
                try {
                  const [t, e] = await Promise.all([
                    fetch(`${m}/notes`, {
                      headers: { "Content-Type": "application/json" },
                    }),
                    fetch(`${m}/notes/archived`, {
                      headers: { "Content-Type": "application/json" },
                    }),
                  ]);
                  if (!t.ok || !e.ok)
                    throw new Error("Failed to fetch some notes");
                  const n = await t.json(),
                    r = await e.json();
                  return [...n.data, ...r.data];
                } catch (t) {
                  return console.error("Error fetching all notes:", t), [];
                }
              })(),
              r = new Date();
            "week" === t
              ? (e = n.filter((t) => {
                  const e = new Date(t.createdAt);
                  return (r - e) / 864e5 <= 7;
                }))
              : "month" === t &&
                (e = n.filter((t) => {
                  const e = new Date(t.createdAt);
                  return (
                    e.getMonth() === r.getMonth() &&
                    e.getFullYear() === r.getFullYear()
                  );
                }));
          }
          document.querySelectorAll("notes-filter li").forEach((e) => {
            e.classList.remove("active"),
              e.getAttribute("data-filter") === t && e.classList.add("active");
          }),
            await (async function (t) {
              const e = document.getElementById("notesContainer"),
                n = document.getElementById("noNotesMessage");
              if (((e.innerHTML = ""), 0 === t.length))
                n.style.display = "block";
              else {
                n.style.display = "none";
                for (const n of t) {
                  const t = document.createElement("note-item");
                  t.setAttribute("id", n.id),
                    t.setAttribute("title", n.title),
                    t.setAttribute("body", n.body),
                    t.setAttribute("date", n.createdAt),
                    t.setAttribute("archived", n.archived),
                    e.appendChild(t);
                }
              }
            })(e);
        } catch (t) {
          console.error("Error filtering notes:", t),
            alert("Failed to load notes. Please try again.");
        }
      }
      document.addEventListener("DOMContentLoaded", async () => {
        await Promise.all([
          customElements.whenDefined("notes-filter"),
          customElements.whenDefined("note-form"),
        ]),
          document
            .querySelector("notes-filter")
            .addEventListener("filterChanged", async (t) => {
              const { filter: e } = t.detail;
              await T(e);
            }),
          document.addEventListener("click", async (t) => {
            if (
              (t.target &&
                "addNoteBtn" === t.target.id &&
                (await (async function () {
                  const t = document.getElementById("noteTitle"),
                    e = document.getElementById("noteBody"),
                    n = document.getElementById("addNoteBtn"),
                    r = t.value.trim(),
                    o = e.value.trim();
                  if (!r || !o)
                    return (
                      v ||
                        ((v = !0),
                        (document.getElementById("titleError").style.display =
                          "block"),
                        document
                          .getElementById("noteTitle")
                          .classList.add("invalid")),
                      void (
                        g ||
                        ((g = !0),
                        (document.getElementById("bodyError").style.display =
                          "block"),
                        document
                          .getElementById("noteBody")
                          .classList.add("invalid"))
                      )
                    );
                  try {
                    y
                      ? (await (async function (t, e, n) {
                          try {
                            return await w(t), await E(e, n);
                          } catch (t) {
                            throw (console.error("Error updating note:", t), t);
                          }
                        })(y, r, o),
                        (y = null),
                        (n.textContent = "Add Note"))
                      : await E(r, o),
                      (t.value = ""),
                      (e.value = ""),
                      (v = !1),
                      (g = !1);
                    const a = document.querySelector("notes-filter li.active"),
                      i = a?.getAttribute("data-filter") || "all";
                    await T(i), A();
                  } catch (t) {
                    alert(`Failed to save note: ${t.message}`),
                      console.error("Save error:", t);
                  }
                })()),
              t.target?.closest(".delete-btn"))
            ) {
              const e = t.target.closest(".delete-btn").getAttribute("data-id");
              await (async function (t) {
                if (confirm("Are you sure you want to delete this note?"))
                  try {
                    await w(t);
                    const e = document.querySelector("notes-filter li.active"),
                      n = e?.getAttribute("data-filter") || "all";
                    await T(n);
                  } catch (t) {
                    alert("Failed to delete note"),
                      console.error("Delete error:", t);
                  }
              })(e);
            }
            if (t.target?.closest(".edit-btn")) {
              const e = t.target.closest(".edit-btn").getAttribute("data-id");
              await (async function (t) {
                try {
                  const e = await fetch(`${m}/notes/${t}`, {
                    headers: { "Content-Type": "application/json" },
                  });
                  if (!e.ok) throw new Error(`HTTP error! status: ${e.status}`);
                  const { data: n } = await e.json(),
                    r = document.getElementById("noteTitle"),
                    o = document.getElementById("noteBody"),
                    a = document.getElementById("addNoteBtn");
                  (r.value = n.title),
                    (o.value = n.body),
                    (v = !0),
                    (g = !0),
                    (y = t),
                    (a.textContent = "Update Note"),
                    (a.disabled = !1),
                    A(),
                    document
                      .querySelector("note-form")
                      .scrollIntoView({ behavior: "smooth" });
                } catch (t) {
                  console.error("Error fetching note for edit:", t),
                    alert("Failed to load note for editing");
                }
              })(e);
            }
          }),
          document.addEventListener("archiveToggled", async (t) => {
            const { id: e, archived: n } = t.detail;
            try {
              await (async function (t, e) {
                try {
                  const n = e ? "archive" : "unarchive",
                    r = await fetch(`${m}/notes/${t}/${n}`, {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                    });
                  if (!r.ok) throw new Error(`HTTP error! status: ${r.status}`);
                  return await r.json();
                } catch (t) {
                  throw (console.error("Error toggling archive status:", t), t);
                }
              })(e, n);
              const t = document.querySelector("notes-filter li.active"),
                r = t?.getAttribute("data-filter") || "all";
              n || "archived" !== r ? await T(r) : await T("all");
            } catch (t) {
              console.error("Error toggling archive status:", t),
                alert("Failed to update note status");
            }
          }),
          (function () {
            const t = document.getElementById("noteTitle"),
              e = document.getElementById("noteBody"),
              n = document.getElementById("addNoteBtn");
            t.addEventListener("blur", () => {
              v || ((v = !0), A());
            }),
              e.addEventListener("blur", () => {
                g || ((g = !0), A());
              }),
              t.addEventListener("input", A),
              e.addEventListener("input", A),
              (n.disabled = !0);
          })(),
          await T("all");
      });
    })(),
    (() => {
      class t extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          const t = this.getAttribute("id") || "",
            e = this.getAttribute("title") || "",
            n = this.getAttribute("body") || "",
            r = this.getAttribute("date") || "",
            o = "true" === this.getAttribute("archived");
          (this.innerHTML = `\n            <div class="note">\n                <h3>${this.escapeHtml(e)}</h3>\n                <p>${this.escapeHtml(n)}</p>\n                <p class="date">${new Date(r).toLocaleString()}</p>\n                <div class="note-actions">\n                    <button class="edit-btn" data-id="${t}">\n                        <i class="ph ph-pencil-simple"></i> Edit\n                    </button>\n                    <button class="delete-btn" data-id="${t}">\n                        <i class="ph ph-trash"></i> Delete\n                    </button>\n                    <button class="archive-btn" data-id="${t}" data-archived="${o}">\n                        <i class="ph ${o ? "ph-arrow-arc-left" : "ph-archive"}"></i>\n                        ${o ? " Unarchive" : " Archive"}\n                    </button>\n                </div>\n            </div>\n        `),
            this.querySelector(".archive-btn").addEventListener(
              "click",
              async (t) => {
                t.stopPropagation();
                const e = t.currentTarget,
                  n = e.getAttribute("data-id"),
                  r = "true" === e.getAttribute("data-archived"),
                  o = new CustomEvent("archiveToggled", {
                    detail: { id: n, archived: !r },
                    bubbles: !0,
                    composed: !0,
                  });
                this.dispatchEvent(o);
              },
            );
        }
        escapeHtml(t) {
          return t
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
        }
      }
      customElements.define("note-item", t);
      class e extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          this.innerHTML =
            '\n            <div class="note-container">\n                <h2>New Note</h2>\n                <input type="text" id="noteTitle" placeholder="Write title here ...">\n                <small id="titleError" class="error-message">Title cannot be empty</small>\n                \n                <textarea id="noteBody" placeholder="Write your note here ..."></textarea>\n                <small id="bodyError" class="error-message">Note content cannot be empty</small>\n                <div id="bodyCounter" class="char-counter">0/1000</div>\n                \n                <button id="addNoteBtn" disabled>Add Note</button>\n            </div>\n        ';
        }
      }
      customElements.define("note-form", e);
      class n extends HTMLElement {
        constructor() {
          super();
        }
        connectedCallback() {
          (this.innerHTML =
            '\n            <div class="header-left">\n                <h2>My Notes</h2>\n                <nav>\n                    <ul>\n                        <li class="active" data-filter="all">All</li>\n                        <li data-filter="archived">Archived</li>\n                        <li data-filter="week">This Week</li>\n                        <li data-filter="month">This Month</li>\n                    </ul>\n                </nav>\n            </div>\n        '),
            this.querySelectorAll("li").forEach((t) => {
              t.addEventListener("click", (e) => {
                e.preventDefault();
                const n = t.getAttribute("data-filter");
                this.querySelectorAll("li").forEach((t) => {
                  t.classList.remove("active");
                }),
                  t.classList.add("active"),
                  this.dispatchEvent(
                    new CustomEvent("filterChanged", {
                      detail: { filter: n },
                      bubbles: !0,
                      composed: !0,
                    }),
                  );
              });
            });
        }
      }
      customElements.define("notes-filter", n);
    })();
})();
//# sourceMappingURL=home.b5e7f9ce314d2c4536fc.bundle.js.map
