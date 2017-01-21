// import { NodulusXPage } from './app.po';

// describe('nodulus-x App', function() {
//   let page: NodulusXPage;

//   beforeEach(() => {
//     page = new NodulusXPage();
//   });

//   it('should display message saying app works', () => {
//     page.navigateTo();
//     console.log(page.getParagraphText());
//     expect(page.getParagraphText()).toEqual('main works!');
//   });
// });

 
const Zombie = require("zombie");
var url = "http://localhost:4200/";
var browser = new Zombie();

describe("testing with zombie", function() {

    it("should have defined headless browser", function(next){     
        expect(typeof browser != "undefined").toBe(true);
        expect(browser instanceof Zombie).toBe(true);
        next();
    });

    it("should visit the site and see the login form", function(next) {
        browser.visit(url, function(err) {
            expect(browser.success).toBe(true);
            expect(browser.query("input[value='Login']")).toBeDefined();
            next();
        })
    });

});