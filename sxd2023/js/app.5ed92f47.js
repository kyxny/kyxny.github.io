(function () {
  "use strict";
  var t = {
      1435: function (t, e, i) {
        var a = i(9242),
          n = i(3396);
        function s(t, e, i, a, s, r) {
          const o = (0, n.up)("router-view");
          return (0, n.wg)(), (0, n.j4)(o);
        }
        var r = i(6520);
        class o extends r.w3 {}
        var l = i(89);
        const c = (0, l.Z)(o, [["render", s]]);
        var d = c,
          h = i(2483);
        const u = [
            { path: "/", redirect: "/index" },
            { path: "/index.html", redirect: "/index" },
            {
              path: "/index",
              name: "index",
              component: () =>
                Promise.all([i.e(385), i.e(826)]).then(i.bind(i, 2319)),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile",
              name: "mobile",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(8)]).then(i.bind(i, 3237)),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            { path: "/mobile/index", redirect: "/mobile" },
            {
              path: "/mobile/philosophy",
              name: "MobilePhilosophy",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(510)]).then(
                  i.bind(i, 287)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile/structure",
              name: "MobileStructure",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(512)]).then(
                  i.bind(i, 1560)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile/partner",
              name: "MobilePartner",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(917)]).then(
                  i.bind(i, 2423)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile/honour",
              name: "MobileHonour",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(991)]).then(
                  i.bind(i, 8969)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile/rescue",
              name: "MobileRescue",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(834)]).then(
                  i.bind(i, 7332)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile/contact",
              name: "MobileContact",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(721)]).then(
                  i.bind(i, 796)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile/newslist",
              name: "MobileNewsList",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(431)]).then(
                  i.bind(i, 1289)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile/news",
              name: "MobileNews",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(704)]).then(
                  i.bind(i, 3878)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile/videolist",
              name: "MobileVideoList",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(104)]).then(
                  i.bind(i, 9952)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
            {
              path: "/mobile/video",
              name: "MobileVideo",
              component: () =>
                Promise.all([i.e(385), i.e(149), i.e(25)]).then(
                  i.bind(i, 2041)
                ),
              meta: { title: "卡友官网-中国物流运输卡车智能保障平台" },
            },
          ],
          p = (0, h.p7)({ history: (0, h.r5)("/sxd2023/"), routes: u });
        p.beforeEach((t, e, i) => {
          t.meta?.title && (window.document.title = t.meta.title), i();
        });
        var f = p,
          y = i(65),
          b = new y.ZP.Store({}),
          v = i(4054),
          m = i(1884);
        (0, a.ri)(d).use(v.pV).use(m.Z).use(b).use(f).mount("#app");
      },
      4054: function (t, e, i) {
        i.d(e, {
          pV: function () {
            return o;
          },
        });
        var a = i(7327);
        i(7658);
        class n {
          static loadData(t) {
            let e;
            return (
              (e = t
                ? localStorage.getItem("local" + this.CACHENAME) || "{}"
                : sessionStorage.getItem("session" + this.CACHENAME) || "{}"),
              JSON.parse(e)
            );
          }
          static saveData(t, e) {
            const i = JSON.stringify(e);
            t
              ? localStorage.setItem("local" + this.CACHENAME, i)
              : sessionStorage.setItem("session" + this.CACHENAME, i);
          }
          static getData(t, e) {
            if (0 == t.length) return e;
            {
              let i = e;
              for (let e = 0; e < t.length; e++)
                if (Array.isArray(i)) {
                  const a = /^\d+$/.test(t[e]) ? Number.parseInt(t[e]) : null;
                  if (!(null !== a && i.length > a)) return null;
                  i = i[a];
                } else {
                  if (
                    "object" != typeof i ||
                    null === i ||
                    !(t[e] in i) ||
                    !n.anyTo(i)
                  )
                    return null;
                  i = i[t[e]];
                }
              return i;
            }
          }
          static findData(t, e, i) {
            if (t.length > 0) {
              const a = t.splice(0, 1)[0];
              if (Array.isArray(i))
                if (/^\d+$/.test(a)) {
                  const n = Number.parseInt(a);
                  i.length > n
                    ? (i[n] = this.findData(t, e, i[n]))
                    : i.push(this.setData(t, e));
                } else i.push(this.setData(t, e));
              else
                "object" == typeof i &&
                  null !== i &&
                  n.anyTo(i) &&
                  (i[a] =
                    a in i ? this.findData(t, e, i[a]) : this.setData(t, e));
            } else i = e;
            return i;
          }
          static setData(t, e) {
            if (t.length) {
              const i = t.splice(t.length - 1, 1)[0];
              let a = /^\d+$/.test(i) ? [e] : { [i]: e };
              for (let e = t.length - 1; e >= 0; e--) {
                const i = /^\d+$/.test(t[e]) ? [a] : { [t[e]]: a };
                a = i;
              }
              return a;
            }
            return e;
          }
          static removeData(t, e) {
            if (t.length > 0) {
              const i = t.splice(0, 1)[0];
              if (Array.isArray(e)) {
                if (/^\d+$/.test(i)) {
                  const a = Number.parseInt(i);
                  if (a < e.length)
                    return (
                      0 == t.length
                        ? e.splice(a, 1)
                        : (e[a] = this.removeData(t, e[a]) || e[a]),
                      e
                    );
                }
              } else if (
                "object" == typeof e &&
                null !== e &&
                i in e &&
                n.anyTo(e)
              )
                return (
                  0 == t.length
                    ? delete e[i]
                    : (e[i] = this.removeData(t, e[i]) || e[i]),
                  e
                );
            }
            return null;
          }
          static parseExpire(t) {
            return 0 != t ? new Date().getTime() + 1e3 * t : 0;
          }
          static checkExpire(t) {
            return t > new Date().getTime() || 0 === t;
          }
          static anyTo(t) {
            return !0;
          }
        }
        (0, a.Z)(n, "CACHENAME", "cachedata");
        class s {
          constructor(t, e, i) {
            (0, a.Z)(this, "scope", void 0),
              (0, a.Z)(this, "fetch", void 0),
              (0, a.Z)(this, "push", void 0),
              (0, a.Z)(this, "library", void 0),
              (this.scope = t),
              (this.fetch = e),
              (this.push = i),
              (this.library = this.fetch());
          }
          loadLibrary() {
            this.library = this.fetch();
          }
          saveLibrary() {
            this.push(this.library);
          }
          set(t, e = null, i = 0) {
            if ((this.loadLibrary(), "object" == typeof t)) {
              (i = "number" == typeof e ? e : i),
                (i = 0 != i ? new Date().getTime() + 1e3 * i : 0);
              const a = JSON.parse(JSON.stringify([t]))[0],
                n = Object.keys(a);
              for (const t of n) this.library[t] = { data: a[t], expire: i };
            } else {
              if (-1 != t.indexOf(":")) throw new Error("不能完成跨域操作");
              {
                i = n.parseExpire(i);
                const a = t.split("."),
                  s = a.splice(0, 1)[0];
                if (null === e) throw new Error("非法的参数项");
                const r = JSON.parse(JSON.stringify([e]))[0];
                s in this.library
                  ? n.checkExpire(this.library[s].expire)
                    ? (this.library[s] = {
                        data: n.findData(a, r, this.library[s].data),
                        expire: i,
                      })
                    : (delete this.library[s],
                      (this.library[s] = { data: n.setData(a, r), expire: i }))
                  : (this.library[s] = { data: n.setData(a, r), expire: i });
              }
            }
            return this.saveLibrary(), this;
          }
          get(t, e) {
            if ((this.loadLibrary(), -1 != t.indexOf(":")))
              throw new Error("不能完成跨域操作");
            {
              const i = t.split("."),
                a = i.splice(0, 1)[0];
              if (a in this.library) {
                if (n.checkExpire(this.library[a].expire)) {
                  const t = n.getData(i, this.library[a].data);
                  return null !== t ? JSON.parse(JSON.stringify([t]))[0] : e;
                }
                delete this.library[a], this.saveLibrary();
              }
            }
            return e;
          }
          has(t) {
            if (-1 != t.indexOf(":")) throw new Error("不能完成跨域操作");
            {
              const e = t.split("."),
                i = e.splice(0, 1)[0];
              if (i in this.library) {
                if (n.checkExpire(this.library[i].expire))
                  return null !== n.getData(e, this.library[i].data);
                delete this.library[i], this.saveLibrary();
              }
            }
            return !1;
          }
          remove(t) {
            if (-1 != t.indexOf(":")) throw new Error("不能完成跨域操作");
            {
              const e = t.split("."),
                i = e.splice(0, 1)[0];
              i in this.library[i] &&
                (n.checkExpire(this.library[i].expire) && 0 !== e.length
                  ? (this.library[i].data =
                      n.removeData(e, this.library[i].data) ||
                      this.library[i].data)
                  : delete this.library[i],
                this.saveLibrary());
            }
            return this;
          }
          clear() {
            return this.push(null), this.loadLibrary(), this;
          }
        }
        class r {
          constructor(t = !0) {
            (0, a.Z)(this, "type", !0),
              (0, a.Z)(this, "library", void 0),
              (this.type = t),
              (this.library = n.loadData(this.type));
          }
          scope(t) {
            return new s(
              t,
              () => (t in this.library ? this.library[t] : {}),
              (e) => {
                null === e ? delete this.library[t] : (this.library[t] = e),
                  n.saveData(this.type, this.library);
              }
            );
          }
          set(t, e = null, i = 0) {
            let a = "default";
            if ("object" == typeof t) {
              i = n.parseExpire("number" == typeof e ? e : i);
              const s = JSON.parse(JSON.stringify([t]))[0],
                r = Object.keys(s);
              a in this.library || (this.library[a] = {});
              for (const t of r) this.library[a][t] = { data: s[t], expire: i };
            } else {
              i = n.parseExpire(i);
              const s = t.indexOf(":");
              s > 0 &&
                s < t.length - 1 &&
                ((a = t.replace(/^([^\\:]+)\\:.+$/, "$1")),
                (t = t.replace(/^[^\\:]+\\:(.+)$/, "$1")));
              const r = t.split("."),
                o = r.splice(0, 1)[0];
              if ((a in this.library || (this.library[a] = {}), null === e))
                throw new Error("非法的参数项");
              const l = JSON.parse(JSON.stringify([e]))[0];
              o in this.library[a]
                ? n.checkExpire(this.library[a][o].expire)
                  ? (this.library[a][o] = {
                      data: n.findData(r, l, this.library[a][o].data),
                      expire: i,
                    })
                  : (delete this.library[a][o],
                    (this.library[a][o] = { data: n.setData(r, l), expire: i }))
                : (this.library[a][o] = { data: n.setData(r, l), expire: i });
            }
            return n.saveData(this.type, this.library), this;
          }
          get(t, e) {
            let i = "default";
            const a = t.indexOf(":");
            if (
              (a > 0 &&
                a < t.length - 1 &&
                ((i = t.replace(/^([^\\:]+)\\:.+$/, "$1")),
                (t = t.replace(/^[^\\:]+\\:(.+)$/, "$1"))),
              i in this.library)
            ) {
              const a = t.split("."),
                s = a.splice(0, 1)[0];
              if (s in this.library[i]) {
                if (n.checkExpire(this.library[i][s].expire)) {
                  const t = n.getData(a, this.library[i][s].data);
                  return null !== t ? JSON.parse(JSON.stringify([t]))[0] : e;
                }
                delete this.library[i][s], n.saveData(this.type, this.library);
              }
            }
            return e;
          }
          has(t) {
            let e = "default";
            const i = t.indexOf(":");
            if (
              (i > 0 &&
                i < t.length - 1 &&
                ((e = t.replace(/^([^\\:]+)\\:.+$/, "$1")),
                (t = t.replace(/^[^\\:]+\\:(.+)$/, "$1"))),
              e in this.library)
            ) {
              const i = t.split("."),
                a = i.splice(0, 1)[0];
              if (a in this.library[e]) {
                if (n.checkExpire(this.library[e][a].expire))
                  return null !== n.getData(i, this.library[e][a].data);
                delete this.library[e][a], n.saveData(this.type, this.library);
              }
            }
            return !1;
          }
          remove(t) {
            let e = "default";
            const i = t.indexOf(":");
            if (
              (i > 0 &&
                i < t.length - 1 &&
                ((e = t.replace(/^([^\\:]+)\\:.+$/, "$1")),
                (t = t.replace(/^[^\\:]+\\:(.+)$/, "$1"))),
              e in this.library)
            ) {
              const i = t.split("."),
                a = i.splice(0, 1)[0];
              a in this.library[e] &&
                (n.checkExpire(this.library[e][a].expire) && 0 !== i.length
                  ? (this.library[e][a].data =
                      n.removeData(i, this.library[e][a].data) ||
                      this.library[e][a].data)
                  : delete this.library[e][a],
                n.saveData(this.type, this.library));
            }
            return this;
          }
          clear(t) {
            return (
              (t = t ?? "default"),
              t in this.library &&
                (delete this.library[t], n.saveData(this.type, this.library)),
              this
            );
          }
          clearAll() {
            return (
              (this.library = {}), n.saveData(this.type, this.library), this
            );
          }
          reload() {
            return (this.library = n.loadData(this.type)), this;
          }
        }
        class o {
          static install(t) {
            (o.localCache = new r()),
              (o.sessionCache = new r(!1)),
              (t.config.globalProperties.cache = o.localCache);
          }
          static getCache(t = !0) {
            return 1 == t ? o.localCache : o.sessionCache;
          }
        }
        (0, a.Z)(o, "localCache", void 0),
          (0, a.Z)(o, "sessionCache", void 0),
          (e["ZP"] = o.getCache);
      },
      1884: function (t, e, i) {
        i.d(e, {
          Z: function () {
            return gt;
          },
        });
        var a = i(7327),
          n = i(9242),
          s = i(3396);
        function r(t, e, i, a, n, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)(
              s.HY,
              null,
              [
                ((0, s.wg)(),
                (0, s.j4)(
                  (0, s.LL)(t.$options.components?.MsgboxDockbar),
                  { ref: "msgbox-dockbar" },
                  null,
                  512
                )),
                ((0, s.wg)(),
                (0, s.j4)(
                  (0, s.LL)(t.$options.components?.MsgboxMessage),
                  { ref: "msgbox-message" },
                  null,
                  512
                )),
                ((0, s.wg)(),
                (0, s.j4)(
                  (0, s.LL)(t.$options.components?.MsgboxAlert),
                  { ref: "msgbox-alert" },
                  null,
                  512
                )),
              ],
              64
            )
          );
        }
        var o = i(6520),
          l = i(7139);
        const c = (t) => (
            (0, s.dD)("data-v-3a2a7437"), (t = t()), (0, s.Cn)(), t
          ),
          d = ["data"],
          h = { class: "MBAlertWindow" },
          u = { key: 0 },
          p = c(() =>
            (0, s._)(
              "svg",
              { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
              [
                (0, s._)("path", {
                  fill: "currentColor",
                  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z",
                }),
              ],
              -1
            )
          ),
          f = [p],
          y = { key: 1, class: "MBAlertButton" },
          b = ["onClick"];
        function v(t, e, i, a, r, o) {
          return (
            (0, s.wg)(),
            (0, s.j4)(
              n.uT,
              {
                "enter-from-class": "MAAUTOSHOW-enter",
                "leave-from-class": "MAAUTOSHOW-leave",
                "enter-to-class": "MAAUTOSHOW-enter-to",
                "leave-to-class": "MAAUTOSHOW-leave-to",
                "enter-active-class": "MAAUTOSHOW-enter-active",
                "leave-active-class": "MAAUTOSHOW-leave-active",
                onAfterLeave: e[2] || (e[2] = (e) => t.onAfter()),
              },
              {
                default: (0, s.w5)(() => [
                  t.display && t.dataLine
                    ? ((0, s.wg)(),
                      (0, s.iD)(
                        "div",
                        {
                          key: 0,
                          class: "MBAlertMark",
                          style: (0, l.j5)(
                            void 0 !== t.dataLine.zindex
                              ? "z-index:" + t.dataLine.zindex
                              : ""
                          ),
                          data: t.updateNum,
                        },
                        [
                          (0, s._)("div", h, [
                            void 0 !== t.dataLine.title
                              ? ((0, s.wg)(),
                                (0, s.iD)(
                                  "div",
                                  {
                                    key: 0,
                                    class: (0, l.C_)([
                                      "MBAlertTitle",
                                      "Color" + t.dataLine.status,
                                    ]),
                                  },
                                  [
                                    (0, s._)(
                                      "span",
                                      null,
                                      (0, l.zw)(t.dataLine.title),
                                      1
                                    ),
                                    void 0 === t.dataLine.button
                                      ? ((0, s.wg)(),
                                        (0, s.iD)(
                                          "a",
                                          {
                                            key: 0,
                                            onClick:
                                              e[0] ||
                                              (e[0] = (...e) =>
                                                t.close && t.close(...e)),
                                          },
                                          "×"
                                        ))
                                      : (0, s.kq)("", !0),
                                  ],
                                  2
                                ))
                              : (0, s.kq)("", !0),
                            (0, s._)(
                              "div",
                              {
                                class: (0, l.C_)([
                                  "MBAlertBody",
                                  void 0 === t.dataLine.title
                                    ? "Color" + t.dataLine.status
                                    : "",
                                ]),
                                style: (0, l.j5)(
                                  (void 0 !== t.dataLine.width
                                    ? t.dataLine.width + "px; "
                                    : "") +
                                    (void 0 !== t.dataLine.height
                                      ? t.dataLine.height + "px;"
                                      : "")
                                ),
                              },
                              [
                                (0, s._)(
                                  "div",
                                  {
                                    style: (0, l.j5)([
                                      { height: "100%" },
                                      t.dataLine.height && t.dataLine.height > 0
                                        ? "overflow-y: auto; padding-right:6px"
                                        : "",
                                    ]),
                                  },
                                  [
                                    (0, s._)(
                                      "span",
                                      {
                                        class: "MBAlertBox",
                                        style: (0, l.j5)({
                                          textAlign:
                                            "waiting" == t.dataLine.status
                                              ? "center"
                                              : "left",
                                        }),
                                      },
                                      [
                                        "waiting" === t.dataLine.status
                                          ? ((0, s.wg)(), (0, s.iD)("i", u, f))
                                          : (0, s.kq)("", !0),
                                        (0, s.Uk)(
                                          " " +
                                            (0, l.zw)(t.dataLine.content || ""),
                                          1
                                        ),
                                      ],
                                      4
                                    ),
                                  ],
                                  4
                                ),
                              ],
                              6
                            ),
                            void 0 !== t.dataLine.button
                              ? ((0, s.wg)(),
                                (0, s.iD)("div", y, [
                                  ((0, s.wg)(!0),
                                  (0, s.iD)(
                                    s.HY,
                                    null,
                                    (0, s.Ko)(
                                      t.dataLine.button,
                                      (e, i) => (
                                        (0, s.wg)(),
                                        (0, s.iD)(
                                          "a",
                                          {
                                            key: i,
                                            style: (0, l.j5)(
                                              void 0 !== e.color
                                                ? "background:" + e.color
                                                : ""
                                            ),
                                            class: (0, l.C_)(
                                              void 0 !== e.status
                                                ? "Color" + e.status
                                                : ""
                                            ),
                                            onClick: (i) => t.taskBtn(e.handle),
                                          },
                                          (0, l.zw)(e.text),
                                          15,
                                          b
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  (0, s._)(
                                    "a",
                                    {
                                      class: "MBAlertCancel",
                                      onClick:
                                        e[1] ||
                                        (e[1] = (...e) =>
                                          t.close && t.close(...e)),
                                    },
                                    (0, l.zw)(t.dataLine.cancel || "取消"),
                                    1
                                  ),
                                ]))
                              : (0, s.kq)("", !0),
                          ]),
                        ],
                        12,
                        d
                      ))
                    : (0, s.kq)("", !0),
                ]),
                _: 1,
              }
            )
          );
        }
        i(7658);
        class m extends o.w3 {
          constructor(...t) {
            super(...t),
              (0, a.Z)(this, "entity", void 0),
              (0, a.Z)(this, "dataLine", void 0),
              (0, a.Z)(this, "display", !1),
              (0, a.Z)(this, "after", void 0),
              (0, a.Z)(this, "updateNum", 0);
          }
          parseColor(t) {
            if (void 0 === t) return "";
            (t = t.replace(/#/, "")), 3 === t.length && (t += t);
            const e = t.match(/^(.{2})(.{2})(.{2})$/);
            if (!e || 4 !== e.length) return "";
            const i = [];
            let a = 0;
            for (let o = 1; o < e.length; o++) {
              const t = Number.parseInt(e[o], 16);
              (a += t), i.push(t);
            }
            const n = 25;
            let s = "333";
            a > 382.5
              ? ((i[0] -= n), (i[1] -= n), (i[2] -= n), (s = "333"))
              : ((i[0] += n), (i[1] += n), (i[2] += n), (s = "fff"));
            for (let o = 0; o < i.length; o++)
              i[o] < 0 ? (i[o] = 0) : i[o] > 255 && (i[o] = 255);
            const r = i[0].toString(16) + i[1].toString(16) + i[2].toString(16);
            return `--button-hover-color: #${r}; color: #${s}; background:#${t};`;
          }
          clear() {
            1 == this.display
              ? (this.display = !1)
              : ((this.entity = void 0), (this.dataLine = void 0));
          }
          open(t) {
            (this.entity = t),
              (this.dataLine = this.entity.getCurrent()),
              (this.display = !0),
              void 0 === this.dataLine.title &&
                void 0 === this.dataLine.button &&
                setTimeout(() => this.entity?.hide(), 2e3),
              (this.updateNum += 1);
          }
          update(t) {
            if (!t) return this.clear();
            !0 === this.display &&
              void 0 === this.entity &&
              (this.display = !1),
              void 0 !== this.entity && 1 == this.display
                ? this.entity.handle == t.handle
                  ? this.open(t)
                  : ((this.after = () => {
                      this.open(t);
                    }),
                    (this.display = !1))
                : this.open(t);
          }
          close() {
            this.entity && this.entity.hide();
          }
          onAfter() {
            this.entity?.closed(),
              (this.entity = void 0),
              (this.dataLine = void 0),
              this.after && this.after(),
              (this.after = void 0);
          }
          taskBtn(t) {
            this.entity?.commit(t);
          }
        }
        var g = i(89);
        const w = (0, g.Z)(m, [
          ["render", v],
          ["__scopeId", "data-v-3a2a7437"],
        ]);
        var L = w;
        const x = { key: 0, class: "MBDockbar" },
          M = { class: "MBDockItemBack" },
          k = ["onClick"],
          D = { class: "MBDockButton" },
          C = ["onClick"];
        function O(t, e, i, a, r, o) {
          return t.dataList.length > 0
            ? ((0, s.wg)(),
              (0, s.iD)("div", x, [
                ((0, s.wg)(!0),
                (0, s.iD)(
                  s.HY,
                  null,
                  (0, s.Ko)(
                    t.dataList,
                    (e, i) => (
                      (0, s.wg)(),
                      (0, s.iD)("div", { key: i, class: "MBDockItem" }, [
                        (0, s._)("div", M, [
                          (0, s._)(
                            "div",
                            {
                              class: "MBDockTitle",
                              onClick: (0, n.iM)((e) => t.open(i), ["stop"]),
                            },
                            (0, l.zw)(e.title),
                            9,
                            k
                          ),
                          (0, s._)("div", D, [
                            (0, s._)(
                              "a",
                              {
                                onClick: (0, n.iM)((e) => t.close(i), ["stop"]),
                              },
                              "×",
                              8,
                              C
                            ),
                          ]),
                        ]),
                      ])
                    )
                  ),
                  128
                )),
              ]))
            : (0, s.kq)("", !0);
        }
        class A extends o.w3 {
          constructor(...t) {
            super(...t),
              (0, a.Z)(this, "entity", []),
              (0, a.Z)(this, "dataList", []);
          }
          update(t) {
            this.entity = t;
            const e = [];
            t.forEach((t) => {
              const i = t.getCurrent();
              e.push({ title: i.title?.text ?? "未命名", handle: t.handle });
            }),
              (this.dataList = e);
          }
          close(t) {
            this.entity[t].hide();
          }
          open(t) {
            this.entity[t].show();
          }
        }
        const B = (0, g.Z)(A, [
          ["render", O],
          ["__scopeId", "data-v-8caa0798"],
        ]);
        var S = B;
        const E = ["data"],
          _ = { class: "MBWindow" },
          N = { key: 0, class: "MBBox" },
          j = { key: 1, class: "MBBox" },
          z = { key: 2, class: "MBBox" },
          Z = { key: 1, class: "MBButton" },
          T = ["onClick"];
        function $(t, e, i, a, r, o) {
          const c = (0, s.up)("msgbox-result");
          return (
            (0, s.wg)(),
            (0, s.j4)(
              n.uT,
              {
                "enter-from-class": "MBAUTOSHOW-enter",
                "leave-from-class": "MBAUTOSHOW-leave",
                "enter-to-class": "MBAUTOSHOW-enter-to",
                "leave-to-class": "MBAUTOSHOW-leave-to",
                "enter-active-class": "MBAUTOSHOW-enter-active",
                "leave-active-class": "MBAUTOSHOW-leave-active",
                onAfterLeave: t.onAfter,
              },
              {
                default: (0, s.w5)(() => [
                  t.display && t.dataLine
                    ? ((0, s.wg)(),
                      (0, s.iD)(
                        "div",
                        {
                          key: 0,
                          class: "MBMark",
                          style: (0, l.j5)(
                            void 0 !== t.dataLine.zindex
                              ? "z-index: " + t.dataLine.zindex
                              : ""
                          ),
                          data: t.updateNum,
                        },
                        [
                          (0, s._)("div", _, [
                            void 0 !== t.dataLine.title
                              ? ((0, s.wg)(),
                                (0, s.iD)(
                                  "div",
                                  {
                                    key: 0,
                                    class: (0, l.C_)([
                                      "MBTitle",
                                      "Color" + t.dataLine.status,
                                    ]),
                                  },
                                  [
                                    (0, s._)(
                                      "span",
                                      null,
                                      (0, l.zw)(t.dataLine.title.text),
                                      1
                                    ),
                                    t.dataLine.title.cancel ||
                                    (void 0 === t.dataLine.button &&
                                      "waiting" !== t.dataLine.status)
                                      ? ((0, s.wg)(),
                                        (0, s.iD)(
                                          "a",
                                          {
                                            key: 0,
                                            onClick:
                                              e[0] ||
                                              (e[0] = (...e) =>
                                                t.close && t.close(...e)),
                                          },
                                          "×"
                                        ))
                                      : (0, s.kq)("", !0),
                                    t.dataLine.title.minmize
                                      ? ((0, s.wg)(),
                                        (0, s.iD)(
                                          "a",
                                          {
                                            key: 1,
                                            onClick:
                                              e[1] ||
                                              (e[1] = (...e) =>
                                                t.mini && t.mini(...e)),
                                          },
                                          "–"
                                        ))
                                      : (0, s.kq)("", !0),
                                  ],
                                  2
                                ))
                              : (0, s.kq)("", !0),
                            (0, s._)(
                              "div",
                              {
                                class: "MBBody",
                                style: (0, l.j5)(
                                  (void 0 !== t.dataLine.width
                                    ? "width: " + t.dataLine.width + "px; "
                                    : "") +
                                    (void 0 !== t.dataLine.height
                                      ? "height: " + t.dataLine.height + "px; "
                                      : "")
                                ),
                              },
                              [
                                (0, s._)(
                                  "div",
                                  {
                                    style: (0, l.j5)([
                                      { height: "100%" },
                                      t.dataLine.height && t.dataLine.height > 0
                                        ? "overflow-y: auto; padding-right:6px"
                                        : "",
                                    ]),
                                  },
                                  [
                                    t.dataLine.bind && t.$options.components
                                      ? ((0, s.wg)(),
                                        (0, s.iD)("span", N, [
                                          ((0, s.wg)(),
                                          (0, s.j4)(
                                            (0, s.LL)(
                                              t.$options.components[
                                                t.dataLine.bind
                                              ]
                                            ),
                                            {
                                              ref: "tpl-" + t.dataLine.bind,
                                              content: t.dataLine.content,
                                            },
                                            null,
                                            8,
                                            ["content"]
                                          )),
                                        ]))
                                      : "default" !== t.dataLine.status
                                      ? ((0, s.wg)(),
                                        (0, s.iD)("span", j, [
                                          (0, s.Wm)(
                                            c,
                                            {
                                              status: t.dataLine.status,
                                              content: t.dataLine.content,
                                            },
                                            null,
                                            8,
                                            ["status", "content"]
                                          ),
                                        ]))
                                      : ((0, s.wg)(),
                                        (0, s.iD)(
                                          "span",
                                          z,
                                          (0, l.zw)(t.dataLine.content),
                                          1
                                        )),
                                  ],
                                  4
                                ),
                              ],
                              4
                            ),
                            void 0 !== t.dataLine.button
                              ? ((0, s.wg)(),
                                (0, s.iD)("div", Z, [
                                  ((0, s.wg)(!0),
                                  (0, s.iD)(
                                    s.HY,
                                    null,
                                    (0, s.Ko)(
                                      t.dataLine.button,
                                      (e, i) => (
                                        (0, s.wg)(),
                                        (0, s.iD)(
                                          "a",
                                          {
                                            key: i,
                                            class: (0, l.C_)(
                                              e.status ? "Color" + e.status : ""
                                            ),
                                            style: (0, l.j5)(
                                              e.color
                                                ? "background: #" + e.color
                                                : ""
                                            ),
                                            onClick: (i) => t.taskBtn(e.handle),
                                          },
                                          (0, l.zw)(e.text),
                                          15,
                                          T
                                        )
                                      )
                                    ),
                                    128
                                  )),
                                  (0, s._)(
                                    "a",
                                    {
                                      class: "MBCancel",
                                      onClick:
                                        e[2] ||
                                        (e[2] = (...e) =>
                                          t.close && t.close(...e)),
                                    },
                                    (0, l.zw)(t.dataLine.cancel || "取消"),
                                    1
                                  ),
                                ]))
                              : (0, s.kq)("", !0),
                          ]),
                        ],
                        12,
                        E
                      ))
                    : (0, s.kq)("", !0),
                ]),
                _: 1,
              },
              8,
              ["onAfterLeave"]
            )
          );
        }
        const P = (t) => (
            (0, s.dD)("data-v-5996900d"), (t = t()), (0, s.Cn)(), t
          ),
          H = { class: "MBReultBox" },
          q = { class: "MBIcon" },
          I = {
            key: 0,
            style: { color: "#67c23a" },
            viewBox: "0 0 1024 1024",
            xmlns: "http://www.w3.org/2000/svg",
            class: "icon-success",
          },
          V = P(() =>
            (0, s._)(
              "path",
              {
                fill: "currentColor",
                d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z",
              },
              null,
              -1
            )
          ),
          R = [V],
          W = {
            key: 1,
            style: { color: "#f56c6c" },
            viewBox: "0 0 1024 1024",
            xmlns: "http://www.w3.org/2000/svg",
            class: "icon-error",
          },
          J = P(() =>
            (0, s._)(
              "path",
              {
                fill: "currentColor",
                d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z",
              },
              null,
              -1
            )
          ),
          U = [J],
          F = {
            key: 2,
            style: { color: "#e6a23c" },
            viewBox: "0 0 1024 1024",
            xmlns: "http://www.w3.org/2000/svg",
            class: "icon-warning",
          },
          K = P(() =>
            (0, s._)(
              "path",
              {
                fill: "currentColor",
                d: "M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z",
              },
              null,
              -1
            )
          ),
          Y = [K],
          G = { key: 3 },
          Q = P(() =>
            (0, s._)(
              "svg",
              { viewBox: "0 0 1024 1024", xmlns: "http://www.w3.org/2000/svg" },
              [
                (0, s._)("path", {
                  fill: "currentColor",
                  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z",
                }),
              ],
              -1
            )
          ),
          X = [Q],
          tt = P(() => (0, s._)("div", { class: "MBRTitle" }, "操作提示", -1)),
          et = { class: "MBRtext" };
        function it(t, e, i, a, n, r) {
          return (
            (0, s.wg)(),
            (0, s.iD)("div", H, [
              (0, s._)("div", q, [
                "success" === t.status || "done" === t.status
                  ? ((0, s.wg)(), (0, s.iD)("svg", I, R))
                  : "error" === t.status || "fail" === t.status
                  ? ((0, s.wg)(), (0, s.iD)("svg", W, U))
                  : "warning" === t.status
                  ? ((0, s.wg)(), (0, s.iD)("svg", F, Y))
                  : "waiting" === t.status
                  ? ((0, s.wg)(), (0, s.iD)("span", G, X))
                  : (0, s.kq)("", !0),
              ]),
              tt,
              (0, s._)("div", et, (0, l.zw)(t.content), 1),
            ])
          );
        }
        var at = function (t, e, i, a) {
          var n,
            s = arguments.length,
            r =
              s < 3
                ? e
                : null === a
                ? (a = Object.getOwnPropertyDescriptor(e, i))
                : a;
          if (
            "object" === typeof Reflect &&
            "function" === typeof Reflect.decorate
          )
            r = Reflect.decorate(t, e, i, a);
          else
            for (var o = t.length - 1; o >= 0; o--)
              (n = t[o]) &&
                (r = (s < 3 ? n(r) : s > 3 ? n(e, i, r) : n(e, i)) || r);
          return s > 3 && r && Object.defineProperty(e, i, r), r;
        };
        let nt = class extends o.w3 {
          constructor(...t) {
            super(...t),
              (0, a.Z)(this, "status", void 0),
              (0, a.Z)(this, "content", void 0);
          }
        };
        nt = at(
          [
            (0, o.Ei)({
              props: {
                status: { type: String, default: "", require: !0 },
                content: { type: String, default: "" },
              },
            }),
          ],
          nt
        );
        var st = nt;
        const rt = (0, g.Z)(st, [
          ["render", it],
          ["__scopeId", "data-v-5996900d"],
        ]);
        var ot = rt,
          lt = function (t, e, i, a) {
            var n,
              s = arguments.length,
              r =
                s < 3
                  ? e
                  : null === a
                  ? (a = Object.getOwnPropertyDescriptor(e, i))
                  : a;
            if (
              "object" === typeof Reflect &&
              "function" === typeof Reflect.decorate
            )
              r = Reflect.decorate(t, e, i, a);
            else
              for (var o = t.length - 1; o >= 0; o--)
                (n = t[o]) &&
                  (r = (s < 3 ? n(r) : s > 3 ? n(e, i, r) : n(e, i)) || r);
            return s > 3 && r && Object.defineProperty(e, i, r), r;
          };
        let ct = class extends o.w3 {
          constructor(...t) {
            super(...t),
              (0, a.Z)(this, "entity", void 0),
              (0, a.Z)(this, "dataLine", void 0),
              (0, a.Z)(this, "display", !1),
              (0, a.Z)(this, "after", void 0),
              (0, a.Z)(this, "updateNum", 0);
          }
          clear() {
            !0 === this.display
              ? (this.display = !1)
              : ((this.entity = void 0), (this.dataLine = void 0));
          }
          open(t) {
            (this.entity = t),
              (this.dataLine = this.entity.getCurrent()),
              (this.display = !0),
              (this.$options.components = t.component),
              void 0 === this.dataLine.title &&
                void 0 === this.dataLine.button &&
                setTimeout(() => this.entity?.hide(), 2e3),
              (this.updateNum += 1);
          }
          update(t) {
            if (!t) return this.clear();
            !0 === this.display &&
              void 0 === this.entity &&
              (this.display = !1),
              void 0 !== this.entity && 1 == this.display
                ? this.entity.handle === t.handle
                  ? this.open(t)
                  : ((this.after = () => {
                      this.open(t);
                    }),
                    (this.display = !1))
                : this.open(t);
          }
          onAfter() {
            this.entity?.closed(),
              (this.entity = void 0),
              (this.dataLine = void 0),
              this.after && this.after(),
              (this.after = void 0);
          }
          mini() {
            this.entity && this.entity.mini();
          }
          close() {
            this.entity && this.entity.hide();
          }
          taskBtn(t) {
            let e;
            this.dataLine &&
              this.dataLine.bind &&
              (e = this.$refs["tpl-" + this.dataLine.bind]),
              this.entity?.commit(t, e);
          }
        };
        ct = lt([(0, o.Ei)({ components: { MsgboxResult: ot } })], ct);
        var dt = ct;
        const ht = (0, g.Z)(dt, [
          ["render", $],
          ["__scopeId", "data-v-e929c64c"],
        ]);
        var ut = ht,
          pt = function (t, e, i, a) {
            var n,
              s = arguments.length,
              r =
                s < 3
                  ? e
                  : null === a
                  ? (a = Object.getOwnPropertyDescriptor(e, i))
                  : a;
            if (
              "object" === typeof Reflect &&
              "function" === typeof Reflect.decorate
            )
              r = Reflect.decorate(t, e, i, a);
            else
              for (var o = t.length - 1; o >= 0; o--)
                (n = t[o]) &&
                  (r = (s < 3 ? n(r) : s > 3 ? n(e, i, r) : n(e, i)) || r);
            return s > 3 && r && Object.defineProperty(e, i, r), r;
          };
        let ft = class extends o.w3 {
          constructor(...t) {
            super(...t), (0, a.Z)(this, "msgVisual", void 0);
          }
          update(t) {
            let e,
              i,
              a = [];
            t &&
              ((e = t.sequence.active),
              (i = t.sequence.alerts[0]),
              (a = t.sequence.minmizes)),
              this.msgVisual.dockbar.update(a),
              this.msgVisual.message.update(e),
              this.msgVisual.alert.update(i);
          }
          mounted() {
            this.msgVisual = {
              dockbar: this.$refs["msgbox-dockbar"],
              message: this.$refs["msgbox-message"],
              alert: this.$refs["msgbox-alert"],
            };
          }
        };
        ft = pt(
          [
            (0, o.Ei)({
              components: {
                MsgboxDockbar: S,
                MsgboxAlert: L,
                MsgboxMessage: ut,
              },
            }),
          ],
          ft
        );
        var yt = ft;
        const bt = (0, g.Z)(yt, [["render", r]]);
        var vt = bt;
        class mt {
          constructor(t) {
            (0, a.Z)(this, "window", void 0),
              (0, a.Z)(this, "scope", void 0),
              (this.window = t);
          }
          render(t) {
            return (
              (!this.scope || this.scope === t.handle) &&
              (this.window.update(t), !0)
            );
          }
          enable(t) {
            (this.scope = t.handle), this.render(t);
          }
          disable(t) {
            this.scope == t.handle &&
              ((this.scope = void 0), this.window.update());
          }
        }
        class gt {
          static install() {
            if (window.document) {
              const t = document.getElementById("msgbox");
              if (!t) {
                const t = document.createElement("div:"),
                  e = document.createAttribute("id");
                (e.value = "msgbox"),
                  t.setAttributeNode(e),
                  document.body.appendChild(t);
              }
              const e = (0, n.ri)(vt).mount("#msgbox");
              gt.msgService = new mt(e);
            }
          }
          static getNumber() {
            return (gt.count += 1), gt.count;
          }
          static getString(t = 4) {
            t = t > 32 ? 32 : t;
            const e = gt.getNumber();
            let i = new Date().getTime(),
              a = "";
            for (let n = 0; n < t; n++)
              (i += e * n),
                (a += ((i + 16 * Math.random()) % 16 | 0).toString(16));
            return a;
          }
          static getService() {
            return gt.msgService;
          }
        }
        (0, a.Z)(gt, "msgService", void 0), (0, a.Z)(gt, "count", 0);
      },
    },
    e = {};
  function i(a) {
    var n = e[a];
    if (void 0 !== n) return n.exports;
    var s = (e[a] = { exports: {} });
    return t[a](s, s.exports, i), s.exports;
  }
  (i.m = t),
    (function () {
      var t = [];
      i.O = function (e, a, n, s) {
        if (!a) {
          var r = 1 / 0;
          for (d = 0; d < t.length; d++) {
            (a = t[d][0]), (n = t[d][1]), (s = t[d][2]);
            for (var o = !0, l = 0; l < a.length; l++)
              (!1 & s || r >= s) &&
              Object.keys(i.O).every(function (t) {
                return i.O[t](a[l]);
              })
                ? a.splice(l--, 1)
                : ((o = !1), s < r && (r = s));
            if (o) {
              t.splice(d--, 1);
              var c = n();
              void 0 !== c && (e = c);
            }
          }
          return e;
        }
        s = s || 0;
        for (var d = t.length; d > 0 && t[d - 1][2] > s; d--) t[d] = t[d - 1];
        t[d] = [a, n, s];
      };
    })(),
    (function () {
      i.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t["default"];
              }
            : function () {
                return t;
              };
        return i.d(e, { a: e }), e;
      };
    })(),
    (function () {
      i.d = function (t, e) {
        for (var a in e)
          i.o(e, a) &&
            !i.o(t, a) &&
            Object.defineProperty(t, a, { enumerable: !0, get: e[a] });
      };
    })(),
    (function () {
      (i.f = {}),
        (i.e = function (t) {
          return Promise.all(
            Object.keys(i.f).reduce(function (e, a) {
              return i.f[a](t, e), e;
            }, [])
          );
        });
    })(),
    (function () {
      i.u = function (t) {
        return (
          "./js/" +
          ({
            8: "mobile",
            25: "MobileVideo",
            104: "MobileVideoList",
            431: "MobileNewsList",
            510: "MobilePhilosophy",
            512: "MobileStructure",
            704: "MobileNews",
            721: "MobileContact",
            826: "index",
            834: "MobileRescue",
            917: "MobilePartner",
            991: "MobileHonour",
          }[t] || t) +
          "." +
          {
            8: "0a4eb553",
            25: "3e3fc15b",
            104: "5340e959",
            149: "9955d4c2",
            385: "aea1eec1",
            431: "34b6bff9",
            510: "c1dc8f1a",
            512: "41d0bdee",
            704: "2fa069ff",
            721: "11e6099f",
            826: "1a04cc28",
            834: "13adc2a0",
            917: "09f60c23",
            991: "826d4fcd",
          }[t] +
          ".js"
        );
      };
    })(),
    (function () {
      i.miniCssF = function (t) {
        return (
          "css/" +
          {
            8: "mobile",
            25: "MobileVideo",
            104: "MobileVideoList",
            431: "MobileNewsList",
            510: "MobilePhilosophy",
            512: "MobileStructure",
            704: "MobileNews",
            721: "MobileContact",
            826: "index",
            834: "MobileRescue",
            917: "MobilePartner",
            991: "MobileHonour",
          }[t] +
          "." +
          {
            8: "29c88511",
            25: "38f34f79",
            104: "7cea77f4",
            431: "600b7e27",
            510: "e79d42f7",
            512: "5ce2ee4e",
            704: "32e6fb04",
            721: "5bb3545d",
            826: "26ade4b8",
            834: "59febbaf",
            917: "6fa1ee24",
            991: "677b26ff",
          }[t] +
          ".css"
        );
      };
    })(),
    (function () {
      i.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (t) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      i.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      };
    })(),
    (function () {
      var t = {};
      i.l = function (e, a, n, s) {
        if (t[e]) t[e].push(a);
        else {
          var r, o;
          if (void 0 !== n)
            for (
              var l = document.getElementsByTagName("script"), c = 0;
              c < l.length;
              c++
            ) {
              var d = l[c];
              if (d.getAttribute("src") == e) {
                r = d;
                break;
              }
            }
          r ||
            ((o = !0),
            (r = document.createElement("script")),
            (r.charset = "utf-8"),
            (r.timeout = 120),
            i.nc && r.setAttribute("nonce", i.nc),
            (r.src = e)),
            (t[e] = [a]);
          var h = function (i, a) {
              (r.onerror = r.onload = null), clearTimeout(u);
              var n = t[e];
              if (
                (delete t[e],
                r.parentNode && r.parentNode.removeChild(r),
                n &&
                  n.forEach(function (t) {
                    return t(a);
                  }),
                i)
              )
                return i(a);
            },
            u = setTimeout(
              h.bind(null, void 0, { type: "timeout", target: r }),
              12e4
            );
          (r.onerror = h.bind(null, r.onerror)),
            (r.onload = h.bind(null, r.onload)),
            o && document.head.appendChild(r);
        }
      };
    })(),
    (function () {
      i.r = function (t) {
        "undefined" !== typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      };
    })(),
    (function () {
      i.p = "https://www.sxdkcapp.com/sxd2023/";
    })(),
    (function () {
      if ("undefined" !== typeof document) {
        var t = function (t, e, i, a, n) {
            var s = document.createElement("link");
            (s.rel = "stylesheet"), (s.type = "text/css");
            var r = function (i) {
              if (((s.onerror = s.onload = null), "load" === i.type)) a();
              else {
                var r = i && ("load" === i.type ? "missing" : i.type),
                  o = (i && i.target && i.target.href) || e,
                  l = new Error(
                    "Loading CSS chunk " + t + " failed.\n(" + o + ")"
                  );
                (l.code = "CSS_CHUNK_LOAD_FAILED"),
                  (l.type = r),
                  (l.request = o),
                  s.parentNode.removeChild(s),
                  n(l);
              }
            };
            return (
              (s.onerror = s.onload = r),
              (s.href = e),
              i
                ? i.parentNode.insertBefore(s, i.nextSibling)
                : document.head.appendChild(s),
              s
            );
          },
          e = function (t, e) {
            for (
              var i = document.getElementsByTagName("link"), a = 0;
              a < i.length;
              a++
            ) {
              var n = i[a],
                s = n.getAttribute("data-href") || n.getAttribute("href");
              if ("stylesheet" === n.rel && (s === t || s === e)) return n;
            }
            var r = document.getElementsByTagName("style");
            for (a = 0; a < r.length; a++) {
              (n = r[a]), (s = n.getAttribute("data-href"));
              if (s === t || s === e) return n;
            }
          },
          a = function (a) {
            return new Promise(function (n, s) {
              var r = i.miniCssF(a),
                o = i.p + r;
              if (e(r, o)) return n();
              t(a, o, null, n, s);
            });
          },
          n = { 143: 0 };
        i.f.miniCss = function (t, e) {
          var i = {
            8: 1,
            25: 1,
            104: 1,
            431: 1,
            510: 1,
            512: 1,
            704: 1,
            721: 1,
            826: 1,
            834: 1,
            917: 1,
            991: 1,
          };
          n[t]
            ? e.push(n[t])
            : 0 !== n[t] &&
              i[t] &&
              e.push(
                (n[t] = a(t).then(
                  function () {
                    n[t] = 0;
                  },
                  function (e) {
                    throw (delete n[t], e);
                  }
                ))
              );
        };
      }
    })(),
    (function () {
      var t = { 143: 0 };
      (i.f.j = function (e, a) {
        var n = i.o(t, e) ? t[e] : void 0;
        if (0 !== n)
          if (n) a.push(n[2]);
          else {
            var s = new Promise(function (i, a) {
              n = t[e] = [i, a];
            });
            a.push((n[2] = s));
            var r = i.p + i.u(e),
              o = new Error(),
              l = function (a) {
                if (i.o(t, e) && ((n = t[e]), 0 !== n && (t[e] = void 0), n)) {
                  var s = a && ("load" === a.type ? "missing" : a.type),
                    r = a && a.target && a.target.src;
                  (o.message =
                    "Loading chunk " + e + " failed.\n(" + s + ": " + r + ")"),
                    (o.name = "ChunkLoadError"),
                    (o.type = s),
                    (o.request = r),
                    n[1](o);
                }
              };
            i.l(r, l, "chunk-" + e, e);
          }
      }),
        (i.O.j = function (e) {
          return 0 === t[e];
        });
      var e = function (e, a) {
          var n,
            s,
            r = a[0],
            o = a[1],
            l = a[2],
            c = 0;
          if (
            r.some(function (e) {
              return 0 !== t[e];
            })
          ) {
            for (n in o) i.o(o, n) && (i.m[n] = o[n]);
            if (l) var d = l(i);
          }
          for (e && e(a); c < r.length; c++)
            (s = r[c]), i.o(t, s) && t[s] && t[s][0](), (t[s] = 0);
          return i.O(d);
        },
        a = (self["webpackChunk"] = self["webpackChunk"] || []);
      a.forEach(e.bind(null, 0)), (a.push = e.bind(null, a.push.bind(a)));
    })();
  var a = i.O(void 0, [998], function () {
    return i(1435);
  });
  a = i.O(a);
})();
//# sourceMappingURL=app.5ed92f47.js.map
