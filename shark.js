class Shark extends BiteFish {
  constructor(options) {
    super(options);
    this.imageUri = '/images/shark.png'; // Add your own shark image
    this.height = 80;
    this.width = 80;
  }

  onClick(event) {
    this.makeNewVelocity(150); // Super charge it when clicked
  }
}