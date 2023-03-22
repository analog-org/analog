import fs from "fs";
import path from "path";

export function pluginList() {
  const pluginDir = path.join(__dirname, "../../../plugins");
  const plugins = fs.readdirSync(pluginDir);
  let pluginlist: any[] = []
  plugins.map((plugin) => pluginlist.push(plugin));
  return pluginlist;
}
