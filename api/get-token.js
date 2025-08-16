export default async function handler(req, res) {
  try {
    const apiKey = "key_66503e845b24aced755134dfd51"; // Your real API key
    const agentId = "agent_18b445a7elecacf6818d47388"; // Your real agent ID

    const response = await fetch("https://api.retellai.com/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
      body: JSON.stringify({ agent_id: agentId }),
    });

    const data = await response.json();
    console.log("Retell API Response:", data);

    if (!response.ok) {
      return res.status(500).json({ error: data });
    }

    return res.status(200).json({ access_token: data.access_token });
  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ error: "Server crashed", details: error.message });
  }
}
