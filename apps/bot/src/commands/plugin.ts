import { ApplyOptions } from '@sapphire/decorators';
import type { ChatInputCommand } from '@sapphire/framework';
import { Subcommand } from '@sapphire/plugin-subcommands';
import { pluginAdd, pluginList } from 'plugin-manager';

@ApplyOptions<Subcommand.Options>({
	description: 'For managing the plugin',
	subcommands: [
		{ name: 'list', chatInputRun: 'listPlugins' },
		{ name: 'load', chatInputRun: 'loadPlugin' },
		{ name: 'unload', chatInputRun: 'unloadPlugin' }
	]
})
export class UserCommand extends Subcommand {
	public override registerApplicationCommands(registry: ChatInputCommand.Registry) {
		registry.registerChatInputCommand((builder) =>
			builder //
				.setName(this.name)
				.setDescription(this.description)
				.addSubcommand((subcommand) => subcommand.setName('list').setDescription('Lists all plugins'))
				.addSubcommand((subcommand) =>
					subcommand
						.setName('load')
						.setDescription('Loads a plugin')
						.addStringOption((option) =>
							option.setName('name').setDescription('The name of the plugin').setRequired(true).setAutocomplete(true)
						)
				)
				.addSubcommand((subcommand) =>
					subcommand
						.setName('unload')
						.setDescription('Unloads a plugin')
						.addStringOption((option) =>
							option.setName('name').setDescription('The name of the plugin').setRequired(true).setAutocomplete(true)
						)
				)
		);
	}

	public async listPlugins(interaction: Subcommand.ChatInputCommandInteraction) {
		const { client, logger } = this.container;
		logger.info(pluginList());

		return await interaction.reply({ content: 'plugins listed in console' });
	}

	public async loadPlugin(interaction: Subcommand.ChatInputCommandInteraction) {
		const { client, logger } = this.container;
		pluginAdd(interaction.options.getString('name')!);

		return await interaction.reply({ content: `Added ${interaction.options.getString('name')}` });
	}

	public async unloadPlugin(interaction: Subcommand.ChatInputCommandInteraction) {
		const { client, logger } = this.container;
		logger.info(pluginList());

		return await interaction.reply({ content: 'plugins listed in console' });
	}
}
