import { app } from "./app.js";
import "dotenv/config";
import serverConnect from "./config/db.js";

const PORT = process.env.PORT || 5000;

app.listen(PORT, async () => {
  try {
    await serverConnect();
    console.log(`http://localhost:${PORT}`);
  } catch (error) {
    console.error("Database failed to connect", error.message);
    process.exit(1);
  }
});
