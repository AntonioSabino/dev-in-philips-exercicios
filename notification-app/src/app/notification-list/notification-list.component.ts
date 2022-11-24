import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss'],
})
export class NotificationListComponent {
  notifications = [
    {
      title: 'Notification 1',
      subtitle: 'This is the first notification',
      date: '24/11/2022',
      read: false,
    },
    {
      title: 'Notification 2',
      subtitle: 'This is the second notification',
      date: '24/11/2022',
      read: false,
    },
    {
      title: 'Notification 3',
      subtitle: 'This is the third notification',
      date: '24/11/2022',
      read: false,
    },
    {
      title: 'Notification 4',
      subtitle: 'This is the fourth notification',
      date: '24/11/2022',
      read: false,
    },
    {
      title: 'Notification 5',
      subtitle: 'This is the fifth notification',
      date: '24/11/2022',
      read: false,
    },
  ];

  makeRead(notification: { read: boolean; }) {
    notification.read = true;
  }
}
