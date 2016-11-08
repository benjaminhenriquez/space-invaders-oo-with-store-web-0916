


 const Spaceship = (function createSpaceship(){
  // var id = 0;
return class {
  constructor(data){
    this.id = data.id
    this.name = data.name;
    this.phasers = data.phasers;
    this.shields = data.shields
    Store.data.spaceships.push(Object.assign({}, {spaceships: [...Store.data.spaceships, this]}))
  }
  crewMembers(){
      return Store.data.crewMembers.filter((crewMember) => {
        return crewMember.ship_id === this.id;
      })}
}

}());
