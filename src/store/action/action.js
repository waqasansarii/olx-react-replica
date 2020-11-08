 import firebase from '../../firebaseConfig/firebase'

 const facebook_login =()=>{
     return (dispatch)=>{
         var provider = new firebase.auth.GoogleAuthProvider()
         firebase.auth().signInWithPopup(provider)
         .then(function(result){
             var token = result.credential.accessToken;
             var user = result.user;
             console.log(user)
             const sentDataInFirebase ={
                email:user.email,
                name: user.displayName,
                img: user.photoURL,
                uid: user.uid
            }
            // console.log(sentDataInFirebase)
            
            firebase.database().ref('/').child(`users/${user.uid}`).set(sentDataInFirebase)
            .then(()=>{
                alert("user login successfull")
                dispatch({type:'AUTH_USERS',payload: sentDataInFirebase})
                
            })
            
            firebase.database().ref('/').child(`users/${user.uid}`).on('child_added',(data)=>{
                let getFirebaseData= data.val()
                
                    // console.log(getFirebaseData)
            })


             
    })
         
        
        .catch(function(error){
             var error = error.code;
            //  var errorMessage = error.message
            //  console.log(errorMessage)
            console.log(error)
         })

     }
 }

 const log_out=()=>{
     return (dispatch)=>{
        firebase.auth().signOut()
        
        .then(function() {
            dispatch({type:'SIGN_OUT',payload:''})
            alert('signOut')
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
            alert(error)
          });
     }
 }


const set_value =(data)=>{
    console.log(data)
    return (dispatch)=>{
        dispatch({type :'SETDATA', data:data})
    }
}

export {
    facebook_login,
    set_value,
    log_out
}