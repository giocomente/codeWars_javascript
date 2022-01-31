function DNAStrand(dna){
    let s = [];
    dna.split('').forEach(e => {
        switch(e){
            case 'A':s.push('T');break;
            case 'T':s.push('A');break;
            case 'G':s.push('C');break;
            case 'C':s.push('G');break;
        };
    });
    return s.join('');
}
console.log("");
console.log(DNAStrand(""));