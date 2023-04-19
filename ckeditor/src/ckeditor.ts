/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Bold, Italic, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { Image, ImageCaption, ImageResize, ImageStyle } from '@ckeditor/ckeditor5-image';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar } from '@ckeditor/ckeditor5-table';
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

export default class AngularEditor extends ClassicEditor {
	// Plugins to include in the build.
	public static override builtinPlugins = [
		Base64UploadAdapter,
		Essentials,
		Bold,
		Image,
		ImageResize,
		ImageStyle,
		ImageCaption,
		Italic,
		Underline,
		Paragraph,
		PasteFromOffice,
		Table,
		TableToolbar
	];

	// Editor configuration.
	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo', 'redo', '|', 'bold', 'italic', 'underline', '|', 'underline',
			]
		},
		image: {
			toolbar: [
				'imageTextAlternative'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}
