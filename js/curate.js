// Array de IPs configuradas
let IpArray = ["rlipuchesky-ind 120.33", "cvillasanti-ind 120.35", "engonzalez-ind .184", "aparedes-ind .148", "kmorantes-ind .153", "jmorel-ind  .153", "pafernandez-ind .165", "ntoledo-ind .177", "kgarcia-ind .71", "knavarro-ind .119", "miblanco-ind .140", "mtaboada-ind .49", "yleon-ind .71", "vadominguez-ind .184", "cmonzon-ind .140", "ylara-ind .49", ""];


function Curar(){
    let Input = document.getElementById("IPS").value;
    console.log(Input)

    let SortedInput = Input.split(",")
    console.log(SortedInput)
    // busca a ver si el usuario y la ip ya existen en el iparray
    for(var i = 0; i<SortedInput.length; i++){
        let NewArray = []
        if(IpArray.includes(SortedInput[i])){
            console.log(SortedInput[i] + "is already in the array")
        }
        else{
            alert(SortedInput[i] + "se tiene que configurar")
            // carga en el newarray la nueva IP configurada
            NewArray.push(SortedInput[i])
            console.log(NewArray)
        }
    }

}
