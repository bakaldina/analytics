// var chart = AmCharts.makeChart("chartdiv", {
//   type: "serial",
//   theme: "light",
//   autoMargins: false,
//   marginLeft: 60,
//   marginRight: 8,
//   marginTop: 10,
//   marginBottom: 26,
//   legend: {
//     autoMargins: false,
//     equalWidths: true,
//     horizontalGap: 10,
//     markerSize: 10,
//     useGraphSettings: true,
//     valueWidth: 0
//   },
//   dataProvider: [
//     {
//       year: 2004,
//       resources: 42,
//       federal: 5.2,
//       subject: 0
//     },
//     {
//       year: 2005,
//       resources: 62,
//       federal: 10.7,
//       subject: 0
//     },
//     {
//       year: 2006,
//       resources: 94,
//       federal: 16.4,
//       subject: 0
//     },
//     {
//       year: 2007,
//       resources: 149.1,
//       federal: 19.7,
//       subject: 2.2
//     },
//     {
//       year: 2008,
//       resources: 199.5,
//       federal: 22.0,
//       subject: 3.6
//     },
//     {
//       year: 2009,
//       resources: 145.7,
//       federal: 18.9,
//       subject: 1.3
//     },
//     {
//       year: 2010,
//       resources: 169.8,
//       federal: 20.6,
//       subject: 0.6
//     },
//     {
//       year: 2011,
//       resources: 204.6,
//       federal: 20.0,
//       subject: 0.1
//     },
//     {
//       year: 2012,
//       resources: 224.1,
//       federal: 27.0,
//       subject: 0.1
//     },
//     {
//       year: 2013,
//       resources: 242.4,
//       federal: 32.1,
//       subject: 0.1
//     },
//     {
//       year: 2014,
//       resources: 345.5,
//       federal: 25.7,
//       subject: 0.2
//     },
//     {
//       year: 2015,
//       resources: 299.0,
//       federal: 33.4,
//       subject: 0
//     },
//     {
//       year: 2016,
//       resources: 295.0,
//       federal: 33.4,
//       subject: 0
//     }
//   ],
//   valueAxes: [
//     {
//       stackType: "regular",
//       title: "млрд. руб.",
//       axisAlpha: 1,
//       gridAlpha: 0
//     }
//   ],
//   startDuration: 2,
//   graphs: [
//     {
//       balloonText:
//         "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b> <b>млрд</b></span>",
//       fillAlphas: 0.8,
//       lineAlpha: 0.3,
//       title: "Средства недропользователей",
//       type: "column",
//       color: "#000000",
//       valueField: "resources"
//     },
//     {
//       balloonText:
//         "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b> <b>млрд</b></span>",
//       fillAlphas: 0.8,
//       lineAlpha: 0.3,
//       title: "Федеральный бюджет",
//       type: "column",
//       color: "#000000",
//       valueField: "federal"
//     },
//     {
//       balloonText:
//         "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b> <b>млрд</b></span>",
//       fillAlphas: 0.8,
//       lineAlpha: 0.3,
//       title: "Бюджет субъектов РФ",
//       type: "column",
//       color: "#000000",
//       valueField: "subject"
//     }
//   ],
//   categoryField: "year",
//   categoryAxis: {
//     gridPosition: "start",
//     axisAlpha: 1,
//     gridAlpha: 0,
//     position: "left"
//   },
//   export: {
//     enabled: true
//   }
// });

