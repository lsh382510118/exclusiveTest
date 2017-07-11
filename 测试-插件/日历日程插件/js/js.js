/**
 * Created by Dell on 2017/6/12.
 */
!function (a) {
    a.fn.jalendar = function (e) {
        function t() {
            S[1] = N(A);
            var e = new Date;
            e.setFullYear(D, M, 0);
            var t = e.getDay() + C;
            v.find(".header h1").html(o[l.lang][M] + " " + D + '<div class="total-bar"></div>'), v.find(".day").html("&nbsp;").removeAttr("data-date").removeClass("this-month have-event disable-selecting");
            for (var r = 0; r < 42 - (t + S[M]); r++)v.find(".day").eq(t + S[M] + r).html("<span>" + (r + 1) + "</span>");
            for (var r = 0; r < t; r++) {
                var d = void 0 == S[M - 1] ? S[11] : S[M - 1];
                v.find(".day").eq(r).html("<span>" + (d - t + (r + 1)) + "</span>")
            }
            for (var r = 1; r <= S[M]; r++) {
                t++;
                var i, s = M + 1;
                l.dayWithZero === !0 && (r = r < 10 ? "0" + r : r), l.monthWithZero === !0 && (s = M < 9 ? "0" + (M + 1) : M + 1), "dd-mm-yyyy" == l.dateType ? i = r + "-" + s + "-" + D : "mm-dd-yyyy" == l.dateType ? i = s + "-" + r + "-" + D : "yyyy-mm-dd" == l.dateType ? i = D + "-" + s + "-" + r : "yyyy-dd-mm" == l.dateType && (i = D + "-" + r + "-" + s), "linker" == l.type ? v.find(".day").eq(t - 1).addClass("this-month").attr("data-date", i).html('<span><a href="' + l.customUrl + i + '">' + r + "</a></span>") : v.find(".day").eq(t - 1).addClass("this-month").attr("data-date", i).html("<span>" + r + "</span>");
                var y = Math.round(new Date(D + "/" + M + "/" + r + " 00:00:00").getTime() / 1e3), u = Math.round(new Date(m + "/" + p + "/" + h + " 00:00:00").getTime() / 1e3);
                1 == l.selectingBeforeToday && y > u && v.find(".day").eq(t - 1).addClass("disable-selecting"), 1 == l.selectingAfterToday && y < u && v.find(".day").eq(t - 1).addClass("disable-selecting"), v.find(".days").attr("data-month", s).attr("data-year", D)
            }
            M == w.getMonth() && D == w.getFullYear() ? v.find(".day.this-month").removeClass("today").eq(k - 1).addClass("today") : v.find(".day.this-month").removeClass("today").attr("style", ""), v.find(".added-event").each(function (e) {
                a(this).attr("data-id", e);
                var t = a(this).attr("data-date");
                var myid = a(this).attr("data-myid");
                v.find('.this-month[data-date="' + t + '"]').append(c("div", "event-single").attr("data-id", e).attr('id',myid).append(c("a", "").attr("href", a(this).attr("data-link")).attr("target", "blank").text(a(this).attr("data-title")))), v.find(".day").has(".event-single").addClass("have-event")
            }), n(), null !== l.dayColor && v.find(".day span, .day span a").css({color: l.dayColor}), null !== l.titleColor && v.find(".header h1, .header .prv-m, .header .nxt-m, .event-single p, h3, .close-button").css({color: l.titleColor}), null !== l.weekColor && v.find("h2").css({color: l.weekColor}), null !== l.todayColor && v.find(".day.this-month.today span, .day.this-month.today span a").css({color: l.todayColor}), "#fff" != l.color && "#ffffff" != l.color && "white" != l.color || v.find(".header h1, .header .prv-m, .header .nxt-m, .day.today span, h2, .event-single p, h3, .close-button").css({"text-shadow": "none"})
        }

        function n() {
            var e = v.find(".this-month .event-single").length;
            0 == e && v.find(".total-bar").hide(0), v.find(".total-bar").text(e), v.find(".events h3 span").text(a(".jalendar .day.selected .event-single").length)
        }

        function r() {
            v.find(".day").removeClass("selected").removeAttr("style"), v.find(".add-event").removeClass("selected").height(0)
        }

        function d() {
            if (v.find(".day").removeClass("first-range range last-range"), null !== E)if (0 == v.find('[data-date="' + I.val() + '"]').length) {
                if (j < Number(v.find(".days").attr("data-month")) && z >= Number(v.find(".days").attr("data-year")) || z < Number(v.find(".days").attr("data-year")) ? E = 0 : (j > Number(v.find(".days").attr("data-month")) && z <= Number(v.find(".days").attr("data-year")) || z > Number(v.find(".days").attr("data-year"))) && (E = 42), null !== F) {
                    if (z == L && j == x)return !1;
                    var a = parseInt(v.find(".days").attr("data-year"), 10), e = parseInt(v.find(".days").attr("data-month"), 10);
                    (z < a && L > a || x > e && L >= a && z < a || j < e && z == a && x > e && L == a || j < e && L > a && z == a || j < e && z == a && x > e && L >= a) && v.find(".day").addClass("range")
                }
            } else E = v.find('[data-date="' + I.val() + '"]').index()
        }

        function i() {
            v.find('.day[data-date="' + I.val() + '"]').addClass("first-range"), v.find('.day[data-date="' + P.val() + '"]').addClass("last-range"), v.find('.day[data-date="' + I.val() + '"]').nextUntil('.day[data-date="' + P.val() + '"]').addClass("range"), v.find('.day[data-date="' + P.val() + '"]').length > 0 && (v.find(".day.first-range").length > 0 ? v.find(".day.first-range").nextUntil(".day.last-range").addClass("range") : v.find(".day.last-range").prevUntil(".day:eq(0)").addClass("range"))
        }

        var l = a.extend({
            customDay: new Date,
            color: "#3aa4d1",
            color2: "",
            lang: "EN",
            type: "",
            customUrl: "#",
            dateType: "dd-mm-yyyy",
            dayWithZero: !0,
            monthWithZero: !0,
            sundayStart: !1,
            dayColor: null,
            titleColor: null,
            weekColor: null,
            todayColor: null,
            selectingBeforeToday: !1,
            selectingAfterToday: !1,
            done: null
        }, e), s = {}, o = {}, y = {}, u = {};
        s.EN = new Array("Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"), s.TR = new Array("Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Pzr"), s.ES = new Array("Lun", "Mar", "Mié", "Jue", "Vie", "Såb", "Dom"), s.DE = new Array("Mon", "Die", "Mit", "Don", "Fre", "Sam", "Son"), s.FR = new Array("Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"), s.IT = new Array("Lun", "Mar", "Mer", "Gio", "Ven", "Sab", "Dim"), s.FIL = new Array("Lun", "Mar", "Miy", "Huw", "Biy", "Sab", "Lin"), s.RU = new Array("Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"), s.NL = new Array("Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"), s.ZH = new Array("星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期天"), s.HI = new Array("रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"), s.PT = new Array("Se", "Te", "Qu", "Qu", "Se", "Sa", "Do"), s.PL = new Array("po", "wt", "sr", "cz", "pi", "so", "ni"), o.EN = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"), o.TR = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"), o.ES = new Array("Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"), o.DE = new Array("Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"), o.FR = new Array("Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aoút", "Septembre", "Octobre", "Novembre", "Décembre"), o.IT = new Array("Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Guigno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"), o.FIL = new Array("Enero", "Pebrero", "Marso", "Abril", "Mayo", "Hunyo", "Hulyo", "Agosto", "Setyembre", "Oktubre", "Nobyembre", "Disyembre"), o.RU = new Array("Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"), o.NL = new Array("januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"), o.ZH = new Array("一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"), o.HI = new Array("जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"), o.PT = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"), o.PL = new Array("styczen", "luty", "marzec", "kwiecien", "maj", "czerwiec", "lipiec", "sierpien", "wrzesien", "pazdziernik", "listopad", "grudzien"), y.EN = "Event(s)", y.TR = "Etkinlik", y.ES = "Evento(s)", y.DE = "Tätigkeit", y.FR = "Activité(s)", y.IT = "Attività", y.FIL = "Aktibidad", y.RU = "Деятельность", y.NL = "Activiteit(en)", y.ZH = "事件", y.HI = "परिणाम", y.PT = "Eventos", y.PL = "Działalność", u.EN = "Close", u.TR = "Kapat", u.ES = "Cerrar", u.DE = "Schließen", u.FR = "Fermer", u.IT = "Chiudere", u.FIL = "Isara", u.RU = "Закрывать", u.NL = "Sluiten", u.ZH = "關閉", u.HI = "बंद करे", u.PT = "Fechar", u.PL = "Zamknąć";
        var f = new Date, h = f.getDate(), p = f.getMonth(), m = f.getFullYear(), v = a(this), c = function (e, t) {
            return a(document.createElement(e)).addClass(t)
        }, g = "" === l.color2 ? l.color : l.color2;
        v.append(a('<input type="hidden" class="data1" /><input type="hidden" class="data2" />'), c("div", "jalendar-container").append(c("div", "jalendar-pages").append(c("div", "header").append(c("a", "prv-m").append(c("i", "fa fa-angle-left")), c("h1"), c("a", "nxt-m").append(c("i", "fa fa-angle-right")), c("div", "day-names")), c("div", "days"), c("div", "add-event").append(c("div", "events").append(c("h3", "").html("<span></span> " + y[l.lang]), c("div", "events-list")), c("div", "close-button").text(u[l.lang]))).attr("style", "background-color:" + l.color + "; background: -webkit-gradient(linear, left top, left bottom, from(" + l.color + "), to(" + g + ")); background: -webkit-linear-gradient(top, " + l.color + ", " + g + "); background : -moz-linear-gradient(top, " + l.color + ", " + g + "); background: -ms-linear-gradient(top, " + l.color + ", " + g + "); background: -o-linear-gradient(top, " + l.color + ", " + g + ");"))), "range" == l.type && v.find(".jalendar-pages").addClass("range").append(c("input", "first-range-data").attr({type: "hidden"}), c("input", "last-range-data").attr({type: "hidden"}));
        for (var b = 0; b < 42; b++)v.find(".days").append(c("div", "day"));
        var C = 0;
        1 == l.sundayStart && (v.find(".day-names").append(c("h2").text(s[l.lang][6])), C = 1);
        for (var b = C; b < 7; b++)v.find(".day-names").append(c("h2").text(s[l.lang][b - C]));
        var A, w = new Date(l.customDay), D = w.getFullYear(), k = w.getDate(), M = w.getMonth(), T = function (a) {
            var e = new Date;
            return e.setYear(a), e.setMonth(1), e.setDate(29), 29 == e.getDate()
        }, N = function (a) {
            return a = T(D) === !0 ? 29 : 28
        }, S = new Array(31, N(A), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), E = null, F = null, j = null, x = null, z = null, L = null;
        t();
        var J = new Array(v.find(".prv-m"), v.find(".nxt-m")), I = (v.find(".jalendar .close-button"), v.find("input.first-range-data")), P = v.find("input.last-range-data");
        J[1].on("click", function () {
            M >= 11 ? (M = 0, D++) : M++, t(), r(), "range" == l.type && (d(), i());
            console.info('prev');
        }), J[0].on("click", function () {
            dayClick = v.find(".this-month"), 0 === M ? (M = 11, D--) : M--, t(), r(), "range" == l.type && (d(), i());
            console.info('next');
        }), v.on("click", ".close-button", function (a) {
            a.preventDefault(), v.find(".add-event").removeClass("selected").height(0), v.find(".this-month.selected").removeClass("selected")
        }), v.on("click", ".this-month:not(.disable-selecting)", function () {
            function e(a) {
                a.parent().find(".day").removeClass("first-range").removeClass("range").removeClass("last-range"), a.addClass("first-range"), I.val(a.attr("data-date")), E = v.find('[data-date="' + v.find(".first-range").attr("data-date") + '"]').index(), j = Number(v.find(".days").attr("data-month")), z = Number(v.find(".days").attr("data-year")), F = null, P.val("")
            }

            function t(a) {
                a.addClass("last-range"), P.val(a.attr("data-date")), F = v.find(".last-range").index(), x = Number(v.find(".days").attr("data-month")), L = Number(v.find(".days").attr("data-year"))
            }

            if ("selector" == l.type)return v.find("input.data1").val(a(this).data("date")), a(this).parent().find(".selected").removeClass("selected"), a(this).addClass("selected"), v.parent().is(".jalendar-input") && (v.parent().find("input").removeClass("selected"), v.parent(".jalendar-input").find("input").val(a(this).data("date"))), null !== l.done && l.done.call(this), !1;
            if ("range" == l.type) {
                a(this).parent().find(".first-range"), a(this).parent().find(".last-range");
                if (null !== E)if (null !== F)e(a(this)); else {
                    if (E > a(this).index())return e(a(this)), !1;
                    t(a(this)), v.find("input.data1").val(I.val()), v.find("input.data2").val(P.val()), v.parent().is(".jalendar-input") && (v.parent().find("input").removeClass("selected"), v.parent(".jalendar-input").find("input").val(v.find("input.data1").val() + ", " + v.find("input.data2").val())), null !== l.done && l.done.call(this)
                } else e(a(this));
                return v.on({
                    mouseenter: function () {
                        return null !== E && void("" === P.val() && (v.find(".day").removeClass("range last-range"), a(this).index() > E && a(this).hasClass("this-month") && (a(this).addClass("last-range"), a(this).parent().find(".day:eq(" + E + ")").nextUntil(".this-month.last-range").addClass("range"))))
                    }, mouseleave: function () {
                        "" === P.val() && a(this).parent().find(".day").removeClass("last-range").removeClass("range")
                    }
                }, ".range .day.this-month"), !1
            }
            var n = a(this).find(".event-single");
            v.find(".events .event-single").remove(), r(), "" === l.type && (v.find("input.data1").val(a(this).data("date")), a(this).addClass("selected"), v.find(".add-event").find(".events-list").html(n.clone()), v.parent().is(".jalendar-input") && v.parent(".jalendar-input").find("input").val(a(this).data("date")), v.find(".events .event-single").length >= 0 && v.find(".events h3 span").html(v.find(".events .event-single").size()), v.find(".add-event").addClass("selected").height(v.find(".add-event .events").height() + 59))
        }), v.parent().is(".jalendar-input") && v.parent(".jalendar-input").find('input[type="text"], .jalendar').on("click", function (e) {
            e.stopPropagation(), a(this).addClass("selected")
        }), a("html").on("click", function () {
            a(".jalendar-input input").removeClass("selected")
        })
    }
}(jQuery);

