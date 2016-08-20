import { Meteor } from 'meteor/meteor';

Meteor.methods({
    getDataApi: function () {
        var url = "http://rest.biolabeler.com/api/v1/type";
        try {
            var data = HTTP.get(url).data.data;
            console.log("data = "+data);
            return data;
        } catch (e) {
            return [];
        }
        // Meteor.http.call("GET",'http://rest.biolabeler.com/api/v1/type',function(){
        //     var data = this.data;
        //     console.log("this is data"+ data);
        //     console.log("data length "+ data.length);
        //     return data.data;
        // });
    }
});

Meteor.startup(() => {
  // code to run on server at startup

    // getDataApi: {
    //     Meteor.http.call("GET",'http://rest.biolabeler.com/api/v1/type',function(error,result){
    //         console.log(result);
    //         return result;
    //     });
    // }
});



/**
 * Created by v222000 on 5/17/16.
 */
