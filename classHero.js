// Lisa de heros com seus xps
let listHeros = [
    ["Gatsuga",100],
    ["Aldebaran", 2050],
    ["Zoldrick", 7400],
    ["Hisoka", 15000],
    ["Vishinu", 6200]
]

// Laço para processamento dos heróis utilizando a função que calcula o level do hero baseado no xp
for (let heroXp = 0; heroXp < listHeros.length; heroXp ++){
    let nameHero = listHeros[heroXp][0]
    let xpHero = listHeros[heroXp][1]
    let levelHero = calcLevelHero(xpHero)

    console.log(`O Herói de nome ${nameHero} está no nível ${levelHero}`);

}

// Calcular o level com base no XP
function calcLevelHero(xp) {
    const levels = {
      Ferro: { min: 0, max: 1000 },
      Bronze: { min: 1001, max: 2000 },
      Prata: { min: 2001, max: 5000 },
      Ouro: { min: 5001, max: 7000 },
      Platina: { min: 7001, max: 8000 },
      Ascendente: { min: 8001, max: 9000 },
      Imortal: { min: 9001, max: 10000 },
      Radiante: { min: 10001, max: Infinity }
    };

    for (level in levels){
        if(xp >= levels[level].min && xp <= levels[level].max){
            return level;
        }
    }
}