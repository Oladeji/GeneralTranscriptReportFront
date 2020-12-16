import { GeneralmodModule } from './generalmod.module';

describe('GeneralmodModule', () => {
  let generalmodModule: GeneralmodModule;

  beforeEach(() => {
    generalmodModule = new GeneralmodModule();
  });

  it('should create an instance', () => {
    expect(generalmodModule).toBeTruthy();
  });
});
