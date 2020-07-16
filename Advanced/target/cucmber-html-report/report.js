$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("shopping.feature");
formatter.feature({
  "line": 3,
  "name": "Adding items to basket",
  "description": "",
  "id": "adding-items-to-basket",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "No item selected in basket",
  "description": "",
  "id": "adding-items-to-basket;no-item-selected-in-basket",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I start the application",
  "rows": [
    {
      "cells": [
        "Applicatio_Name"
      ],
      "line": 7
    },
    {
      "cells": [
        "Flipkart"
      ],
      "line": 8
    },
    {
      "cells": [
        "Amazon"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browse \"\u003cBuying_Products\u003e\" buying product",
  "rows": [
    {
      "cells": [
        "Product_Name",
        "Product_Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "shoes",
        "Reebak"
      ],
      "line": 13
    },
    {
      "cells": [
        "shirt",
        "Zodiac"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "my basket \"\u003cBasket_status\u003e\" be empty",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I \"\u003cBuy_status\u003e\" buy an item",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "adding-items-to-basket;no-item-selected-in-basket;",
  "rows": [
    {
      "cells": [
        "Buying_Products",
        "Basket_status",
        "Buy_status"
      ],
      "line": 20,
      "id": "adding-items-to-basket;no-item-selected-in-basket;;1"
    },
    {
      "cells": [
        "without",
        "should",
        "cannot"
      ],
      "line": 21,
      "id": "adding-items-to-basket;no-item-selected-in-basket;;2"
    },
    {
      "cells": [
        "with",
        "shouldnot",
        "can"
      ],
      "line": 22,
      "id": "adding-items-to-basket;no-item-selected-in-basket;;3"
    },
    {
      "cells": [
        "xxx",
        "yyy",
        "zzz"
      ],
      "line": 23,
      "id": "adding-items-to-basket;no-item-selected-in-basket;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "No item selected in basket",
  "description": "",
  "id": "adding-items-to-basket;no-item-selected-in-basket;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I start the application",
  "rows": [
    {
      "cells": [
        "Applicatio_Name"
      ],
      "line": 7
    },
    {
      "cells": [
        "Flipkart"
      ],
      "line": 8
    },
    {
      "cells": [
        "Amazon"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browse \"without\" buying product",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Product_Name",
        "Product_Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "shoes",
        "Reebak"
      ],
      "line": 13
    },
    {
      "cells": [
        "shirt",
        "Zodiac"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "my basket \"should\" be empty",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I \"cannot\" buy an item",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application(DataTable)"
});
formatter.result({
  "duration": 213558500,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 101800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "without",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String,DataTable)"
});
formatter.result({
  "duration": 1605700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "should",
      "offset": 11
    }
  ],
  "location": "shoppingStep.my_basket_should_be_empty(String)"
});
formatter.result({
  "duration": 362400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cannot",
      "offset": 3
    }
  ],
  "location": "shoppingStep.I_cannot_buy_an_item(String)"
});
formatter.result({
  "duration": 305400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "No item selected in basket",
  "description": "",
  "id": "adding-items-to-basket;no-item-selected-in-basket;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I start the application",
  "rows": [
    {
      "cells": [
        "Applicatio_Name"
      ],
      "line": 7
    },
    {
      "cells": [
        "Flipkart"
      ],
      "line": 8
    },
    {
      "cells": [
        "Amazon"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browse \"with\" buying product",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Product_Name",
        "Product_Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "shoes",
        "Reebak"
      ],
      "line": 13
    },
    {
      "cells": [
        "shirt",
        "Zodiac"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "my basket \"shouldnot\" be empty",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I \"can\" buy an item",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application(DataTable)"
});
formatter.result({
  "duration": 278500,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 51900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "with",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String,DataTable)"
});
formatter.result({
  "duration": 1133800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shouldnot",
      "offset": 11
    }
  ],
  "location": "shoppingStep.my_basket_should_be_empty(String)"
});
formatter.result({
  "duration": 139300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "can",
      "offset": 3
    }
  ],
  "location": "shoppingStep.I_cannot_buy_an_item(String)"
});
formatter.result({
  "duration": 377700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "No item selected in basket",
  "description": "",
  "id": "adding-items-to-basket;no-item-selected-in-basket;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Smoke"
    },
    {
      "line": 1,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I start the application",
  "rows": [
    {
      "cells": [
        "Applicatio_Name"
      ],
      "line": 7
    },
    {
      "cells": [
        "Flipkart"
      ],
      "line": 8
    },
    {
      "cells": [
        "Amazon"
      ],
      "line": 9
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I should see a selection of products",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I browse \"xxx\" buying product",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Product_Name",
        "Product_Company"
      ],
      "line": 12
    },
    {
      "cells": [
        "shoes",
        "Reebak"
      ],
      "line": 13
    },
    {
      "cells": [
        "shirt",
        "Zodiac"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "my basket \"yyy\" be empty",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I \"zzz\" buy an item",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "shoppingStep.I_start_the_application(DataTable)"
});
formatter.result({
  "duration": 260300,
  "status": "passed"
});
formatter.match({
  "location": "shoppingStep.I_should_see_a_selection_of_products()"
});
formatter.result({
  "duration": 84100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xxx",
      "offset": 10
    }
  ],
  "location": "shoppingStep.I_browse_without_buying_product(String,DataTable)"
});
formatter.result({
  "duration": 391600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yyy",
      "offset": 11
    }
  ],
  "location": "shoppingStep.my_basket_should_be_empty(String)"
});
formatter.result({
  "duration": 124800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "zzz",
      "offset": 3
    }
  ],
  "location": "shoppingStep.I_cannot_buy_an_item(String)"
});
formatter.result({
  "duration": 116300,
  "status": "passed"
});
});