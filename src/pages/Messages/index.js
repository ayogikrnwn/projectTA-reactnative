import React,{useEffect , useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ILPic } from '../../assets';
import { ListChat } from '../../components';
import { fonts , getData } from '../../utils';
import {Fire} from '../../config';


const Messages = ({navigation}) => {

  const [history, setHistory] = useState({})
  const [admin, setAdmins] = useState([]);
  const [user, setUser] = useState({});


  useEffect(() => {
    getDataUserFromLocal()
    getTopRatedDoctors()
  }, [])



  const getTopRatedDoctors = () => {
    Fire.database()
      .ref('adminweb/')
      .once('value')
      .then((res) => {
        if (res.val()) {
          const oldData = res.val();
          const data = [];
          Object.keys(oldData).map((key) => {
            data.push({
              id: key,
              data: oldData[key],
            });
          });
          setAdmins(data);
          
          getHistoryChat()
        }
      })
    
  };

  const getDataUserFromLocal = () => {
    getData('user').then((res) => {
      setUser(res);
    });
  };


  const getHistoryChat = () =>
  {
    const chatID = `${admin[0].data.uid}_${user.uid}`;

    Fire.database().ref(`/messages/${user.uid}/${chatID}`).once('value').then(res => {
      setHistory(res.val())
    })

    
  }


  return (
    <View style={styles.page}>
      <Text style={styles.text}> Riwayat Pesan</Text>
      <ListChat
        onPress={() => navigation.navigate('LiveChat', admin[0])}
        name={admin?.[0]?.data?.name}
        desc={history?.lastContentChat}
        profile={ILPic}
      />
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingTop: 30,
    paddingLeft: 16,
  },
  text: {
    color: '#112340',
    fontFamily: fonts.primary[600],
    fontSize: 20,
  },
});
