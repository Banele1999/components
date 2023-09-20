import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }


  onSubmit(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('file', this.selectedFile);

      // Replace with your Node.js API URL
      const apiUrl = 'http://localhost:3000/upload';

      this.http.post(apiUrl, formData).subscribe(
        (response) => {
          console.log('File uploaded successfully:', response);
          // You can handle success here
        },
        (error) => {
          console.error('File upload failed:', error);
          // You can handle errors here
        }
      );
    }
  }



















  // title = 'uploadfile';
  // files: any;
  // multipleFiles=[]

  // constructor(private http: HttpClient){  //private form: FormBuilder

  // }

  // selectFile(event:any){
  //   //CHECK IF FILE IS SELECTED
  //   if(event.target.files.length > 0){
  //     const file = event.target.files[0]
  //     console.log(file)
  //     this.files = file;
  //   }
  // }

  // onSubmit(){
  //   //CONSTRUCT FORM DATA
  //   const formData = new FormData();
  //   //name file should be the same as the one on the multer
  //   formData.append('file', this.files);

  //   //POST REQUEST TO EXPRESS BACKEND
  //   this.http.post<any>("http://localhost:3000/file", formData)
  //   .subscribe((res) => {
  //     console.log(res)
  //   }, err => {
  //     console.log(err)
  //   })
    
  // }
}
