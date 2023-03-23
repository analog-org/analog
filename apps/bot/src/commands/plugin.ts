import { ApplyOptions } from '@sapphire/decorators';
import type { ChatInputCommand } from '@sapphire/framework';
import { Subcommand } from '@sapphire/plugin-subcommands';
import { pluginList } from 'plugin-manager';

@ApplyOptions<Subcommand.Options>({
	description: 'For managing the plugin',
	subcommands: [{ name: 'list', chatInputRun: 'listPlugins' }, { name: 'load', chatInputRun: 'loadPlugin' }, { name: 'unload', chatInputRun: 'unloadPlugin' }]
})
export class UserCommand extends Subcommand {
	public override registerApplicationCommands(registry: ChatInputCommand.Registry) {
		registry.registerChatInputCommand((builder) =>
			builder //
				.setName(this.name)
				.setDescription(this.description)
				.addSubcommand((subcommand) => subcommand.setName('list').setDescription('Lists all plugins'))
		);
	}

	public async listPlugins(interaction: Subcommand.ChatInputCommandInteraction) {
		const { client, logger } = this.container;
		logger.info(pluginList())

		return await interaction.reply({ content: 'plugins listed in console' });	
	}

	public async loadPlugin(interaction: Subcommand.ChatInputCommandInteraction) {
		const { client, logger } = this.container;
		logger.info(pluginList())

		return await interaction.reply({ content: 'plugins listed in console' });	
	}

	public async unloadPlugin(interaction: Subcommand.ChatInputCommandInteraction) {
		const { client, logger } = this.container;
		logger.info(pluginList())

		return await interaction.reply({ content: 'plugins listed in console' });	
	}
}
