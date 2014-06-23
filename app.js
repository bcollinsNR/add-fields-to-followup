(function() {

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
        if (ticketTags[i] == "sp0" || ticketTags[i] == "sp1" || ticketTags[i] == "sp2" || ticketTags[i] == "sp3" || ticketTags[i] == "sp4" || ticketTags[i] == "sp5" || ticketTags[i] == "sp6" || ticketTags[i] == "sp7" || ticketTags[i] == "sp8") {
          ticket.customField("custom_field_24001886", ticketTags[i]);
        }
        // parse other possible tags into the correct fields... going to be quite a bit ot work
      
      }
    }
  };

}());
