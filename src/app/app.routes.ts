import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ActivitiesComponent } from "./activities/activities.component";
import { ResultsComponent } from "./results/results.component";
import { ResearchTeamComponent } from "./research-team/research-team.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "activities", component: ActivitiesComponent },
  { path: "results", component: ResultsComponent },
  { path: "research-team", component: ResearchTeamComponent },
];
