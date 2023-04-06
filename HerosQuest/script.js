function Clamp(value, min, max){

    if(value > max) return Math.floor(max);
    if(value < min) return Math.floor(min);
    return Math.floor(value);
}

function GetScalledValue(
value, 
targetLevel, 
perLevel
){
    level1 = 1500
    level2 = 2000
    level3 = 30000
    level4 = 50000
    level5 = 120000

    x1 = Clamp(targetLevel, 0, level1)

    x2 = Clamp(targetLevel - x1, 0, level2)

    x3 = Clamp(targetLevel - x1 - x2, 0, level3)

    x4 = Clamp(targetLevel - x1 - x2 - x3, 0, level4)

    x5 = Clamp(targetLevel - x1 - x2 - x3 - x4, 0, level5)

    x6 = Clamp(targetLevel - x1 - x2 - x3 - x4 - x5, 0, targetLevel)


    multi = 0.75

    multi += x1 * 0.00195
    multi += x2 * 0.0024025

    multi += x3 * 0.00275

    multi += x4 * 0.00315

    multi += x5 * 0.0037

    multi += x6 * 0.0042


    levelBase = Math.floor(Math.pow(targetLevel,1.05))
    extraMulti = 1 + (Math.max(0, (targetLevel / 10000) - 2) * 0.125)
    bonus = Math.floor(perLevel)

    totalValue = Math.floor(value + levelBase * bonus) * multi * extraMulti

    return (totalValue)
}
function Get_Enemy_Health(level){
    return Math.floor(GetScalledValue(300,level,60) * 2)
}

function Get_Enemy_DMG(level){
    return Math.floor(GetScalledValue(160,level,12))
}

function Get_Enemy_DEF(level){
    return Math.floor(GetScalledValue(50,level,8))
}

function dmg_mult_to_hero(defense, damage){
    return damage/(damage + defense*2.5)
}

function dmg_mult_to_enemy(defense, damage){
    return damage/(damage + defense*1.75)
}

function dmg_to_hero_per_hit(defense, damage){
    return  (damage* dmg_mult_to_hero(defense,damage))
}

function dmg_to_enemy_per_hit(defense, damage){
    return  (damage* dmg_mult_to_enemy(defense,damage))
}

function calculateHitsTillDeath(health, defense, damage){
    return  health/(dmg_to_hero_per_hit(defense,damage))
}

function myParser(s) {
    let c = s.slice(-1).toUpperCase()
    let d = parseFloat(s.slice(0, -1));
    if (c === 'K') {
        d *= 1000;
    } else if (c === 'M') {
        d *= 1000000;
    } else if (c === 'B') {
        d *= 1000000000;
    } else if (c == 'T') {
        d *= 1000000000000;
    } else {
        return parseInt(s);
    }
    return parseInt(d);
}

function Bobbi(){
	let NewHP = myParser(document.getElementById("In1").value);
	let NewDamage = myParser(document.getElementById("In2").value);
	
	let TopDefense = myParser(document.getElementById("In3").value);
	let BasicDefense = myParser(document.getElementById("In4").value) + 50;
	
	let NewDefense = (TopDefense-BasicDefense)*3 + BasicDefense;
	
	let AttackSpeed = parseFloat(document.getElementById("In5").value,10);
	
	NewHP = NewHP + TopDefense/2;
	
	for (let enemy_lvl=2; enemy_lvl<100000; enemy_lvl++){
		let Hits = calculateHitsTillDeath(NewHP,NewDefense,Get_Enemy_DMG(enemy_lvl));
		let Opponent_Health = Get_Enemy_Health(enemy_lvl);
		
		let damagePerMyHit = Math.floor(dmg_to_enemy_per_hit(Get_Enemy_DEF(enemy_lvl),NewDamage))

		
		let DamageDealt = Hits * damagePerMyHit* AttackSpeed

		if ((DamageDealt < Opponent_Health)){
			document.getElementById("An1").value = enemy_lvl-1;
			break;
    }
}
	
	
}

In1.oninput = Bobbi;
In2.oninput = Bobbi;
In3.oninput = Bobbi;
In4.oninput = Bobbi;
In5.oninput = Bobbi;
//setInterval(Bobbi,1000);