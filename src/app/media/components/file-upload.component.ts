import { Component, OnInit, Input } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'file-upload',
  template: `
    <div class="text-center upload-zone">
     File upload
    </div>`
})
export class FileUploadComponent {
  /**
   * option format
   * {
   *  customFields: { key: value } // additional field will be added to the form
   *  query: { key: value } // custom query string
   * }
   */
  @Input() options: any;
  public hasBaseDropZoneOver = false;
  public uploader;
  public multiple = false;
  public uploadOnSelect = false;
  public autoUpload = false;
  public itemName: string = null;
  public progress: any = 0;
  public onAddingFiles: any = [];

}
