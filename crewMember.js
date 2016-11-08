


 const CrewMember = (function createCrewMember(){
  // var id = 0;
return class {
  constructor(data, ship_id){
    this.id = data.id;
    this.position = data.position;
    this.ship_id = ship_id
    Store.data.crewMembers.push(Object.assign({}, {crewMembers: [...Store.data.crewMembers, this]}))
  }
  spaceship(){
      return Store.data.spaceships.filter((spaceship) => {
        return spaceship.id === this.ship_id;
      })}

      // engageWarpDrive(){
      //   if
      //
      // };
      // setsInvisibility(){
      //
      // };
      // chargePhasers(){
      //
      // };
}

}());

// it('should charge its phasers when a gunner calls `chargePhasers`', function() {
//   // console.log(tristian.currentShip)
//   tristan.chargePhasers()
//   expect(spaceship.phasersCharge).toBe('uncharged')
//   katie.chargePhasers()
//   expect(spaceship.phasersCharge).toBe('charged!')
// })
//
// it('should have its warp drive set to "engaged" only when the pilot uses `engageWarpDrive`', function() {
//   jon.engageWarpDrive()
//   expect(spaceship.warpDrive).toBe('disengaged')
//   tristan.engageWarpDrive()
//   expect(spaceship.warpDrive).toBe('engaged!')
// })
//
// it('should cloak when a defender `setsInvisibility`', function() {
//   katie.setsInvisibility()
//   expect(spaceship.cloaked).toBe(false)
//   jon.setsInvisibility()
//   expect(spaceship.cloaked).toBe(true)
// })
// })
// })
