function HouseKeeper(yearsExperience, name, cleaningRepertoire) {
  this.yearsExperience = yearsExperience;
  this.name = name;
  this.cleaningRepertoire = cleaningRepertoire;
  this.clean = function () {
    alert("cleaning in progress");
  };
}

var houseKeeper1 = HouseKeeper(3, "Sarah", ["lobby", "bathroom"]);

console.log(houseKeeper1.clean());
