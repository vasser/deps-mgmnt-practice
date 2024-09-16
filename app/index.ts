import express from "express";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(helmet());
app.use(cors());

function getHexColorFromTimestamp(timestamp) {
  const hash = Math.abs(Math.sin(timestamp));
  const hex = Math.floor(hash * 16777215).toString(16);
  return `${hex.padStart(6, "0")}`;
}

app.get("/image", function (_, res) {
  const ts = Date.now();
  const color = getHexColorFromTimestamp(ts);

  res.json({
    message: "Hidden message",
    ts: Date.now(),
    image: `https://dummyjson.com/image/400x200/${color}/ffffff?text=Hello+OttawaJS&fontFamily=lobster`,
  });
});

app.listen(3001);
