import { browser, element, by } from 'protractor';

describe('test about sanity', function() {
  var sanityPage = require("../e2e/methods/sanityMethod_method.js")

  beforeAll( function() {
    browser.sleep(5000);
    browser.get('http://localhost:3002/');
  } );

  it('should click on about page and validate it exists', function() {
      sanityPage.clickOnAbout();
      expect( sanityPage.validateAbout() ).toBe( "About" );
      browser.pause();
  } );

} );