/* take off your clothes */
var app = new function() {
    this.name = "Balls", this.version = "V balls", this.date = "2023", this.folder = "asset-v1/", this.looptime = 8e3, this.bpm = 120, this.totalframe = 384, this.nbpolo = 7, this.nbloopbonus = 2, this.bonusloopA = !0, this.bonusendloopA = !0, this.recmaxloop = 34, this.recminloop = 4, this.recmintime = Math.round(this.looptime / 1e3) * this.recminloop, this.spritepolo = "polo-sprite.png", this.spritepicto = "game-picto.png", this.colBck = "#0f1521", this.col0 = "#935a34", this.col1 = "#EFB04A", this.col2 = "#775036", this.col3 = "#4e2911", this.col4 = "#422101", this.animearray = [{
        name: "1_ballskick",
        color: "53A86A",
        uniqsnd: !1
    }, {
        name: "2_ballssnap",
        color: "53A86A",
        uniqsnd: !1
    }, {
        name: "3_ballscymbals",
        color: "53A86A",
        uniqsnd: !0
    }, {
        name: "4_808balls",
        color: "9454E3",
        uniqsnd: !1
    }, {
        name: "5_bassyballs",
        color: "9454E3",
        uniqsnd: !1
    }, {
        name: "6_ballsarp",
        color: "A00035",
        uniqsnd: !0
    }, {
        name: "7_balls",
        color: "EFB04A",
        uniqsnd: !1
    }], this.bonusarray = [{
        name: "PFB Balls",
        src: "v1-b1-pfbballs-hb.mp4",
        code: "1,2,4,6,7",
        sound: "bonus-pfbballs",
        aspire: "aspire"
    }];
 	  for (var n = 0, o = this.animearray.length; n < o; n++) {
        var a = this.animearray[n].name;
        this.animearray[n].soundA = a + "_a", this.animearray[n].soundB = this.animearray[n].uniqsnd ? a + "_a" : a + "_b", this.animearray[n].anime = a + "-sprite.png", this.animearray[n].animeData = a + ".json"
    }
};
