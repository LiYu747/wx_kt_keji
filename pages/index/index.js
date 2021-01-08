(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/index"], {
    "9a76": function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t("9bc8"),
        a = t("a071");
      for (var i in a) "default" !== i && function (e) {
        t.d(n, e, (function () {
          return a[e]
        }))
      }(i);
      t("af7e");
      var s, r = t("f0c5"),
        u = Object(r["a"])(a["default"], o["b"], o["c"], !1, null, null, null, !1, o["a"], s);
      n["default"] = u.exports
    },
    "9bc8": function (e, n, t) {
      "use strict";
      t.d(n, "b", (function () {
        return a
      })), t.d(n, "c", (function () {
        return i
      })), t.d(n, "a", (function () {
        return o
      }));
      var o = {
          uSwiper: function () {
            return t.e("uview-ui/components/u-swiper/u-swiper").then(t.bind(null, "f3d9"))
          }
        },
        a = function () {
          var e = this,
            n = e.$createElement;
          e._self._c;
          e._isMounted || (e.e0 = function (n) {
            e.isShowType = !e.isShowType
          })
        },
        i = []
    },
    a071: function (e, n, t) {
      "use strict";
      t.r(n);
      var o = t("ff57"),
        a = t.n(o);
      for (var i in o) "default" !== i && function (e) {
        t.d(n, e, (function () {
          return o[e]
        }))
      }(i);
      n["default"] = a.a
    },
    ab52: function (e, n, t) {},
    af7e: function (e, n, t) {
      "use strict";
      var o = t("ab52"),
        a = t.n(o);
      a.a
    },
    dcb1: function (e, n, t) {
      "use strict";
      (function (e) {
        t("d774");
        o(t("66fd"));
        var n = o(t("9a76"));

        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(n.default)
      }).call(this, t("543d")["createPage"])
    },
    ff57: function (e, n, t) {
      "use strict";
      (function (e) {
        Object.defineProperty(n, "__esModule", {
          value: !0
        }), n.default = void 0;
        var o = s(t("a6bb")),
          a = s(t("9381")),
          i = (s(t("78ac")), s(t("3a23")));

        function s(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var r = function () {
            t.e("components/home/classification/classification").then(function () {
              return resolve(t("8a25"))
            }.bind(null, t)).catch(t.oe)
          },
          u = function () {
            t.e("components/home/information/information").then(function () {
              return resolve(t("39ff"))
            }.bind(null, t)).catch(t.oe)
          },
          c = function () {
            t.e("components/home/periphery/periphery").then(function () {
              return resolve(t("5a1a"))
            }.bind(null, t)).catch(t.oe)
          },
          f = function () {
            t.e("components/home/CommunityNews/CommunityNews").then(function () {
              return resolve(t("3510"))
            }.bind(null, t)).catch(t.oe)
          },
          l = {
            components: {
              classification: r,
              information: u,
              periphery: c,
              CommunityNews: f
            },
            data: function () {
              return {
                userType: [{
                  name: "用户",
                  type: "user",
                  url: "/pages/index/index"
                }, {
                  name: "物业",
                  type: "property",
                  url: "/pages/propertyManagement/propertyhome/propertyhome"
                }, {
                  name: "快递、外卖",
                  type: "expressage",
                  url: "/pages/userMessenger/userhome/userhome"
                }],
                isShowType: !1,
                localdata: [],
                list: [],
                value: "",
                user: {},
                paly: !1,
                videoUrl: "",
                cover: "",
                showPullDownRefreshIcon: !1,
                informmsg: {}
              }
            },
            //分享给朋友
            onShareAppMessage(e) {
              // console.log(e);
             },
              //分享给朋友圈
            onShareTimeline(){

             },
            onLoad: function (e) {},
            methods: {
              goInform: function () {
                e.navigateTo({
                  url: "/pages/user/userInform/userInform"
                })
              },
              getInform: function () {
                var n = this;
                o.default.unread({
                  data: {},
                  fail: function (t) {
                    n.stopRefreshIcon(), e.showToast({
                      title: "网络出错",
                      icon: "none"
                    })
                  },
                  success: function (e) {
                    if (n.stopRefreshIcon(), 200 == e.statusCode && 200 == e.data.code) {
                      var t = e.data.data;
                      n.informmsg = t
                    }
                  }
                })
              },
              selecType: function (n) {
                "user" != n.type && e.reLaunch({
                  url: n.url
                })
              },
              confirm: function () {
                "" != this.value && e.navigateTo({
                  url: "/pages/index/search/search?value=".concat(this.value)
                })
              },
              addswiper: function (e) {
                var n = this.list[e];
                if (n.video) return this.videoUrl = n.video, this.cover = n.image, void(this.paly = !0);
                i.default.to({
                  pageAlias: n.page,
                  options: n.params
                })
              },
              close: function () {
                this.paly = !1
              },
              operation: function (n) {
                n.page ? i.default.to({
                  pageAlias: n.page,
                  options: n.params
                }) : n.web_url && e.navigateTo({
                  url: "/pages/web/index/index?url=" + encodeURIComponent(n.web_url)
                })
              },
              Chart: function () {
                var n = this;
                o.default.chart({
                  data: {
                    code: "home_index_banner"
                  },
                  fail: function (t) {
                    n.stopRefreshIcon(), e.showToast({
                      title: "网络出错",
                      icon: "none"
                    })
                  },
                  success: function (e) {
                    n.stopRefreshIcon(), 200 == e.statusCode && 200 == e.data.code && (n.list = e.data.data.ads)
                  }
                })
              },
              operationData: function () {
                var n = this;
                o.default.chart({
                  data: {
                    code: "home_quick_nav_1"
                  },
                  fail: function (t) {
                    n.stopRefreshIcon(), e.showToast({
                      title: "网络出错",
                      icon: "none"
                    })
                  },
                  success: function (e) {
                    n.stopRefreshIcon(), 200 == e.statusCode && 200 == e.data.code && (n.localdata = e.data.data.ads)
                  }
                })
              },
              stopRefreshIcon: function () {
                1 == this.showPullDownRefreshIcon && (e.stopPullDownRefresh(), this.showPullDownRefreshIcon = !1)
              }
            },
            mounted: function () {
              this.Chart(), this.operationData()
            },
            onShow: function () {
              this.getInform();
              var e = a.default.get("jwt");
              this.user = e ? {} : null, this.value = ""
            },
            onPullDownRefresh: function () {
              this.showPullDownRefreshIcon = !0, this.$refs.clas.Calss(), this.$refs.infor.Data(), this.$refs.peri.getData(), this.user && this.$refs.news.getData(), this.operationData(), this.Chart(), this.getInform()
            },
            onHide: function () {
              this.isShowType = !1
            }
          };
        n.default = l
      }).call(this, t("543d")["default"])
    }
  },
  [
    ["dcb1", "common/runtime", "common/vendor"]
  ]
]);