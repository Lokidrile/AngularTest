import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalTvShow } from 'src/shared/models/tv-shows.model';

@Component({
  selector: 'app-show-detail-modal',
  templateUrl: './show-detail-modal.component.html',
  styleUrls: ['./show-detail-modal.component.scss']
})
export class ShowDetailModalComponent implements OnInit {

  @Input() 
  public modalData!: ModalTvShow;
  public imbdLink!: string; 
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.imbdLink = `https://www.imdb.com/title/${this.modalData.imbdLink.toLocaleLowerCase()}`;
  }

}
