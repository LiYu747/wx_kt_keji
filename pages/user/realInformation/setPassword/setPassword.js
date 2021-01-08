(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/user/realInformation/setPassword/setPassword"], {
    "509c": function (t, e, o) {},
    5119: function (t, e, o) {
      "use strict";
      var n = o("509c"),
        s = o.n(n);
      s.a
    },
    "57d0": function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o("7709"),
        s = o.n(n);
      for (var i in n) "default" !== i && function (t) {
        o.d(e, t, (function () {
          return n[t]
        }))
      }(i);
      e["default"] = s.a
    },
    7709: function (t, e, o) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", {
          value: !0
        }), e.default = void 0;
        var n = s(o("78ac"));

        function s(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var i = function () {
            o.e("components/sub-unit/subunit").then(function () {
              return resolve(o("e864"))
            }.bind(null, o)).catch(o.oe)
          },
          a = {
            name: "",
            components: {
              subunit: i
            },
            props: {},
            data: function () {
              var t = this,
                e = function (e, o, n) {
                  "" === o ? n(new Error("请输入密码")) : ("" !== t.form.cfmPassword && t.$refs.uForm.setRules("cfmPassword"), n())
                },
                o = function (e, o, n) {
                  "" === o ? n(new Error("请再次输入密码")) : o !== t.form.password ? n(new Error("两次输入密码不一致!")) : n()
                };
              return {
                falgWay: !1,
                setWay: "使用旧密码修改",
                verify_method: "sms_code",
                flag: !1,
                text: "获取验证码",
                code: !0,
                timer: 60,
                form: {
                  phone: "",
                  password: "",
                  cfmPassword: "",
                  Verification: "",
                  oldPassword: ""
                },
                rules: {
                  password: [{
                    min: 6,
                    message: "密码至少6位",
                    trigger: "blur"
                  }, {
                    validator: e,
                    trigger: "blur"
                  }],
                  cfmPassword: [{
                    validator: o,
                    trigger: "blur"
                  }]
                }
              }
            },
            methods: {
              curWay: function () {
                this.falgWay = !this.falgWay, 0 == this.falgWay && (this.verify_method = "sms_code", this.setWay = "使用旧密码修改"), 1 == this.falgWay && (this.verify_method = "old_password", this.setWay = "手机验证码修改")
              },
              save: function () {
                var e = this;
                t.showLoading({
                  title: "加载中"
                }), n.default.steNewpaw({
                  data: {
                    verify_method: this.verify_method,
                    new_secret: this.form.password,
                    new_secret2: this.form.cfmPassword,
                    old_password: this.form.oldPassword,
                    sms_code: this.form.Verification
                  },
                  fail: function () {
                    t.hideLoading(), t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (o) {
                    t.hideLoading(), 200 == o.statusCode ? 200 == o.data.code ? (e.form.password = "", e.form.cfmPassword = "", e.form.oldPassword = "", e.form.Verification = "", t.showToast({
                      title: o.data.msg
                    })) : t.showToast({
                      title: o.data.msg,
                      icon: "none"
                    }) : t.showToast({
                      title: "网络请求出错",
                      icon: "none"
                    })
                  }
                })
              },
              addvercode: function () {
                var e = this;
                1 == this.code && ("" != this.form.phone ? (t.showLoading({
                  title: "发送中..."
                }), n.default.stePawcode({
                  data: {
                    tel: this.form.phone
                  },
                  fail: function () {
                    t.hideLoading(), t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (o) {
                    // console.log(o)
                    if (t.hideLoading(), 200 == o.statusCode)
                      if (200 == o.data.code) {
                        t.showToast({
                          title: o.data.msg,
                          icon: "none",
                          duration: 2e3
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
              getUserinfo: function () {
                var e = this;
                n.default.userDeta({
                  data: {},
                  fail: function () {
                    t.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (t) {
                    if (200 == t.statusCode && 200 == t.data.code) {
                      var o = t.data.data;
                      e.form.phone = o.tel
                    }
                  }
                })
              }
            },
            mounted: function () {
              this.getUserinfo()
            },
            onReady: function () {
              this.$refs.uForm.setRules(this.rules)
            },
            onLoad: function () {},
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        e.default = a
      }).call(this, o("543d")["default"])
    },
    "8c7a": function (t, e, o) {
      "use strict";
      o.d(e, "b", (function () {
        return s
      })), o.d(e, "c", (function () {
        return i
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
          }
        },
        s = function () {
          var t = this,
            e = t.$createElement;
          t._self._c
        },
        i = []
    },
    "8da0": function (t, e, o) {
      "use strict";
      o.r(e);
      var n = o("8c7a"),
        s = o("57d0");
      for (var i in s) "default" !== i && function (t) {
        o.d(e, t, (function () {
          return s[t]
        }))
      }(i);
      o("5119");
      var a, r = o("f0c5"),
        u = Object(r["a"])(s["default"], n["b"], n["c"], !1, null, "aec3264a", null, !1, n["a"], a);
      e["default"] = u.exports
    },
    cfb3: function (t, e, o) {
      "use strict";
      (function (t) {
        o("d774");
        n(o("66fd"));
        var e = n(o("8da0"));

        function n(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(e.default)
      }).call(this, o("543d")["createPage"])
    }
  },
  [
    ["cfb3", "common/runtime", "common/vendor"]
  ]
]);