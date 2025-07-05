class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/bite-fish.gif';
  }

  updateOneTick() {
    super.updateOneTick();

    // Check if any other fish are nearby and "eat" them
    const nearbyFish = this.fishtank.denizens.filter(denizen => {
      return (
        denizen instanceof Fish &&
        denizen !== this &&
        this.distanceTo(denizen) < 50
      );
    });

    for (const victim of nearbyFish) {
      this.fishtank.removeDenizen(victim);
    }
  }

  distanceTo(other) {
    const dx = this.x - other.x;
    const dy = this.y - other.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

