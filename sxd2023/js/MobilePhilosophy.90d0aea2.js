'use strict'
;(self['webpackChunk'] = self['webpackChunk'] || []).push([
  [510],
  {
    8079: function (a, t, c) {
      c.d(t, {
        Z: function () {
          return m
        },
      })
      var e = c(3396),
        d = c(7139)
      const r = { class: 'cover-box' },
        v = ['src'],
        i = { class: 'cover-title-box' }
      function p(a, t, c, p, o, f) {
        return (
          (0, e.wg)(),
          (0, e.iD)('div', r, [(0, e._)('img', { src: a.src }, null, 8, v), (0, e._)('div', i, (0, d.zw)(a.title), 1)])
        )
      }
      var o = c(7327),
        f = c(6520),
        n = function (a, t, c, e) {
          var d,
            r = arguments.length,
            v = r < 3 ? t : null === e ? (e = Object.getOwnPropertyDescriptor(t, c)) : e
          if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) v = Reflect.decorate(a, t, c, e)
          else
            for (var i = a.length - 1; i >= 0; i--)
              (d = a[i]) && (v = (r < 3 ? d(v) : r > 3 ? d(t, c, v) : d(t, c)) || v)
          return r > 3 && v && Object.defineProperty(t, c, v), v
        }
      let s = class extends f.w3 {
        constructor(...a) {
          super(...a), (0, o.Z)(this, 'src', void 0), (0, o.Z)(this, 'title', void 0)
        }
      }
      s = n(
        [
          (0, f.Ei)({
            props: {
              src: { default: '', type: String, require: !0 },
              title: { default: '', type: String, require: !0 },
            },
          }),
        ],
        s
      )
      var l = s,
        u = c(89)
      const b = (0, u.Z)(l, [
        ['render', p],
        ['__scopeId', 'data-v-4023319e'],
      ])
      var m = b
    },
    1531: function (a, t, c) {
      c.d(t, {
        Z: function () {
          return m
        },
      })
      var e = c(3396),
        d = c(7139),
        r = c(7442),
        v = c(3884)
      const i = { class: 'mobile-header-box' },
        p = (0, e.uE)(
          '<div class="header-top" data-v-742408ac><div class="logo-box" data-v-742408ac><img src="' +
            r +
            '" data-v-742408ac></div><div class="image-box" data-v-742408ac><img src="' +
            v +
            '" data-v-742408ac></div></div>',
          1
        )
      function o(a, t, c, r, v, o) {
        return (
          (0, e.wg)(),
          (0, e.iD)('div', i, [
            (0, e._)(
              'div',
              {
                class: (0, d.C_)(['header-inner', { active: a.active }]),
                onClick: t[5] || (t[5] = (...t) => a.changeHeader && a.changeHeader(...t)),
              },
              [
                p,
                (0, e._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[0] || (t[0] = (t) => a.jump('index')),
                  },
                  '首页'
                ),
                (0, e._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[1] || (t[1] = (t) => a.jump('rescue')),
                  },
                  '卡友救援'
                ),
                (0, e._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[2] || (t[2] = (t) => a.jump('newslist')),
                  },
                  '资讯中心'
                ),
                (0, e._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[3] || (t[3] = (t) => a.jump('videolist')),
                  },
                  '视频集锦'
                ),
                (0, e._)(
                  'div',
                  {
                    class: 'button-item',
                    onClick: t[4] || (t[4] = (t) => a.jump('contact')),
                  },
                  '联系我们'
                ),
              ],
              2
            ),
          ])
        )
      }
      var f = c(7327),
        n = c(3703),
        s = c(6520)
      class l extends s.w3 {
        constructor(...a) {
          super(...a), (0, f.Z)(this, 'active', !1), (0, f.Z)(this, 'model', new n.Z())
        }
        changeHeader() {
          this.active = !this.active
        }
        jump(a) {
          this.model.jumpTo('/mobile/' + a)
        }
      }
      var u = c(89)
      const b = (0, u.Z)(l, [
        ['render', o],
        ['__scopeId', 'data-v-742408ac'],
      ])
      var m = b
    },
    287: function (a, t, c) {
      c.r(t),
        c.d(t, {
          default: function () {
            return g
          },
        })
      var e = c(3396)
      const d = { class: 'header-container' },
        r = { class: 'page-box' },
        v = (0, e.uE)(
          '<div class="content-box" data-v-882c4f32><div class="item-title-box" data-v-882c4f32>兄弟文化</div><div class="title-sub" data-v-882c4f32> “ 利他即利己，惠而同好，携手同行。” </div><div data-v-882c4f32><p data-v-882c4f32>说起兄弟，首先来说一段故事。赵氏孤儿中，有一段经典的对白：公孙杵臼 问程婴说：死去和救孩子那个更难？</p><br data-v-882c4f32><p data-v-882c4f32>程婴说：救孩子难！公孙杵臼说：既然如此，那我选择简单的，救孩子的事情就交给你了！</p><br data-v-882c4f32><p data-v-882c4f32>于是公孙杵臼当着屠岸贾大骂程婴是叛徒，和程婴亲儿子一并死于屠岸贾剑下。</p><br data-v-882c4f32><p data-v-882c4f32>背负着亲生儿子死亡的悲痛和叛徒的骂名，程婴忍辱负重终于等到赵氏孤儿长大报仇。</p><br data-v-882c4f32><p data-v-882c4f32>然后面对着要好好报答自己的赵武说：我要去告诉你的父亲，不然他们还以为我没能帮你报仇呢！</p><br data-v-882c4f32><p data-v-882c4f32>说完就自杀了。</p><br data-v-882c4f32><p data-v-882c4f32>这是一段经典传世的兄弟情。 “送死我去，黑锅你来”，正因为是兄弟，利他即利己，只要最终的目标一致，我愿为你背负千古骂名，你愿为我两肋插刀、肝胆相照。</p><br data-v-882c4f32><p data-v-882c4f32>有人说，中国的兄弟情总伴随着江湖味儿，那么欧洲的兄弟情是不是会不同？</p><br data-v-882c4f32><p data-v-882c4f32>近代法制史上有一场没有硝烟的战争，盛行欧洲几千年的奴隶制度最终被废除。如果近代法制史像是一出舞台剧，威伯福斯与克拉朋联盟废除奴隶制度这一幕，无疑是剧中的高潮。</p><br data-v-882c4f32><p data-v-882c4f32>这场战争虽然没有人流血牺牲，但同样激烈而残酷，这场战争发生在议会里。八个国会议员，不同的专业、政党、个性、背景，却为了打倒奴隶制度而结合在一起。</p><br data-v-882c4f32><p data-v-882c4f32>他们以法律的专业、理性的思索、人道的精神、信仰的力量，在排山倒海的反对、咒骂、威胁、抵制、利诱和压力之中，经过50年漫长的日子，不改初衷，不采用暴民运动，以忍耐、和平的立法程序，成功地断开黑奴的法律枷锁，帮助成千上万的黑奴获得了自由，终止了欧洲大陆几千年的奴隶制度。</p><br data-v-882c4f32><p data-v-882c4f32>这是西方式的兄弟情，或者更准确的表述该是同盟，创新求变、共享共担。在共同的利益面前，正直信义，前仆后继，厚积薄发。</p><br data-v-882c4f32><p data-v-882c4f32>小时候看伊索寓言，有这样一个故事，三只公牛生活在一起，有只狮子想吃掉他们，但他们很团结，所以狮子一直没有得逞。后来狮子挑拨离间，使得它们彼此冲突，随后狮子趁三只公牛落单的时候，一只一只的狙击，最终吃掉了它们。</p><br data-v-882c4f32><p data-v-882c4f32>彼此依靠，尚可共生共存，哪怕强大犹如狮子，也无计可施。各自为政，分崩离析，人为刀俎我为鱼肉，在岌岌可危的生存环境面前，抱团取暖无疑是最好的选择，此时的兄弟，无疑就是彼此的救命良药。</p><br data-v-882c4f32><p data-v-882c4f32>另一个故事说，一座城池被敌军围困，城中居民聚在一起，共同商议对抗敌人的办法。三个兄弟也一起讨论。泥瓦匠主张用砖块作为抵御外敌的材料；木匠却认为，只有木头才最合适；皮匠坚持，只有皮革才是最结实耐用的。后来三个人各执己见，在争论中敌军突破了城池。</p><br data-v-882c4f32><p data-v-882c4f32>人们总是惯于从自身的角度思考问题，总认为自己所熟悉的领域就是最好的，如果另外两个兄弟，肯耐心聆听思考泥瓦匠的建议，那么城市连同他们的命运都会发生改变。</p><br data-v-882c4f32><p data-v-882c4f32>纵观中国历史，义结金兰之说由来已久。开香炉，叩天地，歃血为盟，何其豪迈。相知无远近，万里尚为邻。所谓兄弟，虽非手足确有义，因为是兄弟，没有造作，没有矫情，有的是豁达，有的是野性，有的是惠而好我，携手同行。</p><br data-v-882c4f32><p data-v-882c4f32>春秋时候，楚王崇儒重道，招贤纳士，天下有志之士闻风而归，有一个贤士，名叫左伯桃，年近五十，听说楚王慕仁为义，遍求贤士，就辞别故里，奔赴楚国。</p><br data-v-882c4f32><p data-v-882c4f32>时值严冬，雨雪霏霏，左伯桃饥寒交迫，来到一间茅屋叩门求宿，一个四十多岁的书生开门，一聊才知道此人叫羊角哀，二人一聊，惺惺相惜，便结拜一同前往楚国。</p><br data-v-882c4f32><p data-v-882c4f32>因干粮少，路上又下雪，左伯桃想这干粮，只够一人到楚国，他自认学识没有羊角哀渊博，就决定成全羊角哀的功名。于是故意摔倒，让羊角哀搬块大石来，等羊角哀回来，左伯桃已脱得精光，裸卧在雪地上，冻得只剩一口气。左伯桃叫他把干粮带走，速去求取功名，言毕死去。</p><br data-v-882c4f32><p data-v-882c4f32>羊角哀到楚国，官拜中大夫，哭诉兄弟左伯桃脱衣让粮之事，楚王感动，追赠伯桃中大夫之职。左伯桃坟和荆轲庙相隔不远，相传荆轲因刺秦王不中，死后精魂不散，见左伯桃葬在他的旁边，经常欺负他。羊角哀梦见左伯桃遍体鳞伤来找他，说荆轲的凶暴。羊角哀醒来之后去荆轲庙前大骂荆轲，说：如再逼迫我兄弟，定掘你坟墓，永远绝你的根。</p><br data-v-882c4f32><p data-v-882c4f32>第二夜左伯桃又托梦说，荆轲随从众多，我的尸体被崩出墓地。羊角哀听完大怒，再到荆轲庙前大骂，打碎了神像，想要烧庙。村民却一再哭求，羊角哀无奈只好作罢。于是上书楚王辞官说，我兄弟地下受欺，我也要付九泉之下，与兄弟生死与共，死后请将我葬在兄弟的右侧。于是，提剑到左伯桃坟前自刎而死。</p><br data-v-882c4f32><p data-v-882c4f32>天亮后，荆轲墓上白骨散了一地，荆轲庙突然起火，烧得片瓦无存。随从上奏楚王，楚王被二人的义气感动，派人在墓前建庙，赐名“忠义之祠”，并立碑祭奠。</p><br data-v-882c4f32><p data-v-882c4f32>这就是著名的羊左之交。叫声兄弟容易，知交情义却难得。所谓真兄弟，当是心照不宣，相逢一笑，渡尽劫波，情义尤在。因为是兄弟，所以愿意成就你，哪怕是鞠躬尽瘁，肝脑涂地。</p><br data-v-882c4f32><p data-v-882c4f32>相传，结义兄弟都焚三柱香，头一柱就是是敬羊左之交，第二柱是敬桃园三结义，第三柱是敬水浒108好汉。</p><br data-v-882c4f32><p data-v-882c4f32>梁启超曾说：今我绿林豪杰，遍地皆是，日日有桃园之拜，处处有梁山之盟。足可见桃园三结义和水泊梁山的故事在民间流传之广。</p><br data-v-882c4f32><p data-v-882c4f32>在《三国演义》中，第一回写的就是刘备、关羽、张飞三人，因志趣相投，决定共举大事，三人祭告天地，焚香结拜。大概誓言是：念刘备、关羽、张飞，虽为异姓，既结为兄弟，则同心协力，济世为民，上报国家，下安万民。。。刘关张三人一生的兄弟情以此为基，后来多少轰轰烈烈的故事如关羽过五关斩六将、彝陵之战等故事也由此展开。在《关羽传》中也曾提到，曹刘交战，徐州失守，关羽落入曹操手里，曹操想收关羽为己用，但关羽说他备受刘备厚恩，“誓以共死，不可背之”。</p><br data-v-882c4f32><p data-v-882c4f32>刘关张三人，一同经历了无数大小磨难，最终创立了蜀国，随手关羽之死令人扼腕，可是刘备、张飞为二哥报仇也牺牲了自己，他们真正做到了不能同生，但可共死。</p><br data-v-882c4f32><p data-v-882c4f32>不单古人顶礼膜拜这世间难得的纯粹兄弟情，到了现代，金庸先生的《天龙八部》，也是深受桃园三结义的影响，也写了卡友结义的故事，乔峰、虚竹、段誉，虽然年纪相差甚多，个人出身、际遇不同，但惺惺相惜的英雄重英雄之感，也让他们义结金兰，成为生死相随的异姓兄弟。</p><br data-v-882c4f32><p data-v-882c4f32>俗话说：打虎亲兄弟，上阵父子兵。打天下这件事从来离不开兄弟。赵匡胤有“义社十兄弟”，朱元璋有陆家庄七雄结拜，蒋介石四处拜把子。</p><br data-v-882c4f32><p data-v-882c4f32>刘关张之间的兄弟情被传颂至今，誓同生死并不稀奇，古往今来结义的兄弟很多，但他们历经磨砺，又尝富贵，却始终恪守誓言，至死方休，这才难得。这其中既是兄弟，又是君臣。刘备谦恭、张飞火爆、关羽傲气，彼此互补。作为大哥的刘备，既要团结队伍，又要把握方向，鞠躬尽瘁、事必躬亲。张飞关羽永远站在刘备的身旁，对大哥更是倾心敬服，说刘关张是三国的政治铁三角组合，毫不为过。正因为彼此的互补与扶持，才有了蜀国无坚不摧的核心管理层。</p><br data-v-882c4f32><p data-v-882c4f32>所谓，诚者，天之道也，思诚者，人之道也。兄弟结交在相知，同心而共济，始终如一。到了最后，借毛宗岗先生的汇评做个收尾：今人结拜，必拜关羽，可见盟者，盟诸心，非盟诸神。兄弟之约，取同心同德，不取同姓同宗也。四海之内皆兄弟，卡友卡车坚守利他即利己之心，愿与天下兄弟，惠而同好，携手同行。</p></div></div>',
          1
        )
      function i(a, t, c, i, p, o) {
        const f = (0, e.up)('MobileHeader'),
          n = (0, e.up)('CoverBox'),
          s = (0, e.up)('MobileFooter')
        return (
          (0, e.wg)(),
          (0, e.iD)(
            e.HY,
            null,
            [
              (0, e._)('div', d, [(0, e.Wm)(f)]),
              (0, e._)('div', r, [(0, e.Wm)(n, { src: a.cover, title: '企业理念' }, null, 8, ['src']), v]),
              (0, e.Wm)(s),
            ],
            64
          )
        )
      }
      var p = c(7327),
        o = c(6520),
        f = c(6889),
        n = c(1531),
        s = c(8079),
        l = function (a, t, c, e) {
          var d,
            r = arguments.length,
            v = r < 3 ? t : null === e ? (e = Object.getOwnPropertyDescriptor(t, c)) : e
          if ('object' === typeof Reflect && 'function' === typeof Reflect.decorate) v = Reflect.decorate(a, t, c, e)
          else
            for (var i = a.length - 1; i >= 0; i--)
              (d = a[i]) && (v = (r < 3 ? d(v) : r > 3 ? d(t, c, v) : d(t, c)) || v)
          return r > 3 && v && Object.defineProperty(t, c, v), v
        }
      let u = class extends o.w3 {
        constructor(...a) {
          super(...a), (0, p.Z)(this, 'cover', c(2062))
        }
      }
      u = l(
        [
          (0, o.Ei)({
            components: { MobileHeader: n.Z, MobileFooter: f.Z, CoverBox: s.Z },
          }),
        ],
        u
      )
      var b = u,
        m = c(89)
      const h = (0, m.Z)(b, [
        ['render', i],
        ['__scopeId', 'data-v-882c4f32'],
      ])
      var g = h
    },
    2062: function (a, t, c) {
      a.exports = c.p + 'img/cover-philosophy.d2eb8931.jpg'
    },
  },
])
//# sourceMappingURL=MobilePhilosophy.90d0aea2.js.map
