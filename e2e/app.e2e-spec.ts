import { DevelopersLangagesAppPage } from './app.po';

describe('developers-langages-app App', () => {
  let page: DevelopersLangagesAppPage;

  beforeEach(() => {
    page = new DevelopersLangagesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
