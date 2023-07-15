import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { StencilCvaDirective } from './directives/stencil-cva.directive';

@Component({
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	standalone: true,
	imports: [StencilCvaDirective, ReactiveFormsModule]
})
export class AppComponent implements OnInit {
	private readonly _formBuilder = inject(FormBuilder);
	form = this._formBuilder.nonNullable.group({ name: [''], lastName: [''] });

	ngOnInit(): void {
		this.form.controls.name.valueChanges.subscribe((value) => {
			console.log('Values is:: ', value);
		});
	}
	utpOnClick(): void {
		console.log('-------->');
	}
}
