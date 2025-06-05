import { Liveblocks } from "@liveblocks/node";

const liveblocksClient = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,
});

export default liveblocksClient;