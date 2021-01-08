(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/InformationDetails/InformationDetails/InformationDetails"], {
    "0766": function (n, t, e) {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      const app = getApp()
      var u = function () {
          e.e("components/sub-unit/subunit").then(function () {
            return resolve(e("e864"))
          }.bind(null, e)).catch(e.oe)
        },
        
        o = {
          name: "",
          components: {
            subunit: u
          },
          props: {},
          data: function () {
            return {
              title: "",
              content: ""
            }
          },
          methods: {
            fixRichText : function(richText,appendClass){

              if( !appendClass ) appendClass = '';
      
              if( !richText ) return richText;
      
              //没有 < img style (?!.*style=).*
              let imgs = richText.match(/<img(?:.|\s)*?>/g);
      
              // let imgsWithClass = [];
              if( imgs != null ){
                  imgs.forEach(function(item,index){
                      let imgsWithClass = (item.replace(/<img/,'< img class="'+ appendClass +'"'));
                      richText = richText.replace(item,imgsWithClass)
                  })
              }
      
              return richText;
          },
          },
          mounted: function () {
            this.fixRichText()
          },
          onLoad: function (n) {
            // console.log(app.globalData.title)
            this.content = app.globalData.title
            this.title = n.title
          },
          filters: {},
          computed: {},
          watch: {},
          directives: {}
        };
      t.default = o
    },
    "0835": function (n, t, e) {
      "use strict";
      e.r(t);
      var u = e("0766"),
        o = e.n(u);
      for (var c in u) "default" !== c && function (n) {
        e.d(t, n, (function () {
          return u[n]
        }))
      }(c);
      t["default"] = o.a
    },
    "124e": function (n, t, e) {
      "use strict";
      (function (n) {
        e("d774");
        u(e("66fd"));
        var t = u(e("3421"));

        function u(n) {
          return n && n.__esModule ? n : {
            default: n
          }
        }
        n(t.default)
      }).call(this, e("543d")["createPage"])
    },
    "2c32": function (n, t, e) {
      "use strict";
      e.d(t, "b", (function () {
        return o
      })), e.d(t, "c", (function () {
        return c
      })), e.d(t, "a", (function () {
        return u
      }));
      var u = {
          uParse: function () {
            return Promise.all([e.e("common/vendor"), e.e("uview-ui/components/u-parse/u-parse")]).then(e.bind(null, "12d8"))
          }
        },
        o = function () {
          var n = this,
            t = n.$createElement;
          n._self._c
        },
        c = []
    },
    3421: function (n, t, e) {
      "use strict";
      e.r(t);
      var u = e("2c32"),
        o = e("0835");
      for (var c in o) "default" !== c && function (n) {
        e.d(t, n, (function () {
          return o[n]
        }))
      }(c);
      e("43ec");
      var i, r = e("f0c5"),
        a = Object(r["a"])(o["default"], u["b"], u["c"], !1, null, null, null, !1, u["a"], i);
      t["default"] = a.exports
    },
    "43ec": function (n, t, e) {
      "use strict";
      var u = e("d514"),
        o = e.n(u);
      o.a
    },
    d514: function (n, t, e) {}
  },
  [
    ["124e", "common/runtime", "common/vendor"]
  ]
]);