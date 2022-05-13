
import { GoogleSpreadsheet } from 'google-spreadsheet'

export default async function handler(req, res) {
  const searchName = req.body.searchName;
  
    try {
      const doc = new GoogleSpreadsheet(process.env.GOOGLE_DOC_ID)

      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      });

      // loads document properties and worksheets
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      const rows = await sheet.getRows()
  
      let userStatus = 'no-invite'
      let person = [];


  
      rows.map((row, i)=>{
        const fullName = row._rawData[0].toLowerCase();
        const nickName = row._rawData[1]
        const attending = row._rawData[2];

        const combinedName = fullName.split(' ')?.slice(1).join(' ').trim();
        let altFullName = fullName;

        if(nickName !== null){
          altFullName = `${nickName.toLowerCase()} ${combinedName}`;
        }

        let curPerson = {
          fullName: row._rawData[0] = row._rawData[0]  ? row._rawData[0]  : null,
          nickName: row._rawData[1] = row._rawData[1]  ? row._rawData[1]  : null,
          attending: row._rawData[2] = row._rawData[2]  ? row._rawData[2]  : null,
          email: row._rawData[3] = row._rawData[3]  ? row._rawData[3]  : null,
          dietaryRequirement: row._rawData[4] = row._rawData[4]  ? row._rawData[4]  : null,
          songToDance: row._rawData[5] = row._rawData[5]  ? row._rawData[5]  : null,
          songToSing: row._rawData[6] = row._rawData[6]  ? row._rawData[6]  : null,
        }

        // person.push(curPerson)

        if(fullName == searchName || altFullName == searchName){
          if(attending == 'YES'){
            userStatus = 'rsvp-positive'

          }else if(attending == 'NO'){
            userStatus = 'rsvp-negative'
          }else{
            userStatus = 'no-response'
          }

          person = curPerson
        }
  
      })

      res.status(200).json({person: person, userStatus: userStatus});
  
      } catch (err) {
        res.status(200).json(err);
    }




}


// export default function handler(req, res) {
//   /* add new Row data */ 
//   const newRow = { 
//     col1: "col 1", 
//     col2: "col 2"
//   }
  
//   res.statusCode = 200
//   res.json({ 
//     code: 200,
//     data: {
//       message: 'Hello',
//       test: appendSpreadsheet(newRow)
//      }
//   })
// }




/**
 * this function for example append new row
 */
const appendSpreadsheet = async (row) => {
  // const doc = new GoogleSpreadsheet(process.env.GOOGLE_DOC_ID)
  return 'hi'

  // try {
  //   await doc.useServiceAccountAuth({
  //     client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  //     private_key: process.env.GOOGLE_PRIVATE_KEY,
  //   });
  //   // loads document properties and worksheets
  //   await doc.loadInfo();
  //   // const sheet = doc.sheetsById[sheetId];
  //   return doc.title


  // } catch (e) {
  //   return {'test:': 1}

  // }
}


// const appendSpreadsheet = async (row) => {
//   const spreadsheetId = "" /* your spreadsheet id */
//   const clientEmail = "" /* your client email */
//   const privateKey = "" /* your privateKey */
//   const sheetId = "" /* your sheet id */
//   const doc = new GoogleSpreadsheet(spreadsheetId)
//   try {
//     await doc.useServiceAccountAuth({
//       client_email: clientEmail,
//       private_key: privateKey,
//     });
//     // loads document properties and worksheets
//     await doc.loadInfo();
//     const sheet = doc.sheetsById[sheetId];
//     await sheet.addRow(row);
//   } catch (e) {
//     console.error('Error: ', e);
//   }
// }
