
//Create a class for Wrestling companies and Wrestlers
class Wrestler {
  constructor(name, brand) {
    this.name = name; //where the names will be stored
    this.brand = brand; // where the company will be stored
  }
 
  describe() {
    //console.log(`${this.name} wrestles for ${this.company}`)
    return `${this.name} wrestles for ${this.brand}`; // brand
  }
  }
//Creating the class for the shows of the company
class Brand {
  constructor(name) {
    this.name = name;
    this.wrestlers = [];
  }//Adds wrestler to the brand
  addWrestler(wrestler) {
    if (wrestler instanceof Wrestler) {
    this.wrestlers.push(wrestler);
    } else {
    throw new Error(`You can only add an instance of Wrestler. 
    argument is not a wrestler: ${wrestler}`);
    }
    }
    
    describe() {
    return `${this.name} has ${this.wrestlers.length} wrestlers.`;
    }
  }
class Menu {
  //what drives the application and the choices made
  constructor() {
    this.brands = [];
    this.selectedBrand = null; // manages one brand at a time
  }

  start() {//entry point to application
    console.log("Loading Menu.....");
    let selection = this.showMainMenuOptions();
    console.log("This is the selection", selection);
    while (selection != 0) {
      switch (selection) {
        case '1':
          this.createBrand();
          break;
        case '2':
          this.deleteBrand();
          break;
        case '3':
          this.viewBrand();
          break;
        case '4':
          this.displayBrands();
          break;
        default:
          selection = 0;
      }
      selection = this.showMainMenuOptions();
    }
    alert("It Doesn't Matter What You Picked JABRONI. BYE"); //Wrestling catch phase of saying goodbye
  }

  /* Main Menu options created that will prompt user to make a selection
each number command will cause the menu to perform what is listed */
  showMainMenuOptions() {
    return prompt(`
        0) exit
        1) create a new brand
        2) delete a brand
        3) view a brand
        4) display all teams
        `);
         }
  // where you can create wrestlers for each brand
  showBrandMenuOptions(brandInfo) {
    return prompt(`
        0) Go back to Main Menu
        1) create a new wrestler
        2) delete a wrestler
        ----------------------
        ${brandInfo}
        `);
        }
  //where the brand names will display in view
  displayBrands() {
    let brandString = '';
    for (let i = 0; i < this.brands.length; i++) {
      brandString += i + ")" + this.brands[i].name + "\n";
    }
    alert(brandString); // an alert will show up with the brand string
     }
  // creating a brand method
  createBrand() {
    let name = prompt('Enter name for the new brand ');
    this.brands.push(new Brand(name)); // new brand will be created and pushed there
    console.log(this.brands); //check to see if it worked
  }

  deleteBrand() {
    
    let index = prompt('Enter the index of the brand you want to delete: ');
    if (index > -1 && index < this.brands.length) {
      this.brands.splice(index, 1);
    }
  }
  viewBrand() {
    let index = prompt("Enter the index of the brand you would like to view: ");
    if (index > -1 && index < this.brands.length) {
      //Checks for valid selection
      this.selectedBrand = this.brands[index];
      let description = 'Brand Name: ' + this.selectedBrand.name + '\n';
      description += ' '  + this.selectedBrand.describe() + '\n ';
      
      for (let i = 0; i < this.selectedBrand.wrestlers.length; i++) {
        // description += i + ') ' + this.selectedTeam.players[i].name + ' - '
        // + this.selectedTeam.players[i].position + '\n';
        description += i + ') ' + this.selectedBrand.wrestlers[i].describe() + '\n';
      }
      let selection1 = this.showBrandMenuOptions(description);
      switch (selection1) {
        case '1':
          this.createWrestler();
          break; 

        case '2':
          this.deleteWrestler();
      }
    }
}//stopped here
    createWrestler() {
    let name = prompt('Enter name for new wrestler: ');
    let brand = this.selectedBrand.name
    this.selectedBrand.addWrestler(new Wrestler(name,brand));
    }
  deleteWrestler() {
    let index = prompt('Choose index of wrestler you would like to delete: ');
    if (index > -1 && index < this.selectedBrand.wrestlers.length) {
      this.selectedBrand.wrestlers.splice(index, 1);
    }
    }
    }

let menu = new Menu();
menu.start();
