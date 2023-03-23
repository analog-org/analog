import { ApplyOptions } from '@sapphire/decorators';
import { InteractionHandler, InteractionHandlerTypes } from '@sapphire/framework';
import type { AutocompleteInteraction } from 'discord.js';
import { pluginList } from 'plugin-manager';

@ApplyOptions<InteractionHandler.Options>({
	interactionHandlerType: InteractionHandlerTypes.Autocomplete
})
export class AutocompleteHandler extends InteractionHandler {
	public override async run(interaction: AutocompleteInteraction, result: InteractionHandler.ParseResult<this>) {
		return interaction.respond(result);
	}

	public override async parse(interaction: AutocompleteInteraction) {
		if (interaction.commandName !== 'plugin') return this.none();

		const focusedOption = interaction.options.getFocused(true);

		switch (focusedOption.name) {
			case 'name': {
				const plugins = pluginList();
				const filtered = plugins.filter((pl: string) => pl.toLowerCase().includes(focusedOption.value.toLowerCase()));

				const filteredPlugin = filtered
					.map((pl: string) => ({
						name: pl,
						value: pl
					}))
					.slice(0, 25);

				return this.some(filteredPlugin);
			}
			default:
				return this.none();
		}
	}
}
