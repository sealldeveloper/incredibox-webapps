/* skadnn12n4nnifngb */
var app=new function(){this.name="Ocean Heart",this.version="Xrun DLC",this.date="2023",this.folder="asset-v1/",this.looptime=5340,this.bpm=90,this.totalframe=256,this.nbpolo=7,this.nbloopbonus=2,this.bonusloopA=!0,this.bonusendloopA=!0,this.recmaxloop=34,this.recminloop=4,this.recmintime=Math.round(this.looptime/1e3)*this.recminloop,this.spritepolo="polo-sprite.png",this.spritepicto="game-picto.png",this.colBck="#210210",this.col0="#B26D3B",this.col1="#c78439",this.col2="#662024",this.col3="#712710",this.col4="#3FOC19",this.animearray=[
{name: "01kick",color: "775A39",uniqsnd:!1},
{name: "02snare",color: "775A39",uniqsnd:!1},
{name: "03click",color: "775A39",uniqsnd:!0},
{name: "04bass",color: "445242",uniqsnd:!1},
{name: "05sword",color: "445242",uniqsnd:!0},
{name: "06accordion",color: "36484D",uniqsnd:!1},
{name: "07flute",color: "36484D",uniqsnd:!1},
{name: "08ocean",color: "762C29",uniqsnd:!1}
],this.bonusarray=[
];for(var n=0,o=this.animearray.length;n<o;n++){var a=this.animearray[n
    ].name;this.animearray[n
    ].soundA=a+"_a",this.animearray[n
    ].soundB=this.animearray[n
    ].uniqsnd?a+"_a":a+"_b",this.animearray[n
    ].anime=a+"-sprite.png",this.animearray[n
    ].animeData=a+".json"
}
};