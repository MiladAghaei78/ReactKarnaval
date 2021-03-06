define({ "api": [
  {
    "type": "get",
    "url": "/api/expense/date?id=",
    "title": "retrieve date",
    "name": "GetTripExpensesDateByID",
    "group": "expense",
    "description": "<p>It is used to retrieve the date of the trip expenses by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 5]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip expenses date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "expense"
  },
  {
    "type": "get",
    "url": "/api/expense/image?id=",
    "title": "retrieve image",
    "name": "GetTripExpensesImageByID",
    "group": "expense",
    "description": "<p>It is used to retrieve the image of the trip expenses as a link by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 5]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip expenses image</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "expense"
  },
  {
    "type": "get",
    "url": "/api/expense/logo",
    "title": "retrieve logo",
    "name": "GetTripExpensesLogo",
    "group": "expense",
    "description": "<p>It is used to retrieve the logo of the trip expenses</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip expenses logo</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "expense"
  },
  {
    "type": "get",
    "url": "/api/expense/title?id=",
    "title": "retrieve title",
    "name": "GetTripExpensesTitleByID",
    "group": "expense",
    "description": "<p>It is used to retrieve the title of the trip expenses by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 5]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip expenses title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "expense"
  },
  {
    "type": "get",
    "url": "/api/footer/logo",
    "title": "retrieve logo",
    "name": "GetFooterLogo",
    "group": "footer",
    "description": "<p>It is used to retrieve the logo of the footer</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>footer's logo</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "footer"
  },
  {
    "type": "get",
    "url": "/api/footer/title?id=",
    "title": "retrieve title",
    "name": "GetFooterTitleByID",
    "group": "footer",
    "description": "<p>It is used to retrieve the title of the footer by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 6]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>footer's title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "footer"
  },
  {
    "type": "get",
    "url": "/api/guidance/date?id=",
    "title": "retrieve date",
    "name": "GetTripGuidanceDateByID",
    "group": "guidance",
    "description": "<p>It is used to retrieve the date of the trip guidance by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 4]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip guidance date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "guidance"
  },
  {
    "type": "get",
    "url": "/api/guidance/image?id=",
    "title": "retrieve image",
    "name": "GetTripGuidanceImageByID",
    "group": "guidance",
    "description": "<p>It is used to retrieve the image of the trip guidance by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 4]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip guidance image</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "guidance"
  },
  {
    "type": "get",
    "url": "/api/guidance/logo",
    "title": "retrieve logo",
    "name": "GetTripGuidanceLogo",
    "group": "guidance",
    "description": "<p>It is used to retrieve the logo of the trip guidance</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip guidance logo</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "guidance"
  },
  {
    "type": "get",
    "url": "/api/guidance/title?id=",
    "title": "retrieve title",
    "name": "GetTripGuidanceTitleByID",
    "group": "guidance",
    "description": "<p>It is used to retrieve the title of the trip guidance by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 4]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip guidance title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "guidance"
  },
  {
    "type": "get",
    "url": "/api/headline/image?id=",
    "title": "retrieve image",
    "name": "GetHeadlineImageByID",
    "group": "headline",
    "description": "<p>It is used to retrieve a headline's image as a link by its unique id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 4]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>headline's image</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "headline"
  },
  {
    "type": "get",
    "url": "/api/headline/subtitle?id=",
    "title": "retrieve subtitle",
    "name": "GetHeadlineSubtitleByID",
    "group": "headline",
    "description": "<p>It is used to retrieve a headline's subtitle by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 4]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>headline's subtitle</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "headline"
  },
  {
    "type": "get",
    "url": "/api/headline/title?id=",
    "title": "retrieve title",
    "name": "GetHeadlineTitleByID",
    "group": "headline",
    "description": "<p>It is used to retrieve a headline's title by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 4]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>headline's title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "headline"
  },
  {
    "type": "get",
    "url": "/api/plan/logo",
    "title": "retrieve logo",
    "name": "GetRecentNewsPersianTitle",
    "group": "plan",
    "description": "<p>It is used to retrieve the logo of the trip plan</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip plan's logo</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "plan"
  },
  {
    "type": "get",
    "url": "/api/plan/date?id=",
    "title": "retrieve date",
    "name": "GetTripPlanDateByID",
    "group": "plan",
    "description": "<p>It is used to retrieve the date of the trip plan by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 5]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip plan's date</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "plan"
  },
  {
    "type": "get",
    "url": "/api/plan/image?id=",
    "title": "retrieve image",
    "name": "GetTripPlanImageByID",
    "group": "plan",
    "description": "<p>It is used to retrieve the image of the trip plan as a link by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 5]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip plan's image</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "plan"
  },
  {
    "type": "get",
    "url": "/api/plan/title?id=",
    "title": "retrieve title",
    "name": "GetTripPlanTitleByID",
    "group": "plan",
    "description": "<p>It is used to retrieve the title of the trip plan by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 5]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>trip plan's title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "plan"
  },
  {
    "type": "get",
    "url": "/api/recent/description?id=",
    "title": "retrieve description",
    "name": "GetRecentTopicsDescriptionByID",
    "group": "recent",
    "description": "<p>It is used to retrieve the description of the recent topics by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 9]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>recent topic's description</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "recent"
  },
  {
    "type": "get",
    "url": "/api/recent/image?id=",
    "title": "retrieve image",
    "name": "GetRecentTopicsImageByID",
    "group": "recent",
    "description": "<p>It is used to retrieve the image of the recent topics as a link by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 9]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>recent topic's image</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "recent"
  },
  {
    "type": "get",
    "url": "/api/recent/mastertitle",
    "title": "retrieve master title",
    "name": "GetRecentTopicsMasterTitle",
    "group": "recent",
    "description": "<p>It is used to retrieve the master title of the recent topics</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>recent topic's master title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "recent"
  },
  {
    "type": "get",
    "url": "/api/recent/subtitle?id=",
    "title": "retrieve subtitle",
    "name": "GetRecentTopicsSubtitleByID",
    "group": "recent",
    "description": "<p>It is used to retrieve the subtitle of the recent topics by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 9]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>recent topic's subtitle</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "recent"
  },
  {
    "type": "get",
    "url": "/api/recent/title?id=",
    "title": "retrieve title",
    "name": "GetRecentTopicsTitleByID",
    "group": "recent",
    "description": "<p>It is used to retrieve the title of the recent topics by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 9]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>recent topic's title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "recent"
  },
  {
    "type": "get",
    "url": "/api/service/mastertitle",
    "title": "retrieve master title",
    "name": "GetServiceMasterTitle",
    "group": "service",
    "description": "<p>It is used to retrieve the master title of the services</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>servince's master title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "service"
  },
  {
    "type": "get",
    "url": "/api/service/title?id=",
    "title": "retrieve title",
    "name": "GetServiceTitleByID",
    "group": "service",
    "description": "<p>It is used to retrieve the title of the services by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 4]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>service's title</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "service"
  },
  {
    "type": "get",
    "url": "/api/toolbar?id=",
    "title": "retrieve title",
    "name": "GetToolbarTitleByID",
    "group": "toolbar",
    "description": "<p>It is used to retrieve a title out of toolbar array</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 9]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>an entity of the toolbar</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "toolbar"
  },
  {
    "type": "get",
    "url": "/api/tutorial/image?id=",
    "title": "retrieve logo",
    "name": "GetTutorialLogoByID",
    "group": "tutorial",
    "description": "<p>It is used to retrieve the logo of the tutorial by its id</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>unique ID [0, 2]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>tutorial logo's link</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "./main.go",
    "groupTitle": "tutorial"
  }
] });
