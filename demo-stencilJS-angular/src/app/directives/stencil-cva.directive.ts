import { Directive, ElementRef, HostListener, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
	selector: 'utp-input',
	standalone: true,
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => StencilCvaDirective),
			multi: true
		}
	]
})
export class StencilCvaDirective implements ControlValueAccessor {
	constructor(protected el: ElementRef) {}

	private _onChanged: Function = (_value: unknown) => {};
	private _onTouch: Function = () => {};

	writeValue(value: unknown): void {
		this.el.nativeElement.value = value;
		this._onChanged(value);
		this._onTouch();
	}
	registerOnChange(fn: Function): void {
		this._onChanged = fn;
	}
	registerOnTouched(fn: Function): void {
		this._onTouch = fn;
	}
	setDisabledState?(isDisabled: boolean): void {
		this.el.nativeElement.disabled = isDisabled;
	}

	@HostListener('utpOnInput', ['$event.target', '$event.detail'])
	_inputEvent(el: HTMLElement, value: unknown) {
		this._handleChangeEvent(el, value);
	}

	private _handleChangeEvent(el: HTMLElement, value: unknown) {
		if (el === this.el.nativeElement) {
			this._onChanged(value);
		}
	}
}
