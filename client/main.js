import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  loadData();
  initSessionVars();

  // Meteor.call('getDataApi',function(res) {
  //
  //   console.log(res);
  // });

  // this.matches = new ReactiveVar([]);
  this.superValueGet = new ReactiveVar([]);

  var self = this;
  // Meteor.call('getMatches', function(error, result) {
  //   if (result)
  //     self.matches.set(result);
  // });
  Meteor.call('getDataApi', function(error, result) {
    if (result)
      self.superValueGet.set(result);
  });


});


Template.hello.onRendered = function(){

  //   Meteor.call('getDataApi',function(err, response) {
  //     // Session.set('getDataApi', response);
  //     console.log(response);
  // });

};

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },

  // getDataApi: (res) => {
  //   Meteor.call('getDataApi', function (error, result) {
  //     Session.set('getData', result);
  //     console.log(result);
  //
  //   });
  //
  // },
  passData: function() {
    console.log("get value = "+Template.instance().superValueGet.get());
    return Template.instance().superValueGet.get();
  },
  // matches: function() {
  //   console.log(Template.instance().matches.get());
  //   return Template.instance().matches.get();
  // }


});

Template.hello.events({
  // 'click button'(event, instance) {
  //   // increment the counter when button is clicked
  //   instance.counter.set(instance.counter.get() + 1);
  // }
});

let initSessionVars = () => {
  Session.set('getDataApi', []);
};

let loadData = () => {
  // var self = this;
  initSessionVars();
  // Asynchronous call to get total number of records available at the endpoint:
  Meteor.call('getDataApi', function (error, result) {
    Session.set('getData', result);
    console.log(result);
  });
};