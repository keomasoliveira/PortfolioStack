
import { Component, OnInit } from '@angular/core';
import { Git } from '../../models/Git';
import { SharedService } from '../../models/global';
import { ServiceGitService } from '../../services/service-git.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
export class PortfolioComponent implements OnInit {

  gitParse!: Git[];

  dadosGit!: Git[];
  dadosLingGit!: any[];

  constructor(
    public gitService: ServiceGitService,
    public sharedService: SharedService
  ) {}

  ngOnInit() {
    this.gitRepoRun();
  }
  gitRepoRun() {
    this.gitService.getRepo().subscribe({
      next: (git: Git[]) => {
        this.gitParse = git;
        console.log(git);

      },
    });
  }


gitRepo1!:any;
 pegarLing(repo:any){
  this.gitService.getLingTest(repo[0]).subscribe(
    (x)=>{
      this.gitRepo1 = x;
      console.log(x);
    }
  )
}
}
