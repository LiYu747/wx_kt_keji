(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/communityForum/forumlists/forumlists"], {
    "04cb": function (t, n, e) {
      "use strict";
      (function (t) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var a = o(e("db9d")),
          i = o(e("8031"));

        function o(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var s = function () {
            e.e("components/sub-unit/subunit").then(function () {
              return resolve(e("e864"))
            }.bind(null, e)).catch(e.oe)
          },
          u = function () {
            e.e("components/sub-botn/subbotn").then(function () {
              return resolve(e("e15b"))
            }.bind(null, e)).catch(e.oe)
          },
          c = {
            name: "",
            components: {
              subunit: s,
              subbotn: u
            },
            props: {},
            data: function () {
              return {
                id: "",
                lists: [],
                page: 1,
                ps: 15,
                isLoding: !1,
                hasMore: !0,
                text: "",
                value: "",
                keyword: "",
                flag: !1,
                tagdata: [],
                idx: 0,
                selectID: ""
              }
            },
            methods: {
              select: function (t, n) {
                this.idx = n, this.selectID = t.id, this.text = "", this.page = 1, this.lists = [], this.loadPageData()
              },
              confirm: function () {
                this.keyword = this.value, this.page = 1, this.hasMore = !0, this.lists = [], this.loadPageData(), this.flag = !0
              },
              empty: function () {
                this.value = ""
              },
              remove: function () {
                t.hideKeyboard()
              },
              custom: function () {
                t.navigateTo({
                  url: "/pages/communityForum/forumlists/customTarbar/customTarbar"
                })
              },
              loadPageData: function () {
                var n = this;
                this.isLoding = !0, i.default.doOnlyTokenValid({
                  keepSuccess: !1,
                  showModal: !0,
                  fail: function () {
                    n.isLoding = !1, t.navigateBack({
                      delta: 1
                    })
                  },
                  success: function () {
                    a.default.communityPost({
                      data: {
                        villageId: n.id,
                        tribune_cat: n.selectID,
                        kw: n.keyword,
                        page: n.page,
                        pageSize: n.ps
                      },
                      fail: function (e) {
                        n.isLoding = !1, t.showToast({
                          title: "网络错误",
                          icon: "none"
                        })
                      },
                      success: function (t) {
                        if (n.isLoding = !1, 200 == t.statusCode && 200 == t.data.code) {
                          var e = t.data.data;
                          n.page = e.current_page + 1, n.hasMore = !!e.next_page_url, n.lists = n.lists.concat(e.data)
                        }
                      }
                    })
                  }
                })
              },
              gotoD: function (n) {
                t.navigateTo({
                  url: "/components/forum/forumdils?id=".concat(n.id)
                })
              },
              grtColumn: function () {
                var n = this;
                a.default.DefaultColumnList({
                  data: {},
                  fail: function () {
                    t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (t) {
                    200 == t.statusCode && 200 == t.data.code && (n.tagdata = t.data.data)
                  }
                })
              }
            },
            mounted: function () {},
            onLoad: function (t) {
              this.id = t.id
            },
            onReachBottom: function () {
              this.text = "没有更多了~", 1 != this.isLoding && 0 != this.hasMore && this.loadPageData()
            },
            onShow: function () {
              this.lists = [], this.page = 1, this.loadPageData(), this.grtColumn()
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        n.default = c
      }).call(this, e("543d")["default"])
    },
    "0d40": function (t, n, e) {
      "use strict";
      var a;
      e.d(n, "b", (function () {
        return i
      })), e.d(n, "c", (function () {
        return o
      })), e.d(n, "a", (function () {
        return a
      }));
      var i = function () {
          var t = this,
            n = t.$createElement,
            e = (t._self._c, t.lists.length > 0 ? t.__map(t.lists, (function (n, e) {
              var a = t.__get_orig(n),
                i = n.created_at.slice(0, 16),
                o = n.album.slice(0, 3);
              return {
                $orig: a,
                g0: i,
                l0: o
              }
            })) : null);
          t.$mp.data = Object.assign({}, {
            $root: {
              l1: e
            }
          })
        },
        o = []
    },
    2365: function (t, n, e) {},
    "67b2": function (t, n, e) {
      "use strict";
      e.r(n);
      var a = e("04cb"),
        i = e.n(a);
      for (var o in a) "default" !== o && function (t) {
        e.d(n, t, (function () {
          return a[t]
        }))
      }(o);
      n["default"] = i.a
    },
    b6ea: function (t, n, e) {
      "use strict";
      (function (t) {
        e("d774");
        a(e("66fd"));
        var n = a(e("dad3"));

        function a(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(n.default)
      }).call(this, e("543d")["createPage"])
    },
    dad3: function (t, n, e) {
      "use strict";
      e.r(n);
      var a = e("0d40"),
        i = e("67b2");
      for (var o in i) "default" !== o && function (t) {
        e.d(n, t, (function () {
          return i[t]
        }))
      }(o);
      e("f6f1");
      var s, u = e("f0c5"),
        c = Object(u["a"])(i["default"], a["b"], a["c"], !1, null, "d8715232", null, !1, a["a"], s);
      n["default"] = c.exports
    },
    f6f1: function (t, n, e) {
      "use strict";
      var a = e("2365"),
        i = e.n(a);
      i.a
    }
  },
  [
    ["b6ea", "common/runtime", "common/vendor"]
  ]
]);