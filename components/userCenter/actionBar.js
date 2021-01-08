(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    ["components/userCenter/actionBar"], {
        2201: function (t, e, i) {
            "use strict";
            var r;
            i.d(e, "b", (function () {
                return n
            })), i.d(e, "c", (function () {
                return o
            })), i.d(e, "a", (function () {
                return r
            }));
            var n = function () {
                    var t = this,
                        e = t.$createElement;
                    t._self._c
                },
                o = []
        },
        "2b7c": function (t, e, i) {},
        "55fd": function (t, e, i) {
            "use strict";
            (function (t) {
                Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0;
                var i = {
                    name: "",
                    components: {},
                    props: {
                        informmsg: {
                            type: Number
                        },
                        user: {
                            type: Object
                        }
                    },
                    data: function () {
                        return {
                            locdata: [{
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/Checkin.png",
                                titel: "入驻申请",
                                url: "/pages/residence/checkRecord/checkRecord"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/visit.png",
                                titel: "拜访申请",
                                url: "/pages/visitapplication/goRecord/goRecord"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/record.png",
                                titel: "来访记录",
                                url: "/pages/operation/visitRecord/visitRecord"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/scan.png",
                                titel: "回家二维码",
                                url: "/pages/qrcode/qrCode/qrCode"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/Trecords.png",
                                titel: "出行记录",
                                url: "/pages/user/travelRecords/travelRecords"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/address/msgtz.png",
                                titel: "消息通知",
                                url: "/pages/user/userInform/userInform"
                            }, {
                                image: "https://oss.kuaitongkeji.com/static/img/app/user/about.png",
                                titel: "关于快通",
                                url: "/pages/user/versionNumber/versionNumber"
                            }]
                        }
                    },
                    methods: {
                        add: function (e, i) {
                            e.url && t.navigateTo({
                                url: e.url
                            })
                        }
                    },
                    mounted: function () {},
                    onLoad: function () {},
                    filters: {},
                    computed: {},
                    watch: {},
                    directives: {}
                };
                e.default = i
            }).call(this, i("543d")["default"])
        },
        "59bc": function (t, e, i) {
            "use strict";
            var r = i("2b7c"),
                n = i.n(r);
            n.a
        },
        "85bf": function (t, e, i) {
            "use strict";
            i.r(e);
            var r = i("2201"),
                n = i("c853");
            for (var o in n) "default" !== o && function (t) {
                i.d(e, t, (function () {
                    return n[t]
                }))
            }(o);
            i("59bc");
            var s, a = i("f0c5"),
                c = Object(a["a"])(n["default"], r["b"], r["c"], !1, null, "240ca943", null, !1, r["a"], s);
            e["default"] = c.exports
        },
        c853: function (t, e, i) {
            "use strict";
            i.r(e);
            var r = i("55fd"),
                n = i.n(r);
            for (var o in r) "default" !== o && function (t) {
                i.d(e, t, (function () {
                    return r[t]
                }))
            }(o);
            e["default"] = n.a
        }
    }
]);;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/userCenter/actionBar-create-component',
    {
        'components/userCenter/actionBar-create-component': (function (module, exports, __webpack_require__) {
            __webpack_require__('543d')['createComponent'](__webpack_require__("85bf"))
        })
    },
    [
        ['components/userCenter/actionBar-create-component']
    ]
]);