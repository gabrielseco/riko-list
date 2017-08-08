import { ExampleRikoPage } from './app.po';

describe('example-riko App', () => {
  let page: ExampleRikoPage;

  beforeEach(() => {
    page = new ExampleRikoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
