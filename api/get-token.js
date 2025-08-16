export default async function handler(req, res) {
  const apiKey = "key_..."; // from Retell
  const agentId = "agent_..."; // from Retell

  const response = await fetch("https://api.retellai.com/v1/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({ agent_id: agentId }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Retell API Error:", data);
    return res.status(500).json({ error: data });
  }

  res.status(200).json({ access_token: data.access_token });
}
