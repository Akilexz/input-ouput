import { InputsOutputsPage } from './app.po';

describe('inputs-outputs App', () => {
  let page: InputsOutputsPage;

  beforeEach(() => {
    page = new InputsOutputsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
