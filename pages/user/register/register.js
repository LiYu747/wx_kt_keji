(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user/register/register"], {
    "091b": function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o("b9c8"),
        i = o.n(n);
      for (var a in n) "default" !== a && function (t) {
        o.d(e, t, (function () {
          return n[t]
        }))
      }(a);
      e["default"] = i.a
    },
    "1bcb": function (t, e, o) {
      "use strict";
      (function (t) {
        o("d774");
        n(o("66fd"));
        var e = n(o("a6f4"));

        function n(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, o("543d")["createPage"])
    },
    a6f4: function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o("ce38"),
        i = o("091b");
      for (var a in i) "default" !== a && function (t) {
        o.d(e, t, (function () {
          return i[t]
        }))
      }(a);
      o("d48c");
      var s, u = o("f0c5"),
        r = Object(u["a"])(i["default"], n["b"], n["c"], !1, null, "1e3fdd5a", null, !1, n["a"], s);
      e["default"] = r.exports
    },
    b9c8: function (t, e, o) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = u(o("bd56")),
          i = u(o("3dff")),
          a = u(o("597d")),
          s = u(o("9381"));

        function u(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var r = {
          name: "",
          components: {},
          props: {},
          data: function () {
            return {
              flag: !1,
              toot: !1,
              text: "获取验证码",
              code: !0,
              timer: 60,
              avatar: "https://oss.kuaitongkeji.com/static/img/avatar/male_64.png",
              photo: "",
              form: {
                nickname: "",
                name: "",
                phone: "",
                Verification: ""
              },
              isLoding: !1
            }
          },
          methods: {
            addvercode: function () {
              var e = this;
              1 == this.code && ("" != this.form.phone ? (t.showLoading({
                title: "加载中..."
              }), i.default.userRegCode({
                data: {
                  tel: this.form.phone
                },
                fail: function () {
                  e.isLoding = !1, t.showToast({
                    title: "网络错误",
                    icon: "none"
                  })
                },
                success: function (o) {
                  console.log(o)
                  if (t.hideLoading(), 200 == o.statusCode)
                    if (200 == o.data.code) {
                      t.showToast({
                        title: o.data.msg,
                        icon: "none"
                      });
                      var n = setInterval((function () {
                        e.code = !1, e.timer--, e.text = "验证码(" + e.timer + "s)", e.timer <= 0 && (e.timer = 60, e.text = "重新发送", e.code = !0, clearInterval(n))
                      }), 1e3)
                    } else t.showToast({
                      title: o.data.msg,
                      icon: "none"
                    });
                  else t.showToast({
                    title: "网络请求出错",
                    icon: "none"
                  })
                }
              })) : t.showToast({
                title: "请输入手机号",
                icon: "none"
              }))
            },
            register: function () {
              var e = this;
              1 != this.isLoding && ("" != this.form.nickname ? "" != this.form.name ? "" != this.form.phone ? "" != this.form.Verification ? (t.showLoading({
                title: "加载中..."
              }), n.default.register({
                data: {
                  tel: this.form.phone,
                  smsCode: this.form.Verification,
                  nickname: this.form.nickname,
                  username: this.form.name,
                  avatar: this.avatar,
                  faceimg: this.photo,
                  sex: 1
                },
                fail: function (e) {
                  t.hideLoading(), t.showToast({
                    title: "网络错误",
                    icon: "none"
                  })
                },
                success: function (o) {
                  t.hideLoading(), 200 == o.statusCode ? 200 == o.data.code ? e.$refs.uToast.show({
                    title: o.data.msg,
                    url: "/pages/auth/login/login?register=".concat(!0)
                  }) : t.showToast({
                    title: o.data.msg,
                    icon: "none"
                  }) : t.showToast({
                    title: "网络请求出错",
                    icon: "none"
                  })
                }
              })) : t.showToast({
                title: "请输入验证码",
                icon: "none"
              }) : t.showToast({
                title: "请输入手机号",
                icon: "none"
              }) : t.showToast({
                title: "请输入姓名",
                icon: "none"
              }) : t.showToast({
                title: "请输入昵称",
                icon: "none"
              }))
            },
            goback: function () {
              t.navigateBack({
                delta: 1
              })
            },
            upload: function () {
              s.default.forget("photo"), this.$u.route({
                url: "/uview-ui/components/u-avatar-cropper/u-avatar-cropper",
                params: {
                  destWidth: 250,
                  rectWidth: 250,
                  fileType: "jpg"
                }
              })
            },
            preview: function () {
              t.navigateTo({
                url: "/pages/user/register/headSculpture"
              })
            }
          },
          created: function () {
            var e = this;
            t.$on("uAvatarCropper", (function (o) {
              e.isLoding = !0, t.uploadFile({
                url: a.default.services.file.upload,
                filePath: o,
                name: "file",
                complete: function (o) {
                  if (e.isLoding = !1, 200 == o.statusCode) {
                    var n = JSON.parse(o.data);
                    200 == n.code ? (t.showToast({
                      title: "上传成功",
                      icon: "none"
                    }), e.photo = n.data.url, s.default.set("photo", n.data.url), e.toot = !0) : t.showToast({
                      title: n.msg,
                      icon: "none"
                    })
                  } else t.showToast({
                    title: "网络请求出错",
                    icon: "none"
                  })
                }
              })
            }))
          },
          mounted: function () {},
          onReady: function () {
            this.$refs.uForm.setRules(this.rules)
          },
          onShow: function () {
            s.default.get("photo") && (this.photo = s.default.get("photo"))
          },
          onLoad: function () {},
          filters: {},
          computed: {},
          watch: {},
          directives: {}
        };
        e.default = r
      }).call(this, o("543d")["default"])
    },
    ce38: function (t, e, o) {
      "use strict";
      o.d(e, "b", (function () {
        return i
      })), o.d(e, "c", (function () {
        return a
      })), o.d(e, "a", (function () {
        return n
      }));
      var n = {
          uForm: function () {
            return o.e("uview-ui/components/u-form/u-form").then(o.bind(null, "a1be"))
          },
          uFormItem: function () {
            return Promise.all([o.e("common/vendor"), o.e("uview-ui/components/u-form-item/u-form-item")]).then(o.bind(null, "239a"))
          },
          uInput: function () {
            return Promise.all([o.e("common/vendor"), o.e("uview-ui/components/u-input/u-input")]).then(o.bind(null, "8af1"))
          },
          uToast: function () {
            return o.e("uview-ui/components/u-toast/u-toast").then(o.bind(null, "c048"))
          }
        },
        i = function () {
          var t = this,
            e = t.$createElement;
          t._self._c
        },
        a = []
    },
    d48c: function (t, e, o) {
      "use strict";
      var n = o("e7cd"),
        i = o.n(n);
      i.a
    },
    e7cd: function (t, e, o) {}
  },
  [
    ["1bcb", "common/runtime", "common/vendor"]
  ]
]);