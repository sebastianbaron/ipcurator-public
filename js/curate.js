// Array de IPs configuradas
let IpArray = ["rlipuchesky-ind 120.33", "cvillasanti-ind 120.35", "engonzalez-ind .184", "aparedes-ind .148", "kmorantes-ind .153", "jmorel-ind  .153", "pafernandez-ind .165", "ntoledo-ind .177", "kgarcia-ind .71", "knavarro-ind .119", "miblanco-ind .140", "mtaboada-ind .49", "yleon-ind .71", "vadominguez-ind .184", "cmonzon-ind .140", "ylara-ind .49", "cpareta-ind .153", "ntoledo-ind .175", "dflores-ind .186", "ffelipe-ind .182", "bmaidana-ind .185", "blatorre-ind 120.35", "rboubeta-ind .183", "miblanco-ind .81", "pafernandez-ind .157", "aparedes-ind .135", "kmorantes-ind .64", "vszuldman-ind .47", "mcarnelli-ind 120.5","aparedes-ind .184", "ftoia-ind .165", "jmorel-ind .157", "kmorantes-ind .120.15", "engonzalez-ind .182", "ntoledo-ind .153", "pafernandez-ind .119", "cadiaz-ind .166", "yleon-ind .177", "ynovotka-ind .184", "ncressi-ind .49","rsosto-ind .76", "aparades-ind .184", "nlisotto-ind .148", "vvaldivienzo-ind .182", "kmorantes-ind .57", "kgarcia-ind .152", "mybarra-ind .177", "jcalvo-ind .184", "schisik-ind .148", "bfernandez-ind 120.5", "afelpeto-ind .165","vszuldman-ind .184", "engonzalez-ind .148", "nlisotto-ind .120.33", "ntoledo-ind .157", "pafernandez-ind 120.5", "vvaldivienzo-ind .135", "yleon-ind .49", "kgarcia-ind .148","alloveras-ind .182", "stoledo-ind .184", "ntoledo-ind 120.33", "cpareta-ind 120.35", "aparedes-ind 120.5", "bramirez-ind .66", "sdevinceti-ind .166", "blatorre-ind .48", "vvaldivienzo-ind 120.3", "pfernandez-ind .66", "nparra-ind .166", "fsignes-ind .48", "lstosic-ind 120.5", "mdemoraiz-ind 120.28", "yleon-ind .168", "jbengochea-ind .152", "knavarro-ind .159", "miblanco-ind .175", "npagura-ind .171", "slandro-ind .152", "engonzalez-ind .71", "brapetti-ind .159", "mbrizuela-ind .175", "jcalvo-ind .171", "mybarra-ind .152", "cmonzon-ind .59", "dumbeca-ind .43", "engonzalez-ind .43", "Anmendoza-ind .175", "ntoledo-ind .106", "afelpeto-ind .153", "atoral-ind .71", "atoral-ind .81", "ejuarez-ind .148",];


function Curar(){
    let Input = document.getElementById("IPS").value;
    /* console.log(Input) */
    let newIpList = document.getElementById("ipList")
    let newArray = []  // colector de las ips para agergar a al array base luego de configurarlas 
    Input = Input.replace(/\t/g, " ")
    let SortedInput = Input.split(",")
    console.log(SortedInput)

    // busca a ver si el usuario y la ip ya existen en el iparray
    for(var i = 0; i<SortedInput.length; i++){
        
        if(IpArray.includes(SortedInput[i])){
            console.log(SortedInput[i] + "is already in the array")
        }
        else{
            /* alert(SortedInput[i] + "se tiene que configurar") */
            // carga en el newarray la nueva IP configurada
            newArray.push(SortedInput[i])
            
        } 
    }
    console.log(newArray)

    newArray.forEach((item) =>{
        let li = document.createElement("li")
        li.innerText = item
        newIpList.appendChild(li)
    })
}
