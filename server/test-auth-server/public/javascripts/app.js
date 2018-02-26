
 var mqttClient = function(){
     this.topic = ko.observable("Device 01");
     this.msg= ko.observable("");
 }

 mqttClient.prototype.submit =  function(){
     var self = this;
    $.ajax({
        type: "POST",
        url: '/mqtt/sendMsg',
        data: {"topic":self.topic(), "msg":self.msg()},
        success: function(){},
        dataType: "json"
      });
 }
