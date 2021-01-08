(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/communityForum/release/release"], {
    2223: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("9b6d"),
        i = n("72a3");
      for (var a in i) "default" !== a && function (t) {
        n.d(e, t, (function () {
          return i[t]
        }))
      }(a);
      n("ae3b");
      var u, c = n("f0c5"),
        s = Object(c["a"])(i["default"], o["b"], o["c"], !1, null, "78031eec", null, !1, o["a"], u);
      e["default"] = s.exports
    },
    2951: function (t, e, n) {
      "use strict";
      (function (t) {
        n("d774");
        o(n("66fd"));
        var e = o(n("2223"));

        function o(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, n("543d")["createPage"])
    },
    "72a3": function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("c23c"),
        i = n.n(o);
      for (var a in o) "default" !== a && function (t) {
        n.d(e, t, (function () {
          return o[t]
        }))
      }(a);
      e["default"] = i.a
    },
    "9b6d": function (t, e, n) {
      "use strict";
      n.d(e, "b", (function () {
        return i
      })), n.d(e, "c", (function () {
        return a
      })), n.d(e, "a", (function () {
        return o
      }));
      var o = {
          uPopup: function () {
            return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null, "71bb"))
          }
        },
        i = function () {
          var t = this,
            e = t.$createElement;
          t._self._c;
          t._isMounted || (t.e0 = function (e) {
            t.show = !0
          }, t.e1 = function (e) {
            t.show = !1
          })
        },
        a = []
    },
    ae3b: function (t, e, n) {
      "use strict";
      var o = n("ba01"),
        i = n.n(o);
      i.a
    },
    ba01: function (t, e, n) {},
    c23c: function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var o = a(n("db9d")),
          i = a(n("597d"));

        function a(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var u = function () {
            n.e("components/sub-botn/subrelease").then(function () {
              return resolve(n("3916"))
            }.bind(null, n)).catch(n.oe)
          },
          c = function () {
            n.e("components/sub-unit/subunit").then(function () {
              return resolve(n("e864"))
            }.bind(null, n)).catch(n.oe)
          },
          s = {
            name: "",
            components: {
              subrelease: u,
              subunit: c
            },
            props: {},
            data: function () {
              return {
                id: "",
                image: [],
                show: !1,
                tagdata: [{
                  name: "推荐",
                  type: !0,
                  default: !0
                }, {
                  name: "热榜",
                  type: !0,
                  default: !0
                }],
                choiceData: [],
                title: "",
                content: "",
                isLoding: !1,
                choiceID: ""
              }
            },
            methods: {
              choice: function (t) {
                t.default || (t.type = !t.type)
              },
              ok: function () {
                var t = this;
                this.choiceData = this.tagdata.filter((function (t) {
                  return 1 == t.type
                })), this.choiceData.map((function (e) {
                  e.default || (t.choiceID += e.id + ",")
                })), this.choiceID = this.choiceID.slice(0, this.choiceID.length - 1), this.show = !1
              },
              add: function () {
                var e = this;
                t.chooseImage({
                  success: function (n) {
                    e.isLoding = !0;
                    var o = n.tempFilePaths,
                      a = o.length;
                    0 != o.length && o.forEach((function (n) {
                      t.uploadFile({
                        url: i.default.services.file.upload,
                        filePath: n,
                        name: "file",
                        success: function (n) {
                          200 == n.statusCode ? 200 == JSON.parse(n.data).code ? (e.image.push(JSON.parse(n.data).data.url), e.image.length == a && (e.isLoding = !1, t.showToast({
                            title: "上传成功"
                          }))) : t.showToast({
                            title: JSON.parse(n.data).msg,
                            icon: "none"
                          }) : t.showToast({
                            title: "网络请求出错",
                            icon: "none"
                          })
                        }
                      })
                    }))
                  }
                })
              },
              Submit: function () {
                var e = this;
                1 != this.isLoding && (t.showLoading({
                  title: "提交中..."
                }), o.default.releasePost({
                  data: {
                    village_id: this.id,
                    title: this.title,
                    content: this.content,
                    albums: this.image,
                    tribune_cat: this.choiceID
                  },
                  fail: function (e) {
                    t.hideLoading(), t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (n) {
                    t.hideLoading(), 200 == n.statusCode ? 200 == n.data.code ? (t.showToast({
                      title: n.data.msg,
                      duration: 2e3
                    }), e.image = [], e.title = "", e.content = "", e.choiceData = []) : t.showToast({
                      title: n.data.msg,
                      icon: "none"
                    }) : t.showToast({
                      title: "网络请求出错",
                      icon: "none"
                    })
                  }
                }))
              },
              grtColumn: function () {
                var e = this;
                o.default.DefaultColumnList({
                  data: {},
                  fail: function () {
                    t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (t) {
                    200 == t.statusCode && 200 == t.data.code && (t.data.data.map((function (t) {
                      t.type = !1
                    })), e.tagdata = e.tagdata.concat(t.data.data))
                  }
                })
              }
            },
            onShow: function () {},
            mounted: function () {
              this.grtColumn()
            },
            onLoad: function (t) {
              // console.log(t)
              this.id = t.id
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        e.default = s
      }).call(this, n("543d")["default"])
    }
  },
  [
    ["2951", "common/runtime", "common/vendor"]
  ]
]);