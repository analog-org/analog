import fs from "fs";
import path from "path";

export function pluginList() {
  const pluginDir = path.join(__dirname, "../../../plugins");
  const plugins = fs.readdirSync(pluginDir);
  let pluginlist: any[] = [];
  plugins.map((plugin) => pluginlist.push(plugin));
  return pluginlist;
}

export function pluginAdd(plugin: string) {
  const pluginDir = path.join(__dirname, `../../../plugins/${plugin}`);
  const pluginBotDir = path.join(pluginDir, "bot");
  // copy all folders in the bot folder to the bot folder make sure it is only a folder and not a file
  try {
    fs.readdirSync(pluginBotDir).map((file) => {
      if (fs.lstatSync(path.join(pluginBotDir, file)).isDirectory()) {
        fs.copyFileSync(
          path.join(pluginBotDir, file),
          path.join(__dirname, `../../../../apps/bot/src/${file}`)
        );
        console.log(`Copied ${file} to bot folder`);
      }
    });
    console.log(`Plugin ${plugin} added`);
  } catch (error) {
    console.error(error);
  }
}
