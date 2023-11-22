import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {

  //estou declarando um vetor (names: [] ou names: Array<string>)
  //o = [], você está iniciliazando o vetor;
  peoples: any[] = [];

  // injeção de dependência
  constructor(private service: PeopleService){

  }

  ngOnInit(): void {
    this.listarPeople();
  }

  public listarPeople(){
    this.service.listarPeople().subscribe((people: any) => {
      /*console.log(`O valor de count é: ${people.count}`)
      console.log(`O valor de next é: ${people.next}`)
      console.log(`O valor de result[0] é: ${people.results[0].name}`)*/
      this.peoples = people.results;
      /*console.log(this.peoples);*/
    });
  }

}
