import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from "../content-card/content-card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-list',
  standalone: true,
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
  imports: [ContentCardComponent,CommonModule]
})
export class ContentListComponent implements OnInit{
  moviesContent: Content[];
  constructor(){
    this.moviesContent=[];
  }

  ngOnInit(): void {


    this.moviesContent =[
      {
        id: 1,
        title: "Chak De! India",
        description: "Experience the heart-pounding journey of a former hockey player turned coach who leads the Indian women's hockey team to unprecedented glory. The film explores themes of passion, teamwork, and the relentless pursuit of excellence.",
        imgUrl: "https://static.toiimg.com/photo/39823548.cms",
        type: "Sports Drama",
        creator: "Yash Raj Films",
        tags: ['Hockey, Teamwork, Excellence']

      },
      {
        id: 2,
        title: "Dil Chahta Hai",
        description: "Embark on a nostalgic ride through friendship, love, and self-discovery as three inseparable childhood friends navigate the ups and downs of life. This coming-of-age Bollywood classic captures the essence of youth and enduring bonds.",
        imgUrl: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/dil_chahta_hai_main.jpeg?VersionId=XVomON7.AFqMt0psfjXnvmkaRFTQ6hyL&size=690:388",
        type: "Drama, Romance",
        creator: "Excel Entertainment",
        tags: ['Friendship', 'Love', 'Self-discovery']
      },
      {
        id: 3,
        title: "Lagaan",
        description: "Set against the backdrop of British colonial rule in India, 'Lagaan' tells the inspiring tale of a group of villagers who challenge their oppressors to a game of cricket to break free from oppressive taxes. A cinematic masterpiece that combines sports, drama, and patriotism.",
        imgUrl: "https://occ-0-1433-2705.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfKqVbdyhVBlw23R5YTnBE00c6KDP0AL_P3tC1zvcQNo8cRZW8_MzkpG67let3gDUHpKvxE8vMGluvoM23QPz4NHvLnPBMNNEw5d.jpg?r=dd5",
        type: "Period Drama, Sports",
        creator: "Aamir Khan Productions",
        tags: ['Colonial India', 'Cricket', 'Resistance', 'Patriotism']
      },
      {
        id: 4,
        title: "Dangal",
        description: "A biographical sports drama based on the life of Mahavir Singh Phogat, who trained his daughters Geeta and Babita to become world-class wrestlers against societal norms. 'Dangal' is a powerful story of determination, gender equality, and triumph over adversity.",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_FMjpg_UX1000_.jpg",
        type: "Biography, Sports",
        creator: "Walt Disney Pictures",
        tags: ['Wrestling', 'family', 'inspiration']
      },
      {
        id: 5,
        title: "Stranger Things",
        description: "In the 1980s, a group of kids in Hawkins, Indiana, encounters supernatural forces and government experiments when a young boy goes missing. 'Stranger Things' is a nostalgic sci-fi thriller with a mix of mystery, horror, and friendship.",
        imgUrl: "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==",
        type: "Sci-Fi, Horror, Mystery",
        creator: "The Duffer Brothers",
        tags: ['Upside Down', 'friendship', 'mystery']
      },
      {
        id: 6,
        title: "Planet Earth II",
        description: "Narrated by Sir David Attenborough, 'Planet Earth II' takes viewers on a breathtaking journey to explore the diverse habitats of our planet, showcasing the incredible wildlife and the challenges they face in urban environments, mountains, jungles, and more.",
        imgUrl: "https://m.media-amazon.com/images/M/MV5BMGZmYmQ5NGQtNWQ1MC00NWZlLTg0MjYtYjJjMzQ5ODgxYzRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        type: "Documentary, Nature",
        creator: "BBC Natural History Unit",
        tags: ['Wildlife', 'nature', 'environment']
      }
    ];
  }
}
