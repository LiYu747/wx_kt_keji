(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/userMessenger/applyingTo/applyingTo"], {
    "0b70": function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("5ca2"),
        o = a("8007");
      for (var i in o) "default" !== i && function (e) {
        a.d(t, e, (function () {
          return o[e]
        }))
      }(i);
      a("9484");
      var s, u = a("f0c5"),
        c = Object(u["a"])(o["default"], n["b"], n["c"], !1, null, "629add5b", null, !1, n["a"], s);
      t["default"] = c.exports
    },
    4022: function (e, t, a) {
      "use strict";
      (function (e) {
        a("d774");
        n(a("66fd"));
        var t = n(a("0b70"));

        function n(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, a("543d")["createPage"])
    },
    "5ca2": function (e, t, a) {
      "use strict";
      var n;
      a.d(t, "b", (function () {
        return o
      })), a.d(t, "c", (function () {
        return i
      })), a.d(t, "a", (function () {
        return n
      }));
      var o = function () {
          var e = this,
            t = e.$createElement;
          e._self._c
        },
        i = []
    },
    8007: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("e172"),
        o = a.n(n);
      for (var i in n) "default" !== i && function (e) {
        a.d(t, e, (function () {
          return n[e]
        }))
      }(i);
      t["default"] = o.a
    },
    9484: function (e, t, a) {
      "use strict";
      var n = a("cfb5"),
        o = a.n(n);
      o.a
    },
    cfb5: function (e, t, a) {},
    e172: function (e, t, a) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = s(a("597d")),
          o = s(a("a6bb")),
          i = s(a("78ac"));

        function s(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var u = function () {
            a.e("components/sub-unit/subunit").then(function () {
              return resolve(a("e864"))
            }.bind(null, a)).catch(a.oe)
          },
          c = {
            name: "",
            components: {
              subunit: u
            },
            props: {},
            data: function () {
              return {
                remark: "",
                image: [],
                isLoding: !1,
                locdata: [{
                  label: "姓名",
                  value: "",
                  disabled: !0
                }, {
                  label: "所属平台",
                  value: "",
                  placeholder: "请输入平台",
                  disabled: !1
                }, {
                  label: "工号",
                  value: "",
                  placeholder: "请输入工号",
                  disabled: !1
                }]
              }
            },
            methods: {
              Vmodel: function (i,v) {
                if(i == 1 ){
                  this.locdata[1].value = v.detail.value
                }
                if(i == 2 ){
                  this.locdata[2].value = v.detail.value
                }
              },
              goRecord: function () {
                e.navigateTo({
                  url: "/pages/userMessenger/applyingTo/applyingRecord/applyingRecord"
                })
              },
              pushBtn: function () {
                var t = this;
                e.chooseImage({
                  extension: ["jpg", "jpeg", "png", "gif"],
                  success: function (a) {
                    var n = a.tempFilePaths;
                    t.isLoding = !0;
                    var o = t;
                    if (0 != n.length) {
                      var i = [];
                      n.forEach((function (e) {
                        i.push(o.upload(e))
                      })), Promise.all(i).then((function (e) {
                        o.isLoding = !1
                      })).catch((function (t) {
                        o.isLoding = !1, e.showModal({
                          title: "上传文件出错:" + t
                        })
                      }))
                    }
                  }
                })
              },
              upload: function (t) {
                var a = this;
                return new Promise((function (o, i) {
                  e.uploadFile({
                    url: n.default.services.file.upload,
                    filePath: t,
                    name: "file",
                    fail: function (e) {
                      i("网络出错")
                    },
                    success: function (t) {
                      if (200 == t.statusCode) {
                        var n = JSON.parse(t.data);
                        200 == n.code ? (a.image.length < 3 ? a.image.push(n.data.url) : e.showToast({
                          title: "数量不超过三张",
                          icon: "none"
                        }), o(n)) : i(n.msg)
                      } else i(t.statusCode)
                    }
                  })
                }))
              },
              submit: function () {
                var t = this;
                "" != this.locdata[1].value ? "" != this.locdata[2].value ? 1 != this.isLoding && (e.showLoading({
                  title: "加载中"
                }), o.default.applyToBecome({
                  data: {
                    platform: this.locdata[1].value,
                    code: this.locdata[2].value,
                    files: this.image,
                    user_remark: this.remark
                  },
                  fail: function () {
                    e.hideLoading(), e.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (a) {
                    e.hideLoading(), 200 == a.statusCode ? 200 == a.data.code ? (e.showToast({
                      title: a.data.msg
                    }), t.locdata[1].value = "", t.locdata[2].value = "", t.image = [], t.remark = "") : e.showToast({
                      title: a.data.msg,
                      icon: "none"
                    }) : e.showToast({
                      title: "网络出错了",
                      icon: "none"
                    })
                  }
                })) : e.showToast({
                  title: "请填写平台工号",
                  icon: "none"
                }) : e.showToast({
                  title: "请填写所属平台",
                  icon: "none"
                })
              },
              getuserinfo: function () {
                var t = this;
                e.showLoading({
                  title: "加载中"
                }), i.default.userDeta({
                  data: {},
                  fail: function (t) {
                    e.hideLoading(), e.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (a) {
                    if (e.hideLoading(), 200 == a.statusCode) {
                      if (200 == a.data.code) {
                        var n = a.data.data;
                        t.locdata[0].value = n.username
                      }
                    } else e.showToast({
                      title: "网络出错了",
                      icon: "none"
                    })
                  }
                })
              }
            },
            mounted: function () {
              this.getuserinfo()
            },
            onLoad: function () {},
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        t.default = c
      }).call(this, a("543d")["default"])
    }
  },
  [
    ["4022", "common/runtime", "common/vendor"]
  ]
]);