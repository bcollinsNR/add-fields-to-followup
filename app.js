(function() {

  var salesPriorityID = 24001886;   // sandbox
  //var salesPriorityID = 0;          // prodction
  var salesPriorityTags = ["sp0", "sp1", "sp2", "sp3", "sp4", "sp5", "sp6", "sp7", "sp8"];



  return { // the entire app goes inside this return block!
    // listen for API events such as the start of our app, when bits of it get clicked on or when AJAX requests complete
    events: {
      'app.activated':                  'initialize',
      'click #populate_drivers_button': 'pull_tags'
    },

    // This app doesn't make any AJAX requests but they would go here if it did
    requests: {

    },

    initialize: function(data) { // function called when we load
      if (data.firstLoad) {

      }
    },
    
    pull_tags: function() {
      console.log("pull_tags has been fired");

      //example of how this could work in theory 
      var ticket = this.ticket();
      var ticketTags = this.ticket().tags();

      for (var i = 0; i < ticketTags.length; i++) {

        if (salesPriorityTags.indexOf(ticketTags[i]) > -1) {
          ticket.customField("custom_field_" + salesPriorityID, ticketTags[i]);
        }
        // parse other possible tags into the correct fields... going to be quite a bit ot work
      
      }
    }
  };

}());
