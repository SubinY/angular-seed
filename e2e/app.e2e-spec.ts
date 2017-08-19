import { MyRjrxPage } from './app.po';

describe('my-rjrx App', () => {
  let page: MyRjrxPage;

  beforeEach(() => {
    page = new MyRjrxPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
