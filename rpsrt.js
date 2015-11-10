Tasks = new Mongo.Collection("tasks");
User = new Mongo.Collection("user");
Avatars = new Mongo.Collection("avatars");
Rps_images = new Mongo.Collection("rps_images");
 
// if (Meteor.isServer) {
//   Meteor.publish('user', function() {
//     return User.find({
//       $or: [
//         { private: {$ne: true} },
//         { owner: this.userID }
//         ]
//     });
//   });
// }

if (Meteor.isClient) {
  // This code only runs on the client
  // Meteor.subscribe('user');
  // Meteor.startup(function(){
  //   document.getElementById("avatar").selectedIndex = "-1";
  // });
  Template.body.helpers({
    tasks: function () {
      return Tasks.find({}, {sort: {createdAt: -1}});
    }
  });
 
  Template.body.events({
    "submit .new-task": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var text = event.target.text.value;
 
      // Insert a task into the collection
      Tasks.insert({
        text: text,
        createdAt: new Date() // current time
      });
 
      // Clear form
      event.target.text.value = "";
    }
  });

  

  Template.body.events({
    
    "change #avatar": function (event) {
      var dropSelect = document.getElementById("avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "cat") {
        console.log("Cat choices");
        document.getElementById('cat_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      } else if (choice1 === "dog") {
        console.log("Dog choices");
        document.getElementById('dog_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      } else if (choice1 === "human") {
        console.log("Human choices");
        document.getElementById('mf_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      } else if (choice1 === "abstract") {
        console.log("Abstract choices");
        document.getElementById('abstract_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      } else {
        console.log("Custom choice");
        document.getElementById('custom_avatar').style.display = '';
        document.getElementById('avatar').style.display = 'none';
      }
    },

    "change #mf_avatar": function (event) {
      var dropSelect = document.getElementById("mf_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_mf_avatar").label = "Choose a sex from list below";
      } else if (choice1 === "male") {
        console.log("Male choice");
        document.getElementById('male_avatar').style.display = '';
        document.getElementById('mf_avatar').style.display = 'none';    
      } else {
        console.log("Female choice");
        document.getElementById('female_avatar').style.display = '';
        document.getElementById('mf_avatar').style.display = 'none';   
      } 
    },

    "change #cat_avatar": function (event) {
      var dropSelect = document.getElementById("cat_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_cat_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "jedi") {
        console.log("Cat Jedi choice");
      } else if (choice1 === "warrior") {
        console.log("Cat Warrior choice");
      } else if (choice1 === "wizard") {
        console.log("Cat Wizard choice");
      } else {
        console.log("Cat Healer choice");
      } 
    },

    "change #dog_avatar": function (event) {
      var dropSelect = document.getElementById("dog_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_dog_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "jedi") {
        console.log("Dog Jedi choice");
      } else if (choice1 === "warrior") {
        console.log("Dog Warrior choice");
      } else if (choice1 === "wizard") {
        console.log("Dog Wizard choice");
      } else {
        console.log("Dog Healer choice");
      } 
    },

    "change #male_avatar": function (event) {
      var dropSelect = document.getElementById("male_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_male_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "jedi") {
        console.log("Male Jedi choice");
      } else if (choice1 === "warrior") {
        console.log("Male Warrior choice");
      } else if (choice1 === "wizard") {
        console.log("Male Wizard choice");
      } else {
        console.log("Male Healer choice");
      } 
    },

    "change #female_avatar": function (event) {
      var dropSelect = document.getElementById("female_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_female_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "jedi") {
        console.log("Female Jedi choice");
      } else if (choice1 === "warrior") {
        console.log("Female Warrior choice");
      } else if (choice1 === "wizard") {
        console.log("Female Wizard choice");
      } else {
        console.log("Female Healer choice");
      } 
    },

    "change #abstract_avatar": function (event) {
      var dropSelect = document.getElementById("abstract_avatar");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_abstract_avatar").label = "Choose an avatar from list below";
      } else if (choice1 === "pat1") {
        console.log("Pattern 1 choice");
      } else if (choice1 === "pat2") {
        console.log("Pattern 2 choice");
      } else if (choice1 === "pat3") {
        console.log("Pattern 3 choice");
      } else {
        console.log("Pattern 4 choice");
      } 
    },

    "change #rps_images": function (event) {
      var dropSelect = document.getElementById("rps_images");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_rps_images").label = "Choose an RPS image set from list below";
      } else if (choice1 === "cat") {
        console.log("Cat RPS images");
        document.getElementById('cat_rps_images').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      } else if (choice1 === "dog") {
        console.log("Dog RPS images");
        document.getElementById('dog_rps_images').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      } else if (choice1 === "human") {
        console.log("Human choices");
        document.getElementById('mf_rps_images').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      } else if (choice1 === "objects") {
        console.log("Actual object choices");
        document.getElementById('objects_choices').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      } else {
        console.log("Custom RPS images");
        document.getElementById('custom_rock').style.display = '';
        document.getElementById('custom_paper').style.display = '';
        document.getElementById('custom_scissors').style.display = '';
        document.getElementById('rps_images').style.display = 'none';
      }
    },

    "change #objects_choices": function (event) {
      var dropSelect = document.getElementById("objects_choices");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_objects_choices").label = "Choose object RPS images from list below";
      } else if (choice1 === "pat1") {
        console.log("Pattern 1 choice");
        document.getElementById('object1_rps_images').style.display = '';
        document.getElementById('objects_choices').style.display = 'none';
      } else {
        console.log("Pattern 2 choice");
        document.getElementById('object2_rps_images').style.display = '';
        document.getElementById('objects_choices').style.display = 'none';
      } 
    },

    "change #mf_rps_images": function (event) {
      var dropSelect = document.getElementById("mf_rps_images");
      var choice1 = dropSelect.value;
      console.log(choice1);
      if (choice1 === "") {
        document.getElementById("choose_mf_rps_images").label = "Choose a sex from list below";
      } else if (choice1 === "male") {
        console.log("Male choice");
        document.getElementById('male_rps_images').style.display = '';
        document.getElementById('mf_rps_images').style.display = 'none';    
      } else {
        console.log("Female choice");
        document.getElementById('female_rps_images').style.display = '';
        document.getElementById('mf_rps_images').style.display = 'none';   
      } 
    },

    "submit .new-user": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
      var e = document.getElementById("cat");
      var avatar = e.value;
      console.log(avatar);
      // Get value from form element
      // var user_name = event.target.user_name.value;
      // console.log (user_name);
      // var password = event.target.password.value;
      // console.log(password);
      // var email = event.target.email.value;
      // console.log(email);

 
 
      // Insert a task into the collection
      // User.insert({
      //   avatar: avatar,
      //   user_name: user_name,
      //   password: password,
      //   email: email,
      //   rps_images: rps_images,
      //   createdAt: new Date() // current time
      // });
 
      // Clear form
      event.target.text.value = "";
    }
  });

  Template.task.events({
    "click .toggle-checked": function () {
      // Set the checked property to the opposite of its current value
      Tasks.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Tasks.remove(this._id);
    }
  });
}
