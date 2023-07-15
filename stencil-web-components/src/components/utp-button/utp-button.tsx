import { Component, Event, EventEmitter, h, Host, Prop } from '@stencil/core';

@Component({
	tag: 'utp-button',
	styleUrl: 'utp-button.css',
	shadow: true
})
export class UtpButton {
	@Prop() text: string;
	@Prop() typeButton: 'SOLID' | 'TRANSP' = 'SOLID';

	@Event() utpOnClick: EventEmitter<string>;

	componentWillLoad() {
		if (!this.text) {
			console.error('Ingrese un texto para el boton');
		}
	}

	render() {
		return (
			<Host>
				<div
					class={{ 'utp-button': true, 'utp-button--transparent': this.typeButton === 'TRANSP' }}
					onClick={() => this.utpOnClick.emit()}
				>
					<span>{this.text} </span>
				</div>
			</Host>
		);
	}
}
