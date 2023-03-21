import { ApplyOptions } from '@sapphire/decorators';
import type { ChatInputCommand } from '@sapphire/framework';
import { Subcommand } from '@sapphire/plugin-subcommands';

@ApplyOptions<Subcommand.Options>({
	description: 'For managing the plugin',
	subcommands: [{ name: 'list', chatInputRun: 'listPlugins',  }]
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
		return await interaction.reply({ content: 'You listed the plugins' });
	}
}