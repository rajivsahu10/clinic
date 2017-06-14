import { ClinicPage } from './app.po';

describe('clinic App', () => {
  let page: ClinicPage;

  beforeEach(() => {
    page = new ClinicPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
