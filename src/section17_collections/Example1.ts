class MyCar
{
	public brandName:string;

	constructor(brandName:string){
		this.brandName = brandName;
	}

}
let carSet:Set<MyCar> = new Set<MyCar>();
carSet.add(new MyCar("Ferrari"));

let lambo:MyCar = new MyCar("Lamborghini Gallardo");
carSet.add(lambo);

let macLaren:MyCar = new MyCar("MAC Laren");
carSet.add(macLaren);

console.log(carSet);

carSet.add(macLaren);
carSet.add(lambo);

console.log(carSet);


console.log( "Size Of Set : " + carSet.size);
console.log( "Lambo Is Present Or Not : " + carSet.has(lambo));
console.log(carSet.has(lambo));
