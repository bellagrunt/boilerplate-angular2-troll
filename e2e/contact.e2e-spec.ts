import { browser, element, by } from 'protractor';

describe('test about sanity', function() {
  var sanityPage = require("../e2e/methods/sanityMethod_method.js")

  beforeAll( function() {
    browser.sleep(5000);
    browser.get('http://localhost:3002/contact');
  } );

  it('should validate on contact page', function() {
    browser.manage().timeouts().implicitlyWait(5000);
    expect( sanityPage.validateContact() ).toBe("mattbellantoni3@gmail.com");
  } );

  it('should click on about page and validate it exists', function() {
      sanityPage.clickOnAbout();
      browser.pause();
    //   expect( sanityPage.clickOnAbout() ).toBe("");
  } );

} );