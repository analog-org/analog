import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { Subcommand } from '@sapphire/plugin-subcommands'
 
@ApplyOptions<Subcommand.Options>({
	description: 'For managing the plugin',
})
export class UserCommand extends Command {
	public override registerApplicationCommands(registry: Command.Registry) {
		registry.registerChatInputCommand((builder) =>
			builder //
				.setName(this.name)
				.setDescription(this.description)
		);
	}

	public override async chatInputRun(interaction: Command.ChatInputCommandInteraction) {
		return interaction.reply({ content: 'You managed the command' });
	}
}
