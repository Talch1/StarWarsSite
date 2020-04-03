export default class SwapiService {

    _apiBase ='https://swapi.co/api/'

    async getResorce(url) {
           const res = await fetch(`${this._apiBase}${url}`);

           if (!res.ok) {
               throw new Error(`Could not fethc ${this._apiBase}${url}`
               + `receved ${res.status}`)
           }
           return await res.json();
       }

      async getAllPeople(){
           const res = await this.getResorce(`people/`);
           return res.results;
       }  
       getPerson(id){
           return this.getResorce(`people/${id}/`);
       }
      async getAllPlanets(){
           const res = await this.getResorce(`planets/`);
           return res.results;
       }  
       getPlanet(id){
           return this.getResorce(`planets/${id}/`);
       }
}     

const swapi = new SwapiService();

swapi.getAllPeople().then((people)=>{
   console.log('//////////////////////////////////////////////');         
    people.forEach((p) => {
       console.log(p.name);
    });
    console.log('/////////////////////////////');         
})
swapi.getPerson(3).then((person)=>{
   console.log('/////////////////////////////');         
   console.log(person);
   console.log('/////////////////////////////');    
    }); 
    swapi.getAllPlanets().then((planet)=>{
   console.log('/////////////////////////////');         
    planet.forEach((p) => {
       console.log(p.name);
    });
    console.log('/////////////////////////////');         
})
swapi.getPlanet(3).then((planet)=>{
   console.log('/////////////////////////////');         
   console.log(planet);
   console.log('/////////////////////////////');    
    });