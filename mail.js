const firebaseConfig = {
  //   copy your firebase config informations
  apiKey: "AIzaSyCZO2bCc-Rt7w50nZcqOSwOZN_JQqLSbsM",
    authDomain: "believerslist.firebaseapp.com",
    databaseURL: "https://believerslist-default-rtdb.firebaseio.com",
    projectId: "believerslist",
    storageBucket: "believerslist.appspot.com",
    messagingSenderId: "592299473225",
    appId: "1:592299473225:web:c7271d10f7a9df35d58298"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var age = getElementVal("age");
  var gen = getElementVal("gen");
  var cont = getElementVal("cont");
  var dob = getElementVal("dob");
  var hof = getElementVal("hof");
  var rel = getElementVal("rel");
  var addr = getElementVal("addr");

  saveMessages(name, age, gen, cont, dob, hof, rel, addr);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, age, gen, cont, dob, hof, rel, addr) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    age: age,
    gen: gen,
    cont: cont,
    dob: dob,
    hof: hof,
    rel: rel,
    addr: addr
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
