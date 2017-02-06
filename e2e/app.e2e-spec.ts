import { browser, element, by } from 'protractor';

describe('testing home page text', function () {

  let expectedMsg = 'Home';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
