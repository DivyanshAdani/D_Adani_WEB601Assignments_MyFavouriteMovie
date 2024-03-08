import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import {ContentCardComponent} from '../content-card/content-card.component';
import {FilterTypePipe} from '../filter-type.pipe';
import {CreateContentComponent} from '../create-content/create-content.component';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, FilterTypePipe, FormsModule, CreateContentComponent],
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentArray: Content[] = [
    {id: 1,
      title: "Chak De! India",
      description: "Experience the heart-pounding journey of a former hockey player turned coach who leads the Indian women's hockey team to unprecedented glory. The film explores themes of passion, teamwork, and the relentless pursuit of excellence.",
      imgURL: "https://static.toiimg.com/photo/39823548.cms",
      creator: "Yash Raj Films",
      tags: ['Hockey, Teamwork, Excellence'],
      type: "Sports"
    },
    {
      id: 2,
      title: "Dil Chahta Hai",
      description: "Embark on a nostalgic ride through friendship, love, and self-discovery as three inseparable childhood friends navigate the ups and downs of life. This coming-of-age Bollywood classic captures the essence of youth and enduring bonds.",
      imgURL: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/dil_chahta_hai_main.jpeg?VersionId=XVomON7.AFqMt0psfjXnvmkaRFTQ6hyL&size=690:388",
      creator: "Excel Entertainment",
      tags: ['Friendship', 'Love', 'Self-discovery'],
      type: "Comedy"
    },
    {
      id: 3,
        title: "Lagaan",
        description: "Set against the backdrop of British colonial rule in India, 'Lagaan' tells the inspiring tale of a group of villagers who challenge their oppressors to a game of cricket to break free from oppressive taxes. A cinematic masterpiece that combines sports, drama, and patriotism.",
        imgURL: "https://occ-0-1433-2705.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfKqVbdyhVBlw23R5YTnBE00c6KDP0AL_P3tC1zvcQNo8cRZW8_MzkpG67let3gDUHpKvxE8vMGluvoM23QPz4NHvLnPBMNNEw5d.jpg?r=dd5",
        creator: "Aamir Khan Productions",
        tags: ['Colonial India', 'Cricket', 'Resistance', 'Patriotism'],
        type: "Sci-Fi", 
    },
    {
      id: 4,
        title: "Dangal",
        description: "A biographical sports drama based on the life of Mahavir Singh Phogat, who trained his daughters Geeta and Babita to become world-class wrestlers against societal norms. 'Dangal' is a powerful story of determination, gender equality, and triumph over adversity.",
        imgURL: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_FMjpg_UX1000_.jpg",
        creator: "Walt Disney Pictures",
        tags: ['Wrestling', 'family', 'inspiration'],
      type: "Motivational", 
    },
    {
      id: 5,
        title: "Stranger Things",
        description: "In the 1980s, a group of kids in Hawkins, Indiana, encounters supernatural forces and government experiments when a young boy goes missing. 'Stranger Things' is a nostalgic sci-fi thriller with a mix of mystery, horror, and friendship.",
        imgURL: "https://resizing.flixster.com/0xxuABVVuzJrUT130WFHKE-irEg=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzUyMTFhOTktZTU4Ni00ODkyLWJlYjQtZTgxYTllZmU2OGM0LmpwZw==",
        creator: "The Duffer Brothers",
        tags: ['Upside Down', 'friendship', 'mystery'],
      type: "Sci-fi", 
    },
    {
      id: 6,
        title: "Planet Earth II",
        description: "Narrated by Sir David Attenborough, 'Planet Earth II' takes viewers on a breathtaking journey to explore the diverse habitats of our planet, showcasing the incredible wildlife and the challenges they face in urban environments, mountains, jungles, and more.",
        imgURL: "https://m.media-amazon.com/images/M/MV5BMGZmYmQ5NGQtNWQ1MC00NWZlLTg0MjYtYjJjMzQ5ODgxYzRkXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
        creator: "BBC Natural History Unit",
        tags: ['Wildlife', 'nature', 'environment'],type: "Thriller", 
    },
    {
      id: 7,
        title: "Our Planet",
        description: "Narrated by David Attenborough, 'Our Planet' is a groundbreaking documentary series that showcases the natural beauty of Earth while also addressing the pressing issues threatening its future. From the depths of the oceans to the vastness of the jungles, witness the wonders of our planet and learn about the urgent need for conservation.",
        imgURL: "https://m.media-amazon.com/images/M/MV5BZmM2OWEyN2EtZWY2NS00ZDA3LWFlNTAtNzUzMGQwZWVlZmE4XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        creator: "Silverback Films",
        tags: ["Conservation", "wildlife", "environment"],
      type: "Drama", 
    },
    {
      id: 8, 
      title: "Blue Planet II", 
      description: "Narrated by Sir David Attenborough, 'Blue Planet II' delves into the depths of the world's oceans, exploring their wonders and mysteries. From vibrant coral reefs to the darkest abyss, this documentary series reveals the astonishing diversity of marine life and the interconnectedness of ocean ecosystems.", 
      creator: "BBC Natural History Unit", 
      imgURL: "https://m.media-amazon.com/images/I/81UvcPHNEPL._AC_UF1000,1000_QL80_.jpg", 
      tags: ["Ocean", "Marine Life", "Ecosystems"]
    },
  ];

  filterContent: Content[] = [];
  title:string = '';
  message: string = '';
  isFound: boolean = false;

  checkTitle(){
    this.filterContent = this.contentArray.filter(item => item.title.toLowerCase() === this.title.toLowerCase());

    this.isFound = this.filterContent.length > 0;
    
    this.message = this.isFound ? `Content with title '${this.title}' found.` : `Content with title '${this.title}' not found.`;
  }

    //Method to handle the submission of new content items; param of type 'Content'
    handleContentSubmission(newContent: Content) {
    //Ensuring id is a number
    newContent.id = Number(newContent.id);
    //Not working - this.contentArray.push(newContent);
    
    //Creates a new array by taking the existing contentArray into a new one
    //Then it appends the newContent object to the new array
    this.contentArray = [...this.contentArray, newContent];

    //Debug
    console.log(this.contentArray)
    //output title of new content item
    console.log("Success! New content added: ", newContent.title)
  }


  constructor(){

  }
}
