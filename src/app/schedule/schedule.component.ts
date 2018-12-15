import { Component, OnInit } from '@angular/core';
import { HttpService } from '../shared/services/http.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  private fullList = [];
  public filmList = [
    {
      poster:
      'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
      title: 'Harry Potter and the Deathly Hallows: Part 2 and blalbalbalbalvalslalva',
      id: 0,
      genre: ''
    },
    {
      poster:
      'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      title: 'Harry Potter and the Sorcerer s Stone',
      id: 1,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg',
      title: 'Harry Potter and the Chamber of Secrets',
      id: 2,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg',
      title: 'Harry Potter and the Prisoner of Azkaban',
      id: 3,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg',
      title: 'Harry Potter 5',
      id: 4,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg',
      title: 'Harry Potter and the Order of the Phoenix',
      id: 5,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg',
      title: 'Harry Potter and the Deathly Hallows: Part 1',
      id: 6,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
      title: 'HP and the Half-Blood',
      id: 7,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg',
      title: 'When Harry Met Sally...',
      id: 8,
      genre: ''
    },
    {
      poster:
       'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
      title: 'Harry Potter and the Deathly Hallows: Part 2 and blalbalbalbalvalslalva',
      id: 9,
      genre: ''
    },
    {
      poster:
       'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      title: 'Harry Potter and the Sorcerer s Stone',
      id: 10,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg',
      title: 'Harry Potter and the Chamber of Secrets',
      id: 11,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg',
      title: 'Harry Potter and the Prisoner of Azkaban',
      id: 12,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg',
      title: 'Harry Potter 5',
      id: 13,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg',
      title: 'Harry Potter and the Order of the Phoenix',
      id: 14,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg',
      title: 'Harry Potter and the Deathly Hallows: Part 1',
      id: 15,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
      title: 'HP and the Half-Blood',
      id: 16,
      genre: ''
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg',
      title: 'When Harry Met Sally...',
      id: 17,
      genre: ''
    }
  ];

  constructor(private http: HttpService) {
    this.fullList = JSON.parse(JSON.stringify(this.filmList));
   }

  ngOnInit() {
    this.http.getFilms()
      .subscribe(filmsData => {
        filmsData.forEach((item, index) => {
            this.filmList[index].title = item.Name;
            this.filmList[index].genre = item.Genre.Name;
        });
        console.log(this.filmList);
      });
  }

  public filterFilms(value) {
    const searchQuery = value.toLowerCase();
    this.filmList = JSON.parse(JSON.stringify(this.fullList));
    this.filmList = this.filmList.filter((item) => {
        const searchValue = item.title.toLowerCase();
        return searchValue.indexOf(searchQuery) !== -1;
    });
  }

}
