import { SPAFrameworkPage } from './app.po';

describe('spaframework App', () => {
  let page: SPAFrameworkPage;

  beforeEach(() => {
    page = new SPAFrameworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