AmCharts.makeChart("chartdiv", {
  type: "serial",
  categoryField: "category",
  columnWidth: 0.84,
  colors: ["#67b7dc", "#fdd400"],
  startDuration: 1,
  startEffect: "bounce",
  fontSize: 16,
  theme: "light",
  categoryAxis: {
    gridPosition: "start"
  },
  trendLines: [],
  graphs: [
    {
      balloonText: "<b>[[title]]</b> в [[category]] г.: <b>[[value]]%</b>",
      fillAlphas: 1,
      id: "AmGraph-1",
      tabIndex: 5,
      fontSize: 10,
      title: "Рудные, включая комплексные",
      type: "column",
      labelText: "[[value]]%",
      valueField: "indigenous"
    },
    {
      balloonText: "<b>[[title]]</b> в [[category]] г.: <b>[[value]]%</b>",
      fillAlphas: 1,
      id: "AmGraph-2",
      title: "Россыпные",
      fontSize: 10,
      labelText: "[[value]]%",
      type: "column",
      valueField: "scattered"
    }
  ],
  guides: [],
  valueAxes: [
    {
      id: "ValueAxis-1",
      stackType: "100%",
      offset: 1,
      title: "%",
      titleBold: true
    }
  ],
  allLabels: [],
  balloon: {},
  legend: {
    enabled: true,
    labelWidth: 0,
    titleBold: true,
    useGraphSettings: true
  },
  titles: [
    {
      bold: true,
      id: "Title-1",
      size: 24,
      tabIndex: 0,
      text:
        "Динамика запасов золота категорий А+В+С1 в рудных и россыпных месторождениях в 1991–2015 гг., %"
    }
  ],
  dataProvider: [
    {
      category: "1991",
      indigenous: "74",
      scattered: "26"
    },
    {
      category: "1993",
      indigenous: "80",
      scattered: "20"
    },
    {
      category: "1998",
      indigenous: "74",
      scattered: "26"
    },
    {
      category: "1999",
      indigenous: "82",
      scattered: "18"
    },
    {
      category: "2000",
      indigenous: "80",
      scattered: "20"
    },
    {
      category: "2002",
      indigenous: "76.7",
      scattered: "23.3"
    },
    {
      category: "2003",
      indigenous: "76.9",
      scattered: "23.1"
    },
    {
      category: "2004",
      indigenous: "77.1",
      scattered: "22.9"
    },
    {
      category: "2005",
      indigenous: "77.5",
      scattered: "22.5"
    },
    {
      category: "2006",
      indigenous: "85.7",
      scattered: "14.3"
    },
    {
      category: "2007",
      indigenous: "87.4",
      scattered: "12.6"
    },
    {
      category: "2008",
      indigenous: "87.9",
      scattered: "12.1"
    },
    {
      category: "2009",
      indigenous: "85.2",
      scattered: "14.8"
    },
    {
      category: "2010",
      indigenous: "85.6",
      scattered: "14.4"
    },
    {
      category: "2011",
      indigenous: "86",
      scattered: "14"
    },
    {
      category: "2012",
      indigenous: "86.2",
      scattered: "13.8"
    },
    {
      category: "2013",
      indigenous: "86.4",
      scattered: "13.6"
    },
    {
      category: "2014",
      indigenous: "86.6",
      scattered: "13.4"
    },
    {
      category: "2015",
      indigenous: "87",
      scattered: "13"
    }
  ]
});

