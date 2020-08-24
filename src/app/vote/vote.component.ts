import { Component, OnInit , Input,Output, EventEmitter} from '@angular/core';
import {Qoute} from '../qoute'

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Output() isComplete = new EventEmitter<boolean>();//listens to button click to display results
//starting point for votes in two variables with 0 as default
@Input() userId;
@Input() itemId;

voteCount: number = 0;
userVote: number = 0;

subscription;

constructor(private upvoteService: UpvoteService) { }

ngOnInit() {
  this.subscription = this.upvoteService.getItemVotes(this.itemId)
                    .subscribe(upvotes => {
                      if (this.userId) this.userVote = upvotes[this.userId]
                      this.voteCount = sum(values(upvotes))
                    })
}

upvote() {
  let vote = this.userVote == 1 ? 0 : 1
  this.upvoteService.updateUserVote(this.itemId, this.userId, vote)
}

downvote() {
  let vote = this.userVote == -1 ? 0 : -1
  this.upvoteService.updateUserVote(this.itemId, this.userId, vote)
}

ngOnDestroy() {
  this.subscription.unsubscribe()
}
}