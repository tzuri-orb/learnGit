import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.methods({
    update() {
      require('child_process').execSync('/home/mct/fromhost');
      console.log('did the deed');
    }
  });
  // code to run on server at startup
});
