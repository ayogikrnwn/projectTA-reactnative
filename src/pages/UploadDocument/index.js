import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Header, Button, Link, Gap } from "../../components";
import { colors, fonts, storeData } from "../../utils";
import { showMessage } from "react-native-flash-message";
import { Fire } from "../../config";
import DocumentPicker from "react-native-document-picker";
import RNFetchBlob from "rn-fetch-blob";

const UploadDocument = ({ navigation, route }) => {
  const { fullName, uid } = route.params;
  const [singleFile, setSingleFile] = useState("");

  const pickDocument = async () => {
    try {
      const file = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        //There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      const path = await normalizePath(file.uri);
      // const result = await RNFetchBlob.fs.readFile(path, 'base64');
      const result = await RNFetchBlob.fs.readFile(path, "base64");
      uploadFileToFirebaseStorage(result, file);

      console.log(result);
      //Printing the log realted to the file
      // console.log('res : ' + JSON.stringify(res));
      // console.log('URI : ' + res.uri);
      // console.log('Type : ' + res.type);
      // console.log('File Name : ' + res.name);
      // console.log('File Size : ' + res.size);
      // //Setting the state to show single file attributes
      //  setSingleFile(res);
    } catch (err) {
      //Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        //If user canceled the document selection
        alert("Canceled from single doc picker");
      } else {
        //For Unknown Error
        alert("Unknown Error: " + JSON.stringify(err));
        throw err;
      }
    }
  };

  async function normalizePath(path) {
    if (Platform.OS === "android") {
      const filePrefix = "file://";
      if (path.startsWith(filePrefix)) {
        path = path.substring(filePrefix.length);
        try {
          path = decodeURI(path);
        } catch (e) {}
      }
      return path;
    }
  }

  async function uploadFileToFirebaseStorage(result, file) {
    const uploadTask = Fire.storage()
      .ref(`allFiles/${file.name}`)
      .put(result, "base64", { contentType: file.type });

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case Fire.storage.TaskState.PAUSED: // or 'paused'
            console.log("Upload is paused");
            break;
          case Fire.storage.TaskState.RUNNING: // or 'running'
            console.log("Upload is running");
            break;
        }
      },
      function (error) {
        console.log(err);
        // Handle unsuccessful uploads
      },
      function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          Fire.database()
            .ref("users/" + uid)
            .once("value")
            .then((res) => {
              Fire.database()
                .ref("/users/" + uid)
                .set({
                  ...res.val(),
                  urlDocument: downloadURL,
                })
                .then((hasil) => {
                  console.log(hasil);
                });
            });
        });
      }
    );
  }

  // const UploadAndContinue = () => {

  //     Fire.database()
  //       .ref('users/' + uid + '/')
  //       .update({photo: singleFile});
  //         const data = route.params;
  //        data.photo = singleFile;

  //            storeData('user', data);
  //     navigation.navigate('MainApp')
  //   }

  return (
    <View style={styles.page}>
      <Header title="Upload Dokumen" />
      <Button title="Ambil Data" onPress={pickDocument} />
      <Gap height={40} />
      {/* <Text style={styles.textStyle}>
        File Name: {.name ? .name : ''}
        {'\n'}
        Type: {.type ? .type : ''}
        {'\n'}
        File Size: {.size ? .size : ''}
        {'\n'}
        URI: {.uri ? singleFile.uri : ''}
        {'\n'}
      </Text> */}

      <Button
        title="Upload and Continue"
        onPress={() => navigation.replace("MainApp")}
      />

      <Gap height={40} />
    </View>
  );
};

export default UploadDocument;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "white" },
});
