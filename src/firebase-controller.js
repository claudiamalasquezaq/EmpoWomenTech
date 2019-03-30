export const createUser = (email, password) => 
  firebase.auth().createUserWithEmailAndPassword(email, password)

export const signIn = (email, password) => 
  firebase.auth().signInWithEmailAndPassword(email, password)

export const createProfile = (email, name) =>
  firebase.firestore().collection('user').add({
    email: email,
    name: name
  })

export const confirmUniqueProfile = (emailInput, name) =>
  firebase.firestore().collection('user').where('email', '==', emailInput).get()
    .then ((querySnapshot) =>{
      querySnapshot.forEach((doc) => {
        const emailDB = doc.data().email;
        if (emailDB !== emailInput) return createProfile(emailInput, name);
        else return undefined;
      })
    })
    .catch(() =>{ });

export const authenticationGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => confirmUniqueProfile(result.user.email, result.user.displayName))
    .catch(() => { });
};

export const authenticationFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then((result) => confirmUniqueProfile(result.user.email, result.user.displayName))
    .catch(() => { });
};

export const userData = () => {
  const user = firebase.auth().currentUser
  if (user != null) return user.email;
  else return undefined;
};

export const signOut = () => {
  return firebase.auth().signOut()
    .catch(() => {})
};