AmCharts.makeChart("chartdiv1", {
  type: "serial",
  categoryField: "category",
  theme: "light",
  startDuration: 1,
  fontSize: 16,
  categoryAxis: {
    gridPosition: "start"
  },
  trendLines: [],
  balloon: {
    horizontalPadding: 10,
    verticalPadding: 8,
    color: "#000"
  },
  legend: {
    autoMargins: false,
    equalWidths: true,
    horizontalGap: 10,
    markerSize: 10,
    useGraphSettings: true,
    valueWidth: 0
  },
  dataProvider: [
    {
      year: 1991,
      expenses: 179.27,
      income: 325
    },
    {
      year: 1993,
      expenses: 179.27,
      income: 150
    },
    {
      year: 1995,
      expenses: 147.75,
      income: 140
    },
    {
      year: 1997,
      expenses: 144,
      income: 102
    },
    {
      year: 1998,
      expenses: 144,
      income: 89
    },
    {
      year: 1999,
      expenses: 146,
      income: 51
    },
    {
      year: 2000,
      expenses: 143,
      income: 62
    },
    {
      year: 2001,
      expenses: 189,
      income: 91
    },
    {
      year: 2002,
      expenses: 197,
      income: 183
    },
    {
      year: 2003,
      expenses: 201,
      income: 98
    },
    {
      year: 2004,
      expenses: 199,
      income: 121
    },
    {
      year: 2005,
      expenses: 186,
      income: 148
    },
    {
      year: 2006,
      expenses: 213,
      income: 1583
    },
    {
      year: 2007,
      expenses: 201,
      income: 171
    },
    {
      year: 2008,
      expenses: 190.4,
      income: 419
    },
    {
      year: 2009,
      expenses: 235.1,
      income: 261
    },
    {
      year: 2010,
      expenses: 265.5,
      income: 280
    },
    {
      year: 2011,
      expenses: 262.2,
      income: 382.6
    },
    {
      year: 2012,
      expenses: 260.7,
      income: 284.7
    },
    {
      year: 2013,
      expenses: 324,
      income: 302.3
    },
    {
      year: 2014,
      expenses: 311.8,
      income: 278.9
    },
    {
      year: 2015,
      expenses: 286.6,
      income: 472.5
    },
    {
      year: 2016,
      expenses: 324,
      income: 428
    }
  ],
  valueAxes: [
    {
      stackType: "regular",
      autoGridCount: "true",
      axisAlpha: 1,
      gridAlpha: 0,
      title: "тонны золота"
    }
  ],
  startDuration: 1,
  titles: [
    {
      bold: true,
      id: "Title-1",
      size: 24,
      tabIndex: 0,
      text:
        "Динамика добычи золота и прироста его запасов категорий А+В+С1 в результате геологоразведочных работ в 1991-2015 гг., тонн"
    }
  ],
  graphs: [
    {
      alphaField: "alpha",
      balloonText:
        "<b>[[title]]</b> <br> <span style='font-size:14px'>[[category]]: <b>[[value]] </b> [[additional]]</span>",
      fillAlphas: 0.8,
      lineAlpha: 0.3,
      title: "Объем приращенных запасов золота (ABC1) в тоннах",
      type: "column",
      valueField: "income",
      dashLengthField: "dashLengthColumn"
    },
    {
      id: "graph2",
      balloonText:
        "<b>[[title]]</b> <br> <span style='font-size:14px'>[[category]]: <b>[[value]] </b> [[additional]]</span>",
      bullet: "round",
      tabIndex: 5,
      lineThickness: 3,
      bulletSize: 7,
      bulletBorderAlpha: 1,
      bulletColor: "#FFFFFF",
      useLineColorForBulletBorder: true,
      bulletBorderThickness: 3,
      fillAlphas: 0,
      lineAlpha: 1,
      title: "Объем добычи золота в тоннах",
      valueField: "expenses",
      dashLengthField: "dashLengthLine"
    }
  ],
  categoryField: "year",
  categoryAxis: {
    gridPosition: "start",
    axisAlpha: 1,
    gridAlpha: 0,
    tickLength: 1
  },
  export: {
    enabled: true
  }
});

AmCharts.makeChart("chartdiv2", {
  type: "serial",
  categoryField: "category",
  columnSpacing: 0,
  startDuration: 1,
  fontSize: 16,
  theme: "light",
  categoryAxis: {
    gridPosition: "start"
  },
  trendLines: [],
  graphs: [
    {
      balloonText:
        "<b>[[title]]</b> в тоннах <br>[[category]]: <b>[[value]]</b>",
      fillAlphas: 1,
      id: "AmGraph-1",
      title: "Запасы категорий A+B+C1",
      type: "column",
      fontSize: 10,
      tabIndex: 5,
      labelText: "[[value]]",
      valueField: "abc1"
    },
    {
      balloonText:
        "<b>[[title]]</b> в тоннах <br>[[category]]: <b>[[value]]</b>",
      fillAlphas: 1,
      id: "AmGraph-2",
      title: "Запасы категорий C2",
      fontSize: 10,
      tabIndex: 5,
      labelText: "[[value]]",
      type: "column",
      valueField: "c2"
    }
  ],
  guides: [],
  valueAxes: [
    {
      id: "ValueAxis-1",
      title: "тонн"
    }
  ],
  allLabels: [],
  balloon: {},
  legend: {
    enabled: true,
    useGraphSettings: true
  },
  titles: [
    {
      id: "Title-1",
      size: 24,
      text: "Динамика движения запасов в 1993–2015 гг., тонн"
    }
  ],
  dataProvider: [
    {
      category: "1993",
      c2: "2411",
      abc1: "6623"
    },
    {
      category: "1995",
      c2: "2398",
      abc1: "6602"
    },
    {
      category: "1997",
      c2: "2433",
      abc1: "6470"
    },
    {
      category: "1999",
      c2: "2441",
      abc1: "6263"
    },
    {
      category: "2001",
      c2: "2492",
      abc1: "6058"
    },
    {
      category: "2002",
      c2: "2409",
      abc1: "5934"
    },
    {
      category: "2003",
      c2: "2417",
      abc1: "5812"
    },
    {
      category: "2004",
      c2: "2435",
      abc1: "5716"
    },
    {
      category: "2005",
      c2: "2741",
      abc1: "5677"
    },
    {
      category: "2006",
      c2: "2871",
      abc1: "6918"
    },
    {
      category: "2007",
      c2: "3388",
      abc1: "7529"
    },
    {
      category: "2008",
      c2: "3339",
      abc1: "7861"
    },
    {
      category: "2009",
      c2: "3974",
      abc1: "7958"
    },
    {
      category: "2010",
      c2: "4217",
      abc1: "7982"
    },
    {
      category: "2011",
      c2: "4407",
      abc1: "8098"
    },
    {
      category: "2012",
      c2: "4698",
      abc1: "8047"
    },
    {
      category: "2013",
      c2: "4860",
      abc1: "8053"
    },
    {
      category: "2014",
      c2: "5128",
      abc1: "8006"
    },
    {
      category: "2015",
      c2: "5658",
      abc1: "8160"
    }
  ]
});

