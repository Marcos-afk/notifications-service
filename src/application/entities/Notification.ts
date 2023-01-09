import { randomUUID } from 'crypto';
import { Replace } from '@helpers/Replace';
import { Content } from './Content';

interface NotificationProps {
  recipient_id: string;
  content: Content;
  category: string;
  read_at?: Date | null;
  created_at: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(props: Replace<NotificationProps, { created_at?: Date }>) {
    this._id = randomUUID();
    this.props = { ...props, created_at: props.created_at ?? new Date() };
  }

  public get id(): string {
    return this._id;
  }

  public set recipientId(recipient_id: string) {
    this.props.recipient_id = recipient_id;
  }

  public get recipientId(): string {
    return this.props.recipient_id;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public set readAt(read_at: Date) {
    this.props.read_at = read_at;
  }

  public get readAt(): Date | null | undefined {
    return this.props.read_at;
  }

  public get createdAt(): Date {
    return this.props.created_at;
  }
}
