import {google} from "googleapis";


export default async function handler(req, res ) {
    // if (req.method !== 'POST') {
    //     return res.status(405).send({ message: 'Only POST requests allowed' })
    // }
  

    
    res.status(200).json({ name: req.body })


    
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
            },
            scopes: [
                'https://www.googleapis.com/auth/drive',
                'https://www.googleapis.com/auth/drive.file',
                'https://www.googleapis.com/auth/spreadsheets'
            ]
        })

       

        const sheets = google.sheets({
            auth,
            version: 'v4'
        });

      
        var resource = {
            // "majorDimension": "ROWS",
            "values": ["alim","alim@gmail.com","0000000000"]
        }

        var optionalArgs = {valueInputOption: "USER_ENTERED"};
        var spreadsheetId =  process.env.GOOGLE_SHEET_IDS
      
        try{
            let response =   sheets.spreadsheets.values.append({
                spreadsheetId,
                range: 'A1:C1',
                optionalArgs,
                requestBody: {
                    resource
                }
            });
            res.status(200).json({resource})
        }
        catch (e) {
            return res.status(e.code).send({message: e.message})
        }
    
        

    }catch (e) {
        return res.status(e.code).send({message: e.message})
    }

}




// import {google} from "googleapis";



// export default async function handler(
//     req,
//     res
// ) {
//     if (req.method !== 'POST') {
//         return res.status(405).send({ message: 'Only POST requests allowed' })
//     }

//     const body = SheetForm = {
//         name: req.body.name,
//         email: req.body.email,
//         phone: req.body.phone,
       
//     }

//     try {
//         const auth = new google.auth.GoogleAuth({
//             credentials: {
//                 client_email: process.env.GOOGLE_CLIENT_EMAIL,
//                 private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n')
//             },
//             scopes: [
//                 'https://www.googleapis.com/auth/drive',
//                 'https://www.googleapis.com/auth/drive.file',
//                 'https://www.googleapis.com/auth/spreadsheets'
//             ]
//         })

//         const sheets = google.sheets({
//             auth,
//             version: 'v4'
//         });

//         const response = await sheets.spreadsheets.values.append({
//             spreadsheetId: process.env.GOOGLE_SHEET_ID,
//             range: 'A1:C1',
//             valueInputOption: 'USER_ENTERED',
//             requestBody: {
//                 values: [
//                     [body.name, body.email, body.phone, body.message]
//                 ]
//             }
//         });

//         res.status(201).json({
//             data: response.data
//         })
//     }catch (e) {
//         res.status(e.code).send({message: e.message})
//     }

// }