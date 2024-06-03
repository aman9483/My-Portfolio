

import connectDB from '../../utiles/dbConnect';
import Contact from '../../models/Contact';

export default async function handler(req, res) {
  if (req.method === 'POST') {
   
    await connectDB();

    try {
      
      const contact = new Contact(req.body);

    
      await contact.save();


      res.status(200).json({ message: 'Message received successfully!' });
    } catch (error) {
      console.error('Error saving contact:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
