import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {
  // selectedFile: File = null; //property to store the file
  selectedFile = null;

  constructor(private http: HttpClient){  //inject the http service

  }

  //method
  onFileSelected(event: any){
    // console.log(event);
    // this.selectedFile = <File>event.target.files[0];
    this.selectedFile = event.target.files[0];
    
  }

  onUpload(){
    const fd = new FormData();
    // fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('url', fd) //send a POST request
      .subscribe(res => {
        console.log(res);
      });
  }
}
