import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  isModalOpen = false;
  selectedImageSrc = '';

  openModal(imageSrc: string): void {
    this.selectedImageSrc = imageSrc;
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedImageSrc = '';
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('lightbox-overlay')) {
      this.closeModal();
    }
  }
}
