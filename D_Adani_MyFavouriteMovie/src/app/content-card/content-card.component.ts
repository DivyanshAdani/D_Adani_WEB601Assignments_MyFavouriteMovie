import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  Movies:ContentList= new ContentList();
  constructor(){
    this.Movies.add({
      "id": 1,
      "title": "Chak De! India",
      "description": "Experience the heart-pounding journey of a former hockey player turned coach who leads the Indian women's hockey team to unprecedented glory. The film explores themes of passion, teamwork, and the relentless pursuit of excellence.",
      "imgUrl": "https://static.toiimg.com/photo/39823548.cms",
      "type": "Sports Drama",
      "creator": "Yash Raj Films"

    })

    this.Movies.add({
      "id": 2,
      "title": "Dil Chahta Hai",
      "description": "Embark on a nostalgic ride through friendship, love, and self-discovery as three inseparable childhood friends navigate the ups and downs of life. This coming-of-age Bollywood classic captures the essence of youth and enduring bonds.",
      "imgUrl": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/dil_chahta_hai_main.jpeg?VersionId=XVomON7.AFqMt0psfjXnvmkaRFTQ6hyL&size=690:388",
      "type": "Drama, Romance",
      "creator": "Excel Entertainment"

    })
    this.Movies.add({
      "id": 3,
      "title": "Lagaan",
      "description": "Set against the backdrop of British colonial rule in India, 'Lagaan' tells the inspiring tale of a group of villagers who challenge their oppressors to a game of cricket to break free from oppressive taxes. A cinematic masterpiece that combines sports, drama, and patriotism.",
      "imgUrl": "https://occ-0-1433-2705.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfKqVbdyhVBlw23R5YTnBE00c6KDP0AL_P3tC1zvcQNo8cRZW8_MzkpG67let3gDUHpKvxE8vMGluvoM23QPz4NHvLnPBMNNEw5d.jpg?r=dd5",
      "type": "Period Drama, Sports",
      "creator": "Aamir Khan Productions"

    })

  }}
