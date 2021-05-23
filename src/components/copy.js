function copyText(a){
        navigator.clipboard.writeText(a)
        console.log(a + "Copied Succesfully")
}

export default copyText;