function getDate(n:number) {
    let objdate  = new Date(n)
       let date = objdate.toISOString().replace(/^([^T]+)T(.+)$/,'$1')
       .replace(/^(\d+)-(\d+)-(\d+)$/,'$3.$2.$1');
       let time = objdate.getHours()+ ':'+ objdate.getMinutes()+':'+ objdate.getSeconds()
       return date +'\n'+ time
    
}

export default getDate;