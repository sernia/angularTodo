import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {

  title = 'データバインディング';
  url: string;
  datalistId: string;
  classRed: boolean;
  blueStyle: string;
  inputValue: string;

  onClick() {
    this.url = 'https://qiita-image-store.s3.amazonaws.com/0/158277/profile-images/1528249969';
    this.datalistId = 'datalist1';
    this.classRed = true;
    this.blueStyle = '#0000ff';
    this.inputValue = '双方向バインディング';
  }
}
