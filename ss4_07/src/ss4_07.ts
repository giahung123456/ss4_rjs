function  processInput(input: string | number | boolean):void{
    if(typeof input===`string`){
        if(!isNaN(Number(input))){
           let num=Number(input)
           console.log(num*num);
           
        }else{
            let count=0;
            for(let i=0;i<input.length;i++){
                let character=input.charAt(i)
                if((character >= 'a' && character <= 'z') ||  (character >= 'A' && character <= 'Z')){
                    count++
                }
            }
            console.log(count);
            
        }
    }else if(typeof input===`number`){
        if(input<2){
            console.log(`không phải số nguyên tố`);
        
            
        }else{
            let checkNum=0
            for(let i=2;i<=Math.sqrt(input);i++){
                if(input%i===0){
                    checkNum=1
                    break
                }
            }
            if(checkNum===1){
                console.log(` không là số nguyên tố`);
                
            }else{

                console.log(` là số nguyên tố`);
                
            }
        }
    }else{
        if(input){
            console.log( "Giá trị là true - tiến hành xử lý");
            
        }else{
            console.log( "Giá trị là false - dừng xử lý");
            
        }
    }
}
processInput(false)



// let i:string=`abc`
// console.log(i);

// function uae(i:string){
//     if(isNaN(Number(i))){
//         console.log(`oke`);
        
//     }
// }
// console.log(i);
