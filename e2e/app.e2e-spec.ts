import { MaterialSpotifyPage } from './app.po';

describe('material-spotify App', function() {
  let page: MaterialSpotifyPage;

  beforeEach(() => {
    page = new MaterialSpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
