import { SchoolPortalFbPage } from './app.po';

describe('school-portal-fb App', function() {
  let page: SchoolPortalFbPage;

  beforeEach(() => {
    page = new SchoolPortalFbPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
