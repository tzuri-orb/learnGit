import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  Meteor.methods({
    update() {
      require('child_process').execSync('/home/mct/fromhost');
      console.log('did the deed');
    },
    update() {
      require('child_process').execSync('/home/mct/downgrade');
      console.log('did the dood');
    },
  });
  // code to run on server at startup
});
