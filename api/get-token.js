import Retell from 'retell-sdk';

export default async function handler(req, res) {
  const client = new Retell({
    apiKey: key_665003e454b2acfed755143fdf51 // 🔁 Replace with your real API key
  });

  const response = await client.call.createWebCall({
    agent_id: agent_18b445a7e16eacfc6181d47388 // 🔁 Replace with your real agent ID
  });

  res.status(200).json({
    access_token: response.access_token
  });
}
