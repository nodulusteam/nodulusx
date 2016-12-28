import { NodulusXPage } from './app.po';

describe('nodulus-x App', function() {
  let page: NodulusXPage;

  beforeEach(() => {
    page = new NodulusXPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
