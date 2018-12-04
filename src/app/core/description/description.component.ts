import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})


export class DescriptionComponent implements OnInit {
  public iframe_html: string;
  public toggleTrailer: boolean = false;
  public filmList =
    {
      name: "Фантастические звери: Преступления Гриндельвальда",
      genre: "Великобритания, США, 2018 / Фэнтези, приключения/ Дэвид Йэтс / Эдди Редмэйн, Джуд Лоу, Джонни Депп, Зои Кравитц, Кэтрин Уотерстоун, Дэн Фоглер, Элисон Судол, Эзра Миллер / 134 мин. / Могущественный тёмный волшебник Геллерт Грин-де-Вальд пойман в Штатах, но не собирается молча сидеть в темнице и устраивает грандиозный побег. Теперь ничто не помешает ему добиться своей цели — установить превосходство волшебников над всеми немагическими существами на планете. Чтобы сорвать планы Грин-де-Вальда, Альбус Дамблдор обращается к своему бывшему студенту Ньюту Саламандеру, который соглашается помочь, не подозревая, какая опасность ему грозит. В раскалывающемся на части волшебном мире любовь и верность проверяются на прочность, а конфликт разделяет даже настоящих друзей и членов семей.",
      image: "https://api.vkino.com.ua/posters/46/46ddca24f9a0dd39089259d9531d475e673e8fa8.C175x248.jpg @https://pioner-cinema.ru/wp-content/uploads/2018/10/pioner-cinema.ru_e3c1712ed50fca219faeb2d1c1a889d7.jpg",
      youtube: "https://www.youtube.com/watch?v=TwvJe2VwhTU",
      id: 0
    }
    public id: number;
    private subscription: Subscription;
    constructor(private route: ActivatedRoute, private embedService: EmbedVideoService) {
      this.subscription = route.params.subscribe(params => this.id = params['id']);
      this.iframe_html = this.embedService.embed(this.filmList.youtube, { query: { portrait: 0, color: '333' }, attr: { width: '100%', height: 450 } })
      console.log(this.filmList.id)
    }
    public showTrailer () {
      this.toggleTrailer = !this.toggleTrailer
    }

  ngOnInit() {
  }
}
