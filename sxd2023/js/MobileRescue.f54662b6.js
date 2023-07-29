'use strict'
;(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [834],
  {
    8079: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m
        },
      })
      var c = a(3396),
        r = a(7139)
      const i = { class: 'cover-box' },
        d = ['src'],
        o = { class: 'cover-title-box' }
      function n(e, t, a, n, s, v) {
        return (
          (0, c.wg)(),
          (0, c.iD)('div', i, [(0, c._)('img', { src: e.src }, null, 8, d), (0, c._)('div', o, (0, r.zw)(e.title), 1)])
        )
      }
      var s = a(7327),
        v = a(6520),
        l = function (e, t, a, c) {
          var r,
            i = arguments.length,
            d = i < 3 ? t : null === c ? (c = Object.getOwnPropertyDescriptor(t, a)) : c
          if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) d = Reflect.decorate(e, t, a, c)
          else
            for (var o = e.length - 1; o >= 0; o--)
              (r = e[o]) && (d = (i < 3 ? r(d) : i > 3 ? r(t, a, d) : r(t, a)) || d)
          return i > 3 && d && Object.defineProperty(t, a, d), d
        }
      let u = class extends v.w3 {
        constructor(...e) {
          super(...e), (0, s.Z)(this, 'src', void 0), (0, s.Z)(this, 'title', void 0)
        }
      }
      u = l(
        [
          (0, v.Ei)({
            props: {
              src: { default: '', type: String, require: !0 },
              title: { default: '', type: String, require: !0 },
            },
          }),
        ],
        u
      )
      var f = u,
        p = a(89)
      const b = (0, p.Z)(f, [
        ['render', n],
        ['__scopeId', 'data-v-4023319e'],
      ])
      var m = b
    },
    1531: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return m
        },
      })
      var c = a(3396),
        r = a(7139),
        i = a(7442),
        d = a(3884)
      const o = { class: 'mobile-header-box' },
        n = (0, c.uE)(
          '<div class="header-top" data-v-742408ac><div class="logo-box" data-v-742408ac><img src="' +
            i +
            '" data-v-742408ac></div><div class="image-box" data-v-742408ac><img src="' +
            d +
            '" data-v-742408ac></div></div>',
          1
        )
      function s(e, t, a, i, d, s) {
        return (
          (0, c.wg)(),
          (0, c.iD)('div', o, [
            (0, c._)(
              'div',
              {
                class: (0, r.C_)(['header-inner', { active: e.active }]),
                onClick: t[5] || (t[5] = (...t) => e.changeHeader && e.changeHeader(...t)),
              },
              [
                n,
                (0, c._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[0] || (t[0] = (t) => e.jump('index')),
                  },
                  '首页'
                ),
                (0, c._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[1] || (t[1] = (t) => e.jump('rescue')),
                  },
                  '卡友救援'
                ),
                (0, c._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[2] || (t[2] = (t) => e.jump('newslist')),
                  },
                  '资讯中心'
                ),
                (0, c._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[3] || (t[3] = (t) => e.jump('videolist')),
                  },
                  '视频集锦'
                ),
                (0, c._)(
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
      var v = a(7327),
        l = a(3703),
        u = a(6520)
      class f extends u.w3 {
        constructor(...e) {
          super(...e), (0, v.Z)(this, 'active', !1), (0, v.Z)(this, 'model', new l.Z())
        }
        changeHeader() {
          this.active = !this.active
        }
        jump(e) {
          this.model.jumpTo('/mobile/' + e)
        }
      }
      var p = a(89)
      const b = (0, p.Z)(f, [
        ['render', s],
        ['__scopeId', 'data-v-742408ac'],
      ])
      var m = b
    },
    7332: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return x
          },
        })
      var c = a(3396),
        r = a(6874)
      const i = { class: 'header-container' },
        d = { class: 'page-box' },
        o = (0, c.uE)(
          '<div class="content-box" data-v-2df709e2><div class="image-box" data-v-2df709e2><div class="item-title-box" data-v-2df709e2>卡友应急救援</div><div style="font-size:14px;" data-v-2df709e2><p data-v-2df709e2>1.产品系统V8.0支撑行业智能保障数字化运行，全国首创！</p><br data-v-2df709e2><p data-v-2df709e2>2.全国7万家维修门店聚合80%份额，全国第一！</p><br data-v-2df709e2><p data-v-2df709e2>3.智能搭接救援订单日均300+，全国第一！</p><br data-v-2df709e2><p data-v-2df709e2>4.满帮集团、中交兴路、京东汽车、福佑卡车、G7集团等行业头部合作伙伴认可！</p><br data-v-2df709e2><p data-v-2df709e2>5.交通部唯一推荐“应急汽修”平台，链入国务院客户端、微信生活圈！</p><br data-v-2df709e2><p data-v-2df709e2>6.应急救援响应时长小于5分钟，全国最快！</p><br data-v-2df709e2><p data-v-2df709e2>7.智能保障服务覆盖全国所有市县，服务覆盖面积全国第一！</p></div><img src="' +
            r +
            '" data-v-2df709e2></div></div>',
          1
        )
      function n(e, t, a, r, n, s) {
        const v = (0, c.up)('MobileHeader'),
          l = (0, c.up)('CoverBox'),
          u = (0, c.up)('MobileFooter')
        return (
          (0, c.wg)(),
          (0, c.iD)(
            c.HY,
            null,
            [
              (0, c._)('div', i, [(0, c.Wm)(v)]),
              (0, c._)('div', d, [(0, c.Wm)(l, { src: e.cover, title: '卡友救援' }, null, 8, ['src']), o]),
              (0, c.Wm)(u),
            ],
            64
          )
        )
      }
      var s = a(7327),
        v = a(6520),
        l = a(6889),
        u = a(1531),
        f = a(8079),
        p = function (e, t, a, c) {
          var r,
            i = arguments.length,
            d = i < 3 ? t : null === c ? (c = Object.getOwnPropertyDescriptor(t, a)) : c
          if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) d = Reflect.decorate(e, t, a, c)
          else
            for (var o = e.length - 1; o >= 0; o--)
              (r = e[o]) && (d = (i < 3 ? r(d) : i > 3 ? r(t, a, d) : r(t, a)) || d)
          return i > 3 && d && Object.defineProperty(t, a, d), d
        }
      let b = class extends v.w3 {
        constructor(...e) {
          super(...e), (0, s.Z)(this, 'cover', a(6357))
        }
      }
      b = p(
        [
          (0, v.Ei)({
            components: { MobileHeader: u.Z, MobileFooter: l.Z, CoverBox: f.Z },
          }),
        ],
        b
      )
      var m = b,
        g = a(89)
      const h = (0, g.Z)(m, [
        ['render', n],
        ['__scopeId', 'data-v-2df709e2'],
      ])
      var x = h
    },
    6357: function (e, t, a) {
      e.exports = a.p + 'img/cover-rescue.3ec3573f.jpg'
    },
    6874: function (e, t, a) {
      e.exports = a.p + 'img/table.cb36c999.png'
    },
  },
])
//# sourceMappingURL=MobileRescue.f54662b6.js.map
