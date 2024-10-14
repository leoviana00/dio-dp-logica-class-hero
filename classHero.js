
let listHeroName = [
    ["Gatsuga",100],
    ["Aldebaran", 2050],
    ["Zoldrick", 7400],
    ["Hisoka", 15000],
    ["Vishinu", 6200]
]

for (i in listHeroName){

    var xp = listHeroName[i][1]

    if(xp < 1000 ){
        console.log("O Herói " + listHeroName[i][0] +  " está no nível de Ferro" )

    } else if (xp >= 1001 && listHeroName[i][1] <= 2000) {
        console.log("O Herói " + listHeroName[i][0] +  " está no nível de Bronze" )

    } else if (xp >= 2001 && listHeroName[i][1] <= 5000) {
        console.log("O Herói " + listHeroName[i][0] +  " está no nível de Prata" )

    } else if (xp >= 5001 && listHeroName[i][1] <= 7000) {
        console.log("O Herói " + listHeroName[i][0] +  " está no nível de Ouro" )

    } else if (xp >= 7001 && listHeroName[i][1] <= 8000) {
        console.log("O Herói " + listHeroName[i][0] +  " está no nível de Platina" )

    } else if (xp >= 8001 && listHeroName[i][1] <= 9000) {
        console.log("O Herói " + listHeroName[i][0] +  " está no nível de Ascendente" )

    } else if (xp >= 9001 && listHeroName[i][1] <= 10000) {
        console.log("O Herói " + listHeroName[i][0] +  " está no nível de Imortal" )

    } else {
        console.log("O Herói " + listHeroName[i][0] +  " está no nível de Radiante" )
    }
}

// for (i = 0; i < listHeroName.length;i++){

//     var xp = listHeroName[i][1]

//     if(xp < 1000 ){
//         console.log("O Herói " + listHeroName[i][0] +  " está no nível de Ferro" )

//     } else if (xp >= 1001 && listHeroName[i][1] <= 2000) {
//         console.log("O Herói " + listHeroName[i][0] +  " está no nível de Bronze" )

//     } else if (xp >= 2001 && listHeroName[i][1] <= 5000) {
//         console.log("O Herói " + listHeroName[i][0] +  " está no nível de Prata" )

//     } else if (xp >= 5001 && listHeroName[i][1] <= 7000) {
//         console.log("O Herói " + listHeroName[i][0] +  " está no nível de Ouro" )

//     } else if (xp >= 7001 && listHeroName[i][1] <= 8000) {
//         console.log("O Herói " + listHeroName[i][0] +  " está no nível de Platina" )

//     } else if (xp >= 8001 && listHeroName[i][1] <= 9000) {
//         console.log("O Herói " + listHeroName[i][0] +  " está no nível de Ascendente" )

//     } else if (xp >= 9001 && listHeroName[i][1] <= 10000) {
//         console.log("O Herói " + listHeroName[i][0] +  " está no nível de Imortal" )

//     } else {
//         console.log("O Herói " + listHeroName[i][0] +  " está no nível de Radiante" )
//     }
// }
    

