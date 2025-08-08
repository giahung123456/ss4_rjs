function check(input:number|string){
    if(typeof input==="string"){
        console.log(input.length);
        
    }else if(typeof input==="number"){
        if(input%2===0){
            console.log(`chẵn`);
            
        }else{
            console.log(`lẻ`);
            
        }
    }
}
check(`kuavd`)