AmCharts.makeChart("map", {
  type: "map",
  pathToImages: "http://www.amcharts.com/lib/3/images/",
  addClassNames: true,
  fontSize: 15,
  color: "#000000",
  projection: "mercator",
  backgroundAlpha: 1,
  backgroundColor: "rgba(255,255,255,1)",
  dataProvider: {
    map: "russiaLow",
    getAreasFromMap: true,
    images: [
      {
        top: 40,
        left: 60,
        width: 80,
        height: 40,
        pixelMapperLogo: true,
        imageURL: "http://pixelmap.amcharts.com/static/img/logo-black.svg",
        url: "http://www.amcharts.com"
      },
      {
        selectable: true,
        longitude: 93.8855,
        latitude: 65.4803,
        label: "43,2",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 20.8
      },
      {
        selectable: true,
        longitude: 124.6047,
        latitude: 65.9476,
        label: "23,1",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 18
      },
      {
        selectable: true,
        longitude: 169.137,
        latitude: 66.1687,
        label: "4,6",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 16.1
      },
      {
        selectable: true,
        longitude: 148.8885,
        latitude: 62.4153,
        label: "17,2",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 125.6284,
        latitude: 53.1884,
        label: "16,4",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 133.155,
        latitude: 45.2158,
        label: "0,4",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,0.8)",
        labelRollOverColor: "#000000",
        labelFontSize: 12.2
      },
      {
        selectable: true,
        longitude: 129.8084,
        latitude: 47.7792,
        label: "0,1",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,0.8)",
        labelRollOverColor: "#000000",
        labelFontSize: 13.6
      },
      {
        selectable: true,
        longitude: 140.7578,
        latitude: 48.5875,
        label: "0,2",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,0.8)",
        labelRollOverColor: "#000000",
        labelFontSize: 13.3
      },
      {
        selectable: true,
        longitude: 113.0049,
        latitude: 51.2409,
        label: "8,1",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 108.9796,
        latitude: 53.6259,
        label: "6,5",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 102.1715,
        latitude: 55.3841,
        label: "17,4",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 91.2145,
        latitude: 50.8598,
        label: "1,6",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 89.2735,
        latitude: 52.7927,
        label: "1,2",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 9.5
      },
      {
        selectable: true,
        longitude: 85.9024,
        latitude: 50.6297,
        label: "0,6",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 12
      },
      {
        selectable: true,
        longitude: 80.2651,
        latitude: 52.6604,
        label: "0,2",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 85.0351,
        latitude: 54.3898,
        label: "0,7",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 12.8
      },
      {
        selectable: true,
        longitude: 78.2053,
        latitude: 55.3662,
        label: "0,3",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 13.3
      },
      {
        selectable: true,
        longitude: 68.4438,
        latitude: 60.8278,
        label: "0,2",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 59.6672,
        latitude: 58.1557,
        label: "11,2",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 53.9074,
        latitude: 59.0573,
        label: "0,02",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 12.5
      },
      {
        selectable: true,
        longitude: 55.114,
        latitude: 53.9641,
        label: "7,1",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 12
      },
      {
        selectable: true,
        longitude: 59.4238,
        latitude: 54.9235,
        label: "11,7",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 10.3
      },
      {
        selectable: true,
        longitude: 52.729,
        latitude: 52.0682,
        label: "8,1",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 11.1
      },
      {
        selectable: true,
        longitude: 41.4341,
        latitude: 43.1047,
        label: "0,5",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,0.8)",
        labelRollOverColor: "#000000",
        labelFontSize: 10
      },
      {
        selectable: true,
        longitude: 43.9446,
        latitude: 42.1988,
        label: "0,001",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,0.8)",
        labelRollOverColor: "#000000",
        labelFontSize: 8.7
      },
      {
        selectable: true,
        longitude: 31.9143,
        latitude: 67.6657,
        label: "0,1",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 13.3
      },
      {
        selectable: true,
        longitude: 105.195,
        latitude: 80.5448,
        label: "добыча",
        labelPosition: "right",
        labelColor: "rgba(141,94,7,0.8)",
        labelRollOverColor: "#a26c08",
        labelFontSize: 27.9
      },
      {
        selectable: true,
        longitude: 134.4632,
        latitude: 49.9188,
        label: "17,7",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 297449413782.5486,
        latitude: 501955659055.0943,
        label: "Au",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,1)",
        labelRollOverColor: "#000000",
        labelFontSize: 22.7
      },
      {
        selectable: true,
        longitude: 165.6171,
        latitude: 274.3768,
        label: "Text...",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,1)",
        labelRollOverColor: "rgba(0,0,0,1)",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: 334969272234754100000,
        latitude: -453291688572337900000,
        label: "Au",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,0.8)",
        labelRollOverColor: "#000000",
        labelFontSize: 24.9
      },
      {
        selectable: true,
        longitude: -71854111.4001,
        latitude: 149772714.7698,
        label: "Au",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,0.8)",
        labelRollOverColor: "#000000",
        labelFontSize: 24.6
      },
      {
        selectable: true,
        longitude: 139.1316,
        latitude: 54.601,
        label: "2,5",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        selectable: true,
        longitude: -2012472212316604,
        latitude: 30683422358105556,
        label: "Au",
        labelPosition: "right",
        labelColor: "rgba(9,8,8,0.8)",
        labelRollOverColor: "#0a0909",
        labelFontSize: 48
      },
      {
        selectable: true,
        longitude: 109.5357,
        latitude: 81.4149,
        label: "Au",
        labelPosition: "right",
        labelColor: "rgba(9,8,8,0.8)",
        labelRollOverColor: "#0a0909",
        labelFontSize: 26.8
      },
      // {
      //   selectable: true,
      //   longitude: 89.9136,
      //   latitude: 69.6076,
      //   svgPath:
      //     "M3.5,13.277C3.5,6.22,9.22,0.5,16.276,0.5C23.333,0.5,29.053,6.22,29.053,13.277C29.053,14.54,28.867,15.759,28.526,16.914C26.707,24.271,16.219,32.5,16.219,32.5C16.219,32.5,4.37,23.209,3.673,15.542C3.673,15.542,3.704,15.536,3.704,15.536C3.572,14.804,3.5,14.049,3.5,13.277C3.5,13.277,3.5,13.277,3.5,13.277M16.102,16.123C18.989,16.123,21.329,13.782,21.329,10.895C21.329,8.008,18.989,5.668,16.102,5.668C13.216,5.668,10.876,8.008,10.876,10.895C10.876,13.782,13.216,16.123,16.102,16.123C16.102,16.123,16.102,16.123,16.102,16.123",
      //   color: "rgba(255,255,255,0.8)",
      //   scale: 1
      // },
      // {
      //   selectable: true,
      //   longitude: 87.6034,
      //   latitude: 67.5382,
      //   label: "блабла",
      //   labelPosition: "right",
      //   labelColor: "rgba(255,255,255,0.8)",
      //   labelRollOverColor: "#ffffff",
      //   labelFontSize: 10.3
      // },
      {
        selectable: true,
        longitude: 156.5856,
        latitude: 55.9815,
        label: "2,5",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      }
    ],
    areas: [
      {
        id: "RU-AD",
        title: "Респ. Адыгея",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-ALT",
        title: "Алтайский край",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-AMU",
        title: "Амурская обл.",
        color: "rgba(111,38,38,0.8)"
      },
      {
        id: "RU-ARK",
        title: "Архангельская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-AST",
        title: "Астраханская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-BA",
        title: "Респ. Башкоторстан",
        color: "rgba(198,19,19,0.8)"
      },
      {
        id: "RU-BEL",
        title: "Белгородская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-BRY",
        title: "Брянская область",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-BU",
        title: "Респ. Бурятия",
        color: "rgba(198,19,19,0.8)"
      },
      {
        id: "RU-CE",
        title: "Респ. Чечня",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-CHE",
        title: "Челябинская обл.",
        color: "rgba(198,19,19,0.8)"
      },
      {
        id: "RU-CHU",
        title: "Чукотский АО",
        color: "rgba(172,94,5,0.8)"
      },
      {
        id: "RU-CU",
        title: "Чувашская Респ.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-DA",
        title: "Респ. Дагестан",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-AL",
        title: "Респ. Алтай",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-IRK",
        title: "Иркутская обл.",
        color: "rgba(111,38,38,0.8)"
      },
      {
        id: "RU-IVA",
        title: "Ивановская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KB",
        title: "Респ. Кабардино-Балкария",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KC",
        title: "Карачаево-Черкесская Респ.",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-KDA",
        title: "Краснодарский край",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KEM",
        title: "Кемеровская обл.",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-KLU",
        title: "Калужская область",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KHA",
        title: "Хабаровский край",
        color: "rgba(111,38,38,0.8)"
      },
      {
        id: "RU-KR",
        title: "Респ. Карелия",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KK",
        title: "Респ. Хакасия",
        color: "rgba(172,94,5,0.8)"
      },
      {
        id: "RU-KL",
        title: "Респ. Калмыкия",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KHM",
        title: "Ханты-Мансийский АО - Югра",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-KGD",
        title: "Калининградская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KO",
        title: "Респ. Коми",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KAM",
        title: "Камчатский край",
        color: "rgba(172,94,5,0.8)"
      },
      {
        id: "RU-KRS",
        title: "Курская область",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KOS",
        title: "Костромская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KU",
        title: "Курганская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KIR",
        title: "Кировская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KYA",
        title: "Красноярский край",
        color: "rgba(42,1,1,0.8)"
      },
      {
        id: "RU-LEN",
        title: "Ленинградская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-LIP",
        title: "Липецкая область",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-MOW",
        title: "Москва",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-ME",
        title: "Респ. Марий Эл",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-MAG",
        title: "Магаданская обл.",
        color: "rgba(111,38,38,0.8)"
      },
      {
        id: "RU-MUR",
        title: "Мурманская обл.",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-MO",
        title: "Респ. Мордовия",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-MOS",
        title: "Московская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-NGR",
        title: "Новгородская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-NEN",
        title: "Ненецкий АО",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-SE",
        title: "Респ. Северная Осетия - Алания",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-NVS",
        title: "Новосибирская обл.",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-NIZ",
        title: "Нижегородская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-ORE",
        title: "Оренбургская обл.",
        color: "rgba(198,19,19,0.8)"
      },
      {
        id: "RU-ORL",
        title: "Орловская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-OMS",
        title: "Омская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-PER",
        title: "Пермский край",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-PRI",
        title: "Приморский край",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-PSK",
        title: "Псковская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-PNZ",
        title: "Пензенская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-ROS",
        title: "Ростовская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-RYA",
        title: "Рязанская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-SAM",
        title: "Самарская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-SA",
        title: "Респ. Саха (Якутия)",
        color: "rgba(42,1,1,0.8)"
      },
      {
        id: "RU-SAK",
        title: "Сахалинская обл.",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-SMO",
        title: "Смоленская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-SPE",
        title: "Санкт-Петербург",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-SAR",
        title: "Саратовская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-STA",
        title: "Ставропольский край",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-SVE",
        title: "Свердловская обл.",
        color: "rgba(198,19,19,0.8)"
      },
      {
        id: "RU-TAM",
        title: "Тамбовская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-TOM",
        title: "Томская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-TUL",
        title: "Тульская область",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-TA",
        title: "Респ. Татарстан",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-TY",
        title: "Респ. Тыва",
        color: "rgba(172,94,5,0.8)"
      },
      {
        id: "RU-TVE",
        title: "Тверская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-TYU",
        title: "Тюменская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-UD",
        title: "Респ. Удмуртия",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-ULY",
        title: "Ульяновская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-VGG",
        title: "Волгоградская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-VLA",
        title: "Владимирская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-YAN",
        title: "Ямало-Ненецкий АО",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-VLG",
        title: "Вологодская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-VOR",
        title: "Воронежская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-YAR",
        title: "Ярославская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-YEV",
        title: "Еврейская АО",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-ZAB",
        title: "Забайкальский край",
        color: "rgba(198,19,19,0.8)"
      }
    ]
    // lines: [
    //   {
    //     arc: 0,
    //     selectable: true,
    //     color: "rgba(255,255,255,0.8)",
    //     thickness: 1.7,
    //     dashLength: 0,
    //     longitudes: [77.338, 76.796],
    //     latitudes: [69.181, 75.5407],
    //     arrow: "none",
    //     arrowSize: 10.2
    //   },
    //   {
    //     arc: 0,
    //     selectable: true,
    //     color: "rgba(255,255,255,0.8)",
    //     thickness: 2.1,
    //     dashLength: 0,
    //     longitudes: [86.0108, 85.6856],
    //     latitudes: [68.3467, 76.1048],
    //     arrow: "none",
    //     arrowSize: 12.600000000000001
    //   }
    // ]
  },
  balloon: {
    horizontalPadding: 15,
    borderAlpha: 0,
    borderThickness: 1,
    verticalPadding: 15
  },
  areasSettings: {
    color: "rgba(173,168,168,1)",
    outlineColor: "rgba(255,255,255,1)",
    rollOverOutlineColor: "rgba(255,255,255,1)",
    rollOverBrightness: 20,
    selectedBrightness: 20,
    selectable: true,
    unlistedAreasAlpha: 0,
    unlistedAreasOutlineAlpha: 0
  },
  imagesSettings: {
    alpha: 1,
    color: "rgba(173,168,168,1)",
    outlineAlpha: 0,
    rollOverOutlineAlpha: 0,
    outlineColor: "rgba(255,255,255,1)",
    rollOverBrightness: 20,
    selectedBrightness: 20,
    selectable: true
  },
  linesSettings: {
    color: "rgba(173,168,168,1)",
    selectable: true,
    rollOverBrightness: 20,
    selectedBrightness: 20
  },
  zoomControl: {
    zoomControlEnabled: true,
    homeButtonEnabled: false,
    panControlEnabled: false,
    right: 38,
    bottom: 30,
    minZoomLevel: 0.25,
    gridHeight: 100,
    gridAlpha: 0.1,
    gridBackgroundAlpha: 0,
    gridColor: "#FFFFFF",
    draggerAlpha: 1,
    buttonCornerRadius: 2
  }
});

