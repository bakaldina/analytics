AmCharts.makeChart("chartdiv1", {
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
