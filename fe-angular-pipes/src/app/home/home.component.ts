import { Component } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { TitlePipePipe } from '../title-pipe.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,TitlePipePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  {
public title='Angula pipes'
public title1='ANGULAR PIPES'
public currentDate = new Date() ;
public price : number=100.35674;  
public piValue: number=3.14159265359;
public numbers :number=5;
public name : string='anushree das';

public students : any[] = [
  { "Id": 1,"First": "Mark", "Last": "Otto","Gender":"Male" },
  { "Id": 2,"First": "Jacob", "Last": "Thornton","Gender":"Male"}, 
  { "Id": 3,"First": "Lorra", "Last": "the Bird","Gender":"Female"},];

}
