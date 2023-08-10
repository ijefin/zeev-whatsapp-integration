export class ReceiveZeevDataService {
  async execute(title: string, userId: number) {
    const zeevData = { title, userId };

    return zeevData;
  }
}
