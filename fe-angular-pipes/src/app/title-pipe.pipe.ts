
import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'titlePipe',
  standalone: true
})
export class TitlePipePipe implements PipeTransform {

  transform(returnValue: any , ...args: any[]): any {
    console.log('array',returnValue);
    // console.log('g',gender)
    
    

   
     console.log('returnValue',returnValue);

     for(let i=0;i< returnValue.length;i++){
       console.log(i,returnValue[i].Gender);
       if(returnValue[i].Gender.toLowerCase() == 'male'){
        returnValue[i].First = "Mr." + returnValue[i].First;
        console.log( returnValue[i].First);
         
       }
       else{
        returnValue[i].First = "Ms." + returnValue[i].First;
        console.log( returnValue[i].First);
         
       }
 
      
     }
     return ( returnValue);
     


    
    

    // let returnValue = value.split(' ')
    // console.log('returnValue',returnValue);
    // for(let i=0;i< returnValue[i]?.length;i++){
    //   console.log(i,returnValue[i]);
    //   returnValue[i]=returnValue[i].charAt(0).toUpperCase() + returnValue[i]?.slice(1).toLowerCase()
    //   console.log('rettxt',returnValue[i]);
      
    // }
    // let finalName = returnValue.join(' ')?.replaceAll(' ,','');
    // // finalName = finalName?.slice(0)
    // return finalName
    
     
    
    
  }

}
