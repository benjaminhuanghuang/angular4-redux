import { Angular4ReduxPage } from './app.po';

describe('angular4-redux App', () => {
  let page: Angular4ReduxPage;

  beforeEach(() => {
    page = new Angular4ReduxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
