'use strict'
;(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [104],
  {
    4543: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return s
        },
      })
      var o = i(3703)
      class s extends o.Z {
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
    8079: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return f
        },
      })
      var o = i(3396),
        s = i(7139)
      const c = { class: 'cover-box' },
        r = ['src'],
        n = { class: 'cover-title-box' }
      function a(e, t, i, a, l, d) {
        return (
          (0, o.wg)(),
          (0, o.iD)('div', c, [(0, o._)('img', { src: e.src }, null, 8, r), (0, o._)('div', n, (0, s.zw)(e.title), 1)])
        )
      }
      var l = i(7327),
        d = i(6520),
        u = function (e, t, i, o) {
          var s,
            c = arguments.length,
            r = c < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, i)) : o
          if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o)
          else
            for (var n = e.length - 1; n >= 0; n--)
              (s = e[n]) && (r = (c < 3 ? s(r) : c > 3 ? s(t, i, r) : s(t, i)) || r)
          return c > 3 && r && Object.defineProperty(t, i, r), r
        }
      let v = class extends d.w3 {
        constructor(...e) {
          super(...e), (0, l.Z)(this, 'src', void 0), (0, l.Z)(this, 'title', void 0)
        }
      }
      v = u(
        [
          (0, d.Ei)({
            props: {
              src: { default: '', type: String, require: !0 },
              title: { default: '', type: String, require: !0 },
            },
          }),
        ],
        v
      )
      var p = v,
        m = i(89)
      const h = (0, m.Z)(p, [
        ['render', a],
        ['__scopeId', 'data-v-4023319e'],
      ])
      var f = h
    },
    1531: function (e, t, i) {
      i.d(t, {
        Z: function () {
          return f
        },
      })
      var o = i(3396),
        s = i(7139),
        c = i(7442),
        r = i(3884)
      const n = { class: 'mobile-header-box' },
        a = (0, o.uE)(
          '<div class="header-top" data-v-742408ac><div class="logo-box" data-v-742408ac><img src="' +
            c +
            '" data-v-742408ac></div><div class="image-box" data-v-742408ac><img src="' +
            r +
            '" data-v-742408ac></div></div>',
          1
        )
      function l(e, t, i, c, r, l) {
        return (
          (0, o.wg)(),
          (0, o.iD)('div', n, [
            (0, o._)(
              'div',
              {
                class: (0, s.C_)(['header-inner', { active: e.active }]),
                onClick: t[5] || (t[5] = (...t) => e.changeHeader && e.changeHeader(...t)),
              },
              [
                a,
                (0, o._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[0] || (t[0] = (t) => e.jump('index')),
                  },
                  '首页'
                ),
                (0, o._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[1] || (t[1] = (t) => e.jump('rescue')),
                  },
                  '卡友救援'
                ),
                (0, o._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[2] || (t[2] = (t) => e.jump('newslist')),
                  },
                  '资讯中心'
                ),
                (0, o._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[3] || (t[3] = (t) => e.jump('videolist')),
                  },
                  '视频集锦'
                ),
                (0, o._)(
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
      var d = i(7327),
        u = i(3703),
        v = i(6520)
      class p extends v.w3 {
        constructor(...e) {
          super(...e), (0, d.Z)(this, 'active', !1), (0, d.Z)(this, 'model', new u.Z())
        }
        changeHeader() {
          this.active = !this.active
        }
        jump(e) {
          this.model.jumpTo('/mobile/' + e)
        }
      }
      var m = i(89)
      const h = (0, m.Z)(p, [
        ['render', l],
        ['__scopeId', 'data-v-742408ac'],
      ])
      var f = h
    },
    9952: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return H
          },
        })
      var o = i(3396),
        s = i(7139)
      const c = (e) => ((0, o.dD)('data-v-8ba12e5e'), (e = e()), (0, o.Cn)(), e),
        r = { class: 'header-container' },
        n = { class: 'page-box' },
        a = { class: 'content-box' },
        l = c(() => (0, o._)('div', { class: 'item-title-box' }, '视频集锦', -1)),
        d = ['onClick'],
        u = { class: 'image-box' },
        v = ['src'],
        p = { class: 'title-box' },
        m = { class: 'date-box' }
      function h(e, t, i, c, h, f) {
        const b = (0, o.up)('MobileHeader'),
          g = (0, o.up)('CoverBox'),
          w = (0, o.up)('MobileFooter')
        return (
          (0, o.wg)(),
          (0, o.iD)(
            o.HY,
            null,
            [
              (0, o._)('div', r, [(0, o.Wm)(b)]),
              (0, o._)('div', n, [
                (0, o.Wm)(g, { src: e.cover, title: '视频集锦' }, null, 8, ['src']),
                (0, o._)('div', a, [
                  l,
                  (0, o._)('div', null, [
                    ((0, o.wg)(!0),
                    (0, o.iD)(
                      o.HY,
                      null,
                      (0, o.Ko)(
                        e.videoList,
                        (t, i) => (
                          (0, o.wg)(),
                          (0, o.iD)(
                            'div',
                            {
                              class: 'news-item',
                              key: i,
                              onClick: (i) => e.jumpNews(t.id),
                            },
                            [
                              (0, o._)('div', u, [(0, o._)('img', { src: t.cover }, null, 8, v)]),
                              (0, o._)('div', p, (0, s.zw)(t.title), 1),
                              (0, o._)('div', m, (0, s.zw)(t.time), 1),
                            ],
                            8,
                            d
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]),
              ]),
              (0, o.Wm)(w),
            ],
            64
          )
        )
      }
      var f = i(7327),
        b = i(6520),
        g = i(6889),
        w = i(1531),
        _ = i(8079),
        x = i(4543),
        Z = i(8733),
        j = function (e, t, i, o) {
          var s,
            c = arguments.length,
            r = c < 3 ? t : null === o ? (o = Object.getOwnPropertyDescriptor(t, i)) : o
          if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o)
          else
            for (var n = e.length - 1; n >= 0; n--)
              (s = e[n]) && (r = (c < 3 ? s(r) : c > 3 ? s(t, i, r) : s(t, i)) || r)
          return c > 3 && r && Object.defineProperty(t, i, r), r
        }
      let y = class extends b.w3 {
        constructor(...e) {
          super(...e),
            (0, f.Z)(this, 'cover', i(6592)),
            (0, f.Z)(this, 'model', new x.Z()),
            (0, f.Z)(this, 'videoList', [])
        }
        created() {
          this.model.getVideo(
            new Z.Z((e) => {
              this.videoList = e.getData()
            })
          )
        }
        jumpNews(e) {
          this.model.jumpTo('/mobile/video', { id: e })
        }
      }
      y = j(
        [
          (0, b.Ei)({
            components: { MobileHeader: w.Z, MobileFooter: g.Z, CoverBox: _.Z },
          }),
        ],
        y
      )
      var C = y,
        k = i(89)
      const D = (0, k.Z)(C, [
        ['render', h],
        ['__scopeId', 'data-v-8ba12e5e'],
      ])
      var H = D
    },
    6592: function (e, t, i) {
      e.exports = i.p + 'img/cover-videolist.b532bf5a.jpg'
    },
  },
])
//# sourceMappingURL=MobileVideoList.fee8a307.js.map
