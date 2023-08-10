export class ReceiveZeevDataService {
  async execute(title: string, userId: number) {
    const teste = { title, userId };

    console.log(title, userId);

    return teste;
  }
}
