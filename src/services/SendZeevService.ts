export class ReceiveNewZeev {
  async execute(title: string, userId: number) {
    const sendZeev = {
      title,
      userId,
    };

    return sendZeev;
  }
}
