# Öğrenci-Öğretmen-İletişim-Platformu 
 REACT NATIVE ile Kodlanmistir <br>
 Öğrencilerin Derslere Katılım Sağladığı. <br>
 Öğretmenlerin Ders Açtığı bir iletişim platformu. <br>
 FIREBASE kullanılmıştır. <br>
 <b>Daha farklı projelerle uğraştığım için proje tam olarak tamamlanmamıştır.</b> 

# KULLANILAN KÜTÜPHANELER
@react-native-community/async-storage": "^1.12.0
@react-native-firebase/app": "^8.4.0 <br>
@react-native-firebase/auth": "^9.1.1 <br>
@react-native-firebase/firestore": "^7.6.1 <br>
@firebase": "^7.19.0 <br>
@react": "16.13.1 <br>
@react-native": "0.63.2 <br>
@react-native-gesture-handler": "^1.0.17 <br>
@react-navigation": "^4.4.0 <br>

# NOTLAR
 App.js dosyası içindeki componentDidMount kısmınına Firebaseden aldığınız adresler girilmelidir. <br>
 Sistem Realtime Database üzerine kurulmuştur. (FIREBASE) <br>
 # Realtime Databe 'RULES' kısmı şu şekilde düzenlenmelidir
      {
        "rules": {
          ".read": true,  
          ".write": true,  
            "users": {
            "$user_id": {
              // grants write access to the owner of this user account
              // whose uid must exactly match the key ($user_id)
              ".write": "$user_id === auth.uid"
            }
          }
        }
      }
 
# EKRAN GÖRÜNTÜLERİ
<table>
 <tr>
    <td><img src="Uygulama Goruntuleri/1.PNG" ></td>
    <td><img src="Uygulama Goruntuleri/2.PNG" ></td>
    <td><img src="Uygulama Goruntuleri/3.PNG" ></td>
  </tr>
  <tr>
    <td><img src="Uygulama Goruntuleri/4.PNG" ></td>
    <td><img src="Uygulama Goruntuleri/5.PNG" ></td>
  </tr>
 </table>
