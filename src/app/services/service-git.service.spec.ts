/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServiceGitService } from './service-git.service';

describe('Service: ServiceGit', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceGitService]
    });
  });

  it('should ...', inject([ServiceGitService], (service: ServiceGitService) => {
    expect(service).toBeTruthy();
  }));
});
