import { Meteor } from 'meteor/meteor';

Meteor.methods({
    getDataApi: function () {
        Meteor.http.call("GET",'http://rest.biolabeler.com/api/v1/type',function(error,result){
            console.log(result);
            return result;
        });
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
