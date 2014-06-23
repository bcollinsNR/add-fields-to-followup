(function() {

// testing on https://newrelic.zendesk.com/agent/#/tickets/88903
// known issues:
// some older tickets will not pull the tags from the old drivers

  // Sales Priority
  var salesPriorityID = 20883706;          // testing in prodction
  var salesPriorityTags = ["sp0", "sp1", "sp2", "sp3", "sp4", "sp5", "sp6", "sp7", "sp8"];

  // New Product
  var newProductID = 23854248;
  var newProductTags = ["apm", "mobile", "insights", "browser", "platform", "servers", "else", "demo_request"];

  // New Platform / else
  var newPlatformElseID = 23854258;
  var newPlatformElseTags = ["dotnet", "account_billing", "agent_sdk", "alerting", "android", "early_access", "feature_request", "ios", "java", "linux", "ios_app", "android_app", "site", "node_js", "other", "php", "python", "ruby", "solaris", "windows"];

  // New Driver
  var newDriverID = 23854268;
  var newDriverTags = ["install", "crasher", "data_issue", "api", "mgi", "interp", "cust_dash", "develop", "publish", "billing", "signin", "upgrade", "downgrade", "cancel", "promo", "swag", "alert_wsm", "alert_lsm", "alert_smos", "alert_app", "alert_availmon", "rum", "sub_other"];

  return { 
    
    events: {
      'click #populate_drivers_button': 'pull_tags'
    },

    requests: {
    },
    
    pull_tags: function() {
      console.log("pull_tags has been fired");

      var ticket = this.ticket();
      var ticketTags = ticket.tags();

      for (var i = 0; i < ticketTags.length; i++) {
        if (salesPriorityTags.indexOf(ticketTags[i]) > -1) {
          ticket.customField("custom_field_" + salesPriorityID, ticketTags[i]);
        }
        if (newProductTags.indexOf(ticketTags[i]) > -1) {
          ticket.customField("custom_field_" + newProductID, ticketTags[i]);
        }  
        if (newPlatformElseTags.indexOf(ticketTags[i]) > -1) {
          ticket.customField("custom_field_" + newPlatformElseID, ticketTags[i]);
        }  
        if (newDriverTags.indexOf(ticketTags[i]) > -1) {
          ticket.customField("custom_field_" + newDriverID, ticketTags[i]);
        }  
      }
    }
  };

}());
