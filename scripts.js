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
