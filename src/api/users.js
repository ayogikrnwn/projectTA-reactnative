import firebase  from '../config/Fire'
import moment from "moment"
export  default {
    login : (data, cb , ecb) => {
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(cb).catch(ecb)
    },
    get : (cb) => {
        firebase.database().ref('/users').on('value', cb)
    },
    details : (id , cb , ecb ) => {
        firebase.database().ref('/users/' + id).once('value').then(cb).catch(ecb)
    },
    tambahChild : (id , data , cb ) => {

        var newPostKey = firebase.database().ref().child('posts').push().key;

        // Write the new post's data simultaneously in the posts list and the user's post list.
        var updates = {};
        updates['/users/' + newPostKey] = data;
        updates['/users/' + id + '/' + newPostKey] = data;

        return firebase.database().ref().update(updates).then(cb);
    },
    tambah : (data , cb) => {
        const gej = {}
        const date = moment(new Date()).format("YYYYMMDD")

        firebase.database().ref('/users/'+data.uid).once('value').then((res) => {
            if(res.val())
            {
                // if( !res.val().gejala[date])
                // {
                    firebase.database().ref('/users/'+data.uid+'/gejala/'+date).set(data.gejala , cb);
                // }else{
                    
                // }
            }else{
                gej[date] = data.gejala
                data.gejala = gej;
                firebase.database().ref('/users/'+data.uid).set({
                    ...data,
                } , cb);
            }

        })
        
    },
    edit : (id , data ) => {

        firebase.database().ref('/users/' + id).once('value').then((res) => {
            firebase.database().ref('users/' + id).set({
                ...res.val(),
                email: data.email,
                fullName : data.fullName,
                isolasi : data.isolasi
            } );
            console.log("success")
        }).catch((ecb) => {
            console.log("error")
        })
    },
    hapus : (id) => {
        firebase.database().ref('/users/' + id).remove();
    },
    cekData: (id,cb,ecb) => {
        const date = moment(new Date()).format("YYYYMMDD")
        firebase.database().ref('/users/'+id+'/gejala/'+date).once('value').then(cb).catch(ecb)
    }
}