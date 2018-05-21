/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CKEditorComponent } from './ckeditor.component';
import * as ClassicEditorBuild from '../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js'

describe('CKEditorComponent', () => {
	let component: CKEditorComponent;
	let fixture: ComponentFixture<CKEditorComponent>;

	beforeEach( async( () => {
		TestBed.configureTestingModule( {
			declarations: [ CKEditorComponent ]
		} )
		.compileComponents();
	} ) );

	beforeEach(() => {
		fixture = TestBed.createComponent( CKEditorComponent );
		component = fixture.componentInstance;
		component.build = ClassicEditorBuild;
		fixture.detectChanges();
	} );

	it( 'should create', () => {
		expect( component ).toBeTruthy();
	} );
} );
