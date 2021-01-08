(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/visitapplication/visit/visit"], {
    "2de7": function (e, t, n) {
      "use strict";
      (function (e) {
        Object.defineProperty(t, "__esModule", {
          value: !0
        }), t.default = void 0;
        var i = r(n("db9d")),
          a = r(n("a6bb")),
          o = (r(n("9381")), r(n("78ac"))),
          l = r(n("8031")),
          s = r(n("597d"));

        function r(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        var u = function () {
            Promise.all([n.e("common/vendor"), n.e("components/lb-picker/index")]).then(function () {
              return resolve(n("3ee2"))
            }.bind(null, n)).catch(n.oe)
          },
          c = function () {
            n.e("components/sub-unit/subunit").then(function () {
              return resolve(n("e864"))
            }.bind(null, n)).catch(n.oe)
          },
          d = function () {
            n.e("components/checkIn/enclosure/enclosure").then(function () {
              return resolve(n("fcd5"))
            }.bind(null, n)).catch(n.oe)
          },
          f = function () {
            n.e("components/checkIn/remarks/remarks").then(function () {
              return resolve(n("5b4f"))
            }.bind(null, n)).catch(n.oe)
          },
          h = {
            name: "",
            components: {
              subunit: c,
              enclosure: d,
              remarks: f,
              LbPicker: u
            },
            props: {},
            data: function () {
              return {
                record: [{
                  label: "拜访人姓名",
                  value: "",
                  required: !0,
                  disabled: !0
                }, {
                  label: "拜访人手机号",
                  value: "",
                  required: !0,
                  disabled: !0
                }, {
                  label: "拜访人身份证",
                  value: "",
                  required: !0,
                  disabled: !0
                }, {
                  label: "被访问人姓名",
                  value: "",
                  required: !0,
                  placeholder: "请输入被访问人姓名"
                }, {
                  label: "地址",
                  value: "",
                  disabled: !0,
                  placeholder: "请选择地址",
                  required: !0
                }],
                orgVillageLists: [],
                renderVillageLists: [],
                id: [],
                show: !1,
                value: [],
                images: "",
                text: "",
                isLoding: !1,
                textShow: !1
              }
            },
            methods: {
              Vmodel: function (i,v) {
                if( i == 3){
                  this.record[3].value = v
                }
              //  console.log(i,v)
              },

              itemlabel: function (e) {
                e == this.record.length - 1 && (this.show = !0)
              },
              confirm: function (e) {
                this.id = e.value;
                var t = "",
                  n = [],
                  i = [];
                e.map((function (e) {
                  i.push(e.extra), null != e.label && (t += e.label), null == e.value && e.value, n.push(e.value)
                })), this.id = i, this.value = n, this.record.map((function (e, n) {
                  4 === n && (e.value = t)
                }))
              },
              succ: function () {
                var t = this;
                e.chooseImage({
                  extension: ["jpg", "jpeg", "png", "gif"],
                  success: function (n) {
                    var i = n.tempFilePaths;
                    t.isLoding = !0;
                    var a = t;
                    if (0 != i.length) {
                      var o = [];
                      i.forEach((function (e) {
                        o.push(a.upload(e))
                      })), Promise.all(o).then((function (e) {
                        a.isLoding = !1
                      })).catch((function (t) {
                        a.isLoding = !1, e.showModal({
                          title: "上传文件出错:" + t
                        })
                      }))
                    }
                  }
                })
              },
              upload: function (t) {
                var n = this;
                return new Promise((function (i, a) {
                  e.uploadFile({
                    url: s.default.services.file.upload,
                    filePath: t,
                    name: "file",
                    fail: function (e) {
                      a("网络出错")
                    },
                    success: function (e) {
                      if (200 == e.statusCode) {
                        var t = JSON.parse(e.data);
                        200 == t.code ? (n.images = t.data.url, i(t)) : a(t.msg)
                      } else a(e.statusCode)
                    }
                  })
                }))
              },
              Submit: function () {
                var t = this;
                "" != this.record[3].value ? 0 != this.id.length ? 1 != this.isLoding && (e.showLoading({
                  title: "提交中..."
                }), a.default.VisitApplication({
                  data: {
                    hostName: this.record[3].value,
                    villageId: this.id[0],
                    buildingId: this.id[1],
                    apartmentId: this.id[2],
                    floorId: this.id[3],
                    roomId: this.id[4],
                    visitorRemark: this.text,
                    ext_img: this.images
                  },
                  fail: function (t) {
                    e.hideLoading(), e.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (n) {
                    e.hideLoading(), 200 == n.statusCode ? 200 == n.data.code ? (e.showToast({
                      title: n.data.msg,
                      duration: 2e3
                    }), t.images = "", t.text = "", t.record[3].value = "", t.record[4].value = "") : e.showToast({
                      title: n.data.msg,
                      icon: "none"
                    }) : e.showToast({
                      title: "网络请求出错",
                      icon: "none"
                    })
                  }
                })) : e.showToast({
                  title: "请选择地址",
                  icon: "none"
                }) : e.showToast({
                  title: "请输入被拜访人姓名",
                  icon: "none"
                })
              },
              gorecord: function () {
                e.navigateTo({
                  url: "/pages/visitapplication/goRecord/goRecord"
                })
              },
              loadVillageLists: function () {
                var t = this;
                i.default.selectLists({
                  data: {},
                  fail: function (t) {
                    e.showToast({
                      title: "网络错误",
                      icon: "none"
                    })
                  },
                  success: function (e) {
                    200 == e.statusCode && 200 == e.data.code && (t.orgVillageLists = e.data.data, t.renderMSelect())
                  }
                })
              },
              renderMSelect: function () {
                if (this.orgVillageLists && 0 != this.orgVillageLists.length) {
                  var e = [];
                  this.orgVillageLists.forEach((function (t, n) {
                    var i = {
                      label: t.name,
                      value: n,
                      extra: t.id,
                      children: []
                    };
                    if (!t.buildings) return !0;
                    t.buildings.forEach((function (e, t) {
                      var n = {
                        label: e.name,
                        value: t,
                        extra: e.id,
                        children: []
                      };
                      if (!e.apartments) return !0;
                      e.apartments.forEach((function (e, t) {
                        var i = {
                          label: e.name,
                          value: t,
                          extra: e.id,
                          children: []
                        };
                        if (!e.floors) return !0;
                        e.floors.forEach((function (e, t) {
                          var n = {
                            label: e.name,
                            value: t,
                            extra: e.id,
                            children: []
                          };
                          if (!e.rooms) return !0;
                          e.rooms.forEach((function (e, t) {
                            n.children.push({
                              label: e.room_number,
                              value: t,
                              extra: e.id
                            })
                          })), i.children.push(n)
                        })), n.children.push(i)
                      })), i.children.push(n)
                    })), e.push(i)
                  })), this.renderVillageLists = e
                } else this.renderVillageLists = []
              },
              loadUserData: function () {
                var t = this;
                e.showLoading({
                  title: "加载中..."
                }), l.default.doOnlyTokenValid({
                  showModal: !0,
                  keepSuccess: !1,
                  success: function () {
                    o.default.userDeta({
                      data: {},
                      fail: function (t) {
                        e.hideLoading(), e.showToast({
                          title: "网络错误",
                          icon: "none"
                        })
                      },
                      success: function (n) {
                        if (e.hideLoading(), 200 == n.statusCode && 200 == n.data.code) {
                          var i = n.data.data;
                          t.record[0].value = i.username, t.record[1].value = i.tel.slice(0, 3) + "****" + i.tel.slice(7, 11), i.id_card_no ? t.record[2].value = i.id_card_no.slice(0, 3) + "**********" + i.id_card_no.slice(i.id_card_no.length - 4, i.id_card_no.length) : e.showModal({
                            content: "请完善您的身份信息",
                            success: function (t) {
                              t.confirm ? e.navigateTo({
                                url: "/pages/user/realInformation/realInformation"
                              }) : t.cancel && e.navigateBack({
                                delta: 1
                              })
                            }
                          })
                        }
                      }
                    })
                  },
                  fail: function () {
                    e.hideLoading(), e.switchTab({
                      url: "/pages/index/index"
                    })
                  }
                })
              }
            },
            mounted: function () {
              this.loadVillageLists()
            },
            onShow: function () {
              this.loadUserData()
            },
            onLoad: function (e) {
              e.text && (this.text = e.text, this.textShow = !0)
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        t.default = h
      }).call(this, n("543d")["default"])
    },
    "45a7": function (e, t, n) {},
    "471d": function (e, t, n) {
      "use strict";
      var i = n("45a7"),
        a = n.n(i);
      a.a
    },
    "666c": function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("9f5a"),
        a = n("fe49");
      for (var o in a) "default" !== o && function (e) {
        n.d(t, e, (function () {
          return a[e]
        }))
      }(o);
      n("471d");
      var l, s = n("f0c5"),
        r = Object(s["a"])(a["default"], i["b"], i["c"], !1, null, "2519d14e", null, !1, i["a"], l);
      t["default"] = r.exports
    },
    "6e5f": function (e, t, n) {
      "use strict";
      (function (e) {
        n("d774");
        i(n("66fd"));
        var t = i(n("666c"));

        function i(e) {
          return e && e.__esModule ? e : {
            default: e
          }
        }
        e(t.default)
      }).call(this, n("543d")["createPage"])
    },
    "9f5a": function (e, t, n) {
      "use strict";
      n.d(t, "b", (function () {
        return a
      })), n.d(t, "c", (function () {
        return o
      })), n.d(t, "a", (function () {
        return i
      }));
      var i = {
          uField: function () {
            return n.e("uview-ui/components/u-field/u-field").then(n.bind(null, "fb1c"))
          },
          uSelect: function () {
            return n.e("uview-ui/components/u-select/u-select").then(n.bind(null, "1ce0"))
          }
        },
        a = function () {
          var e = this,
            t = e.$createElement;
          e._self._c
        },
        o = []
    },
    fe49: function (e, t, n) {
      "use strict";
      n.r(t);
      var i = n("2de7"),
        a = n.n(i);
      for (var o in i) "default" !== o && function (e) {
        n.d(t, e, (function () {
          return i[e]
        }))
      }(o);
      t["default"] = a.a
    }
  },
  [
    ["6e5f", "common/runtime", "common/vendor"]
  ]
]);