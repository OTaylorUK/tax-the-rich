
import { GoogleSpreadsheet } from 'google-spreadsheet'

export default async function handler(req, res) {
  
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
  
      let allData = [];
  
      rows.map((row, i)=>{
        let currentItem = {
          _id: row.uid = row.uid  ? row.uid  : null,
          shortName: row.shortName = row.shortName  ? row.shortName  : null,
          singularName: row.singularName = row.singularName  ? row.singularName  : null,
          pluralName: row.pluralName = row.pluralName  ? row.pluralName  : null,
          icon: row.icon = row.icon  ? row.icon  : null,
          priceUSD: row.priceUSD = row.priceUSD  ? row.priceUSD  : null,
          text: row.text = row.text  ? row.text  : null,
          sources: [
            row.source1 = row.source1  ? row.source1  : null,
            row.source2 = row.source2  ? row.source2  : null,
            row.source3 = row.source3  ? row.source3  : null
          ],
        }

        allData.push(currentItem)
  
      })

      res.status(200).json(allData);
  
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
