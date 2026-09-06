// Global Topic Selection Configuration API
let activeTopics = ["Python", "SQL", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Altair"];

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json({ status: 'success', topics: activeTopics });
  }

  if (req.method === 'POST') {
    try {
      const data = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      if (data && Array.isArray(data.topics) && data.topics.length > 0) {
        activeTopics = data.topics;
        return res.status(200).json({ status: 'success', message: 'Global active topics updated', topics: activeTopics });
      }
    } catch(e) {
      return res.status(500).json({ status: 'error', message: e.message });
    }
  }

  return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
};
