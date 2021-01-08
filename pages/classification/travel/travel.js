(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/classification/travel/travel"], {
    "0dc1": function (t, o, n) {
      "use strict";
      var i = n("295c"),
        e = n.n(i);
      e.a
    },
    "295c": function (t, o, n) {},
    "995e": function (t, o, n) {
      "use strict";
      n.r(o);
      var i = n("abee"),
        e = n("c377");
      for (var a in e) "default" !== a && function (t) {
        n.d(o, t, (function () {
          return e[t]
        }))
      }(a);
      n("0dc1");
      var c, u = n("f0c5"),
        s = Object(u["a"])(e["default"], i["b"], i["c"], !1, null, "11715bf7", null, !1, i["a"], c);
      o["default"] = s.exports
    },
    abee: function (t, o, n) {
      "use strict";
      var i;
      n.d(o, "b", (function () {
        return e
      })), n.d(o, "c", (function () {
        return a
      })), n.d(o, "a", (function () {
        return i
      }));
      var e = function () {
          var t = this,
            o = t.$createElement;
          t._self._c
        },
        a = []
    },
    b2de: function (t, o, n) {
      "use strict";
      (function (t) {
        n("d774");
        i(n("66fd"));
        var o = i(n("995e"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        t(o.default)
      }).call(this, n("543d")["createPage"])
    },
    c377: function (t, o, n) {
      "use strict";
      n.r(o);
      var i = n("fda5"),
        e = n.n(i);
      for (var a in i) "default" !== a && function (t) {
        n.d(o, t, (function () {
          return i[t]
        }))
      }(a);
      o["default"] = e.a
    },
    fda5: function (t, o, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(o, "__esModule", {
          value: !0
        }), o.default = void 0;
        i(n("78ac")), i(n("23ca"));

        function i(t) {
          return t && t.__esModule ? t : {
            default: t
          }
        }
        var e = function () {
            n.e("components/sub-class/subclass").then(function () {
              return resolve(n("ece8"))
            }.bind(null, n)).catch(n.oe)
          },
          a = {
            name: "",
            components: {
              subclass: e
            },
            props: {},
            data: function () {
              return {
                myPosition: "",
                goPosition: "", //去的地方
                latitude: "",
                longitude: "",
                markers: [{
                  id: 10,
                  title: "我的位置",
                  width:30,
                  heigth:10,
                  latitude: "",
                  longitude: "",
                }],
                // city: "",
                golat: "",
                golng: ""
              }
            },
            methods: {
       
              location: function () {
                var o = this;
                t.showLoading({
                  title: "获取定位中"
                }), t.getLocation({
                  type: "gcj02",
                  altitude: !0,
                  geocode: !0,
                  success: function (n) {
                    t.hideLoading(), o.latitude = n.latitude, o.longitude = n.longitude, o.markers[0].latitude = n.latitude, o.markers[0].longitude = n.longitude
                  },
                  fail: function (o) {
                    t.hideLoading(), t.showToast({
                      title: "获取定位失败,请稍后再试",
                      icon: "none"
                    })
                  }
                })
              },
              start: function () {
                let plugin = requirePlugin('routePlan');
                let key = 'V24BZ-ZZSCI-A6RGT-5MBOB-EQLJH-NPB6T';  //使用在腾讯位置服务申请的key
                let referer = '快通信息';   //调用插件的app的名称
                   
                let endPoint = JSON.stringify({  //终点
                  'name': this.goPosition,
                  'latitude': this.golat,
                  'longitude': this.golng
                });
                wx.navigateTo({
                  url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&endPoint=' + endPoint   + '&navigation=1'
                });
                   return;
                var o = this;
                if ("" != o.goPosition) {
                  var n = "http://api.map.baidu.com/direction";
                  "" == o.myPosition && (n += "?origin=latlng:".concat(o.latitude, ",").concat(o.longitude) + "|name:" + o.myPosition + "&destination=latlng:".concat(o.golat, ",").concat(o.golng) + "|name:" + o.goPosition + "&mode=driving&region=" + this.city + "&output=html&src=webapp.baidu.openAPIdemo&coord_type=gcj02"), "" != o.myPosition && (o.latitude = "", o.longitude = "", n += "?origin=latlng:".concat(o.latitude, ",").concat(o.longitude) + "|name:" + o.myPosition + "&destination=latlng:".concat(o.golat, ",").concat(o.golng) + "|name:" + o.goPosition + "&mode=driving&region=" + this.city + "&output=html&src=webapp.baidu.openAPIdemo&coord_type=gcj02"), t.navigateTo({
                    url: "/pages/web/index/index?url=" + encodeURIComponent(n)
                  })
                } else t.showToast({
                  title: "请输入终点",
                  icon: "none"
                })
              }
            },
            onShow: function () {},
            mounted: function () {
              this.location()
            },
            onLoad: function (t) {
              // console.log(t)
              "" != t.null && (this.goPosition = t.addressName , this.golat = t.lat , this.golng = t.lng)
            },
            filters: {},
            computed: {},
            watch: {},
            directives: {}
          };
        o.default = a
      }).call(this, n("543d")["default"])
    }
  },
  [
    ["b2de", "common/runtime", "common/vendor"]
  ]
]);