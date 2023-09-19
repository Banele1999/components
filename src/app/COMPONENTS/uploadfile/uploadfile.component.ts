import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {
  title = 'fileUpload';
  files: any;

  constructor(private http: HttpClient, private form: FormBuilder){}

  selectFile(event:any){
    if(event.target.files.length > 0){
      const file = event.target.files[0];
      this.files = file;
    }
  }

  onSubmit(){
    const formData = new FormData();
    //name file should be the same as the one on the multer
    formData.append('file', this.files);

    this.http.post<any>('http://localhost:3000/file', formData).subscribe(
      (res) =>  console.log(res),
      (err) => console.log(err)
    );
  }
}
