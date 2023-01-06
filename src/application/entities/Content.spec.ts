import { Content } from './Content';

describe('Entity Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma nova solicitação de amizade');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a notification content, notification content less than 5 characters', () => {
    expect(() => new Content('A')).toThrow(Error);
  });

  it('should not be able to create a notification content, notification content longer than 240 characters', () => {
    expect(() => new Content('A'.repeat(241))).toThrow(Error);
  });
});
