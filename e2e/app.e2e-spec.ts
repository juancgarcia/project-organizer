import { ProjectOrganizerPage } from './app.po';

describe('project-organizer App', () => {
  let page: ProjectOrganizerPage;

  beforeEach(() => {
    page = new ProjectOrganizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
