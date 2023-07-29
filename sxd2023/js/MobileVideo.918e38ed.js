'use strict'
;(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [25],
  {
    4543: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return r
        },
      })
      var i = o(3703)
      class r extends i.Z {
        getNews(e) {
          this.http('/api/news/querylist.php').url('./sxd2023').get(e)
        }
        getBody(e, t) {
          this.http('/api/news/getbody.php').params(e).url('./sxd2023').get(t)
        }
        getVideo(e) {
          this.http('/videoController/queryAllVideo').post(e)
        }
        getVideoUrl(e, t) {
          this.http('/videoController/queryVideoById').data(this.fromData(e)).post(t)
        }
      }
    },
    8079: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return g
        },
      })
      var i = o(3396),
        r = o(7139)
      const s = { class: 'cover-box' },
        c = ['src'],
        a = { class: 'cover-title-box' }
      function n(e, t, o, n, d, l) {
        return (
          (0, i.wg)(),
          (0, i.iD)('div', s, [(0, i._)('img', { src: e.src }, null, 8, c), (0, i._)('div', a, (0, r.zw)(e.title), 1)])
        )
      }
      var d = o(7327),
        l = o(6520),
        u = function (e, t, o, i) {
          var r,
            s = arguments.length,
            c = s < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, o)) : i
          if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) c = Reflect.decorate(e, t, o, i)
          else
            for (var a = e.length - 1; a >= 0; a--)
              (r = e[a]) && (c = (s < 3 ? r(c) : s > 3 ? r(t, o, c) : r(t, o)) || c)
          return s > 3 && c && Object.defineProperty(t, o, c), c
        }
      let v = class extends l.w3 {
        constructor(...e) {
          super(...e), (0, d.Z)(this, 'src', void 0), (0, d.Z)(this, 'title', void 0)
        }
      }
      v = u(
        [
          (0, l.Ei)({
            props: {
              src: { default: '', type: String, require: !0 },
              title: { default: '', type: String, require: !0 },
            },
          }),
        ],
        v
      )
      var p = v,
        h = o(89)
      const f = (0, h.Z)(p, [
        ['render', n],
        ['__scopeId', 'data-v-4023319e'],
      ])
      var g = f
    },
    1531: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return g
        },
      })
      var i = o(3396),
        r = o(7139),
        s = o(7442),
        c = o(3884)
      const a = { class: 'mobile-header-box' },
        n = (0, i.uE)(
          '<div class="header-top" data-v-742408ac><div class="logo-box" data-v-742408ac><img src="' +
            s +
            '" data-v-742408ac></div><div class="image-box" data-v-742408ac><img src="' +
            c +
            '" data-v-742408ac></div></div>',
          1
        )
      function d(e, t, o, s, c, d) {
        return (
          (0, i.wg)(),
          (0, i.iD)('div', a, [
            (0, i._)(
              'div',
              {
                class: (0, r.C_)(['header-inner', { active: e.active }]),
                onClick: t[5] || (t[5] = (...t) => e.changeHeader && e.changeHeader(...t)),
              },
              [
                n,
                (0, i._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[0] || (t[0] = (t) => e.jump('index')),
                  },
                  '首页'
                ),
                (0, i._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[1] || (t[1] = (t) => e.jump('rescue')),
                  },
                  '卡友救援'
                ),
                (0, i._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[2] || (t[2] = (t) => e.jump('newslist')),
                  },
                  '资讯中心'
                ),
                (0, i._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[3] || (t[3] = (t) => e.jump('videolist')),
                  },
                  '视频集锦'
                ),
                (0, i._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[4] || (t[4] = (t) => e.jump('contact')),
                  },
                  '联系我们'
                ),
              ],
              2
            ),
          ])
        )
      }
      var l = o(7327),
        u = o(3703),
        v = o(6520)
      class p extends v.w3 {
        constructor(...e) {
          super(...e), (0, l.Z)(this, 'active', !1), (0, l.Z)(this, 'model', new u.Z())
        }
        changeHeader() {
          this.active = !this.active
        }
        jump(e) {
          this.model.jumpTo('/mobile/' + e)
        }
      }
      var h = o(89)
      const f = (0, h.Z)(p, [
        ['render', d],
        ['__scopeId', 'data-v-742408ac'],
      ])
      var g = f
    },
    2041: function (e, t, o) {
      o.r(t),
        o.d(t, {
          default: function () {
            return x
          },
        })
      var i = o(3396),
        r = o(7139)
      const s = { class: 'header-container' },
        c = { class: 'page-box' },
        a = { key: 0, class: 'content-box' },
        n = { class: 'title-sub' },
        d = ['src']
      function l(e, t, o, l, u, v) {
        const p = (0, i.up)('MobileHeader'),
          h = (0, i.up)('MobileFooter')
        return (
          (0, i.wg)(),
          (0, i.iD)(
            i.HY,
            null,
            [
              (0, i._)('div', s, [(0, i.Wm)(p)]),
              (0, i._)('div', c, [
                e.videoData
                  ? ((0, i.wg)(),
                    (0, i.iD)('div', a, [
                      (0, i._)('div', n, (0, r.zw)(e.videoData.title), 1),
                      (0, i._)('video', { src: e.videoData.videourl, controls: 'true' }, null, 8, d),
                    ]))
                  : (0, i.kq)('', !0),
              ]),
              (0, i.Wm)(h),
            ],
            64
          )
        )
      }
      var u = o(7327),
        v = o(6520),
        p = o(6889),
        h = o(1531),
        f = o(8079),
        g = o(4543),
        m = o(8733),
        b = function (e, t, o, i) {
          var r,
            s = arguments.length,
            c = s < 3 ? t : null === i ? (i = Object.getOwnPropertyDescriptor(t, o)) : i
          if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) c = Reflect.decorate(e, t, o, i)
          else
            for (var a = e.length - 1; a >= 0; a--)
              (r = e[a]) && (c = (s < 3 ? r(c) : s > 3 ? r(t, o, c) : r(t, o)) || c)
          return s > 3 && c && Object.defineProperty(t, o, c), c
        }
      let w = class extends v.w3 {
        constructor(...e) {
          super(...e), (0, u.Z)(this, 'videoData', void 0), (0, u.Z)(this, 'model', new g.Z())
        }
        created() {
          const e = this.$route.query.id
          e && this.getUtl(e.toString())
        }
        getUtl(e) {
          this.model.getVideoUrl(
            { id: e },
            new m.Z((e) => {
              ;(this.videoData = e.getData()), console.log(this.videoData), this.$forceUpdate()
            })
          )
        }
      }
      w = b(
        [
          (0, v.Ei)({
            components: { MobileHeader: h.Z, MobileFooter: p.Z, CoverBox: f.Z },
          }),
        ],
        w
      )
      var Z = w,
        _ = o(89)
      const y = (0, _.Z)(Z, [
        ['render', l],
        ['__scopeId', 'data-v-3417579c'],
      ])
      var x = y
    },
  },
])
//# sourceMappingURL=MobileVideo.918e38ed.js.map
