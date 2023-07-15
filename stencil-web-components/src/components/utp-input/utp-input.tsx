import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
	tag: 'utp-input',
	styleUrl: 'utp-input.css',
	shadow: true
})
export class UtpInput {
	@Prop() placeholder = '';
	@Prop({ mutable: true }) value = '';
	@Event() utpOnInput: EventEmitter<string>;

	private onInput(event: InputEvent): void {
		const inputValue = (event.target as HTMLInputElement).value;
		this.value = inputValue;
		this.utpOnInput.emit(this.value);
	}

	render() {
		return (
			<input
				class="utp-input"
				type="text"
				placeholder={this.placeholder}
				value={this.value}
				onInput={(event) => this.onInput(event)}
			/>
		);
	}
}