$(document).ready(function() {
  var $button1 = document.querySelector(".button-1"),
    $container1 = document.querySelector(".container-1"),
    $button2 = document.querySelector(".button-2"),
    $container2 = document.querySelector(".container-2");

  $button1.addEventListener("click", function() {
    $container1.classList.add("active");
    $container2.classList.remove("active");

    $button1.classList.add("active");
    $button2.classList.remove("active");
  });

  $button2.addEventListener("click", function() {
    $container1.classList.remove("active");
    $container2.classList.add("active");

    $button1.classList.remove("active");
    $button2.classList.add("active");
  });

  $("#userInfo").on("click", function() {
    Запа;
    $(this)
      .closest("li")
      .toggleClass("active");
  });

  $("#menu_icon").on("click", function() {
    $(this)
      .closest(".header__menu")
      .toggleClass("active");
    return false;
  });
});

function modalOpen() {
  $(".modals").show();
}

function modalClose() {
  $(".modals").hide();
}

function modalOpen1() {
  $(".modals1").show();
}

function modalClose1() {
  $(".modals1").hide();
}

function modalOpen2() {
  $(".modals2").show();
}

function modalClose2() {
  $(".modals2").hide();
}

function modalOpen3() {
  $(".modals3").show();
}

function modalClose3() {
  $(".modals3").hide();
}

// function modalCreate(id) {
//   console.log(id);
//   var html =
//     '<div id="' +
//     id +
//     '" style="width: 100%; height: 500px; background-color:#FFFFFF; "></div>';
//   $(".modals__content").html(html);
//   $(".modals").show();
//   m_chartdiv()();
// }
