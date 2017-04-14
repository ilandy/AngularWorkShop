import { Week10Page } from './app.po';

describe('week10 App', () => {
  let page: Week10Page;

  beforeEach(() => {
    page = new Week10Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
