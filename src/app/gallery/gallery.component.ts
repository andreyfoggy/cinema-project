import { Component, OnInit } from '@angular/core';
import { StoreService } from '../shared/services/store.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  private fullList = [];
  public filmList = [
    {
      poster:
      'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
      title: 'Harry Potter and the Deathly Hallows: Part 2 and blalbalbalbalvalslalva',
      id: 0
    },
    {
      poster:
      'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      title: 'Italy cucumber film',
      id: 1
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg',
      title: 'Harry Potter and the Chamber of Secrets',
      id: 2
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg',
      title: 'Dante De Grasse',
      id: 3
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg',
      title: 'Harry Potter 5',
      id: 4
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg',
      title: 'Rural party',
      id: 5
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg',
      title: 'Harry Potter and the Deathly Hallows: Part 1',
      id: 1
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
      title: 'Faker stories',
      id: 1
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg',
      title: 'When Harry Met Sally...',
      id: 10
    },
    {
      poster:
       'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
      title: 'Harry Potter and the Deathly Hallows: Part 2 and blalbalbalbalvalslalva',
      id: 15
    },
    {
      poster:
       'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg',
      title: 'Life of Boris',
      id: 17
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg',
      title: 'Harry Potter and the Chamber of Secrets',
      id: 18
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg',
      title: 'Harry Potter and the Prisoner of Azkaban',
      id: 19
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg',
      title: 'Harry Potter 5',
      id: 1
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg',
      title: 'Harry Potter and the Order of the Phoenix',
      id: 123
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg',
      title: 'Harry Potter and the Deathly Hallows: Part 1',
      id: 1
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg',
      title: 'HP and the Half-Blood',
      id: 142
    },
    {
      poster: 'https://m.media-amazon.com/images/M/MV5BMjE0ODEwNjM2NF5BMl5BanBnXkFtZTcwMjU2Mzg3NA@@._V1_SX300.jpg',
      title: 'When Harry Met Sally...',
      id: 1
    }
  ];

  constructor(private store: StoreService) {
    let test = store.asynchGetFilms();
    this.fullList = JSON.parse(JSON.stringify(this.filmList));
  }
  ngOnInit() {
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
