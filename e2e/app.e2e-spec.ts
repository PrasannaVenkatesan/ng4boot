import { Ng4bootPage } from './app.po';

describe('ng4boot App', () => {
  let page: Ng4bootPage;

  beforeEach(() => {
    page = new Ng4bootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
