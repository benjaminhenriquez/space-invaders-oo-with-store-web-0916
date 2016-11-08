class CrewMember {
 constructor(object) {
   this.id = object.id;
   this.position = object.position
   this.currentShip = 'Looking for a Rig'
   Store.data['crewMembers'].push(this)
 }

 assignShip(spaceship) {
     this.currentShip = spaceship
     this.currentShip.docked = false
     this.spaceshipId = spaceship.id
 }

 chargePhasers() {
   if (this.position === 'Gunner' && this.spaceshipId) {
     this.currentShip.phasersCharge = 'charged!'
   } else {
     return 'had no effect'
   }
 }

 engageWarpDrive() {
   if (this.position === 'Pilot' && this.spaceshipId) {
     this.currentShip.warpDrive = 'engaged!'
   } else {
     return 'had no effect'
   }
 }

 setsInvisibility() {
   if (this.position === 'Defender' && this.spaceshipId) {
     this.currentShip.cloaked = true
   } else {
     return 'had no effect'
   }
 }
}
