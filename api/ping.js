export default function handler(req, res) {
  // Simple serverless ping endpoint for Vercel deployments
  const ping = process.env.PING_MESSAGE ?? 'ping';
  res.status(200).json({ message: ping });
}
