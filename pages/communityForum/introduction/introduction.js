(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/communityForum/introduction/introduction"], {
    "044b": function (t, n, i) {
      "use strict";
      i.r(n);
      var a = i("9114"),
        o = i("d62f");
      for (var e in o) "default" !== e && function (t) {
        i.d(n, t, (function () {
          return o[t]
        }))
      }(e);
      i("5c81");
      var u, c = i("f0c5"),
        s = Object(c["a"])(o["default"], a["b"], a["c"], !1, null, "26556e90", null, !1, a["a"], u);
      n["default"] = s.exports
    },
    "4e9b": function (t, n, i) {
      "use strict";
      (function (t) {
        i("d774");
        a(i("66fd"));
        var n = a(i("044b"));

        function a(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(n.default)
      }).call(this, i("543d")["createPage"])
    },
    "5c81": function (t, n, i) {
      "use strict";
      var a = i("ef78"),
        o = i.n(a);
      o.a
    },
    9114: function (t, n, i) {
      "use strict";
      i.d(n, "b", (function () {
        return o
      })), i.d(n, "c", (function () {
        return e
      })), i.d(n, "a", (function () {
        return a
      }));
      var a = {
          uSwiper: function () {
            return i.e("uview-ui/components/u-swiper/u-swiper").then(i.bind(null, "f3d9"))
          },
          uParse: function () {
            return Promise.all([i.e("common/vendor"), i.e("uview-ui/components/u-parse/u-parse")]).then(i.bind(null, "12d8"))
          }
        },
        o = function () {
          var t = this,
            n = t.$createElement;
          t._self._c
        },
        e = []
    },
    c4c6: function (t, n, i) {
      "use strict";
      (function (t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = o(i("db9d"));

        function o(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        const app = getApp()
        var e = function () {
            i.e("components/sub-unit/subunit").then(function () {
              return resolve(i("e864"))
            }.bind(null, i)).catch(i.oe)
          },
          u = {
            name: "",
            components: {
              subunit: e
            },
            props: {},
            data: function () {
              return {
                id: "",
                localist: ["https://oss.kuaitongkeji.com/static/img/app/forum/timg.jpg"],
                list: [],
                arr: {},
                titel: ["简介", "公告"],
                Notice: [],
                detailedAddress: "",
                idx: 0,
                isLoding: !1
              }
            },
            methods: {
              add: function (t) {
                this.idx = t
              },
              goforum: function () {
                t.navigateTo({
                  url: "/pages/communityForum/forumlists/forumlists?id=".concat(this.id)
                })
              },
              navigation: function () {
                var n = this.arr.address_name,
                  i = this.arr.lat,
                  a = this.arr.lng;
                t.navigateTo({
                  url: "/pages/classification/travel/travel?addressName=".concat(n, "&lat=").concat(i, "&lng=").concat(a)
                })
              },
              noticeData: function () {
                var n = this;
                a.default.Notice({
                  data: {
                    village_id: this.id
                  },
                  fail: function (n) {
                    t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (t) {
                    if (200 == t.statusCode && 200 == t.data.code) {
                      var i = t.data.data.data;
                      n.Notice = i
                    }
                  }
                })
              },
              Information: function () {
                var n = this;
                this.isLoding = !0, a.default.displayInformation({
                  data: {
                    id: this.id
                  },
                  fail: function (i) {
                    n.isLoding = !1, t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (t) {
                    if (n.isLoding = !1, 200 == t.statusCode && 200 == t.data.code) {
                      var i = t.data.data;
                      i.album.map((function (t) {
                        n.list.push(t.url)
                      })), n.arr = i, n.detailedAddress = i.address + i.address_name
                    }
                  }
                })
              },
              godils: function (n) {
                a.default.Noticeshow({
                  data: {
                    id: n.id
                  },
                  fail: function (n) {
                    t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (n) {
                    if (200 == n.statusCode && 200 == n.data.code) {
                      var i = n.data.data.content,
                        a = n.data.data.title;
                        app.globalData.title = i
                      t.navigateTo({
                        url: "/pages/InformationDetails/InformationDetails/InformationDetails?title=".concat(a)
                      })
                    }
                  }
                })
              }
            },
            mounted: function () {
              this.noticeData(), this.Information()
            },
            onLoad: function (t) {
              this.id = t.id
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        n.default = u
      }).call(this, i("543d")["default"])
    },
    d62f: function (t, n, i) {
      "use strict";
      i.r(n);
      var a = i("c4c6"),
        o = i.n(a);
      for (var e in a) "default" !== e && function (t) {
        i.d(n, t, (function () {
          return a[t]
        }))
      }(e);
      n["default"] = o.a
    },
    ef78: function (t, n, i) {}
  },
  [
    ["4e9b", "common/runtime", "common/vendor"]
  ]
]);