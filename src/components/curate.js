function curate() {
        let IpArray = []; // array de ips ya configuradas contra las cuales comparar las del input

        let Input = document.getElementById("IPS").value;
        /* console.log(Input) */
        let newIpList = document.getElementById("ipList")
        let newArray = []  // colector de las ips para agergar a al array base luego de configurarlas 
        
        Input = Input.replace(/\t/g, " ")  // saca las tabulaciones
        Input = Input.replace(/, /g, ",") // saca los espacios despues de las comas
        let SortedInput = Input.split(",") // separa el string en un array 
        
        console.log(SortedInput) /* asd */
        
        // busca a ver si el usuario y la ip ya existen en el iparray
        for(var i = 0; i<SortedInput.length; i++){
            
            if(IpArray.includes(SortedInput[i])){
                console.log(SortedInput[i] + "is already in the array")
            }
            else{
                // carga en el newarray la nueva IP configurada
                newArray.push(SortedInput[i])
                
            } 
        }
        console.log(newArray)
        
        newArray.forEach((item) =>{  // agrega los items del array final a la lista
            let li = document.createElement("li")
            li.innerText = item
            newIpList.appendChild(li)
        })
    }

    export default curate;



