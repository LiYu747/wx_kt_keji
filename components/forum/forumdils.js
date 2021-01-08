(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["components/forum/forumdils"], {
    "576c": function (t, a, n) {
      "use strict";
      n.r(a);
      var e = n("919f"),
        i = n("dba4");
      for (var o in i) "default" !== o && function (t) {
        n.d(a, t, (function () {
          return i[t]
        }))
      }(o);
      n("7898");
      var s, c = n("f0c5"),
        d = Object(c["a"])(i["default"], e["b"], e["c"], !1, null, "6736a295", null, !1, e["a"], s);
      a["default"] = d.exports
    },
    "6f97": function (t, a, n) {},
    7898: function (t, a, n) {
      "use strict";
      var e = n("6f97"),
        i = n.n(e);
      i.a
    },
    "919f": function (t, a, n) {
      "use strict";
      var e;
      n.d(a, "b", (function () {
        return i
      })), n.d(a, "c", (function () {
        return o
      })), n.d(a, "a", (function () {
        return e
      }));
      var i = function () {
          var t = this,
            a = t.$createElement;
          t._self._c
        },
        o = []
    },
    ad2b: function (t, a, n) {
      "use strict";
      (function (t) {
        n("d774");
        e(n("66fd"));
        var a = e(n("576c"));

        function e(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(a.default)
      }).call(this, n("543d")["createPage"])
    },
    dba4: function (t, a, n) {
      "use strict";
      n.r(a);
      var e = n("fbec"),
        i = n.n(e);
      for (var o in e) "default" !== o && function (t) {
        n.d(a, t, (function () {
          return e[t]
        }))
      }(o);
      a["default"] = i.a
    },
    fbec: function (t, a, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(a, "__esModule", {
          value: !0
        }), a.default = void 0;
        var e = i(n("db9d"));
        i(n("8031"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var o = function () {
            n.e("components/sub-unit/subunit").then(function () {
              return resolve(n("e864"))
            }.bind(null, n)).catch(n.oe)
          },
          s = {
            name: "",
            components: {
              subunit: o
            },
            props: {},
            data: function () {
              return {
                id: "",
                arr: {},
                user: {},
                comments: [],
                flag: !1,
                context: "",
                src: "",
                see: !1,
                page: 1,
                isLoding: !1,
                hasMore: !0,
                text: ""
              }
            },
            methods: {
              goback: function () {
                t.navigateBack({
                  delta: 1
                })
              },
              Data: function () {
                var a = this;
                this.isLoding = !0, e.default.postDetails({
                  data: {
                    id: this.id
                  },
                  fail: function (a) {
                    a.isLoding = !1, t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (n) {
                    if ( a.isLoding = !1, 200 == n.statusCode)
                      if (200 == n.data.code) {
                        var e = n.data.data;
                        e.created_at = e.created_at.slice(0, 16), a.arr = e, a.user = e.own_user
                      } else {
                        t.showToast({
                          title: n.data.msg,
                          icon: "none",
                          duration: 2e3
                        });
                        var i = setTimeout((function () {
                          t.navigateBack({
                            delta: 1
                          }), clearTimeout(i)
                        }), 2e3)
                      }
                  }
                })
              },
              loadPageData: function () {
                var a = this;
                this.isLoding = !0, e.default.postComments({
                  data: {
                    tribune_id: this.id,
                    page: this.page
                  },
                  fail: function (n) {
                    a.isLoding = !1, t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (t) {
                    if (a.isLoding = !1, 200 == t.statusCode && 200 == t.data.code) {
                      var n = t.data.data;
                      n.data.map((function (t) {
                        t.created_at = t.created_at.slice(0, 16)
                      })), a.hasMore = !!n.next_page_url, a.comments = n.data
                    }
                  }
                })
              },
              open: function () {
                this.flag = !this.flag
              },
              look: function (t) {
                this.see = !0, this.src = t.url
              },
              off: function () {
                this.see = !1
              },
              send: function () {
                var a = this;
                t.showLoading({
                  title: "发送中..."
                }), e.default.relComments({
                  data: {
                    tribune_id: this.id,
                    content: this.context
                  },
                  fail: function (a) {
                    t.hideLoading(), t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (n) {
                    t.hideLoading(), 200 == n.statusCode && (200 == n.data.code ? (a.page = 1, a.context = "", a.loadPageData(), t.showToast({
                      title: n.data.msg,
                      duration: 2e3
                    })) : t.showToast({
                      title: n.data.msg,
                      duration: 2e3,
                      icon: "none"
                    }))
                  }
                })
              }
            },
            mounted: function () {
              this.Data(), this.loadPageData()
            },
            onReachBottom: function () {
              var a = this;
              1 == this.hasMore && 0 == this.isLoding && (this.isLoding = !0, this.page = this.page + 1, e.default.postComments({
                data: {
                  tribune_id: this.id,
                  page: this.page
                },
                fail: function (n) {
                  a.isLoding = !1, t.showToast({
                    title: "网络错误",
                    icon: "none"
                  })
                },
                success: function (t) {
                  if (a.isLoding = !1, 200 == t.statusCode && 200 == t.data.code) {
                    var n = t.data.data;
                    n.data.map((function (t) {
                      t.created_at = t.created_at.slice(0, 16)
                    })), a.hasMore = !!n.next_page_url, a.comments = a.comments.concat(n.data)
                  }
                }
              })), this.text = "没有更多了~"
            },
            onLoad: function (t) {
              this.id = t.id
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        a.default = s
      }).call(this, n("543d")["default"])
    }
  },
  [
    ["ad2b", "common/runtime", "common/vendor"]
  ]
]);