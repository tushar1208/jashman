// Global Cloud Submission Handler
let globalSubmissions = [];

module.exports = async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const record = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (record && record.student && record.student.token) {
        // Store or update submission record
        const existingIdx = globalSubmissions.findIndex(s => s.student && s.student.token === record.student.token);
        if (existingIdx !== -1) {
          globalSubmissions[existingIdx] = record;
        } else {
          globalSubmissions.push(record);
        }

        // Return success response
        return res.status(200).json({
          status: 'success',
          message: 'Exam submission synced to global cloud server successfully!',
          token: record.student.token,
          totalCount: globalSubmissions.length
        });
      } else {
        return res.status(400).json({ status: 'error', message: 'Invalid payload structure' });
      }
    } catch (err) {
      return res.status(500).json({ status: 'error', message: err.message });
    }
  }

  return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
};
