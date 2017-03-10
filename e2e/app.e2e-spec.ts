import { DailyStatusAngularPage } from './app.po';

describe('daily-status-angular App', () => {
  let page: DailyStatusAngularPage;

  beforeEach(() => {
    page = new DailyStatusAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
