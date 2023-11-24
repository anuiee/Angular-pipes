import { TitlePipePipe } from './title-pipe.pipe';

describe('TitlePipePipe', () => {
  it('create an instance', () => {
    const pipe = new TitlePipePipe();
    expect(pipe).toBeTruthy();
  });
});



// it('should transform the input', inject([Toggl], (pipe:Toggl) => {
//   expect(pipe.transform(true)).toBe(null);
// }));