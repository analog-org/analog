import fs from "fs";
import path from "path";

export function pluginList() {
  const pluginDir = path.join(__dirname, "../plugins");
  const plugins = fs.readdirSync(pluginDir);
  const pluginList = plugins.map((plugin) => {
    return plugin.toString();
  });
}
