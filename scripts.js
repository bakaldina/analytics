AmCharts.makeChart("chartdiv1", {
  type: "serial",
  categoryField: "category",
  columnWidth: 0.84,
  colors: ["#67b7dc", "#fdd400"],
  startDuration: 1,
  thousandsSeparator: " ",
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

AmCharts.makeChart("chartdiv2", {
  type: "serial",
  categoryField: "category",
  theme: "light",
  thousandsSeparator: " ",
  startDuration: 1,
  fontSize: 16,
  colors: ["#67b7dc", "#fdd400"],
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
      title: "тонн"
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
      labelText: "[[value]]",
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

AmCharts.makeChart("chartdiv3", {
  type: "serial",
  categoryField: "category",
  columnSpacing3D: 1,
  columnWidth: 0,
  thousandsSeparator: " ",
  zoomOutButtonRollOverAlpha: 0,
  startDuration: 1,
  colors: ["#67b7dc", "#fdd400"],
  theme: "light",
  categoryAxis: {
    gridPosition: "start"
  },
  trendLines: [],
  graphs: [
    {
      balloonText: "<b>[[title]] </b>в [[category]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-1",
      lineThickness: 0,
      title: "категория P1",
      fontSize: 14,
      labelText: "[[value]]",
      type: "column",
      valueField: "column-1"
    },
    {
      balloonText: "<b>[[title]] </b>в [[category]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      cornerRadiusTop: 2,
      dashLength: 1,
      fillAlphas: 1,
      gradientOrientation: "horizontal",
      id: "AmGraph-2",
      labelText: "[[value]]",
      lineThickness: 0,
      title: "категория P2",
      fontSize: 14,
      type: "column",
      valueField: "column-2"
    },
    {
      balloonText: "<b>[[title]] </b>в [[category]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      fillColors: "#92C992",
      id: "AmGraph-3",
      labelText: "[[value]]",
      lineAlpha: 0,
      lineThickness: 0,
      title: "категория P3",
      fontSize: 14,
      type: "column",
      valueField: "column-3"
    },
    {
      balloonText: "<b>[[title]] </b>в [[category]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      dashLength: 1,
      fillAlphas: 1,
      fillColors: "#ED9F51",
      id: "AmGraph-4",
      lineAlpha: 0,
      lineThickness: 0,
      minDistance: 0,
      negativeLineAlpha: 0,
      title: "категория ABC1",
      fontSize: 14,
      type: "column",
      labelText: "[[value]]",
      valueField: "column-4"
    },
    {
      balloonText: "<b>[[title]] </b>в [[category]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      fillColors: "#D290E7",
      gapPeriod: -3,
      id: "AmGraph-5",
      fontSize: 14,
      lineThickness: 0,
      labelText: "[[value]]",
      title: "категория C2",
      type: "column",
      valueField: "column-5"
    }
  ],
  guides: [],
  valueAxes: [
    {
      id: "ValueAxis-1",
      stackType: "100%",
      title: "тонн",
      titleFontSize: 17
    }
  ],
  allLabels: [],
  balloon: {
    fontSize: 14
  },
  legend: {
    enabled: true,
    useGraphSettings: true,
    fontSize: 14
  },
  titles: [
    {
      id: "Title-1",
      size: 24,
      text: "Динамика распределения запасов и ресурсов в 2004-2015 гг., тонн"
    }
  ],
  dataProvider: [
    {
      category: "2004",
      "column-1": "6570",
      "column-2": "5531.8",
      "column-3": "3959.1",
      "column-4": "5716.2",
      "column-5": "2434.8"
    },
    {
      category: "2005",
      "column-1": "8358",
      "column-2": "6336",
      "column-3": "3195",
      "column-4": "5677.2",
      "column-5": "2740.5"
    },
    {
      category: "2006",
      "column-1": "3195",
      "column-2": "6336",
      "column-3": "8358",
      "column-4": "6918",
      "column-5": "2871"
    },
    {
      category: "2008",
      "column-1": "5111.6",
      "column-2": "8757.6",
      "column-3": "10681.8",
      "column-4": "7860.7",
      "column-5": "3339.2"
    },
    {
      category: "2009",
      "column-1": "4841.7",
      "column-2": "7415",
      "column-3": "10128.8",
      "column-4": "7958.2",
      "column-5": "3974"
    },
    {
      category: "2010",
      "column-1": "5165.8",
      "column-2": "8653.4",
      "column-3": "9951.8",
      "column-4": "7982",
      "column-5": "4217.4"
    },
    {
      category: "2011",
      "column-1": "4900",
      "column-2": "9400",
      "column-3": "2270",
      "column-4": "8100",
      "column-5": "4400"
    },
    {
      category: "2012",
      "column-1": "5219",
      "column-2": "10062.7",
      "column-3": "23522",
      "column-4": "8047.3",
      "column-5": "4698.1"
    },
    {
      category: "2013",
      "column-1": "5355",
      "column-2": "10354",
      "column-3": "23506",
      "column-4": "8053.3",
      "column-5": "4860.2"
    },
    {
      category: "2014",
      "column-1": "5237.1",
      "column-2": "10385.3",
      "column-3": "24430.6",
      "column-4": "8006.2",
      "column-5": "5127.7"
    },
    {
      category: "2015",
      "column-1": "5497.6",
      "column-2": "10499.8",
      "column-3": "25247.9",
      "column-4": "8159.6",
      "column-5": "5657.8"
    }
  ]
});

AmCharts.makeChart("chartdiv4", {
  type: "serial",
  categoryField: "category",
  columnSpacing: 0,
  thousandsSeparator: " ",
  startDuration: 1,
  fontSize: 16,
  colors: ["#67b7dc", "#fdd400"],
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
  thousandsSeparator: " ",
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
        // красноярск
        selectable: true,
        longitude: 90.8855,
        latitude: 67.4803,
        label: "76,2",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 20.8
      },
      {
        // саха
        selectable: true,
        longitude: 124.6047,
        latitude: 65.9476,
        label: "27,6",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 18
      },
      {
        // чукотка
        selectable: true,
        longitude: 169.137,
        latitude: 66.1687,
        label: "31,4",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 16.1
      },
      {
        // камчатка
        selectable: true,
        longitude: 156.5856,
        latitude: 55.9815,
        label: "6,4",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        // магадан
        selectable: true,
        longitude: 148.8885,
        latitude: 62.4153,
        label: "34,3",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        // амур
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
        // приморье
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
        // еврейский ао
        selectable: true,
        longitude: 129.8084,
        latitude: 47.7792,
        label: "0,07",
        labelPosition: "right",
        labelColor: "rgba(0,0,0,0.8)",
        labelRollOverColor: "#000000",
        labelFontSize: 13.6
      },
      {
        // сахалинск
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
        // хабаровск
        selectable: true,
        longitude: 134.4632,
        latitude: 49.9188,
        label: "25,9",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        // забайкалье
        selectable: true,
        longitude: 113.0049,
        latitude: 51.2409,
        label: "15,2",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        // бурятия
        selectable: true,
        longitude: 108.9796,
        latitude: 53.6259,
        label: "5,4",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        // иркутск
        selectable: true,
        longitude: 102.1715,
        latitude: 55.3841,
        label: "26,9",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        // тыва
        selectable: true,
        longitude: 91.2145,
        latitude: 50.8598,
        label: "3,7",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        // хакасия
        selectable: true,
        longitude: 88.2735,
        latitude: 52.7927,
        label: "2,7",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 9.5
      },
      {
        // республика алтай
        selectable: true,
        longitude: 85.9024,
        latitude: 50.6297,
        label: "0,4",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 12
      },
      {
        // алтайский край
        selectable: true,
        longitude: 80.2651,
        latitude: 52.6604,
        label: "1,7",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        // кемерово
        selectable: true,
        longitude: 85.0351,
        latitude: 54.3898,
        label: "1,3",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 12.8
      },
      {
        // новосиб
        selectable: true,
        longitude: 78.2053,
        latitude: 55.3662,
        label: "0,4",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 13.3
      },
      {
        // ханты-мансийск
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
        // свердловск
        selectable: true,
        longitude: 59.6672,
        latitude: 58.1557,
        label: "7,6",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 15
      },
      {
        // пермь
        selectable: true,
        longitude: 53.9074,
        latitude: 59.0573,
        label: "0,2",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 12.5
      },
      {
        // башкоторстан
        selectable: true,
        longitude: 55.114,
        latitude: 53.9641,
        label: "5,9",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 12
      },
      {
        // челяб
        selectable: true,
        longitude: 58.4238,
        latitude: 54.9235,
        label: "19,4",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 9.3
      },
      {
        // оренбург
        selectable: true,
        longitude: 52.729,
        latitude: 52.0682,
        label: "6,6",
        labelPosition: "right",
        labelColor: "rgba(255,255,255,0.8)",
        labelRollOverColor: "#ffffff",
        labelFontSize: 11.1
      },
      {
        // карачаево-черкес
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
        // мурманск
        selectable: true,
        longitude: 31.9143,
        latitude: 67.6657,
        label: "0,07",
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
        longitude: 109.5357,
        latitude: 81.4149,
        label: "Au",
        labelPosition: "right",
        labelColor: "rgba(9,8,8,0.8)",
        labelRollOverColor: "#0a0909",
        labelFontSize: 26.8
      }
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
    ],
    areas: [
      {
        id: "RU-AD",
        title: "Респ. Адыгея",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-ALT",
        title: "Алтайский край: <br> <b>1,7 т.</b>",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-AMU",
        title: "Амурская обл.: <br> <b>16,4 т.</b>",
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
        title: "Респ. Башкоторстан: <br> <b>5,9 т.</b>",
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
        title: "Респ. Бурятия: <br> <b>5,4 т.</b>",
        color: "rgba(198,19,19,0.8)"
      },
      {
        id: "RU-CE",
        title: "Респ. Чечня",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-CHE",
        title: "Челябинская обл.: <br> <b>19,4 т.</b>",
        color: "rgba(111,38,38,0.8)"
      },
      {
        id: "RU-CHU",
        title: "Чукотский АО: <br> <b>31,4 т.</b>",
        color: "rgba(42,1,1,0.8)"
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
        title: "Респ. Алтай: <br> <b>0,4 т.</b>",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-IRK",
        title: "Иркутская обл.: <br> <b>26,9 т.</b>",
        color: "rgba(42,1,1,0.8)"
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
        title: "Карачаево-Черкесская Респ.: <br> <b>0,5 т.</b>",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-KDA",
        title: "Краснодарский край",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KEM",
        title: "Кемеровская обл.: <br> <b>1,3 т.</b>",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-KLU",
        title: "Калужская область",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KHA",
        title: "Хабаровский край: <br> <b>25,9 т.</b>",
        color: "rgba(42,1,1,0.8)"
      },
      {
        id: "RU-KR",
        title: "Респ. Карелия",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KK",
        title: "Респ. Хакасия: <br> <b>2,7 т.</b>",
        color: "rgba(172,94,5,0.8)"
      },
      {
        id: "RU-KL",
        title: "Респ. Калмыкия",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-KHM",
        title: "Ханты-Мансийский АО - Югра: <br> <b>0,2 т.</b>",
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
        title: "Камчатский край: <br> <b>6,4 т.</b>",
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
        title: "Красноярский край: <br> <b>76,2 т.</b>",
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
        title: "Магаданская обл.: <br> <b>34,3 т.</b>",
        color: "rgba(42,1,1,0.8)"
      },
      {
        id: "RU-MUR",
        title: "Мурманская обл.: <br> <b>0,07 т.</b>",
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
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-NVS",
        title: "Новосибирская обл.: <br> <b>0,4 т.</b>",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-NIZ",
        title: "Нижегородская обл.",
        color: "rgba(173,168,168,1)"
      },
      {
        id: "RU-ORE",
        title: "Оренбургская обл.: <br> <b>6,6 т.</b>",
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
        title: "Пермский край: <br> <b>0,2 т.</b>",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-PRI",
        title: "Приморский край: <br> <b>0,4 т.</b>",
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
        title: "Респ. Саха (Якутия): <br> <b>27,6 т.</b>",
        color: "rgba(42,1,1,0.8)"
      },
      {
        id: "RU-SAK",
        title: "Сахалинская обл.: <br> <b>0,2 т.</b>",
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
        title: "Свердловская обл.: <br> <b>7,6 т.</b>",
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
        title: "Респ. Тыва: <br> <b>3,7 т.</b>",
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
        title: "Еврейская АО: <br> <b>0,07 т.</b>",
        color: "rgba(222,157,83,0.8)"
      },
      {
        id: "RU-ZAB",
        title: "Забайкальский край: <br> <b>15,2 т.</b>",
        color: "rgba(111,38,38,0.8)"
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
  titles: [
    {
      id: "Title-map",
      size: 24,
      autoMargins: 10,
      text: "Распределение добычи по субъектам РФ в 2016г., тонн"
    }
  ],
  legend: {
    enabled: true,
    useGraphSettings: true,
    fontSize: 14
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

AmCharts.makeChart("chartdiv5", {
  type: "serial",
  categoryField: "category",
  theme: "light",
  startDuration: 1,
  thousandsSeparator: " ",
  colors: ["#67b7dc", "#fdd400"],
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
      year: 2002,
      expenses: 197,
      income: 190
    },
    {
      year: 2003,
      expenses: 201,
      income: 150
    },
    {
      year: 2004,
      expenses: 199,
      income: 173
    },
    {
      year: 2005,
      expenses: 186,
      income: 120
    },
    {
      year: 2006,
      expenses: 213,
      income: 87
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
    }
  ],
  valueAxes: [
    {
      stackType: "regular",
      autoGridCount: "true",
      axisAlpha: 1,
      gridAlpha: 0,
      title: "тонн"
    }
  ],
  startDuration: 1,
  titles: [
    {
      bold: true,
      id: "Title-1",
      size: 24,
      tabIndex: 0,
      text: "Динамика добычи и экспорта в 2002-2015 гг., тонн"
    }
  ],
  graphs: [
    {
      alphaField: "alpha",
      balloonText:
        "<b>[[title]]</b> <br> <span style='font-size:14px'>[[category]]: <b>[[value]] </b> [[additional]]</span>",
      fillAlphas: 0.8,
      lineAlpha: 0.3,
      title: "Объем добычи в тоннах",
      labelText: "[[value]]",
      type: "column",
      valueField: "expenses",
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
      title: "Объем экспорта в тоннах",
      valueField: "income",
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

AmCharts.makeChart("chartdiv6", {
  type: "serial",
  categoryField: "category",
  columnSpacing3D: 1,
  columnWidth: 0,
  thousandsSeparator: " ",
  fontSize: 15,
  zoomOutButtonRollOverAlpha: 0,
  startDuration: 1,
  theme: "light",
  categoryAxis: {
    gridPosition: "start"
  },
  trendLines: [],
  graphs: [
    {
      accessibleLabel: "[[value]]",
      balloonText: "[[category]] [[title]]: <b>[[value]] кг</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-1",
      labelText: "[[value]]",
      lineThickness: 0,
      maxBulletSize: 49,
      title: "Рудные собственные",
      type: "column",
      valueField: "column-1"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] кг</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-2",
      labelText: "[[value]]",
      lineThickness: 0,
      maxBulletSize: 49,
      title: "Рудные комплексные",
      type: "column",
      valueField: "column-2"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] кг</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      fillColors: "#92C992",
      id: "AmGraph-3",
      labelText: "[[value]]",
      lineAlpha: 0,
      title: "Россыпные открытые",
      type: "column",
      valueField: "column-3"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] кг</b>",
      bulletBorderThickness: 3,
      color: "#000000",
      columnWidth: 0.85,
      dashLength: 1,
      fillAlphas: 1,
      fillColors: "#CFCFF4",
      id: "AmGraph-4",
      labelText: "[[value]]",
      lineAlpha: 0,
      lineColor: "",
      minDistance: 0,
      negativeLineAlpha: 0,
      title: "Россыпные подземные",
      type: "column",
      valueField: "column-4"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] кг</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      fillColors: "#D290E7",
      id: "AmGraph-5",
      labelText: "[[value]]",
      maxBulletSize: 49,
      title: "Россыпные дражные",
      type: "column",
      valueField: "column-5"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] кг</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      fillColors: "#FFFF64",
      id: "AmGraph-6",
      labelText: "[[value]]",
      lineThickness: 0,
      tabIndex: 0,
      title: "Россыпные гидравлические",
      type: "column",
      valueField: "column-6"
    }
  ],
  guides: [],
  valueAxes: [
    {
      id: "ValueAxis-1",
      stackType: "100%",
      title: "кол-во, кг",
      titleFontSize: 17
    }
  ],
  allLabels: [],
  balloon: {
    fontSize: 14
  },
  legend: {
    enabled: true,
    fontSize: 13,
    useGraphSettings: true
  },
  titles: [
    {
      id: "Title-1",
      size: 15,
      text:
        "Сведения о распределении  запасов и добычи золота по основным типам месторождений в 2016г, кг"
    }
  ],
  dataProvider: [
    {
      category: "Кол-во месторождений",
      "column-1": "391",
      "column-2": "173",
      "column-3": "4177",
      "column-4": "365",
      "column-5": "230",
      "column-6": "559"
    },
    {
      category: "Запасы ABC1",
      "column-1": "5508897",
      "column-2": "2050078",
      "column-3": "623598",
      "column-4": "131887",
      "column-5": "200908",
      "column-6": "72967"
    },
    {
      category: "Запасы С2",
      "column-1": "4271810",
      "column-2": "1539294",
      "column-3": "114449",
      "column-4": "14736",
      "column-5": "12847",
      "column-6": "17733"
    },
    {
      category: "Добыча",
      "column-1": "209898",
      "column-2": "40103",
      "column-3": "61915",
      "column-4": "1301",
      "column-5": "7284",
      "column-6": "4333"
    }
  ]
});

AmCharts.makeChart("chartdiv7", {
  type: "serial",
  categoryField: "category",
  columnSpacing3D: 1,
  columnWidth: 0,
  zoomOutButtonRollOverAlpha: 0,
  startDuration: 1,
  fontSize: 15,
  thousandsSeparator: " ",
  theme: "light",
  categoryAxis: {
    gridPosition: "start"
  },
  trendLines: [],
  graphs: [
    {
      accessibleLabel: "[[value]]",
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-1",
      labelText: "[[value]]",
      lineThickness: 0,
      maxBulletSize: 49,
      title: "Золотые",
      type: "column",
      valueField: "column-1"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      bulletHitAreaSize: 2,
      bulletSize: 6,
      columnWidth: 0.85,
      cornerRadiusTop: 2,
      cursorBulletAlpha: 0,
      dashLength: 1,
      fillAlphas: 1,
      gradientOrientation: "horizontal",
      id: "AmGraph-2",
      labelText: "[[value]]",
      title: "Золото-сульфидные",
      type: "column",
      valueField: "column-2"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      fillColors: "#92C992",
      id: "AmGraph-3",
      labelText: "[[value]]",
      lineAlpha: 0,
      title: "Золото-сульфидные-кварцевые",
      type: "column",
      valueField: "column-3"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      bulletBorderThickness: 3,
      color: "#000000",
      columnWidth: 0.85,
      dashLength: 1,
      fillAlphas: 1,
      fillColors: "#CFCFF4",
      id: "AmGraph-4",
      labelText: "[[value]]",
      lineAlpha: 0,
      lineColor: "",
      minDistance: 0,
      negativeLineAlpha: 0,
      title: "Золото-серебряно-баритовые",
      type: "column",
      valueField: "column-4"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      fillColors: "#D290E7",
      id: "AmGraph-5",
      labelText: "[[value]]",
      maxBulletSize: 49,
      title: "Серебряно-золотые",
      type: "column",
      valueField: "column-5"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      fillColors: "#FFFF64",
      id: "AmGraph-6",
      labelText: "[[value]]",
      lineThickness: 0,
      tabIndex: 0,
      title: "Золото-кварцевые",
      type: "column",
      valueField: "column-6"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-7",
      labelText: "[[value]]",
      title: "Золото-колчеданные",
      type: "column",
      valueField: "column-7"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-8",
      labelText: "[[value]]",
      title: "Золото-серебряные",
      type: "column",
      valueField: "column-8"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-9",
      labelText: "[[value]]",
      title: "Золото-сурьмяные",
      type: "column",
      valueField: "column-9"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-10",
      title: "Медно-золоторудные",
      type: "column",
      labelText: "[[value]]",
      valueField: "column-10"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-11",
      labelText: "[[value]]",
      title: "Полиметально-золотые",
      type: "column",
      valueField: "column-11"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-12",
      title: "Золото-скрановые",
      type: "column",
      labelText: "[[value]]",
      valueField: "column-12"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      id: "AmGraph-13",
      title: "Золотосодержащие бурые железняки",
      type: "column",
      labelText: "[[value]]",
      valueField: "column-13"
    },
    {
      balloonText: "[[category]] [[title]]: <b>[[value]] тонн</b>",
      columnWidth: 0.85,
      fillAlphas: 1,
      fillColors: "#008000",
      id: "AmGraph-14",
      lineAlpha: 0,
      labelText: "[[value]]",
      title: "Золото-колчеданные, окисленные",
      type: "column",
      valueField: "column-14"
    }
  ],
  guides: [],
  valueAxes: [
    {
      id: "ValueAxis-1",
      stackType: "100%",
      title: "кол-во, тонн",
      titleFontSize: 17
    }
  ],
  allLabels: [],
  balloon: {
    fontSize: 14
  },
  legend: {
    enabled: true,
    fontSize: 10,
    useGraphSettings: true
  },
  titles: [
    {
      id: "Title-1",
      size: 16,
      text:
        "Распределение добычи по основным типам рудных месторождений в 2016 году, тонн"
    }
  ],
  dataProvider: [
    {
      category: "Кол-во месторождений",
      "column-1": "264",
      "column-2": "34",
      "column-3": "3",
      "column-4": "0",
      "column-5": "47",
      "column-6": "24",
      "column-7": "3",
      "column-8": "3",
      "column-9": "1",
      "column-10": "1",
      "column-11": "4",
      "column-12": "2",
      "column-13": "0",
      "column-14": "5"
    },
    {
      category: "Запасы ABC1",
      "column-1": "4876.6",
      "column-2": "152.6",
      "column-3": "0.6",
      "column-4": "3.3",
      "column-5": "303.8",
      "column-6": "69",
      "column-7": "9.5",
      "column-8": "43.9",
      "column-9": "0",
      "column-10": "0",
      "column-11": "46.3",
      "column-12": "2",
      "column-13": "0.009",
      "column-14": "1.5"
    },
    {
      category: "Запасы С2",
      "column-1": "2963.1",
      "column-2": "309",
      "column-3": "4.1",
      "column-4": "1.9",
      "column-5": "695.3",
      "column-6": "195.6",
      "column-7": "15.2",
      "column-8": "14.3",
      "column-9": "4.6",
      "column-10": "31",
      "column-11": "30.6",
      "column-12": "0.6",
      "column-13": "0.006",
      "column-14": "6.6"
    },
    {
      category: "Добыча",
      "column-1": "128.3",
      "column-2": "14.1",
      "column-3": "0",
      "column-4": "0",
      "column-5": "56.4",
      "column-6": "8.5",
      "column-7": "0.01",
      "column-8": "0.05",
      "column-9": "0",
      "column-10": "0",
      "column-11": "2",
      "column-12": "0.6",
      "column-13": "0",
      "column-14": "0"
    }
  ]
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

function modalOpen4() {
  $(".modals4").show();
}

function modalClose4() {
  $(".modals4").hide();
}

function modalOpen5() {
  $(".modals5").show();
}

function modalClose5() {
  $(".modals5").hide();
}
function modalOpen6() {
  $(".modals6").show();
}

function modalClose6() {
  $(".modals6").hide();
}
function modalOpen7() {
  $(".modals7").show();
}

function modalClose7() {
  $(".modals7").hide();
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
$(function() {
  $("#parent").tabs();
  $("#child, #child, #child, #child, #child, #child")
    .tabs()
    .addClass("ui-tabs-vertical ui-helper-clearfix");
  $("#child li")
    .removeClass("ui-corner-top")
    .addClass("ui-corner-left");
});
