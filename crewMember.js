


 const CrewMember = (function createCrewMember(){
  // var id = 0;
return class {
  constructor(data, ship_id){
    this.id = data.id;
    this.position = data.position;
    this.ship_id = ship_id
  }
  spaceship(){
      return store().spaceship.filter((spaceship) => {
        return spaceship.id === this.ship_id;
      })}


}

}());
