import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  // Meteor.call('getDataApi',function(res) {
  //
  //   console.log(res);
  // });


});


Template.hello.onRendered = function(){

    Meteor.call('getDataApi',function(err, response) {
      // Session.set('getDataApi', response);
      console.log(response);
  });

};

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  }


});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
});
