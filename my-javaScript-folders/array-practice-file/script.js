// INSERTION SORT

// [9, 5, 2, 8, 3]

function insertionSortMethod(arr){ 

  for(let i=1; i<arr.length; i++){           // i = 1 ko lete kyuki 0 mtlb akele ki value ho to vo hamesa sort from hi hoti hai isiliye 1 lete hai 
    
    let key = arr[i];                        // yaha ye varible create karke jo i ki value(5) hai usko save kar lete hai kyuki age del ho jayegi 
    
    let j = i-1;                             // yaha per  peeche wali value(9) ko lete hai compare karne ke liye ab do value ho jayegi
    
    while(j>=0 && arr[j] > key ){            // yaha per j wali value jo peeche compare karete hai ki kya ye i se badi hai 
       arr[j + 1] = arr[j];                 // yaha per age i wali value jo choti hai usko dono jagh per ab vahi hogi [9, 9, 2, 8, 3] hoga 
                                            // mtlb ab chhoti wali  value i del  wali value del ho gi lekin varible mai save hai
        
        j--                              // ye karet hai ki peeche agr value hai or to usko bhi check karte raho mtlb loop peeche chalega

    }
    arr[j+1] = key;              // yaha j ki value hai -1 kyuki jo value hoti hai maine usme ek ght jata hai to 0 se -1 ban gyi thi while
                                // while loop ki vajh se iiliye ab -1 + 1 = 0 to key ki value 5 jo save kiya tha yaha per copy kar denge 
  }

    return arr;                                //yahi method repaeat hota rahgea or arr sort ho jayegi
}

// BOBBLE SORT
// [9. 8, 6, 5, 4, 3]
function bobbleSort(arr){
   for(let i=0; i<arr.length; i++){           
     for(let j=0; j<arr.length - 1-i; j++){         // yaha se limit de di hai ki ander wala kab tk chelega jb 
                                                    // 0 per hoga to length se ek ght jaga or khud ko bhi ghta lenge islie ek or -1 kar denge
        if(arr[j] > arr[j+1]){
           let empty = arr[j+1];          // yaha per variable age wali value ko save karke rahka hai value(8) save value hai
           arr[j+1] = arr[j];             // yaha per age wali value ko swap kar diya peeche wali se 
                                          //mltb dono jagh peche wali value ko cpoy kar diya [9, 9, 6, 5, 4, 3] hai
           arr[j] = empty;                 // ab yaha per jo age value kosave karke rakh tha use yaha paste kar diya j mltb ki jb 8 ko [8, 9, 6, 5, 4, 3]
        } 
        // ab phir ye loop dubra chalega ander wala or j ki value 1 ho jayega or aise hi hoga
      }
   }
   return arr;
}
