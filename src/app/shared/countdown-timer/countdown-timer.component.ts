import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  standalone: true,
  imports: [],
  templateUrl: './countdown-timer.component.html',
  styleUrl: './countdown-timer.component.scss'
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  // The target date (set your target date here)
  targetDate: Date = new Date('2025-12-31T00:00:00'); // Example: New Year's Eve 2025
  timeLeft: { days: number, hours: number, minutes: number, seconds: number } = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  private timer: any;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  // Function to start the countdown
  startCountdown() {
    this.timer = setInterval(() => {
      this.updateTimeLeft();
    }, 1000); // Update every second
  }

  // Function to update the time left
  updateTimeLeft() {
    const currentTime = new Date();
    const timeDifference = this.targetDate.getTime() - currentTime.getTime();

    if (timeDifference <= 0) {
      clearInterval(this.timer);
      this.timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      console.log('Countdown finished!');
      return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    this.timeLeft = { days, hours, minutes, seconds };
  }
}
