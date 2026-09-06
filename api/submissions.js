// Global Submissions Retrieval, Grading & Deletion Endpoint for Admin
let globalSubmissions = [];

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'success',
      submissions: globalSubmissions
    });
  }

  if (req.method === 'POST') {
    try {
      const record = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (record && record.student && record.student.token) {
        const existingIdx = globalSubmissions.findIndex(s => s.student && s.student.token === record.student.token);
        if (existingIdx !== -1) {
          globalSubmissions[existingIdx] = record;
        } else {
          globalSubmissions.push(record);
        }
        return res.status(200).json({ status: 'success', message: 'Record saved globally' });
      }
    } catch(e) {
      return res.status(500).json({ status: 'error', message: e.message });
    }
  }

  if (req.method === 'DELETE') {
    try {
      const token = req.query.token || (req.body && req.body.token);
      if (token) {
        globalSubmissions = globalSubmissions.filter(s => s.student && s.student.token !== token);
        return res.status(200).json({ status: 'success', message: 'Record deleted globally', token });
      } else {
        return res.status(400).json({ status: 'error', message: 'Missing token parameter' });
      }
    } catch(e) {
      return res.status(500).json({ status: 'error', message: e.message });
    }
  }

  return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
};
