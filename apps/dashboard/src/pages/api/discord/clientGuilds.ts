import { NextApiRequest, NextApiResponse } from "next"


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const botGuildsFetch = await fetch(
    `https://discord.com/api/v10/users/@me/guilds`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
      },
    }
  );
  const botGuilds = await botGuildsFetch.json();


  res.status(200).json({botGuilds});
}


