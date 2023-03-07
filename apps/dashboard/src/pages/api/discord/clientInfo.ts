import { NextApiRequest, NextApiResponse } from "next"
import { FastAverageColor } from 'fast-average-color';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  
  const botInfoFetch = await fetch(
    `https://discord.com/api/v10/users/@me`,
    {
      headers: {
        // @ts-ignore
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      },
    }
  );
  const botInfo = await botInfoFetch.json();

  /* const fac = new FastAverageColor();
  
  const accentColor = (await fac.getColorAsync(`https://cdn.discordapp.com/avatars/${botInfo.id}/${botInfo.avatar}.png`)) */

  res.status(200).json({botInfo});
}


