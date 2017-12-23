var chart = AmCharts.makeChart( "chartdiv", {
    "type": "stock",
	"theme": "light",
	"dataDateFormat": "YYYY-MM-DD",
	"titles": [
		{
			"text": "Chart Title",
			"size": 15
		}
	],
	"dataSets": [ {
		"color": "#b0de09",
		 "title": "first data set",
			"fieldMappings": [ {
				"fromField": "value1",
				"toField": "value1"
		}],
	  "dataLoader": {
      "url": "CONN.php",
	  
    },
   "categoryField": 'category'
      },
    ],
    "panels": [{
	  "showCategoryAxis": true,
	  "title": "Value",
      "stockGraphs": [{
        "id": 'graph1',	
		"type": "column",
        "valueField": 'value1',
		"comparable": true,
		"showBalloon": true,
		"compareField": "value",
		 "fillAlphas": 1,
		"balloonText": "[[category]]:<b>[[value1]]</b>",
		"compareGraphBalloonText": "[[category]]:<b>[[value1]]</b>"
      }]
    }],
	///////
	 "panelsSettings": {
        "startDuration": 1
    },
	"chartScrollbarSettings": {
        "graph": "graph1",
        "graphType": "line"
    },
	"categoryAxesSettings": {
        "dashLength": 5
    },

   "valueAxesSettings": {
        "dashLength": 5
    },
	
	///////
	"periodSelector": {
    "periods": [ 
	{
      "period": "DD",
      "count": 3,
      "label": "3 days"
    },
	{
      "period": "DD",
      "count": 10,
      "label": "10 days"
    }, {
      "period": "MM",
      "count": 1,
      "label": "1 month"
    }, {
      "period": "YYYY",
      "count": 1,
      "label": "1 year"
    }, {
      "period": "YTD",
      "label": "YTD"
    }, {
      "period": "MAX",
      "label": "MAX"
    } ]
  },
  });