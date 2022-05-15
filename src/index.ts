import { app } from "./app"
import "dotenv/config"

const port = process.env.PORT || 8888 // default port to listen

// Start server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))
