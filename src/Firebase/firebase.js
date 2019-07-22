import app from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCLtwrZUuIQkb3cgLYGCcpd9kKemhUuLB8",
  authDomain: "apex-member-dashboard.firebaseapp.com",
  databaseURL: "https://apex-member-dashboard.firebaseio.com",
  projectId: "apex-member-dashboard",
  storageBucket: "",
  messagingSenderId: "41649842835",
  appId: "1:41649842835:web:0c90fe9225532103"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.loggedIn = false;
    this.provider = new app.auth.GoogleAuthProvider();
    this.provider.addScope('https://www.googleapis.com/auth/drive');
    app.auth().useDeviceLanguage();
  }

  signInWithGoogle() {
    return app.auth().signInWithRedirect(this.provider);
  }

  getGoogleToken() {
    app.auth().getRedirectResult().then(function(result) {
      console.log(result);
      if (result.credential) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        this.token = result.credential.accessToken;
      }
      // The signed-in user info.
      this.user = result.user;
      return {
        token: this.token,
        user: this.user
      }
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(error);
      // ...
    });
  }

  signOutUser = () => {
    app.auth().signOut().then(() => {
      this.loggedIn = false;
      this.user = undefined;
    }).catch(function(error) {
      console.log(error);
    });
  }
  getUser() {
    return app.auth().currentUser;
  }
  checkAuthStatus = () => {
      console.log("running checkAuthStatus()")

       return new Promise((resolve, reject) => {
        try {
          app.auth()
           .onAuthStateChanged(user => {
             if (user) {
                 this.loggedIn = true;
                 this.user = user;
                 console.log('userChecked:', user)
                 resolve(user);
             }
           });
        } catch {
          reject('api failed')
        }
      });

  }
  checkAuth = async () => {
    let user = await this.checkAuthStatus()
    console.log(user);
    return this.user;
  }
}

// *** Auth API ***


export default Firebase;
