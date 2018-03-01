import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  newEn = '';
  newVn = '';
  isShow = false;
  filterStatus = "SEE_ALL"
  arrWords = [
    {id: 1, en:'action', vn:'hành động', memorized:true},
    {id: 2, en:'actor', vn:'dien vien', memorized:false},
    {id: 3, en:'active', vn:'chủ động', memorized:true},
];

  constructor() { }

  ngOnInit() {
  }

  addWord() {
    //add to the first array
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en:this.newEn,
      vn: this.newVn,
      memorized: false
    });
    //reset
    this.newEn = '';
    this.newVn = '';
    this.isShow = false;
  }

  delWord(id:number) {
    const findId = this.arrWords.findIndex(word => word.id===id  );
   //use splice to remove
    this.arrWords.splice(findId,1);
  }

  showStatus(memorized:boolean) {
    const see_all = this.filterStatus==="SEE_ALL";
    const seen_words = this.filterStatus==="SEEN_WORDS" && memorized;
    const unseen_words = this.filterStatus==="UNSEEN_WORDS" && !memorized;
    return see_all || seen_words || unseen_words;
  }
}
