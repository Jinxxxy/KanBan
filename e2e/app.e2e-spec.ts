import { KanBanProtoPage } from './app.po';

describe('kan-ban-proto App', () => {
  let page: KanBanProtoPage;

  beforeEach(() => {
    page = new KanBanProtoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
