(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user/personal/personal"], {
    "2e91": function (e, t, a) {
      "use strict";
      var n = a("535b"),
        i = a.n(n);
      i.a
    },
    3529: function (e, t, a) {
      "use strict";
      a.d(t, "b", (function () {
        return i
      })), a.d(t, "c", (function () {
        return o
      })), a.d(t, "a", (function () {
        return n
      }));
      var n = {
          uField: function () {
            return a.e("uview-ui/components/u-field/u-field").then(a.bind(null, "fb1c"))
          },
          uSelect: function () {
            return a.e("uview-ui/components/u-select/u-select").then(a.bind(null, "1ce0"))
          }
        },
        i = function () {
          var e = this,
            t = e.$createElement;
          e._self._c
        },
        o = []
    },
    "535b": function (e, t, a) {},
    "53ba": function (e, t, a) {
      "use strict";
      (function (e) {
        a("d774");
        n(a("66fd"));
        var t = n(a("917b"));

        function n(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, a("543d")["createPage"])
    },
    "742a": function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("76cb"),
        i = a.n(n);
      for (var o in n) "default" !== o && function (e) {
        a.d(t, e, (function () {
          return n[e]
        }))
      }(o);
      t["default"] = i.a
    },
    "76cb": function (e, t, a) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var n = o(a("78ac")),
          i = o(a("597d"));

        function o(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var s = function () {
            a.e("components/sub-unit/subunit").then(function () {
              return resolve(a("e864"))
            }.bind(null, a)).catch(a.oe)
          },
          u = {
            name: "",
            components: {
              subunit: s
            },
            props: {},
            data: function () {
              return {
                image: "",
                parameter: [{
                  value: "",
                  label: "昵称"
                }, {
                  value: "",
                  label: "性别",
                  disabled: !0
                }, {
                  value: "预览",
                  label: "正面免冠照",
                  disabled: !0
                }, {
                  value: "",
                  label: "真实姓名",
                  disabled: !0
                }, {
                  value: "",
                  label: "手机号码",
                  disabled: !0
                }, {
                  value: "",
                  label: "身份证号码",
                  disabled: !0
                }],
                show: !1,
                list: [{
                  value: "1",
                  label: "男"
                }, {
                  value: "2",
                  label: "女"
                }],
                sex: "",
                flag: !1,
                faceimg: "",
                value: [],
                isLoding: !1
              }
            },
            methods: {
              goback: function () {
                e.navigateBack({
                  delta: 1
                })
              },
              UploadAvatar: function () {
                var t = this;
                e.chooseImage({
                  success: function (a) {
                    t.isLoding = !0;
                    var n = a.tempFilePaths;
                    0 != n.length && e.uploadFile({
                      url: i.default.services.file.upload,
                      filePath: n[0],
                      name: "file",
                      success: function (a) {
                        if (t.isLoding = !1, 200 == a.statusCode) {
                          var n = JSON.parse(a.data);
                          200 == n.code ? (e.showToast({
                            title: "上传成功",
                            icon: "none"
                          }), t.image = n.data.url, t.flag = !1) : e.showToast({
                            title: n.msg,
                            icon: "none"
                          })
                        } else e.showToast({
                          title: "网络请求出错",
                          icon: "none"
                        })
                      }
                    })
                  }
                })
              },
              xuaz: function (t) {
                if (1 == t) {
                  this.show = !0;
                  var a = this.parameter[1].value;
                  "男" == a && (this.value = [0]), "女" == a && (this.value = [1])
                }
                2 == t && e.navigateTo({
                  url: "/components/idPhoto/idPhoto/idPhoto?photo=".concat(this.faceimg)
                })
              },
              ok: function (e) {
                this.parameter[1].value = e[0].label, this.sex = e[0].value, 2 == this.sex && 1 == this.flag && (this.image = "https://oss.kuaitongkeji.com/static/img/avatar/female_64.png")
              },
              Submit: function () {
                var t = this;
                if (1 != this.isLoding) {
                  e.showLoading({
                    title: "提交中..."
                  });
                  var a = this.parameter[0].value;
                  n.default.userupdate({
                    data: {
                      nickname: a,
                      avatar: this.image,
                      sex: this.sex
                    },
                    fail: function (t) {
                      e.hideLoading(), e.showToast({
                        title: "网络错误",
                        icon: "none"
                      })
                    },
                    success: function (a) {
                      e.hideLoading(), 200 == a.statusCode ? 200 == a.data.code ? e.showToast({
                        title: a.data.msg,
                        duration: 2e3
                      }) : t.$refs.uToast.show({
                        title: a.data.msg,
                        type: "error",
                        icon: !1
                      }) : e.showToast({
                        title: "网络请求出错",
                        icon: "none"
                      })
                    }
                  })
                }
              },
              UserData: function () {
                var t = this;
                e.showLoading({
                  title: "加载中..."
                }), n.default.userDeta({
                  fail: function (t) {
                    e.hideLoading(), e.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (a) {
                    if (e.hideLoading(), 200 == a.statusCode)
                      if (200 == a.data.code) {
                        var n = a.data.data;
                        "https://oss.kuaitongkeji.com/static/img/avatar/male_64.png" == n.avatar && (t.flag = !0), t.faceimg = n.faceimg, t.image = n.avatar, t.parameter[0].value = n.nickname, 1 == n.sex && (t.parameter[1].value = "男"), 2 == n.sex && (t.parameter[1].value = "女"), t.parameter[3].value = n.username, t.parameter[4].value = n.tel.slice(0, 3) + "****" + n.tel.slice(7, 11), t.parameter[5].value = n.id_card_no.slice(0, 3) + "**********" + n.id_card_no.slice(n.id_card_no.length - 4, n.id_card_no.length)
                      } else e.showToast({
                        title: a.data.msg,
                        icon: "none"
                      });
                    else e.showToast({
                      title: "网络请求出错",
                      icon: "none"
                    })
                  }
                })
              }
            },
            mounted: function () {},
            onLoad: function (e) {},
            onShow: function () {
              this.UserData()
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        t.default = u
      }).call(this, a("543d")["default"])
    },
    "917b": function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a("3529"),
        i = a("742a");
      for (var o in i) "default" !== o && function (e) {
        a.d(t, e, (function () {
          return i[e]
        }))
      }(o);
      a("2e91");
      var s, u = a("f0c5"),
        l = Object(u["a"])(i["default"], n["b"], n["c"], !1, null, "b4d4c940", null, !1, n["a"], s);
      t["default"] = l.exports
    }
  },
  [
    ["53ba", "common/runtime", "common/vendor"]
  ]
]);