function curate() {
        let IpArray = ["rlipuchesky-ind 120.33", "cvillasanti-ind 120.35", "engonzalez-ind .184", "aparedes-ind .148", "kmorantes-ind .153", "jmorel-ind  .153", "pafernandez-ind .165", "ntoledo-ind .177", "kgarcia-ind .71", "knavarro-ind .119", "miblanco-ind .140", "mtaboada-ind .49", "yleon-ind .71", "vadominguez-ind .184", "cmonzon-ind .140", "ylara-ind .49", "cpareta-ind .153", "ntoledo-ind .175", "dflores-ind .186", "ffelipe-ind .182", "bmaidana-ind .185", "blatorre-ind 120.35", "rboubeta-ind .183", "miblanco-ind .81", "pafernandez-ind .157", "aparedes-ind .135", "kmorantes-ind .64", "vszuldman-ind .47", "mcarnelli-ind 120.5","aparedes-ind .184", "ftoia-ind .165", "jmorel-ind .157", "kmorantes-ind .120.15", "engonzalez-ind .182", "ntoledo-ind .153", "pafernandez-ind .119", "cadiaz-ind .166", "yleon-ind .177", "ynovotka-ind .184", "ncressi-ind .49","rsosto-ind .76", "aparades-ind .184", "nlisotto-ind .148", "vvaldivienzo-ind .182", "kmorantes-ind .57", "kgarcia-ind .152", "mybarra-ind .177", "jcalvo-ind .184", "schisik-ind .148", "bfernandez-ind 120.5", "afelpeto-ind .165","vszuldman-ind .184", "engonzalez-ind .148", "nlisotto-ind .120.33", "ntoledo-ind .157", "pafernandez-ind 120.5", "vvaldivienzo-ind .135", "yleon-ind .49", "kgarcia-ind .148","alloveras-ind .182", "stoledo-ind .184", "ntoledo-ind 120.33", "cpareta-ind 120.35", "aparedes-ind 120.5", "bramirez-ind .66", "sdevinceti-ind .166", "blatorre-ind .48", "vvaldivienzo-ind 120.3", "pfernandez-ind .66", "nparra-ind .166", "fsignes-ind .48", "lstosic-ind 120.5", "mdemoraiz-ind 120.28", "yleon-ind .168", "jbengochea-ind .152", "knavarro-ind .159", "miblanco-ind .175", "npagura-ind .171", "slandro-ind .152", "engonzalez-ind .71", "brapetti-ind .159", "mbrizuela-ind .175", "jcalvo-ind .171", "mybarra-ind .152", "cmonzon-ind .59", "dumbeca-ind .43", "engonzalez-ind .43", "Anmendoza-ind .175", "ntoledo-ind .106", "afelpeto-ind .153", "atoral-ind .71", "atoral-ind .81", "ejuarez-ind .148","aparedes-ind .48", "vszuldman-ind .165", "pafernandez-ind .153", "engonzalez-ind .81", "ffelipe-ind .152", "vvaldivienzo-ind .165", "ntoledo-ind .165", "sdevicenti-ind .168", "npagura-ind .71", "slandro-ind .119", "vadominguez-ind .166", "kmorantes-ind .186", "glelawski-ind .177","jmorel-ind .153", "kgarcia-ind .71", "mtaboada-ind .49", "yleon-ind .71", "flheredia-ind .148", "fsaralegui-ind .165", "engonzalez-ind 120.35", "ejuarez-ind .81", "alidiaz-ind .152", "vvaldivienzo-ind .146", "vadominguez-ind .71", "cgonzalez-ind .71", "ynovotka-ind .186", "cmonzon-ind .148", "rsosto-ind .177", "jcalvo-ind .48", "kportilla-ind .184","afelpeto-ind .148", "ejuarez-ind .184", "pafernandez-ind .81", "ntoledo-ind .34", "ffelipe-ind .85", "engonzalez-ind .48", "npagura-ind .49", "kmorantes-ind .76", "ynovotka-ind 120.5", "cadiaz-ind .135", "mybarra-ind .119", "vadominguenz-ind .71", "anacosta-ind .49", "jmorel-ind .135", "cmonzon-ind .157", "ylara-ind .177", "bmaidana-ind 120.35", "vszuldman-ind .148", "knavarro-ind .184", "engonzalez-ind 120.33", "vvaldivienzo-ind .34", "afelpeto-ind .28", "sdevicenti-ind .83", "vherbel-ind 120.36", "vadominguez-ind .152", "cgonzalez-ind .49", "ncressi-ind .76", "ataborda-ind 120.5", "npagura-ind .119", "ynovotka-ind .135", "alloveras-ind .157", "jmorel-ind .186", "cvillasanti-ind 120.33", "alidiaz-ind .81", "vvaldivienzo-ind .48", "ntoledo-ind .26", "vherbel-ind .92", "mfoigelman-ind .65", "bmaidana-ind .49", "rboubeta-ind 120.5", "ynovotka-ind .119", "knavarro-ind-ind .71", "vszuldman-ind .157", "mybarra-ind .184", "jmorel-ind .184", "lbelli-ind 120.33", "cvillasanti-ind .89", "ntoledo-ind .140", "sdevicenti-ind .112", "mkaminiski-ind .168", "engonzalez-ind .119", "fdestefanís-ind 120.5", "ncressi-ind .71", "schisik-ind .119", "knavarro-ind.71", "vadominguez-ind .135", "ylara-ind .186", "engonzalez-ind .140", "vvaldivienzo-ind .70", "pafernandez-ind .61", "alidiaz-ind .78", "kgarcia-ind .49", "miblanco-ind .49", "mibasualdo-ind .177", "vadominguez-ind .119", "knavarro-ind .71", "jcalvo-ind .135", "ncressi-ind .157", "schisik-ind .186", "cvillsanti-ind .140", "rsosto-ind .89", "flheredia-ind 120.33", "alidiaz-ind .26", "mcarnelli-ind .91", "pafernandez-ind .65", "kmorantes-ind .49", "fsaralegui-ind .184", "cpareta-ind 120.33", "sdevinceti-ind .148", "vvaldivienzo-ind ", "ejuarez-ind .140", "pafernandez-ind 120.21", "alidiaz-ind .117", "kmorantes-ind .119", "cwilches-ind .71", "cmonzon-ind .71", "alloveras-ind .119","fsaralegui-ind 120.3", "vvaldivienzo-ind .140", "schisik-ind .160", "kmorantes-ind .158", "lcastorini-ind .71","ejuarez-ind 120.33", "vherbel-ind .184", "gmartinoli-ind .89", "pafernandez-ind .26", "alidiaz-ind 120.26", "npagura-ind 120.5", "miblanco-ind 120.27", "ylara-ind .160", "jcalvo-ind .119", "mybarra-ind .71", "ncressi-ind .135","ynovotka-ind .153", "cvillasanti-ind .183", "mdell-ind .175", "npagura-ind .115", "mybarra-ind .167", "knavarro-ind .158", "vherbel-ind .87", "ntoledo-ind .89", "ncressi-ind .159","cpareta-ind .89", "cvillasanti-ind .184", "sdevicenti-ind 120.33", "pafernandez-ind .162", "fsaralegui-ind .159", "knavarro-ind .160","engonzalez .184", "sdevicenti-ind 120.35", "vvaldivienzo-ind  .148", "mcarnelli-ind .159", "npagura-ind.71", "ataborda-ind .160", "mmunoz-ind 120.7", "miblanco-ind .76", "bmaidana-ind .71", "knavarro-ind .135", "mtaboada-ind .184"]; // array de ips ya configuradas contra las cuales comparar las del input

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



